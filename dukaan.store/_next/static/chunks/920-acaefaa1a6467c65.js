"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [920], {
        6961: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "addLocale", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(7052);
            let r = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return e
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        5529: function(e, t) {
            function n(e, t, n, r) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        3043: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "hasBasePath", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(6277);

            function o(e) {
                return (0, r.pathHasPrefix)(e, "")
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8920: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return v
                }
            });
            let r = n(6927),
                o = r._(n(6006)),
                u = n(2888),
                a = n(6822),
                l = n(1448),
                i = n(2287),
                f = n(6961),
                c = n(409),
                s = n(6406),
                d = n(922),
                p = n(5529),
                h = n(2035),
                y = n(2003),
                g = new Set;

            function m(e, t, n, r, o, u) {
                if (!u && !(0, a.isLocalURL)(t)) return;
                if (!r.bypassPrefetchedCheck) {
                    let o = void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0,
                        u = t + "%" + n + "%" + o;
                    if (g.has(u)) return;
                    g.add(u)
                }
                let l = u ? e.prefetch(t, o) : e.prefetch(t, n, r);
                Promise.resolve(l).catch(e => {})
            }

            function b(e) {
                return "string" == typeof e ? e : (0, l.formatUrl)(e)
            }
            let P = o.default.forwardRef(function(e, t) {
                    let n, r;
                    let {
                        href: l,
                        as: g,
                        children: P,
                        prefetch: v = null,
                        passHref: _,
                        replace: j,
                        shallow: O,
                        scroll: R,
                        locale: M,
                        onClick: x,
                        onMouseEnter: C,
                        onTouchStart: E,
                        legacyBehavior: w = !1,
                        ...k
                    } = e;
                    n = P, w && ("string" == typeof n || "number" == typeof n) && (n = o.default.createElement("a", null, n));
                    let I = !1 !== v,
                        L = null === v ? y.PrefetchKind.AUTO : y.PrefetchKind.FULL,
                        S = o.default.useContext(c.RouterContext),
                        U = o.default.useContext(s.AppRouterContext),
                        A = null != S ? S : U,
                        T = !S,
                        {
                            href: N,
                            as: W
                        } = o.default.useMemo(() => {
                            if (!S) {
                                let e = b(l);
                                return {
                                    href: e,
                                    as: g ? b(g) : e
                                }
                            }
                            let [e, t] = (0, u.resolveHref)(S, l, !0);
                            return {
                                href: e,
                                as: g ? (0, u.resolveHref)(S, g) : t || e
                            }
                        }, [S, l, g]),
                        D = o.default.useRef(N),
                        z = o.default.useRef(W);
                    w && (r = o.default.Children.only(n));
                    let K = w ? r && "object" == typeof r && r.ref : t,
                        [F, $, q] = (0, d.useIntersection)({
                            rootMargin: "200px"
                        }),
                        B = o.default.useCallback(e => {
                            (z.current !== W || D.current !== N) && (q(), z.current = W, D.current = N), F(e), K && ("function" == typeof K ? K(e) : "object" == typeof K && (K.current = e))
                        }, [W, K, N, q, F]);
                    o.default.useEffect(() => {
                        A && $ && I && m(A, N, W, {
                            locale: M
                        }, {
                            kind: L
                        }, T)
                    }, [W, N, $, M, I, null == S ? void 0 : S.locale, A, T, L]);
                    let H = {
                        ref: B,
                        onClick(e) {
                            w || "function" != typeof x || x(e), w && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), A && !e.defaultPrevented && function(e, t, n, r, u, l, i, f, c, s) {
                                let {
                                    nodeName: d
                                } = e.currentTarget, p = "A" === d.toUpperCase();
                                if (p && (function(e) {
                                        let t = e.currentTarget,
                                            n = t.getAttribute("target");
                                        return n && "_self" !== n || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                    }(e) || !c && !(0, a.isLocalURL)(n))) return;
                                e.preventDefault();
                                let h = () => {
                                    "beforePopState" in t ? t[u ? "replace" : "push"](n, r, {
                                        shallow: l,
                                        locale: f,
                                        scroll: i
                                    }) : t[u ? "replace" : "push"](r || n, {
                                        forceOptimisticNavigation: !s
                                    })
                                };
                                c ? o.default.startTransition(h) : h()
                            }(e, A, N, W, j, O, R, M, T, I)
                        },
                        onMouseEnter(e) {
                            w || "function" != typeof C || C(e), w && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), A && (I || !T) && m(A, N, W, {
                                locale: M,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: L
                            }, T)
                        },
                        onTouchStart(e) {
                            w || "function" != typeof E || E(e), w && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), A && (I || !T) && m(A, N, W, {
                                locale: M,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: L
                            }, T)
                        }
                    };
                    if ((0, i.isAbsoluteUrl)(W)) H.href = W;
                    else if (!w || _ || "a" === r.type && !("href" in r.props)) {
                        let e = void 0 !== M ? M : null == S ? void 0 : S.locale,
                            t = (null == S ? void 0 : S.isLocaleDomain) && (0, p.getDomainLocale)(W, e, null == S ? void 0 : S.locales, null == S ? void 0 : S.domainLocales);
                        H.href = t || (0, h.addBasePath)((0, f.addLocale)(W, e, null == S ? void 0 : S.defaultLocale))
                    }
                    return w ? o.default.cloneElement(r, H) : o.default.createElement("a", { ...k,
                        ...H
                    }, n)
                }),
                v = P;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1722: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    requestIdleCallback: function() {
                        return n
                    },
                    cancelIdleCallback: function() {
                        return r
                    }
                });
            let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    let t = Date.now();
                    return self.setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }, 1)
                },
                r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        922: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(6006),
                o = n(1722),
                u = "function" == typeof IntersectionObserver,
                a = new Map,
                l = [];

            function i(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: i
                } = e, f = i || !u, [c, s] = (0, r.useState)(!1), d = (0, r.useRef)(null), p = (0, r.useCallback)(e => {
                    d.current = e
                }, []);
                (0, r.useEffect)(() => {
                    if (u) {
                        if (f || c) return;
                        let e = d.current;
                        if (e && e.tagName) {
                            let r = function(e, t, n) {
                                let {
                                    id: r,
                                    observer: o,
                                    elements: u
                                } = function(e) {
                                    let t;
                                    let n = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        r = l.find(e => e.root === n.root && e.margin === n.margin);
                                    if (r && (t = a.get(r))) return t;
                                    let o = new Map,
                                        u = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let t = o.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            })
                                        }, e);
                                    return t = {
                                        id: n,
                                        observer: u,
                                        elements: o
                                    }, l.push(n), a.set(n, t), t
                                }(n);
                                return u.set(e, t), o.observe(e),
                                    function() {
                                        if (u.delete(e), o.unobserve(e), 0 === u.size) {
                                            o.disconnect(), a.delete(r);
                                            let e = l.findIndex(e => e.root === r.root && e.margin === r.margin);
                                            e > -1 && l.splice(e, 1)
                                        }
                                    }
                            }(e, e => e && s(e), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: n
                            });
                            return r
                        }
                    } else if (!c) {
                        let e = (0, o.requestIdleCallback)(() => s(!0));
                        return () => (0, o.cancelIdleCallback)(e)
                    }
                }, [f, n, t, c, d.current]);
                let h = (0, r.useCallback)(() => {
                    s(!1)
                }, []);
                return [p, c, h]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1371: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "escapeStringRegexp", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = /[|\\{}()[\]^$+*?.-]/,
                r = /[|\\{}()[\]^$+*?.-]/g;

            function o(e) {
                return n.test(e) ? e.replace(r, "\\$&") : e
            }
        },
        409: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let r = n(6927),
                o = r._(n(6006)),
                u = o.default.createContext(null)
        },
        1448: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    formatUrl: function() {
                        return a
                    },
                    urlObjectKeys: function() {
                        return l
                    },
                    formatWithValidation: function() {
                        return i
                    }
                });
            let r = n(5909),
                o = r._(n(2786)),
                u = /https?|ftp|gopher|file/;

            function a(e) {
                let {
                    auth: t,
                    hostname: n
                } = e, r = e.protocol || "", a = e.pathname || "", l = e.hash || "", i = e.query || "", f = !1;
                t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? f = t + e.host : n && (f = t + (~n.indexOf(":") ? "[" + n + "]" : n), e.port && (f += ":" + e.port)), i && "object" == typeof i && (i = String(o.urlQueryToSearchParams(i)));
                let c = e.search || i && "?" + i || "";
                return r && !r.endsWith(":") && (r += ":"), e.slashes || (!r || u.test(r)) && !1 !== f ? (f = "//" + (f || ""), a && "/" !== a[0] && (a = "/" + a)) : f || (f = ""), l && "#" !== l[0] && (l = "#" + l), c && "?" !== c[0] && (c = "?" + c), "" + r + f + (a = a.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace("#", "%23")) + l
            }
            let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

            function i(e) {
                return a(e)
            }
        },
        781: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "interpolateAs", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let r = n(3694),
                o = n(3980);

            function u(e, t, n) {
                let u = "",
                    a = (0, o.getRouteRegex)(e),
                    l = a.groups,
                    i = (t !== e ? (0, r.getRouteMatcher)(a)(t) : "") || n;
                u = e;
                let f = Object.keys(l);
                return f.every(e => {
                    let t = i[e] || "",
                        {
                            repeat: n,
                            optional: r
                        } = l[e],
                        o = "[" + (n ? "..." : "") + e + "]";
                    return r && (o = (t ? "" : "/") + "[" + o + "]"), n && !Array.isArray(t) && (t = [t]), (r || e in i) && (u = u.replace(o, n ? t.map(e => encodeURIComponent(e)).join("/") : encodeURIComponent(t)) || "/")
                }) || (u = ""), {
                    params: f,
                    result: u
                }
            }
        },
        1218: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isDynamicRoute", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let n = /\/\[[^/]+?\](?=\/|$)/;

            function r(e) {
                return n.test(e)
            }
        },
        6822: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isLocalURL", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let r = n(2287),
                o = n(3043);

            function u(e) {
                if (!(0, r.isAbsoluteUrl)(e)) return !0;
                try {
                    let t = (0, r.getLocationOrigin)(),
                        n = new URL(e, t);
                    return n.origin === t && (0, o.hasBasePath)(n.pathname)
                } catch (e) {
                    return !1
                }
            }
        },
        736: function(e, t) {
            function n(e, t) {
                let n = {};
                return Object.keys(e).forEach(r => {
                    t.includes(r) || (n[r] = e[r])
                }), n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "omit", {
                enumerable: !0,
                get: function() {
                    return n
                }
            })
        },
        6277: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "pathHasPrefix", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(9854);

            function o(e, t) {
                if ("string" != typeof e) return !1;
                let {
                    pathname: n
                } = (0, r.parsePath)(e);
                return n === t || n.startsWith(t + "/")
            }
        },
        2786: function(e, t) {
            function n(e) {
                let t = {};
                return e.forEach((e, n) => {
                    void 0 === t[n] ? t[n] = e : Array.isArray(t[n]) ? t[n].push(e) : t[n] = [t[n], e]
                }), t
            }

            function r(e) {
                return "string" != typeof e && ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
            }

            function o(e) {
                let t = new URLSearchParams;
                return Object.entries(e).forEach(e => {
                    let [n, o] = e;
                    Array.isArray(o) ? o.forEach(e => t.append(n, r(e))) : t.set(n, r(o))
                }), t
            }

            function u(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return n.forEach(t => {
                    Array.from(t.keys()).forEach(t => e.delete(t)), t.forEach((t, n) => e.append(n, t))
                }), e
            }
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    searchParamsToUrlQuery: function() {
                        return n
                    },
                    urlQueryToSearchParams: function() {
                        return o
                    },
                    assign: function() {
                        return u
                    }
                })
        },
        2888: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "resolveHref", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let r = n(2786),
                o = n(1448),
                u = n(736),
                a = n(2287),
                l = n(7052),
                i = n(6822),
                f = n(1218),
                c = n(781);

            function s(e, t, n) {
                let s;
                let d = "string" == typeof t ? t : (0, o.formatWithValidation)(t),
                    p = d.match(/^[a-zA-Z]{1,}:\/\//),
                    h = p ? d.slice(p[0].length) : d,
                    y = h.split("?");
                if ((y[0] || "").match(/(\/\/|\\)/)) {
                    console.error("Invalid href '" + d + "' passed to next/router in page: '" + e.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                    let t = (0, a.normalizeRepeatedSlashes)(h);
                    d = (p ? p[0] : "") + t
                }
                if (!(0, i.isLocalURL)(d)) return n ? [d] : d;
                try {
                    s = new URL(d.startsWith("#") ? e.asPath : e.pathname, "http://n")
                } catch (e) {
                    s = new URL("/", "http://n")
                }
                try {
                    let e = new URL(d, s);
                    e.pathname = (0, l.normalizePathTrailingSlash)(e.pathname);
                    let t = "";
                    if ((0, f.isDynamicRoute)(e.pathname) && e.searchParams && n) {
                        let n = (0, r.searchParamsToUrlQuery)(e.searchParams),
                            {
                                result: a,
                                params: l
                            } = (0, c.interpolateAs)(e.pathname, e.pathname, n);
                        a && (t = (0, o.formatWithValidation)({
                            pathname: a,
                            hash: e.hash,
                            query: (0, u.omit)(n, l)
                        }))
                    }
                    let a = e.origin === s.origin ? e.href.slice(e.origin.length) : e.href;
                    return n ? [a, t || a] : a
                } catch (e) {
                    return n ? [d] : d
                }
            }
        },
        3694: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getRouteMatcher", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(2287);

            function o(e) {
                let {
                    re: t,
                    groups: n
                } = e;
                return e => {
                    let o = t.exec(e);
                    if (!o) return !1;
                    let u = e => {
                            try {
                                return decodeURIComponent(e)
                            } catch (e) {
                                throw new r.DecodeError("failed to decode param")
                            }
                        },
                        a = {};
                    return Object.keys(n).forEach(e => {
                        let t = n[e],
                            r = o[t.pos];
                        void 0 !== r && (a[e] = ~r.indexOf("/") ? r.split("/").map(e => u(e)) : t.repeat ? [u(r)] : u(r))
                    }), a
                }
            }
        },
        3980: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    getRouteRegex: function() {
                        return i
                    },
                    getNamedRouteRegex: function() {
                        return c
                    },
                    getNamedMiddlewareRegex: function() {
                        return s
                    }
                });
            let r = n(1371),
                o = n(694),
                u = "nxtP";

            function a(e) {
                let t = e.startsWith("[") && e.endsWith("]");
                t && (e = e.slice(1, -1));
                let n = e.startsWith("...");
                return n && (e = e.slice(3)), {
                    key: e,
                    repeat: n,
                    optional: t
                }
            }

            function l(e) {
                let t = (0, o.removeTrailingSlash)(e).slice(1).split("/"),
                    n = {},
                    u = 1;
                return {
                    parameterizedRoute: t.map(e => {
                        if (!(e.startsWith("[") && e.endsWith("]"))) return "/" + (0, r.escapeStringRegexp)(e); {
                            let {
                                key: t,
                                optional: r,
                                repeat: o
                            } = a(e.slice(1, -1));
                            return n[t] = {
                                pos: u++,
                                repeat: o,
                                optional: r
                            }, o ? r ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                        }
                    }).join(""),
                    groups: n
                }
            }

            function i(e) {
                let {
                    parameterizedRoute: t,
                    groups: n
                } = l(e);
                return {
                    re: RegExp("^" + t + "(?:/)?$"),
                    groups: n
                }
            }

            function f(e, t) {
                let n, l;
                let i = (0, o.removeTrailingSlash)(e).slice(1).split("/"),
                    f = (n = 97, l = 1, () => {
                        let e = "";
                        for (let t = 0; t < l; t++) e += String.fromCharCode(n), ++n > 122 && (l++, n = 97);
                        return e
                    }),
                    c = {};
                return {
                    namedParameterizedRoute: i.map(e => {
                        if (!(e.startsWith("[") && e.endsWith("]"))) return "/" + (0, r.escapeStringRegexp)(e); {
                            let {
                                key: n,
                                optional: r,
                                repeat: o
                            } = a(e.slice(1, -1)), l = n.replace(/\W/g, "");
                            t && (l = "" + u + l);
                            let i = !1;
                            return (0 === l.length || l.length > 30) && (i = !0), isNaN(parseInt(l.slice(0, 1))) || (i = !0), i && (l = f()), t ? c[l] = "" + u + n : c[l] = "" + n, o ? r ? "(?:/(?<" + l + ">.+?))?" : "/(?<" + l + ">.+?)" : "/(?<" + l + ">[^/]+?)"
                        }
                    }).join(""),
                    routeKeys: c
                }
            }

            function c(e, t) {
                let n = f(e, t);
                return { ...i(e),
                    namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
                    routeKeys: n.routeKeys
                }
            }

            function s(e, t) {
                let {
                    parameterizedRoute: n
                } = l(e), {
                    catchAll: r = !0
                } = t;
                if ("/" === n) return {
                    namedRegex: "^/" + (r ? ".*" : "") + "$"
                };
                let {
                    namedParameterizedRoute: o
                } = f(e, !1);
                return {
                    namedRegex: "^" + o + (r ? "(?:(/.*)?)" : "") + "$"
                }
            }
        },
        2287: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    WEB_VITALS: function() {
                        return n
                    },
                    execOnce: function() {
                        return r
                    },
                    isAbsoluteUrl: function() {
                        return u
                    },
                    getLocationOrigin: function() {
                        return a
                    },
                    getURL: function() {
                        return l
                    },
                    getDisplayName: function() {
                        return i
                    },
                    isResSent: function() {
                        return f
                    },
                    normalizeRepeatedSlashes: function() {
                        return c
                    },
                    loadGetInitialProps: function() {
                        return s
                    },
                    SP: function() {
                        return d
                    },
                    ST: function() {
                        return p
                    },
                    DecodeError: function() {
                        return h
                    },
                    NormalizeError: function() {
                        return y
                    },
                    PageNotFoundError: function() {
                        return g
                    },
                    MissingStaticPage: function() {
                        return m
                    },
                    MiddlewareNotFoundError: function() {
                        return b
                    }
                });
            let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

            function r(e) {
                let t, n = !1;
                return function() {
                    for (var r = arguments.length, o = Array(r), u = 0; u < r; u++) o[u] = arguments[u];
                    return n || (n = !0, t = e(...o)), t
                }
            }
            let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                u = e => o.test(e);

            function a() {
                let {
                    protocol: e,
                    hostname: t,
                    port: n
                } = window.location;
                return e + "//" + t + (n ? ":" + n : "")
            }

            function l() {
                let {
                    href: e
                } = window.location, t = a();
                return e.substring(t.length)
            }

            function i(e) {
                return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
            }

            function f(e) {
                return e.finished || e.headersSent
            }

            function c(e) {
                let t = e.split("?"),
                    n = t[0];
                return n.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "")
            }
            async function s(e, t) {
                let n = t.res || t.ctx && t.ctx.res;
                if (!e.getInitialProps) return t.ctx && t.Component ? {
                    pageProps: await s(t.Component, t.ctx)
                } : {};
                let r = await e.getInitialProps(t);
                if (n && f(n)) return r;
                if (!r) {
                    let t = '"' + i(e) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.';
                    throw Error(t)
                }
                return r
            }
            let d = "undefined" != typeof performance,
                p = d && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
            class h extends Error {}
            class y extends Error {}
            class g extends Error {
                constructor(e) {
                    super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + e
                }
            }
            class m extends Error {
                constructor(e, t) {
                    super(), this.message = "Failed to load static file for page: " + e + " " + t
                }
            }
            class b extends Error {
                constructor() {
                    super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
                }
            }
        }
    }
]);