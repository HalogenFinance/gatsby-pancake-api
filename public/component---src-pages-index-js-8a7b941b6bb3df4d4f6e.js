(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    "8+s/": function (t, e, r) {
      "use strict";
      function n(t) {
        return t && "object" == typeof t && "default" in t ? t.default : t;
      }
      var o = r("q1tI"),
        i = n(o),
        a = n(r("Gytx"));
      function c(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        );
      }
      var u = !("undefined" == typeof window || !window.document || !window.document.createElement);
      t.exports = function (t, e, r) {
        if ("function" != typeof t) throw new Error("Expected reducePropsToState to be a function.");
        if ("function" != typeof e) throw new Error("Expected handleStateChangeOnClient to be a function.");
        if (void 0 !== r && "function" != typeof r)
          throw new Error("Expected mapStateOnServer to either be undefined or a function.");
        return function (n) {
          if ("function" != typeof n) throw new Error("Expected WrappedComponent to be a React component.");
          var l,
            s = [];
          function f() {
            (l = t(
              s.map(function (t) {
                return t.props;
              })
            )),
              p.canUseDOM ? e(l) : r && (l = r(l));
          }
          var p = (function (t) {
            var e, r;
            function o() {
              return t.apply(this, arguments) || this;
            }
            (r = t),
              ((e = o).prototype = Object.create(r.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = r),
              (o.peek = function () {
                return l;
              }),
              (o.rewind = function () {
                if (o.canUseDOM)
                  throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                var t = l;
                return (l = void 0), (s = []), t;
              });
            var c = o.prototype;
            return (
              (c.shouldComponentUpdate = function (t) {
                return !a(t, this.props);
              }),
              (c.componentWillMount = function () {
                s.push(this), f();
              }),
              (c.componentDidUpdate = function () {
                f();
              }),
              (c.componentWillUnmount = function () {
                var t = s.indexOf(this);
                s.splice(t, 1), f();
              }),
              (c.render = function () {
                return i.createElement(n, this.props);
              }),
              o
            );
          })(o.Component);
          return (
            c(
              p,
              "displayName",
              "SideEffect(" +
                (function (t) {
                  return t.displayName || t.name || "Component";
                })(n) +
                ")"
            ),
            c(p, "canUseDOM", u),
            p
          );
        };
      };
    },
    Gytx: function (t, e) {
      t.exports = function (t, e, r, n) {
        var o = r ? r.call(n, t, e) : void 0;
        if (void 0 !== o) return !!o;
        if (t === e) return !0;
        if ("object" != typeof t || !t || "object" != typeof e || !e) return !1;
        var i = Object.keys(t),
          a = Object.keys(e);
        if (i.length !== a.length) return !1;
        for (var c = Object.prototype.hasOwnProperty.bind(e), u = 0; u < i.length; u++) {
          var l = i[u];
          if (!c(l)) return !1;
          var s = t[l],
            f = e[l];
          if (!1 === (o = r ? r.call(n, s, f, l) : void 0) || (void 0 === o && s !== f)) return !1;
        }
        return !0;
      };
    },
    RXBc: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r("o0o1"),
        o = r.n(n);
      r("ls82");
      function i(t, e, r, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (l) {
          return void r(l);
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o);
      }
      function a(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, o) {
            var a = t.apply(e, r);
            function c(t) {
              i(a, n, o, c, u, "next", t);
            }
            function u(t) {
              i(a, n, o, c, u, "throw", t);
            }
            c(void 0);
          });
        };
      }
      var c = r("q1tI"),
        u = r.n(c),
        l = r("TJpk");
      r("VxdY");
      e.default = function () {
        var t = Object(c.useState)(null),
          e = t[0],
          r = t[1];
        return (
          Object(c.useEffect)(function () {
            function t() {
              return (t = a(
                o.a.mark(function t() {
                  var e, n;
                  return o.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), fetch("/api/date");
                        case 2:
                          return (e = t.sent), (t.next = 5), e.text();
                        case 5:
                          (n = t.sent), r(n);
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )).apply(this, arguments);
            }
            !(function () {
              t.apply(this, arguments);
            })();
          }, []),
          u.a.createElement(
            "main",
            null,
            u.a.createElement(l.Helmet, null, u.a.createElement("title", null, "Gatsby + Node.js (TypeScript) API")),
            u.a.createElement("h1", null, "Gatsby + Node.js (TypeScript) API"),
            u.a.createElement(
              "h2",
              null,
              "Deployed with",
              " ",
              u.a.createElement(
                "a",
                { href: "https://vercel.com/docs", target: "_blank", rel: "noreferrer noopener" },
                "Vercel"
              ),
              "!"
            ),
            u.a.createElement(
              "p",
              null,
              u.a.createElement(
                "a",
                {
                  href: "https://github.com/vercel/vercel/tree/master/examples/gatsby",
                  target: "_blank",
                  rel: "noreferrer noopener",
                },
                "This project"
              ),
              " ",
              "is a ",
              u.a.createElement("a", { href: "https://www.gatsbyjs.org/" }, "Gatsby"),
              " app with two directories, ",
              u.a.createElement("code", null, "/src"),
              " for static content and ",
              u.a.createElement("code", null, "/api"),
              " which contains a serverless",
              " ",
              u.a.createElement("a", { href: "https://nodejs.org/en/" }, "Node.js (TypeScript)"),
              " function. See",
              " ",
              u.a.createElement(
                "a",
                { href: "/api/date" },
                u.a.createElement("code", null, "api/date"),
                " for the Date API with Node.js (TypeScript)"
              ),
              "."
            ),
            u.a.createElement("br", null),
            u.a.createElement("h2", null, "The date according to Node.js (TypeScript) is:"),
            u.a.createElement("p", null, e || "Loading date...")
          )
        );
      };
    },
    TJpk: function (t, e, r) {
      (e.__esModule = !0), (e.Helmet = void 0);
      var n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          },
        o = (function () {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, r, n) {
            return r && t(e.prototype, r), n && t(e, n), e;
          };
        })(),
        i = f(r("q1tI")),
        a = f(r("17x9")),
        c = f(r("8+s/")),
        u = f(r("bmMU")),
        l = r("v1p5"),
        s = r("hFT/");
      function f(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function p(t, e) {
        var r = {};
        for (var n in t) e.indexOf(n) >= 0 || (Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]));
        return r;
      }
      function T(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function d(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      var h,
        E,
        y,
        A = (0, c.default)(
          l.reducePropsToState,
          l.handleClientStateChange,
          l.mapStateOnServer
        )(function () {
          return null;
        }),
        v =
          ((h = A),
          (y = E = (function (t) {
            function e() {
              return T(this, e), d(this, t.apply(this, arguments));
            }
            return (
              (function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
                })),
                  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
              })(e, t),
              (e.prototype.shouldComponentUpdate = function (t) {
                return !(0, u.default)(this.props, t);
              }),
              (e.prototype.mapNestedChildrenToProps = function (t, e) {
                if (!e) return null;
                switch (t.type) {
                  case s.TAG_NAMES.SCRIPT:
                  case s.TAG_NAMES.NOSCRIPT:
                    return { innerHTML: e };
                  case s.TAG_NAMES.STYLE:
                    return { cssText: e };
                }
                throw new Error(
                  "<" +
                    t.type +
                    " /> elements are self-closing and can not contain children. Refer to our API for more information."
                );
              }),
              (e.prototype.flattenArrayTypeChildren = function (t) {
                var e,
                  r = t.child,
                  o = t.arrayTypeChildren,
                  i = t.newChildProps,
                  a = t.nestedChildren;
                return n(
                  {},
                  o,
                  (((e = {})[r.type] = [].concat(o[r.type] || [], [n({}, i, this.mapNestedChildrenToProps(r, a))])), e)
                );
              }),
              (e.prototype.mapObjectTypeChildren = function (t) {
                var e,
                  r,
                  o = t.child,
                  i = t.newProps,
                  a = t.newChildProps,
                  c = t.nestedChildren;
                switch (o.type) {
                  case s.TAG_NAMES.TITLE:
                    return n({}, i, (((e = {})[o.type] = c), (e.titleAttributes = n({}, a)), e));
                  case s.TAG_NAMES.BODY:
                    return n({}, i, { bodyAttributes: n({}, a) });
                  case s.TAG_NAMES.HTML:
                    return n({}, i, { htmlAttributes: n({}, a) });
                }
                return n({}, i, (((r = {})[o.type] = n({}, a)), r));
              }),
              (e.prototype.mapArrayTypeChildrenToProps = function (t, e) {
                var r = n({}, e);
                return (
                  Object.keys(t).forEach(function (e) {
                    var o;
                    r = n({}, r, (((o = {})[e] = t[e]), o));
                  }),
                  r
                );
              }),
              (e.prototype.warnOnInvalidChildren = function (t, e) {
                return !0;
              }),
              (e.prototype.mapChildrenToProps = function (t, e) {
                var r = this,
                  n = {};
                return (
                  i.default.Children.forEach(t, function (t) {
                    if (t && t.props) {
                      var o = t.props,
                        i = o.children,
                        a = p(o, ["children"]),
                        c = (0, l.convertReactPropstoHtmlAttributes)(a);
                      switch ((r.warnOnInvalidChildren(t, i), t.type)) {
                        case s.TAG_NAMES.LINK:
                        case s.TAG_NAMES.META:
                        case s.TAG_NAMES.NOSCRIPT:
                        case s.TAG_NAMES.SCRIPT:
                        case s.TAG_NAMES.STYLE:
                          n = r.flattenArrayTypeChildren({
                            child: t,
                            arrayTypeChildren: n,
                            newChildProps: c,
                            nestedChildren: i,
                          });
                          break;
                        default:
                          e = r.mapObjectTypeChildren({ child: t, newProps: e, newChildProps: c, nestedChildren: i });
                      }
                    }
                  }),
                  (e = this.mapArrayTypeChildrenToProps(n, e))
                );
              }),
              (e.prototype.render = function () {
                var t = this.props,
                  e = t.children,
                  r = p(t, ["children"]),
                  o = n({}, r);
                return e && (o = this.mapChildrenToProps(e, o)), i.default.createElement(h, o);
              }),
              o(e, null, [
                {
                  key: "canUseDOM",
                  set: function (t) {
                    h.canUseDOM = t;
                  },
                },
              ]),
              e
            );
          })(i.default.Component)),
          (E.propTypes = {
            base: a.default.object,
            bodyAttributes: a.default.object,
            children: a.default.oneOfType([a.default.arrayOf(a.default.node), a.default.node]),
            defaultTitle: a.default.string,
            defer: a.default.bool,
            encodeSpecialCharacters: a.default.bool,
            htmlAttributes: a.default.object,
            link: a.default.arrayOf(a.default.object),
            meta: a.default.arrayOf(a.default.object),
            noscript: a.default.arrayOf(a.default.object),
            onChangeClientState: a.default.func,
            script: a.default.arrayOf(a.default.object),
            style: a.default.arrayOf(a.default.object),
            title: a.default.string,
            titleAttributes: a.default.object,
            titleTemplate: a.default.string,
          }),
          (E.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (E.peek = h.peek),
          (E.rewind = function () {
            var t = h.rewind();
            return (
              t ||
                (t = (0, l.mapStateOnServer)({
                  baseTag: [],
                  bodyAttributes: {},
                  encodeSpecialCharacters: !0,
                  htmlAttributes: {},
                  linkTags: [],
                  metaTags: [],
                  noscriptTags: [],
                  scriptTags: [],
                  styleTags: [],
                  title: "",
                  titleAttributes: {},
                })),
              t
            );
          }),
          y);
      (v.renderStatic = v.rewind), (e.Helmet = v), (e.default = v);
    },
    VxdY: function (t, e, r) {},
    bmMU: function (t, e, r) {
      "use strict";
      var n = Array.isArray,
        o = Object.keys,
        i = Object.prototype.hasOwnProperty,
        a = "undefined" != typeof Element;
      t.exports = function (t, e) {
        try {
          return (function t(e, r) {
            if (e === r) return !0;
            if (e && r && "object" == typeof e && "object" == typeof r) {
              var c,
                u,
                l,
                s = n(e),
                f = n(r);
              if (s && f) {
                if ((u = e.length) != r.length) return !1;
                for (c = u; 0 != c--; ) if (!t(e[c], r[c])) return !1;
                return !0;
              }
              if (s != f) return !1;
              var p = e instanceof Date,
                T = r instanceof Date;
              if (p != T) return !1;
              if (p && T) return e.getTime() == r.getTime();
              var d = e instanceof RegExp,
                h = r instanceof RegExp;
              if (d != h) return !1;
              if (d && h) return e.toString() == r.toString();
              var E = o(e);
              if ((u = E.length) !== o(r).length) return !1;
              for (c = u; 0 != c--; ) if (!i.call(r, E[c])) return !1;
              if (a && e instanceof Element && r instanceof Element) return e === r;
              for (c = u; 0 != c--; ) if (!(("_owner" === (l = E[c]) && e.$$typeof) || t(e[l], r[l]))) return !1;
              return !0;
            }
            return e != e && r != r;
          })(t, e);
        } catch (r) {
          if ((r.message && r.message.match(/stack|recursion/i)) || -2146828260 === r.number)
            return (
              console.warn("Warning: react-fast-compare does not handle circular references.", r.name, r.message), !1
            );
          throw r;
        }
      };
    },
    "hFT/": function (t, e, r) {
      r("E9XD"), (e.__esModule = !0);
      e.ATTRIBUTE_NAMES = { BODY: "bodyAttributes", HTML: "htmlAttributes", TITLE: "titleAttributes" };
      var n = (e.TAG_NAMES = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
        }),
        o =
          ((e.VALID_TAG_NAMES = Object.keys(n).map(function (t) {
            return n[t];
          })),
          (e.TAG_PROPERTIES = {
            CHARSET: "charset",
            CSS_TEXT: "cssText",
            HREF: "href",
            HTTPEQUIV: "http-equiv",
            INNER_HTML: "innerHTML",
            ITEM_PROP: "itemprop",
            NAME: "name",
            PROPERTY: "property",
            REL: "rel",
            SRC: "src",
          }),
          (e.REACT_TAG_MAP = {
            accesskey: "accessKey",
            charset: "charSet",
            class: "className",
            contenteditable: "contentEditable",
            contextmenu: "contextMenu",
            "http-equiv": "httpEquiv",
            itemprop: "itemProp",
            tabindex: "tabIndex",
          }));
      (e.HELMET_PROPS = {
        DEFAULT_TITLE: "defaultTitle",
        DEFER: "defer",
        ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
        ON_CHANGE_CLIENT_STATE: "onChangeClientState",
        TITLE_TEMPLATE: "titleTemplate",
      }),
        (e.HTML_TAG_MAP = Object.keys(o).reduce(function (t, e) {
          return (t[o[e]] = e), t;
        }, {})),
        (e.SELF_CLOSING_TAGS = [n.NOSCRIPT, n.SCRIPT, n.STYLE]),
        (e.HELMET_ATTRIBUTE = "data-react-helmet");
    },
    ls82: function (t, e, r) {
      var n = (function (t) {
        "use strict";
        var e = Object.prototype,
          r = e.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          i = n.asyncIterator || "@@asyncIterator",
          a = n.toStringTag || "@@toStringTag";
        function c(t, e, r) {
          return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
          c({}, "");
        } catch (P) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function u(t, e, r, n) {
          var o = e && e.prototype instanceof f ? e : f,
            i = Object.create(o.prototype),
            a = new b(n || []);
          return (
            (i._invoke = (function (t, e, r) {
              var n = "suspendedStart";
              return function (o, i) {
                if ("executing" === n) throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === o) throw i;
                  return w();
                }
                for (r.method = o, r.arg = i; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var c = m(a, r);
                    if (c) {
                      if (c === s) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = l(t, e, r);
                  if ("normal" === u.type) {
                    if (((n = r.done ? "completed" : "suspendedYield"), u.arg === s)) continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type && ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(t, r, a)),
            i
          );
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (P) {
            return { type: "throw", arg: P };
          }
        }
        t.wrap = u;
        var s = {};
        function f() {}
        function p() {}
        function T() {}
        var d = {};
        d[o] = function () {
          return this;
        };
        var h = Object.getPrototypeOf,
          E = h && h(h(_([])));
        E && E !== e && r.call(E, o) && (d = E);
        var y = (T.prototype = f.prototype = Object.create(d));
        function A(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function v(t, e) {
          var n;
          this._invoke = function (o, i) {
            function a() {
              return new e(function (n, a) {
                !(function n(o, i, a, c) {
                  var u = l(t[o], t, i);
                  if ("throw" !== u.type) {
                    var s = u.arg,
                      f = s.value;
                    return f && "object" == typeof f && r.call(f, "__await")
                      ? e.resolve(f.__await).then(
                          function (t) {
                            n("next", t, a, c);
                          },
                          function (t) {
                            n("throw", t, a, c);
                          }
                        )
                      : e.resolve(f).then(
                          function (t) {
                            (s.value = t), a(s);
                          },
                          function (t) {
                            return n("throw", t, a, c);
                          }
                        );
                  }
                  c(u.arg);
                })(o, i, n, a);
              });
            }
            return (n = n ? n.then(a, a) : a());
          };
        }
        function m(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (t.iterator.return && ((e.method = "return"), (e.arg = void 0), m(t, e), "throw" === e.method))
                return s;
              (e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return s;
          }
          var n = l(r, t.iterator, e.arg);
          if ("throw" === n.type) return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), s;
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                s)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              s);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function g(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function b(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
        }
        function _(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                i = function e() {
                  for (; ++n < t.length; ) if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (i.next = i);
            }
          }
          return { next: w };
        }
        function w() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = y.constructor = T),
          (T.constructor = p),
          (p.displayName = c(T, a, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, T) : ((t.__proto__ = T), c(t, a, "GeneratorFunction")),
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          A(v.prototype),
          (v.prototype[i] = function () {
            return this;
          }),
          (t.AsyncIterator = v),
          (t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new v(u(e, r, n, o), i);
            return t.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          A(y),
          c(y, a, "Generator"),
          (y[o] = function () {
            return this;
          }),
          (y.toString = function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = _),
          (b.prototype = {
            constructor: b,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(g),
                !t)
              )
                for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (a.type = "throw"), (a.arg = t), (e.next = r), n && ((e.method = "next"), (e.arg = void 0)), !!n;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = r.call(i, "catchLoc"),
                    u = r.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i ? ((this.method = "next"), (this.next = i.finallyLoc), s) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                s
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), g(r), s;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    g(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: _(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                s
              );
            },
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = n;
      } catch (o) {
        Function("r", "regeneratorRuntime = r")(n);
      }
    },
    o0o1: function (t, e, r) {
      t.exports = r("ls82");
    },
    v1p5: function (t, e, r) {
      (function (t) {
        r("E9XD"),
          (e.__esModule = !0),
          (e.warn = e.requestAnimationFrame = e.reducePropsToState = e.mapStateOnServer = e.handleClientStateChange = e.convertReactPropstoHtmlAttributes = void 0);
        var n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          o =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            },
          i = u(r("q1tI")),
          a = u(r("YVoz")),
          c = r("hFT/");
        function u(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var l,
          s = function (t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return !1 === e
              ? String(t)
              : String(t)
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#x27;");
          },
          f = function (t) {
            var e = E(t, c.TAG_NAMES.TITLE),
              r = E(t, c.HELMET_PROPS.TITLE_TEMPLATE);
            if (r && e)
              return r.replace(/%s/g, function () {
                return e;
              });
            var n = E(t, c.HELMET_PROPS.DEFAULT_TITLE);
            return e || n || void 0;
          },
          p = function (t) {
            return E(t, c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
          },
          T = function (t, e) {
            return e
              .filter(function (e) {
                return void 0 !== e[t];
              })
              .map(function (e) {
                return e[t];
              })
              .reduce(function (t, e) {
                return o({}, t, e);
              }, {});
          },
          d = function (t, e) {
            return e
              .filter(function (t) {
                return void 0 !== t[c.TAG_NAMES.BASE];
              })
              .map(function (t) {
                return t[c.TAG_NAMES.BASE];
              })
              .reverse()
              .reduce(function (e, r) {
                if (!e.length)
                  for (var n = Object.keys(r), o = 0; o < n.length; o++) {
                    var i = n[o].toLowerCase();
                    if (-1 !== t.indexOf(i) && r[i]) return e.concat(r);
                  }
                return e;
              }, []);
          },
          h = function (t, e, r) {
            var o = {};
            return r
              .filter(function (e) {
                return (
                  !!Array.isArray(e[t]) ||
                  (void 0 !== e[t] &&
                    S("Helmet: " + t + ' should be of type "Array". Instead found type "' + n(e[t]) + '"'),
                  !1)
                );
              })
              .map(function (e) {
                return e[t];
              })
              .reverse()
              .reduce(function (t, r) {
                var n = {};
                r.filter(function (t) {
                  for (var r = void 0, i = Object.keys(t), a = 0; a < i.length; a++) {
                    var u = i[a],
                      l = u.toLowerCase();
                    -1 === e.indexOf(l) ||
                      (r === c.TAG_PROPERTIES.REL && "canonical" === t[r].toLowerCase()) ||
                      (l === c.TAG_PROPERTIES.REL && "stylesheet" === t[l].toLowerCase()) ||
                      (r = l),
                      -1 === e.indexOf(u) ||
                        (u !== c.TAG_PROPERTIES.INNER_HTML &&
                          u !== c.TAG_PROPERTIES.CSS_TEXT &&
                          u !== c.TAG_PROPERTIES.ITEM_PROP) ||
                        (r = u);
                  }
                  if (!r || !t[r]) return !1;
                  var s = t[r].toLowerCase();
                  return o[r] || (o[r] = {}), n[r] || (n[r] = {}), !o[r][s] && ((n[r][s] = !0), !0);
                })
                  .reverse()
                  .forEach(function (e) {
                    return t.push(e);
                  });
                for (var i = Object.keys(n), u = 0; u < i.length; u++) {
                  var l = i[u],
                    s = (0, a.default)({}, o[l], n[l]);
                  o[l] = s;
                }
                return t;
              }, [])
              .reverse();
          },
          E = function (t, e) {
            for (var r = t.length - 1; r >= 0; r--) {
              var n = t[r];
              if (n.hasOwnProperty(e)) return n[e];
            }
            return null;
          },
          y =
            ((l = Date.now()),
            function (t) {
              var e = Date.now();
              e - l > 16
                ? ((l = e), t(e))
                : setTimeout(function () {
                    y(t);
                  }, 0);
            }),
          A = function (t) {
            return clearTimeout(t);
          },
          v =
            "undefined" != typeof window
              ? window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                y
              : t.requestAnimationFrame || y,
          m =
            "undefined" != typeof window
              ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || A
              : t.cancelAnimationFrame || A,
          S = function (t) {
            return console && "function" == typeof console.warn && console.warn(t);
          },
          g = null,
          b = function (t, e) {
            var r = t.baseTag,
              n = t.bodyAttributes,
              o = t.htmlAttributes,
              i = t.linkTags,
              a = t.metaTags,
              u = t.noscriptTags,
              l = t.onChangeClientState,
              s = t.scriptTags,
              f = t.styleTags,
              p = t.title,
              T = t.titleAttributes;
            P(c.TAG_NAMES.BODY, n), P(c.TAG_NAMES.HTML, o), w(p, T);
            var d = {
                baseTag: O(c.TAG_NAMES.BASE, r),
                linkTags: O(c.TAG_NAMES.LINK, i),
                metaTags: O(c.TAG_NAMES.META, a),
                noscriptTags: O(c.TAG_NAMES.NOSCRIPT, u),
                scriptTags: O(c.TAG_NAMES.SCRIPT, s),
                styleTags: O(c.TAG_NAMES.STYLE, f),
              },
              h = {},
              E = {};
            Object.keys(d).forEach(function (t) {
              var e = d[t],
                r = e.newTags,
                n = e.oldTags;
              r.length && (h[t] = r), n.length && (E[t] = d[t].oldTags);
            }),
              e && e(),
              l(t, h, E);
          },
          _ = function (t) {
            return Array.isArray(t) ? t.join("") : t;
          },
          w = function (t, e) {
            void 0 !== t && document.title !== t && (document.title = _(t)), P(c.TAG_NAMES.TITLE, e);
          },
          P = function (t, e) {
            var r = document.getElementsByTagName(t)[0];
            if (r) {
              for (
                var n = r.getAttribute(c.HELMET_ATTRIBUTE),
                  o = n ? n.split(",") : [],
                  i = [].concat(o),
                  a = Object.keys(e),
                  u = 0;
                u < a.length;
                u++
              ) {
                var l = a[u],
                  s = e[l] || "";
                r.getAttribute(l) !== s && r.setAttribute(l, s), -1 === o.indexOf(l) && o.push(l);
                var f = i.indexOf(l);
                -1 !== f && i.splice(f, 1);
              }
              for (var p = i.length - 1; p >= 0; p--) r.removeAttribute(i[p]);
              o.length === i.length
                ? r.removeAttribute(c.HELMET_ATTRIBUTE)
                : r.getAttribute(c.HELMET_ATTRIBUTE) !== a.join(",") && r.setAttribute(c.HELMET_ATTRIBUTE, a.join(","));
            }
          },
          O = function (t, e) {
            var r = document.head || document.querySelector(c.TAG_NAMES.HEAD),
              n = r.querySelectorAll(t + "[" + c.HELMET_ATTRIBUTE + "]"),
              o = Array.prototype.slice.call(n),
              i = [],
              a = void 0;
            return (
              e &&
                e.length &&
                e.forEach(function (e) {
                  var r = document.createElement(t);
                  for (var n in e)
                    if (e.hasOwnProperty(n))
                      if (n === c.TAG_PROPERTIES.INNER_HTML) r.innerHTML = e.innerHTML;
                      else if (n === c.TAG_PROPERTIES.CSS_TEXT)
                        r.styleSheet
                          ? (r.styleSheet.cssText = e.cssText)
                          : r.appendChild(document.createTextNode(e.cssText));
                      else {
                        var u = void 0 === e[n] ? "" : e[n];
                        r.setAttribute(n, u);
                      }
                  r.setAttribute(c.HELMET_ATTRIBUTE, "true"),
                    o.some(function (t, e) {
                      return (a = e), r.isEqualNode(t);
                    })
                      ? o.splice(a, 1)
                      : i.push(r);
                }),
              o.forEach(function (t) {
                return t.parentNode.removeChild(t);
              }),
              i.forEach(function (t) {
                return r.appendChild(t);
              }),
              { oldTags: o, newTags: i }
            );
          },
          R = function (t) {
            return Object.keys(t).reduce(function (e, r) {
              var n = void 0 !== t[r] ? r + '="' + t[r] + '"' : "" + r;
              return e ? e + " " + n : n;
            }, "");
          },
          M = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Object.keys(t).reduce(function (e, r) {
              return (e[c.REACT_TAG_MAP[r] || r] = t[r]), e;
            }, e);
          },
          L = function (t, e, r) {
            switch (t) {
              case c.TAG_NAMES.TITLE:
                return {
                  toComponent: function () {
                    return (
                      (t = e.title),
                      (r = e.titleAttributes),
                      ((n = { key: t })[c.HELMET_ATTRIBUTE] = !0),
                      (o = M(r, n)),
                      [i.default.createElement(c.TAG_NAMES.TITLE, o, t)]
                    );
                    var t, r, n, o;
                  },
                  toString: function () {
                    return (function (t, e, r, n) {
                      var o = R(r),
                        i = _(e);
                      return o
                        ? "<" + t + " " + c.HELMET_ATTRIBUTE + '="true" ' + o + ">" + s(i, n) + "</" + t + ">"
                        : "<" + t + " " + c.HELMET_ATTRIBUTE + '="true">' + s(i, n) + "</" + t + ">";
                    })(t, e.title, e.titleAttributes, r);
                  },
                };
              case c.ATTRIBUTE_NAMES.BODY:
              case c.ATTRIBUTE_NAMES.HTML:
                return {
                  toComponent: function () {
                    return M(e);
                  },
                  toString: function () {
                    return R(e);
                  },
                };
              default:
                return {
                  toComponent: function () {
                    return (function (t, e) {
                      return e.map(function (e, r) {
                        var n,
                          o = (((n = { key: r })[c.HELMET_ATTRIBUTE] = !0), n);
                        return (
                          Object.keys(e).forEach(function (t) {
                            var r = c.REACT_TAG_MAP[t] || t;
                            if (r === c.TAG_PROPERTIES.INNER_HTML || r === c.TAG_PROPERTIES.CSS_TEXT) {
                              var n = e.innerHTML || e.cssText;
                              o.dangerouslySetInnerHTML = { __html: n };
                            } else o[r] = e[t];
                          }),
                          i.default.createElement(t, o)
                        );
                      });
                    })(t, e);
                  },
                  toString: function () {
                    return (function (t, e, r) {
                      return e.reduce(function (e, n) {
                        var o = Object.keys(n)
                            .filter(function (t) {
                              return !(t === c.TAG_PROPERTIES.INNER_HTML || t === c.TAG_PROPERTIES.CSS_TEXT);
                            })
                            .reduce(function (t, e) {
                              var o = void 0 === n[e] ? e : e + '="' + s(n[e], r) + '"';
                              return t ? t + " " + o : o;
                            }, ""),
                          i = n.innerHTML || n.cssText || "",
                          a = -1 === c.SELF_CLOSING_TAGS.indexOf(t);
                        return (
                          e +
                          "<" +
                          t +
                          " " +
                          c.HELMET_ATTRIBUTE +
                          '="true" ' +
                          o +
                          (a ? "/>" : ">" + i + "</" + t + ">")
                        );
                      }, "");
                    })(t, e, r);
                  },
                };
            }
          };
        (e.convertReactPropstoHtmlAttributes = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(t).reduce(function (e, r) {
            return (e[c.HTML_TAG_MAP[r] || r] = t[r]), e;
          }, e);
        }),
          (e.handleClientStateChange = function (t) {
            g && m(g),
              t.defer
                ? (g = v(function () {
                    b(t, function () {
                      g = null;
                    });
                  }))
                : (b(t), (g = null));
          }),
          (e.mapStateOnServer = function (t) {
            var e = t.baseTag,
              r = t.bodyAttributes,
              n = t.encode,
              o = t.htmlAttributes,
              i = t.linkTags,
              a = t.metaTags,
              u = t.noscriptTags,
              l = t.scriptTags,
              s = t.styleTags,
              f = t.title,
              p = void 0 === f ? "" : f,
              T = t.titleAttributes;
            return {
              base: L(c.TAG_NAMES.BASE, e, n),
              bodyAttributes: L(c.ATTRIBUTE_NAMES.BODY, r, n),
              htmlAttributes: L(c.ATTRIBUTE_NAMES.HTML, o, n),
              link: L(c.TAG_NAMES.LINK, i, n),
              meta: L(c.TAG_NAMES.META, a, n),
              noscript: L(c.TAG_NAMES.NOSCRIPT, u, n),
              script: L(c.TAG_NAMES.SCRIPT, l, n),
              style: L(c.TAG_NAMES.STYLE, s, n),
              title: L(c.TAG_NAMES.TITLE, { title: p, titleAttributes: T }, n),
            };
          }),
          (e.reducePropsToState = function (t) {
            return {
              baseTag: d([c.TAG_PROPERTIES.HREF], t),
              bodyAttributes: T(c.ATTRIBUTE_NAMES.BODY, t),
              defer: E(t, c.HELMET_PROPS.DEFER),
              encode: E(t, c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
              htmlAttributes: T(c.ATTRIBUTE_NAMES.HTML, t),
              linkTags: h(c.TAG_NAMES.LINK, [c.TAG_PROPERTIES.REL, c.TAG_PROPERTIES.HREF], t),
              metaTags: h(
                c.TAG_NAMES.META,
                [
                  c.TAG_PROPERTIES.NAME,
                  c.TAG_PROPERTIES.CHARSET,
                  c.TAG_PROPERTIES.HTTPEQUIV,
                  c.TAG_PROPERTIES.PROPERTY,
                  c.TAG_PROPERTIES.ITEM_PROP,
                ],
                t
              ),
              noscriptTags: h(c.TAG_NAMES.NOSCRIPT, [c.TAG_PROPERTIES.INNER_HTML], t),
              onChangeClientState: p(t),
              scriptTags: h(c.TAG_NAMES.SCRIPT, [c.TAG_PROPERTIES.SRC, c.TAG_PROPERTIES.INNER_HTML], t),
              styleTags: h(c.TAG_NAMES.STYLE, [c.TAG_PROPERTIES.CSS_TEXT], t),
              title: f(t),
              titleAttributes: T(c.ATTRIBUTE_NAMES.TITLE, t),
            };
          }),
          (e.requestAnimationFrame = v),
          (e.warn = S);
      }.call(this, r("yLpj")));
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-8a7b941b6bb3df4d4f6e.js.map
