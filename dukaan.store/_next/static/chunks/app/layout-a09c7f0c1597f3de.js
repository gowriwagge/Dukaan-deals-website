(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        2566: function(e, t, n) {
            Promise.resolve().then(n.t.bind(n, 1273, 23)), Promise.resolve().then(n.t.bind(n, 1012, 23)), Promise.resolve().then(n.t.bind(n, 6356, 23)), Promise.resolve().then(n.bind(n, 8285)), Promise.resolve().then(n.t.bind(n, 8920, 23))
        },
        8285: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n(9268),
                a = n(6006),
                o = n(6008),
                l = n(8136),
                s = n(1033),
                i = n(5846),
                c = n.n(i);

            function u() {
                return (0, r.jsxs)("a", {
                    href: "https://t.me/lootbot",
                    className: "flex rounded text-sm uppercase font-semibold bg-blue-400 px-4 py-1 justify-center items-center text-blue-900 text-center hover:cursor-pointer hover:bg-blue-500 gap-2",
                    children: ["Join our telegram channel", (0, r.jsx)(l.iEj, {})]
                })
            }
            var d = () => {
                let [e, t] = (0, a.useState)(!1), n = (0, o.usePathname)(), i = [{
                    name: "Home",
                    href: "/",
                    current: "/" === n
                }, {
                    name: "Tech",
                    href: "/tech",
                    current: "/tech" === n
                }, {
                    name: "Clothing",
                    href: "/clothing",
                    current: "/clothing" === n
                }, {
                    name: "Travel",
                    href: "/travel",
                    current: "/travel" === n
                }, {
                    name: "Fandom",
                    href: "/fandom",
                    current: "/fandom" === n
                }];
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: "bg-white py-4 px-8 md:flex hidden justify-between items-center",
                        children: [(0, r.jsx)(c(), {
                            href: "/",
                            className: "flex items-center",
                            children: (0, r.jsx)("span", {
                                className: "text-2xl font-semibold uppercase",
                                children: "Dukaan"
                            })
                        }), (0, r.jsx)("div", {
                            className: "flex items-center",
                            children: (0, r.jsx)(u, {})
                        })]
                    }), (0, r.jsx)("nav", {
                        className: "bg-gray-800",
                        children: (0, r.jsxs)("div", {
                            className: "max-w-screen-sm px-4 py-3 mx-auto",
                            children: [(0, r.jsxs)("div", {
                                className: "flex justify-between items-center my-1 py-1 md:hidden",
                                children: [(0, r.jsx)("button", {
                                    type: "button",
                                    className: "md:hidden text-gray-100",
                                    onClick: () => t(!e),
                                    children: e ? (0, r.jsx)(s.oHP, {
                                        className: "h-6 w-6"
                                    }) : (0, r.jsx)(s.qTj, {
                                        className: "h-6 w-6"
                                    })
                                }), (0, r.jsx)(c(), {
                                    href: "/",
                                    className: "flex items-center gap-2",
                                    children: (0, r.jsx)("span", {
                                        className: "md:hidden text-xl sm:text-2xl  font-semibold whitespace-nowrap text-white",
                                        children: "Dukaan"
                                    })
                                }), (0, r.jsxs)("a", {
                                    href: "https://t.me/lootbot",
                                    className: "flex rounded text-sm uppercase font-semibold bg-blue-400 px-4 py-1 items-center text-blue-900 text-center hover:cursor-pointer hover:bg-blue-500 gap-1 md:hidden",
                                    children: ["Join", (0, r.jsx)(l.iEj, {
                                        className: "text-blue-900"
                                    })]
                                })]
                            }), (0, r.jsx)("ul", {
                                className: "".concat(e ? "block" : "hidden", " md:hidden mt-2 pt-2"),
                                children: i.map(e => (0, r.jsx)("li", {
                                    className: "flex justify-center my-1",
                                    children: (0, r.jsx)(c(), {
                                        href: e.href,
                                        passHref: !0,
                                        children: (0, r.jsx)("button", {
                                            className: "uppercase py-2 px-3 text-sm ".concat(e.current ? "text-orange-400 font-bold bg-gray-700 rounded-md" : "text-gray-200 font-semibold  hover:text-orange-400"),
                                            onClick: () => t(!1),
                                            children: e.name
                                        })
                                    })
                                }, e.name))
                            }), (0, r.jsx)("ul", {
                                className: "md:flex hidden my-2 justify-between",
                                children: i.map(e => (0, r.jsx)("li", {
                                    children: (0, r.jsx)(c(), {
                                        href: e.href,
                                        passHref: !0,
                                        children: (0, r.jsx)("span", {
                                            className: "uppercase py-2 px-4 m-1 text-sm ".concat(e.current ? "text-orange-400 font-bold bg-gray-700 rounded-md" : "text-gray-200 font-semibold hover:text-orange-400"),
                                            children: e.name
                                        })
                                    })
                                }, e.name))
                            })]
                        })
                    })]
                })
            }
        },
        6167: function(e, t) {
            "use strict";
            let n;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    DOMAttributeNames: function() {
                        return r
                    },
                    isEqualNode: function() {
                        return o
                    },
                    default: function() {
                        return l
                    }
                });
            let r = {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv",
                noModule: "noModule"
            };

            function a(e) {
                let {
                    type: t,
                    props: n
                } = e, a = document.createElement(t);
                for (let e in n) {
                    if (!n.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === n[e]) continue;
                    let o = r[e] || e.toLowerCase();
                    "script" === t && ("async" === o || "defer" === o || "noModule" === o) ? a[o] = !!n[e] : a.setAttribute(o, n[e])
                }
                let {
                    children: o,
                    dangerouslySetInnerHTML: l
                } = n;
                return l ? a.innerHTML = l.__html || "" : o && (a.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""), a
            }

            function o(e, t) {
                if (e instanceof HTMLElement && t instanceof HTMLElement) {
                    let n = t.getAttribute("nonce");
                    if (n && !e.getAttribute("nonce")) {
                        let r = t.cloneNode(!0);
                        return r.setAttribute("nonce", ""), r.nonce = n, n === e.nonce && e.isEqualNode(r)
                    }
                }
                return e.isEqualNode(t)
            }

            function l() {
                return {
                    mountedInstances: new Set,
                    updateHead: e => {
                        let t = {};
                        e.forEach(e => {
                            if ("link" === e.type && e.props["data-optimized-fonts"]) {
                                if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]')) return;
                                e.props.href = e.props["data-href"], e.props["data-href"] = void 0
                            }
                            let n = t[e.type] || [];
                            n.push(e), t[e.type] = n
                        });
                        let r = t.title ? t.title[0] : null,
                            a = "";
                        if (r) {
                            let {
                                children: e
                            } = r.props;
                            a = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
                        }
                        a !== document.title && (document.title = a), ["meta", "base", "link", "style", "script"].forEach(e => {
                            n(e, t[e] || [])
                        })
                    }
                }
            }
            n = (e, t) => {
                let n = document.getElementsByTagName("head")[0],
                    r = n.querySelector("meta[name=next-head-count]"),
                    l = Number(r.content),
                    s = [];
                for (let t = 0, n = r.previousElementSibling; t < l; t++, n = (null == n ? void 0 : n.previousElementSibling) || null) {
                    var i;
                    (null == n ? void 0 : null == (i = n.tagName) ? void 0 : i.toLowerCase()) === e && s.push(n)
                }
                let c = t.map(a).filter(e => {
                    for (let t = 0, n = s.length; t < n; t++) {
                        let n = s[t];
                        if (o(n, e)) return s.splice(t, 1), !1
                    }
                    return !0
                });
                s.forEach(e => {
                    var t;
                    return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                }), c.forEach(e => n.insertBefore(e, r)), r.content = (l - s.length + c.length).toString()
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1273: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    handleClientScriptLoad: function() {
                        return p
                    },
                    initScriptLoader: function() {
                        return h
                    },
                    default: function() {
                        return b
                    }
                });
            let r = n(6927),
                a = n(5909),
                o = r._(n(8431)),
                l = a._(n(6006)),
                s = n(5415),
                i = n(6167),
                c = n(1722),
                u = new Map,
                d = new Set,
                f = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy"],
                m = e => {
                    let {
                        src: t,
                        id: n,
                        onLoad: r = () => {},
                        onReady: a = null,
                        dangerouslySetInnerHTML: o,
                        children: l = "",
                        strategy: s = "afterInteractive",
                        onError: c
                    } = e, m = n || t;
                    if (m && d.has(m)) return;
                    if (u.has(t)) {
                        d.add(m), u.get(t).then(r, c);
                        return
                    }
                    let p = () => {
                            a && a(), d.add(m)
                        },
                        h = document.createElement("script"),
                        y = new Promise((e, t) => {
                            h.addEventListener("load", function(t) {
                                e(), r && r.call(this, t), p()
                            }), h.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            c && c(e)
                        });
                    for (let [n, r] of (o ? (h.innerHTML = o.__html || "", p()) : l ? (h.textContent = "string" == typeof l ? l : Array.isArray(l) ? l.join("") : "", p()) : t && (h.src = t, u.set(t, y)), Object.entries(e))) {
                        if (void 0 === r || f.includes(n)) continue;
                        let e = i.DOMAttributeNames[n] || n.toLowerCase();
                        h.setAttribute(e, r)
                    }
                    "worker" === s && h.setAttribute("type", "text/partytown"), h.setAttribute("data-nscript", s), document.body.appendChild(h)
                };

            function p(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, c.requestIdleCallback)(() => m(e))
                }) : m(e)
            }

            function h(e) {
                e.forEach(p),
                    function() {
                        let e = [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')];
                        e.forEach(e => {
                            let t = e.id || e.getAttribute("src");
                            d.add(t)
                        })
                    }()
            }

            function y(e) {
                let {
                    id: t,
                    src: n = "",
                    onLoad: r = () => {},
                    onReady: a = null,
                    strategy: i = "afterInteractive",
                    onError: u,
                    ...f
                } = e, {
                    updateScripts: p,
                    scripts: h,
                    getIsSsr: y,
                    appDir: b,
                    nonce: x
                } = (0, l.useContext)(s.HeadManagerContext), v = (0, l.useRef)(!1);
                (0, l.useEffect)(() => {
                    let e = t || n;
                    v.current || (a && e && d.has(e) && a(), v.current = !0)
                }, [a, t, n]);
                let g = (0, l.useRef)(!1);
                if ((0, l.useEffect)(() => {
                        !g.current && ("afterInteractive" === i ? m(e) : "lazyOnload" === i && ("complete" === document.readyState ? (0, c.requestIdleCallback)(() => m(e)) : window.addEventListener("load", () => {
                            (0, c.requestIdleCallback)(() => m(e))
                        })), g.current = !0)
                    }, [e, i]), ("beforeInteractive" === i || "worker" === i) && (p ? (h[i] = (h[i] || []).concat([{
                        id: t,
                        src: n,
                        onLoad: r,
                        onReady: a,
                        onError: u,
                        ...f
                    }]), p(h)) : y && y() ? d.add(t || n) : y && !y() && m(e)), b) {
                    if ("beforeInteractive" === i) return n ? (o.default.preload(n, f.integrity ? {
                        as: "script",
                        integrity: f.integrity
                    } : {
                        as: "script"
                    }), l.default.createElement("script", {
                        nonce: x,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n]) + ")"
                        }
                    })) : (f.dangerouslySetInnerHTML && (f.children = f.dangerouslySetInnerHTML.__html, delete f.dangerouslySetInnerHTML), l.default.createElement("script", {
                        nonce: x,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...f
                            }]) + ")"
                        }
                    }));
                    "afterInteractive" === i && n && o.default.preload(n, f.integrity ? {
                        as: "script",
                        integrity: f.integrity
                    } : {
                        as: "script"
                    })
                }
                return null
            }
            Object.defineProperty(y, "__nextScript", {
                value: !0
            });
            let b = y;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6356: function() {},
        1012: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Rubik_219920', '__Rubik_Fallback_219920'",
                    fontStyle: "normal"
                },
                className: "__className_219920",
                variable: "__variable_219920"
            }
        },
        3177: function(e, t, n) {
            "use strict";
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = n(6006),
                a = Symbol.for("react.element"),
                o = Symbol.for("react.fragment"),
                l = Object.prototype.hasOwnProperty,
                s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                i = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function c(e, t, n) {
                var r, o = {},
                    c = null,
                    u = null;
                for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) l.call(t, r) && !i.hasOwnProperty(r) && (o[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
                return {
                    $$typeof: a,
                    type: e,
                    key: c,
                    ref: u,
                    props: o,
                    _owner: s.current
                }
            }
            t.Fragment = o, t.jsx = c, t.jsxs = c
        },
        9268: function(e, t, n) {
            "use strict";
            e.exports = n(3177)
        },
        5846: function(e, t, n) {
            e.exports = n(8920)
        },
        6008: function(e, t, n) {
            e.exports = n(3027)
        },
        3270: function(e, t, n) {
            "use strict";
            n.d(t, {
                w_: function() {
                    return i
                }
            });
            var r = n(6006),
                a = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                o = r.createContext && r.createContext(a),
                l = function() {
                    return (l = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                s = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) 0 > t.indexOf(r[a]) && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
                    return n
                };

            function i(e) {
                return function(t) {
                    return r.createElement(c, l({
                        attr: l({}, e.attr)
                    }, t), function e(t) {
                        return t && t.map(function(t, n) {
                            return r.createElement(t.tag, l({
                                key: n
                            }, t.attr), e(t.child))
                        })
                    }(e.child))
                }
            }

            function c(e) {
                var t = function(t) {
                    var n, a = e.attr,
                        o = e.size,
                        i = e.title,
                        c = s(e, ["attr", "size", "title"]),
                        u = o || t.size || "1em";
                    return t.className && (n = t.className), e.className && (n = (n ? n + " " : "") + e.className), r.createElement("svg", l({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, a, c, {
                        className: n,
                        style: l(l({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: u,
                        width: u,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), i && r.createElement("title", null, i), e.children)
                };
                return void 0 !== o ? r.createElement(o.Consumer, null, function(e) {
                    return t(e)
                }) : t(a)
            }
        }
    },
    function(e) {
        e.O(0, [141, 776, 920, 667, 488, 744], function() {
            return e(e.s = 2566)
        }), _N_E = e.O()
    }
]);