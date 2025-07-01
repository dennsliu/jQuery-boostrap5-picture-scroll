"use strict"; (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2289], {
    31164 : function(t, n, e) {
        e.d(n, {
            Z: function() {
                return c
            }
        });
        var o = e(85893),
        i = e(11942);
        function c(t) {
            var n = t.text,
            e = t.className,
            c = t.color,
            a = t.size,
            r = t.fallbackSize;
            return n ? (0, o.jsx)("pre", {
                className: (0, i.AK)((0, i.e0)(a, r), e),
                style: {
                    color: c
                },
                children: n
            }) : null
        }
    },
    15972 : function(t, n, e) {
        e.d(n, {
            Z: function() {
                return c
            }
        });
        var o = e(85893),
        i = e(11942);
        function c(t) {
            var n = t.text,
            e = t.className,
            c = t.color,
            a = t.size,
            r = t.fallbackSize,
            l = t.isSeoHeadline;
            if (!n) return null;
            var d = l ? "h1": "h2";
            return (0, o.jsx)(d, {
                className: (0, i.AK)("break-word", (0, i.Ae)(a, r), e),
                style: {
                    color: c
                },
                children: n
            })
        }
    },
    14910 : function(t, n, e) {
        e.d(n, {
            Z: function() {
                return c
            }
        });
        var o = e(85893),
        i = e(11942);
        function c(t) {
            var n = t.text,
            e = t.className,
            c = t.color,
            a = t.style;
            if (!n) return null;
            return (0, o.jsx)("p", {
                className: (0, i.AK)("w-max max-w-full body-small !font-semibold", e, "badge" === a ? "px-3 py-1 rounded-full": ""),
                style: function() {
                    var t = {
                        color: c
                    };
                    return "badge" === a && (t.backgroundColor = (0, i.mR)(c, 10)),
                    t
                } (),
                children: n
            })
        }
    },
    60546 : function(t, n, e) {
        e.d(n, {
            OC: function() {
                return d
            }
        });
        var o = e(85893),
        i = e(67294),
        c = e(62246),
        a = e(4433),
        r = [{
            id: "slantLeft",
            getPath: function(t, n) {
                return "M".concat(t, " 0L-0 ").concat(n)
            }
        },
        {
            id: "slantRight",
            getPath: function(t, n) {
                return "M0 0L".concat(t, " ").concat(n)
            }
        },
        {
            id: "pointUp",
            getPath: function(t, n) {
                return "M0 0".concat(n, "L").concat(t / 2, " 0L").concat(t, " ").concat(n, "L").concat(1.5 * t, " 0V0")
            }
        },
        {
            id: "pointDown",
            getPath: function(t, n) {
                return "M0 0L".concat(t / 2, " ").concat(n, "L").concat(t, " 0")
            }
        },
        {
            id: "curveUp",
            getPath: function(t, n) {
                return "M0 0 C".concat(t / 2, " ").concat(n, " ").concat(t - t / 2, " ").concat(n, " ").concat(t, " 0")
            }
        },
        {
            id: "curveDown",
            getPath: function(t, n) {
                return "M0 ".concat(n, " C").concat(t / 2, " 0 ").concat(t - t / 2, " 0 ").concat(t, " ").concat(n)
            }
        },
        {
            id: "waveLeft",
            getPath: function(t, n) {
                return "M0 0C0 0 ".concat(.2023 * t, " ").concat(n, " ").concat(.3333 * t, " ").concat(n, "C").concat(.4681 * t, " ").concat(n, " ").concat(.5318 * t, " 0 ").concat(.6667 * t, " 0C").concat(.8015 * t, " 0 ").concat(t, " ").concat(n, " ").concat(t, " ").concat(n)
            }
        },
        {
            id: "waveRight",
            getPath: function(t, n) {
                return "M".concat(t, " 0C").concat(t, " 0 ").concat(.8 * t, " ").concat(n, " ").concat(.666 * t, " ").concat(n, "C").concat(.547 * t, " ").concat(n, " ").concat(.483 * t, " 0 ").concat(.333 * t, " 0C").concat(.184 * t, " 0 -0.00012207 ").concat(n, " -0.00012207 ").concat(n)
            }
        },
        {
            id: "jaggedLeft",
            getPath: function(t, n) {
                return "M0 0L".concat(t / 3, " ").concat(n, "L").concat(t / 1.5, " 0L").concat(t, " ").concat(n)
            }
        },
        {
            id: "jaggedRight",
            getPath: function(t, n) {
                return "M".concat(t, " 0L").concat(t / 1.5, " ").concat(n, "L").concat(t / 3, " 0L0 ").concat(n)
            }
        },
        {
            id: "swoopLeft",
            getPath: function(t, n) {
                return "M0 ".concat(n, "C").concat(t, " 0 ").concat(2 * t, " 0 ").concat(2 * t, " 0")
            }
        },
        {
            id: "swoopRight",
            getPath: function(t, n) {
                return "M".concat(t, " ").concat(n, "C").concat(t / 2, " 0 0 0 0 0")
            }
        },
        {
            id: "none",
            getPath: function(t, n) {
                return "M0 ".concat(n, "H").concat(t)
            }
        }],
        l = function(t) {
            var n = t.width,
            e = t.shape,
            i = t.strokeWidth,
            c = t.strokeColor,
            l = t.strokeType,
            d = r.find((function(t) {
                return t.id === (null !== e && void 0 !== e ? e: "none")
            })),
            u = Math.floor(n),
            s = "none" === d.id ? Math.floor(i) : Math.floor(u / a.c8),
            v = d.getPath(u, s);
            return (0, o.jsx)("svg", {
                className: "absolute bottom-0 left-0 z-50 overflow-visible",
                fill: "transparent",
                width: u,
                height: s,
                viewBox: "0 0 ".concat(u, " ").concat(s),
                children: (0, o.jsx)("path", {
                    d: v,
                    stroke: c,
                    strokeWidth: i,
                    strokeDasharray: "dashed" === l ? "40 20": void 0
                })
            })
        },
        d = function(t) {
            var n = t.contentRef,
            e = t.border,
            a = t.sectionDivider,
            r = e || {},
            d = r.type,
            u = r.width,
            s = r.color,
            v = (0, i.useState)(0),
            f = v[0],
            h = v[1],
            m = (0, i.useCallback)((function() {
                var t;
                h(null !== (t = n.current.offsetWidth) && void 0 !== t ? t: 0)
            }), [n]);
            return (0, c.Z)(m, e ? n: null),
            e ? (0, o.jsx)(l, {
                width: f,
                shape: a,
                strokeType: d,
                strokeWidth: u,
                strokeColor: s
            }) : null
        }
    },
    9746 : function(t, n, e) {
        e.d(n, {
            f: function() {
                return u
            }
        });
        var o = e(14251),
        i = e(52875),
        c = e(85893),
        a = e(11942),
        r = e(4433),
        l = e(67294),
        d = e(60546),
        u = (0, l.forwardRef)((function(t, n) {
            var e = t.children,
            l = t.block,
            u = t.textColor,
            s = t.headerHeight,
            v = t.stickyHeaderOffsetStyle,
            f = t.id,
            h = t.noPadding,
            m = t.minHeight,
            g = t.border,
            x = t.divider,
            b = t.noVerticalAlign,
            p = 1 === (null === l || void 0 === l ? void 0 : l.idx) && (null === l || void 0 === l ? void 0 : l.combineWithHeader);
            return (0, c.jsxs)("section", {
                className: "relative",
                children: [(0, c.jsx)("div", {
                    ref: n,
                    id: f,
                    "data-text-color": u,
                    className: (0, a.AK)("flex relative break-word", h || b ? "": (0, a.A2)(null === l || void 0 === l ? void 0 : l.verticalAlign)),
                    style: (0, i.Z)((0, o.Z)({},
                    (null === l || void 0 === l ? void 0 : l.combineWithHeader) ? {
                        marginTop: "-".concat(s, "px"),
                        paddingTop: h ? "": "".concat(s, "px")
                    }: {},
                    (0, r.$h)(l), v), {
                        minHeight: m
                    }),
                    "data-combine-with-header": p,
                    children: e
                }), g && (0, c.jsx)(d.OC, {
                    contentRef: n,
                    border: g,
                    sectionDivider: x
                })]
            })
        }))
    },
    32289 : function(t, n, e) {
        e.r(n),
        e.d(n, {
        default:
            function() {
                return p
            }
        });
        var o = e(14251),
        i = e(52875),
        c = e(85893),
        a = e(67294),
        r = e(11942),
        l = e(29260),
        d = e.n(l),
        u = e(399),
        s = e(52077),
        v = e(21123),
        f = e(41370),
        h = e(4433),
        m = e(9746),
        g = e(14910),
        x = e(31164),
        b = e(15972);
        function p(t) {
            var n, e, l = t.id,
            p = t.block,
            w = t.website,
            j = t.previousBlock,
            k = t.isSeoHeadline,
            y = t.stickyHeaderOffsetStyle,
            H = (0, a.useState)("#000000"),
            C = H[0],
            L = H[1],
            N = (0, a.useState)("#000000"),
            S = N[0],
            A = N[1],
            P = (0, a.useState)(0),
            z = P[0],
            M = P[1],
            Z = (0, a.useState)([]),
            R = Z[0],
            W = Z[1],
            E = (0, u.Z)(p),
            K = E.minHeight,
            T = E.headerHeight,
            O = (0, a.useRef)(null),
            D = null === p || void 0 === p ? void 0 : p.tagline,
            B = null === p || void 0 === p ? void 0 : p.headline,
            I = null === p || void 0 === p ? void 0 : p.content,
            U = (null === p || void 0 === p || null === (n = p.buttons) || void 0 === n ? void 0 : n.items) || [],
            _ = null === p || void 0 === p || null === (e = p.buttons) || void 0 === e ? void 0 : e.enabled,
            V = (null === p || void 0 === p ? void 0 : p.align) || "left",
            q = null === p || void 0 === p ? void 0 : p.animation,
            F = null === w || void 0 === w ? void 0 : w.animation,
            Q = null === p || void 0 === p ? void 0 : p.divider,
            X = null === p || void 0 === p ? void 0 : p.border,
            Y = 1 === (null === p || void 0 === p ? void 0 : p.idx) && !!(null === p || void 0 === p ? void 0 : p.combineWithHeader);
            return (0, a.useEffect)((function() {
                if (p) {
                    var t = (p.pictures || []).map((function(t) {
                        var n = (0, r.QW)(t.media);
                        return n ? (0, i.Z)((0, o.Z)({},
                        t), {
                            imageURL: n
                        }) : null
                    })).filter((function(t) {
                        return null !== t
                    }));
                    W(t)
                }
            }), [p]),
            (0, a.useEffect)((function() {
                if (R.length > 1) {
                    var t = setInterval((function() {
                        M((function(t) {
                            return (t + 1) % R.length
                        }))
                    }), 5e3);
                    return function() {
                        return clearInterval(t)
                    }
                }
            }), [R]),
            (0, c.jsxs)(m.f, {
                ref: O,
                block: p,
                textColor: C,
                headerHeight: T,
                id: l,
                minHeight: K,
                stickyHeaderOffsetStyle: y,
                divider: Q,
                border: X,
                children: [(0, c.jsxs)("div", {
                    className: (0, r.AK)("flex w-full break-word", (0, r.A2)(null === p || void 0 === p ? void 0 : p.verticalAlign)),
                    children: [(null === R || void 0 === R ? void 0 : R.length) > 0 && (0, c.jsx)("div", {
                        className: "absolute inset-0 z-5",
                        children: R.map((function(t, n) {
                            return (0, c.jsx)("div", {
                                className: (0, r.AK)("absolute inset-0 transition-all duration-700", n === z ? "z-5 opacity-100": "z-0 opacity-0"),
                                children: (0, c.jsx)(d(), {
                                    unoptimized: !0,
                                    src: t.imageURL,
                                    layout: "fill",
                                    objectFit: "cover",
                                    alt: t.altText || t.media.description || t.media.author,
                                    objectPosition: "".concat((null === t || void 0 === t ? void 0 : t.positionX) || "center", " ").concat((null === t || void 0 === t ? void 0 : t.positionY) || "center"),
                                    className: "w-full h-full object-center object-cover"
                                })
                            },
                            "carousel-".concat(null === p || void 0 === p ? void 0 : p.idx, "-picture-").concat(n))
                        }))
                    }), (0, c.jsx)(v.Z, {
                        block: p,
                        website: w,
                        setTextColor: L,
                        setAccentColor: A,
                        backgroundPictures: R
                    }), (0, c.jsx)("div", {
                        className: (0, r.AK)("relative z-10 container mx-auto px-5 md:px-6 transition-all duration-300", (0, r.rE)(null === p || void 0 === p ? void 0 : p.spacing)),
                        children: (0, c.jsx)(f.Z, {
                            settings: q,
                            globalSettings: F,
                            children: (0, c.jsxs)("div", {
                                className: (0, r.AK)("flex flex-col gap-4 w-full max-w-2xl",
                                function() {
                                    switch (V) {
                                    case "center":
                                        return "items-center text-center mx-auto";
                                    case "right":
                                        return "items-end text-right ml-auto";
                                    default:
                                        return "items-start"
                                    }
                                } ()),
                                children: [(0, c.jsx)(g.Z, {
                                    text: D,
                                    color: S,
                                    style: null === p || void 0 === p ? void 0 : p.taglineStyle
                                }), (0, c.jsx)(b.Z, {
                                    text: B,
                                    size: null === p || void 0 === p ? void 0 : p.headingTextStyle,
                                    color: C,
                                    isSeoHeadline: k
                                }), (0, c.jsx)(x.Z, {
                                    text: I,
                                    size: null === p || void 0 === p ? void 0 : p.bodyTextStyle,
                                    color: C
                                }), (null === U || void 0 === U ? void 0 : U.length) > 0 && _ && (0, c.jsx)("div", {
                                    className: (0, r.AK)("flex md:inline-flex flex-col md:flex-row gap-4 w-full md:w-max", D || B || I ? "mt-4": ""),
                                    children: null === U || void 0 === U ? void 0 : U.map((function(t, n) {
                                        return (0, c.jsx)(s.Z, {
                                            button: t,
                                            block: p,
                                            website: w,
                                            className: "w-full md:w-max"
                                        },
                                        "banner-".concat(null === p || void 0 === p ? void 0 : p.idx, "-button-").concat(n))
                                    }))
                                }), (null === R || void 0 === R ? void 0 : R.length) > 1 && (0, c.jsx)("div", {
                                    className: "flex items-center gap-2 mt-12",
                                    children: R.map((function(t, n) {
                                        return (0, c.jsx)("div", {
                                            className: (0, r.AK)("h-2 rounded-full transition-all duration-300", n === z ? "w-6": "w-2 opacity-20"),
                                            style: {
                                                backgroundColor: C
                                            }
                                        },
                                        "carousel-".concat(null === p || void 0 === p ? void 0 : p.idx, "-dot-").concat(n))
                                    }))
                                })]
                            })
                        })
                    })]
                }), (0, c.jsx)(h.iz, {
                    contentRef: O,
                    divider: Q,
                    previousDivider: null === j || void 0 === j ? void 0 : j.divider,
                    border: X,
                    previousBorder: null === j || void 0 === j ? void 0 : j.border,
                    dividerUniqueId: "".concat(l, "-").concat(Q),
                    combinedWithHeaderOffset: Y ? T: 0
                })]
            })
        }
    },
    399 : function(t, n, e) {
        e.d(n, {
            Z: function() {
                return a
            }
        });
        var o = e(67294),
        i = "website-header";
        function c(t) {
            var n;
            return t && 1 === t.idx ? (null === (n = null === document || void 0 === document ? void 0 : document.getElementById(i)) || void 0 === n ? void 0 : n.offsetHeight) || 80 : 0
        }
        function a(t) {
            var n, e, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = (0, o.useState)(0),
            l = r[0],
            d = r[1],
            u = (0, o.useState)([0, 0]),
            s = u[0],
            v = u[1],
            f = i,
            h = 1 === (null === t || void 0 === t ? void 0 : t.idx) && (null === t || void 0 === t ? void 0 : t.combineWithHeader),
            m = a.minHeightScreenWhenCombined;
            return (0, o.useEffect)((function() {
                var n, e = function() {
                    v([window.innerWidth, window.innerHeight])
                };
                try {
                    var o = document.getElementById(f);
                    n = new ResizeObserver((function() {
                        t && d(c(t))
                    })),
                    o && n.observe(o)
                } catch(i) {}
                return window.addEventListener("resize", e),
                e(),
                function() {
                    window.removeEventListener("resize", e),
                    n && n.disconnect()
                }
            }), []),
            (0, o.useEffect)((function() {
                t && d(c(t))
            }), [t, s]),
            {
                minHeight: (null === t || void 0 === t || null === (n = t.spacing) || void 0 === n ? void 0 : n.minHeight) ? "calc(".concat("min-h-screen" === (null === t || void 0 === t || null === (e = t.spacing) || void 0 === e ? void 0 : e.minHeight) || m && h ? "100vh": "0px", " - ").concat((null === t || void 0 === t ? void 0 : t.combineWithHeader) ? 0 : l, "px)") : "0px",
                headerHeight: l
            }
        }
    }
}]);