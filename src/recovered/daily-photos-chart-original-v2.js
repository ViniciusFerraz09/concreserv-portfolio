import { r as React, j as ui, s as db } from "./app-chart-original-v2.js";
const BUCKET = "daily-entry-photos";

async function prepareImage(file) {
  if (file.size > 25 * 1024 * 1024)
    throw new Error("Cada imagem original pode ter até 25 MB.");
  if (
    !/^image\/(jpeg|png|webp|heic|heif)$/i.test(file.type) &&
    !(file.type === "" && /\.(jpe?g|png|webp|heic|heif)$/i.test(file.name))
  )
    throw new Error("Escolha fotos em JPG, PNG, WebP ou HEIC.");
  let image, originalUrl;
  try {
    try {
      image = await createImageBitmap(file, { imageOrientation: "from-image" });
    } catch {
      originalUrl = URL.createObjectURL(file);
      image = await new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = originalUrl;
      });
    }
    const width = image.width || image.naturalWidth,
      height = image.height || image.naturalHeight;
    if (!width || !height) throw new Error("Invalid dimensions");
    const scale = Math.min(1, 1920 / Math.max(width, height)),
      canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(width * scale));
    canvas.height = Math.max(1, Math.round(height * scale));
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Canvas unavailable");
    context.fillStyle = "#fff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", 0.85),
    );
    if (!blob || blob.size > 8 * 1024 * 1024)
      throw new Error("Imagem muito grande.");
    return blob;
  } catch {
    throw new Error(
      "Não foi possível preparar esta foto. Tente uma imagem JPG ou PNG.",
    );
  } finally {
    image?.close?.();
    if (originalUrl) URL.revokeObjectURL(originalUrl);
  }
}

function PhotoPreview({ photo, index }) {
  const [url, setUrl] = React.useState(photo.preview || "");
  React.useEffect(() => {
    let active = true;
    if (photo.preview) {
      setUrl(photo.preview);
      return;
    }
    db.storage
      .from(BUCKET)
      .createSignedUrl(photo.object_path, 300)
      .then(({ data }) => {
        if (active) setUrl(data?.signedUrl || "");
      });
    return () => {
      active = false;
    };
  }, [photo.preview, photo.object_path]);
  return url
    ? ui.jsx("img", {
        src: url,
        alt: `Imagem ${index + 1}`,
        loading: "lazy",
      })
    : ui.jsx("span", { children: "Carregando foto…" });
}

