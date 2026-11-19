import { defineComponent as C, inject as R, ref as T, computed as _, openBlock as b, createBlock as p, unref as t, withCtx as l, createVNode as a, withModifiers as D, createTextVNode as y, toDisplayString as x, reactive as V } from "../../../assets/vue.js";
import { VcsLabel as E, VcsTextField as L, VcsFormButton as M, NotificationType as A, WindowSlot as O, ButtonLocation as U } from "../../../assets/ui.js";
import { VSheet as F, VForm as N, VContainer as $, VRow as P, VCol as m } from "../../../assets/vuetify.js";
const S = "@geoportallux/lux-3dviewer-plugin-auth", q = "1.0.1", z = "^6.3";
async function I(r, s) {
  const o = await fetch(`${r}/getuserinfo`, {
    method: "POST",
    credentials: s ?? "same-origin",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //eslint-disable-line
    body: new URLSearchParams({})
  });
  if (!o.ok) throw new Error("not authenticated");
  const e = await o.json();
  if (!e.login) throw new Error("no login");
  return e;
}
async function K(r, s, o, e) {
  const n = await fetch(`${r}/login`, {
    method: "POST",
    credentials: e ?? "same-origin",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //eslint-disable-line
    body: new URLSearchParams({ login: s, password: o })
  });
  if (!n.ok) throw new Error("login failed");
  const i = await n.json();
  if (!i.login) throw new Error("invalid credentials");
  return i;
}
async function j(r, s) {
  if (!(await fetch(`${r}/logout`, {
    credentials: s ?? "same-origin"
  })).ok) throw new Error("logout failed");
}
const W = /* @__PURE__ */ C({
  __name: "AuthWindow",
  setup(r) {
    const s = R("vcsApp"), o = s.plugins.getByKey(S), e = T(""), n = T(""), i = T(!1), f = T(), v = _(() => o.userState.user), c = _(() => !!v.value), u = [
      (d) => !!d || "lux3dviewerPluginAuth.required"
    ];
    async function g() {
      const { valid: d } = await f.value.validate();
      if (d) {
        i.value = !0;
        try {
          await o.doLogin(e.value, n.value);
        } catch {
          s.notifier.add({
            type: A.ERROR,
            message: "lux3dviewerPluginAuth.loginError"
          });
        } finally {
          i.value = !1, n.value = "";
        }
      }
    }
    async function k() {
      i.value = !0;
      try {
        await o.doLogout();
      } catch {
        s.notifier.add({
          type: A.ERROR,
          message: "lux3dviewerPluginAuth.logoutError"
        });
      } finally {
        i.value = !1;
      }
    }
    return (d, h) => (b(), p(t(F), null, {
      default: l(() => [
        a(
          t(N),
          {
            ref_key: "formRef",
            ref: f,
            onSubmit: D(g, ["prevent"])
          },
          {
            default: l(() => [
              a(t($), { class: "py-2 px-3" }, {
                default: l(() => [
                  a(t(P), {
                    "no-gutters": "",
                    class: "mb-2 align-center"
                  }, {
                    default: l(() => [
                      a(t(m), { cols: "4" }, {
                        default: l(() => [
                          a(t(E), { "html-for": "auth-username" }, {
                            default: l(() => [
                              y(
                                x(d.$t("lux3dviewerPluginAuth.usernameLabel")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      a(t(m), { cols: "8" }, {
                        default: l(() => [
                          a(t(L), {
                            id: "auth-username",
                            "model-value": c.value ? v.value.login : e.value,
                            disabled: c.value || i.value,
                            autocomplete: "username",
                            rules: c.value ? [] : u,
                            "onUpdate:modelValue": h[0] || (h[0] = (B) => e.value = B)
                          }, null, 8, ["model-value", "disabled", "rules"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  c.value ? (b(), p(t(P), {
                    key: 0,
                    "no-gutters": "",
                    class: "mb-3 align-center"
                  }, {
                    default: l(() => [
                      a(t(m), { cols: "4" }, {
                        default: l(() => [
                          a(t(E), { "html-for": "auth-mail" }, {
                            default: l(() => [
                              y(
                                x(d.$t("lux3dviewerPluginAuth.emailLabel")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      a(t(m), { cols: "8" }, {
                        default: l(() => [
                          a(t(L), {
                            id: "auth-mail",
                            "model-value": v.value.mail ?? "",
                            type: "text",
                            disabled: !0
                          }, null, 8, ["model-value"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })) : (b(), p(t(P), {
                    key: 1,
                    "no-gutters": "",
                    class: "mb-3 align-center"
                  }, {
                    default: l(() => [
                      a(t(m), { cols: "4" }, {
                        default: l(() => [
                          a(t(E), { "html-for": "auth-pwd" }, {
                            default: l(() => [
                              y(
                                x(d.$t("lux3dviewerPluginAuth.passwordLabel")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      a(t(m), { cols: "8" }, {
                        default: l(() => [
                          a(t(L), {
                            id: "auth-pwd",
                            "model-value": n.value,
                            type: "password",
                            disabled: i.value,
                            autocomplete: "current-password",
                            rules: u,
                            "onUpdate:modelValue": h[1] || (h[1] = (B) => n.value = B)
                          }, null, 8, ["model-value", "disabled"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })),
                  a(t(P), {
                    "no-gutters": "",
                    class: "justify-end"
                  }, {
                    default: l(() => [
                      c.value ? (b(), p(t(M), {
                        key: 0,
                        variant: "filled",
                        loading: i.value,
                        disabled: i.value,
                        onClick: k
                      }, {
                        default: l(() => [
                          y(
                            x(d.$t("lux3dviewerPluginAuth.disconnectButton")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["loading", "disabled"])) : (b(), p(t(M), {
                        key: 1,
                        type: "submit",
                        variant: "filled",
                        loading: i.value,
                        disabled: i.value
                      }, {
                        default: l(() => [
                          y(
                            x(d.$t("lux3dviewerPluginAuth.submitButton")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["loading", "disabled"]))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          },
          512
          /* NEED_PATCH */
        )
      ]),
      _: 1
      /* STABLE */
    }));
  }
}), w = "lux-auth-login-window";
function G(r) {
  const { baseUrl: s } = r, o = V({ user: null });
  let e = null, n = null;
  function i() {
    n && (o.user ? (n.name = o.user.login, n.title = "lux3dviewerPluginAuth.logoutTooltip", n.icon = "mdi-account-check") : (n.name = "lux3dviewerPluginAuth.loginButton", n.title = "lux3dviewerPluginAuth.loginTooltip", n.icon = "mdi-account-outline"));
  }
  async function f() {
    const u = e == null ? void 0 : e.plugins.getByKey(
      "@geoportallux/lux-3dviewer-themesync"
    );
    e && typeof (u == null ? void 0 : u.reloadThemes) == "function" && await u.reloadThemes(e);
  }
  async function v(u, g) {
    o.user = await K(
      s,
      u,
      g,
      r.credentials
    ), i(), e == null || e.windowManager.remove(w), e == null || e.notifier.add({
      type: A.SUCCESS,
      message: "lux3dviewerPluginAuth.loginSuccess"
    }), await f();
  }
  async function c() {
    await j(s, r.credentials), o.user = null, i(), e == null || e.windowManager.remove(w), e == null || e.notifier.add({
      type: A.SUCCESS,
      message: "lux3dviewerPluginAuth.logoutSuccess"
    }), await f();
  }
  return {
    get name() {
      return S;
    },
    get version() {
      return q;
    },
    get mapVersion() {
      return z;
    },
    get userState() {
      return o;
    },
    doLogin: v,
    doLogout: c,
    async initialize(u) {
      e = u;
      try {
        o.user = await I(s, r.credentials), i();
      } catch {
      }
    },
    onVcsAppMounted(u) {
      var g;
      n = V({
        name: ((g = o.user) == null ? void 0 : g.login) ?? "lux3dviewerPluginAuth.loginButton",
        title: o.user ? "lux3dviewerPluginAuth.logoutTooltip" : "lux3dviewerPluginAuth.loginTooltip",
        icon: o.user ? "mdi-account-check" : "mdi-account-outline",
        active: !1,
        callback() {
          u.windowManager.has(w) ? u.windowManager.remove(w) : u.windowManager.add(
            {
              id: w,
              component: W,
              slot: O.DYNAMIC_RIGHT,
              state: {
                headerTitle: "lux3dviewerPluginAuth.windowTitle",
                headerIcon: "mdi-account-outline",
                styles: { width: "320px", height: "auto" }
              }
            },
            S
          );
        }
      }), u.navbarManager.add(
        { id: "lux-auth-button", action: n },
        S,
        U.PROJECT,
        { desktop: !0, tablet: !0, mobile: !0 }
      );
    },
    getDefaultOptions() {
      return r;
    },
    toJSON() {
      return r;
    },
    getState() {
      return {};
    },
    getConfigEditors() {
      return [];
    },
    destroy() {
      e == null || e.windowManager.remove(w), e == null || e.navbarManager.removeOwner(S), e = null, n = null;
    },
    i18n: {
      en: {
        lux3dviewerPluginAuth: {
          loginButton: "Login",
          loginTooltip: "Log in to your account",
          logoutTooltip: "Log out",
          windowTitle: "My Account",
          usernameLabel: "Username",
          passwordLabel: "Password",
          emailLabel: "Email",
          submitButton: "Connect",
          disconnectButton: "Disconnect",
          loginSuccess: "You are now logged in.",
          loginError: "Invalid username or password.",
          logoutSuccess: "You have been logged out.",
          logoutError: "An error occurred while logging out.",
          required: "This field is required."
        }
      },
      fr: {
        lux3dviewerPluginAuth: {
          loginButton: "Connexion",
          loginTooltip: "Se connecter",
          logoutTooltip: "Se déconnecter",
          windowTitle: "Mon compte",
          usernameLabel: "Nom d'utilisateur",
          passwordLabel: "Mot de passe",
          emailLabel: "E-mail",
          submitButton: "Connexion",
          disconnectButton: "Déconnexion",
          loginSuccess: "Vous êtes maintenant connecté.",
          loginError: "Nom d'utilisateur ou mot de passe incorrect.",
          logoutSuccess: "Vous avez été déconnecté.",
          logoutError: "Une erreur est survenue lors de la déconnexion.",
          required: "Ce champ est obligatoire."
        }
      },
      de: {
        lux3dviewerPluginAuth: {
          loginButton: "Anmelden",
          loginTooltip: "Beim Konto anmelden",
          logoutTooltip: "Abmelden",
          windowTitle: "Mein Konto",
          usernameLabel: "Benutzername",
          passwordLabel: "Passwort",
          emailLabel: "E-Mail",
          submitButton: "Verbinden",
          disconnectButton: "Trennen",
          loginSuccess: "Sie sind jetzt angemeldet.",
          loginError: "Ungültiger Benutzername oder Passwort.",
          logoutSuccess: "Sie wurden abgemeldet.",
          logoutError: "Beim Abmelden ist ein Fehler aufgetreten.",
          required: "Dieses Feld ist erforderlich."
        }
      },
      lb: {
        lux3dviewerPluginAuth: {
          loginButton: "Umellen",
          loginTooltip: "Am Kont umellen",
          logoutTooltip: "Ofmellen",
          windowTitle: "Mäi Kont",
          usernameLabel: "Benotzernumm",
          passwordLabel: "Passwuert",
          emailLabel: "E-Mail",
          submitButton: "Verbannen",
          disconnectButton: "Ofmellen",
          loginSuccess: "Dir sidd elo umgemellt.",
          loginError: "Falschen Benotzernumm oder Passwuert.",
          logoutSuccess: "Dir gouft ofgemellt.",
          logoutError: "E Feeler ass beim Ofmellen opgetrueden.",
          required: "Dëst Feld ass obligatoresch."
        }
      }
    }
  };
}
export {
  G as default
};
