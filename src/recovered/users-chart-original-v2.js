import {
  r,
  j as e,
  R as se,
  C as ae,
  S as re,
  f as I,
  L as Q,
  a as k,
  T as ie,
  B as Z,
  E as te,
  U as ne,
  b as le,
  c as oe,
  M as de,
  s as G,
} from "./app-chart-original-v2.js";
const h = 25;
const roleLabels = {
  owner: "Administrador principal",
  moderator: "Moderador",
  admin: "Administrador de obra",
  analyst: "Analista",
};

function w(t) {
  if (!t) return "Ainda não acessou";
  const l = new Date(t);
  return Number.isNaN(l.getTime())
    ? "—"
    : new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Sao_Paulo",
      }).format(l);
}
function H(t, l) {
  const c = t;
  return c?.code === "42501" ||
    /permiss|autoriz|access denied/i.test(c?.message || "")
    ? l === "list"
      ? "Seu acesso não permite consultar os usuários. Entre com uma conta administradora autorizada."
      : "Seu acesso não permite alterar essas obras."
    : l === "save" && /confirm/i.test(c?.message || "")
      ? "O usuário precisa confirmar o e-mail antes de receber acesso."
      : l === "save" && /administrador|admin/i.test(c?.message || "")
        ? "Os acessos de administradores serão configurados separadamente."
        : l === "list"
          ? "Não foi possível carregar os usuários. Tente novamente."
          : "Não foi possível salvar os acessos. Tente novamente.";
}
function me({ works: t, permissions = null }) {
  const [selectedRole, setSelectedRole] = r.useState("analyst");
  const canEditAccess = permissions?.can_edit_user_access === true;
  const [l, c] = r.useState(""),
    [C, J] = r.useState(""),
    [f, K] = r.useState("all"),
    [o, x] = r.useState(0),
    [W, y] = r.useState(0),
    [z, O] = r.useState([]),
    [m, X] = r.useState(0),
    [d, M] = r.useState(!0),
    [b, R] = r.useState(""),
    [P, F] = r.useState(""),
    [a, A] = r.useState(null),
    [E, q] = r.useState(new Set()),
    [v, B] = r.useState(!1),
    [D, g] = r.useState(""),
    j = r.useRef(!0),
    N = r.useRef(!1);
  (r.useEffect(
    () => (
      (j.current = !0),
      () => {
        j.current = !1;
      }
    ),
    [],
  ),
    r.useEffect(() => {
      const s = setTimeout(() => {
        (J(l.trim()), x(0));
      }, 300);
      return () => clearTimeout(s);
    }, [l]),
    r.useEffect(() => {
      let s = !0;
      (M(!0), R(""));
      async function i() {
        try {
          const { data: n, error: S } = await G.rpc("cc_list_users", {
            p_search: C,
            p_status: f,
            p_limit: h,
            p_offset: o * h,
          });
          if (S) throw S;
          if (
            !n ||
            !Array.isArray(n.users) ||
            !Number.isFinite(Number(n.total))
          )
            throw new Error("Resposta incompleta");
          if (!s) return;
          (O(n.users), X(Number(n.total)));
          const u = Math.max(0, Math.ceil(Number(n.total) / h) - 1);
          o > u && x(u);
        } catch (n) {
          s && (O([]), R(H(n, "list")));
        } finally {
          s && M(!1);
        }
      }
      return (
        i(),
        () => {
          s = !1;
        }
      );
    }, [C, f, o, W]));
  const L = Math.max(1, Math.ceil(m / h)),
    T = new Set((a?.memberships || []).map((s) => s.work_id)),
    _ = t.filter((s) => E.has(s.id) && !T.has(s.id)).map((s) => String(s.id)),
    U = t.filter((s) => !E.has(s.id) && T.has(s.id)).map((s) => String(s.id)),
    p = !!a && a.role === "analyst",
    V = _.length + U.length > 0;
  function Y(s) {
    setSelectedRole(s.role === "moderator" ? "moderator" : "analyst");
    (A(s),
      q(
        new Set(
          (s.memberships || [])
            .filter((i) => t.some((n) => n.id === i.work_id))
            .map((i) => i.work_id),
        ),
      ),
      g(""));
  }
  function $() {
    N.current || A(null);
  }
  async function ee() {
    if (!(!a || !p || !V || !canEditAccess || N.current)) {
      if (!a.email_confirmed && _.length) {
        g("O usuário precisa confirmar o e-mail antes de receber acesso.");
        return;
      }
      ((N.current = !0), B(!0), g(""));
      try {
        const { error: s } = await G.rpc("cc_update_analyst_access", {
          p_user: a.id,
          p_grant: _,
          p_revoke: U,
        });
        if (s) throw s;
        if (!j.current) return;
        (A(null),
          F(
            "Acessos atualizados. O analista poderá consultar somente as obras liberadas.",
          ),
          y((i) => i + 1));
      } catch (s) {
        j.current && g(H(s, "save"));
      } finally {
        ((N.current = !1), j.current && B(!1));
      }
    }
  }
  async function saveRole() {
    if (!a || N.current || permissions?.can_set_roles !== true) return;
    N.current = true;
    B(true);
    g("");
    try {
      const result = await G.rpc("cc_set_user_role", {
        p_user: a.id,
        p_role: selectedRole,
      });
      if (result.error) throw result.error;
      if (!j.current) return;
      A(null);
      F("Perfil atualizado. As permissões já estão valendo no sistema.");
      y((current) => current + 1);
    } catch (failure) {
      if (j.current) g(failure.message || "Não foi possível alterar o perfil.");
    } finally {
      N.current = false;
      if (j.current) B(false);
    }
  }
  return e.jsxs("section", {
    className: "users-view",
    "aria-label": "Usuários e acessos",
    children: [
      e.jsxs("div", {
        className: "section-line",
        children: [
          e.jsxs("h3", {
            children: [
              "Contas cadastradas",
              e.jsx("span", {
                children:
                  "Todos se cadastram como Analista. Somente contato@example.invalid pode alterar perfis e acessos.",
              }),
            ],
          }),
          e.jsxs("button", {
            className: "button secondary",
            disabled: d,
            onClick: () => y((s) => s + 1),
            children: [
              e.jsx(se, { size: 15, className: d ? "spin" : "" }),
              "Atualizar",
            ],
          }),
        ],
      }),
      P &&
        e.jsxs("div", {
          className: "success users-notice",
          role: "status",
          children: [
            e.jsx(ae, { size: 17 }),
            e.jsx("span", { children: P }),
            e.jsx("button", {
              className: "text-button",
              onClick: () => F(""),
              children: "Fechar",
            }),
          ],
        }),
      e.jsxs("div", {
        className: "table-card",
        "aria-busy": d,
        children: [
          e.jsxs("div", {
            className: "table-toolbar users-toolbar",
            children: [
              e.jsxs("div", {
                className: "search-field",
                children: [
                  e.jsx(re, { size: 17 }),
                  e.jsx("input", {
                    "aria-label": "Buscar usuários por nome ou e-mail",
                    placeholder: "Buscar nome ou e-mail…",
                    maxLength: 200,
                    value: l,
                    onChange: (s) => c(s.target.value),
                  }),
                ],
              }),
              e.jsxs("label", {
                className: "users-status-filter",
                children: [
                  "Confirmação",
                  e.jsxs("select", {
                    "aria-label": "Confirmação de e-mail dos usuários",
                    value: f,
                    onChange: (s) => {
                      (K(s.target.value), x(0));
                    },
                    children: [
                      e.jsx("option", { value: "all", children: "Todas" }),
                      e.jsx("option", {
                        value: "confirmed",
                        children: "E-mail confirmado",
                      }),
                      e.jsx("option", {
                        value: "pending",
                        children: "Confirmação pendente",
                      }),
                    ],
                  }),
                ],
              }),
              !d &&
                !b &&
                e.jsxs("span", {
                  children: [I(m), " ", m === 1 ? "usuário" : "usuários"],
                }),
            ],
          }),
          d
            ? e.jsxs("div", {
                className: "empty users-state",
                role: "status",
                children: [
                  e.jsx(Q, { className: "spin", size: 24 }),
                  e.jsx("p", { children: "Carregando usuários…" }),
                ],
              })
            : b
              ? e.jsxs("div", {
                  className: "empty users-state",
                  role: "alert",
                  children: [
                    e.jsx(k, { size: 25 }),
                    e.jsx("h3", { children: "Não foi possível abrir a lista" }),
                    e.jsx("p", { children: b }),
                    e.jsx("button", {
                      className: "button secondary",
                      onClick: () => y((s) => s + 1),
                      children: "Tentar novamente",
                    }),
                  ],
                })
              : z.length
                ? e.jsx(ie, {
                    label: "Usuários e acessos",
                    children: e.jsxs("table", {
                      className: "users-table responsive-records-table",
                      role: "table",
                      children: [
                        e.jsx("thead", {
                          role: "rowgroup",
                          children: e.jsxs("tr", {
                            role: "row",
                            children: [
                              e.jsx("th", { children: "Nome / e-mail" }),
                              e.jsx("th", { children: "Perfil" }),
                              e.jsx("th", { children: "Confirmação" }),
                              e.jsx("th", {
                                children: "Cadastro / último acesso",
                              }),
                              e.jsx("th", { children: "Acessos" }),
                            ],
                          }),
                        }),
                        e.jsx("tbody", {
                          role: "rowgroup",
                          children: z.map((s) =>
                            e.jsxs(
                              "tr",
                              {
                                role: "row",
                                children: [
                                  e.jsxs("td", {
                                    role: "cell",
                                    "data-label": "Nome / e-mail",
                                    children: [
                                      e.jsx("strong", {
                                        children:
                                          s.full_name || "Nome não informado",
                                      }),
                                      e.jsx("small", { children: s.email }),
                                    ],
                                  }),
                                  e.jsx("td", {
                                    role: "cell",
                                    "data-label": "Perfil",
                                    children: e.jsx(Z, {
                                      tone:
                                        s.role === "owner"
                                          ? "red"
                                          : s.role === "moderator"
                                            ? "green"
                                            : "neutral",
                                      children:
                                        roleLabels[s.role] || "Analista",
                                    }),
                                  }),
                                  e.jsx("td", {
                                    role: "cell",
                                    "data-label": "Confirmação",
                                    children: e.jsx(Z, {
                                      tone: s.email_confirmed
                                        ? "green"
                                        : "amber",
                                      children: s.email_confirmed
                                        ? "Confirmado"
                                        : "Pendente",
                                    }),
                                  }),
                                  e.jsxs("td", {
                                    role: "cell",
                                    "data-label": "Cadastro / último acesso",
                                    children: [
                                      e.jsx("strong", {
                                        children: w(s.created_at),
                                      }),
                                      e.jsxs("small", {
                                        children: [
                                          "Último acesso: ",
                                          w(s.last_sign_in_at),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("td", {
                                    role: "cell",
                                    "data-label": "Acessos",
                                    children: e.jsxs("button", {
                                      className:
                                        "button secondary users-details-button",
                                      onClick: () => Y(s),
                                      children: [
                                        e.jsx(te, { size: 15 }),
                                        s.role !== "analyst"
                                          ? "Ver detalhes"
                                          : "Obras e acessos",
                                      ],
                                    }),
                                  }),
                                ],
                              },
                              s.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  })
                : e.jsxs("div", {
                    className: "empty users-state",
                    children: [
                      e.jsx(ne, { size: 27 }),
                      e.jsx("h3", { children: "Nenhum usuário encontrado" }),
                      e.jsx("p", {
                        children:
                          C || f !== "all"
                            ? "Tente outro nome, e-mail ou confirmação."
                            : "Os novos cadastros aparecerão aqui.",
                      }),
                    ],
                  }),
          !b &&
            e.jsxs("div", {
              className: "pagination",
              children: [
                e.jsxs("span", {
                  children: [
                    !d && m
                      ? `${o * h + 1}–${Math.min(o * h + z.length, m)}`
                      : 0,
                    " de ",
                    I(m),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("button", {
                      disabled: d || o === 0,
                      onClick: () => x((s) => Math.max(0, s - 1)),
                      "aria-label": "Página anterior de usuários",
                      children: e.jsx(le, { size: 16 }),
                    }),
                    e.jsxs("span", { children: ["Página ", o + 1, " de ", L] }),
                    e.jsx("button", {
                      disabled: d || o >= L - 1,
                      onClick: () => x((s) => s + 1),
                      "aria-label": "Próxima página de usuários",
                      children: e.jsx(oe, { size: 16 }),
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
      a &&
        e.jsx(de, {
          title: p ? "Obras e acessos" : "Detalhes do usuário",
          subtitle: a.full_name || a.email,
          onClose: $,
          children: e.jsxs("div", {
            className: "users-detail-content",
            children: [
              e.jsxs("dl", {
                className: "users-person-details",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("dt", { children: "E-mail" }),
                      e.jsx("dd", { children: a.email }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("dt", { children: "Perfil" }),
                      e.jsx("dd", {
                        children:
                          roleLabels[a.role] || "Analista · somente consulta",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("dt", { children: "Empresa" }),
                      e.jsx("dd", { children: a.company || "Não informada" }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("dt", { children: "Telefone" }),
                      e.jsx("dd", { children: a.phone || "Não informado" }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("dt", { children: "Confirmação" }),
                      e.jsx("dd", {
                        children: a.email_confirmed
                          ? "E-mail confirmado"
                          : "Aguardando confirmação do e-mail",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("dt", { children: "Último acesso" }),
                      e.jsx("dd", { children: w(a.last_sign_in_at) }),
                    ],
                  }),
                ],
              }),
              permissions?.can_set_roles === true &&
                a.role !== "owner" &&
                e.jsxs("fieldset", {
                  className: "users-role-editor",
                  disabled: v,
                  children: [
                    e.jsx("legend", { children: "Alterar perfil" }),
                    e.jsxs("label", {
                      className: "users-invite-field",
                      children: [
                        "Perfil do usuário",
                        e.jsxs("select", {
                          value: selectedRole,
                          onChange: (event) =>
                            setSelectedRole(event.target.value),
                          children: [
                            e.jsx("option", {
                              value: "analyst",
                              children: "Analista",
                            }),
                            e.jsx("option", {
                              value: "moderator",
                              children: "Moderador",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      children:
                        "Moderadores gerenciam os registros de todas as obras. Somente contato@example.invalid pode definir perfis e acessos dos usuários.",
                    }),
                    e.jsx("button", {
                      type: "button",
                      className: "button primary",
                      disabled: v || selectedRole === a.role,
                      onClick: saveRole,
                      children: "Salvar perfil",
                    }),
                  ],
                }),
              p
                ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsxs("fieldset", {
                        className: "users-work-list",
                        disabled: v || !canEditAccess,
                        children: [
                          e.jsx("legend", {
                            children: "Obras liberadas para consulta",
                          }),
                          e.jsx("p", {
                            children:
                              "Marque as obras que este analista poderá acompanhar.",
                          }),
                          !a.email_confirmed &&
                            e.jsxs("div", {
                              className: "form-note",
                              children: [
                                e.jsx(k, { size: 17 }),
                                "O e-mail precisa ser confirmado antes de liberar novas obras.",
                              ],
                            }),
                          t.length
                            ? t.map((s) =>
                                e.jsxs(
                                  "label",
                                  {
                                    children: [
                                      e.jsx("input", {
                                        type: "checkbox",
                                        checked: E.has(s.id),
                                        disabled:
                                          !a.email_confirmed && !T.has(s.id),
                                        onChange: (i) => {
                                          const n = i.target.checked;
                                          q((S) => {
                                            const u = new Set(S);
                                            return (
                                              n ? u.add(s.id) : u.delete(s.id),
                                              u
                                            );
                                          });
                                        },
                                      }),
                                      e.jsxs("span", {
                                        children: [
                                          e.jsx("strong", { children: s.name }),
                                          s.location &&
                                            e.jsx("small", {
                                              children: s.location,
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                  s.id,
                                ),
                              )
                            : e.jsx("p", {
                                className: "users-no-works",
                                children:
                                  "Você ainda não administra obras para liberar acesso.",
                              }),
                        ],
                      }),
                      a.memberships.some(
                        (s) => !t.some((i) => i.id === s.work_id),
                      ) &&
                        e.jsxs("details", {
                          className: "users-other-access",
                          children: [
                            e.jsx("summary", {
                              children: "Outros vínculos existentes",
                            }),
                            e.jsx("ul", {
                              children: a.memberships
                                .filter(
                                  (s) => !t.some((i) => i.id === s.work_id),
                                )
                                .map((s) =>
                                  e.jsx(
                                    "li",
                                    { children: s.work_name },
                                    s.work_id,
                                  ),
                                ),
                            }),
                            e.jsx("p", {
                              children:
                                "Somente as obras sob sua administração podem ser alteradas aqui.",
                            }),
                          ],
                        }),
                    ],
                  })
                : e.jsxs("div", {
                    className: "users-admin-details",
                    children: [
                      e.jsx("h3", {
                        children: ["owner", "moderator"].includes(a.role)
                          ? "Acesso global"
                          : "Obras vinculadas",
                      }),
                      a.memberships.length
                        ? e.jsx("ul", {
                            children: a.memberships.map((s) =>
                              e.jsxs(
                                "li",
                                {
                                  children: [
                                    s.work_name,
                                    e.jsx("span", {
                                      children:
                                        s.role === "admin"
                                          ? "Administrador"
                                          : "Consulta",
                                    }),
                                  ],
                                },
                                s.work_id,
                              ),
                            ),
                          })
                        : e.jsx("p", { children: "Nenhuma obra vinculada." }),
                      e.jsx("p", {
                        children: ["owner", "moderator"].includes(a.role)
                          ? "Este perfil gerencia todas as obras. Somente contato@example.invalid pode administrar os perfis e os acessos dos usuários."
                          : "Os acessos dos administradores de obra são configurados separadamente.",
                      }),
                    ],
                  }),
              D &&
                e.jsxs("div", {
                  className: "error",
                  role: "alert",
                  children: [e.jsx(k, { size: 17 }), D],
                }),
              e.jsxs("div", {
                className: "form-actions",
                children: [
                  e.jsx("button", {
                    type: "button",
                    className: "button secondary",
                    disabled: v,
                    onClick: $,
                    children: p && canEditAccess ? "Cancelar" : "Fechar",
                  }),
                  p &&
                    canEditAccess &&
                    e.jsx("button", {
                      type: "button",
                      className: "button primary",
                      disabled: v || !V || (!a.email_confirmed && _.length > 0),
                      onClick: () => void ee(),
                      children: v
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(Q, { size: 16, className: "spin" }),
                              "Salvando…",
                            ],
                          })
                        : "Salvar acessos",
                    }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
export { me as UsersView };
