
function loadCss(href) {
  return new Promise((resolve, reject) => {
    const elem = document.createElement('link');
    elem.rel = 'stylesheet';
    elem.href = href;
    elem.defer = false;
    elem.async = false;
    elem.onload = resolve;
    elem.onerror = reject;
    document.head.appendChild(elem);
  });
} await loadCss('data:text/css;base64,LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3J7Ym9yZGVyLXJhZGl1czo1cHg7dHJhbnNpdGlvbjp3aWR0aCBlYXNlLWluLW91dCAuMjVzO2JhY2tncm91bmQ6IzMwMzMzNmNjO2JvcmRlcjoxcHggc29saWQgIzQ0NDtjb2xvcjojZWRmZmZmO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6NHB4IDEycHg7LW1vei11c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO292ZXJmbG93OmhpZGRlbn0uY2VzaXVtLWNlc2l1bUluc3BlY3Rvci1idXR0b257dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjExcHR9LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3ItdmlzaWJsZSAuY2VzaXVtLWNlc2l1bUluc3BlY3Rvci1idXR0b257Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2FhYTtwYWRkaW5nLWJvdHRvbTozcHh9LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3IgaW5wdXQ6ZW5hYmxlZCwuY2VzaXVtLWNlc2l1bUluc3BlY3Rvci1idXR0b257Y3Vyc29yOnBvaW50ZXJ9LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3ItdmlzaWJsZXt3aWR0aDoxODVweDtoZWlnaHQ6YXV0b30uY2VzaXVtLWNlc2l1bUluc3BlY3Rvci1oaWRkZW57d2lkdGg6MTIycHg7aGVpZ2h0OjE3cHh9LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3Itc2VjdGlvbkNvbnRlbnR7bWF4LWhlaWdodDo2MDBweH0uY2VzaXVtLWNlc2l1bUluc3BlY3Rvci1zZWN0aW9uLWNvbGxhcHNlZCAuY2VzaXVtLWNlc2l1bUluc3BlY3Rvci1zZWN0aW9uQ29udGVudHttYXgtaGVpZ2h0OjA7cGFkZGluZzowIWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW59LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3ItZHJvcERvd257bWFyZ2luOjVweCAwO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC1zaXplOjEwcHQ7d2lkdGg6MTg1cHh9LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3ItZnJ1c3R1bVN0YXRpc3RpY3N7cGFkZGluZzo1cHg7YmFja2dyb3VuZC1jb2xvcjojNTA1MDUwYmZ9LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3ItcGlja0J1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOiMwMDAwMDA0ZDtib3JkZXI6MXB4IHNvbGlkICM0NDQ7Y29sb3I6I2VkZmZmZjtib3JkZXItcmFkaXVzOjVweDtwYWRkaW5nOjNweCA3cHg7Y3Vyc29yOnBvaW50ZXI7LW1vei11c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO21hcmdpbjowIGF1dG99LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3ItcGlja0J1dHRvbjpmb2N1c3tvdXRsaW5lOm5vbmV9LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3ItcGlja0J1dHRvbjphY3RpdmUsLmNlc2l1bS1jZXNpdW1JbnNwZWN0b3ItcGlja0J1dHRvbkhpZ2hsaWdodHtjb2xvcjojMDAwO2JhY2tncm91bmQ6I2FkZjtib3JkZXItY29sb3I6I2ZmZjtib3gtc2hhZG93OjAgMCA4cHggI2ZmZn0uY2VzaXVtLWNlc2l1bUluc3BlY3Rvci1jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3Itc2VjdGlvbkhlYWRlcntmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjEwcHQ7bWFyZ2luOjA7Y3Vyc29yOnBvaW50ZXJ9LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3ItcGlja1NlY3Rpb257Ym9yZGVyOjFweCBzb2xpZCAjYWFhO2JvcmRlci1yYWRpdXM6NXB4O3BhZGRpbmc6M3B4O21hcmdpbi1ib3R0b206NXB4fS5jZXNpdW0tY2VzaXVtSW5zcGVjdG9yLXNlY3Rpb25Db250ZW50e21hcmdpbi1ib3R0b206MTBweDt0cmFuc2l0aW9uOm1heC1oZWlnaHQgLjI1c30uY2VzaXVtLWNlc2l1bUluc3BlY3Rvci10aWxlVGV4dHtwYWRkaW5nLWJvdHRvbToxMHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNhYWF9LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3ItcmVsYXRpdmVUZXh0e3BhZGRpbmctdG9wOjEwcHh9LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3Itc2VjdGlvbkhlYWRlcjpiZWZvcmV7bWFyZ2luLXJpZ2h0OjVweDtjb250ZW50OiItIjt3aWR0aDoxY2g7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3Itc2VjdGlvbi1jb2xsYXBzZWQgLmNlc2l1bS1jZXNpdW1JbnNwZWN0b3Itc2VjdGlvbkhlYWRlcjpiZWZvcmV7Y29udGVudDoiKyJ9dWwuY2VzaXVtLWNlc2l1bUluc3BlY3Rvci1zdGF0aXN0aWNze21hcmdpbjowO3BhZGRpbmctdG9wOjNweDtwYWRkaW5nLWJvdHRvbTozcHh9dWwuY2VzaXVtLWNlc2l1bUluc3BlY3Rvci1zdGF0aXN0aWNzK3VsLmNlc2l1bS1jZXNpdW1JbnNwZWN0b3Itc3RhdGlzdGljc3tib3JkZXItdG9wOjFweCBzb2xpZCAjYWFhfS5jZXNpdW0tY2VzaXVtSW5zcGVjdG9yLXNsaWRlcnttYXJnaW4tdG9wOjVweH0uY2VzaXVtLWNlc2l1bUluc3BlY3Rvci1zbGlkZXIgaW5wdXRbdHlwZT1udW1iZXJde3RleHQtYWxpZ246bGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiMyMjI7b3V0bGluZTpub25lO2JvcmRlcjoxcHggc29saWQgIzQ0NDtjb2xvcjojZWRmZmZmO3dpZHRoOjEwMHB4O2JvcmRlci1yYWRpdXM6M3B4O3BhZGRpbmc6MXB4O21hcmdpbi1sZWZ0OjEwcHg7Y3Vyc29yOmF1dG99LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3Itc2xpZGVyIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiwuY2VzaXVtLWNlc2l1bUluc3BlY3Rvci1zbGlkZXIgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lO21hcmdpbjowfS5jZXNpdW0tY2VzaXVtSW5zcGVjdG9yLXNsaWRlciBpbnB1dFt0eXBlPXJhbmdlXXttYXJnaW4tbGVmdDo1cHg7dmVydGljYWwtYWxpZ246bWlkZGxlfS5jZXNpdW0tY2VzaXVtSW5zcGVjdG9yLWhpZGUgLmNlc2l1bS1jZXNpdW1JbnNwZWN0b3Itc3R5bGVFZGl0b3J7ZGlzcGxheTpub25lfS5jZXNpdW0tY2VzaXVtSW5zcGVjdG9yLXN0eWxlRWRpdG9ye3BhZGRpbmc6MTBweDtib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kOiMzMDMzMzZjYztib3JkZXI6MXB4IHNvbGlkICM0NDR9LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3Itc3R5bGVFZGl0b3IgdGV4dGFyZWF7d2lkdGg6MTAwJTtoZWlnaHQ6MzAwcHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjojZWRmZmZmO2JvcmRlcjpub25lO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpwcmU7b3ZlcmZsb3ctd3JhcDpub3JtYWw7b3ZlcmZsb3cteDphdXRvfS5jZXNpdW0tM0RUaWxlc0luc3BlY3Rvcnt3aWR0aDozMDBweDtwb2ludGVyLWV2ZW50czphbGx9LmNlc2l1bS0zRFRpbGVzSW5zcGVjdG9yLXN0YXRpc3RpY3N7Zm9udC1zaXplOjExcHh9LmNlc2l1bS0zRFRpbGVzSW5zcGVjdG9yLWRpc2FibGVkRWxlbWVudHNJbmZve21hcmdpbjo1cHggMCAwO3BhZGRpbmc6MCAwIDAgMjBweDtjb2xvcjojZWVkMjAyfS5jZXNpdW0tM0RUaWxlc0luc3BlY3RvciBkaXYsLmNlc2l1bS0zRFRpbGVzSW5zcGVjdG9yIGlucHV0W3R5cGU9cmFuZ2Vde3dpZHRoOjEwMCU7Ym94LXNpemluZzpib3JkZXItYm94fS5jZXNpdW0tY2VzaXVtSW5zcGVjdG9yLWVycm9ye2NvbG9yOiNmZjllOWU7b3ZlcmZsb3c6YXV0b30uY2VzaXVtLTNEVGlsZXNJbnNwZWN0b3IgLmNlc2l1bS1jZXNpdW1JbnNwZWN0b3Itc2VjdGlvbnttYXJnaW4tdG9wOjNweH0uY2VzaXVtLTNEVGlsZXNJbnNwZWN0b3IgLmNlc2l1bS1jZXNpdW1JbnNwZWN0b3Itc2VjdGlvbkhlYWRlcisuY2VzaXVtLWNlc2l1bUluc3BlY3Rvci1zaG93e2JvcmRlci10b3A6MXB4IHNvbGlkIHdoaXRlfWlucHV0LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3ItdXJse292ZXJmbG93OmhpZGRlbjt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3cteDpzY3JvbGw7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmO291dGxpbmU6bm9uZTtib3JkZXI6bm9uZTtoZWlnaHQ6MWVtO3dpZHRoOjEwMCV9LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3IgLmZpZWxkLWdyb3Vwe2Rpc3BsYXk6dGFibGV9LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3IgLmZpZWxkLWdyb3VwPmxhYmVse2Rpc3BsYXk6dGFibGUtY2VsbDtmb250LXdlaWdodDo3MDB9LmNlc2l1bS1jZXNpdW1JbnNwZWN0b3IgLmZpZWxkLWdyb3VwPi5maWVsZHtkaXNwbGF5OnRhYmxlLWNlbGw7d2lkdGg6MTAwJX0uY2VzaXVtLWNlc2l1bUluc3BlY3Rvcnt3aWR0aDoyMTBweDttaW4taGVpZ2h0OjMycHh9Cg==');import { Check as ie, defined as V, defaultValue as $e, DeveloperError as _e, Event as Ye, Cesium3DTileColorBlendMode as De, Color as Se, ScreenSpaceEventHandler as Qe, PerformanceDisplay as et, Cesium3DTileFeature as ut, ScreenSpaceEventType as ve, Cesium3DTileStyle as ct, destroyObject as we, Cesium3DTileset as tt, Cesium3DTilePass as Xe, ResourceCache as lt, getElement as We, Ray as dt, Cartesian3 as ue, DebugModelMatrixPrimitive as pt, TileCoordinatesImageryProvider as ft, Rectangle as ht, HeadingPitchRoll as mt, Matrix3 as He, CustomShader as gt, VoxelShapeType as ee, Matrix4 as xe, Math as vt, Ellipsoid as yt } from "../../../assets/cesium.js";
import { createToggleAction as bt, WindowSlot as xt, ButtonLocation as Ct } from "../../../assets/ui.js";
import { CesiumMap as Ze } from "../../../assets/core.js";
import { defineComponent as St, inject as _t, ref as Ne, onMounted as wt, onUnmounted as Et, resolveComponent as Ae, openBlock as Pt, createBlock as Tt, withCtx as Ee, createVNode as ke, createElementVNode as Ie } from "../../../assets/vue.js";
import { VContainer as Mt, VRow as Bt, VCol as kt } from "../../../assets/vuetify.js";
var Pe;
typeof ko < "u" && (Pe = ko);
(function() {
  /*!
   * Knockout JavaScript library v3.5.1
   * (c) The Knockout.js team - http://knockoutjs.com/
   * License: MIT (http://www.opensource.org/licenses/mit-license.php)
   */
  (function() {
    (function(u) {
      var c = this || (0, eval)("this"), n = c.document, b = c.navigator, _ = c.jQuery, P = c.JSON;
      _ || typeof jQuery > "u" || (_ = jQuery), function(D) {
        D(c.ko = {});
      }(function(D, k) {
        function F(t, r) {
          return t === null || typeof t in Y ? t === r : !1;
        }
        function M(t, r) {
          var s;
          return function() {
            s || (s = e.a.setTimeout(function() {
              s = u, t();
            }, r));
          };
        }
        function A(t, r) {
          var s;
          return function() {
            clearTimeout(s), s = e.a.setTimeout(t, r);
          };
        }
        function W(t, r) {
          r && r !== "change" ? r === "beforeChange" ? this.pc(t) : this.gb(t, r) : this.qc(t);
        }
        function X(t, r) {
          r !== null && r.s && r.s();
        }
        function Z(t, r) {
          var s = this.qd, o = s[O];
          o.ra || (this.Qb && this.mb[r] ? (s.uc(r, t, this.mb[r]), this.mb[r] = null, --this.Qb) : o.I[r] || s.uc(r, t, o.J ? { da: t } : s.$c(t)), t.Ja && t.gd());
        }
        var e = typeof D < "u" ? D : {};
        e.b = function(t, r) {
          for (var s = t.split("."), o = e, d = 0; d < s.length - 1; d++) o = o[s[d]];
          o[s[s.length - 1]] = r;
        }, e.L = function(t, r, s) {
          t[r] = s;
        }, e.version = "3.5.1", e.b(
          "version",
          e.version
        ), e.options = { deferUpdates: !1, useOnlyNativeEvents: !1, foreachHidesDestroyed: !1 }, e.a = function() {
          function t(a, y) {
            for (var v in a) d.call(a, v) && y(v, a[v]);
          }
          function r(a, y) {
            if (y) for (var v in y) d.call(y, v) && (a[v] = y[v]);
            return a;
          }
          function s(a, y) {
            return a.__proto__ = y, a;
          }
          function o(a, y, v, S) {
            var E = a[y].match(g) || [];
            e.a.D(v.match(g), function(C) {
              e.a.Na(E, C, S);
            }), a[y] = E.join(" ");
          }
          var d = Object.prototype.hasOwnProperty, h = { __proto__: [] } instanceof Array, p = typeof Symbol == "function", f = {}, l = {};
          f[b && /Firefox\/2/i.test(b.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"], f.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "), t(f, function(a, y) {
            if (y.length) for (var v = 0, S = y.length; v < S; v++) l[y[v]] = a;
          });
          var i = { propertychange: !0 }, m = n && function() {
            for (var a = 3, y = n.createElement("div"), v = y.getElementsByTagName("i"); y.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->", v[0]; ) ;
            return 4 < a ? a : u;
          }(), g = /\S+/g, x;
          return {
            Jc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
            D: function(a, y, v) {
              for (var S = 0, E = a.length; S < E; S++) y.call(v, a[S], S, a);
            },
            A: typeof Array.prototype.indexOf == "function" ? function(a, y) {
              return Array.prototype.indexOf.call(a, y);
            } : function(a, y) {
              for (var v = 0, S = a.length; v < S; v++) if (a[v] === y) return v;
              return -1;
            },
            Lb: function(a, y, v) {
              for (var S = 0, E = a.length; S < E; S++) if (y.call(v, a[S], S, a)) return a[S];
              return u;
            },
            Pa: function(a, y) {
              var v = e.a.A(a, y);
              0 < v ? a.splice(v, 1) : v === 0 && a.shift();
            },
            wc: function(a) {
              var y = [];
              return a && e.a.D(a, function(v) {
                0 > e.a.A(y, v) && y.push(v);
              }), y;
            },
            Mb: function(a, y, v) {
              var S = [];
              if (a) for (var E = 0, C = a.length; E < C; E++) S.push(y.call(v, a[E], E));
              return S;
            },
            jb: function(a, y, v) {
              var S = [];
              if (a) for (var E = 0, C = a.length; E < C; E++) y.call(v, a[E], E) && S.push(a[E]);
              return S;
            },
            Nb: function(a, y) {
              if (y instanceof Array) a.push.apply(a, y);
              else for (var v = 0, S = y.length; v < S; v++) a.push(y[v]);
              return a;
            },
            Na: function(a, y, v) {
              var S = e.a.A(e.a.bc(a), y);
              0 > S ? v && a.push(y) : v || a.splice(S, 1);
            },
            Ba: h,
            extend: r,
            setPrototypeOf: s,
            Ab: h ? s : r,
            P: t,
            Ga: function(a, y, v) {
              if (!a) return a;
              var S = {}, E;
              for (E in a) d.call(a, E) && (S[E] = y.call(v, a[E], E, a));
              return S;
            },
            Tb: function(a) {
              for (; a.firstChild; ) e.removeNode(a.firstChild);
            },
            Yb: function(a) {
              a = e.a.la(a);
              for (var y = (a[0] && a[0].ownerDocument || n).createElement("div"), v = 0, S = a.length; v < S; v++) y.appendChild(e.oa(a[v]));
              return y;
            },
            Ca: function(a, y) {
              for (var v = 0, S = a.length, E = []; v < S; v++) {
                var C = a[v].cloneNode(!0);
                E.push(y ? e.oa(C) : C);
              }
              return E;
            },
            va: function(a, y) {
              if (e.a.Tb(a), y) for (var v = 0, S = y.length; v < S; v++) a.appendChild(y[v]);
            },
            Xc: function(a, y) {
              var v = a.nodeType ? [a] : a;
              if (0 < v.length) {
                for (var S = v[0], E = S.parentNode, C = 0, w = y.length; C < w; C++) E.insertBefore(y[C], S);
                for (C = 0, w = v.length; C < w; C++) e.removeNode(v[C]);
              }
            },
            Ua: function(a, y) {
              if (a.length) {
                for (y = y.nodeType === 8 && y.parentNode || y; a.length && a[0].parentNode !== y; ) a.splice(0, 1);
                for (; 1 < a.length && a[a.length - 1].parentNode !== y; ) a.length--;
                if (1 < a.length) {
                  var v = a[0], S = a[a.length - 1];
                  for (a.length = 0; v !== S; ) a.push(v), v = v.nextSibling;
                  a.push(S);
                }
              }
              return a;
            },
            Zc: function(a, y) {
              7 > m ? a.setAttribute("selected", y) : a.selected = y;
            },
            Db: function(a) {
              return a === null || a === u ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
            },
            Ud: function(a, y) {
              return a = a || "", y.length > a.length ? !1 : a.substring(0, y.length) === y;
            },
            vd: function(a, y) {
              if (a === y) return !0;
              if (a.nodeType === 11) return !1;
              if (y.contains) return y.contains(a.nodeType !== 1 ? a.parentNode : a);
              if (y.compareDocumentPosition) return (y.compareDocumentPosition(a) & 16) == 16;
              for (; a && a != y; ) a = a.parentNode;
              return !!a;
            },
            Sb: function(a) {
              return e.a.vd(a, a.ownerDocument.documentElement);
            },
            kd: function(a) {
              return !!e.a.Lb(a, e.a.Sb);
            },
            R: function(a) {
              return a && a.tagName && a.tagName.toLowerCase();
            },
            Ac: function(a) {
              return e.onError ? function() {
                try {
                  return a.apply(this, arguments);
                } catch (y) {
                  throw e.onError && e.onError(y), y;
                }
              } : a;
            },
            setTimeout: function(a, y) {
              return setTimeout(e.a.Ac(a), y);
            },
            Gc: function(a) {
              setTimeout(function() {
                throw e.onError && e.onError(a), a;
              }, 0);
            },
            B: function(a, y, v) {
              var S = e.a.Ac(v);
              if (v = i[y], e.options.useOnlyNativeEvents || v || !_) if (v || typeof a.addEventListener != "function") if (typeof a.attachEvent < "u") {
                var E = function(w) {
                  S.call(a, w);
                }, C = "on" + y;
                a.attachEvent(
                  C,
                  E
                ), e.a.K.za(a, function() {
                  a.detachEvent(C, E);
                });
              } else throw Error("Browser doesn't support addEventListener or attachEvent");
              else a.addEventListener(y, S, !1);
              else x || (x = typeof _(a).on == "function" ? "on" : "bind"), _(a)[x](y, S);
            },
            Fb: function(a, y) {
              if (!a || !a.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
              var v;
              if (e.a.R(a) === "input" && a.type && y.toLowerCase() == "click" ? (v = a.type, v = v == "checkbox" || v == "radio") : v = !1, e.options.useOnlyNativeEvents || !_ || v) if (typeof n.createEvent == "function") if (typeof a.dispatchEvent == "function") v = n.createEvent(l[y] || "HTMLEvents"), v.initEvent(y, !0, !0, c, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, a), a.dispatchEvent(v);
              else throw Error("The supplied element doesn't support dispatchEvent");
              else if (v && a.click) a.click();
              else if (typeof a.fireEvent < "u") a.fireEvent("on" + y);
              else throw Error("Browser doesn't support triggering events");
              else _(a).trigger(y);
            },
            f: function(a) {
              return e.O(a) ? a() : a;
            },
            bc: function(a) {
              return e.O(a) ? a.v() : a;
            },
            Eb: function(a, y, v) {
              var S;
              y && (typeof a.classList == "object" ? (S = a.classList[v ? "add" : "remove"], e.a.D(y.match(g), function(E) {
                S.call(a.classList, E);
              })) : typeof a.className.baseVal == "string" ? o(a.className, "baseVal", y, v) : o(a, "className", y, v));
            },
            Bb: function(a, y) {
              var v = e.a.f(y);
              (v === null || v === u) && (v = "");
              var S = e.h.firstChild(a);
              !S || S.nodeType != 3 || e.h.nextSibling(S) ? e.h.va(a, [a.ownerDocument.createTextNode(v)]) : S.data = v, e.a.Ad(a);
            },
            Yc: function(a, y) {
              if (a.name = y, 7 >= m) try {
                var v = a.name.replace(/[&<>'"]/g, function(S) {
                  return "&#" + S.charCodeAt(0) + ";";
                });
                a.mergeAttributes(n.createElement("<input name='" + v + "'/>"), !1);
              } catch {
              }
            },
            Ad: function(a) {
              9 <= m && (a = a.nodeType == 1 ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom));
            },
            wd: function(a) {
              if (m) {
                var y = a.style.width;
                a.style.width = 0, a.style.width = y;
              }
            },
            Pd: function(a, y) {
              a = e.a.f(a), y = e.a.f(y);
              for (var v = [], S = a; S <= y; S++) v.push(S);
              return v;
            },
            la: function(a) {
              for (var y = [], v = 0, S = a.length; v < S; v++) y.push(a[v]);
              return y;
            },
            Da: function(a) {
              return p ? Symbol(a) : a;
            },
            Zd: m === 6,
            $d: m === 7,
            W: m,
            Lc: function(a, y) {
              for (var v = e.a.la(a.getElementsByTagName("input")).concat(e.a.la(a.getElementsByTagName("textarea"))), S = typeof y == "string" ? function(w) {
                return w.name === y;
              } : function(w) {
                return y.test(w.name);
              }, E = [], C = v.length - 1; 0 <= C; C--) S(v[C]) && E.push(v[C]);
              return E;
            },
            Nd: function(a) {
              return typeof a == "string" && (a = e.a.Db(a)) ? P && P.parse ? P.parse(a) : new Function("return " + a)() : null;
            },
            hc: function(a, y, v) {
              if (!P || !P.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
              return P.stringify(e.a.f(a), y, v);
            },
            Od: function(a, y, v) {
              v = v || {};
              var S = v.params || {}, E = v.includeFields || this.Jc, C = a;
              if (typeof a == "object" && e.a.R(a) === "form") for (var C = a.action, w = E.length - 1; 0 <= w; w--) for (var T = e.a.Lc(a, E[w]), R = T.length - 1; 0 <= R; R--) S[T[R].name] = T[R].value;
              y = e.a.f(y);
              var L = n.createElement("form");
              L.style.display = "none", L.action = C, L.method = "post";
              for (var N in y) a = n.createElement("input"), a.type = "hidden", a.name = N, a.value = e.a.hc(e.a.f(y[N])), L.appendChild(a);
              t(S, function(I, ae) {
                var K = n.createElement("input");
                K.type = "hidden", K.name = I, K.value = ae, L.appendChild(K);
              }), n.body.appendChild(L), v.submitter ? v.submitter(L) : L.submit(), setTimeout(function() {
                L.parentNode.removeChild(L);
              }, 0);
            }
          };
        }(), e.b("utils", e.a), e.b("utils.arrayForEach", e.a.D), e.b("utils.arrayFirst", e.a.Lb), e.b("utils.arrayFilter", e.a.jb), e.b("utils.arrayGetDistinctValues", e.a.wc), e.b("utils.arrayIndexOf", e.a.A), e.b("utils.arrayMap", e.a.Mb), e.b("utils.arrayPushAll", e.a.Nb), e.b("utils.arrayRemoveItem", e.a.Pa), e.b("utils.cloneNodes", e.a.Ca), e.b(
          "utils.createSymbolOrString",
          e.a.Da
        ), e.b("utils.extend", e.a.extend), e.b("utils.fieldsIncludedWithJsonPost", e.a.Jc), e.b("utils.getFormFields", e.a.Lc), e.b("utils.objectMap", e.a.Ga), e.b("utils.peekObservable", e.a.bc), e.b("utils.postJson", e.a.Od), e.b("utils.parseJson", e.a.Nd), e.b("utils.registerEventHandler", e.a.B), e.b("utils.stringifyJson", e.a.hc), e.b("utils.range", e.a.Pd), e.b("utils.toggleDomNodeCssClass", e.a.Eb), e.b("utils.triggerEvent", e.a.Fb), e.b("utils.unwrapObservable", e.a.f), e.b("utils.objectForEach", e.a.P), e.b(
          "utils.addOrRemoveItem",
          e.a.Na
        ), e.b("utils.setTextContent", e.a.Bb), e.b("unwrap", e.a.f), Function.prototype.bind || (Function.prototype.bind = function(t) {
          var r = this;
          if (arguments.length === 1) return function() {
            return r.apply(t, arguments);
          };
          var s = Array.prototype.slice.call(arguments, 1);
          return function() {
            var o = s.slice(0);
            return o.push.apply(o, arguments), r.apply(t, o);
          };
        }), e.a.g = new function() {
          var t = 0, r = "__ko__" + (/* @__PURE__ */ new Date()).getTime(), s = {}, o, d;
          return e.a.W ? (o = function(h, p) {
            var f = h[r];
            if (!f || f === "null" || !s[f]) {
              if (!p) return u;
              f = h[r] = "ko" + t++, s[f] = {};
            }
            return s[f];
          }, d = function(h) {
            var p = h[r];
            return p ? (delete s[p], h[r] = null, !0) : !1;
          }) : (o = function(h, p) {
            var f = h[r];
            return !f && p && (f = h[r] = {}), f;
          }, d = function(h) {
            return h[r] ? (delete h[r], !0) : !1;
          }), { get: function(h, p) {
            var f = o(h, !1);
            return f && f[p];
          }, set: function(h, p, f) {
            (h = o(h, f !== u)) && (h[p] = f);
          }, Ub: function(h, p, f) {
            return h = o(h, !0), h[p] || (h[p] = f);
          }, clear: d, Z: function() {
            return t++ + r;
          } };
        }(), e.b("utils.domData", e.a.g), e.b("utils.domData.clear", e.a.g.clear), e.a.K = new function() {
          function t(p, f) {
            var l = e.a.g.get(p, o);
            return l === u && f && (l = [], e.a.g.set(p, o, l)), l;
          }
          function r(p) {
            var f = t(p, !1);
            if (f) for (var f = f.slice(0), l = 0; l < f.length; l++) f[l](p);
            e.a.g.clear(p), e.a.K.cleanExternalData(p), h[p.nodeType] && s(p.childNodes, !0);
          }
          function s(p, f) {
            for (var l = [], i, m = 0; m < p.length; m++) if ((!f || p[m].nodeType === 8) && (r(l[l.length] = i = p[m]), p[m] !== i)) for (; m-- && e.a.A(l, p[m]) == -1; ) ;
          }
          var o = e.a.g.Z(), d = { 1: !0, 8: !0, 9: !0 }, h = { 1: !0, 9: !0 };
          return { za: function(p, f) {
            if (typeof f != "function") throw Error("Callback must be a function");
            t(p, !0).push(f);
          }, yb: function(p, f) {
            var l = t(p, !1);
            l && (e.a.Pa(l, f), l.length == 0 && e.a.g.set(p, o, u));
          }, oa: function(p) {
            return e.u.G(function() {
              d[p.nodeType] && (r(p), h[p.nodeType] && s(p.getElementsByTagName("*")));
            }), p;
          }, removeNode: function(p) {
            e.oa(p), p.parentNode && p.parentNode.removeChild(p);
          }, cleanExternalData: function(p) {
            _ && typeof _.cleanData == "function" && _.cleanData([p]);
          } };
        }(), e.oa = e.a.K.oa, e.removeNode = e.a.K.removeNode, e.b("cleanNode", e.oa), e.b("removeNode", e.removeNode), e.b("utils.domNodeDisposal", e.a.K), e.b(
          "utils.domNodeDisposal.addDisposeCallback",
          e.a.K.za
        ), e.b("utils.domNodeDisposal.removeDisposeCallback", e.a.K.yb), function() {
          var t = [0, "", ""], r = [1, "<table>", "</table>"], s = [3, "<table><tbody><tr>", "</tr></tbody></table>"], o = [1, "<select multiple='multiple'>", "</select>"], d = { thead: r, tbody: r, tfoot: r, tr: [2, "<table><tbody>", "</tbody></table>"], td: s, th: s, option: o, optgroup: o }, h = 8 >= e.a.W;
          e.a.ua = function(p, f) {
            var l;
            if (_) {
              if (_.parseHTML) l = _.parseHTML(p, f) || [];
              else if ((l = _.clean([p], f)) && l[0]) {
                for (var i = l[0]; i.parentNode && i.parentNode.nodeType !== 11; ) i = i.parentNode;
                i.parentNode && i.parentNode.removeChild(i);
              }
            } else {
              (l = f) || (l = n);
              var i = l.parentWindow || l.defaultView || c, m = e.a.Db(p).toLowerCase(), g = l.createElement("div"), x;
              for (x = (m = m.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && d[m[1]] || t, m = x[0], x = "ignored<div>" + x[1] + p + x[2] + "</div>", typeof i.innerShiv == "function" ? g.appendChild(i.innerShiv(x)) : (h && l.body.appendChild(g), g.innerHTML = x, h && g.parentNode.removeChild(g)); m--; ) g = g.lastChild;
              l = e.a.la(g.lastChild.childNodes);
            }
            return l;
          }, e.a.Md = function(p, f) {
            var l = e.a.ua(
              p,
              f
            );
            return l.length && l[0].parentElement || e.a.Yb(l);
          }, e.a.fc = function(p, f) {
            if (e.a.Tb(p), f = e.a.f(f), f !== null && f !== u) if (typeof f != "string" && (f = f.toString()), _) _(p).html(f);
            else for (var l = e.a.ua(f, p.ownerDocument), i = 0; i < l.length; i++) p.appendChild(l[i]);
          };
        }(), e.b("utils.parseHtmlFragment", e.a.ua), e.b("utils.setHtml", e.a.fc), e.aa = /* @__PURE__ */ function() {
          function t(s, o) {
            if (s) {
              if (s.nodeType == 8) {
                var d = e.aa.Uc(s.nodeValue);
                d != null && o.push({ ud: s, Kd: d });
              } else if (s.nodeType == 1) for (var d = 0, h = s.childNodes, p = h.length; d < p; d++) t(
                h[d],
                o
              );
            }
          }
          var r = {};
          return { Xb: function(s) {
            if (typeof s != "function") throw Error("You can only pass a function to ko.memoization.memoize()");
            var o = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
            return r[o] = s, "<!--[ko_memo:" + o + "]-->";
          }, bd: function(s, o) {
            var d = r[s];
            if (d === u) throw Error("Couldn't find any memo with ID " + s + ". Perhaps it's already been unmemoized.");
            try {
              return d.apply(null, o || []), !0;
            } finally {
              delete r[s];
            }
          }, cd: function(s, o) {
            var d = [];
            t(s, d);
            for (var h = 0, p = d.length; h < p; h++) {
              var f = d[h].ud, l = [f];
              o && e.a.Nb(l, o), e.aa.bd(d[h].Kd, l), f.nodeValue = "", f.parentNode && f.parentNode.removeChild(f);
            }
          }, Uc: function(s) {
            return (s = s.match(/^\[ko_memo\:(.*?)\]$/)) ? s[1] : null;
          } };
        }(), e.b("memoization", e.aa), e.b("memoization.memoize", e.aa.Xb), e.b("memoization.unmemoize", e.aa.bd), e.b("memoization.parseMemoText", e.aa.Uc), e.b("memoization.unmemoizeDomNodeAndDescendants", e.aa.cd), e.na = function() {
          function t() {
            if (d) {
              for (var f = d, l = 0, i; p < d; ) if (i = o[p++]) {
                if (p > f) {
                  if (5e3 <= ++l) {
                    p = d, e.a.Gc(Error("'Too much recursion' after processing " + l + " task groups."));
                    break;
                  }
                  f = d;
                }
                try {
                  i();
                } catch (m) {
                  e.a.Gc(m);
                }
              }
            }
          }
          function r() {
            t(), p = d = o.length = 0;
          }
          var s, o = [], d = 0, h = 1, p = 0;
          return c.MutationObserver ? s = function(f) {
            var l = n.createElement("div");
            return new MutationObserver(f).observe(l, { attributes: !0 }), function() {
              l.classList.toggle("foo");
            };
          }(r) : s = n && "onreadystatechange" in n.createElement("script") ? function(f) {
            var l = n.createElement("script");
            l.onreadystatechange = function() {
              l.onreadystatechange = null, n.documentElement.removeChild(l), l = null, f();
            }, n.documentElement.appendChild(l);
          } : function(f) {
            setTimeout(f, 0);
          }, { scheduler: s, zb: function(f) {
            return d || e.na.scheduler(r), o[d++] = f, h++;
          }, cancel: function(f) {
            f = f - (h - d), f >= p && f < d && (o[f] = null);
          }, resetForTesting: function() {
            var f = d - p;
            return p = d = o.length = 0, f;
          }, Sd: t };
        }(), e.b("tasks", e.na), e.b("tasks.schedule", e.na.zb), e.b("tasks.runEarly", e.na.Sd), e.Ta = { throttle: function(t, r) {
          t.throttleEvaluation = r;
          var s = null;
          return e.$({ read: t, write: function(o) {
            clearTimeout(s), s = e.a.setTimeout(
              function() {
                t(o);
              },
              r
            );
          } });
        }, rateLimit: function(t, r) {
          var s, o, d;
          typeof r == "number" ? s = r : (s = r.timeout, o = r.method), t.Hb = !1, d = typeof o == "function" ? o : o == "notifyWhenChangesStop" ? A : M, t.ub(function(h) {
            return d(h, s, r);
          });
        }, deferred: function(t, r) {
          if (r !== !0) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
          t.Hb || (t.Hb = !0, t.ub(function(s) {
            var o, d = !1;
            return function() {
              if (!d) {
                e.na.cancel(o), o = e.na.zb(s);
                try {
                  d = !0, t.notifySubscribers(u, "dirty");
                } finally {
                  d = !1;
                }
              }
            };
          }));
        }, notify: function(t, r) {
          t.equalityComparer = r == "always" ? null : F;
        } };
        var Y = { undefined: 1, boolean: 1, number: 1, string: 1 };
        e.b("extenders", e.Ta), e.ic = function(t, r, s) {
          this.da = t, this.lc = r, this.mc = s, this.Ib = !1, this.fb = this.Jb = null, e.L(this, "dispose", this.s), e.L(this, "disposeWhenNodeIsRemoved", this.l);
        }, e.ic.prototype.s = function() {
          this.Ib || (this.fb && e.a.K.yb(this.Jb, this.fb), this.Ib = !0, this.mc(), this.da = this.lc = this.mc = this.Jb = this.fb = null);
        }, e.ic.prototype.l = function(t) {
          this.Jb = t, e.a.K.za(t, this.fb = this.s.bind(this));
        }, e.T = function() {
          e.a.Ab(this, H), H.qb(this);
        };
        var H = {
          qb: function(t) {
            t.U = { change: [] }, t.sc = 1;
          },
          subscribe: function(t, r, s) {
            var o = this;
            s = s || "change";
            var d = new e.ic(o, r ? t.bind(r) : t, function() {
              e.a.Pa(o.U[s], d), o.hb && o.hb(s);
            });
            return o.Qa && o.Qa(s), o.U[s] || (o.U[s] = []), o.U[s].push(d), d;
          },
          notifySubscribers: function(t, r) {
            if (r = r || "change", r === "change" && this.Gb(), this.Wa(r)) {
              var s = r === "change" && this.ed || this.U[r].slice(0);
              try {
                e.u.xc();
                for (var o = 0, d; d = s[o]; ++o) d.Ib || d.lc(t);
              } finally {
                e.u.end();
              }
            }
          },
          ob: function() {
            return this.sc;
          },
          Dd: function(t) {
            return this.ob() !== t;
          },
          Gb: function() {
            ++this.sc;
          },
          ub: function(t) {
            var r = this, s = e.O(r), o, d, h, p, f;
            r.gb || (r.gb = r.notifySubscribers, r.notifySubscribers = W);
            var l = t(function() {
              r.Ja = !1, s && p === r && (p = r.nc ? r.nc() : r());
              var i = d || f && r.sb(h, p);
              f = d = o = !1, i && r.gb(h = p);
            });
            r.qc = function(i, m) {
              m && r.Ja || (f = !m), r.ed = r.U.change.slice(0), r.Ja = o = !0, p = i, l();
            }, r.pc = function(i) {
              o || (h = i, r.gb(i, "beforeChange"));
            }, r.rc = function() {
              f = !0;
            }, r.gd = function() {
              r.sb(h, r.v(!0)) && (d = !0);
            };
          },
          Wa: function(t) {
            return this.U[t] && this.U[t].length;
          },
          Bd: function(t) {
            if (t) return this.U[t] && this.U[t].length || 0;
            var r = 0;
            return e.a.P(this.U, function(s, o) {
              s !== "dirty" && (r += o.length);
            }), r;
          },
          sb: function(t, r) {
            return !this.equalityComparer || !this.equalityComparer(t, r);
          },
          toString: function() {
            return "[object Object]";
          },
          extend: function(t) {
            var r = this;
            return t && e.a.P(t, function(s, o) {
              var d = e.Ta[s];
              typeof d == "function" && (r = d(r, o) || r);
            }), r;
          }
        };
        e.L(H, "init", H.qb), e.L(H, "subscribe", H.subscribe), e.L(H, "extend", H.extend), e.L(H, "getSubscriptionsCount", H.Bd), e.a.Ba && e.a.setPrototypeOf(
          H,
          Function.prototype
        ), e.T.fn = H, e.Qc = function(t) {
          return t != null && typeof t.subscribe == "function" && typeof t.notifySubscribers == "function";
        }, e.b("subscribable", e.T), e.b("isSubscribable", e.Qc), e.S = e.u = /* @__PURE__ */ function() {
          function t(h) {
            s.push(o), o = h;
          }
          function r() {
            o = s.pop();
          }
          var s = [], o, d = 0;
          return {
            xc: t,
            end: r,
            cc: function(h) {
              if (o) {
                if (!e.Qc(h)) throw Error("Only subscribable things can act as dependencies");
                o.od.call(o.pd, h, h.fd || (h.fd = ++d));
              }
            },
            G: function(h, p, f) {
              try {
                return t(), h.apply(p, f || []);
              } finally {
                r();
              }
            },
            qa: function() {
              if (o) return o.o.qa();
            },
            Va: function() {
              if (o) return o.o.Va();
            },
            Ya: function() {
              if (o) return o.Ya;
            },
            o: function() {
              if (o) return o.o;
            }
          };
        }(), e.b("computedContext", e.S), e.b("computedContext.getDependenciesCount", e.S.qa), e.b("computedContext.getDependencies", e.S.Va), e.b("computedContext.isInitial", e.S.Ya), e.b("computedContext.registerDependency", e.S.cc), e.b("ignoreDependencies", e.Yd = e.u.G);
        var $ = e.a.Da("_latestValue");
        e.ta = function(t) {
          function r() {
            return 0 < arguments.length ? (r.sb(r[$], arguments[0]) && (r.ya(), r[$] = arguments[0], r.xa()), this) : (e.u.cc(r), r[$]);
          }
          return r[$] = t, e.a.Ba || e.a.extend(r, e.T.fn), e.T.fn.qb(r), e.a.Ab(r, z), e.options.deferUpdates && e.Ta.deferred(r, !0), r;
        };
        var z = { equalityComparer: F, v: function() {
          return this[$];
        }, xa: function() {
          this.notifySubscribers(this[$], "spectate"), this.notifySubscribers(this[$]);
        }, ya: function() {
          this.notifySubscribers(this[$], "beforeChange");
        } };
        e.a.Ba && e.a.setPrototypeOf(z, e.T.fn);
        var j = e.ta.Ma = "__ko_proto__";
        z[j] = e.ta, e.O = function(t) {
          if ((t = typeof t == "function" && t[j]) && t !== z[j] && t !== e.o.fn[j]) throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
          return !!t;
        }, e.Za = function(t) {
          return typeof t == "function" && (t[j] === z[j] || t[j] === e.o.fn[j] && t.Nc);
        }, e.b("observable", e.ta), e.b("isObservable", e.O), e.b("isWriteableObservable", e.Za), e.b("isWritableObservable", e.Za), e.b("observable.fn", z), e.L(z, "peek", z.v), e.L(z, "valueHasMutated", z.xa), e.L(z, "valueWillMutate", z.ya), e.Ha = function(t) {
          if (t = t || [], typeof t != "object" || !("length" in t)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
          return t = e.ta(t), e.a.Ab(
            t,
            e.Ha.fn
          ), t.extend({ trackArrayChanges: !0 });
        }, e.Ha.fn = { remove: function(t) {
          for (var r = this.v(), s = [], o = typeof t != "function" || e.O(t) ? function(p) {
            return p === t;
          } : t, d = 0; d < r.length; d++) {
            var h = r[d];
            if (o(h)) {
              if (s.length === 0 && this.ya(), r[d] !== h) throw Error("Array modified during remove; cannot remove item");
              s.push(h), r.splice(d, 1), d--;
            }
          }
          return s.length && this.xa(), s;
        }, removeAll: function(t) {
          if (t === u) {
            var r = this.v(), s = r.slice(0);
            return this.ya(), r.splice(0, r.length), this.xa(), s;
          }
          return t ? this.remove(function(o) {
            return 0 <= e.a.A(t, o);
          }) : [];
        }, destroy: function(t) {
          var r = this.v(), s = typeof t != "function" || e.O(t) ? function(h) {
            return h === t;
          } : t;
          this.ya();
          for (var o = r.length - 1; 0 <= o; o--) {
            var d = r[o];
            s(d) && (d._destroy = !0);
          }
          this.xa();
        }, destroyAll: function(t) {
          return t === u ? this.destroy(function() {
            return !0;
          }) : t ? this.destroy(function(r) {
            return 0 <= e.a.A(t, r);
          }) : [];
        }, indexOf: function(t) {
          var r = this();
          return e.a.A(r, t);
        }, replace: function(t, r) {
          var s = this.indexOf(t);
          0 <= s && (this.ya(), this.v()[s] = r, this.xa());
        }, sorted: function(t) {
          var r = this().slice(0);
          return t ? r.sort(t) : r.sort();
        }, reversed: function() {
          return this().slice(0).reverse();
        } }, e.a.Ba && e.a.setPrototypeOf(e.Ha.fn, e.ta.fn), e.a.D("pop push reverse shift sort splice unshift".split(" "), function(t) {
          e.Ha.fn[t] = function() {
            var r = this.v();
            this.ya(), this.zc(r, t, arguments);
            var s = r[t].apply(r, arguments);
            return this.xa(), s === r ? this : s;
          };
        }), e.a.D(["slice"], function(t) {
          e.Ha.fn[t] = function() {
            var r = this();
            return r[t].apply(r, arguments);
          };
        }), e.Pc = function(t) {
          return e.O(t) && typeof t.remove == "function" && typeof t.push == "function";
        }, e.b("observableArray", e.Ha), e.b("isObservableArray", e.Pc), e.Ta.trackArrayChanges = function(t, r) {
          function s() {
            function g() {
              if (f) {
                var x = [].concat(t.v() || []), a;
                t.Wa("arrayChange") && ((!d || 1 < f) && (d = e.a.Pb(l, x, t.Ob)), a = d), l = x, d = null, f = 0, a && a.length && t.notifySubscribers(a, "arrayChange");
              }
            }
            o ? g() : (o = !0, p = t.subscribe(function() {
              ++f;
            }, null, "spectate"), l = [].concat(t.v() || []), d = null, h = t.subscribe(g));
          }
          if (t.Ob = {}, r && typeof r == "object" && e.a.extend(t.Ob, r), t.Ob.sparse = !0, !t.zc) {
            var o = !1, d = null, h, p, f = 0, l, i = t.Qa, m = t.hb;
            t.Qa = function(g) {
              i && i.call(t, g), g === "arrayChange" && s();
            }, t.hb = function(g) {
              m && m.call(t, g), g !== "arrayChange" || t.Wa("arrayChange") || (h && h.s(), p && p.s(), p = h = null, o = !1, l = u);
            }, t.zc = function(g, x, a) {
              function y(L, N, I) {
                return v[v.length] = { status: L, value: N, index: I };
              }
              if (o && !f) {
                var v = [], S = g.length, E = a.length, C = 0;
                switch (x) {
                  case "push":
                    C = S;
                  case "unshift":
                    for (x = 0; x < E; x++) y("added", a[x], C + x);
                    break;
                  case "pop":
                    C = S - 1;
                  case "shift":
                    S && y("deleted", g[C], C);
                    break;
                  case "splice":
                    x = Math.min(Math.max(0, 0 > a[0] ? S + a[0] : a[0]), S);
                    for (var S = E === 1 ? S : Math.min(x + (a[1] || 0), S), E = x + E - 2, C = Math.max(S, E), w = [], T = [], R = 2; x < C; ++x, ++R) x < S && T.push(y("deleted", g[x], x)), x < E && w.push(y("added", a[R], x));
                    e.a.Kc(T, w);
                    break;
                  default:
                    return;
                }
                d = v;
              }
            };
          }
        };
        var O = e.a.Da("_state");
        e.o = e.$ = function(t, r, s) {
          function o() {
            if (0 < arguments.length) {
              if (typeof d == "function") d.apply(h.nb, arguments);
              else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
              return this;
            }
            return h.ra || e.u.cc(o), (h.ka || h.J && o.Xa()) && o.ha(), h.X;
          }
          if (typeof t == "object" ? s = t : (s = s || {}, t && (s.read = t)), typeof s.read != "function") throw Error("Pass a function that returns the value of the ko.computed");
          var d = s.write, h = { X: u, sa: !0, ka: !0, rb: !1, jc: !1, ra: !1, wb: !1, J: !1, Wc: s.read, nb: r || s.owner, l: s.disposeWhenNodeIsRemoved || s.l || null, Sa: s.disposeWhen || s.Sa, Rb: null, I: {}, V: 0, Ic: null };
          return o[O] = h, o.Nc = typeof d == "function", e.a.Ba || e.a.extend(o, e.T.fn), e.T.fn.qb(o), e.a.Ab(o, q), s.pure ? (h.wb = !0, h.J = !0, e.a.extend(o, se)) : s.deferEvaluation && e.a.extend(o, J), e.options.deferUpdates && e.Ta.deferred(o, !0), h.l && (h.jc = !0, h.l.nodeType || (h.l = null)), h.J || s.deferEvaluation || o.ha(), h.l && o.ja() && e.a.K.za(h.l, h.Rb = function() {
            o.s();
          }), o;
        };
        var q = {
          equalityComparer: F,
          qa: function() {
            return this[O].V;
          },
          Va: function() {
            var t = [];
            return e.a.P(this[O].I, function(r, s) {
              t[s.Ka] = s.da;
            }), t;
          },
          Vb: function(t) {
            if (!this[O].V) return !1;
            var r = this.Va();
            return e.a.A(r, t) !== -1 ? !0 : !!e.a.Lb(r, function(s) {
              return s.Vb && s.Vb(t);
            });
          },
          uc: function(t, r, s) {
            if (this[O].wb && r === this) throw Error("A 'pure' computed must not be called recursively");
            this[O].I[t] = s, s.Ka = this[O].V++, s.La = r.ob();
          },
          Xa: function() {
            var t, r, s = this[O].I;
            for (t in s) if (Object.prototype.hasOwnProperty.call(s, t) && (r = s[t], this.Ia && r.da.Ja || r.da.Dd(r.La))) return !0;
          },
          Jd: function() {
            this.Ia && !this[O].rb && this.Ia(!1);
          },
          ja: function() {
            var t = this[O];
            return t.ka || 0 < t.V;
          },
          Rd: function() {
            this.Ja ? this[O].ka && (this[O].sa = !0) : this.Hc();
          },
          $c: function(t) {
            if (t.Hb) {
              var r = t.subscribe(this.Jd, this, "dirty"), s = t.subscribe(
                this.Rd,
                this
              );
              return { da: t, s: function() {
                r.s(), s.s();
              } };
            }
            return t.subscribe(this.Hc, this);
          },
          Hc: function() {
            var t = this, r = t.throttleEvaluation;
            r && 0 <= r ? (clearTimeout(this[O].Ic), this[O].Ic = e.a.setTimeout(function() {
              t.ha(!0);
            }, r)) : t.Ia ? t.Ia(!0) : t.ha(!0);
          },
          ha: function(t) {
            var r = this[O], s = r.Sa, o = !1;
            if (!r.rb && !r.ra) {
              if (r.l && !e.a.Sb(r.l) || s && s()) {
                if (!r.jc) {
                  this.s();
                  return;
                }
              } else r.jc = !1;
              r.rb = !0;
              try {
                o = this.zd(t);
              } finally {
                r.rb = !1;
              }
              return o;
            }
          },
          zd: function(t) {
            var r = this[O], o = !1, s = r.wb ? u : !r.V, o = { qd: this, mb: r.I, Qb: r.V };
            e.u.xc({
              pd: o,
              od: Z,
              o: this,
              Ya: s
            }), r.I = {}, r.V = 0;
            var d = this.yd(r, o);
            return r.V ? o = this.sb(r.X, d) : (this.s(), o = !0), o && (r.J ? this.Gb() : this.notifySubscribers(r.X, "beforeChange"), r.X = d, this.notifySubscribers(r.X, "spectate"), !r.J && t && this.notifySubscribers(r.X), this.rc && this.rc()), s && this.notifySubscribers(r.X, "awake"), o;
          },
          yd: function(t, r) {
            try {
              var s = t.Wc;
              return t.nb ? s.call(t.nb) : s();
            } finally {
              e.u.end(), r.Qb && !t.J && e.a.P(r.mb, X), t.sa = t.ka = !1;
            }
          },
          v: function(t) {
            var r = this[O];
            return (r.ka && (t || !r.V) || r.J && this.Xa()) && this.ha(), r.X;
          },
          ub: function(t) {
            e.T.fn.ub.call(this, t), this.nc = function() {
              return this[O].J || (this[O].sa ? this.ha() : this[O].ka = !1), this[O].X;
            }, this.Ia = function(r) {
              this.pc(this[O].X), this[O].ka = !0, r && (this[O].sa = !0), this.qc(this, !r);
            };
          },
          s: function() {
            var t = this[O];
            !t.J && t.I && e.a.P(t.I, function(r, s) {
              s.s && s.s();
            }), t.l && t.Rb && e.a.K.yb(t.l, t.Rb), t.I = u, t.V = 0, t.ra = !0, t.sa = !1, t.ka = !1, t.J = !1, t.l = u, t.Sa = u, t.Wc = u, this.Nc || (t.nb = u);
          }
        }, se = { Qa: function(t) {
          var r = this, s = r[O];
          if (!s.ra && s.J && t == "change") {
            if (s.J = !1, s.sa || r.Xa()) s.I = null, s.V = 0, r.ha() && r.Gb();
            else {
              var o = [];
              e.a.P(s.I, function(d, h) {
                o[h.Ka] = d;
              }), e.a.D(o, function(d, h) {
                var p = s.I[d], f = r.$c(p.da);
                f.Ka = h, f.La = p.La, s.I[d] = f;
              }), r.Xa() && r.ha() && r.Gb();
            }
            s.ra || r.notifySubscribers(s.X, "awake");
          }
        }, hb: function(t) {
          var r = this[O];
          r.ra || t != "change" || this.Wa("change") || (e.a.P(r.I, function(s, o) {
            o.s && (r.I[s] = { da: o.da, Ka: o.Ka, La: o.La }, o.s());
          }), r.J = !0, this.notifySubscribers(u, "asleep"));
        }, ob: function() {
          var t = this[O];
          return t.J && (t.sa || this.Xa()) && this.ha(), e.T.fn.ob.call(this);
        } }, J = { Qa: function(t) {
          t != "change" && t != "beforeChange" || this.v();
        } };
        e.a.Ba && e.a.setPrototypeOf(q, e.T.fn);
        var G = e.ta.Ma;
        q[G] = e.o, e.Oc = function(t) {
          return typeof t == "function" && t[G] === q[G];
        }, e.Fd = function(t) {
          return e.Oc(t) && t[O] && t[O].wb;
        }, e.b("computed", e.o), e.b("dependentObservable", e.o), e.b("isComputed", e.Oc), e.b("isPureComputed", e.Fd), e.b("computed.fn", q), e.L(q, "peek", q.v), e.L(q, "dispose", q.s), e.L(q, "isActive", q.ja), e.L(q, "getDependenciesCount", q.qa), e.L(q, "getDependencies", q.Va), e.xb = function(t, r) {
          return typeof t == "function" ? e.o(
            t,
            r,
            { pure: !0 }
          ) : (t = e.a.extend({}, t), t.pure = !0, e.o(t, r));
        }, e.b("pureComputed", e.xb), function() {
          function t(o, d, h) {
            if (h = h || new s(), o = d(o), typeof o != "object" || o === null || o === u || o instanceof RegExp || o instanceof Date || o instanceof String || o instanceof Number || o instanceof Boolean) return o;
            var p = o instanceof Array ? [] : {};
            return h.save(o, p), r(o, function(f) {
              var l = d(o[f]);
              switch (typeof l) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                  p[f] = l;
                  break;
                case "object":
                case "undefined":
                  var i = h.get(l);
                  p[f] = i !== u ? i : t(l, d, h);
              }
            }), p;
          }
          function r(o, d) {
            if (o instanceof Array) {
              for (var h = 0; h < o.length; h++) d(h);
              typeof o.toJSON == "function" && d("toJSON");
            } else for (h in o) d(h);
          }
          function s() {
            this.keys = [], this.values = [];
          }
          e.ad = function(o) {
            if (arguments.length == 0) throw Error("When calling ko.toJS, pass the object you want to convert.");
            return t(o, function(d) {
              for (var h = 0; e.O(d) && 10 > h; h++) d = d();
              return d;
            });
          }, e.toJSON = function(o, d, h) {
            return o = e.ad(o), e.a.hc(o, d, h);
          }, s.prototype = { constructor: s, save: function(o, d) {
            var h = e.a.A(
              this.keys,
              o
            );
            0 <= h ? this.values[h] = d : (this.keys.push(o), this.values.push(d));
          }, get: function(o) {
            return o = e.a.A(this.keys, o), 0 <= o ? this.values[o] : u;
          } };
        }(), e.b("toJS", e.ad), e.b("toJSON", e.toJSON), e.Wd = function(t, r, s) {
          function o(d) {
            var h = e.xb(t, s).extend({ ma: "always" }), p = h.subscribe(function(f) {
              f && (p.s(), d(f));
            });
            return h.notifySubscribers(h.v()), p;
          }
          return typeof Promise != "function" || r ? o(r.bind(s)) : new Promise(o);
        }, e.b("when", e.Wd), function() {
          e.w = { M: function(t) {
            switch (e.a.R(t)) {
              case "option":
                return t.__ko__hasDomDataOptionValue__ === !0 ? e.a.g.get(t, e.c.options.$b) : 7 >= e.a.W ? t.getAttributeNode("value") && t.getAttributeNode("value").specified ? t.value : t.text : t.value;
              case "select":
                return 0 <= t.selectedIndex ? e.w.M(t.options[t.selectedIndex]) : u;
              default:
                return t.value;
            }
          }, cb: function(t, r, s) {
            switch (e.a.R(t)) {
              case "option":
                typeof r == "string" ? (e.a.g.set(t, e.c.options.$b, u), "__ko__hasDomDataOptionValue__" in t && delete t.__ko__hasDomDataOptionValue__, t.value = r) : (e.a.g.set(t, e.c.options.$b, r), t.__ko__hasDomDataOptionValue__ = !0, t.value = typeof r == "number" ? r : "");
                break;
              case "select":
                (r === "" || r === null) && (r = u);
                for (var o = -1, d = 0, h = t.options.length, p; d < h; ++d) if (p = e.w.M(t.options[d]), p == r || p === "" && r === u) {
                  o = d;
                  break;
                }
                (s || 0 <= o || r === u && 1 < t.size) && (t.selectedIndex = o, e.a.W === 6 && e.a.setTimeout(function() {
                  t.selectedIndex = o;
                }, 0));
                break;
              default:
                (r === null || r === u) && (r = ""), t.value = r;
            }
          } };
        }(), e.b("selectExtensions", e.w), e.b("selectExtensions.readValue", e.w.M), e.b("selectExtensions.writeValue", e.w.cb), e.m = function() {
          function t(f) {
            f = e.a.Db(f), f.charCodeAt(0) === 123 && (f = f.slice(
              1,
              -1
            )), f += `
,`;
            var l = [], i = f.match(o), m, g = [], x = 0;
            if (1 < i.length) {
              for (var a = 0, y; y = i[a]; ++a) {
                var v = y.charCodeAt(0);
                if (v === 44) {
                  if (0 >= x) {
                    l.push(m && g.length ? { key: m, value: g.join("") } : { unknown: m || g.join("") }), m = x = 0, g = [];
                    continue;
                  }
                } else if (v === 58) {
                  if (!x && !m && g.length === 1) {
                    m = g.pop();
                    continue;
                  }
                } else {
                  if (v === 47 && 1 < y.length && (y.charCodeAt(1) === 47 || y.charCodeAt(1) === 42)) continue;
                  v === 47 && a && 1 < y.length ? (v = i[a - 1].match(d)) && !h[v[0]] && (f = f.substr(f.indexOf(y) + 1), i = f.match(o), a = -1, y = "/") : v === 40 || v === 123 || v === 91 ? ++x : v === 41 || v === 125 || v === 93 ? --x : m || g.length || v !== 34 && v !== 39 || (y = y.slice(1, -1));
                }
                g.push(y);
              }
              if (0 < x) throw Error("Unbalanced parentheses, braces, or brackets");
            }
            return l;
          }
          var r = ["true", "false", "null", "undefined"], s = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, o = RegExp(`"(?:\\\\.|[^"])*"|'(?:\\\\.|[^'])*'|\`(?:\\\\.|[^\`])*\`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*
|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,"'\`{}()/:[\\]]*[^\\s,"'\`{}()/:[\\]]|[^\\s]`, "g"), d = /[\])"'A-Za-z0-9_$]+$/, h = { in: 1, return: 1, typeof: 1 }, p = {};
          return { Ra: [], wa: p, ac: t, vb: function(f, l) {
            function i(v, S) {
              var E;
              if (!a) {
                var C = e.getBindingHandler(v);
                if (C && C.preprocess && !(S = C.preprocess(S, v, i))) return;
                (C = p[v]) && (E = S, 0 <= e.a.A(r, E) ? E = !1 : (C = E.match(s), E = C === null ? !1 : C[1] ? "Object(" + C[1] + ")" + C[2] : E), C = E), C && g.push("'" + (typeof p[v] == "string" ? p[v] : v) + "':function(_z){" + E + "=_z}");
              }
              x && (S = "function(){return " + S + " }"), m.push("'" + v + "':" + S);
            }
            l = l || {};
            var m = [], g = [], x = l.valueAccessors, a = l.bindingParams, y = typeof f == "string" ? t(f) : f;
            return e.a.D(y, function(v) {
              i(
                v.key || v.unknown,
                v.value
              );
            }), g.length && i("_ko_property_writers", "{" + g.join(",") + " }"), m.join(",");
          }, Id: function(f, l) {
            for (var i = 0; i < f.length; i++) if (f[i].key == l) return !0;
            return !1;
          }, eb: function(f, l, i, m, g) {
            f && e.O(f) ? !e.Za(f) || g && f.v() === m || f(m) : (f = l.get("_ko_property_writers")) && f[i] && f[i](m);
          } };
        }(), e.b("expressionRewriting", e.m), e.b("expressionRewriting.bindingRewriteValidators", e.m.Ra), e.b("expressionRewriting.parseObjectLiteral", e.m.ac), e.b("expressionRewriting.preProcessBindings", e.m.vb), e.b(
          "expressionRewriting._twoWayBindings",
          e.m.wa
        ), e.b("jsonExpressionRewriting", e.m), e.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", e.m.vb), function() {
          function t(i) {
            return i.nodeType == 8 && h.test(d ? i.text : i.nodeValue);
          }
          function r(i) {
            return i.nodeType == 8 && p.test(d ? i.text : i.nodeValue);
          }
          function s(i, m) {
            for (var g = i, x = 1, a = []; g = g.nextSibling; ) {
              if (r(g) && (e.a.g.set(g, l, !0), x--, x === 0)) return a;
              a.push(g), t(g) && x++;
            }
            if (!m) throw Error("Cannot find closing comment tag to match: " + i.nodeValue);
            return null;
          }
          function o(i, m) {
            var g = s(i, m);
            return g ? 0 < g.length ? g[g.length - 1].nextSibling : i.nextSibling : null;
          }
          var d = n && n.createComment("test").text === "<!--test-->", h = d ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/, p = d ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, f = { ul: !0, ol: !0 }, l = "__ko_matchedEndComment__";
          e.h = { ea: {}, childNodes: function(i) {
            return t(i) ? s(i) : i.childNodes;
          }, Ea: function(i) {
            if (t(i)) {
              i = e.h.childNodes(i);
              for (var m = 0, g = i.length; m < g; m++) e.removeNode(i[m]);
            } else e.a.Tb(i);
          }, va: function(i, m) {
            if (t(i)) {
              e.h.Ea(i);
              for (var g = i.nextSibling, x = 0, a = m.length; x < a; x++) g.parentNode.insertBefore(m[x], g);
            } else e.a.va(i, m);
          }, Vc: function(i, m) {
            var g;
            t(i) ? (g = i.nextSibling, i = i.parentNode) : g = i.firstChild, g ? m !== g && i.insertBefore(m, g) : i.appendChild(m);
          }, Wb: function(i, m, g) {
            g ? (g = g.nextSibling, t(i) && (i = i.parentNode), g ? m !== g && i.insertBefore(m, g) : i.appendChild(m)) : e.h.Vc(i, m);
          }, firstChild: function(i) {
            if (t(i)) return !i.nextSibling || r(i.nextSibling) ? null : i.nextSibling;
            if (i.firstChild && r(i.firstChild)) throw Error("Found invalid end comment, as the first child of " + i);
            return i.firstChild;
          }, nextSibling: function(i) {
            if (t(i) && (i = o(i)), i.nextSibling && r(i.nextSibling)) {
              var m = i.nextSibling;
              if (r(m) && !e.a.g.get(m, l)) throw Error("Found end comment without a matching opening comment, as child of " + i);
              return null;
            }
            return i.nextSibling;
          }, Cd: t, Vd: function(i) {
            return (i = (d ? i.text : i.nodeValue).match(h)) ? i[1] : null;
          }, Sc: function(i) {
            if (f[e.a.R(i)]) {
              var m = i.firstChild;
              if (m)
                do
                  if (m.nodeType === 1) {
                    var g;
                    g = m.firstChild;
                    var x = null;
                    if (g)
                      do
                        if (x) x.push(g);
                        else if (t(g)) {
                          var a = o(g, !0);
                          a ? g = a : x = [g];
                        } else r(g) && (x = [g]);
                      while (g = g.nextSibling);
                    if (g = x) for (x = m.nextSibling, a = 0; a < g.length; a++) x ? i.insertBefore(g[a], x) : i.appendChild(g[a]);
                  }
                while (m = m.nextSibling);
            }
          } };
        }(), e.b("virtualElements", e.h), e.b("virtualElements.allowedBindings", e.h.ea), e.b("virtualElements.emptyNode", e.h.Ea), e.b("virtualElements.insertAfter", e.h.Wb), e.b("virtualElements.prepend", e.h.Vc), e.b("virtualElements.setDomNodeChildren", e.h.va), function() {
          e.ga = function() {
            this.nd = {};
          }, e.a.extend(e.ga.prototype, {
            nodeHasBindings: function(t) {
              switch (t.nodeType) {
                case 1:
                  return t.getAttribute("data-bind") != null || e.j.getComponentNameForNode(t);
                case 8:
                  return e.h.Cd(t);
                default:
                  return !1;
              }
            },
            getBindings: function(t, r) {
              var s = this.getBindingsString(t, r), s = s ? this.parseBindingsString(s, r, t) : null;
              return e.j.tc(s, t, r, !1);
            },
            getBindingAccessors: function(t, r) {
              var s = this.getBindingsString(t, r), s = s ? this.parseBindingsString(s, r, t, { valueAccessors: !0 }) : null;
              return e.j.tc(s, t, r, !0);
            },
            getBindingsString: function(t) {
              switch (t.nodeType) {
                case 1:
                  return t.getAttribute("data-bind");
                case 8:
                  return e.h.Vd(t);
                default:
                  return null;
              }
            },
            parseBindingsString: function(t, r, s, o) {
              try {
                var d = this.nd, h = t + (o && o.valueAccessors || ""), p;
                if (!(p = d[h])) {
                  var f, l = "with($context){with($data||{}){return{" + e.m.vb(t, o) + "}}}";
                  f = new Function("$context", "$element", l), p = d[h] = f;
                }
                return p(r, s);
              } catch (i) {
                throw i.message = `Unable to parse bindings.
Bindings value: ` + t + `
Message: ` + i.message, i;
              }
            }
          }), e.ga.instance = new e.ga();
        }(), e.b("bindingProvider", e.ga), function() {
          function t(C) {
            var w = (C = e.a.g.get(C, E)) && C.N;
            w && (C.N = null, w.Tc());
          }
          function r(C, w, T) {
            this.node = C, this.yc = w, this.kb = [], this.H = !1, w.N || e.a.K.za(C, t), T && T.N && (T.N.kb.push(C), this.Kb = T);
          }
          function s(C) {
            return function() {
              return C;
            };
          }
          function o(C) {
            return C();
          }
          function d(C) {
            return e.a.Ga(e.u.G(C), function(w, T) {
              return function() {
                return C()[T];
              };
            });
          }
          function h(C, w, T) {
            return typeof C == "function" ? d(C.bind(null, w, T)) : e.a.Ga(C, s);
          }
          function p(C, w) {
            return d(this.getBindings.bind(this, C, w));
          }
          function f(C, w) {
            var T = e.h.firstChild(w);
            if (T) {
              var R, L = e.ga.instance, N = L.preprocessNode;
              if (N) {
                for (; R = T; ) T = e.h.nextSibling(R), N.call(L, R);
                T = e.h.firstChild(w);
              }
              for (; R = T; ) T = e.h.nextSibling(R), l(C, R);
            }
            e.i.ma(w, e.i.H);
          }
          function l(C, w) {
            var T = C, R = w.nodeType === 1;
            R && e.h.Sc(w), (R || e.ga.instance.nodeHasBindings(w)) && (T = m(w, null, C).bindingContextForDescendants), T && !v[e.a.R(w)] && f(T, w);
          }
          function i(C) {
            var w = [], T = {}, R = [];
            return e.a.P(C, function L(N) {
              if (!T[N]) {
                var I = e.getBindingHandler(N);
                I && (I.after && (R.push(N), e.a.D(I.after, function(ae) {
                  if (C[ae]) {
                    if (e.a.A(R, ae) !== -1) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + R.join(", "));
                    L(ae);
                  }
                }), R.length--), w.push({ key: N, Mc: I })), T[N] = !0;
              }
            }), w;
          }
          function m(C, w, T) {
            var R = e.a.g.Ub(C, E, {}), L = R.hd;
            if (!w) {
              if (L) throw Error("You cannot apply bindings multiple times to the same element.");
              R.hd = !0;
            }
            L || (R.context = T), R.Zb || (R.Zb = {});
            var N;
            if (w && typeof w != "function") N = w;
            else {
              var I = e.ga.instance, ae = I.getBindingAccessors || p, K = e.$(function() {
                return (N = w ? w(T, C) : ae.call(I, C, T)) && (T[x] && T[x](), T[y] && T[y]()), N;
              }, null, { l: C });
              N && K.ja() || (K = null);
            }
            var le = T, re;
            if (N) {
              var de = function() {
                return e.a.Ga(K ? K() : N, o);
              }, fe = K ? function(U) {
                return function() {
                  return o(K()[U]);
                };
              } : function(U) {
                return N[U];
              };
              de.get = function(U) {
                return N[U] && o(fe(U));
              }, de.has = function(U) {
                return U in N;
              }, e.i.H in N && e.i.subscribe(C, e.i.H, function() {
                var U = (0, N[e.i.H])();
                if (U) {
                  var he = e.h.childNodes(C);
                  he.length && U(he, e.Ec(he[0]));
                }
              }), e.i.pa in N && (le = e.i.Cb(C, T), e.i.subscribe(C, e.i.pa, function() {
                var U = (0, N[e.i.pa])();
                U && e.h.firstChild(C) && U(C);
              })), R = i(N), e.a.D(R, function(U) {
                var he = U.Mc.init, ye = U.Mc.update, me = U.key;
                if (C.nodeType === 8 && !e.h.ea[me]) throw Error("The binding '" + me + "' cannot be used with virtual elements");
                try {
                  typeof he == "function" && e.u.G(function() {
                    var be = he(C, fe(me), de, le.$data, le);
                    if (be && be.controlsDescendantBindings) {
                      if (re !== u) throw Error("Multiple bindings (" + re + " and " + me + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                      re = me;
                    }
                  }), typeof ye == "function" && e.$(function() {
                    ye(C, fe(me), de, le.$data, le);
                  }, null, { l: C });
                } catch (be) {
                  throw be.message = 'Unable to process binding "' + me + ": " + N[me] + `"
Message: ` + be.message, be;
                }
              });
            }
            return R = re === u, { shouldBindDescendants: R, bindingContextForDescendants: R && le };
          }
          function g(C, w) {
            return C && C instanceof e.fa ? C : new e.fa(C, u, u, w);
          }
          var x = e.a.Da("_subscribable"), a = e.a.Da("_ancestorBindingInfo"), y = e.a.Da("_dataDependency");
          e.c = {};
          var v = { script: !0, textarea: !0, template: !0 };
          e.getBindingHandler = function(C) {
            return e.c[C];
          };
          var S = {};
          e.fa = function(C, w, T, R, L) {
            function N() {
              var fe = le ? K() : K, U = e.a.f(fe);
              return w ? (e.a.extend(I, w), a in w && (I[a] = w[a])) : (I.$parents = [], I.$root = U, I.ko = e), I[x] = re, ae ? U = I.$data : (I.$rawData = fe, I.$data = U), T && (I[T] = U), R && R(I, w, U), w && w[x] && !e.S.o().Vb(w[x]) && w[x](), de && (I[y] = de), I.$data;
            }
            var I = this, ae = C === S, K = ae ? u : C, le = typeof K == "function" && !e.O(K), re, de = L && L.dataDependency;
            L && L.exportDependencies ? N() : (re = e.xb(N), re.v(), re.ja() ? re.equalityComparer = null : I[x] = u);
          }, e.fa.prototype.createChildContext = function(C, w, T, R) {
            if (!R && w && typeof w == "object" && (R = w, w = R.as, T = R.extend), w && R && R.noChildContext) {
              var L = typeof C == "function" && !e.O(C);
              return new e.fa(S, this, null, function(N) {
                T && T(N), N[w] = L ? C() : C;
              }, R);
            }
            return new e.fa(
              C,
              this,
              w,
              function(N, I) {
                N.$parentContext = I, N.$parent = I.$data, N.$parents = (I.$parents || []).slice(0), N.$parents.unshift(N.$parent), T && T(N);
              },
              R
            );
          }, e.fa.prototype.extend = function(C, w) {
            return new e.fa(S, this, null, function(T) {
              e.a.extend(T, typeof C == "function" ? C(T) : C);
            }, w);
          };
          var E = e.a.g.Z();
          r.prototype.Tc = function() {
            this.Kb && this.Kb.N && this.Kb.N.sd(this.node);
          }, r.prototype.sd = function(C) {
            e.a.Pa(this.kb, C), !this.kb.length && this.H && this.Cc();
          }, r.prototype.Cc = function() {
            this.H = !0, this.yc.N && !this.kb.length && (this.yc.N = null, e.a.K.yb(this.node, t), e.i.ma(this.node, e.i.pa), this.Tc());
          }, e.i = { H: "childrenComplete", pa: "descendantsComplete", subscribe: function(C, w, T, R, L) {
            var N = e.a.g.Ub(C, E, {});
            return N.Fa || (N.Fa = new e.T()), L && L.notifyImmediately && N.Zb[w] && e.u.G(T, R, [C]), N.Fa.subscribe(T, R, w);
          }, ma: function(C, w) {
            var T = e.a.g.get(C, E);
            if (T && (T.Zb[w] = !0, T.Fa && T.Fa.notifySubscribers(C, w), w == e.i.H)) {
              if (T.N) T.N.Cc();
              else if (T.N === u && T.Fa && T.Fa.Wa(e.i.pa)) throw Error("descendantsComplete event not supported for bindings on this node");
            }
          }, Cb: function(C, w) {
            var T = e.a.g.Ub(C, E, {});
            return T.N || (T.N = new r(C, T, w[a])), w[a] == T ? w : w.extend(function(R) {
              R[a] = T;
            });
          } }, e.Td = function(C) {
            return (C = e.a.g.get(C, E)) && C.context;
          }, e.ib = function(C, w, T) {
            return C.nodeType === 1 && e.h.Sc(C), m(C, w, g(T));
          }, e.ld = function(C, w, T) {
            return T = g(T), e.ib(C, h(w, T, C), T);
          }, e.Oa = function(C, w) {
            w.nodeType !== 1 && w.nodeType !== 8 || f(g(C), w);
          }, e.vc = function(C, w, T) {
            if (!_ && c.jQuery && (_ = c.jQuery), 2 > arguments.length) {
              if (w = n.body, !w) throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
            } else if (!w || w.nodeType !== 1 && w.nodeType !== 8) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
            l(g(C, T), w);
          }, e.Dc = function(C) {
            return !C || C.nodeType !== 1 && C.nodeType !== 8 ? u : e.Td(C);
          }, e.Ec = function(C) {
            return (C = e.Dc(C)) ? C.$data : u;
          }, e.b("bindingHandlers", e.c), e.b("bindingEvent", e.i), e.b("bindingEvent.subscribe", e.i.subscribe), e.b("bindingEvent.startPossiblyAsyncContentBinding", e.i.Cb), e.b("applyBindings", e.vc), e.b("applyBindingsToDescendants", e.Oa), e.b("applyBindingAccessorsToNode", e.ib), e.b("applyBindingsToNode", e.ld), e.b("contextFor", e.Dc), e.b("dataFor", e.Ec);
        }(), function(t) {
          function r(p, f) {
            var l = Object.prototype.hasOwnProperty.call(d, p) ? d[p] : t, i;
            l ? l.subscribe(f) : (l = d[p] = new e.T(), l.subscribe(f), s(p, function(m, g) {
              var x = !(!g || !g.synchronous);
              h[p] = { definition: m, Gd: x }, delete d[p], i || x ? l.notifySubscribers(m) : e.na.zb(function() {
                l.notifySubscribers(m);
              });
            }), i = !0);
          }
          function s(p, f) {
            o("getConfig", [p], function(l) {
              l ? o("loadComponent", [p, l], function(i) {
                f(
                  i,
                  l
                );
              }) : f(null, null);
            });
          }
          function o(p, f, l, i) {
            i || (i = e.j.loaders.slice(0));
            var m = i.shift();
            if (m) {
              var g = m[p];
              if (g) {
                var x = !1;
                if (g.apply(m, f.concat(function(a) {
                  x ? l(null) : a !== null ? l(a) : o(p, f, l, i);
                })) !== t && (x = !0, !m.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
              } else o(p, f, l, i);
            } else l(null);
          }
          var d = {}, h = {};
          e.j = { get: function(p, f) {
            var l = Object.prototype.hasOwnProperty.call(h, p) ? h[p] : t;
            l ? l.Gd ? e.u.G(function() {
              f(l.definition);
            }) : e.na.zb(function() {
              f(l.definition);
            }) : r(p, f);
          }, Bc: function(p) {
            delete h[p];
          }, oc: o }, e.j.loaders = [], e.b("components", e.j), e.b("components.get", e.j.get), e.b("components.clearCachedDefinition", e.j.Bc);
        }(), function() {
          function t(l, i, m, g) {
            function x() {
              --y === 0 && g(a);
            }
            var a = {}, y = 2, v = m.template;
            m = m.viewModel, v ? d(i, v, function(S) {
              e.j.oc("loadTemplate", [l, S], function(E) {
                a.template = E, x();
              });
            }) : x(), m ? d(i, m, function(S) {
              e.j.oc("loadViewModel", [l, S], function(E) {
                a[f] = E, x();
              });
            }) : x();
          }
          function r(l, i, m) {
            if (typeof i == "function") m(function(x) {
              return new i(x);
            });
            else if (typeof i[f] == "function") m(i[f]);
            else if ("instance" in i) {
              var g = i.instance;
              m(function() {
                return g;
              });
            } else "viewModel" in i ? r(l, i.viewModel, m) : l("Unknown viewModel value: " + i);
          }
          function s(l) {
            switch (e.a.R(l)) {
              case "script":
                return e.a.ua(l.text);
              case "textarea":
                return e.a.ua(l.value);
              case "template":
                if (o(l.content)) return e.a.Ca(l.content.childNodes);
            }
            return e.a.Ca(l.childNodes);
          }
          function o(l) {
            return c.DocumentFragment ? l instanceof DocumentFragment : l && l.nodeType === 11;
          }
          function d(l, i, m) {
            typeof i.require == "string" ? k || c.require ? (k || c.require)([i.require], function(g) {
              g && typeof g == "object" && g.Xd && g.default && (g = g.default), m(g);
            }) : l("Uses require, but no AMD loader is present") : m(i);
          }
          function h(l) {
            return function(i) {
              throw Error("Component '" + l + "': " + i);
            };
          }
          var p = {};
          e.j.register = function(l, i) {
            if (!i) throw Error("Invalid configuration for " + l);
            if (e.j.tb(l)) throw Error("Component " + l + " is already registered");
            p[l] = i;
          }, e.j.tb = function(l) {
            return Object.prototype.hasOwnProperty.call(p, l);
          }, e.j.unregister = function(l) {
            delete p[l], e.j.Bc(l);
          }, e.j.Fc = { getConfig: function(l, i) {
            i(e.j.tb(l) ? p[l] : null);
          }, loadComponent: function(l, i, m) {
            var g = h(l);
            d(g, i, function(x) {
              t(l, g, x, m);
            });
          }, loadTemplate: function(l, i, m) {
            if (l = h(l), typeof i == "string") m(e.a.ua(i));
            else if (i instanceof Array) m(i);
            else if (o(i)) m(e.a.la(i.childNodes));
            else if (i.element) if (i = i.element, c.HTMLElement ? i instanceof HTMLElement : i && i.tagName && i.nodeType === 1) m(s(i));
            else if (typeof i == "string") {
              var g = n.getElementById(i);
              g ? m(s(g)) : l("Cannot find element with ID " + i);
            } else l("Unknown element type: " + i);
            else l("Unknown template value: " + i);
          }, loadViewModel: function(l, i, m) {
            r(h(l), i, m);
          } };
          var f = "createViewModel";
          e.b("components.register", e.j.register), e.b("components.isRegistered", e.j.tb), e.b("components.unregister", e.j.unregister), e.b("components.defaultLoader", e.j.Fc), e.j.loaders.push(e.j.Fc), e.j.dd = p;
        }(), function() {
          function t(s, o) {
            var d = s.getAttribute("params");
            if (d) {
              var d = r.parseBindingsString(d, o, s, { valueAccessors: !0, bindingParams: !0 }), d = e.a.Ga(d, function(f) {
                return e.o(f, null, { l: s });
              }), h = e.a.Ga(
                d,
                function(f) {
                  var l = f.v();
                  return f.ja() ? e.o({ read: function() {
                    return e.a.f(f());
                  }, write: e.Za(l) && function(i) {
                    f()(i);
                  }, l: s }) : l;
                }
              );
              return Object.prototype.hasOwnProperty.call(h, "$raw") || (h.$raw = d), h;
            }
            return { $raw: {} };
          }
          e.j.getComponentNameForNode = function(s) {
            var o = e.a.R(s);
            if (e.j.tb(o) && (o.indexOf("-") != -1 || "" + s == "[object HTMLUnknownElement]" || 8 >= e.a.W && s.tagName === o)) return o;
          }, e.j.tc = function(s, o, d, h) {
            if (o.nodeType === 1) {
              var p = e.j.getComponentNameForNode(o);
              if (p) {
                if (s = s || {}, s.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                var f = { name: p, params: t(o, d) };
                s.component = h ? function() {
                  return f;
                } : f;
              }
            }
            return s;
          };
          var r = new e.ga();
          9 > e.a.W && (e.j.register = /* @__PURE__ */ function(s) {
            return function(o) {
              return s.apply(this, arguments);
            };
          }(e.j.register), n.createDocumentFragment = /* @__PURE__ */ function(s) {
            return function() {
              var o = s();
              return e.j.dd, o;
            };
          }(n.createDocumentFragment));
        }(), function() {
          function t(o, d, h) {
            if (d = d.template, !d) throw Error("Component '" + o + "' has no template");
            o = e.a.Ca(d), e.h.va(h, o);
          }
          function r(o, d, h) {
            var p = o.createViewModel;
            return p ? p.call(
              o,
              d,
              h
            ) : d;
          }
          var s = 0;
          e.c.component = { init: function(o, d, h, p, f) {
            function l() {
              var a = i && i.dispose;
              typeof a == "function" && a.call(i), g && g.s(), m = i = g = null;
            }
            var i, m, g, x = e.a.la(e.h.childNodes(o));
            return e.h.Ea(o), e.a.K.za(o, l), e.o(function() {
              var a = e.a.f(d()), y, v;
              if (typeof a == "string" ? y = a : (y = e.a.f(a.name), v = e.a.f(a.params)), !y) throw Error("No component name specified");
              var S = e.i.Cb(o, f), E = m = ++s;
              e.j.get(y, function(C) {
                if (m === E) {
                  if (l(), !C) throw Error("Unknown component '" + y + "'");
                  t(y, C, o);
                  var w = r(C, v, { element: o, templateNodes: x });
                  C = S.createChildContext(w, { extend: function(T) {
                    T.$component = w, T.$componentTemplateNodes = x;
                  } }), w && w.koDescendantsComplete && (g = e.i.subscribe(o, e.i.pa, w.koDescendantsComplete, w)), i = w, e.Oa(C, o);
                }
              });
            }, null, { l: o }), { controlsDescendantBindings: !0 };
          } }, e.h.ea.component = !0;
        }();
        var ne = { class: "className", for: "htmlFor" };
        e.c.attr = { update: function(t, r) {
          var s = e.a.f(r()) || {};
          e.a.P(s, function(o, d) {
            d = e.a.f(d);
            var h = o.indexOf(":"), h = "lookupNamespaceURI" in t && 0 < h && t.lookupNamespaceURI(o.substr(0, h)), p = d === !1 || d === null || d === u;
            p ? h ? t.removeAttributeNS(h, o) : t.removeAttribute(o) : d = d.toString(), 8 >= e.a.W && o in ne ? (o = ne[o], p ? t.removeAttribute(o) : t[o] = d) : p || (h ? t.setAttributeNS(h, o, d) : t.setAttribute(o, d)), o === "name" && e.a.Yc(t, p ? "" : d);
          });
        } }, function() {
          e.c.checked = { after: ["value", "attr"], init: function(t, r, s) {
            function o() {
              var a = t.checked, y = h();
              if (!e.S.Ya() && (a || !f && !e.S.qa())) {
                var v = e.u.G(r);
                if (i) {
                  var S = m ? v.v() : v, E = x;
                  x = y, E !== y ? a && (e.a.Na(S, y, !0), e.a.Na(S, E, !1)) : e.a.Na(S, y, a), m && e.Za(v) && v(S);
                } else p && (y === u ? y = a : a || (y = u)), e.m.eb(
                  v,
                  s,
                  "checked",
                  y,
                  !0
                );
              }
            }
            function d() {
              var a = e.a.f(r()), y = h();
              i ? (t.checked = 0 <= e.a.A(a, y), x = y) : t.checked = p && y === u ? !!a : h() === a;
            }
            var h = e.xb(function() {
              if (s.has("checkedValue")) return e.a.f(s.get("checkedValue"));
              if (g) return s.has("value") ? e.a.f(s.get("value")) : t.value;
            }), p = t.type == "checkbox", f = t.type == "radio";
            if (p || f) {
              var l = r(), i = p && e.a.f(l) instanceof Array, m = !(i && l.push && l.splice), g = f || i, x = i ? h() : u;
              f && !t.name && e.c.uniqueName.init(t, function() {
                return !0;
              }), e.o(o, null, { l: t }), e.a.B(t, "click", o), e.o(d, null, { l: t }), l = u;
            }
          } }, e.m.wa.checked = !0, e.c.checkedValue = { update: function(t, r) {
            t.value = e.a.f(r());
          } };
        }(), e.c.class = { update: function(t, r) {
          var s = e.a.Db(e.a.f(r()));
          e.a.Eb(t, t.__ko__cssValue, !1), t.__ko__cssValue = s, e.a.Eb(t, s, !0);
        } }, e.c.css = { update: function(t, r) {
          var s = e.a.f(r());
          s !== null && typeof s == "object" ? e.a.P(s, function(o, d) {
            d = e.a.f(d), e.a.Eb(t, o, d);
          }) : e.c.class.update(t, r);
        } }, e.c.enable = { update: function(t, r) {
          var s = e.a.f(r());
          s && t.disabled ? t.removeAttribute("disabled") : s || t.disabled || (t.disabled = !0);
        } }, e.c.disable = { update: function(t, r) {
          e.c.enable.update(t, function() {
            return !e.a.f(r());
          });
        } }, e.c.event = { init: function(t, r, s, o, d) {
          var h = r() || {};
          e.a.P(h, function(p) {
            typeof p == "string" && e.a.B(t, p, function(f) {
              var l, i = r()[p];
              if (i) {
                try {
                  var m = e.a.la(arguments);
                  o = d.$data, m.unshift(o), l = i.apply(o, m);
                } finally {
                  l !== !0 && (f.preventDefault ? f.preventDefault() : f.returnValue = !1);
                }
                s.get(p + "Bubble") === !1 && (f.cancelBubble = !0, f.stopPropagation && f.stopPropagation());
              }
            });
          });
        } }, e.c.foreach = { Rc: function(t) {
          return function() {
            var r = t(), s = e.a.bc(r);
            return !s || typeof s.length == "number" ? { foreach: r, templateEngine: e.ba.Ma } : (e.a.f(r), { foreach: s.data, as: s.as, noChildContext: s.noChildContext, includeDestroyed: s.includeDestroyed, afterAdd: s.afterAdd, beforeRemove: s.beforeRemove, afterRender: s.afterRender, beforeMove: s.beforeMove, afterMove: s.afterMove, templateEngine: e.ba.Ma });
          };
        }, init: function(t, r) {
          return e.c.template.init(t, e.c.foreach.Rc(r));
        }, update: function(t, r, s, o, d) {
          return e.c.template.update(t, e.c.foreach.Rc(r), s, o, d);
        } }, e.m.Ra.foreach = !1, e.h.ea.foreach = !0, e.c.hasfocus = { init: function(t, r, s) {
          function o(p) {
            t.__ko_hasfocusUpdating = !0;
            var f = t.ownerDocument;
            if ("activeElement" in f) {
              var l;
              try {
                l = f.activeElement;
              } catch {
                l = f.body;
              }
              p = l === t;
            }
            f = r(), e.m.eb(f, s, "hasfocus", p, !0), t.__ko_hasfocusLastValue = p, t.__ko_hasfocusUpdating = !1;
          }
          var d = o.bind(null, !0), h = o.bind(null, !1);
          e.a.B(t, "focus", d), e.a.B(t, "focusin", d), e.a.B(t, "blur", h), e.a.B(t, "focusout", h), t.__ko_hasfocusLastValue = !1;
        }, update: function(t, r) {
          var s = !!e.a.f(r());
          t.__ko_hasfocusUpdating || t.__ko_hasfocusLastValue === s || (s ? t.focus() : t.blur(), !s && t.__ko_hasfocusLastValue && t.ownerDocument.body.focus(), e.u.G(e.a.Fb, null, [t, s ? "focusin" : "focusout"]));
        } }, e.m.wa.hasfocus = !0, e.c.hasFocus = e.c.hasfocus, e.m.wa.hasFocus = "hasfocus", e.c.html = { init: function() {
          return { controlsDescendantBindings: !0 };
        }, update: function(t, r) {
          e.a.fc(t, r());
        } }, function() {
          function t(r, s, o) {
            e.c[r] = { init: function(d, h, p, f, l) {
              var i, m, g = {}, x, a, y;
              if (s) {
                f = p.get("as");
                var v = p.get("noChildContext");
                y = !(f && v), g = { as: f, noChildContext: v, exportDependencies: y };
              }
              return a = (x = p.get("completeOn") == "render") || p.has(e.i.pa), e.o(function() {
                var S = e.a.f(h()), E = !o != !S, C = !m, w;
                (y || E !== i) && (a && (l = e.i.Cb(d, l)), E && ((!s || y) && (g.dataDependency = e.S.o()), w = s ? l.createChildContext(typeof S == "function" ? S : h, g) : e.S.qa() ? l.extend(null, g) : l), C && e.S.qa() && (m = e.a.Ca(e.h.childNodes(d), !0)), E ? (C || e.h.va(d, e.a.Ca(m)), e.Oa(w, d)) : (e.h.Ea(d), x || e.i.ma(d, e.i.H)), i = E);
              }, null, { l: d }), { controlsDescendantBindings: !0 };
            } }, e.m.Ra[r] = !1, e.h.ea[r] = !0;
          }
          t("if"), t("ifnot", !1, !0), t("with", !0);
        }(), e.c.let = { init: function(t, r, s, o, d) {
          return r = d.extend(r), e.Oa(r, t), { controlsDescendantBindings: !0 };
        } }, e.h.ea.let = !0;
        var Q = {};
        e.c.options = { init: function(t) {
          if (e.a.R(t) !== "select") throw Error("options binding applies only to SELECT elements");
          for (; 0 < t.length; ) t.remove(0);
          return { controlsDescendantBindings: !0 };
        }, update: function(t, r, s) {
          function o() {
            return e.a.jb(t.options, function(v) {
              return v.selected;
            });
          }
          function d(v, S, E) {
            var C = typeof S;
            return C == "function" ? S(v) : C == "string" ? v[S] : E;
          }
          function h(v, S) {
            if (a && i) e.i.ma(t, e.i.H);
            else if (x.length) {
              var E = 0 <= e.a.A(x, e.w.M(S[0]));
              e.a.Zc(S[0], E), a && !E && e.u.G(e.a.Fb, null, [t, "change"]);
            }
          }
          var p = t.multiple, f = t.length != 0 && p ? t.scrollTop : null, l = e.a.f(r()), i = s.get("valueAllowUnset") && s.has("value"), m = s.get("optionsIncludeDestroyed");
          r = {};
          var g, x = [];
          i || (p ? x = e.a.Mb(o(), e.w.M) : 0 <= t.selectedIndex && x.push(e.w.M(t.options[t.selectedIndex]))), l && (typeof l.length > "u" && (l = [l]), g = e.a.jb(l, function(v) {
            return m || v === u || v === null || !e.a.f(v._destroy);
          }), s.has("optionsCaption") && (l = e.a.f(s.get("optionsCaption")), l !== null && l !== u && g.unshift(Q)));
          var a = !1;
          if (r.beforeRemove = function(v) {
            t.removeChild(v);
          }, l = h, s.has("optionsAfterRender") && typeof s.get("optionsAfterRender") == "function" && (l = function(v, S) {
            h(0, S), e.u.G(s.get("optionsAfterRender"), null, [S[0], v !== Q ? v : u]);
          }), e.a.ec(t, g, function(v, S, E) {
            return E.length && (x = !i && E[0].selected ? [e.w.M(E[0])] : [], a = !0), S = t.ownerDocument.createElement("option"), v === Q ? (e.a.Bb(S, s.get("optionsCaption")), e.w.cb(S, u)) : (E = d(v, s.get("optionsValue"), v), e.w.cb(S, e.a.f(E)), v = d(v, s.get("optionsText"), E), e.a.Bb(S, v)), [S];
          }, r, l), !i) {
            var y;
            p ? y = x.length && o().length < x.length : y = x.length && 0 <= t.selectedIndex ? e.w.M(t.options[t.selectedIndex]) !== x[0] : x.length || 0 <= t.selectedIndex, y && e.u.G(e.a.Fb, null, [t, "change"]);
          }
          (i || e.S.Ya()) && e.i.ma(t, e.i.H), e.a.wd(t), f && 20 < Math.abs(f - t.scrollTop) && (t.scrollTop = f);
        } }, e.c.options.$b = e.a.g.Z(), e.c.selectedOptions = { init: function(t, r, s) {
          function o() {
            var p = r(), f = [];
            e.a.D(t.getElementsByTagName("option"), function(l) {
              l.selected && f.push(e.w.M(l));
            }), e.m.eb(
              p,
              s,
              "selectedOptions",
              f
            );
          }
          function d() {
            var p = e.a.f(r()), f = t.scrollTop;
            p && typeof p.length == "number" && e.a.D(t.getElementsByTagName("option"), function(l) {
              var i = 0 <= e.a.A(p, e.w.M(l));
              l.selected != i && e.a.Zc(l, i);
            }), t.scrollTop = f;
          }
          if (e.a.R(t) != "select") throw Error("selectedOptions binding applies only to SELECT elements");
          var h;
          e.i.subscribe(t, e.i.H, function() {
            h ? o() : (e.a.B(t, "change", o), h = e.o(d, null, { l: t }));
          }, null, { notifyImmediately: !0 });
        }, update: function() {
        } }, e.m.wa.selectedOptions = !0, e.c.style = { update: function(t, r) {
          var s = e.a.f(r() || {});
          e.a.P(s, function(o, d) {
            if (d = e.a.f(d), (d === null || d === u || d === !1) && (d = ""), _) _(t).css(o, d);
            else if (/^--/.test(o)) t.style.setProperty(o, d);
            else {
              o = o.replace(/-(\w)/g, function(p, f) {
                return f.toUpperCase();
              });
              var h = t.style[o];
              t.style[o] = d, d === h || t.style[o] != h || isNaN(d) || (t.style[o] = d + "px");
            }
          });
        } }, e.c.submit = { init: function(t, r, s, o, d) {
          if (typeof r() != "function") throw Error("The value for a submit binding must be a function");
          e.a.B(t, "submit", function(h) {
            var p, f = r();
            try {
              p = f.call(d.$data, t);
            } finally {
              p !== !0 && (h.preventDefault ? h.preventDefault() : h.returnValue = !1);
            }
          });
        } }, e.c.text = { init: function() {
          return { controlsDescendantBindings: !0 };
        }, update: function(t, r) {
          e.a.Bb(t, r());
        } }, e.h.ea.text = !0, function() {
          if (c && c.navigator) {
            var t = function(g) {
              if (g) return parseFloat(g[1]);
            }, r = c.navigator.userAgent, s, o, d, h, p;
            (s = c.opera && c.opera.version && parseInt(c.opera.version())) || (p = t(r.match(/Edge\/([^ ]+)$/))) || t(r.match(/Chrome\/([^ ]+)/)) || (o = t(r.match(/Version\/([^ ]+) Safari/))) || (d = t(r.match(/Firefox\/([^ ]+)/))) || (h = e.a.W || t(r.match(/MSIE ([^ ]+)/))) || (h = t(r.match(/rv:([^ )]+)/)));
          }
          if (8 <= h && 10 > h) var f = e.a.g.Z(), l = e.a.g.Z(), i = function(g) {
            var x = this.activeElement;
            (x = x && e.a.g.get(x, l)) && x(g);
          }, m = function(g, x) {
            var a = g.ownerDocument;
            e.a.g.get(a, f) || (e.a.g.set(a, f, !0), e.a.B(a, "selectionchange", i)), e.a.g.set(g, l, x);
          };
          e.c.textInput = { init: function(g, x, a) {
            function y(N, I) {
              e.a.B(g, N, I);
            }
            function v() {
              var N = e.a.f(x());
              (N === null || N === u) && (N = ""), T !== u && N === T ? e.a.setTimeout(v, 4) : g.value !== N && (L = !0, g.value = N, L = !1, C = g.value);
            }
            function S() {
              w || (T = g.value, w = e.a.setTimeout(
                E,
                4
              ));
            }
            function E() {
              clearTimeout(w), T = w = u;
              var N = g.value;
              C !== N && (C = N, e.m.eb(x(), a, "textInput", N));
            }
            var C = g.value, w, T, R = e.a.W == 9 ? S : E, L = !1;
            h && y("keypress", E), 11 > h && y("propertychange", function(N) {
              L || N.propertyName !== "value" || R();
            }), h == 8 && (y("keyup", E), y("keydown", E)), m && (m(g, R), y("dragend", S)), (!h || 9 <= h) && y("input", R), 5 > o && e.a.R(g) === "textarea" ? (y("keydown", S), y("paste", S), y("cut", S)) : 11 > s ? y("keydown", S) : 4 > d ? (y("DOMAutoComplete", E), y("dragdrop", E), y("drop", E)) : p && g.type === "number" && y("keydown", S), y(
              "change",
              E
            ), y("blur", E), e.o(v, null, { l: g });
          } }, e.m.wa.textInput = !0, e.c.textinput = { preprocess: function(g, x, a) {
            a("textInput", g);
          } };
        }(), e.c.uniqueName = { init: function(t, r) {
          if (r()) {
            var s = "ko_unique_" + ++e.c.uniqueName.rd;
            e.a.Yc(t, s);
          }
        } }, e.c.uniqueName.rd = 0, e.c.using = { init: function(t, r, s, o, d) {
          var h;
          return s.has("as") && (h = { as: s.get("as"), noChildContext: s.get("noChildContext") }), r = d.createChildContext(r, h), e.Oa(r, t), { controlsDescendantBindings: !0 };
        } }, e.h.ea.using = !0, e.c.value = { init: function(t, r, s) {
          var o = e.a.R(t), d = o == "input";
          if (!d || t.type != "checkbox" && t.type != "radio") {
            var h = [], p = s.get("valueUpdate"), f = !1, l = null;
            p && (typeof p == "string" ? h = [p] : h = e.a.wc(p), e.a.Pa(h, "change"));
            var i = function() {
              l = null, f = !1;
              var x = r(), a = e.w.M(t);
              e.m.eb(x, s, "value", a);
            };
            !e.a.W || !d || t.type != "text" || t.autocomplete == "off" || t.form && t.form.autocomplete == "off" || e.a.A(h, "propertychange") != -1 || (e.a.B(t, "propertychange", function() {
              f = !0;
            }), e.a.B(t, "focus", function() {
              f = !1;
            }), e.a.B(t, "blur", function() {
              f && i();
            })), e.a.D(h, function(x) {
              var a = i;
              e.a.Ud(x, "after") && (a = function() {
                l = e.w.M(t), e.a.setTimeout(i, 0);
              }, x = x.substring(5)), e.a.B(t, x, a);
            });
            var m;
            if (m = d && t.type == "file" ? function() {
              var x = e.a.f(r());
              x === null || x === u || x === "" ? t.value = "" : e.u.G(i);
            } : function() {
              var x = e.a.f(r()), a = e.w.M(t);
              l !== null && x === l ? e.a.setTimeout(m, 0) : (x !== a || a === u) && (o === "select" ? (a = s.get("valueAllowUnset"), e.w.cb(t, x, a), a || x === e.w.M(t) || e.u.G(i)) : e.w.cb(t, x));
            }, o === "select") {
              var g;
              e.i.subscribe(
                t,
                e.i.H,
                function() {
                  g ? s.get("valueAllowUnset") ? m() : i() : (e.a.B(t, "change", i), g = e.o(m, null, { l: t }));
                },
                null,
                { notifyImmediately: !0 }
              );
            } else e.a.B(t, "change", i), e.o(m, null, { l: t });
          } else e.ib(t, { checkedValue: r });
        }, update: function() {
        } }, e.m.wa.value = !0, e.c.visible = { update: function(t, r) {
          var s = e.a.f(r()), o = t.style.display != "none";
          s && !o ? t.style.display = "" : !s && o && (t.style.display = "none");
        } }, e.c.hidden = { update: function(t, r) {
          e.c.visible.update(t, function() {
            return !e.a.f(r());
          });
        } }, function(t) {
          e.c[t] = { init: function(r, s, o, d, h) {
            return e.c.event.init.call(this, r, function() {
              var p = {};
              return p[t] = s(), p;
            }, o, d, h);
          } };
        }("click"), e.ca = function() {
        }, e.ca.prototype.renderTemplateSource = function() {
          throw Error("Override renderTemplateSource");
        }, e.ca.prototype.createJavaScriptEvaluatorBlock = function() {
          throw Error("Override createJavaScriptEvaluatorBlock");
        }, e.ca.prototype.makeTemplateSource = function(t, r) {
          if (typeof t == "string") {
            r = r || n;
            var s = r.getElementById(t);
            if (!s) throw Error("Cannot find template with ID " + t);
            return new e.C.F(s);
          }
          if (t.nodeType == 1 || t.nodeType == 8) return new e.C.ia(t);
          throw Error("Unknown template type: " + t);
        }, e.ca.prototype.renderTemplate = function(t, r, s, o) {
          return t = this.makeTemplateSource(t, o), this.renderTemplateSource(t, r, s, o);
        }, e.ca.prototype.isTemplateRewritten = function(t, r) {
          return this.allowTemplateRewriting === !1 ? !0 : this.makeTemplateSource(t, r).data("isRewritten");
        }, e.ca.prototype.rewriteTemplate = function(t, r, s) {
          t = this.makeTemplateSource(t, s), r = r(t.text()), t.text(r), t.data("isRewritten", !0);
        }, e.b("templateEngine", e.ca), e.kc = /* @__PURE__ */ function() {
          function t(o, d, h, p) {
            o = e.m.ac(o);
            for (var f = e.m.Ra, l = 0; l < o.length; l++) {
              var i = o[l].key;
              if (Object.prototype.hasOwnProperty.call(
                f,
                i
              )) {
                var m = f[i];
                if (typeof m == "function") {
                  if (i = m(o[l].value)) throw Error(i);
                } else if (!m) throw Error("This template engine does not support the '" + i + "' binding within its templates");
              }
            }
            return h = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + e.m.vb(o, { valueAccessors: !0 }) + " } })()},'" + h.toLowerCase() + "')", p.createJavaScriptEvaluatorBlock(h) + d;
          }
          var r = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, s = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
          return { xd: function(o, d, h) {
            d.isTemplateRewritten(o, h) || d.rewriteTemplate(o, function(p) {
              return e.kc.Ld(p, d);
            }, h);
          }, Ld: function(o, d) {
            return o.replace(r, function(h, p, f, l, i) {
              return t(i, p, f, d);
            }).replace(s, function(h, p) {
              return t(p, "<!-- ko -->", "#comment", d);
            });
          }, md: function(o, d) {
            return e.aa.Xb(function(h, p) {
              var f = h.nextSibling;
              f && f.nodeName.toLowerCase() === d && e.ib(f, o, p);
            });
          } };
        }(), e.b("__tr_ambtns", e.kc.md), function() {
          e.C = {}, e.C.F = function(s) {
            if (this.F = s) {
              var o = e.a.R(s);
              this.ab = o === "script" ? 1 : o === "textarea" ? 2 : o == "template" && s.content && s.content.nodeType === 11 ? 3 : 4;
            }
          }, e.C.F.prototype.text = function() {
            var s = this.ab === 1 ? "text" : this.ab === 2 ? "value" : "innerHTML";
            if (arguments.length == 0) return this.F[s];
            var o = arguments[0];
            s === "innerHTML" ? e.a.fc(this.F, o) : this.F[s] = o;
          };
          var t = e.a.g.Z() + "_";
          e.C.F.prototype.data = function(s) {
            if (arguments.length === 1) return e.a.g.get(this.F, t + s);
            e.a.g.set(this.F, t + s, arguments[1]);
          };
          var r = e.a.g.Z();
          e.C.F.prototype.nodes = function() {
            var s = this.F;
            if (arguments.length == 0) {
              var o = e.a.g.get(s, r) || {}, d = o.lb || (this.ab === 3 ? s.content : this.ab === 4 ? s : u);
              if (!d || o.jd) {
                var h = this.text();
                h && h !== o.bb && (d = e.a.Md(h, s.ownerDocument), e.a.g.set(s, r, { lb: d, bb: h, jd: !0 }));
              }
              return d;
            }
            o = arguments[0], this.ab !== u && this.text(""), e.a.g.set(s, r, { lb: o });
          }, e.C.ia = function(s) {
            this.F = s;
          }, e.C.ia.prototype = new e.C.F(), e.C.ia.prototype.constructor = e.C.ia, e.C.ia.prototype.text = function() {
            if (arguments.length == 0) {
              var s = e.a.g.get(this.F, r) || {};
              return s.bb === u && s.lb && (s.bb = s.lb.innerHTML), s.bb;
            }
            e.a.g.set(
              this.F,
              r,
              { bb: arguments[0] }
            );
          }, e.b("templateSources", e.C), e.b("templateSources.domElement", e.C.F), e.b("templateSources.anonymousTemplate", e.C.ia);
        }(), function() {
          function t(l, i, m) {
            var g;
            for (i = e.h.nextSibling(i); l && (g = l) !== i; ) l = e.h.nextSibling(g), m(g, l);
          }
          function r(l, i) {
            if (l.length) {
              var m = l[0], g = l[l.length - 1], x = m.parentNode, a = e.ga.instance, y = a.preprocessNode;
              if (y) {
                if (t(m, g, function(v, S) {
                  var E = v.previousSibling, C = y.call(a, v);
                  C && (v === m && (m = C[0] || S), v === g && (g = C[C.length - 1] || E));
                }), l.length = 0, !m) return;
                m === g ? l.push(m) : (l.push(m, g), e.a.Ua(l, x));
              }
              t(m, g, function(v) {
                v.nodeType !== 1 && v.nodeType !== 8 || e.vc(i, v);
              }), t(m, g, function(v) {
                v.nodeType !== 1 && v.nodeType !== 8 || e.aa.cd(v, [i]);
              }), e.a.Ua(l, x);
            }
          }
          function s(l) {
            return l.nodeType ? l : 0 < l.length ? l[0] : null;
          }
          function o(l, i, m, g, x) {
            x = x || {};
            var a = (l && s(l) || m || {}).ownerDocument, y = x.templateEngine || h;
            if (e.kc.xd(m, y, a), m = y.renderTemplate(m, g, x, a), typeof m.length != "number" || 0 < m.length && typeof m[0].nodeType != "number") throw Error("Template engine must return an array of DOM nodes");
            switch (a = !1, i) {
              case "replaceChildren":
                e.h.va(
                  l,
                  m
                ), a = !0;
                break;
              case "replaceNode":
                e.a.Xc(l, m), a = !0;
                break;
              case "ignoreTargetNode":
                break;
              default:
                throw Error("Unknown renderMode: " + i);
            }
            return a && (r(m, g), x.afterRender && e.u.G(x.afterRender, null, [m, g[x.as || "$data"]]), i == "replaceChildren" && e.i.ma(l, e.i.H)), m;
          }
          function d(l, i, m) {
            return e.O(l) ? l() : typeof l == "function" ? l(i, m) : l;
          }
          var h;
          e.gc = function(l) {
            if (l != u && !(l instanceof e.ca)) throw Error("templateEngine must inherit from ko.templateEngine");
            h = l;
          }, e.dc = function(l, i, m, g, x) {
            if (m = m || {}, (m.templateEngine || h) == u) throw Error("Set a template engine before calling renderTemplate");
            if (x = x || "replaceChildren", g) {
              var a = s(g);
              return e.$(function() {
                var v = i && i instanceof e.fa ? i : new e.fa(i, null, null, null, { exportDependencies: !0 }), y = d(l, v.$data, v), v = o(g, x, y, v, m);
                x == "replaceNode" && (g = v, a = s(g));
              }, null, { Sa: function() {
                return !a || !e.a.Sb(a);
              }, l: a && x == "replaceNode" ? a.parentNode : a });
            }
            return e.aa.Xb(function(y) {
              e.dc(l, i, m, y, "replaceNode");
            });
          }, e.Qd = function(l, i, m, g, x) {
            function a(T, R) {
              e.u.G(e.a.ec, null, [g, T, v, m, y, R]), e.i.ma(g, e.i.H);
            }
            function y(T, R) {
              r(R, S), m.afterRender && m.afterRender(R, T), S = null;
            }
            function v(T, R) {
              S = x.createChildContext(T, { as: E, noChildContext: m.noChildContext, extend: function(N) {
                N.$index = R, E && (N[E + "Index"] = R);
              } });
              var L = d(l, T, S);
              return o(g, "ignoreTargetNode", L, S, m);
            }
            var S, E = m.as, C = m.includeDestroyed === !1 || e.options.foreachHidesDestroyed && !m.includeDestroyed;
            if (C || m.beforeRemove || !e.Pc(i)) return e.$(function() {
              var T = e.a.f(i) || [];
              typeof T.length > "u" && (T = [T]), C && (T = e.a.jb(T, function(R) {
                return R === u || R === null || !e.a.f(R._destroy);
              })), a(T);
            }, null, { l: g });
            a(i.v());
            var w = i.subscribe(function(T) {
              a(i(), T);
            }, null, "arrayChange");
            return w.l(g), w;
          };
          var p = e.a.g.Z(), f = e.a.g.Z();
          e.c.template = { init: function(l, i) {
            var m = e.a.f(i());
            if (typeof m == "string" || "name" in m) e.h.Ea(l);
            else if ("nodes" in m) {
              if (m = m.nodes || [], e.O(m)) throw Error('The "nodes" option must be a plain, non-observable array.');
              var g = m[0] && m[0].parentNode;
              g && e.a.g.get(g, f) || (g = e.a.Yb(m), e.a.g.set(g, f, !0)), new e.C.ia(l).nodes(g);
            } else if (m = e.h.childNodes(l), 0 < m.length) g = e.a.Yb(m), new e.C.ia(l).nodes(g);
            else throw Error("Anonymous template defined, but no template content was provided");
            return { controlsDescendantBindings: !0 };
          }, update: function(l, i, m, g, x) {
            var a = i();
            i = e.a.f(a), m = !0, g = null, typeof i == "string" ? i = {} : (a = "name" in i ? i.name : l, "if" in i && (m = e.a.f(i.if)), m && "ifnot" in i && (m = !e.a.f(i.ifnot)), m && !a && (m = !1)), "foreach" in i ? g = e.Qd(a, m && i.foreach || [], i, l, x) : m ? (m = x, "data" in i && (m = x.createChildContext(i.data, { as: i.as, noChildContext: i.noChildContext, exportDependencies: !0 })), g = e.dc(a, m, i, l)) : e.h.Ea(l), x = g, (i = e.a.g.get(l, p)) && typeof i.s == "function" && i.s(), e.a.g.set(l, p, !x || x.ja && !x.ja() ? u : x);
          } }, e.m.Ra.template = function(l) {
            return l = e.m.ac(l), l.length == 1 && l[0].unknown || e.m.Id(l, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
          }, e.h.ea.template = !0;
        }(), e.b("setTemplateEngine", e.gc), e.b("renderTemplate", e.dc), e.a.Kc = function(t, r, s) {
          if (t.length && r.length) {
            var o, d, h, p, f;
            for (o = d = 0; (!s || o < s) && (p = t[d]); ++d) {
              for (h = 0; f = r[h]; ++h) if (p.value === f.value) {
                p.moved = f.index, f.moved = p.index, r.splice(h, 1), o = h = 0;
                break;
              }
              o += h;
            }
          }
        }, e.a.Pb = /* @__PURE__ */ function() {
          function t(r, s, o, d, h) {
            var p = Math.min, f = Math.max, l = [], i, m = r.length, g, x = s.length, a = x - m || 1, y = m + x + 1, v, S, E;
            for (i = 0; i <= m; i++) for (S = v, l.push(v = []), E = p(x, i + a), g = f(0, i - 1); g <= E; g++) v[g] = g ? i ? r[i - 1] === s[g - 1] ? S[g - 1] : p(S[g] || y, v[g - 1] || y) + 1 : g + 1 : i + 1;
            for (p = [], f = [], a = [], i = m, g = x; i || g; ) x = l[i][g] - 1, g && x === l[i][g - 1] ? f.push(p[p.length] = { status: o, value: s[--g], index: g }) : i && x === l[i - 1][g] ? a.push(p[p.length] = { status: d, value: r[--i], index: i }) : (--g, --i, h.sparse || p.push({ status: "retained", value: s[g] }));
            return e.a.Kc(a, f, !h.dontLimitMoves && 10 * m), p.reverse();
          }
          return function(r, s, o) {
            return o = typeof o == "boolean" ? { dontLimitMoves: o } : o || {}, r = r || [], s = s || [], r.length < s.length ? t(r, s, "added", "deleted", o) : t(s, r, "deleted", "added", o);
          };
        }(), e.b("utils.compareArrays", e.a.Pb), function() {
          function t(o, d, h, p, f) {
            var l = [], i = e.$(function() {
              var m = d(h, f, e.a.Ua(l, o)) || [];
              0 < l.length && (e.a.Xc(l, m), p && e.u.G(p, null, [h, m, f])), l.length = 0, e.a.Nb(l, m);
            }, null, { l: o, Sa: function() {
              return !e.a.kd(l);
            } });
            return { Y: l, $: i.ja() ? i : u };
          }
          var r = e.a.g.Z(), s = e.a.g.Z();
          e.a.ec = function(o, d, h, p, f, l) {
            function i(U) {
              L = { Aa: U, pb: e.ta(S++) }, y.push(L), a || R.push(L);
            }
            function m(U) {
              L = x[U], S !== L.pb.v() && T.push(L), L.pb(S++), e.a.Ua(L.Y, o), y.push(L);
            }
            function g(U, he) {
              if (U) for (var ye = 0, me = he.length; ye < me; ye++) e.a.D(he[ye].Y, function(be) {
                U(be, ye, he[ye].Aa);
              });
            }
            d = d || [], typeof d.length > "u" && (d = [d]), p = p || {};
            var x = e.a.g.get(o, r), a = !x, y = [], v = 0, S = 0, E = [], C = [], w = [], T = [], R = [], L, N = 0;
            if (a) e.a.D(d, i);
            else {
              if (!l || x && x._countWaitingForRemove) {
                var I = e.a.Mb(x, function(U) {
                  return U.Aa;
                });
                l = e.a.Pb(I, d, { dontLimitMoves: p.dontLimitMoves, sparse: !0 });
              }
              for (var I = 0, ae, K, le; ae = l[I]; I++) switch (K = ae.moved, le = ae.index, ae.status) {
                case "deleted":
                  for (; v < le; ) m(v++);
                  K === u && (L = x[v], L.$ && (L.$.s(), L.$ = u), e.a.Ua(L.Y, o).length && (p.beforeRemove && (y.push(L), N++, L.Aa === s ? L = null : w.push(L)), L && E.push.apply(E, L.Y))), v++;
                  break;
                case "added":
                  for (; S < le; ) m(v++);
                  K !== u ? (C.push(y.length), m(K)) : i(ae.value);
              }
              for (; S < d.length; ) m(v++);
              y._countWaitingForRemove = N;
            }
            e.a.g.set(o, r, y), g(p.beforeMove, T), e.a.D(
              E,
              p.beforeRemove ? e.oa : e.removeNode
            );
            var re, de, fe;
            try {
              fe = o.ownerDocument.activeElement;
            } catch {
            }
            if (C.length) for (; (I = C.shift()) != u; ) {
              for (L = y[I], re = u; I; ) if ((de = y[--I].Y) && de.length) {
                re = de[de.length - 1];
                break;
              }
              for (d = 0; v = L.Y[d]; re = v, d++) e.h.Wb(o, v, re);
            }
            for (I = 0; L = y[I]; I++) {
              for (L.Y || e.a.extend(L, t(o, h, L.Aa, f, L.pb)), d = 0; v = L.Y[d]; re = v, d++) e.h.Wb(o, v, re);
              !L.Ed && f && (f(L.Aa, L.Y, L.pb), L.Ed = !0, re = L.Y[L.Y.length - 1]);
            }
            for (fe && o.ownerDocument.activeElement != fe && fe.focus(), g(p.beforeRemove, w), I = 0; I < w.length; ++I) w[I].Aa = s;
            g(p.afterMove, T), g(p.afterAdd, R);
          };
        }(), e.b("utils.setDomNodeChildrenFromArrayMapping", e.a.ec), e.ba = function() {
          this.allowTemplateRewriting = !1;
        }, e.ba.prototype = new e.ca(), e.ba.prototype.constructor = e.ba, e.ba.prototype.renderTemplateSource = function(t, r, s, o) {
          return (r = !(9 > e.a.W) && t.nodes ? t.nodes() : null) ? e.a.la(r.cloneNode(!0).childNodes) : (t = t.text(), e.a.ua(t, o));
        }, e.ba.Ma = new e.ba(), e.gc(e.ba.Ma), e.b("nativeTemplateEngine", e.ba), function() {
          e.$a = function() {
            var r = this.Hd = function() {
              if (!_ || !_.tmpl) return 0;
              try {
                if (0 <= _.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
              } catch {
              }
              return 1;
            }();
            this.renderTemplateSource = function(s, o, d, h) {
              if (h = h || n, d = d || {}, 2 > r) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
              var p = s.data("precompiled");
              return p || (p = s.text() || "", p = _.template(null, "{{ko_with $item.koBindingContext}}" + p + "{{/ko_with}}"), s.data("precompiled", p)), s = [o.$data], o = _.extend({ koBindingContext: o }, d.templateOptions), o = _.tmpl(p, s, o), o.appendTo(h.createElement("div")), _.fragments = {}, o;
            }, this.createJavaScriptEvaluatorBlock = function(s) {
              return "{{ko_code ((function() { return " + s + " })()) }}";
            }, this.addTemplate = function(s, o) {
              n.write("<script type='text/html' id='" + s + "'>" + o + "<\/script>");
            }, 0 < r && (_.tmpl.tag.ko_code = { open: "__.push($1 || '');" }, _.tmpl.tag.ko_with = { open: "with($1) {", close: "} " });
          }, e.$a.prototype = new e.ca(), e.$a.prototype.constructor = e.$a;
          var t = new e.$a();
          0 < t.Hd && e.gc(t), e.b("jqueryTmplTemplateEngine", e.$a);
        }();
      });
    })();
  })();
})();
var B = ko;
typeof window < "u" ? (ko = window.ko, typeof Pe < "u" ? window.ko = Pe : delete window.ko) : (ko = global.ko, typeof Pe < "u" ? global.ko = Pe : delete global.ko);
/**
 * @license
 * Knockout ES5 plugin - https://github.com/SteveSanderson/knockout-es5
 * Copyright (c) Steve Sanderson
 * MIT license
 */
var je = "__knockoutObservables", ze = "__knockoutSubscribable";
function it(u, c) {
  if (!u)
    throw new Error("When calling ko.track, you must pass an object as the first parameter.");
  var n = this, b = nt(u, !0);
  return c = c || Object.getOwnPropertyNames(u), c.forEach(function(_) {
    if (!(_ === je || _ === ze) && !(_ in b)) {
      var P = u[_], D = P instanceof Array, k = n.isObservable(P) ? P : D ? n.observableArray(P) : n.observable(P);
      Object.defineProperty(u, _, {
        configurable: !0,
        enumerable: !0,
        get: k,
        set: n.isWriteableObservable(k) ? k : void 0
      }), b[_] = k, D && Dt(n, k);
    }
  }), u;
}
function nt(u, c) {
  var n = u[je];
  return !n && c && (n = {}, Object.defineProperty(u, je, {
    value: n
  })), n;
}
function Ft(u, c, n) {
  var b = this, _ = { owner: u, deferEvaluation: !0 };
  if (typeof n == "function")
    _.read = n;
  else {
    if ("value" in n)
      throw new Error('For ko.defineProperty, you must not specify a "value" for the property. You must provide a "get" function.');
    if (typeof n.get != "function")
      throw new Error('For ko.defineProperty, the third parameter must be either an evaluator function, or an options object containing a function called "get".');
    _.read = n.get, _.write = n.set;
  }
  return u[c] = b.computed(_), it.call(b, u, [c]), u;
}
function Dt(u, c) {
  var n = null;
  u.computed(function() {
    n && (n.dispose(), n = null);
    var b = c();
    b instanceof Array && (n = Vt(u, c, b));
  });
}
function Vt(u, c, n) {
  var b = Lt(u, n);
  return b.subscribe(c);
}
function Lt(u, c) {
  var n = c[ze];
  if (!n) {
    n = new u.subscribable(), Object.defineProperty(c, ze, {
      value: n
    });
    var b = {};
    Rt(c, n, b), Nt(u, c, n, b);
  }
  return n;
}
function Rt(u, c, n) {
  ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"].forEach(function(b) {
    var _ = u[b];
    u[b] = function() {
      var P = _.apply(this, arguments);
      return n.pause !== !0 && c.notifySubscribers(this), P;
    };
  });
}
function Nt(u, c, n, b) {
  ["remove", "removeAll", "destroy", "destroyAll", "replace"].forEach(function(_) {
    Object.defineProperty(c, _, {
      enumerable: !1,
      value: function() {
        var P;
        b.pause = !0;
        try {
          P = u.observableArray.fn[_].apply(u.observableArray(c), arguments);
        } finally {
          b.pause = !1;
        }
        return n.notifySubscribers(c), P;
      }
    });
  });
}
function rt(u, c) {
  if (!u)
    return null;
  var n = nt(u, !1);
  return n && n[c] || null;
}
function At(u, c) {
  var n = rt(u, c);
  n && n.valueHasMutated();
}
function It(u) {
  u.track = it, u.getObservable = rt, u.valueHasMutated = At, u.defineProperty = Ft;
}
const Ot = {
  attachToKo: It
}, Ge = "http://www.w3.org/2000/svg", Je = "cesium-svgPath-svg", $t = {
  /**
   * @function
   */
  register: function(u) {
    u.bindingHandlers.cesiumSvgPath = {
      init: function(c, n) {
        const b = document.createElementNS(Ge, "svg:svg");
        b.setAttribute("class", Je);
        const _ = document.createElementNS(Ge, "path");
        return b.appendChild(_), u.virtualElements.setDomNodeChildren(c, [b]), u.computed({
          read: function() {
            const P = u.unwrap(n());
            _.setAttribute("d", u.unwrap(P.path));
            const D = u.unwrap(P.width), k = u.unwrap(P.height);
            b.setAttribute("width", D), b.setAttribute("height", k), b.setAttribute("viewBox", `0 0 ${D} ${k}`), P.css && b.setAttribute(
              "class",
              `${Je} ${u.unwrap(P.css)}`
            );
          },
          disposeWhenNodeIsRemoved: c
        }), {
          controlsDescendantBindings: !0
        };
      }
    }, u.virtualElements.allowedBindings.cesiumSvgPath = !0;
  }
};
Ot.attachToKo(B);
$t.register(B);
const ce = {};
ce.createCheckbox = function(u, c, n) {
  ie.typeOf.string("labelText", u), ie.typeOf.string("checkedBinding", c);
  const b = document.createElement("div"), _ = document.createElement("label"), P = document.createElement("input");
  P.type = "checkbox";
  let D = `checked: ${c}`;
  return V(n) && (D += `, enable: ${n}`), P.setAttribute("data-bind", D), _.appendChild(P), _.appendChild(document.createTextNode(u)), b.appendChild(_), b;
};
ce.createSection = function(u, c, n, b) {
  ie.defined("panel", u), ie.typeOf.string("headerText", c), ie.typeOf.string("sectionVisibleBinding", n), ie.typeOf.string(
    "toggleSectionVisibilityBinding",
    b
  );
  const _ = document.createElement("div");
  _.className = "cesium-cesiumInspector-section", _.setAttribute(
    "data-bind",
    `css: { "cesium-cesiumInspector-section-collapsed": !${n} }`
  ), u.appendChild(_);
  const P = document.createElement("h3");
  P.className = "cesium-cesiumInspector-sectionHeader", P.appendChild(document.createTextNode(c)), P.setAttribute(
    "data-bind",
    `click: ${b}`
  ), _.appendChild(P);
  const D = document.createElement("div");
  return D.className = "cesium-cesiumInspector-sectionContent", _.appendChild(D), D;
};
ce.createRangeInput = function(u, c, n, b, _, P) {
  ie.typeOf.string("rangeText", u), ie.typeOf.string("sliderValueBinding", c), ie.typeOf.number("min", n), ie.typeOf.number("max", b), P = $e(P, c);
  const D = document.createElement("input");
  D.setAttribute("data-bind", `value: ${P}`), D.type = "number";
  const k = document.createElement("input");
  k.type = "range", k.min = n, k.max = b, k.step = $e(_, "any"), k.setAttribute(
    "data-bind",
    `valueUpdate: "input", value: ${c}`
  );
  const F = document.createElement("div");
  F.appendChild(k);
  const M = document.createElement("div");
  return M.className = "cesium-cesiumInspector-slider", M.appendChild(document.createTextNode(u)), M.appendChild(D), M.appendChild(F), M;
};
ce.createButton = function(u, c, n) {
  ie.typeOf.string("buttonText", u), ie.typeOf.string("clickedBinding", c);
  const b = document.createElement("button");
  b.type = "button", b.textContent = u, b.className = "cesium-cesiumInspector-pickButton";
  let _ = `click: ${c}`;
  return V(n) && (_ += `, css: {"cesium-cesiumInspector-pickButtonHighlight" : ${n}}`), b.setAttribute("data-bind", _), b;
};
function te(u, c) {
  if (!V(u))
    throw new _e("func is required.");
  c = $e(c, !0);
  const n = new Ye(), b = new Ye();
  function _() {
    if (!_.canExecute)
      throw new _e("Cannot execute command, canExecute is false.");
    const P = {
      args: arguments,
      cancel: !1
    };
    let D;
    return n.raiseEvent(P), P.cancel || (D = u.apply(null, arguments), b.raiseEvent(D)), D;
  }
  return _.canExecute = c, B.track(_, ["canExecute"]), Object.defineProperties(_, {
    beforeExecute: {
      value: n
    },
    afterExecute: {
      value: b
    }
  }), _;
}
function Ht(u) {
  return function(c) {
    const n = u._scene.pick(c.position);
    V(n) && n.primitive instanceof tt && (u.tileset = n.primitive), u.pickActive = !1;
  };
}
function ot(u, c) {
  c ? u._eventHandler.setInputAction(function(n) {
    const b = u._scene.pick(n.endPosition);
    V(b) && b.primitive instanceof tt && (u.tileset = b.primitive);
  }, ve.MOUSE_MOVE) : (u._eventHandler.removeInputAction(ve.MOUSE_MOVE), u.picking = u.picking);
}
const jt = {
  maximumFractionDigits: 3
};
function Te(u) {
  const c = u / 1048576;
  return c < 1 ? c.toLocaleString(void 0, jt) : Math.round(c).toLocaleString();
}
function Me(u, c) {
  if (!V(u))
    return "";
  const n = c ? u._statisticsPerPass[Xe.PICK] : u._statisticsPerPass[Xe.RENDER];
  let b = '<ul class="cesium-cesiumInspector-statistics">';
  return b += // --- Rendering statistics
  `<li><strong>Visited: </strong>${n.visited.toLocaleString()}</li><li><strong>Selected: </strong>${n.selected.toLocaleString()}</li><li><strong>Commands: </strong>${n.numberOfCommands.toLocaleString()}</li>`, b += "</ul>", c || (b += '<ul class="cesium-cesiumInspector-statistics">', b += // --- Cache/loading statistics
  `<li><strong>Requests: </strong>${n.numberOfPendingRequests.toLocaleString()}</li><li><strong>Attempted: </strong>${n.numberOfAttemptedRequests.toLocaleString()}</li><li><strong>Processing: </strong>${n.numberOfTilesProcessing.toLocaleString()}</li><li><strong>Content Ready: </strong>${n.numberOfTilesWithContentReady.toLocaleString()}</li><li><strong>Total: </strong>${n.numberOfTilesTotal.toLocaleString()}</li>`, b += "</ul>", b += '<ul class="cesium-cesiumInspector-statistics">', b += // --- Features statistics
  `<li><strong>Features Selected: </strong>${n.numberOfFeaturesSelected.toLocaleString()}</li><li><strong>Features Loaded: </strong>${n.numberOfFeaturesLoaded.toLocaleString()}</li><li><strong>Points Selected: </strong>${n.numberOfPointsSelected.toLocaleString()}</li><li><strong>Points Loaded: </strong>${n.numberOfPointsLoaded.toLocaleString()}</li><li><strong>Triangles Selected: </strong>${n.numberOfTrianglesSelected.toLocaleString()}</li>`, b += "</ul>", b += '<ul class="cesium-cesiumInspector-statistics">', b += // --- Styling statistics
  `<li><strong>Tiles styled: </strong>${n.numberOfTilesStyled.toLocaleString()}</li><li><strong>Features styled: </strong>${n.numberOfFeaturesStyled.toLocaleString()}</li>`, b += "</ul>", b += '<ul class="cesium-cesiumInspector-statistics">', b += // --- Optimization statistics
  `<li><strong>Children Union Culled: </strong>${n.numberOfTilesCulledWithChildrenUnion.toLocaleString()}</li>`, b += "</ul>", b += '<ul class="cesium-cesiumInspector-statistics">', b += // --- Memory statistics
  `<li><strong>Geometry Memory (MB): </strong>${Te(
    n.geometryByteLength
  )}</li><li><strong>Texture Memory (MB): </strong>${Te(
    n.texturesByteLength
  )}</li><li><strong>Batch Table Memory (MB): </strong>${Te(
    n.batchTableByteLength
  )}</li>`, b += "</ul>"), b;
}
function st() {
  const u = lt.statistics;
  return `
  <ul class="cesium-cesiumInspector-statistics">
    <li><strong>Geometry Memory (MB): </strong>${Te(
    u.geometryByteLength
  )}</li>
    <li><strong>Texture Memory (MB): </strong>${Te(
    u.texturesByteLength
  )}</li>
  </ul>
  `;
}
const zt = [
  {
    text: "Highlight",
    value: De.HIGHLIGHT
  },
  {
    text: "Replace",
    value: De.REPLACE
  },
  {
    text: "Mix",
    value: De.MIX
  }
], Ke = new Se(1, 1, 0, 0.4), Ut = new Se(), Fe = new Se();
function oe(u, c) {
  ie.typeOf.object("scene", u), ie.typeOf.object("performanceContainer", c);
  const n = this, b = u.canvas;
  this._eventHandler = new Qe(b), this._scene = u, this._performanceContainer = c, this._canvas = b, this._performanceDisplay = new et({
    container: c
  }), this._statisticsText = "", this._pickStatisticsText = "", this._resourceCacheStatisticsText = "", this._editorError = "", this.performance = !1, this.showStatistics = !0, this.showPickStatistics = !0, this.showResourceCacheStatistics = !1, this.inspectorVisible = !0, this.tilesetVisible = !1, this.displayVisible = !1, this.updateVisible = !1, this.loggingVisible = !1, this.styleVisible = !1, this.tileDebugLabelsVisible = !1, this.optimizationVisible = !1, this.styleString = "{}", this.hasEnabledWireframe = !1, this._tileset = void 0, this._feature = void 0, this._tile = void 0, B.track(this, [
    "performance",
    "inspectorVisible",
    "_statisticsText",
    "_pickStatisticsText",
    "_resourceCacheStatisticsText",
    "_editorError",
    "showPickStatistics",
    "showStatistics",
    "showResourceCacheStatistics",
    "tilesetVisible",
    "displayVisible",
    "updateVisible",
    "loggingVisible",
    "styleVisible",
    "optimizationVisible",
    "tileDebugLabelsVisible",
    "styleString",
    "_feature",
    "_tile",
    "_tileset",
    "hasEnabledWireframe"
  ]), this._properties = B.observable({}), this.properties = [], B.defineProperty(this, "properties", function() {
    const i = [], m = n._properties();
    for (const g in m)
      m.hasOwnProperty(g) && i.push(g);
    return i;
  });
  const _ = B.observable();
  B.defineProperty(this, "dynamicScreenSpaceError", {
    get: function() {
      return _();
    },
    set: function(i) {
      _(i), V(n._tileset) && (n._tileset.dynamicScreenSpaceError = i);
    }
  }), this.dynamicScreenSpaceError = !1;
  const P = B.observable();
  B.defineProperty(this, "colorBlendMode", {
    get: function() {
      return P();
    },
    set: function(i) {
      P(i), V(n._tileset) && (n._tileset.colorBlendMode = i, n._scene.requestRender());
    }
  }), this.colorBlendMode = De.HIGHLIGHT;
  const D = B.observable(), k = B.observable();
  B.defineProperty(this, "picking", {
    get: function() {
      return k();
    },
    set: function(i) {
      k(i), i ? n._eventHandler.setInputAction(function(m) {
        const g = u.pick(m.endPosition);
        if (g instanceof ut ? (n.feature = g, n.tile = g.content.tile) : V(g) && V(g.content) ? (n.feature = void 0, n.tile = g.content.tile) : (n.feature = void 0, n.tile = void 0), !!V(n._tileset)) {
          if (D && V(g) && V(g.content)) {
            let x;
            u.pickPositionSupported && (x = u.pickPosition(m.endPosition), V(x) && (n._tileset.debugPickPosition = x)), n._tileset.debugPickedTile = g.content.tile;
          } else
            n._tileset.debugPickedTile = void 0;
          n._scene.requestRender();
        }
      }, ve.MOUSE_MOVE) : (n.feature = void 0, n.tile = void 0, n._eventHandler.removeInputAction(ve.MOUSE_MOVE));
    }
  }), this.picking = !0;
  const F = B.observable();
  B.defineProperty(this, "colorize", {
    get: function() {
      return F();
    },
    set: function(i) {
      F(i), V(n._tileset) && (n._tileset.debugColorizeTiles = i, n._scene.requestRender());
    }
  }), this.colorize = !1;
  const M = B.observable();
  B.defineProperty(this, "wireframe", {
    get: function() {
      return M();
    },
    set: function(i) {
      M(i), V(n._tileset) && (n._tileset.debugWireframe = i, n._scene.requestRender());
    }
  }), this.wireframe = !1;
  const A = B.observable();
  B.defineProperty(this, "showBoundingVolumes", {
    get: function() {
      return A();
    },
    set: function(i) {
      A(i), V(n._tileset) && (n._tileset.debugShowBoundingVolume = i, n._scene.requestRender());
    }
  }), this.showBoundingVolumes = !1;
  const W = B.observable();
  B.defineProperty(this, "showContentBoundingVolumes", {
    get: function() {
      return W();
    },
    set: function(i) {
      W(i), V(n._tileset) && (n._tileset.debugShowContentBoundingVolume = i, n._scene.requestRender());
    }
  }), this.showContentBoundingVolumes = !1;
  const X = B.observable();
  B.defineProperty(this, "showRequestVolumes", {
    get: function() {
      return X();
    },
    set: function(i) {
      X(i), V(n._tileset) && (n._tileset.debugShowViewerRequestVolume = i, n._scene.requestRender());
    }
  }), this.showRequestVolumes = !1;
  const Z = B.observable();
  B.defineProperty(this, "freezeFrame", {
    get: function() {
      return Z();
    },
    set: function(i) {
      Z(i), V(n._tileset) && (n._tileset.debugFreezeFrame = i, n._scene.debugShowFrustumPlanes = i, n._scene.requestRender());
    }
  }), this.freezeFrame = !1, B.defineProperty(this, "showOnlyPickedTileDebugLabel", {
    get: function() {
      return D();
    },
    set: function(i) {
      D(i), V(n._tileset) && (n._tileset.debugPickedTileLabelOnly = i, n._scene.requestRender());
    }
  }), this.showOnlyPickedTileDebugLabel = !1;
  const e = B.observable();
  B.defineProperty(this, "showGeometricError", {
    get: function() {
      return e();
    },
    set: function(i) {
      e(i), V(n._tileset) && (n._tileset.debugShowGeometricError = i, n._scene.requestRender());
    }
  }), this.showGeometricError = !1;
  const Y = B.observable();
  B.defineProperty(this, "showRenderingStatistics", {
    get: function() {
      return Y();
    },
    set: function(i) {
      Y(i), V(n._tileset) && (n._tileset.debugShowRenderingStatistics = i, n._scene.requestRender());
    }
  }), this.showRenderingStatistics = !1;
  const H = B.observable();
  B.defineProperty(this, "showMemoryUsage", {
    get: function() {
      return H();
    },
    set: function(i) {
      H(i), V(n._tileset) && (n._tileset.debugShowMemoryUsage = i, n._scene.requestRender());
    }
  }), this.showMemoryUsage = !1;
  const $ = B.observable();
  B.defineProperty(this, "showUrl", {
    get: function() {
      return $();
    },
    set: function(i) {
      $(i), V(n._tileset) && (n._tileset.debugShowUrl = i, n._scene.requestRender());
    }
  }), this.showUrl = !1;
  const z = B.observable();
  B.defineProperty(this, "maximumScreenSpaceError", {
    get: function() {
      return z();
    },
    set: function(i) {
      i = Number(i), isNaN(i) || (z(i), V(n._tileset) && (n._tileset.maximumScreenSpaceError = i));
    }
  }), this.maximumScreenSpaceError = 16;
  const j = B.observable();
  B.defineProperty(this, "dynamicScreenSpaceErrorDensity", {
    get: function() {
      return j();
    },
    set: function(i) {
      i = Number(i), isNaN(i) || (j(i), V(n._tileset) && (n._tileset.dynamicScreenSpaceErrorDensity = i));
    }
  }), this.dynamicScreenSpaceErrorDensity = 2e-4, this.dynamicScreenSpaceErrorDensitySliderValue = void 0, B.defineProperty(this, "dynamicScreenSpaceErrorDensitySliderValue", {
    get: function() {
      return Math.pow(j(), 1 / 6);
    },
    set: function(i) {
      const m = Math.pow(i, 6);
      j(m), V(n._tileset) && (n._tileset.dynamicScreenSpaceErrorDensity = m);
    }
  });
  const O = B.observable();
  B.defineProperty(this, "dynamicScreenSpaceErrorFactor", {
    get: function() {
      return O();
    },
    set: function(i) {
      i = Number(i), isNaN(i) || (O(i), V(n._tileset) && (n._tileset.dynamicScreenSpaceErrorFactor = i));
    }
  }), this.dynamicScreenSpaceErrorFactor = 24;
  const q = Ht(this), se = B.observable();
  B.defineProperty(this, "pickActive", {
    get: function() {
      return se();
    },
    set: function(i) {
      se(i), i ? n._eventHandler.setInputAction(
        q,
        ve.LEFT_CLICK
      ) : n._eventHandler.removeInputAction(ve.LEFT_CLICK);
    }
  });
  const J = B.observable();
  B.defineProperty(this, "pointCloudShading", {
    get: function() {
      return J();
    },
    set: function(i) {
      J(i), V(n._tileset) && (n._tileset.pointCloudShading.attenuation = i);
    }
  }), this.pointCloudShading = !1;
  const G = B.observable();
  B.defineProperty(this, "geometricErrorScale", {
    get: function() {
      return G();
    },
    set: function(i) {
      i = Number(i), isNaN(i) || (G(i), V(n._tileset) && (n._tileset.pointCloudShading.geometricErrorScale = i));
    }
  }), this.geometricErrorScale = 1;
  const ne = B.observable();
  B.defineProperty(this, "maximumAttenuation", {
    get: function() {
      return ne();
    },
    set: function(i) {
      i = Number(i), isNaN(i) || (ne(i), V(n._tileset) && (n._tileset.pointCloudShading.maximumAttenuation = i === 0 ? void 0 : i));
    }
  }), this.maximumAttenuation = 0;
  const Q = B.observable();
  B.defineProperty(this, "baseResolution", {
    get: function() {
      return Q();
    },
    set: function(i) {
      i = Number(i), isNaN(i) || (Q(i), V(n._tileset) && (n._tileset.pointCloudShading.baseResolution = i === 0 ? void 0 : i));
    }
  }), this.baseResolution = 0;
  const t = B.observable();
  B.defineProperty(this, "eyeDomeLighting", {
    get: function() {
      return t();
    },
    set: function(i) {
      t(i), V(n._tileset) && (n._tileset.pointCloudShading.eyeDomeLighting = i);
    }
  }), this.eyeDomeLighting = !1;
  const r = B.observable();
  B.defineProperty(this, "eyeDomeLightingStrength", {
    get: function() {
      return r();
    },
    set: function(i) {
      i = Number(i), isNaN(i) || (r(i), V(n._tileset) && (n._tileset.pointCloudShading.eyeDomeLightingStrength = i));
    }
  }), this.eyeDomeLightingStrength = 1;
  const s = B.observable();
  B.defineProperty(this, "eyeDomeLightingRadius", {
    get: function() {
      return s();
    },
    set: function(i) {
      i = Number(i), isNaN(i) || (s(i), V(n._tileset) && (n._tileset.pointCloudShading.eyeDomeLightingRadius = i));
    }
  }), this.eyeDomeLightingRadius = 1, this.pickActive = !1;
  const o = B.observable();
  B.defineProperty(this, "skipLevelOfDetail", {
    get: function() {
      return o();
    },
    set: function(i) {
      o(i), V(n._tileset) && (n._tileset.skipLevelOfDetail = i);
    }
  }), this.skipLevelOfDetail = !0;
  const d = B.observable();
  B.defineProperty(this, "skipScreenSpaceErrorFactor", {
    get: function() {
      return d();
    },
    set: function(i) {
      i = Number(i), isNaN(i) || (d(i), V(n._tileset) && (n._tileset.skipScreenSpaceErrorFactor = i));
    }
  }), this.skipScreenSpaceErrorFactor = 16;
  const h = B.observable();
  B.defineProperty(this, "baseScreenSpaceError", {
    get: function() {
      return h();
    },
    set: function(i) {
      i = Number(i), isNaN(i) || (h(i), V(n._tileset) && (n._tileset.baseScreenSpaceError = i));
    }
  }), this.baseScreenSpaceError = 1024;
  const p = B.observable();
  B.defineProperty(this, "skipLevels", {
    get: function() {
      return p();
    },
    set: function(i) {
      i = Number(i), isNaN(i) || (p(i), V(n._tileset) && (n._tileset.skipLevels = i));
    }
  }), this.skipLevels = 1;
  const f = B.observable();
  B.defineProperty(this, "immediatelyLoadDesiredLevelOfDetail", {
    get: function() {
      return f();
    },
    set: function(i) {
      f(i), V(n._tileset) && (n._tileset.immediatelyLoadDesiredLevelOfDetail = i);
    }
  }), this.immediatelyLoadDesiredLevelOfDetail = !1;
  const l = B.observable();
  B.defineProperty(this, "loadSiblings", {
    get: function() {
      return l();
    },
    set: function(i) {
      l(i), V(n._tileset) && (n._tileset.loadSiblings = i);
    }
  }), this.loadSiblings = !1, this._style = void 0, this._shouldStyle = !1, this._definedProperties = [
    "properties",
    "dynamicScreenSpaceError",
    "colorBlendMode",
    "picking",
    "colorize",
    "wireframe",
    "showBoundingVolumes",
    "showContentBoundingVolumes",
    "showRequestVolumes",
    "freezeFrame",
    "maximumScreenSpaceError",
    "dynamicScreenSpaceErrorDensity",
    "baseScreenSpaceError",
    "skipScreenSpaceErrorFactor",
    "skipLevelOfDetail",
    "skipLevels",
    "immediatelyLoadDesiredLevelOfDetail",
    "loadSiblings",
    "dynamicScreenSpaceErrorDensitySliderValue",
    "dynamicScreenSpaceErrorFactor",
    "pickActive",
    "showOnlyPickedTileDebugLabel",
    "showGeometricError",
    "showRenderingStatistics",
    "showMemoryUsage",
    "showUrl",
    "pointCloudShading",
    "geometricErrorScale",
    "maximumAttenuation",
    "baseResolution",
    "eyeDomeLighting",
    "eyeDomeLightingStrength",
    "eyeDomeLightingRadius"
  ], this._removePostRenderEvent = u.postRender.addEventListener(function() {
    n._update();
  }), V(this._tileset) || ot(this, !0);
}
Object.defineProperties(oe.prototype, {
  /**
   * Gets the scene
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {Scene}
   * @readonly
   */
  scene: {
    get: function() {
      return this._scene;
    }
  },
  /**
   * Gets the performance container
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {HTMLElement}
   * @readonly
   */
  performanceContainer: {
    get: function() {
      return this._performanceContainer;
    }
  },
  /**
   * Gets the statistics text.  This property is observable.
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {string}
   * @readonly
   */
  statisticsText: {
    get: function() {
      return this._statisticsText;
    }
  },
  /**
   * Gets the pick statistics text.  This property is observable.
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {string}
   * @readonly
   */
  pickStatisticsText: {
    get: function() {
      return this._pickStatisticsText;
    }
  },
  /**
   * Gets the resource cache statistics text. This property is observable.
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {string}
   * @readonly
   */
  resourceCacheStatisticsText: {
    get: function() {
      return this._resourceCacheStatisticsText;
    }
  },
  /**
   * Gets the available blend modes
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {Object[]}
   * @readonly
   */
  colorBlendModes: {
    get: function() {
      return zt;
    }
  },
  /**
   * Gets the editor error message
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {string}
   * @readonly
   */
  editorError: {
    get: function() {
      return this._editorError;
    }
  },
  /**
   * Gets or sets the tileset of the view model.
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {Cesium3DTileset}
   */
  tileset: {
    get: function() {
      return this._tileset;
    },
    set: function(u) {
      if (this._tileset = u, this._style = void 0, this.styleString = "{}", this.feature = void 0, this.tile = void 0, V(u)) {
        this._properties(u.properties);
        const c = [
          "colorize",
          "wireframe",
          "showBoundingVolumes",
          "showContentBoundingVolumes",
          "showRequestVolumes",
          "freezeFrame",
          "showOnlyPickedTileDebugLabel",
          "showGeometricError",
          "showRenderingStatistics",
          "showMemoryUsage",
          "showUrl"
        ], n = c.length;
        for (let _ = 0; _ < n; ++_) {
          const P = c[_];
          this[P] = this[P];
        }
        this.maximumScreenSpaceError = u.maximumScreenSpaceError, this.dynamicScreenSpaceError = u.dynamicScreenSpaceError, this.dynamicScreenSpaceErrorDensity = u.dynamicScreenSpaceErrorDensity, this.dynamicScreenSpaceErrorFactor = u.dynamicScreenSpaceErrorFactor, this.colorBlendMode = u.colorBlendMode, this.skipLevelOfDetail = u.skipLevelOfDetail, this.skipScreenSpaceErrorFactor = u.skipScreenSpaceErrorFactor, this.baseScreenSpaceError = u.baseScreenSpaceError, this.skipLevels = u.skipLevels, this.immediatelyLoadDesiredLevelOfDetail = u.immediatelyLoadDesiredLevelOfDetail, this.loadSiblings = u.loadSiblings, this.hasEnabledWireframe = u._enableDebugWireframe;
        const b = u.pointCloudShading;
        this.pointCloudShading = b.attenuation, this.geometricErrorScale = b.geometricErrorScale, this.maximumAttenuation = b.maximumAttenuation ? b.maximumAttenuation : 0, this.baseResolution = b.baseResolution ? b.baseResolution : 0, this.eyeDomeLighting = b.eyeDomeLighting, this.eyeDomeLightingStrength = b.eyeDomeLightingStrength, this.eyeDomeLightingRadius = b.eyeDomeLightingRadius, this._scene.requestRender();
      } else
        this._properties({});
      this._statisticsText = Me(u, !1), this._pickStatisticsText = Me(u, !0), this._resourceCacheStatisticsText = st(), ot(this, !1);
    }
  },
  /**
   * Gets the current feature of the view model.
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {Cesium3DTileFeature}
   */
  feature: {
    get: function() {
      return this._feature;
    },
    set: function(u) {
      if (this._feature === u)
        return;
      const c = this._feature;
      V(c) && !c.content.isDestroyed() && (!this.colorize && V(this._style) ? c.color = V(this._style.color) ? this._style.color.evaluateColor(c, Ut) : Se.WHITE : c.color = Fe, this._scene.requestRender()), V(u) && (Se.clone(u.color, Fe), u.color = Ke, this._scene.requestRender()), this._feature = u;
    }
  },
  /**
   * Gets the current tile of the view model
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {Cesium3DTile}
   */
  tile: {
    get: function() {
      return this._tile;
    },
    set: function(u) {
      if (this._tile === u)
        return;
      const c = this._tile;
      V(c) && !c.isDestroyed() && !Ue(c.content) && (c.color = Fe, this._scene.requestRender()), V(u) && !Ue(u.content) && (Se.clone(u.color, Fe), u.color = Ke, this._scene.requestRender()), this._tile = u;
    }
  }
});
function Ue(u) {
  if (!V(u))
    return !1;
  if (u.featuresLength > 0)
    return !0;
  const c = u.innerContents;
  if (V(c)) {
    const n = c.length;
    for (let b = 0; b < n; ++b)
      if (!Ue(c[b]))
        return !1;
    return !0;
  }
  return !1;
}
oe.prototype.togglePickTileset = function() {
  this.pickActive = !this.pickActive;
};
oe.prototype.toggleInspector = function() {
  this.inspectorVisible = !this.inspectorVisible;
};
oe.prototype.toggleTileset = function() {
  this.tilesetVisible = !this.tilesetVisible;
};
oe.prototype.toggleDisplay = function() {
  this.displayVisible = !this.displayVisible;
};
oe.prototype.toggleUpdate = function() {
  this.updateVisible = !this.updateVisible;
};
oe.prototype.toggleLogging = function() {
  this.loggingVisible = !this.loggingVisible;
};
oe.prototype.toggleStyle = function() {
  this.styleVisible = !this.styleVisible;
};
oe.prototype.toggleTileDebugLabels = function() {
  this.tileDebugLabelsVisible = !this.tileDebugLabelsVisible;
};
oe.prototype.toggleOptimization = function() {
  this.optimizationVisible = !this.optimizationVisible;
};
oe.prototype.trimTilesCache = function() {
  V(this._tileset) && this._tileset.trimLoadedTiles();
};
oe.prototype.compileStyle = function() {
  const u = this._tileset;
  if (!(!V(u) || this.styleString === JSON.stringify(u.style))) {
    this._editorError = "";
    try {
      this.styleString.length === 0 && (this.styleString = "{}"), this._style = new ct(JSON.parse(this.styleString)), this._shouldStyle = !0, this._scene.requestRender();
    } catch (c) {
      this._editorError = c.toString();
    }
    this.feature = this._feature, this.tile = this._tile;
  }
};
oe.prototype.styleEditorKeyPress = function(u, c) {
  if (c.keyCode === 9) {
    c.preventDefault();
    const n = c.target, b = n.selectionStart, _ = n.selectionEnd;
    let P = _;
    const k = n.value.slice(b, _).split(`
`), F = k.length;
    let M;
    if (c.shiftKey)
      for (M = 0; M < F; ++M)
        k[M][0] === " " && (k[M][1] === " " ? (k[M] = k[M].substr(2), P -= 2) : (k[M] = k[M].substr(1), P -= 1));
    else
      for (M = 0; M < F; ++M)
        k[M] = `  ${k[M]}`, P += 2;
    const A = k.join(`
`);
    n.value = n.value.slice(0, b) + A + n.value.slice(_), n.selectionStart = b !== _ ? b : P, n.selectionEnd = P;
  } else c.ctrlKey && (c.keyCode === 10 || c.keyCode === 13) && this.compileStyle();
  return !0;
};
oe.prototype._update = function() {
  const u = this._tileset;
  if (this.performance && this._performanceDisplay.update(), V(u)) {
    if (u.isDestroyed()) {
      this.tile = void 0, this.feature = void 0, this.tileset = void 0;
      return;
    }
    const c = u.style;
    this._style !== u.style && (this._shouldStyle ? (u.style = this._style, this._shouldStyle = !1) : (this._style = c, this.styleString = JSON.stringify(c.style, null, "  ")));
  }
  this.showStatistics && (this._statisticsText = Me(u, !1), this._pickStatisticsText = Me(u, !0), this._resourceCacheStatisticsText = st());
};
oe.prototype.isDestroyed = function() {
  return !1;
};
oe.prototype.destroy = function() {
  this._eventHandler.destroy(), this._removePostRenderEvent();
  const u = this;
  return this._definedProperties.forEach(function(c) {
    B.getObservable(u, c).dispose();
  }), we(this);
};
oe.getStatistics = Me;
function Ve(u, c) {
  ie.defined("container", u), ie.typeOf.object("scene", c), u = We(u);
  const n = document.createElement("div"), b = document.createElement("div");
  b.setAttribute("data-bind", "visible: performance");
  const _ = new oe(
    c,
    b
  );
  this._viewModel = _, this._container = u, this._element = n;
  const P = document.createElement("div");
  P.textContent = "3D Tiles Inspector", P.className = "cesium-cesiumInspector-button", P.setAttribute("data-bind", "click: toggleInspector"), n.appendChild(P), n.className = "cesium-cesiumInspector cesium-3DTilesInspector", n.setAttribute(
    "data-bind",
    'css: { "cesium-cesiumInspector-visible" : inspectorVisible, "cesium-cesiumInspector-hidden" : !inspectorVisible}'
  ), u.appendChild(n);
  const D = document.createElement("div");
  D.className = "cesium-cesiumInspector-dropDown", n.appendChild(D);
  const k = ce.createSection, F = ce.createCheckbox, M = ce.createRangeInput, A = ce.createButton, W = k(
    D,
    "Tileset",
    "tilesetVisible",
    "toggleTileset"
  ), X = k(
    D,
    "Display",
    "displayVisible",
    "toggleDisplay"
  ), Z = k(
    D,
    "Update",
    "updateVisible",
    "toggleUpdate"
  ), e = k(
    D,
    "Logging",
    "loggingVisible",
    "toggleLogging"
  ), Y = k(
    D,
    "Tile Debug Labels",
    "tileDebugLabelsVisible",
    "toggleTileDebugLabels"
  ), H = k(
    D,
    "Style",
    "styleVisible",
    "toggleStyle"
  ), $ = k(
    D,
    "Optimization",
    "optimizationVisible",
    "toggleOptimization"
  ), z = document.createElement("div");
  z.className = "field-group";
  const j = document.createElement("label");
  j.className = "field-label", j.appendChild(document.createTextNode("Properties: "));
  const O = document.createElement("div");
  O.setAttribute("data-bind", "text: properties"), z.appendChild(j), z.appendChild(O), W.appendChild(z), W.appendChild(
    A("Pick Tileset", "togglePickTileset", "pickActive")
  ), W.appendChild(
    A("Trim Tiles Cache", "trimTilesCache")
  ), W.appendChild(F("Enable Picking", "picking")), X.appendChild(F("Colorize", "colorize"));
  const q = X.appendChild(
    F(
      "Wireframe",
      "wireframe",
      "_tileset === undefined || hasEnabledWireframe"
    )
  ), se = document.createElement("p");
  se.setAttribute(
    "data-bind",
    "visible: _tileset !== undefined && !hasEnabledWireframe"
  ), se.setAttribute(
    "class",
    "cesium-3DTilesInspector-disabledElementsInfo"
  ), se.innerText = "Set enableDebugWireframe to true in the tileset constructor to enable this option.", q.appendChild(se), X.appendChild(
    F("Bounding Volumes", "showBoundingVolumes")
  ), X.appendChild(
    F("Content Volumes", "showContentBoundingVolumes")
  ), X.appendChild(
    F("Request Volumes", "showRequestVolumes")
  ), X.appendChild(
    F("Point Cloud Shading", "pointCloudShading")
  );
  const J = document.createElement("div");
  J.setAttribute(
    "data-bind",
    "visible: pointCloudShading"
  ), J.appendChild(
    M("Geometric Error Scale", "geometricErrorScale", 0, 2, 0.01)
  ), J.appendChild(
    M("Maximum Attenuation", "maximumAttenuation", 0, 32, 1)
  ), J.appendChild(
    M("Base Resolution", "baseResolution", 0, 1, 0.01)
  ), J.appendChild(
    F("Eye Dome Lighting (EDL)", "eyeDomeLighting")
  ), X.appendChild(J);
  const G = document.createElement("div");
  G.setAttribute("data-bind", "visible: eyeDomeLighting"), G.appendChild(
    M("EDL Strength", "eyeDomeLightingStrength", 0, 2, 0.1)
  ), G.appendChild(
    M("EDL Radius", "eyeDomeLightingRadius", 0, 4, 0.1)
  ), J.appendChild(G), Z.appendChild(
    F("Freeze Frame", "freezeFrame")
  ), Z.appendChild(
    F("Dynamic Screen Space Error", "dynamicScreenSpaceError")
  );
  const ne = document.createElement("div");
  ne.appendChild(
    M(
      "Maximum Screen Space Error",
      "maximumScreenSpaceError",
      0,
      128,
      1
    )
  ), Z.appendChild(ne);
  const Q = document.createElement("div");
  Q.setAttribute(
    "data-bind",
    "visible: dynamicScreenSpaceError"
  ), Q.appendChild(
    M(
      "Screen Space Error Density",
      "dynamicScreenSpaceErrorDensitySliderValue",
      0,
      1,
      5e-3,
      "dynamicScreenSpaceErrorDensity"
    )
  ), Q.appendChild(
    M(
      "Screen Space Error Factor",
      "dynamicScreenSpaceErrorFactor",
      1,
      32,
      0.1
    )
  ), Z.appendChild(Q), e.appendChild(
    F("Performance", "performance")
  ), e.appendChild(b), e.appendChild(
    F("Statistics", "showStatistics")
  );
  const t = document.createElement("div");
  t.className = "cesium-3dTilesInspector-statistics", t.setAttribute(
    "data-bind",
    "html: statisticsText, visible: showStatistics"
  ), e.appendChild(t), e.appendChild(
    F("Pick Statistics", "showPickStatistics")
  );
  const r = document.createElement("div");
  r.className = "cesium-3dTilesInspector-statistics", r.setAttribute(
    "data-bind",
    "html: pickStatisticsText, visible: showPickStatistics"
  ), e.appendChild(r), e.appendChild(
    F("Resource Cache Statistics", "showResourceCacheStatistics")
  );
  const s = document.createElement("div");
  s.className = "cesium-3dTilesInspector-statistics", s.setAttribute(
    "data-bind",
    "html: resourceCacheStatisticsText, visible: showResourceCacheStatistics"
  ), e.appendChild(s);
  const o = document.createElement("div");
  H.appendChild(o), o.appendChild(document.createTextNode("Color Blend Mode: "));
  const d = document.createElement("select");
  d.setAttribute(
    "data-bind",
    'options: colorBlendModes, optionsText: "text", optionsValue: "value", value: colorBlendMode'
  ), o.appendChild(d);
  const h = document.createElement("textarea");
  h.setAttribute(
    "data-bind",
    "textInput: styleString, event: { keydown: styleEditorKeyPress }"
  ), o.className = "cesium-cesiumInspector-styleEditor", o.appendChild(h);
  const p = A("Compile (Ctrl+Enter)", "compileStyle");
  o.appendChild(p);
  const f = document.createElement("div");
  f.className = "cesium-cesiumInspector-error", f.setAttribute("data-bind", "text: editorError"), o.appendChild(f), Y.appendChild(
    F("Show Picked Only", "showOnlyPickedTileDebugLabel")
  ), Y.appendChild(
    F("Geometric Error", "showGeometricError")
  ), Y.appendChild(
    F("Rendering Statistics", "showRenderingStatistics")
  ), Y.appendChild(
    F("Memory Usage (MB)", "showMemoryUsage")
  ), Y.appendChild(F("Url", "showUrl")), $.appendChild(
    F("Skip Tile LODs", "skipLevelOfDetail")
  );
  const l = document.createElement("div");
  l.appendChild(
    M("Skip SSE Factor", "skipScreenSpaceErrorFactor", 1, 50, 1)
  ), $.appendChild(l);
  const i = document.createElement("div");
  i.appendChild(
    M(
      "SSE before skipping LOD",
      "baseScreenSpaceError",
      0,
      4096,
      1
    )
  ), $.appendChild(i);
  const m = document.createElement("div");
  m.appendChild(
    M("Min. levels to skip", "skipLevels", 0, 10, 1)
  ), $.appendChild(m), $.appendChild(
    F(
      "Load only tiles that meet the max SSE.",
      "immediatelyLoadDesiredLevelOfDetail"
    )
  ), $.appendChild(
    F("Load siblings of visible tiles", "loadSiblings")
  ), B.applyBindings(_, n);
}
Object.defineProperties(Ve.prototype, {
  /**
   * Gets the parent container.
   * @memberof Cesium3DTilesInspector.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   * @memberof Cesium3DTilesInspector.prototype
   *
   * @type {Cesium3DTilesInspectorViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
Ve.prototype.isDestroyed = function() {
  return !1;
};
Ve.prototype.destroy = function() {
  return B.cleanNode(this._element), this._container.removeChild(this._element), this.viewModel.destroy(), we(this);
};
function qt(u) {
  let c;
  if (V(u)) {
    c = "Command Statistics";
    const n = u.commandsInFrustums;
    for (const b in n)
      if (n.hasOwnProperty(b)) {
        let _ = parseInt(b, 10), P;
        if (_ === 7)
          P = "1, 2 and 3";
        else {
          const D = [];
          for (let k = 2; k >= 0; k--) {
            const F = Math.pow(2, k);
            _ >= F && (D.push(k + 1), _ -= F);
          }
          P = D.reverse().join(" and ");
        }
        c += `<br>&nbsp;&nbsp;&nbsp;&nbsp;${n[b]} in frustum ${P}`;
      }
    c += `<br>Total: ${u.totalCommands}`;
  }
  return c;
}
function qe(u, c, n) {
  let b = Math.min(n, c);
  return b = Math.max(b, u), b;
}
const Wt = new dt(), Yt = new ue();
function Be(u, c) {
  if (!V(u))
    throw new _e("scene is required");
  if (!V(c))
    throw new _e("performanceContainer is required");
  const n = this, b = u.canvas, _ = new Qe(b);
  this._eventHandler = _, this._scene = u, this._canvas = b, this._primitive = void 0, this._tile = void 0, this._modelMatrixPrimitive = void 0, this._performanceDisplay = void 0, this._performanceContainer = c;
  const P = this._scene.globe;
  P.depthTestAgainstTerrain = !0, this.frustums = !1, this.frustumPlanes = !1, this.performance = !1, this.shaderCacheText = "", this.primitiveBoundingSphere = !1, this.primitiveReferenceFrame = !1, this.filterPrimitive = !1, this.tileBoundingSphere = !1, this.filterTile = !1, this.wireframe = !1, this.depthFrustum = 1, this._numberOfFrustums = 1, this.suspendUpdates = !1, this.tileCoordinates = !1, this.frustumStatisticText = !1, this.tileText = "", this.hasPickedPrimitive = !1, this.hasPickedTile = !1, this.pickPrimitiveActive = !1, this.pickTileActive = !1, this.dropDownVisible = !0, this.generalVisible = !0, this.primitivesVisible = !1, this.terrainVisible = !1, this.depthFrustumText = "", B.track(this, [
    "frustums",
    "frustumPlanes",
    "performance",
    "shaderCacheText",
    "primitiveBoundingSphere",
    "primitiveReferenceFrame",
    "filterPrimitive",
    "tileBoundingSphere",
    "filterTile",
    "wireframe",
    "depthFrustum",
    "suspendUpdates",
    "tileCoordinates",
    "frustumStatisticText",
    "tileText",
    "hasPickedPrimitive",
    "hasPickedTile",
    "pickPrimitiveActive",
    "pickTileActive",
    "dropDownVisible",
    "generalVisible",
    "primitivesVisible",
    "terrainVisible",
    "depthFrustumText"
  ]), this._toggleDropDown = te(function() {
    n.dropDownVisible = !n.dropDownVisible;
  }), this._toggleGeneral = te(function() {
    n.generalVisible = !n.generalVisible;
  }), this._togglePrimitives = te(function() {
    n.primitivesVisible = !n.primitivesVisible;
  }), this._toggleTerrain = te(function() {
    n.terrainVisible = !n.terrainVisible;
  }), this._frustumsSubscription = B.getObservable(this, "frustums").subscribe(function(M) {
    n._scene.debugShowFrustums = M, n._scene.requestRender();
  }), this._frustumPlanesSubscription = B.getObservable(this, "frustumPlanes").subscribe(function(M) {
    n._scene.debugShowFrustumPlanes = M, n._scene.requestRender();
  }), this._performanceSubscription = B.getObservable(this, "performance").subscribe(function(M) {
    M ? n._performanceDisplay = new et({
      container: n._performanceContainer
    }) : n._performanceContainer.innerHTML = "";
  }), this._showPrimitiveBoundingSphere = te(function() {
    return n._primitive.debugShowBoundingVolume = n.primitiveBoundingSphere, n._scene.requestRender(), !0;
  }), this._primitiveBoundingSphereSubscription = B.getObservable(this, "primitiveBoundingSphere").subscribe(function() {
    n._showPrimitiveBoundingSphere();
  }), this._showPrimitiveReferenceFrame = te(function() {
    if (n.primitiveReferenceFrame) {
      const M = n._primitive.modelMatrix;
      n._modelMatrixPrimitive = new pt({
        modelMatrix: M
      }), n._scene.primitives.add(n._modelMatrixPrimitive);
    } else V(n._modelMatrixPrimitive) && (n._scene.primitives.remove(n._modelMatrixPrimitive), n._modelMatrixPrimitive = void 0);
    return n._scene.requestRender(), !0;
  }), this._primitiveReferenceFrameSubscription = B.getObservable(this, "primitiveReferenceFrame").subscribe(function() {
    n._showPrimitiveReferenceFrame();
  }), this._doFilterPrimitive = te(function() {
    return n.filterPrimitive ? n._scene.debugCommandFilter = function(M) {
      return V(n._modelMatrixPrimitive) && M.owner === n._modelMatrixPrimitive._primitive ? !0 : V(n._primitive) ? M.owner === n._primitive || M.owner === n._primitive._billboardCollection || M.owner.primitive === n._primitive : !1;
    } : n._scene.debugCommandFilter = void 0, !0;
  }), this._filterPrimitiveSubscription = B.getObservable(this, "filterPrimitive").subscribe(function() {
    n._doFilterPrimitive(), n._scene.requestRender();
  }), this._wireframeSubscription = B.getObservable(this, "wireframe").subscribe(function(M) {
    P._surface.tileProvider._debug.wireframe = M, n._scene.requestRender();
  }), this._depthFrustumSubscription = B.getObservable(this, "depthFrustum").subscribe(function(M) {
    n._scene.debugShowDepthFrustum = M, n._scene.requestRender();
  }), this._incrementDepthFrustum = te(function() {
    const M = n.depthFrustum + 1;
    return n.depthFrustum = qe(1, n._numberOfFrustums, M), n._scene.requestRender(), !0;
  }), this._decrementDepthFrustum = te(function() {
    const M = n.depthFrustum - 1;
    return n.depthFrustum = qe(1, n._numberOfFrustums, M), n._scene.requestRender(), !0;
  }), this._suspendUpdatesSubscription = B.getObservable(this, "suspendUpdates").subscribe(function(M) {
    P._surface._debug.suspendLodUpdate = M, M || (n.filterTile = !1);
  });
  let D;
  this._showTileCoordinates = te(function() {
    return n.tileCoordinates && !V(D) ? D = u.imageryLayers.addImageryProvider(
      new ft({
        tilingScheme: u.terrainProvider.tilingScheme
      })
    ) : !n.tileCoordinates && V(D) && (u.imageryLayers.remove(D), D = void 0), !0;
  }), this._tileCoordinatesSubscription = B.getObservable(this, "tileCoordinates").subscribe(function() {
    n._showTileCoordinates(), n._scene.requestRender();
  }), this._tileBoundingSphereSubscription = B.getObservable(this, "tileBoundingSphere").subscribe(function() {
    n._showTileBoundingSphere(), n._scene.requestRender();
  }), this._showTileBoundingSphere = te(function() {
    return n.tileBoundingSphere ? P._surface.tileProvider._debug.boundingSphereTile = n._tile : P._surface.tileProvider._debug.boundingSphereTile = void 0, n._scene.requestRender(), !0;
  }), this._doFilterTile = te(function() {
    return n.filterTile ? (n.suspendUpdates = !0, P._surface._tilesToRender = [], V(n._tile) && n._tile.renderable && P._surface._tilesToRender.push(n._tile)) : n.suspendUpdates = !1, !0;
  }), this._filterTileSubscription = B.getObservable(this, "filterTile").subscribe(function() {
    n.doFilterTile(), n._scene.requestRender();
  });
  function k(M) {
    const A = n._scene.pick({
      x: M.position.x,
      y: M.position.y
    });
    V(A) && (n.primitive = V(A.collection) ? A.collection : A.primitive), n._scene.requestRender(), n.pickPrimitiveActive = !1;
  }
  this._pickPrimitive = te(function() {
    n.pickPrimitiveActive = !n.pickPrimitiveActive;
  }), this._pickPrimitiveActiveSubscription = B.getObservable(this, "pickPrimitiveActive").subscribe(function(M) {
    M ? _.setInputAction(
      k,
      ve.LEFT_CLICK
    ) : _.removeInputAction(ve.LEFT_CLICK);
  });
  function F(M) {
    let A;
    const W = P.ellipsoid, X = n._scene.camera.getPickRay(M.position, Wt), Z = P.pick(X, n._scene, Yt);
    if (V(Z)) {
      const e = W.cartesianToCartographic(Z), Y = P._surface.tileProvider._tilesToRenderByTextureCount;
      for (let H = 0; !A && H < Y.length; ++H) {
        const $ = Y[H];
        if (V($))
          for (let z = 0; !A && z < $.length; ++z) {
            const j = $[z];
            ht.contains(j.rectangle, e) && (A = j);
          }
      }
    }
    n.tile = A, n.pickTileActive = !1;
  }
  this._pickTile = te(function() {
    n.pickTileActive = !n.pickTileActive;
  }), this._pickTileActiveSubscription = B.getObservable(this, "pickTileActive").subscribe(function(M) {
    M ? _.setInputAction(
      F,
      ve.LEFT_CLICK
    ) : _.removeInputAction(ve.LEFT_CLICK);
  }), this._removePostRenderEvent = u.postRender.addEventListener(function() {
    n._update();
  });
}
Object.defineProperties(Be.prototype, {
  /**
   * Gets the scene to control.
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Scene}
   */
  scene: {
    get: function() {
      return this._scene;
    }
  },
  /**
   * Gets the container of the PerformanceDisplay
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Element}
   */
  performanceContainer: {
    get: function() {
      return this._performanceContainer;
    }
  },
  /**
   * Gets the command to toggle the visibility of the drop down.
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  toggleDropDown: {
    get: function() {
      return this._toggleDropDown;
    }
  },
  /**
   * Gets the command to toggle the visibility of a BoundingSphere for a primitive
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  showPrimitiveBoundingSphere: {
    get: function() {
      return this._showPrimitiveBoundingSphere;
    }
  },
  /**
   * Gets the command to toggle the visibility of a {@link DebugModelMatrixPrimitive} for the model matrix of a primitive
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  showPrimitiveReferenceFrame: {
    get: function() {
      return this._showPrimitiveReferenceFrame;
    }
  },
  /**
   * Gets the command to toggle a filter that renders only a selected primitive
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  doFilterPrimitive: {
    get: function() {
      return this._doFilterPrimitive;
    }
  },
  /**
   * Gets the command to increment the depth frustum index to be shown
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  incrementDepthFrustum: {
    get: function() {
      return this._incrementDepthFrustum;
    }
  },
  /**
   * Gets the command to decrement the depth frustum index to be shown
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  decrementDepthFrustum: {
    get: function() {
      return this._decrementDepthFrustum;
    }
  },
  /**
   * Gets the command to toggle the visibility of tile coordinates
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  showTileCoordinates: {
    get: function() {
      return this._showTileCoordinates;
    }
  },
  /**
   * Gets the command to toggle the visibility of a BoundingSphere for a selected tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  showTileBoundingSphere: {
    get: function() {
      return this._showTileBoundingSphere;
    }
  },
  /**
   * Gets the command to toggle a filter that renders only a selected tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  doFilterTile: {
    get: function() {
      return this._doFilterTile;
    }
  },
  /**
   * Gets the command to expand and collapse the general section
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  toggleGeneral: {
    get: function() {
      return this._toggleGeneral;
    }
  },
  /**
   * Gets the command to expand and collapse the primitives section
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  togglePrimitives: {
    get: function() {
      return this._togglePrimitives;
    }
  },
  /**
   * Gets the command to expand and collapse the terrain section
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  toggleTerrain: {
    get: function() {
      return this._toggleTerrain;
    }
  },
  /**
   * Gets the command to pick a primitive
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  pickPrimitive: {
    get: function() {
      return this._pickPrimitive;
    }
  },
  /**
   * Gets the command to pick a tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  pickTile: {
    get: function() {
      return this._pickTile;
    }
  },
  /**
   * Gets the command to pick a tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  selectParent: {
    get: function() {
      const u = this;
      return te(function() {
        u.tile = u.tile.parent;
      });
    }
  },
  /**
   * Gets the command to pick a tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  selectNW: {
    get: function() {
      const u = this;
      return te(function() {
        u.tile = u.tile.northwestChild;
      });
    }
  },
  /**
   * Gets the command to pick a tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  selectNE: {
    get: function() {
      const u = this;
      return te(function() {
        u.tile = u.tile.northeastChild;
      });
    }
  },
  /**
   * Gets the command to pick a tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  selectSW: {
    get: function() {
      const u = this;
      return te(function() {
        u.tile = u.tile.southwestChild;
      });
    }
  },
  /**
   * Gets the command to pick a tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  selectSE: {
    get: function() {
      const u = this;
      return te(function() {
        u.tile = u.tile.southeastChild;
      });
    }
  },
  /**
   * Gets or sets the current selected primitive
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  primitive: {
    get: function() {
      return this._primitive;
    },
    set: function(u) {
      const c = this._primitive;
      u !== c && (this.hasPickedPrimitive = !0, V(c) && (c.debugShowBoundingVolume = !1), this._scene.debugCommandFilter = void 0, V(this._modelMatrixPrimitive) && (this._scene.primitives.remove(this._modelMatrixPrimitive), this._modelMatrixPrimitive = void 0), this._primitive = u, u.show = !1, setTimeout(function() {
        u.show = !0;
      }, 50), this.showPrimitiveBoundingSphere(), this.showPrimitiveReferenceFrame(), this.doFilterPrimitive());
    }
  },
  /**
   * Gets or sets the current selected tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  tile: {
    get: function() {
      return this._tile;
    },
    set: function(u) {
      if (V(u)) {
        this.hasPickedTile = !0;
        const c = this._tile;
        if (u !== c) {
          this.tileText = `L: ${u.level} X: ${u.x} Y: ${u.y}`, this.tileText += `<br>SW corner: ${u.rectangle.west}, ${u.rectangle.south}`, this.tileText += `<br>NE corner: ${u.rectangle.east}, ${u.rectangle.north}`;
          const n = u.data;
          V(n) && V(n.tileBoundingRegion) ? this.tileText += `<br>Min: ${n.tileBoundingRegion.minimumHeight} Max: ${n.tileBoundingRegion.maximumHeight}` : this.tileText += "<br>(Tile is not loaded)";
        }
        this._tile = u, this.showTileBoundingSphere(), this.doFilterTile();
      } else
        this.hasPickedTile = !1, this._tile = void 0;
    }
  }
});
Be.prototype._update = function() {
  this.frustums && (this.frustumStatisticText = qt(
    this._scene.debugFrustumStatistics
  ));
  const u = this._scene.numberOfFrustums;
  this._numberOfFrustums = u, this.depthFrustum = qe(1, u, this.depthFrustum), this.depthFrustumText = `${this.depthFrustum} of ${u}`, this.performance && this._performanceDisplay.update(), this.primitiveReferenceFrame && (this._modelMatrixPrimitive.modelMatrix = this._primitive.modelMatrix), this.shaderCacheText = `Cached shaders: ${this._scene.context.shaderCache.numberOfShaders}`;
};
Be.prototype.isDestroyed = function() {
  return !1;
};
Be.prototype.destroy = function() {
  return this._eventHandler.destroy(), this._removePostRenderEvent(), this._frustumsSubscription.dispose(), this._frustumPlanesSubscription.dispose(), this._performanceSubscription.dispose(), this._primitiveBoundingSphereSubscription.dispose(), this._primitiveReferenceFrameSubscription.dispose(), this._filterPrimitiveSubscription.dispose(), this._wireframeSubscription.dispose(), this._depthFrustumSubscription.dispose(), this._suspendUpdatesSubscription.dispose(), this._tileCoordinatesSubscription.dispose(), this._tileBoundingSphereSubscription.dispose(), this._filterTileSubscription.dispose(), this._pickPrimitiveActiveSubscription.dispose(), this._pickTileActiveSubscription.dispose(), we(this);
};
function Le(u, c) {
  if (!V(u))
    throw new _e("container is required.");
  if (!V(c))
    throw new _e("scene is required.");
  u = We(u);
  const n = document.createElement("div"), b = new Be(c, n);
  this._viewModel = b, this._container = u;
  const _ = document.createElement("div");
  this._element = _;
  const P = document.createElement("div");
  P.textContent = "Cesium Inspector", P.className = "cesium-cesiumInspector-button", P.setAttribute("data-bind", "click: toggleDropDown"), _.appendChild(P), _.className = "cesium-cesiumInspector", _.setAttribute(
    "data-bind",
    'css: { "cesium-cesiumInspector-visible" : dropDownVisible, "cesium-cesiumInspector-hidden" : !dropDownVisible }'
  ), u.appendChild(this._element);
  const D = document.createElement("div");
  D.className = "cesium-cesiumInspector-dropDown", _.appendChild(D);
  const k = ce.createSection, F = ce.createCheckbox, M = k(
    D,
    "General",
    "generalVisible",
    "toggleGeneral"
  ), A = F("Show Frustums", "frustums"), W = document.createElement("div");
  W.className = "cesium-cesiumInspector-frustumStatistics", W.setAttribute(
    "data-bind",
    "visible: frustums, html: frustumStatisticText"
  ), A.appendChild(W), M.appendChild(A), M.appendChild(
    F("Show Frustum Planes", "frustumPlanes")
  ), M.appendChild(
    F("Performance Display", "performance")
  ), n.className = "cesium-cesiumInspector-performanceDisplay", M.appendChild(n);
  const X = document.createElement("div");
  X.className = "cesium-cesiumInspector-shaderCache", X.setAttribute("data-bind", "html: shaderCacheText"), M.appendChild(X);
  const Z = document.createElement("div");
  M.appendChild(Z);
  const e = document.createElement("span");
  e.setAttribute(
    "data-bind",
    'html: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frustum:"'
  ), Z.appendChild(e);
  const Y = document.createElement("span");
  Y.setAttribute("data-bind", "text: depthFrustumText"), Z.appendChild(Y);
  const H = document.createElement("input");
  H.type = "button", H.value = "-", H.className = "cesium-cesiumInspector-pickButton", H.setAttribute("data-bind", "click: decrementDepthFrustum"), Z.appendChild(H);
  const $ = document.createElement("input");
  $.type = "button", $.value = "+", $.className = "cesium-cesiumInspector-pickButton", $.setAttribute("data-bind", "click: incrementDepthFrustum"), Z.appendChild($);
  const z = k(
    D,
    "Primitives",
    "primitivesVisible",
    "togglePrimitives"
  ), j = document.createElement("div");
  j.className = "cesium-cesiumInspector-pickSection", z.appendChild(j);
  const O = document.createElement("input");
  O.type = "button", O.value = "Pick a primitive", O.className = "cesium-cesiumInspector-pickButton", O.setAttribute(
    "data-bind",
    'css: {"cesium-cesiumInspector-pickButtonHighlight" : pickPrimitiveActive}, click: pickPrimitive'
  );
  let q = document.createElement("div");
  q.className = "cesium-cesiumInspector-center", q.appendChild(O), j.appendChild(q), j.appendChild(
    F(
      "Show bounding sphere",
      "primitiveBoundingSphere",
      "hasPickedPrimitive"
    )
  ), j.appendChild(
    F(
      "Show reference frame",
      "primitiveReferenceFrame",
      "hasPickedPrimitive"
    )
  ), this._primitiveOnly = F(
    "Show only selected",
    "filterPrimitive",
    "hasPickedPrimitive"
  ), j.appendChild(this._primitiveOnly);
  const se = k(
    D,
    "Terrain",
    "terrainVisible",
    "toggleTerrain"
  ), J = document.createElement("div");
  J.className = "cesium-cesiumInspector-pickSection", se.appendChild(J);
  const G = document.createElement("input");
  G.type = "button", G.value = "Pick a tile", G.className = "cesium-cesiumInspector-pickButton", G.setAttribute(
    "data-bind",
    'css: {"cesium-cesiumInspector-pickButtonHighlight" : pickTileActive}, click: pickTile'
  ), q = document.createElement("div"), q.appendChild(G), q.className = "cesium-cesiumInspector-center", J.appendChild(q);
  const ne = document.createElement("div");
  J.appendChild(ne);
  const Q = document.createElement("input");
  Q.type = "button", Q.value = "Parent", Q.className = "cesium-cesiumInspector-pickButton", Q.setAttribute("data-bind", "click: selectParent");
  const t = document.createElement("input");
  t.type = "button", t.value = "NW", t.className = "cesium-cesiumInspector-pickButton", t.setAttribute("data-bind", "click: selectNW");
  const r = document.createElement("input");
  r.type = "button", r.value = "NE", r.className = "cesium-cesiumInspector-pickButton", r.setAttribute("data-bind", "click: selectNE");
  const s = document.createElement("input");
  s.type = "button", s.value = "SW", s.className = "cesium-cesiumInspector-pickButton", s.setAttribute("data-bind", "click: selectSW");
  const o = document.createElement("input");
  o.type = "button", o.value = "SE", o.className = "cesium-cesiumInspector-pickButton", o.setAttribute("data-bind", "click: selectSE");
  const d = document.createElement("div");
  d.className = "cesium-cesiumInspector-tileText", ne.className = "cesium-cesiumInspector-frustumStatistics", ne.appendChild(d), ne.setAttribute("data-bind", "visible: hasPickedTile"), d.setAttribute("data-bind", "html: tileText");
  const h = document.createElement("div");
  h.className = "cesium-cesiumInspector-relativeText", h.textContent = "Select relative:", ne.appendChild(h);
  const p = document.createElement("table"), f = document.createElement("tr"), l = document.createElement("tr"), i = document.createElement("td");
  i.appendChild(Q);
  const m = document.createElement("td");
  m.appendChild(t);
  const g = document.createElement("td");
  g.appendChild(r), f.appendChild(i), f.appendChild(m), f.appendChild(g);
  const x = document.createElement("td"), a = document.createElement("td");
  a.appendChild(s);
  const y = document.createElement("td");
  y.appendChild(o), l.appendChild(x), l.appendChild(a), l.appendChild(y), p.appendChild(f), p.appendChild(l), ne.appendChild(p), J.appendChild(
    F(
      "Show bounding volume",
      "tileBoundingSphere",
      "hasPickedTile"
    )
  ), J.appendChild(
    F("Show only selected", "filterTile", "hasPickedTile")
  ), se.appendChild(F("Wireframe", "wireframe")), se.appendChild(
    F("Suspend LOD update", "suspendUpdates")
  ), se.appendChild(
    F("Show tile coordinates", "tileCoordinates")
  ), B.applyBindings(b, this._element);
}
Object.defineProperties(Le.prototype, {
  /**
   * Gets the parent container.
   * @memberof CesiumInspector.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   * @memberof CesiumInspector.prototype
   *
   * @type {CesiumInspectorViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
Le.prototype.isDestroyed = function() {
  return !1;
};
Le.prototype.destroy = function() {
  return B.cleanNode(this._element), this._container.removeChild(this._element), this.viewModel.destroy(), we(this);
};
function at(u) {
  const c = u.split(`
`);
  let n;
  for (n = 0; n < c.length && !c[n].match(/\S/); n++)
    ;
  if (n === c.length)
    return "";
  let b = "";
  const _ = /^\s*/, D = c[n].match(_)[0].length;
  for (let k = n; k < c.length; k++) {
    let F = c[k];
    F.match(_)[0].length >= D && (F = F.slice(D)), b += `${F}
`;
  }
  return b;
}
function pe(u) {
  ie.typeOf.object("scene", u), this._scene = u, this._voxelPrimitive = void 0, this._customShaderCompilationRemoveCallback = void 0, this._definedProperties = [], this._getPrimitiveFunctions = [], this._modelMatrixReady = !1;
  const c = this;
  function n(_) {
    const { name: P, initialValue: D } = _;
    c._definedProperties.push(P);
    let k = _.setPrimitiveFunction;
    k === !0 && (k = function(A) {
      c._voxelPrimitive[P] = A;
    });
    let F = _.getPrimitiveFunction;
    F === !0 && (F = function() {
      c[P] = c._voxelPrimitive[P];
    }), V(F) && c._getPrimitiveFunctions.push(F);
    const M = B.observable();
    return B.defineProperty(c, P, {
      get: function() {
        return M();
      },
      set: function(A) {
        typeof D == "number" && typeof A == "string" && (A = Number(A), isNaN(A) && (A = D)), typeof D == "boolean" && typeof A == "number" && (A = A === 1), M(A), V(k) && V(c._voxelPrimitive) && (k(A), u.requestRender());
      }
    }), c[P] = D, M;
  }
  function b(_, P) {
    return function(D) {
      const k = c._voxelPrimitive[_].clone();
      k[P] = D, c._voxelPrimitive[_] = k;
    };
  }
  n({
    name: "inspectorVisible",
    initialValue: !0
  }), n({
    name: "displayVisible",
    initialValue: !1
  }), n({
    name: "transformVisible",
    initialValue: !1
  }), n({
    name: "boundsVisible",
    initialValue: !1
  }), n({
    name: "clippingVisible",
    initialValue: !1
  }), n({
    name: "shaderVisible",
    initialValue: !1
  }), n({
    name: "shaderString",
    initialValue: "",
    getPrimitiveFunction: function() {
      const _ = c._voxelPrimitive.customShader.fragmentShaderText;
      c.shaderString = at(_);
    }
  }), n({
    name: "shaderCompilationMessage",
    initialValue: ""
  }), n({
    name: "shaderCompilationSuccess",
    initialValue: !0
  }), n({
    name: "depthTest",
    initialValue: !1,
    setPrimitiveFunction: !0,
    getPrimitiveFunction: !0
  }), n({
    name: "show",
    initialValue: !0,
    setPrimitiveFunction: !0,
    getPrimitiveFunction: !0
  }), n({
    name: "disableUpdate",
    initialValue: !1,
    setPrimitiveFunction: !0,
    getPrimitiveFunction: !0
  }), n({
    name: "debugDraw",
    initialValue: !1,
    setPrimitiveFunction: !0,
    getPrimitiveFunction: !0
  }), n({
    name: "jitter",
    initialValue: !0,
    setPrimitiveFunction: !0,
    getPrimitiveFunction: !0
  }), n({
    name: "nearestSampling",
    initialValue: !0,
    setPrimitiveFunction: !0,
    getPrimitiveFunction: !0
  }), n({
    name: "screenSpaceError",
    initialValue: 4,
    setPrimitiveFunction: !0,
    getPrimitiveFunction: !0
  }), n({
    name: "stepSize",
    initialValue: 1,
    setPrimitiveFunction: !0,
    getPrimitiveFunction: !0
  }), n({
    name: "shapeIsBox",
    getPrimitiveFunction: function() {
      const _ = c._voxelPrimitive.shape;
      c.shapeIsBox = _ === ee.BOX;
    }
  }), n({
    name: "shapeIsEllipsoid",
    getPrimitiveFunction: function() {
      const _ = c._voxelPrimitive.shape;
      c.shapeIsEllipsoid = _ === ee.ELLIPSOID;
    }
  }), n({
    name: "shapeIsCylinder",
    getPrimitiveFunction: function() {
      const _ = c._voxelPrimitive.shape;
      c.shapeIsCylinder = _ === ee.CYLINDER;
    }
  }), n({
    name: "boundsBoxMaxX",
    initialValue: 0,
    setPrimitiveFunction: b("maxBounds", "x"),
    getPrimitiveFunction: function() {
      c.boundsBoxMaxX = c._voxelPrimitive.maxBounds.x;
    }
  }), n({
    name: "boundsBoxMinX",
    initialValue: 0,
    setPrimitiveFunction: b("minBounds", "x"),
    getPrimitiveFunction: function() {
      c.boundsBoxMinX = c._voxelPrimitive.minBounds.x;
    }
  }), n({
    name: "boundsBoxMaxY",
    initialValue: 0,
    setPrimitiveFunction: b("maxBounds", "y"),
    getPrimitiveFunction: function() {
      c.boundsBoxMaxY = c._voxelPrimitive.maxBounds.y;
    }
  }), n({
    name: "boundsBoxMinY",
    initialValue: 0,
    setPrimitiveFunction: b("minBounds", "y"),
    getPrimitiveFunction: function() {
      c.boundsBoxMinY = c._voxelPrimitive.minBounds.y;
    }
  }), n({
    name: "boundsBoxMaxZ",
    initialValue: 0,
    setPrimitiveFunction: b("maxBounds", "z"),
    getPrimitiveFunction: function() {
      c.boundsBoxMaxZ = c._voxelPrimitive.maxBounds.z;
    }
  }), n({
    name: "boundsBoxMinZ",
    initialValue: 0,
    setPrimitiveFunction: b("minBounds", "z"),
    getPrimitiveFunction: function() {
      c.boundsBoxMinZ = c._voxelPrimitive.minBounds.z;
    }
  }), n({
    name: "boundsEllipsoidMaxLongitude",
    initialValue: 0,
    setPrimitiveFunction: b("maxBounds", "x"),
    getPrimitiveFunction: function() {
      c.boundsEllipsoidMaxLongitude = c._voxelPrimitive.maxBounds.x;
    }
  }), n({
    name: "boundsEllipsoidMinLongitude",
    initialValue: 0,
    setPrimitiveFunction: b("minBounds", "x"),
    getPrimitiveFunction: function() {
      c.boundsEllipsoidMinLongitude = c._voxelPrimitive.minBounds.x;
    }
  }), n({
    name: "boundsEllipsoidMaxLatitude",
    initialValue: 0,
    setPrimitiveFunction: b("maxBounds", "y"),
    getPrimitiveFunction: function() {
      c.boundsEllipsoidMaxLatitude = c._voxelPrimitive.maxBounds.y;
    }
  }), n({
    name: "boundsEllipsoidMinLatitude",
    initialValue: 0,
    setPrimitiveFunction: b("minBounds", "y"),
    getPrimitiveFunction: function() {
      c.boundsEllipsoidMinLatitude = c._voxelPrimitive.minBounds.y;
    }
  }), n({
    name: "boundsEllipsoidMaxHeight",
    initialValue: 0,
    setPrimitiveFunction: b("maxBounds", "z"),
    getPrimitiveFunction: function() {
      c.boundsEllipsoidMaxHeight = c._voxelPrimitive.maxBounds.z;
    }
  }), n({
    name: "boundsEllipsoidMinHeight",
    initialValue: 0,
    setPrimitiveFunction: b("minBounds", "z"),
    getPrimitiveFunction: function() {
      c.boundsEllipsoidMinHeight = c._voxelPrimitive.minBounds.z;
    }
  }), n({
    name: "boundsCylinderMaxRadius",
    initialValue: 0,
    setPrimitiveFunction: b("maxBounds", "x"),
    getPrimitiveFunction: function() {
      c.boundsCylinderMaxRadius = c._voxelPrimitive.maxBounds.x;
    }
  }), n({
    name: "boundsCylinderMinRadius",
    initialValue: 0,
    setPrimitiveFunction: b("minBounds", "x"),
    getPrimitiveFunction: function() {
      c.boundsCylinderMinRadius = c._voxelPrimitive.minBounds.x;
    }
  }), n({
    name: "boundsCylinderMaxHeight",
    initialValue: 0,
    setPrimitiveFunction: b("maxBounds", "y"),
    getPrimitiveFunction: function() {
      c.boundsCylinderMaxHeight = c._voxelPrimitive.maxBounds.y;
    }
  }), n({
    name: "boundsCylinderMinHeight",
    initialValue: 0,
    setPrimitiveFunction: b("minBounds", "y"),
    getPrimitiveFunction: function() {
      c.boundsCylinderMinHeight = c._voxelPrimitive.minBounds.y;
    }
  }), n({
    name: "boundsCylinderMaxAngle",
    initialValue: 0,
    setPrimitiveFunction: b("maxBounds", "z"),
    getPrimitiveFunction: function() {
      c.boundsCylinderMaxAngle = c._voxelPrimitive.maxBounds.z;
    }
  }), n({
    name: "boundsCylinderMinAngle",
    initialValue: 0,
    setPrimitiveFunction: b("minBounds", "z"),
    getPrimitiveFunction: function() {
      c.boundsCylinderMinAngle = c._voxelPrimitive.minBounds.z;
    }
  }), n({
    name: "clippingBoxMaxX",
    initialValue: 0,
    setPrimitiveFunction: b("maxClippingBounds", "x"),
    getPrimitiveFunction: function() {
      c.clippingBoxMaxX = c._voxelPrimitive.maxClippingBounds.x;
    }
  }), n({
    name: "clippingBoxMinX",
    initialValue: 0,
    setPrimitiveFunction: b("minClippingBounds", "x"),
    getPrimitiveFunction: function() {
      c.clippingBoxMinX = c._voxelPrimitive.minClippingBounds.x;
    }
  }), n({
    name: "clippingBoxMaxY",
    initialValue: 0,
    setPrimitiveFunction: b("maxClippingBounds", "y"),
    getPrimitiveFunction: function() {
      c.clippingBoxMaxY = c._voxelPrimitive.maxClippingBounds.y;
    }
  }), n({
    name: "clippingBoxMinY",
    initialValue: 0,
    setPrimitiveFunction: b("minClippingBounds", "y"),
    getPrimitiveFunction: function() {
      c.clippingBoxMinY = c._voxelPrimitive.minClippingBounds.y;
    }
  }), n({
    name: "clippingBoxMaxZ",
    initialValue: 0,
    setPrimitiveFunction: b("maxClippingBounds", "z"),
    getPrimitiveFunction: function() {
      c.clippingBoxMaxZ = c._voxelPrimitive.maxClippingBounds.z;
    }
  }), n({
    name: "clippingBoxMinZ",
    initialValue: 0,
    setPrimitiveFunction: b("minClippingBounds", "z"),
    getPrimitiveFunction: function() {
      c.clippingBoxMinZ = c._voxelPrimitive.minClippingBounds.z;
    }
  }), n({
    name: "clippingEllipsoidMaxLongitude",
    initialValue: 0,
    setPrimitiveFunction: b("maxClippingBounds", "x"),
    getPrimitiveFunction: function() {
      c.clippingEllipsoidMaxLongitude = c._voxelPrimitive.maxClippingBounds.x;
    }
  }), n({
    name: "clippingEllipsoidMinLongitude",
    initialValue: 0,
    setPrimitiveFunction: b("minClippingBounds", "x"),
    getPrimitiveFunction: function() {
      c.clippingEllipsoidMinLongitude = c._voxelPrimitive.minClippingBounds.x;
    }
  }), n({
    name: "clippingEllipsoidMaxLatitude",
    initialValue: 0,
    setPrimitiveFunction: b("maxClippingBounds", "y"),
    getPrimitiveFunction: function() {
      c.clippingEllipsoidMaxLatitude = c._voxelPrimitive.maxClippingBounds.y;
    }
  }), n({
    name: "clippingEllipsoidMinLatitude",
    initialValue: 0,
    setPrimitiveFunction: b("minClippingBounds", "y"),
    getPrimitiveFunction: function() {
      c.clippingEllipsoidMinLatitude = c._voxelPrimitive.minClippingBounds.y;
    }
  }), n({
    name: "clippingEllipsoidMaxHeight",
    initialValue: 0,
    setPrimitiveFunction: b("maxClippingBounds", "z"),
    getPrimitiveFunction: function() {
      c.clippingEllipsoidMaxHeight = c._voxelPrimitive.maxClippingBounds.z;
    }
  }), n({
    name: "clippingEllipsoidMinHeight",
    initialValue: 0,
    setPrimitiveFunction: b("minClippingBounds", "z"),
    getPrimitiveFunction: function() {
      c.clippingEllipsoidMinHeight = c._voxelPrimitive.minClippingBounds.z;
    }
  }), n({
    name: "clippingCylinderMaxRadius",
    initialValue: 0,
    setPrimitiveFunction: b("maxClippingBounds", "x"),
    getPrimitiveFunction: function() {
      c.clippingCylinderMaxRadius = c._voxelPrimitive.maxClippingBounds.x;
    }
  }), n({
    name: "clippingCylinderMinRadius",
    initialValue: 0,
    setPrimitiveFunction: b("minClippingBounds", "x"),
    getPrimitiveFunction: function() {
      c.clippingCylinderMinRadius = c._voxelPrimitive.minClippingBounds.x;
    }
  }), n({
    name: "clippingCylinderMaxHeight",
    initialValue: 0,
    setPrimitiveFunction: b("maxClippingBounds", "y"),
    getPrimitiveFunction: function() {
      c.clippingCylinderMaxHeight = c._voxelPrimitive.maxClippingBounds.y;
    }
  }), n({
    name: "clippingCylinderMinHeight",
    initialValue: 0,
    setPrimitiveFunction: b("minClippingBounds", "y"),
    getPrimitiveFunction: function() {
      c.clippingCylinderMinHeight = c._voxelPrimitive.minClippingBounds.y;
    }
  }), n({
    name: "clippingCylinderMaxAngle",
    initialValue: 0,
    setPrimitiveFunction: b("maxClippingBounds", "z"),
    getPrimitiveFunction: function() {
      c.clippingCylinderMaxAngle = c._voxelPrimitive.maxClippingBounds.z;
    }
  }), n({
    name: "clippingCylinderMinAngle",
    initialValue: 0,
    setPrimitiveFunction: b("minClippingBounds", "z"),
    getPrimitiveFunction: function() {
      c.clippingCylinderMinAngle = c._voxelPrimitive.minClippingBounds.z;
    }
  }), n({
    name: "translationX",
    initialValue: 0,
    setPrimitiveFunction: function() {
      c._modelMatrixReady && ge(c);
    },
    getPrimitiveFunction: function() {
      c.translationX = xe.getTranslation(
        c._voxelPrimitive.modelMatrix,
        new ue()
      ).x;
    }
  }), n({
    name: "translationY",
    initialValue: 0,
    setPrimitiveFunction: function() {
      c._modelMatrixReady && ge(c);
    },
    getPrimitiveFunction: function() {
      c.translationY = xe.getTranslation(
        c._voxelPrimitive.modelMatrix,
        new ue()
      ).y;
    }
  }), n({
    name: "translationZ",
    initialValue: 0,
    setPrimitiveFunction: function() {
      c._modelMatrixReady && ge(c);
    },
    getPrimitiveFunction: function() {
      c.translationZ = xe.getTranslation(
        c._voxelPrimitive.modelMatrix,
        new ue()
      ).z;
    }
  }), n({
    name: "scaleX",
    initialValue: 1,
    setPrimitiveFunction: function() {
      c._modelMatrixReady && ge(c);
    },
    getPrimitiveFunction: function() {
      c.scaleX = xe.getScale(
        c._voxelPrimitive.modelMatrix,
        new ue()
      ).x;
    }
  }), n({
    name: "scaleY",
    initialValue: 1,
    setPrimitiveFunction: function() {
      c._modelMatrixReady && ge(c);
    },
    getPrimitiveFunction: function() {
      c.scaleY = xe.getScale(
        c._voxelPrimitive.modelMatrix,
        new ue()
      ).y;
    }
  }), n({
    name: "scaleZ",
    initialValue: 1,
    setPrimitiveFunction: function() {
      c._modelMatrixReady && ge(c);
    },
    getPrimitiveFunction: function() {
      c.scaleZ = xe.getScale(
        c._voxelPrimitive.modelMatrix,
        new ue()
      ).z;
    }
  }), n({
    name: "angleX",
    initialValue: 0,
    setPrimitiveFunction: function() {
      c._modelMatrixReady && ge(c);
    }
  }), n({
    name: "angleY",
    initialValue: 0,
    setPrimitiveFunction: function() {
      c._modelMatrixReady && ge(c);
    }
  }), n({
    name: "angleZ",
    initialValue: 0,
    setPrimitiveFunction: function() {
      c._modelMatrixReady && ge(c);
    }
  });
}
const Xt = new ue(), Zt = new ue(), Gt = new mt(), Jt = new He();
function ge(u) {
  const c = ue.fromElements(
    u.translationX,
    u.translationY,
    u.translationZ,
    Xt
  ), n = ue.fromElements(
    u.scaleX,
    u.scaleY,
    u.scaleZ,
    Zt
  ), b = Gt;
  b.heading = u.angleX, b.pitch = u.angleY, b.roll = u.angleZ;
  const _ = He.fromHeadingPitchRoll(b, Jt), P = He.multiplyByScale(_, n, _);
  u._voxelPrimitive.modelMatrix = xe.fromRotationTranslation(
    P,
    c,
    u._voxelPrimitive.modelMatrix
  );
}
Object.defineProperties(pe.prototype, {
  /**
   * Gets the scene
   * @memberof VoxelInspectorViewModel.prototype
   * @type {Scene}
   * @readonly
   */
  scene: {
    get: function() {
      return this._scene;
    }
  },
  /**
   * Gets or sets the primitive of the view model.
   * @memberof VoxelInspectorViewModel.prototype
   * @type {VoxelPrimitive}
   */
  voxelPrimitive: {
    get: function() {
      return this._voxelPrimitive;
    },
    set: function(u) {
      if (V(this._customShaderCompilationRemoveCallback) && this._customShaderCompilationRemoveCallback(), V(u)) {
        this._voxelPrimitive = u;
        const c = this;
        c._customShaderCompilationRemoveCallback = c._voxelPrimitive.customShaderCompilationEvent.addEventListener(
          function(n) {
            const b = c._voxelPrimitive.customShader.fragmentShaderText;
            c.shaderString = at(b), V(n) ? (c.shaderCompilationMessage = n.message, c.shaderCompilationSuccess = !1) : (c.shaderCompilationMessage = "Shader compiled successfully!", c.shaderCompilationSuccess = !0);
          }
        ), c._modelMatrixReady = !1;
        for (let n = 0; n < c._getPrimitiveFunctions.length; n++)
          c._getPrimitiveFunctions[n]();
        c._modelMatrixReady = !0, ge(c);
      }
    }
  }
});
pe.prototype.toggleInspector = function() {
  this.inspectorVisible = !this.inspectorVisible;
};
pe.prototype.toggleDisplay = function() {
  this.displayVisible = !this.displayVisible;
};
pe.prototype.toggleTransform = function() {
  this.transformVisible = !this.transformVisible;
};
pe.prototype.toggleBounds = function() {
  this.boundsVisible = !this.boundsVisible;
};
pe.prototype.toggleClipping = function() {
  this.clippingVisible = !this.clippingVisible;
};
pe.prototype.toggleShader = function() {
  this.shaderVisible = !this.shaderVisible;
};
pe.prototype.compileShader = function() {
  V(this._voxelPrimitive) && (this._voxelPrimitive.customShader = new gt({
    fragmentShaderText: this.shaderString,
    uniforms: this._voxelPrimitive.customShader.uniforms
  }));
};
pe.prototype.shaderEditorKeyPress = function(u, c) {
  if (c.keyCode === 9) {
    c.preventDefault();
    const n = c.target, b = n.selectionStart, _ = n.selectionEnd;
    let P = _;
    const k = n.value.slice(b, _).split(`
`), F = k.length;
    let M;
    if (c.shiftKey)
      for (M = 0; M < F; ++M)
        k[M][0] === " " && (k[M][1] === " " ? (k[M] = k[M].substr(2), P -= 2) : (k[M] = k[M].substr(1), P -= 1));
    else
      for (M = 0; M < F; ++M)
        k[M] = `  ${k[M]}`, P += 2;
    const A = k.join(`
`);
    n.value = n.value.slice(0, b) + A + n.value.slice(_), n.selectionStart = b !== _ ? b : P, n.selectionEnd = P;
  } else c.ctrlKey && (c.keyCode === 10 || c.keyCode === 13) && this.compileShader();
  return !0;
};
pe.prototype.isDestroyed = function() {
  return !1;
};
pe.prototype.destroy = function() {
  const u = this;
  return this._definedProperties.forEach(function(c) {
    B.getObservable(u, c).dispose();
  }), we(this);
};
function Re(u, c) {
  ie.defined("container", u), ie.typeOf.object("scene", c), u = We(u);
  const n = document.createElement("div"), b = new pe(c);
  this._viewModel = b, this._container = u, this._element = n;
  const _ = document.createElement("div");
  _.textContent = "Voxel Inspector", _.className = "cesium-cesiumInspector-button", _.setAttribute("data-bind", "click: toggleInspector"), n.appendChild(_), n.className = "cesium-cesiumInspector cesium-VoxelInspector", n.setAttribute(
    "data-bind",
    'css: { "cesium-cesiumInspector-visible" : inspectorVisible, "cesium-cesiumInspector-hidden" : !inspectorVisible}'
  ), u.appendChild(n);
  const P = document.createElement("div");
  P.className = "cesium-cesiumInspector-dropDown", n.appendChild(P);
  const D = ce.createSection, k = ce.createCheckbox, F = ce.createRangeInput, M = ce.createButton, A = D(
    P,
    "Display",
    "displayVisible",
    "toggleDisplay"
  ), W = D(
    P,
    "Transform",
    "transformVisible",
    "toggleTransform"
  ), X = D(
    P,
    "Bounds",
    "boundsVisible",
    "toggleBounds"
  ), Z = D(
    P,
    "Clipping",
    "clippingVisible",
    "toggleClipping"
  ), e = D(
    P,
    "Shader",
    "shaderVisible",
    "toggleShader"
  );
  A.appendChild(k("Depth Test", "depthTest")), A.appendChild(k("Show", "show")), A.appendChild(
    k("Disable Update", "disableUpdate")
  ), A.appendChild(k("Debug Draw", "debugDraw")), A.appendChild(k("Jitter", "jitter")), A.appendChild(
    k("Nearest Sampling", "nearestSampling")
  ), A.appendChild(
    F("Screen Space Error", "screenSpaceError", 0, 128)
  ), A.appendChild(
    F("Step Size", "stepSize", 0, 2)
  );
  const Y = 10, H = 10, $ = vt.PI;
  W.appendChild(
    F("Translation X", "translationX", -Y, +Y)
  ), W.appendChild(
    F("Translation Y", "translationY", -Y, +Y)
  ), W.appendChild(
    F("Translation Z", "translationZ", -Y, +Y)
  ), W.appendChild(
    F("Scale X", "scaleX", 0, +H)
  ), W.appendChild(
    F("Scale Y", "scaleY", 0, +H)
  ), W.appendChild(
    F("Scale Z", "scaleZ", 0, +H)
  ), W.appendChild(
    F("Heading", "angleX", -$, +$)
  ), W.appendChild(
    F("Pitch", "angleY", -$, +$)
  ), W.appendChild(
    F("Roll", "angleZ", -$, +$)
  );
  const z = ee.getMinBounds(ee.BOX), j = ee.getMaxBounds(ee.BOX), O = ue.fromElements(
    ee.getMinBounds(ee.ELLIPSOID).x,
    ee.getMinBounds(ee.ELLIPSOID).y,
    -yt.WGS84.maximumRadius,
    new ue()
  ), q = ue.fromElements(
    ee.getMaxBounds(ee.ELLIPSOID).x,
    ee.getMaxBounds(ee.ELLIPSOID).y,
    1e7,
    new ue()
  ), se = ee.getMinBounds(
    ee.CYLINDER
  ), J = ee.getMaxBounds(
    ee.CYLINDER
  );
  Ce(
    "Max X",
    "Min X",
    "Max Y",
    "Min Y",
    "Max Z",
    "Min Z",
    "boundsBoxMaxX",
    "boundsBoxMinX",
    "boundsBoxMaxY",
    "boundsBoxMinY",
    "boundsBoxMaxZ",
    "boundsBoxMinZ",
    z,
    j,
    "shapeIsBox",
    X
  ), Ce(
    "Max Longitude",
    "Min Longitude",
    "Max Latitude",
    "Min Latitude",
    "Max Height",
    "Min Height",
    "boundsEllipsoidMaxLongitude",
    "boundsEllipsoidMinLongitude",
    "boundsEllipsoidMaxLatitude",
    "boundsEllipsoidMinLatitude",
    "boundsEllipsoidMaxHeight",
    "boundsEllipsoidMinHeight",
    O,
    q,
    "shapeIsEllipsoid",
    X
  ), Ce(
    "Max Radius",
    "Min Radius",
    "Max Height",
    "Min Height",
    "Max Angle",
    "Min Angle",
    "boundsCylinderMaxRadius",
    "boundsCylinderMinRadius",
    "boundsCylinderMaxHeight",
    "boundsCylinderMinHeight",
    "boundsCylinderMaxAngle",
    "boundsCylinderMinAngle",
    se,
    J,
    "shapeIsCylinder",
    X
  ), Ce(
    "Max X",
    "Min X",
    "Max Y",
    "Min Y",
    "Max Z",
    "Min Z",
    "clippingBoxMaxX",
    "clippingBoxMinX",
    "clippingBoxMaxY",
    "clippingBoxMinY",
    "clippingBoxMaxZ",
    "clippingBoxMinZ",
    z,
    j,
    "shapeIsBox",
    Z
  ), Ce(
    "Max Longitude",
    "Min Longitude",
    "Max Latitude",
    "Min Latitude",
    "Max Height",
    "Min Height",
    "clippingEllipsoidMaxLongitude",
    "clippingEllipsoidMinLongitude",
    "clippingEllipsoidMaxLatitude",
    "clippingEllipsoidMinLatitude",
    "clippingEllipsoidMaxHeight",
    "clippingEllipsoidMinHeight",
    O,
    q,
    "shapeIsEllipsoid",
    Z
  ), Ce(
    "Max Radius",
    "Min Radius",
    "Max Height",
    "Min Height",
    "Max Angle",
    "Min Angle",
    "clippingCylinderMaxRadius",
    "clippingCylinderMinRadius",
    "clippingCylinderMaxHeight",
    "clippingCylinderMinHeight",
    "clippingCylinderMaxAngle",
    "clippingCylinderMinAngle",
    se,
    J,
    "shapeIsCylinder",
    Z
  );
  const G = document.createElement("div");
  e.appendChild(G);
  const ne = document.createElement("textarea");
  ne.setAttribute(
    "data-bind",
    "textInput: shaderString, event: { keydown: shaderEditorKeyPress }"
  ), G.className = "cesium-cesiumInspector-styleEditor", G.appendChild(ne);
  const Q = M(
    "Compile (Ctrl+Enter)",
    "compileShader"
  );
  G.appendChild(Q);
  const t = document.createElement("label");
  t.style.display = "block", t.setAttribute(
    "data-bind",
    "text: shaderCompilationMessage, style: {color: shaderCompilationSuccess ? 'green' : 'red'}"
  ), G.appendChild(t), B.applyBindings(b, n);
}
Object.defineProperties(Re.prototype, {
  /**
   * Gets the parent container.
   * @memberof VoxelInspector.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   * @memberof VoxelInspector.prototype
   *
   * @type {VoxelInspectorViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
Re.prototype.isDestroyed = function() {
  return !1;
};
Re.prototype.destroy = function() {
  return B.cleanNode(this._element), this._container.removeChild(this._element), this.viewModel.destroy(), we(this);
};
function Ce(u, c, n, b, _, P, D, k, F, M, A, W, X, Z, e, Y) {
  const H = ce.createRangeInput, $ = X, z = Z, j = Y.appendChild(
    document.createElement("div")
  );
  j.setAttribute("data-bind", `if: ${e}`), j.appendChild(H(u, D, $.x, z.x)), j.appendChild(H(c, k, $.x, z.x)), j.appendChild(H(n, F, $.y, z.y)), j.appendChild(H(b, M, $.y, z.y)), j.appendChild(H(_, A, $.z, z.z)), j.appendChild(H(P, W, $.z, z.z));
}
const Kt = St({
  name: "VcmapCesiumInspector",
  components: {
    VContainer: Mt,
    VRow: Bt,
    VCol: kt
  },
  setup() {
    const u = _t("vcsApp"), c = Ne(), n = Ne(), b = Ne();
    let _ = () => {
    };
    function P(k) {
      const F = k.getScene(), M = new Le(
        c.value,
        F
      ), A = new Ve(
        n.value,
        F
      ), W = new Re(
        b.value,
        F
      );
      return () => {
        M.destroy(), A.destroy(), W.destroy();
      };
    }
    const D = u.maps.mapActivated.addEventListener(
      (k) => {
        k instanceof Ze ? _ = P(k) : _();
      }
    );
    return wt(() => {
      var k;
      ((k = u == null ? void 0 : u.maps) == null ? void 0 : k.activeMap) instanceof Ze && (_ = P(u.maps.activeMap));
    }), Et(() => {
      _(), D();
    }), {
      cesiumInspectorRef: c,
      cesium3DTilesInspectorRef: n,
      voxelInspectorRef: b
    };
  }
}), Qt = (u, c) => {
  const n = u.__vccOpts || u;
  for (const [b, _] of c)
    n[b] = _;
  return n;
}, ei = { ref: "cesiumInspectorRef" }, ti = { ref: "cesium3DTilesInspectorRef" }, ii = { ref: "voxelInspectorRef" };
function ni(u, c, n, b, _, P) {
  const D = Ae("v-col"), k = Ae("v-row"), F = Ae("v-container");
  return Pt(), Tt(F, null, {
    default: Ee(() => [
      ke(k, { "no-gutters": "" }, {
        default: Ee(() => [
          ke(D, null, {
            default: Ee(() => [
              Ie(
                "div",
                ei,
                null,
                512
                /* NEED_PATCH */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          ke(D, null, {
            default: Ee(() => [
              Ie(
                "div",
                ti,
                null,
                512
                /* NEED_PATCH */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          ke(D, null, {
            default: Ee(() => [
              Ie(
                "div",
                ii,
                null,
                512
                /* NEED_PATCH */
              )
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
  });
}
const ri = /* @__PURE__ */ Qt(Kt, [["render", ni]]), Oe = "@vcmap/cesium-inspector", oi = "2.0.0", si = "^6.0";
function pi() {
  let u, c = () => {
  };
  return {
    get name() {
      return Oe;
    },
    get version() {
      return oi;
    },
    get mapVersion() {
      return si;
    },
    initialize(n, b) {
      u = n;
      const { action: _, destroy: P } = bt(
        {
          name: "Cesium Inspector",
          icon: "mdi-web"
        },
        {
          id: "vcmap-cesium-inspector",
          component: ri,
          slot: xt.DYNAMIC_RIGHT,
          position: { width: 700 },
          state: {
            headerTitle: "Cesium Inspector",
            headerIcon: "mdi-web"
          }
        },
        n.windowManager,
        Oe
      );
      n.navbarManager.add(
        { id: "vcmap-cesium-inspector", action: _ },
        Oe,
        Ct.MENU
      ), c = () => {
        P();
      };
      const D = new URL(window.location.href).searchParams.get("debug");
      (b != null && b.debug || D === "true") && _.callback(this);
    },
    getState() {
      return { debug: u.windowManager.has("vcmap-cesium-inspector") };
    },
    destroy: c
  };
}
export {
  pi as default
};