export function DailyPhotoEditor({
  photos,
  onChange,
  onBusy,
  disabled,
  legacy = false,
}) {
  const filesInput = React.useRef(null),
    cameraInput = React.useRef(null),
    lock = React.useRef(false),
    active = React.useRef(true),
    urls = React.useRef(new Set()),
    [busy, setBusy] = React.useState(false),
    [error, setError] = React.useState("");
  React.useEffect(() => {
    active.current = true;
    return () => {
      active.current = false;
      for (const url of urls.current) URL.revokeObjectURL(url);
    };
  }, []);
  async function selected(event) {
    const files = [...(event.target.files || [])];
    event.target.value = "";
    if (!files.length || lock.current) return;
    if (photos.length + files.length > 2) {
      setError(
        "O máximo é de 2 fotos. Remova uma imagem antes de escolher outra.",
      );
      return;
    }
    lock.current = true;
    setBusy(true);
    onBusy(true);
    setError("");
    const additions = [];
    try {
      for (const file of files) {
        const blob = await prepareImage(file),
          preview = URL.createObjectURL(blob);
        urls.current.add(preview);
        additions.push({
          key: crypto.randomUUID(),
          file: blob,
          preview,
          originalName: file.name,
        });
      }
      if (active.current) onChange([...photos, ...additions]);
      else
        for (const item of additions) {
          URL.revokeObjectURL(item.preview);
          urls.current.delete(item.preview);
        }
    } catch (failure) {
      for (const item of additions) {
        URL.revokeObjectURL(item.preview);
        urls.current.delete(item.preview);
      }
      if (active.current) setError(failure.message);
    } finally {
      lock.current = false;
      if (active.current) {
        setBusy(false);
        onBusy(false);
      }
    }
  }
  const blocked = disabled || busy;
  return ui.jsxs("section", {
    className: "daily-photos-editor",
    "aria-label": "Fotos do lançamento",
    children: [
      ui.jsxs("div", {
        className: "photo-section-heading",
        children: [
          ui.jsx("h3", { children: "Fotos da obra" }),
          ui.jsx("span", {
            role: "status",
            children: `${photos.length} de 2 fotos`,
          }),
        ],
      }),
      ui.jsx("p", {
        children:
          legacy && photos.length === 0
            ? "Este registro antigo não tinha fotos. Para anexá-las agora, selecione duas imagens."
            : "Envie exatamente 2 fotos. Você pode anexar arquivos, usar a câmera ou combinar as duas opções.",
      }),
      ui.jsx("input", {
        ref: filesInput,
        type: "file",
        accept: "image/jpeg,image/png,image/webp,image/heic,image/heif",
        multiple: true,
        hidden: true,
        "aria-label": "Anexar fotos da obra",
        onChange: selected,
        disabled: blocked,
      }),
      ui.jsx("input", {
        ref: cameraInput,
        type: "file",
        accept: "image/*",
        capture: "environment",
        hidden: true,
        "aria-label": "Tirar foto da obra",
        onChange: selected,
        disabled: blocked,
      }),
      ui.jsxs("div", {
        className: "photo-picker-actions",
        children: [
          ui.jsx("button", {
            type: "button",
            className: "button secondary",
            disabled: blocked || photos.length >= 2,
            onClick: () => filesInput.current.click(),
            children: "Anexar fotos",
          }),
          ui.jsx("button", {
            type: "button",
            className: "button secondary",
            disabled: blocked || photos.length >= 2,
            onClick: () => cameraInput.current.click(),
            children: "Tirar foto",
          }),
          ui.jsx("button", {type:"button",className:"button secondary",disabled:blocked||photos.length>0,onClick:async()=>{setBusy(true);onBusy(true);setError("");try{const additions=await Promise.all([1,2].map(async index=>{const response=await fetch(`/demo-photos/example-${index}.png`);if(!response.ok)throw Error();const file=await response.blob(),preview=URL.createObjectURL(file);urls.current.add(preview);return {key:crypto.randomUUID(),file,preview,originalName:`Exemplo fictício ${index}`}}));if(active.current)onChange(additions)}catch{setError("Não foi possível abrir os exemplos.")}finally{setBusy(false);onBusy(false)}},children:"Usar imagens de exemplo"}),
        ],
      }),
      ui.jsx("div", {
        className: "daily-photo-grid",
        children: photos.map((photo, index) =>
          ui.jsxs(
            "figure",
            {
              children: [
                ui.jsx(PhotoPreview, { photo, index }),
                ui.jsxs("figcaption", {
                  children: [
                    ui.jsx("span", { children: `Imagem ${index + 1}` }),
                    ui.jsx("button", {
                      type: "button",
                      className: "text-button",
                      disabled: blocked,
                      "aria-label": `Remover foto ${index + 1}`,
                      onClick: () => {
                        if (photo.preview) {
                          URL.revokeObjectURL(photo.preview);
                          urls.current.delete(photo.preview);
                        }
                        onChange(photos.filter((_, at) => at !== index));
                        setError("");
                      },
                      children: "Remover",
                    }),
                  ],
                }),
              ],
            },
            photo.key || photo.object_path,
          ),
        ),
      }),
      busy && ui.jsx("p", { role: "status", children: "Preparando foto…" }),
      error &&
        ui.jsx("p", { role: "alert", className: "error", children: error }),
    ],
  });
}

