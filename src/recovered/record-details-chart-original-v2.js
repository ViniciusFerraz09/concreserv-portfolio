// Present business data only. Internal IDs and storage paths never belong in a record sheet.
const states = {
  inspecao: "Aguardando inspeção",
  aprovado: "Aprovadas, não liberadas",
  liberado: "Liberadas na fábrica",
  retrabalho: "Aguardando retrabalho",
  reinspecao: "Retrabalhadas em reinspeção",
  rejeitado: "Rejeitadas",
  campo: "Disponíveis em campo",
  instalado: "Instaladas",
};
const labels = {
  date: "Data",
  work_name: "Obra",
  name: "Nome",
  code: "Código",
  activity: "Serviço",
  stage: "Frente de serviço",
  type_name: "Tipo de peça",
  front_name: "Trecho da obra",
  team_name: "Equipe responsável",
  lot_code: "Lote",
  quantity: "Produção realizada",
  target: "Meta diária",
  daily_target: "Meta diária prevista",
  total: "Total previsto",
  accumulated: "Produção acumulada",
  balance: "Saldo a executar",
  achievement: "Cumprimento da meta",
  progress: "Avanço",
  headcount: "Efetivo",
  normal_hours: "Horas normais por pessoa",
  extra_hours: "Horas extras por pessoa",
  hh: "Total de homem-hora",
  productivity: "Produtividade",
  volume: "Volume de concreto",
  interference: "Interferência ou paralisação",
  notes: "Observações",
  unit: "Unidade",
  weight: "Peso no avanço físico",
  leader: "Líder da equipe",
  category: "Categoria",
  dimension: "Dimensão",
  requires_volume: "Exige volume de concreto",
  client: "Cliente",
  location: "Localização",
  start_date: "Início previsto",
  end_date: "Término previsto",
  status: "Situação",
  cast_date: "Data de concretagem",
  source: "Origem",
  destination: "Destino",
  responsible: "Responsável",
  sent: "Enviadas para o campo",
  reworked: "Retrabalhadas",
  created_at: "Cadastrado em",
  updated_at: "Atualizado em",
  action: "Ação",
  module_label: "Área",
  actor_label: "Responsável",
  at: "Data e hora",
  before_data: "Antes da alteração",
  after_data: "Depois da alteração",
  role: "Perfil",
  full_name: "Nome completo",
  email: "E-mail",
  phone: "Telefone",
  company: "Empresa",
  ...states,
};
const numbers = new Set([
  "quantity",
  "target",
  "daily_target",
  "total",
  "accumulated",
  "balance",
]);
const dates = new Set(["date", "start_date", "end_date", "cast_date"]);
const timestamps = new Set(["at", "created_at", "updated_at"]);
const formatNumber = (value, digits = 2) =>
  new Intl.NumberFormat("pt-BR", { maximumFractionDigits: digits }).format(
    Number(value),
  );
