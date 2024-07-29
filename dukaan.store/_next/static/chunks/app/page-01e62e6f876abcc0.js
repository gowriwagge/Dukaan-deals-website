(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        2340: function(e, s, t) {
            Promise.resolve().then(t.bind(t, 6576))
        },
        1666: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return h
                }
            });
            var l = t(9268),
                a = t(6758);

            function r(e) {
                let {
                    currentPage: s,
                    totalPages: t,
                    onPageChange: r,
                    isLoading: i
                } = e, n = e => {
                    r(e)
                };
                return (0, l.jsxs)("nav", {
                    "aria-label": "Page navigation example",
                    children: [(0, l.jsxs)("div", {
                        className: "w-full text-center py-2 my-2 text-gray-500",
                        children: ["Showing", " ", (0, l.jsx)("strong", {
                            className: "text-gray-700",
                            children: i ? 0 : 25 * s
                        }), " ", "of", " ", (0, l.jsx)("strong", {
                            className: "text-gray-700",
                            children: 25 * t
                        }), " ", "Entries"]
                    }), (0, l.jsxs)("ul", {
                        className: "w-full flex justify-between mb-2 pb-2",
                        children: [(0, l.jsx)("li", {
                            children: (0, l.jsxs)("a", {
                                href: "#",
                                className: "px-2 py-2 flex font-semibold uppercase text-xs justify-between items-center leading-tight text-gray-500 w-fit md:text-base bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700",
                                onClick: () => n(s - 1),
                                disabled: 1 === s,
                                children: [(0, l.jsx)(a.WOK, {
                                    className: "mr-2"
                                }), "Prev Page"]
                            })
                        }), (0, l.jsx)("li", {
                            children: (0, l.jsxs)("a", {
                                href: "#",
                                className: "px-2 py-2 flex font-semibold uppercase text-xs justify-between items-center leading-tight text-gray-500 w-fit md:text-base bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700",
                                onClick: () => n(s + 1),
                                disabled: 25 * s == 25 * t,
                                children: ["Next Page", (0, l.jsx)(a.U6L, {
                                    className: "ml-2"
                                })]
                            })
                        })]
                    })]
                })
            }
            t(6006);
            var i = t(8136),
                n = t(6346),
                d = t(3081),
                c = t(8744),
                x = t(1408),
                m = e => {
                    let {
                        cardData: s
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "relative mx-auto w-full col-span-1 shadow-md rounded-md ".concat((0, d.Z)(s.category), " pt-1"),
                        children: (0, l.jsx)("div", {
                            className: "relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full",
                            children: (0, l.jsxs)("div", {
                                className: "shadow p-4 rounded-md bg-white text-center pt-4",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex justify-center relative rounded-md border overflow-hidden h-fit",
                                    children: [(0, l.jsx)("div", {
                                        className: "transition-transform duration-500 transform ease-in-out hover:scale-105 w-full bg-white",
                                        children: (0, l.jsx)("a", {
                                            href: s.productLink,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: (0, l.jsx)("img", {
                                                width: 400,
                                                height: 300,
                                                src: s.imageLink,
                                                alt: s.title
                                            })
                                        })
                                    }), null !== s.rating && (0, l.jsx)("div", {
                                        className: "absolute flex justify-center bottom-0 mb-3 text-sm",
                                        children: (0, l.jsx)("div", {
                                            className: "flex bg-gray-800 px-2 py-1 space-x-5 rounded-full overflow-hidden shadow",
                                            children: (0, l.jsx)("div", {
                                                className: "flex items-center font-medium text-gray-800",
                                                children: (0, l.jsx)(c.Z, {
                                                    rating: Number(s.rating)
                                                })
                                            })
                                        })
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "mt-2",
                                    children: (0, l.jsx)("h2", {
                                        className: "text-md text-gray-800 line-clamp-2 h-10 text-left leading-tight font-semibold",
                                        children: s.title
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "w-full sm:mt-2 mb-2 flex justify-between",
                                    children: [(0, l.jsxs)("div", {
                                        className: "text-red-600 justify-center items-center w-full",
                                        children: [(0, l.jsx)("div", {
                                            className: "line-through items-center justify-center",
                                            children: (0, l.jsx)("span", {
                                                className: "mt-2 xl:mt-0 font-bold text-md",
                                                children: s.actualPrice.replace("?", "")
                                            })
                                        }), (0, l.jsx)("div", {
                                            children: (0, l.jsx)("span", {
                                                className: "mt-0 text-xs font-semibold",
                                                children: "Actual Price"
                                            })
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "text-green-600 justify-center items-center w-full",
                                        children: [(0, l.jsx)("div", {
                                            className: "items-center justify-center",
                                            children: (0, l.jsx)("span", {
                                                className: "mt-2 xl:mt-0 font-bold text-md",
                                                children: s.offerPrice.replace("?", "")
                                            })
                                        }), (0, l.jsx)("div", {
                                            children: (0, l.jsx)("span", {
                                                className: "mt-0 text-xs font-semibold",
                                                children: "Offer Price"
                                            })
                                        })]
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "mb-2 text-xs text-gray-400 font-medium",
                                    children: (0, l.jsxs)("h1", {
                                        children: ["on ", (0, n.Z)(s.timestamp)]
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "flex items-center text-gray-800 pb-2 w-full justify-center",
                                    children: [(0, l.jsx)(i.xNm, {
                                        className: "text-blue-500 h-4 w-4"
                                    }), (0, l.jsxs)("span", {
                                        className: "text-blue-500 font-semibold pl-1",
                                        children: [s.offerPercent, "% off"]
                                    }), (0, l.jsx)(x.Z, {})]
                                }), (0, l.jsx)("div", {
                                    className: "my-1",
                                    children: (0, l.jsx)("a", {
                                        href: s.productLink,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, l.jsx)("button", {
                                            className: "rounded-md uppercase bg-green-700 text-white px-1 py-1 font-semibold w-full hover:opacity-80",
                                            children: "Get Deal"
                                        })
                                    })
                                })]
                            })
                        })
                    })
                },
                o = () => (0, l.jsx)("div", {
                    className: "relative mx-auto w-full shadow-md rounded-md bg-gray-200 pt-1 animate-pulse",
                    children: (0, l.jsx)("div", {
                        className: "relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full",
                        children: (0, l.jsxs)("div", {
                            className: "shadow p-4 rounded-md bg-white text-center pt-4",
                            children: [(0, l.jsxs)("div", {
                                className: "flex justify-center relative rounded-md border overflow-hidden h-36",
                                children: [(0, l.jsx)("div", {
                                    className: "transition-transform duration-500 transform ease-in-out hover:scale-105 w-full bg-white animate-pulse",
                                    children: (0, l.jsx)("div", {
                                        className: "w-full h-42 bg-gray-300"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "absolute flex justify-center bottom-0 mb-3 text-sm",
                                    children: (0, l.jsx)("div", {
                                        className: "flex bg-gray-800 px-2 py-1 space-x-5 rounded-full overflow-hidden shadow",
                                        children: (0, l.jsx)("div", {
                                            className: "w-20 h-4"
                                        })
                                    })
                                })]
                            }), (0, l.jsx)("div", {
                                className: "mt-2",
                                children: (0, l.jsx)("h2", {
                                    className: "w-full h-4 bg-gray-300 mb-2"
                                })
                            }), (0, l.jsxs)("div", {
                                className: "w-full sm:mt-2 mb-2 flex justify-between",
                                children: [(0, l.jsxs)("div", {
                                    className: "text-red-600 justify-center items-center w-full",
                                    children: [(0, l.jsx)("div", {
                                        className: "w-1/2 h-4 bg-gray-300"
                                    }), (0, l.jsx)("div", {
                                        className: "w-1/4 h-3 mt-1 bg-gray-300"
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "text-green-600 justify-center items-center w-full",
                                    children: [(0, l.jsx)("div", {
                                        className: "w-1/2 h-4 bg-gray-300"
                                    }), (0, l.jsx)("div", {
                                        className: "w-1/4 h-3 mt-1 bg-gray-300"
                                    })]
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flex items-center text-gray-800 pb-2 w-full justify-center",
                                children: [(0, l.jsx)("span", {
                                    className: "w-4 h-4 bg-blue-500 rounded-md"
                                }), (0, l.jsx)("span", {
                                    className: "w-12 h-4 bg-blue-500 rounded-md ml-1"
                                }), (0, l.jsx)("span", {
                                    className: "w-12 h-4 bg-yellow-500 rounded-md ml-2"
                                })]
                            }), (0, l.jsx)("div", {
                                className: "my-1",
                                children: (0, l.jsx)("button", {
                                    className: "rounded-md uppercase bg-green-700 text-white px-1 py-1 font-semibold w-full hover:opacity-80"
                                })
                            }), (0, l.jsx)("div", {
                                className: "pt-2 text-xs text-gray-400 font-medium",
                                children: (0, l.jsx)("h1", {
                                    className: "w-1/4 h-4 bg-gray-300"
                                })
                            })]
                        })
                    })
                }),
                h = e => {
                    let {
                        cardsData: s,
                        isLoading: t,
                        currentPage: a,
                        totalPages: i,
                        handlePageChange: n,
                        title: d
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "w-full lg:col-span-8 xl:col-span-9 bg-white rounded-lg px-4 pb-2 shadow-xl",
                        children: [(0, l.jsx)("h1", {
                            className: "text-gray-800 text-center font-bold p-4 text-xl uppercase subpixel-antialiased",
                            children: d
                        }), (0, l.jsx)("hr", {}), (0, l.jsx)("div", {
                            className: "pt-3 pb-2 w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4",
                            children: t ? Array.from({
                                length: 25
                            }).map((e, s) => (0, l.jsx)(o, {}, s)) : null == s ? void 0 : s.map(e => (0, l.jsx)(m, {
                                cardData: e
                            }, e.title))
                        }), !t && s && (0, l.jsx)(r, {
                            currentPage: a,
                            totalPages: i,
                            onPageChange: n,
                            isLoading: t
                        })]
                    })
                }
        },
        6576: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return x
                }
            });
            var l = t(9268),
                a = t(6006),
                r = t(3132),
                i = t(1666),
                n = t(2353),
                d = t(8082),
                c = t(222);

            function x() {
                let [e, s] = (0, a.useState)([]), [t, x] = (0, a.useState)([]), [m, o] = (0, a.useState)([]), [h, u] = (0, a.useState)(0), [f, g] = (0, a.useState)([]), [j, b] = (0, a.useState)(!0), [p, v] = (0, a.useState)(1), N = (0, a.useCallback)(async () => {
                    b(!0);
                    let [e, t, l, a] = await Promise.all([(0, c.BJ)(s, u, "all", p), (0, c.qs)(x, "all"), (0, c.he)(o, "all"), (0, c.XL)(g, "all")]);
                    b(!1)
                }, [p, "all"]);
                return (0, a.useEffect)(() => {
                    N()
                }, [N]), (0, l.jsxs)("div", {
                    className: "w-full",
                    children: [(0, l.jsx)(r.Z, {
                        isLoading: j,
                        bannerData: f
                    }), (0, l.jsxs)("div", {
                        className: "grid lg:gap-4 grid-cols-1 lg:grid-cols-12 min-w-full",
                        children: [(0, l.jsxs)("div", {
                            className: "lg:col-span-4 xl:col-span-3 lg:order-last",
                            children: [(0, l.jsx)(n.Z, {
                                isLoading: j,
                                dealOfTheDay: m
                            }), (0, l.jsx)(d.Z, {
                                isLoading: j,
                                bestDeals: t
                            })]
                        }), (0, l.jsx)(i.Z, {
                            isLoading: j,
                            title: "All Deals",
                            cardsData: e,
                            currentPage: p,
                            totalPages: h,
                            handlePageChange: e => v(e)
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [141, 776, 855, 96, 852, 667, 488, 744], function() {
            return e(e.s = 2340)
        }), _N_E = e.O()
    }
]);