export function EntryPhotoGallery({ photos }) {
  const [urls, setUrls] = React.useState([]),
    [error, setError] = React.useState(""),
    [reload, setReload] = React.useState(0);
  const paths = photos.map((photo) => photo.object_path),
    dependency = JSON.stringify(paths);
  React.useEffect(() => {
    let active = true;
    setError("");
    setUrls([]);
    if (!paths.length) return;
    db.storage
      .from(BUCKET)
      .createSignedUrls(paths, 300)
      .then(({ data, error: failure }) => {
        if (!active) return;
        if (failure || !data?.every((photo) => photo.signedUrl))
          setError("Não foi possível carregar as fotos.");
        else setUrls(data.map((photo) => photo.signedUrl));
      });
    return () => {
      active = false;
    };
  }, [dependency, reload]);
  return ui.jsxs("section", {
    className: "entry-photo-gallery",
    "aria-label": "Fotos registradas",
    children: [
      ui.jsx("h3", { children: "Fotos do lançamento" }),
      !photos.length
        ? ui.jsx("p", { children: "Este lançamento antigo não possui fotos." })
        : error
          ? ui.jsxs("div", {
              children: [
                ui.jsx("p", { role: "alert", children: error }),
                ui.jsx("button", {
                  type: "button",
                  className: "button secondary",
                  onClick: () => setReload((value) => value + 1),
                  children: "Carregar fotos novamente",
                }),
              ],
            })
          : ui.jsx("div", {
              className: "daily-photo-grid",
              children: urls.length
                ? urls.map((url, index) =>
                    ui.jsxs(
                      "figure",
                      {
                        children: [
                          ui.jsx("a", {
                            href: url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": `Abrir Imagem ${index + 1}`,
                            children: ui.jsx("img", {
                              src: url,
                              alt: `Imagem ${index + 1}`,
                              loading: "lazy",
                            }),
                          }),
                          ui.jsx("figcaption", {
                            children: `Imagem ${index + 1}`,
                          }),
                        ],
                      },
                      index,
                    ),
                  )
                : ui.jsx("p", {
                    role: "status",
                    children: "Carregando fotos…",
                  }),
            }),
    ],
  });
}

export async function flushDeletedPhotos(client) {
  try {
    const pending = await client.rpc("cc_pending_photo_deletions");
    if (pending.error || !Array.isArray(pending.data) || !pending.data.length)
      return;
    const removed = await client.storage.from(BUCKET).remove(pending.data);
    if (!removed.error)
      await client.rpc("cc_ack_photo_deletions", { p_paths: pending.data });
  } catch {
    /* A durable queue allows a later retry without affecting the saved entry. */
  }
}

export async function saveEntryWithPhotos(
  client,
  workId,
  entryId,
  entry,
  photos,
) {
  const uploaded = [],
    paths = [];
  try {
    for (const photo of photos) {
      if (!photo.file) {
        paths.push(photo.object_path);
        continue;
      }
      const path = `${workId}/${entryId}/${crypto.randomUUID()}.jpg`;
      const result = await client.storage
        .from(BUCKET)
        .upload(path, photo.file, {
          contentType: "image/jpeg",
          upsert: false,
          cacheControl: "300",
        });
      if (result.error)
        throw new Error(
          "Não foi possível enviar uma das fotos. Tente salvar novamente.",
        );
      uploaded.push(path);
      paths.push(path);
    }
    const saved = await client.rpc("cc_save_daily_entry", {
      p_work: workId,
      p_id: entryId,
      p_entry: entry,
      p_photo_paths: paths,
    });
    if (saved.error)
      throw new Error(
        saved.error.message || "Não foi possível salvar o lançamento.",
      );
    if (!saved.data?.id)
      throw new Error(
        "Não foi possível confirmar o lançamento. Tente salvar novamente.",
      );
    await flushDeletedPhotos(client);
    return saved.data;
  } catch (error) {
    if (uploaded.length) {
      try {
        await client.storage.from(BUCKET).remove(uploaded);
      } catch {}
    }
    throw error;
  }
}