const find = (data, table, id) => data[table]?.find((item) => item.id === id);
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function recordFields(record, data = {}, kind = "") {
  if (!record || typeof record !== "object") return [];
  const row = { ...record },
    plan = find(data, "plans", row.plan_id),
    service = find(data, "services", row.service_id || plan?.service_id),
    lot = find(data, "lots", row.lot_id),
    type = find(data, "types", row.type_id || plan?.type_id || lot?.type_id),
    front = find(data, "fronts", row.front_id || plan?.front_id),
    team = find(data, "teams", row.team_id || plan?.team_id),
    work = find(data, "works", row.work_id),
    unit = row.unit || service?.unit || "un";
  if (work) row.work_name = work.name;
  if (service) {
    row.activity = service.name;
    row.stage = service.stage;
    row.unit = service.unit;
  }
  if (type) row.type_name = type.name;
  if (front) row.front_name = front.name;
  if (team) row.team_name = team.name;
  if (lot) row.lot_code = lot.code;
  // A reference may outlive a removed supporting record, especially in the audit history.
  for (const [reference, key, fallback] of [
    [row.plan_id, "activity", "Serviço não disponível"],
    [row.service_id, "activity", "Serviço não disponível"],
    [row.type_id || plan?.type_id, "type_name", "Tipo não disponível"],
    [row.front_id || plan?.front_id, "front_name", "Trecho não disponível"],
    [row.team_id, "team_name", "Equipe não disponível"],
    [row.lot_id, "lot_code", "Lote não disponível"],
  ])
    if (reference && !row[key]) row[key] = fallback;
  const fields = [];
  for (const [key, label] of Object.entries(labels)) {
    if (!(key in row)) continue;
    let value = row[key];
    if (["before_data", "after_data"].includes(key)) {
      fields.push({
        label,
        children: recordFields(value, data, kind),
        value: value
          ? "Nenhum dado de negócio disponível."
          : key === "before_data"
            ? "O registro ainda não existia."
            : "O registro foi excluído.",
      });
      continue;
    }
    if (value === null || value === undefined || value === "")
      value = "Não informado";
    else if (typeof value === "boolean" || key === "requires_volume")
      value = value === true || value === "true" ? "Sim" : "Não";
    else if (dates.has(key)) {
      const date = new Date(String(value).slice(0, 10) + "T12:00:00");
      value = Number.isNaN(date.getTime())
        ? "Não informado"
        : date.toLocaleDateString("pt-BR");
    } else if (timestamps.has(key)) {
      const date = new Date(value);
      value = Number.isNaN(date.getTime())
        ? "Não informado"
        : date.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    } else if (numbers.has(key)) value = `${formatNumber(value)} ${unit}`;
    else if (["achievement", "progress"].includes(key))
      value = `${formatNumber(value, 1)}%`;
    else if (["normal_hours", "extra_hours", "hh"].includes(key))
      value = `${formatNumber(value)} h`;
    else if (key === "productivity")
      value = `${formatNumber(value, 3)} ${unit}/homem-hora`;
    else if (key === "volume") value = `${formatNumber(value)} m³`;
    else if (key === "headcount")
      value = `${formatNumber(value, 0)} colaborador${Number(value) === 1 ? "" : "es"}`;
    else if ([...Object.keys(states), "sent", "reworked"].includes(key))
      value = `${formatNumber(value)} peças`;
    else if (["source", "destination"].includes(key))
      value =
        states[value] ||
        (value === "producao" || value === "fabricacao"
          ? "Fabricação"
          : "Não informado");
    else if (key === "action")
      value =
        { INSERT: "Cadastro", UPDATE: "Atualização", DELETE: "Exclusão" }[
          value
        ] || value;
    else if (key === "role")
      value =
        {
          owner: "Administrador principal",
          moderator: "Moderador",
          admin: "Administrador da obra",
          analyst: "Analista",
        }[value] || "Analista";
    else if (typeof value === "number") value = formatNumber(value);
    else if (typeof value !== "string" || uuid.test(value)) continue;
    fields.push({
      label:
        key === "quantity" && (kind === "lots" || row.cast_date)
          ? "Peças produzidas"
          : label,
      value: String(value),
    });
  }
  // Traceability summaries already have readable Portuguese labels. Never render arbitrary database keys.
  for (const [label, value] of Object.entries(row)) {
    if (
      label in labels ||
      /_|\bid\b|identificador|registro$/i.test(label) ||
      !/^[A-ZÁÉÍÓÚÂÊÔÃÕÇ]/.test(label)
    )
      continue;
    if (
      (typeof value === "string" && !uuid.test(value)) ||
      typeof value === "number" ||
      typeof value === "boolean" ||
      value === null
    )
      fields.push({
        label,
        value:
          value === null || value === ""
            ? "Não informado"
            : typeof value === "boolean"
              ? value
                ? "Sim"
                : "Não"
              : typeof value === "number"
                ? formatNumber(value)
                : value,
      });
  }
  return fields;
}
