(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [921], {
        9214: function(e, s, t) {
            Promise.resolve().then(t.bind(t, 8289))
        },
        232: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return u
                }
            });
            var l = t(9268);
            t(6006);
            var a = t(8136),
                i = t(6346),
                r = t(3081),
                n = t(8744),
                c = t(1408),
                d = e => {
                    let {
                        cardData: s
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "relative mx-auto w-full col-span-1 shadow-md rounded-md ".concat((0, r.Z)(s.category), " pt-1"),
                        children: (0, l.jsx)("div", {
                            className: "relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full",
                            children: (0, l.jsxs)("div", {
                                className: "shadow p-4 rounded-md bg-white text-center pt-4",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex justify-center relative rounded-md border overflow-hidden h-36",
                                    children: [(0, l.jsx)("div", {
                                        className: "transition-transform duration-500 transform ease-in-out hover:scale-105 w-full bg-white",
                                        children: (0, l.jsx)("a", {
                                            href: s.productLink,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: (0, l.jsx)("img", {
                                                height: 270,
                                                src: s.imageLink,
                                                alt: s.title,
                                                className: ""
                                            })
                                        })
                                    }), null !== s.rating && (0, l.jsx)("div", {
                                        className: "absolute flex justify-center bottom-0 mb-3 text-sm",
                                        children: (0, l.jsx)("div", {
                                            className: "flex bg-gray-800 px-2 py-1 space-x-5 rounded-full overflow-hidden shadow",
                                            children: (0, l.jsx)("div", {
                                                className: "flex items-center font-medium text-gray-800",
                                                children: (0, l.jsx)(n.Z, {
                                                    rating: Number(s.rating)
                                                })
                                            })
                                        })
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "mt-2",
                                    children: (0, l.jsx)("h2", {
                                        className: "text-md text-gray-800 line-clamp-2 text-left leading-tight font-semibold",
                                        children: s.product_title
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "w-full sm:mt-2 mb-2 flex justify-between",
                                    children: [(0, l.jsxs)("div", {
                                        className: "text-red-600 justify-center items-center w-full",
                                        children: [(0, l.jsx)("div", {
                                            className: "line-through items-center justify-center",
                                            children: (0, l.jsx)("span", {
                                                className: "mt-2 xl:mt-0 font-bold text-md",
                                                children: s.actualPrice
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
                                                children: s.offerPrice
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
                                        children: ["on ", (0, i.Z)(Date.parse(s.publishedAt))]
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "flex items-center text-gray-800 pb-2 w-full justify-center",
                                    children: [(0, l.jsx)(a.xNm, {
                                        className: "text-blue-500 h-4 w-4"
                                    }), (0, l.jsxs)("span", {
                                        className: "text-blue-500 font-semibold pl-1",
                                        children: [s.offerPercent, "% off"]
                                    }), (0, l.jsx)(c.Z, {})]
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
                o = t(8563);
            t(4813), t(6867);
            var x = t(1033);
            let m = {
                dots: !1,
                infinite: !1,
                arrows: !0,
                speed: 400,
                slidesToShow: 5,
                slidesToScroll: 4,
                prevArrow: (0, l.jsx)(e => (0, l.jsx)("div", {
                    className: e.className,
                    onClick: e.onClick,
                    style: {
                        backgroundColor: "transparent",
                        display: "block",
                        color: "gray",
                        position: "absolute",
                        top: "45%",
                        left: "-16px",
                        zIndex: 1
                    },
                    children: (0, l.jsx)(x._u0, {
                        size: 40
                    })
                }), {}),
                nextArrow: (0, l.jsx)(e => (0, l.jsx)("div", {
                    className: e.className,
                    onClick: e.onClick,
                    style: {
                        backgroundColor: "transparent",
                        display: "block",
                        color: "gray",
                        position: "absolute",
                        top: "45%",
                        right: "7px",
                        zIndex: 1
                    },
                    children: (0, l.jsx)(x.bBv, {
                        size: 40
                    })
                }), {}),
                responsive: [{
                    breakpoint: 1536,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3
                    }
                }, {
                    breakpoint: 1230,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 495,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            };
            var h = e => {
                    let {
                        title: s,
                        sectionData: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "mt-2 pt-2 mb-1 pb-1 px-4",
                        children: [(0, l.jsx)("h1", {
                            className: "text-gray-800 text-xl font-bold subpixel-antialiased uppercase",
                            children: s
                        }), (0, l.jsx)(o.Z, { ...m,
                            children: t && t.map(e => (0, l.jsx)("div", {
                                className: "px-2 py-4",
                                children: (0, l.jsx)(d, {
                                    cardData: e
                                }, e.id)
                            }, e.id))
                        }), (0, l.jsx)("hr", {})]
                    })
                },
                u = e => {
                    let {
                        isLoading: s,
                        sectionData: t,
                        title: a
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "w-full lg:col-span-8 xl:col-span-9 bg-white rounded-lg px-4 pb-2 shadow-xl",
                        children: [(0, l.jsx)("h1", {
                            className: "text-gray-800 text-center font-bold p-4 text-xl uppercase subpixel-antialiased",
                            children: a
                        }), (0, l.jsx)("hr", {}), s ? (0, l.jsx)("div", {
                            children: "loading"
                        }) : 0 === Object.keys(t).length ? (0, l.jsx)("div", {
                            children: "No deals"
                        }) : Object.keys(t).map(e => (0, l.jsx)(h, {
                            title: e,
                            sectionData: t[e]
                        }, e))]
                    })
                }
        },
        8289: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return o
                }
            });
            var l = t(9268),
                a = t(6006),
                i = t(3132),
                r = t(2353),
                n = t(8082),
                c = t(232),
                d = t(222);

            function o() {
                let e = "travel",
                    [s, t] = (0, a.useState)([]),
                    [o, x] = (0, a.useState)([]),
                    [m, h] = (0, a.useState)([]),
                    [u, f] = (0, a.useState)([]),
                    [j, p] = (0, a.useState)(!0),
                    b = (0, a.useCallback)(async () => {
                        p(!0);
                        let [s, l, a, i] = await Promise.all([(0, d.Nk)(t, e), (0, d.qs)(x, e), (0, d.he)(h, e), (0, d.XL)(f, e)]);
                        p(!1)
                    }, []);
                return (0, a.useEffect)(() => {
                    b()
                }, [b]), (0, l.jsxs)("div", {
                    className: "w-full",
                    children: [(0, l.jsx)(i.Z, {
                        isLoading: j,
                        bannerData: u
                    }), (0, l.jsxs)("div", {
                        className: "grid lg:gap-4 grid-cols-1 lg:grid-cols-12 min-w-full",
                        children: [(0, l.jsxs)("div", {
                            className: "lg:col-span-4 xl:col-span-3 lg:order-last",
                            children: [(0, l.jsx)(r.Z, {
                                isLoading: j,
                                dealOfTheDay: m
                            }), (0, l.jsx)(n.Z, {
                                isLoading: j,
                                bestDeals: o
                            })]
                        }), (0, l.jsx)(c.Z, {
                            isLoading: j,
                            title: "Travel Deals",
                            sectionData: s
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [141, 776, 855, 96, 340, 852, 667, 488, 744], function() {
            return e(e.s = 9214)
        }), _N_E = e.O()
    }
]);