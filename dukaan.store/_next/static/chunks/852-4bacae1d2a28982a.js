"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [852], {
        3132: function(e, t, s) {
            var a = s(9268);
            t.Z = e => {
                let {
                    bannerData: t,
                    isLoading: s
                } = e;
                return s || void 0 === t || "" === t.heading ? null : (0, a.jsx)("div", {
                    className: "relative w-full h-60 md:h-56 bg-cover bg-center text-white py-10 px-2 md:px-10 rounded-xl mb-8 mt-2",
                    style: {
                        backgroundImage: "url(".concat(t.imageLink, ")")
                    },
                    children: (0, a.jsxs)("div", {
                        className: "w-full md:w-3/4 lg:w-3/2 absolute inset-0 px-6 sm:px-10 py-5",
                        children: [(0, a.jsx)("p", {
                            className: "font-bold text-sm uppercase",
                            children: t.tag
                        }), (0, a.jsx)("p", {
                            className: "text-xl sm:text-2xl lg:text-3xl font-bold py-2",
                            children: t.heading
                        }), (0, a.jsx)("p", {
                            className: "text-md sm:text-lg md:text-xl mb-6 sm:mb-8 leading-none",
                            children: t.subheading
                        }), (0, a.jsx)("a", {
                            href: t.buttonLink,
                            className: "bg-orange-800 py-2 md:py-4 px-4 md:px-8 text-white font-bold text-sm rounded hover:bg-gray-200 hover:text-gray-800",
                            children: t.buttonText
                        })]
                    })
                })
            }
        },
        2353: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return d
                }
            });
            var a = s(9268),
                r = s(6758),
                l = s(8744),
                n = () => (0, a.jsx)("div", {
                    className: "my-3 relative mx-auto w-full shadow-md rounded-md bg-blue-700 pt-1 animate-pulse",
                    children: (0, a.jsx)("div", {
                        className: "relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full",
                        children: (0, a.jsxs)("div", {
                            className: "shadow p-4 rounded-md bg-white text-center pt-4 flex flex-wrap justify-center",
                            children: [(0, a.jsx)("div", {
                                className: "flex justify-center relative rounded-md border overflow-hidden h-fit",
                                children: (0, a.jsx)("div", {
                                    className: "transition-transform duration-500 transform ease-in-out hover:scale-105 w-full bg-white animate-pulse",
                                    children: (0, a.jsx)("div", {
                                        className: "aspect-ratio w-48 h-36 bg-gray-300"
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                className: "ml-2 rounded-md w-[64px] h-[24px] absolute top-1 left-1 bg-yellow-500"
                            }), (0, a.jsx)("span", {
                                className: "bg-emerald-700 px-2 py-1 text-white absolute top-1 right-1 rounded-md font-bold text-2xl",
                                children: (0, a.jsx)("div", {
                                    className: "w-16 h-8"
                                })
                            }), (0, a.jsx)("div", {
                                className: "flex justify-center items-center my-2 pt-2",
                                children: (0, a.jsx)("h5", {
                                    className: "w-3/4 h-8 bg-gray-300"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "py-1 w-full",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex items-center justify-between w-full",
                                    children: [(0, a.jsxs)("span", {
                                        children: [(0, a.jsx)("span", {
                                            className: "text-3xl font-bold text-green-600 mr-2",
                                            children: (0, a.jsx)("div", {
                                                className: "w-24 h-8 bg-gray-300"
                                            })
                                        }), (0, a.jsx)("span", {
                                            className: "text-base font-bold text-red-600 line-through",
                                            children: (0, a.jsx)("div", {
                                                className: "w-16 h-6 bg-gray-300"
                                            })
                                        })]
                                    }), (0, a.jsx)("span", {
                                        children: (0, a.jsx)("span", {
                                            className: "flex bg-gray-800 px-2 py-1 rounded-full overflow-hidden shadow",
                                            children: (0, a.jsx)("div", {
                                                className: "w-20 h-4"
                                            })
                                        })
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "flex justify-center items-center mt-3",
                                    children: (0, a.jsx)("a", {
                                        href: "#",
                                        className: "",
                                        children: (0, a.jsx)("button", {
                                            type: "button",
                                            className: "flex gap-3 font-semibold items-center justify-center rounded-md bg-slate-900 px-4 py-1 text-center text-md text-white hover:bg-gray-700",
                                            children: (0, a.jsx)("div", {
                                                className: "w-24 h-8"
                                            })
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "pt-2 text-sm text-gray-400 font-medium",
                                    children: (0, a.jsx)("h1", {
                                        className: "w-1/4 h-4 bg-gray-300"
                                    })
                                })]
                            })]
                        })
                    })
                }),
                i = s(1408),
                c = s(6346),
                d = e => {
                    let {
                        isLoading: t,
                        dealOfTheDay: s
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: "w-full bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-white mb-5 px-4 items-center ",
                        children: [(0, a.jsx)("div", {
                            className: "text-gray-800 text-center",
                            children: (0, a.jsx)("h1", {
                                className: " font-bold p-2 m-2 text-xl uppercase",
                                children: "Deal of the Day"
                            })
                        }), (0, a.jsx)("hr", {}), t ? (0, a.jsx)(n, {}) : void 0 === s || isNaN(s.offerPercent) ? (0, a.jsx)("div", {
                            className: "my-2 text-gray-600 text-center w-full font-semibold",
                            children: "No Deal Available"
                        }) : (0, a.jsx)("div", {
                            className: "my-3 relative mx-auto w-full shadow-md rounded-md bg-blue-700 pt-1",
                            children: (0, a.jsx)("div", {
                                className: "relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full",
                                children: (0, a.jsxs)("div", {
                                    className: "shadow p-4 rounded-md bg-white text-center pt-4 flex flex-wrap justify-center",
                                    children: [(0, a.jsx)("div", {
                                        className: "flex justify-center relative rounded-md border overflow-hidden h-fit",
                                        children: (0, a.jsx)("div", {
                                            className: "transition-transform duration-500 transform ease-in-out hover:scale-105 w-full bg-white",
                                            children: (0, a.jsx)("a", {
                                                href: s.productLink,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: (0, a.jsx)("img", {
                                                    src: s.imageLink,
                                                    alt: s.title,
                                                    className: "aspect-ratio"
                                                })
                                            })
                                        })
                                    }), (0, a.jsx)("span", {
                                        className: "absolute top-1 left-1",
                                        children: (0, a.jsx)(i.Z, {})
                                    }), (0, a.jsxs)("span", {
                                        className: "bg-emerald-700 px-2 py-1 text-white absolute top-1 right-1 rounded-md font-bold text-2xl",
                                        children: [Number(s.offerPercent), (0, a.jsx)("span", {
                                            className: "text-sm",
                                            children: "% OFF"
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "w-full flex justify-center items-center flex-wrap my-2 pt-2",
                                        children: (0, a.jsx)("h5", {
                                            className: "w-full text-xl text-start font-semibold leading-tight text-gray-900 line-clamp-2",
                                            children: s.title
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "py-1 w-full",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex items-center justify-between w-full",
                                            children: [(0, a.jsxs)("span", {
                                                children: [(0, a.jsxs)("span", {
                                                    className: "text-3xl font-bold text-green-600 mr-2",
                                                    children: ["₹", Number(s.offerPrice)]
                                                }), (0, a.jsxs)("span", {
                                                    className: "text-base font-bold text-red-600 line-through",
                                                    children: ["₹", Number(s.actualPrice)]
                                                })]
                                            }), (0, a.jsx)("span", {
                                                children: (0, a.jsx)("span", {
                                                    className: "flex bg-gray-800 px-2 py-1 rounded-full overflow-hidden shadow",
                                                    children: (0, a.jsx)("span", {
                                                        className: "flex items-center font-medium  text-gray-800",
                                                        children: (0, a.jsx)(l.Z, {
                                                            rating: s.rating
                                                        })
                                                    })
                                                })
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "flex justify-center items-center mt-3",
                                            children: (0, a.jsx)("a", {
                                                href: s.productLink,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: (0, a.jsxs)("button", {
                                                    type: "button",
                                                    className: "uppercase flex gap-3 font-semibold items-center justify-center rounded-md bg-slate-900 px-4 py-1 text-center text-md text-white hover:bg-gray-700",
                                                    children: ["Grab Now", (0, a.jsx)(r.rpH, {})]
                                                })
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "pt-2 text-sm text-gray-400 font-medium",
                                            children: (0, a.jsx)("h1", {
                                                children: (0, c.Z)(Date.parse(s.publishedAt))
                                            })
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                }
        },
        8082: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return d
                }
            });
            var a = s(9268),
                r = s(1033),
                l = s(8744),
                n = s(1408),
                i = e => {
                    let {
                        bestDeal: t
                    } = e;
                    return (0, a.jsx)("div", {
                        className: "my-3 relative mx-auto w-full shadow-md rounded-md bg-amber-600 pt-1",
                        children: (0, a.jsx)("div", {
                            className: "relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full",
                            children: (0, a.jsxs)("div", {
                                className: "shadow rounded-md bg-white",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [(0, a.jsx)("div", {
                                        className: "px-2 pt-4 pb-1 w-1/3",
                                        children: (0, a.jsxs)("a", {
                                            href: t.productLink,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: [(0, a.jsxs)("span", {
                                                className: "absolute inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full uppercase",
                                                children: [Number(t.offerPercent), "% off"]
                                            }), (0, a.jsx)("img", {
                                                src: t.imageLink,
                                                alt: t.title,
                                                className: "h-full w-full"
                                            })]
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "px-2 pt-4 pb-2 w-2/3",
                                        children: [(0, a.jsx)("h2", {
                                            className: "text-md text-gray-800 line-clamp-2 leading-tight font-bold",
                                            children: t.title
                                        }), (0, a.jsxs)("div", {
                                            className: "flex justify-between pt-2 flex-wrap",
                                            children: [(0, a.jsx)("span", {
                                                children: (0, a.jsx)("span", {
                                                    className: "flex bg-gray-800 px-2 py-1 rounded-full overflow-hidden shadow",
                                                    children: (0, a.jsx)("span", {
                                                        className: "flex items-center font-medium  text-gray-800",
                                                        children: (0, a.jsx)(l.Z, {
                                                            rating: 5
                                                        })
                                                    })
                                                })
                                            }), (0, a.jsx)(n.Z, {})]
                                        }), (0, a.jsxs)("div", {
                                            className: "w-full mt-2 mb-1 flex justify-between flex-wrap",
                                            children: [(0, a.jsx)("div", {
                                                className: "flex flex-wrap text-green-600 justify-center items-center",
                                                children: (0, a.jsx)("div", {
                                                    className: " flex items-center justify-center text-2xl",
                                                    children: (0, a.jsxs)("span", {
                                                        className: "mt-2 xl:mt-0 font-bold",
                                                        children: ["₹", t.offerPrice]
                                                    })
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "flex flex-wrap xl:flex-row text-gray-500 justify-center items-center",
                                                children: (0, a.jsx)("div", {
                                                    className: "line-through flex items-center text-sm ",
                                                    children: (0, a.jsxs)("span", {
                                                        className: "mt-2 xl:mt-0 font-bold opacity-80",
                                                        children: ["₹", t.actualPrice]
                                                    })
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "flex justify-end px-2 pb-3 pt-0",
                                    children: (0, a.jsx)("a", {
                                        href: t.productLink,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, a.jsxs)("button", {
                                            className: "rounded-md uppercase bg-blue-700 text-white px-2 py-1 font-semibold flex gap-2 justify-center items-center hover:opacity-80",
                                            children: [(0, a.jsx)(r.nxQ, {}), "Buy Now"]
                                        })
                                    })
                                })]
                            })
                        })
                    })
                },
                c = () => (0, a.jsx)("div", {
                    className: "my-3 relative mx-auto w-full shadow-md rounded-md bg-amber-600 pt-1 animate-pulse",
                    children: (0, a.jsx)("div", {
                        className: "relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full",
                        children: (0, a.jsxs)("div", {
                            className: "shadow rounded-md bg-white",
                            children: [(0, a.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, a.jsx)("div", {
                                    className: "px-2 pt-4 pb-1 w-1/3",
                                    children: (0, a.jsx)("div", {
                                        className: "aspect-ratio w-full h-0 bg-gray-300"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "px-2 pt-4 pb-2 w-2/3",
                                    children: [(0, a.jsx)("h2", {
                                        className: "text-md text-gray-800 line-clamp-2 leading-tight font-bold bg-gray-300 h-12 w-4/5"
                                    }), (0, a.jsxs)("div", {
                                        className: "flex justify-between pt-2",
                                        children: [(0, a.jsx)("span", {
                                            children: (0, a.jsx)("span", {
                                                className: "flex bg-gray-800 px-2 py-1 rounded-full overflow-hidden shadow",
                                                children: (0, a.jsx)("span", {
                                                    className: "flex items-center font-medium text-gray-800",
                                                    children: (0, a.jsx)("div", {
                                                        className: "w-20 h-4"
                                                    })
                                                })
                                            })
                                        }), (0, a.jsx)("span", {
                                            className: "ml-2 rounded-md w-[64px] h-[24px] bg-yellow-500"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "w-full mt-2 mb-1 flex gap-3",
                                        children: [(0, a.jsx)("div", {
                                            className: "flex flex-wrap text-green-600 justify-center items-center",
                                            children: (0, a.jsx)("div", {
                                                className: "flex items-center justify-center text-2xl",
                                                children: (0, a.jsx)("div", {
                                                    className: "w-16 h-6 bg-gray-300"
                                                })
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "flex flex-wrap xl:flex-row text-gray-500 justify-center items-center",
                                            children: (0, a.jsx)("div", {
                                                className: "line-through flex items-center text-sm ",
                                                children: (0, a.jsx)("div", {
                                                    className: "w-12 h-4 bg-gray-300"
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "flex justify-end px-2 pb-3 pt-0",
                                children: (0, a.jsx)("button", {
                                    className: "rounded-md uppercase bg-blue-700 text-white px-2 py-1 font-semibold flex gap-2 justify-center items-center hover:opacity-80",
                                    children: (0, a.jsx)("div", {
                                        className: "w-24 h-8"
                                    })
                                })
                            })]
                        })
                    })
                }),
                d = e => {
                    let {
                        isLoading: t,
                        bestDeals: s
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: "w-full bg-white border border-gray-200 rounded-lg shadow-xl mb-5 px-4",
                        children: [(0, a.jsx)("h1", {
                            className: "text-gray-800 text-center font-bold p-2 m-2 text-xl uppercase",
                            children: "Best Deals"
                        }), (0, a.jsx)("hr", {}), (0, a.jsx)("div", {
                            className: "grid grid-cols-1 gap-4 lg:gap-0 sm:grid-cols-2 lg:grid-cols-1",
                            children: t ? Array.from({
                                length: 6
                            }).map((e, t) => (0, a.jsx)(c, {}, "skeleton_".concat(t))) : 0 === s.length ? (0, a.jsx)("div", {
                                className: "my-2 text-gray-600 text-center w-full font-semibold",
                                children: "No Deals Available"
                            }) : null == s ? void 0 : s.map(e => (0, a.jsx)(i, {
                                bestDeal: e
                            }, e.id))
                        })]
                    })
                }
        },
        8744: function(e, t, s) {
            var a = s(9268),
                r = s(8136);
            t.Z = e => {
                let {
                    rating: t
                } = e, s = Math.floor(t), l = t % 1 != 0;
                return "number" != typeof t || isNaN(t) || t <= 0 ? null : (0, a.jsxs)("div", {
                    className: "flex justify-around w-full",
                    children: [
                        [...Array(s)].map((e, t) => (0, a.jsx)(r.kRm, {
                            className: "h-3 w-3 text-yellow-400",
                            "aria-hidden": "true"
                        }, t)), l && (0, a.jsx)(r.fXH, {
                            className: "h-3 w-3 text-yellow-400",
                            "aria-hidden": "true"
                        }), [...Array(5 - s - (l ? 1 : 0))].map((e, t) => (0, a.jsx)(r.kRm, {
                            className: "h-3 w-3 text-gray-300",
                            "aria-hidden": "true"
                        }, t + s + (l ? 1 : 0)))
                    ]
                })
            }
        },
        1408: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return r
                }
            });
            var a = s(9268);

            function r() {
                return (0, a.jsx)("img", {
                    height: 24,
                    width: 64,
                    src: "/amazon.png",
                    className: "ml-2 rounded-md",
                    alt: "Amazon"
                })
            }
        },
        222: function(e, t, s) {
            s.d(t, {
                BJ: function() {
                    return l
                },
                Nk: function() {
                    return c
                },
                XL: function() {
                    return d
                },
                he: function() {
                    return i
                },
                qs: function() {
                    return n
                }
            });
            var a = s(4214);
            let r = "https://dukaan-backend.dukaan.store",
                l = async (e, t, s, l) => {
                    try {
                        let n = await a.Z.get("".concat(r, "/deals/").concat(s, "?page=").concat(l));
                        e(n.data.deals), t(n.data.totalPages)
                    } catch (e) {
                        console.error("Error fetching deals data:", e)
                    }
                },
                n = async (e, t) => {
                    try {
                        let s = await a.Z.get("".concat(r, "/best-deals/").concat(t));
                        e(s.data.bestdeals)
                    } catch (e) {
                        console.error("Error fetching best-deals data:", e)
                    }
                },
                i = async (e, t) => {
                    try {
                        let s = await a.Z.get("".concat(r, "/dealoftheday/").concat(t));
                        e(s.data.dealOfTheDay[0])
                    } catch (e) {
                        console.error("Error fetching deal of the day data:", e)
                    }
                },
                c = async (e, t) => {
                    try {
                        let s = await a.Z.get("".concat(r, "/sectionData/").concat(t));
                        e(s.data.data)
                    } catch (e) {
                        console.error("Error fetching section data:", e)
                    }
                },
                d = async (e, t) => {
                    try {
                        let s = await a.Z.get("".concat(r, "/banner/").concat(t));
                        e(s.data.data[0])
                    } catch (e) {
                        console.error("Error fetching banner data:", e)
                    }
                }
        },
        3081: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return a
                }
            });

            function a(e) {
                switch (e) {
                    case "clothing":
                        return "bg-red-600";
                    case "tech":
                        return "bg-blue-500";
                    case "fandom":
                        return "bg-green-500";
                    case "travel":
                        return "bg-yellow-500";
                    default:
                        return "bg-gray-700"
                }
            }
        },
        6346: function(e, t, s) {
            function a(e) {
                let t = new Date(e),
                    s = t.getDate(),
                    a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][t.getMonth()];
                t.getFullYear();
                let r = String(t.getUTCHours() + 5).padStart(2, "0"),
                    l = String(t.getUTCMinutes()).padStart(2, "0"),
                    n = function(e) {
                        if (e >= 11 && e <= 13) return "th";
                        switch (e % 10) {
                            case 1:
                                return "st";
                            case 2:
                                return "nd";
                            case 3:
                                return "rd";
                            default:
                                return "th"
                        }
                    }(s),
                    i = "".concat(s).concat(n, " ").concat(a, ", ").concat(r, ":").concat(l, " IST");
                return i
            }
            s.d(t, {
                Z: function() {
                    return a
                }
            })
        }
    }
]);