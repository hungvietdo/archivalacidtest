! function() {
      Function && Function.prototype && Function.prototype.bind && (/MSIE [678]/.test(navigator.userAgent) || (window.__twttr && window.__twttr.widgets && window.__twttr.widgets.loaded && window.twttr.widgets.load && window.twttr.widgets.load(), window.__twttr && window.__twttr.widgets && window.__twttr.widgets.init || ! function(t) {
        function e(n) {
            if (r[n]) return r[n].exports;
            var i = r[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
        }
        var n = window.__twttrll;
        window.__twttrll = function(r, o) {
            for (var a, s, u = 0, c = []; u < r.length; u++) s = r[u], i[s] && c.push.apply(c, i[s]), i[s] = 0;
            for (a in o) t[a] = o[a];
            for (n && n(r, o); c.length;) c.shift().call(null, null, e)
        };
        var r = {},
            i = {
                0: 0
            };
        return e.e = function(t, e) {}, e.e = function(t, n) {
            if (0 === i[t]) return n.call(null, null, e);
            if (void 0 !== i[t]) i[t].push(n);
            else {
                i[t] = [n];
                var r = document.getElementsByTagName("head")[0],
                    o = document.createElement("script");
                o.type = "text/javascript", o.charset = "utf-8", o.async = !0, o.onerror = function() {
                    var e = i[t];
                    for (o.onerror = null, delete i[t]; e.length;) e.shift().call(null, new Error("failed to load chunk"))
                }, o.src = e.p + "js/" + ({
                    1: "dm_button",
                    2: "button",
                    3: "grid",
                    4: "moment",
                    5: "periscope_on_air",
                    6: "timeline",
                    7: "tweet"
                }[t] || t) + "." + {
                    1: "0c55b2e1f542c00ec0fdd7a5d4c7a630",
                    2: "57411deb997a43b27baa13b432c7631e",
                    3: "ab88ed764ffce547eabc57a0bce3d6de",
                    4: "7ce0e181e3f299726f1d8732e8d9ac58",
                    5: "dd56e67a5f5190c55d0c554ab6730d3b",
                    6: "49f19f9e34b1f8ffe443c6d5e80fea48",
                    7: "08991409fe8c7862c0aa5cc77e44569a"
                }[t] + ".js", r.appendChild(o)
            }
        }, e.m = t, e.c = r, e.p = "https://platform.twitter.com/", e(0)
    }([function(t, e, n) {
        var r, i = n(1),
            o = n(9),
            a = n(12),
            s = n(14),
            u = n(16),
            s = n(14),
            c = n(17),
            d = n(31),
            f = n(29),
            l = n(41),
            h = n(246),
            p = n(34),
            m = n(257),
            v = n(258),
            g = "_e";
        s.set("widgets.init", !0), u.set("init", !0), v(), r = new i, a.exposeReadyPromise(r.promise, u.base, g), u.set("widgets", h), u.set("widgets.load", l.load), u.set("events", f), s.init("host", "platform.twitter.com"), m(function() {
            r.resolve(u.base), c.attachTo(o), d.start("widgets-js-load"), l.loadPage().then(function() {
                d.endAndTrack("render", "widgets-js-load", "page", {
                    widget_origin: p.rootDocumentLocation(),
                    widget_frame: p.isFramed() && p.currentDocumentLocation()
                })
            })
        })
    }, function(t, e, n) {
        function r() {
            var t = this;
            this.promise = new i(function(e, n) {
                t.resolve = e, t.reject = n
            })
        }
        var i = n(2);
        t.exports = r
    }, function(t, e, n) {
        var r = n(3).Promise,
            i = n(7),
            o = n(8);
        t.exports = o.hasPromiseSupport() ? i.Promise : r
    }, function(t, e, n) {
        var r;
        (function(t) {
            /*!
             * @overview es6-promise - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
             * @version   2.3.0
             */
            (function() {
                "use strict";

                function i(t) {
                    return "function" == typeof t || "object" == typeof t && null !== t
                }

                function o(t) {
                    return "function" == typeof t
                }

                function a(t) {
                    return "object" == typeof t && null !== t
                }

                function s(t) {
                    V = t
                }

                function u(t) {
                    K = t
                }

                function c() {
                    var t = process.nextTick,
                        e = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
                    return Array.isArray(e) && "0" === e[1] && "10" === e[2] && (t = setImmediate),
                        function() {
                            t(p)
                        }
                }

                function d() {
                    return function() {
                        H(p)
                    }
                }

                function f() {
                    var t = 0,
                        e = new Z(p),
                        n = document.createTextNode("");
                    return e.observe(n, {
                            characterData: !0
                        }),
                        function() {
                            n.data = t = ++t % 2
                        }
                }

                function l() {
                    var t = new MessageChannel;
                    return t.port1.onmessage = p,
                        function() {
                            t.port2.postMessage(0)
                        }
                }

                function h() {
                    return function() {
                        setTimeout(p, 1)
                    }
                }

                function p() {
                    for (var t = 0; t < G; t += 2) {
                        var e = et[t],
                            n = et[t + 1];
                        e(n), et[t] = void 0, et[t + 1] = void 0
                    }
                    G = 0
                }

                function m() {
                    try {
                        var t = n(5);
                        return H = t.runOnLoop || t.runOnContext, d()
                    } catch (t) {
                        return h()
                    }
                }

                function v() {}

                function g() {
                    return new TypeError("You cannot resolve a promise with itself")
                }

                function y() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function w(t) {
                    try {
                        return t.then
                    } catch (t) {
                        return ot.error = t, ot
                    }
                }

                function b(t, e, n, r) {
                    try {
                        t.call(e, n, r)
                    } catch (t) {
                        return t
                    }
                }

                function _(t, e, n) {
                    K(function(t) {
                        var r = !1,
                            i = b(n, e, function(n) {
                                r || (r = !0, e !== n ? A(t, n) : T(t, n))
                            }, function(e) {
                                r || (r = !0, I(t, e))
                            }, "Settle: " + (t._label || " unknown promise"));
                        !r && i && (r = !0, I(t, i))
                    }, t)
                }

                function E(t, e) {
                    e._state === rt ? T(t, e._result) : e._state === it ? I(t, e._result) : P(e, void 0, function(e) {
                        A(t, e)
                    }, function(e) {
                        I(t, e)
                    })
                }

                function x(t, e) {
                    if (e.constructor === t.constructor) E(t, e);
                    else {
                        var n = w(e);
                        n === ot ? I(t, ot.error) : void 0 === n ? T(t, e) : o(n) ? _(t, e, n) : T(t, e)
                    }
                }

                function A(t, e) {
                    t === e ? I(t, g()) : i(e) ? x(t, e) : T(t, e)
                }

                function C(t) {
                    t._onerror && t._onerror(t._result), S(t)
                }

                function T(t, e) {
                    t._state === nt && (t._result = e, t._state = rt, 0 !== t._subscribers.length && K(S, t))
                }

                function I(t, e) {
                    t._state === nt && (t._state = it, t._result = e, K(C, t))
                }

                function P(t, e, n, r) {
                    var i = t._subscribers,
                        o = i.length;
                    t._onerror = null, i[o] = e, i[o + rt] = n, i[o + it] = r, 0 === o && t._state && K(S, t)
                }

                function S(t) {
                    var e = t._subscribers,
                        n = t._state;
                    if (0 !== e.length) {
                        for (var r, i, o = t._result, a = 0; a < e.length; a += 3) r = e[a], i = e[a + n], r ? N(n, r, i, o) : i(o);
                        t._subscribers.length = 0
                    }
                }

                function R() {
                    this.error = null
                }

                function j(t, e) {
                    try {
                        return t(e)
                    } catch (t) {
                        return at.error = t, at
                    }
                }

                function N(t, e, n, r) {
                    var i, a, s, u, c = o(n);
                    if (c) {
                        if (i = j(n, r), i === at ? (u = !0, a = i.error, i = null) : s = !0, e === i) return void I(e, y())
                    } else i = r, s = !0;
                    e._state !== nt || (c && s ? A(e, i) : u ? I(e, a) : t === rt ? T(e, i) : t === it && I(e, i))
                }

                function k(t, e) {
                    try {
                        e(function(e) {
                            A(t, e)
                        }, function(e) {
                            I(t, e)
                        })
                    } catch (e) {
                        I(t, e)
                    }
                }

                function L(t, e) {
                    var n = this;
                    n._instanceConstructor = t, n.promise = new t(v), n._validateInput(e) ? (n._input = e, n.length = e.length, n._remaining = e.length, n._init(), 0 === n.length ? T(n.promise, n._result) : (n.length = n.length || 0, n._enumerate(), 0 === n._remaining && T(n.promise, n._result))) : I(n.promise, n._validationError())
                }

                function O(t) {
                    return new st(this, t).promise
                }

                function z(t) {
                    function e(t) {
                        A(i, t)
                    }

                    function n(t) {
                        I(i, t)
                    }
                    var r = this,
                        i = new r(v);
                    if (!Q(t)) return I(i, new TypeError("You must pass an array to race.")), i;
                    for (var o = t.length, a = 0; i._state === nt && a < o; a++) P(r.resolve(t[a]), void 0, e, n);
                    return i
                }

                function D(t) {
                    var e = this;
                    if (t && "object" == typeof t && t.constructor === e) return t;
                    var n = new e(v);
                    return A(n, t), n
                }

                function F(t) {
                    var e = this,
                        n = new e(v);
                    return I(n, t), n
                }

                function B() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function M() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function q(t) {
                    this._id = lt++, this._state = void 0, this._result = void 0, this._subscribers = [], v !== t && (o(t) || B(), this instanceof q || M(), k(this, t))
                }

                function U() {
                    var t;
                    if ("undefined" != typeof global) t = global;
                    else if ("undefined" != typeof self) t = self;
                    else try {
                        t = Function("return this")()
                    } catch (t) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var e = t.Promise;
                    e && "[object Promise]" === Object.prototype.toString.call(e.resolve()) && !e.cast || (t.Promise = ht)
                }
                var W;
                W = Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };
                var H, V, $, Q = W,
                    G = 0,
                    K = ({}.toString, function(t, e) {
                        et[G] = t, et[G + 1] = e, G += 2, 2 === G && (V ? V(p) : $())
                    }),
                    J = "undefined" != typeof window ? window : void 0,
                    Y = J || {},
                    Z = Y.MutationObserver || Y.WebKitMutationObserver,
                    X = "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                    tt = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    et = new Array(1e3);
                $ = X ? c() : Z ? f() : tt ? l() : void 0 === J ? m() : h();
                var nt = void 0,
                    rt = 1,
                    it = 2,
                    ot = new R,
                    at = new R;
                L.prototype._validateInput = function(t) {
                    return Q(t)
                }, L.prototype._validationError = function() {
                    return new Error("Array Methods must be provided an Array")
                }, L.prototype._init = function() {
                    this._result = new Array(this.length)
                };
                var st = L;
                L.prototype._enumerate = function() {
                    for (var t = this, e = t.length, n = t.promise, r = t._input, i = 0; n._state === nt && i < e; i++) t._eachEntry(r[i], i)
                }, L.prototype._eachEntry = function(t, e) {
                    var n = this,
                        r = n._instanceConstructor;
                    a(t) ? t.constructor === r && t._state !== nt ? (t._onerror = null, n._settledAt(t._state, e, t._result)) : n._willSettleAt(r.resolve(t), e) : (n._remaining--, n._result[e] = t)
                }, L.prototype._settledAt = function(t, e, n) {
                    var r = this,
                        i = r.promise;
                    i._state === nt && (r._remaining--, t === it ? I(i, n) : r._result[e] = n), 0 === r._remaining && T(i, r._result)
                }, L.prototype._willSettleAt = function(t, e) {
                    var n = this;
                    P(t, void 0, function(t) {
                        n._settledAt(rt, e, t)
                    }, function(t) {
                        n._settledAt(it, e, t)
                    })
                };
                var ut = O,
                    ct = z,
                    dt = D,
                    ft = F,
                    lt = 0,
                    ht = q;
                q.all = ut, q.race = ct, q.resolve = dt, q.reject = ft, q._setScheduler = s, q._setAsap = u, q._asap = K, q.prototype = {
                    constructor: q,
                    then: function(t, e) {
                        var n = this,
                            r = n._state;
                        if (r === rt && !t || r === it && !e) return this;
                        var i = new this.constructor(v),
                            o = n._result;
                        if (r) {
                            var a = arguments[r - 1];
                            K(function() {
                                N(r, i, a, o)
                            })
                        } else P(n, i, t, e);
                        return i
                    },
                    catch: function(t) {
                        return this.then(null, t)
                    }
                };
                var pt = U,
                    mt = {
                        Promise: ht,
                        polyfill: pt
                    };
                n(6).amd ? (r = function() {
                    return mt
                }.call(e, n, e, t), !(void 0 !== r && (t.exports = r))) : "undefined" != typeof t && t.exports && (t.exports = mt)
            }).call(this)
        }).call(e, n(4)(t))
    }, function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
        }
    }, function(t, e) {}, function(t, e) {
        t.exports = function() {
            throw new Error("define cannot be used indirect")
        }
    }, function(t, e) {
        t.exports = window
    }, function(t, e, n) {
        function r(t) {
            return t = t || p, t.devicePixelRatio ? t.devicePixelRatio >= 1.5 : !!t.matchMedia && t.matchMedia("only screen and (min-resolution: 144dpi)").matches
        }

        function i(t) {
            return t = t || v, /(Trident|MSIE|Edge[\/ ]?\d)/.test(t)
        }

        function o(t) {
            return t = t || v, /MSIE 9/.test(t)
        }

        function a(t) {
            return t = t || v, /(iPad|iPhone|iPod)/.test(t)
        }

        function s(t) {
            return t = t || v, /^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(t)
        }

        function u(t, e) {
            return t = t || p, e = e || v, t.postMessage && !(i(e) && t.opener)
        }

        function c(t, e, n) {
            return t = t || p, e = e || h, n = n || v, "ontouchstart" in t || /Opera Mini/.test(n) || e.msMaxTouchPoints > 0
        }

        function d() {
            var t = l.body.style;
            return void 0 !== t.transition || void 0 !== t.webkitTransition || void 0 !== t.mozTransition || void 0 !== t.oTransition || void 0 !== t.msTransition
        }

        function f() {
            return !!(p.Promise && p.Promise.resolve && p.Promise.reject && p.Promise.all && p.Promise.race && function() {
                var t;
                return new p.Promise(function(e) {
                    t = e
                }), m.isType("function", t)
            }())
        }
        var l = n(9),
            h = n(10),
            p = n(7),
            m = n(11),
            v = h.userAgent;
        t.exports = {
            retina: r,
            anyIE: i,
            ie9: o,
            ios: a,
            android: s,
            canPostMessage: u,
            touch: c,
            cssTransitions: d,
            hasPromiseSupport: f
        }
    }, function(t, e) {
        t.exports = document
    }, function(t, e) {
        t.exports = navigator
    }, function(t, e, n) {
        function r(t) {
            return f(arguments).slice(1).forEach(function(e) {
                o(e, function(e, n) {
                    t[e] = n
                })
            }), t
        }

        function i(t) {
            return o(t, function(e, n) {
                u(n) && (i(n), c(n) && delete t[e]), void 0 !== n && null !== n && "" !== n || delete t[e]
            }), t
        }

        function o(t, e) {
            for (var n in t) t.hasOwnProperty && !t.hasOwnProperty(n) || e(n, t[n]);
            return t
        }

        function a(t) {
            return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }

        function s(t, e) {
            return t == a(e)
        }

        function u(t) {
            return t === Object(t)
        }

        function c(t) {
            if (!u(t)) return !1;
            if (Object.keys) return !Object.keys(t).length;
            for (var e in t)
                if (t.hasOwnProperty(e)) return !1;
            return !0
        }

        function d(t, e) {
            h.setTimeout(function() {
                t.call(e || null)
            }, 0)
        }

        function f(t) {
            return t ? Array.prototype.slice.call(t) : []
        }

        function l(t, e) {
            return !(!t || !t.indexOf) && t.indexOf(e) > -1
        }
        var h = n(7);
        t.exports = {
            aug: r,
            async: d,
            compact: i,
            contains: l,
            forIn: o,
            isObject: u,
            isEmptyObject: c,
            toType: a,
            isType: s,
            toRealArray: f
        }
    }, function(t, e, n) {
        function r(t, e, n) {
            e.ready = i(t.then, t), n && Array.isArray(e[n]) && (e[n].forEach(i(t.then, t)), delete e[n])
        }
        var i = n(13);
        t.exports = {
            exposeReadyPromise: r
        }
    }, function(t, e, n) {
        var r = n(11);
        t.exports = function(t, e) {
            var n = Array.prototype.slice.call(arguments, 2);
            return function() {
                var i = r.toRealArray(arguments);
                return t.apply(e, n.concat(i))
            }
        }
    }, function(t, e, n) {
        var r = n(15);
        t.exports = new r("__twttr")
    }, function(t, e, n) {
        function r(t) {
            return s.isType("string", t) ? t.split(".") : s.isType("array", t) ? t : []
        }

        function i(t, e) {
            var n = r(e),
                i = n.slice(0, -1);
            return i.reduce(function(t, e, n) {
                if (t[e] = t[e] || {}, !s.isObject(t[e])) throw new Error(i.slice(0, n + 1).join(".") + " is already defined with a value.");
                return t[e]
            }, t)
        }

        function o(t, e) {
            e = e || a, e[t] = e[t] || {}, Object.defineProperty(this, "base", {
                value: e[t]
            }), Object.defineProperty(this, "name", {
                value: t
            })
        }
        var a = n(7),
            s = n(11);
        s.aug(o.prototype, {
            get: function(t) {
                var e = r(t);
                return e.reduce(function(t, e) {
                    if (s.isObject(t)) return t[e]
                }, this.base)
            },
            set: function(t, e, n) {
                var o = r(t),
                    a = i(this.base, t),
                    s = o.slice(-1);
                return n && s in a ? a[s] : a[s] = e
            },
            init: function(t, e) {
                return this.set(t, e, !0)
            },
            unset: function(t) {
                var e = r(t),
                    n = this.get(e.slice(0, -1));
                n && delete n[e.slice(-1)]
            },
            aug: function(t) {
                var e = this.get(t),
                    n = s.toRealArray(arguments).slice(1);
                if (e = "undefined" != typeof e ? e : {}, n.unshift(e), !n.every(s.isObject)) throw new Error("Cannot augment non-object.");
                return this.set(t, s.aug.apply(null, n))
            },
            call: function(t) {
                var e = this.get(t),
                    n = s.toRealArray(arguments).slice(1);
                if (!s.isType("function", e)) throw new Error("Function " + t + "does not exist.");
                return e.apply(null, n)
            },
            fullPath: function(t) {
                var e = r(t);
                return e.unshift(this.name), e.join(".")
            }
        }), t.exports = o
    }, function(t, e, n) {
        var r = n(15);
        t.exports = new r("twttr")
    }, function(t, e, n) {
        function r(t) {
            var e = ~a.host.indexOf("poptip.com") ? "https://poptip.com" : a.href,
                n = "original_referer=" + e;
            return [t, n].join(t.indexOf("?") == -1 ? "?" : "&")
        }

        function i(t) {
            var e, n;
            t.altKey || t.metaKey || t.shiftKey || (e = u.closest(function(t) {
                return "A" === t.tagName || "AREA" === t.tagName
            }, t.target), e && d.isIntentURL(e.href) && (n = r(e.href), n = n.replace(/^http[:]/, "https:"), n = n.replace(/^\/\//, "https://"), c.open(n, e), s.preventDefault(t)))
        }

        function o(t) {
            t.addEventListener("click", i, !1)
        }
        var a = n(18),
            s = n(19),
            u = n(21),
            c = n(22),
            d = n(23);
        t.exports = {
            attachTo: o
        }
    }, function(t, e) {
        t.exports = location
    }, function(t, e, n) {
        function r(t) {
            var e = t.getAttribute("data-twitter-event-id");
            return e ? e : (t.setAttribute("data-twitter-event-id", ++g), g)
        }

        function i(t, e, n) {
            var r = 0,
                i = t && t.length || 0;
            for (r = 0; r < i; r++)
                if (t[r].call(e, n, e), n.ceaseImmediately) return !1
        }

        function o(t, e, n) {
            for (var r = n || t.target || t.srcElement, a = m.list(r).map(function(t) {
                    return "." + t
                }), s = a.concat(r.tagName), u = 0, c = s.length; u < c; u++)
                if (i(e[s[u]], r, t) === !1) return;
            t.cease || r !== this && o.call(this, t, e, r.parentElement || r.parentNode)
        }

        function a(t, e, n, r) {
            function i(r) {
                o.call(t, r, n[e])
            }
            s(t, i, e, r), t.addEventListener(e, i, !1)
        }

        function s(t, e, n, r) {
            t.id && (y[t.id] = y[t.id] || [], y[t.id].push({
                el: t,
                listener: e,
                type: n,
                rootId: r
            }))
        }

        function u(t) {
            var e = y[t];
            e && (e.forEach(function(t) {
                t.el.removeEventListener(t.type, t.listener, !1), delete v[t.rootId]
            }), delete y[t])
        }

        function c(t, e, n, i) {
            var o = r(t);
            v[o] = v[o] || {}, v[o][e] || (v[o][e] = {}, a(t, e, v[o], o)), v[o][e][n] = v[o][e][n] || [], v[o][e][n].push(i)
        }

        function d(t, e, n) {
            var i = r(e),
                a = v[i] && v[i];
            o.call(e, {
                target: n
            }, a[t])
        }

        function f(t) {
            return h(t), l(t), !1
        }

        function l(t) {
            t && t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }

        function h(t) {
            t && (t.cease = !0) && t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
        }

        function p(t) {
            t && (t.ceaseImmediately = !0, h(t), t.stopImmediatePropagation())
        }
        var m = n(20),
            v = {},
            g = -1,
            y = {};
        t.exports = {
            stop: f,
            stopPropagation: h,
            stopImmediatePropagation: p,
            preventDefault: l,
            delegate: c,
            simulate: d,
            removeDelegatesForWidget: u
        }
    }, function(t, e, n) {
        function r(t) {
            return new RegExp("\\b" + t + "\\b", "g")
        }

        function i(t, e) {
            return t.classList ? void t.classList.add(e) : void(r(e).test(t.className) || (t.className += " " + e))
        }

        function o(t, e) {
            return t.classList ? void t.classList.remove(e) : void(t.className = t.className.replace(r(e), " "))
        }

        function a(t, e, n) {
            return void 0 === n && t.classList && t.classList.toggle ? t.classList.toggle(e, n) : (n ? i(t, e) : o(t, e), n)
        }

        function s(t, e, n) {
            return t.classList && u(t, e) ? (o(t, e), void i(t, n)) : void(t.className = t.className.replace(r(e), n))
        }

        function u(t, e) {
            return t.classList ? t.classList.contains(e) : d.contains(c(t), e)
        }

        function c(t) {
            return d.toRealArray(t.classList ? t.classList : t.className.match(f))
        }
        var d = n(11),
            f = /\b([\w-_]+)\b/g;
        t.exports = {
            add: i,
            remove: o,
            replace: s,
            toggle: a,
            present: u,
            list: c
        }
    }, function(t, e, n) {
        function r(t) {
            var e = t.charAt(0);
            return "." === e ? function(e) {
                var n = e.className ? e.className.split(/\s+/) : [];
                return o.contains(n, t.slice(1))
            } : "#" === e ? function(e) {
                return e.id === t.slice(1)
            } : function(e) {
                return e.tagName === t.toUpperCase()
            }
        }

        function i(t, e, n) {
            var a;
            if (e) return n = n || e && e.ownerDocument, a = o.isType("function", t) ? t : r(t), e === n ? a(e) ? e : void 0 : a(e) ? e : i(a, e.parentNode, n)
        }
        var o = n(11);
        t.exports = {
            closest: i
        }
    }, function(t, e, n) {
        function r(t, e) {
            u.open(t, {}, e)
        }

        function i(t, e) {
            var n = d.decodeURL(e);
            switch (t) {
                case "favorite":
                case "like":
                    return {
                        tweet_id: n.tweet_id
                    };
                case "follow":
                    return {
                        screen_name: n.screen_name,
                        user_id: n.user_id
                    };
                case "retweet":
                    return {
                        source_tweet_id: n.tweet_id
                    };
                default:
                    return {}
            }
        }

        function o(t, e, n) {
            var o = (s.intentType(t) || "").toLowerCase();
            s.isTwitterURL(t) && (r(t, n), e && c.trigger("click", {
                target: e,
                region: "intent",
                type: "click",
                data: {}
            }), e && f[o] && f[o].forEach(function(n) {
                c.trigger(n, {
                    target: e,
                    region: "intent",
                    type: n,
                    data: i(o, t)
                })
            }))
        }

        function a(t) {
            this.srcEl = [], this.element = t
        }
        var s = n(23),
            u = n(26),
            c = n(29),
            d = n(24),
            f = {
                favorite: ["favorite", "like"],
                follow: ["follow"],
                like: ["favorite", "like"],
                retweet: ["retweet"],
                tweet: ["tweet"]
            };
        a.open = o, t.exports = a
    }, function(t, e, n) {
        function r(t) {
            return "string" == typeof t && _.test(t) && RegExp.$1.length <= 20
        }

        function i(t) {
            if (r(t)) return RegExp.$1
        }

        function o(t, e) {
            var n = b.decodeURL(t);
            if (e = e || !1, n.screen_name = i(t), n.screen_name) return b.url("https://twitter.com/intent/" + (e ? "follow" : "user"), n)
        }

        function a(t) {
            return o(t, !0)
        }

        function s(t) {
            return "string" == typeof t && C.test(t)
        }

        function u(t, e) {
            if (e = void 0 === e || e, s(t)) return (e ? "#" : "") + RegExp.$1
        }

        function c(t) {
            return "string" == typeof t && E.test(t)
        }

        function d(t) {
            return c(t) && RegExp.$1
        }

        function f(t) {
            return x.test(t)
        }

        function l(t) {
            return A.test(t)
        }

        function h(t) {
            return T.test(t)
        }

        function p(t) {
            return P.test(t) && RegExp.$1
        }

        function m(t) {
            return I.test(t) && RegExp.$1
        }

        function v(t) {
            return T.test(t) && RegExp.$1
        }

        function g(t) {
            return S.test(t) && RegExp.$1
        }

        function y(t) {
            return !!R.test(t) && {
                ownerScreenName: RegExp.$1,
                slug: RegExp.$2
            }
        }

        function w(t) {
            return j.test(t) && RegExp.$1
        }
        var b = n(24),
            _ = /(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,
            E = /(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,
            x = /^http(s?):\/\/(\w+\.)*twitter\.com([\:\/]|$)/i,
            A = /^http(s?):\/\/pbs\.twimg\.com\//,
            C = /^#?([^.,<>!\s\/#\-\(\)\'\"]+)$/,
            T = /twitter\.com(?:\:\d{2,4})?\/intent\/(\w+)/,
            I = /^https?:\/\/(?:www\.)?twitter\.com\/\w+\/timelines\/(\d+)/i,
            P = /^https?:\/\/(?:www\.)?twitter\.com\/i\/moments\/(\d+)/i,
            S = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/(?:likes|favorites)/i,
            R = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/lists\/([\w-]+)/i,
            j = /^https?:\/\/(?:www\.)?twitter\.com\/i\/live\/(\d+)/i;
        t.exports = {
            isHashTag: s,
            hashTag: u,
            isScreenName: r,
            screenName: i,
            isStatus: c,
            status: d,
            intentForProfileURL: o,
            intentForFollowURL: a,
            isTwitterURL: f,
            isTwimgURL: l,
            isIntentURL: h,
            regexen: {
                profile: _
            },
            momentId: p,
            collectionId: m,
            intentType: v,
            likesScreenName: g,
            listScreenNameAndSlug: y,
            eventId: w
        }
    }, function(t, e, n) {
        function r(t) {
            return encodeURIComponent(t).replace(/\+/g, "%2B").replace(/'/g, "%27")
        }

        function i(t) {
            return decodeURIComponent(t)
        }

        function o(t) {
            var e = [];
            return d.forIn(t, function(t, n) {
                var i = r(t);
                d.isType("array", n) || (n = [n]), n.forEach(function(t) {
                    c.hasValue(t) && e.push(i + "=" + r(t))
                })
            }), e.sort().join("&")
        }

        function a(t) {
            var e, n = {};
            return t ? (e = t.split("&"), e.forEach(function(t) {
                var e = t.split("="),
                    r = i(e[0]),
                    o = i(e[1]);
                if (2 == e.length) return d.isType("array", n[r]) ? void n[r].push(o) : r in n ? (n[r] = [n[r]], void n[r].push(o)) : void(n[r] = o)
            }), n) : {}
        }

        function s(t, e) {
            var n = o(e);
            return n.length > 0 ? d.contains(t, "?") ? t + "&" + o(e) : t + "?" + o(e) : t
        }

        function u(t) {
            var e = t && t.split("?");
            return 2 == e.length ? a(e[1]) : {}
        }
        var c = n(25),
            d = n(11);
        t.exports = {
            url: s,
            decodeURL: u,
            decode: a,
            encode: o,
            encodePart: r,
            decodePart: i
        }
    }, function(t, e, n) {
        function r(t) {
            return void 0 !== t && null !== t && "" !== t
        }

        function i(t) {
            return s(t) && t % 1 === 0
        }

        function o(t) {
            return "string" === m.toType(t)
        }

        function a(t) {
            return s(t) && !i(t)
        }

        function s(t) {
            return r(t) && !isNaN(t)
        }

        function u(t) {
            return r(t) && "array" == m.toType(t)
        }

        function c(t) {
            return m.contains(g, t)
        }

        function d(t) {
            return m.contains(v, t)
        }

        function f(t) {
            return !!r(t) && (!!d(t) || !c(t) && !!t)
        }

        function l(t) {
            if (s(t)) return t
        }

        function h(t) {
            if (a(t)) return t
        }

        function p(t) {
            if (i(t)) return parseInt(t, 10)
        }
        var m = n(11),
            v = [!0, 1, "1", "on", "ON", "true", "TRUE", "yes", "YES"],
            g = [!1, 0, "0", "off", "OFF", "false", "FALSE", "no", "NO"];
        t.exports = {
            hasValue: r,
            isInt: i,
            isFloat: a,
            isNumber: s,
            isString: o,
            isArray: u,
            isTruthValue: d,
            isFalseValue: c,
            asInt: p,
            asFloat: h,
            asNumber: l,
            asBoolean: f
        }
    }, function(t, e, n) {
        function r(t) {
            var e = [];
            return m.forIn(t, function(t, n) {
                e.push(t + "=" + n)
            }), e.join(",")
        }

        function i() {
            return v + p.generate()
        }

        function o(t, e) {
            function n(t) {
                return Math.round(t / 2)
            }
            return t > e ? {
                coordinate: 0,
                size: e
            } : {
                coordinate: n(e) - n(t),
                size: t
            }
        }

        function a(t, e, n) {
            var i, a;
            e = s.parse(e), n = n || {}, i = o(e.width, n.width || g), e.left = i.coordinate, e.width = i.size, a = o(e.height, n.height || y), e.top = a.coordinate, e.height = a.size, this.win = t, this.features = r(e)
        }
        var s, u = n(7),
            c = n(27),
            d = n(19),
            f = n(21),
            l = n(8),
            h = n(23),
            p = n(28),
            m = n(11),
            v = "intent_",
            g = u.screen.width,
            y = u.screen.height;
        s = (new c).defaults({
            width: 550,
            height: 520,
            personalbar: "0",
            toolbar: "0",
            location: "1",
            scrollbars: "1",
            resizable: "1"
        }), a.prototype.open = function(t, e) {
            var n = e && "click" == e.type && f.closest("a", e.target),
                r = e && (e.altKey || e.metaKey || e.shiftKey),
                o = n && (l.ios() || l.android());
            if (h.isTwitterURL(t)) return r || o ? this : (this.name = i(), this.popup = this.win.open(t, this.name, this.features), e && d.preventDefault(e), this)
        }, a.open = function(t, e, n) {
            var r = new a(u, e);
            return r.open(t, n)
        }, t.exports = a
    }, function(t, e, n) {
        function r(t) {
            return function(e) {
                return o.hasValue(e[t])
            }
        }

        function i() {
            this.assertions = [], this._defaults = {}
        }
        var o = n(25),
            a = n(11);
        i.prototype.assert = function(t, e) {
            return this.assertions.push({
                fn: t,
                msg: e || "assertion failed"
            }), this
        }, i.prototype.defaults = function(t) {
            return this._defaults = t || this._defaults, this
        }, i.prototype.require = function(t) {
            var e = this;
            return t = Array.isArray(t) ? t : a.toRealArray(arguments), t.forEach(function(t) {
                e.assert(r(t), "required: " + t)
            }), this
        }, i.prototype.parse = function(t) {
            var e, n;
            if (e = a.aug({}, this._defaults, t || {}), n = this.assertions.reduce(function(t, n) {
                    return n.fn(e) || t.push(n.msg), t
                }, []), n.length > 0) throw new Error(n.join("\n"));
            return e
        }, t.exports = i
    }, function(t, e) {
        function n() {
            return i + String(+new Date) + Math.floor(1e5 * Math.random()) + o++
        }

        function r() {
            return i + String(a++)
        }
        var i = "i",
            o = 0,
            a = 0;
        t.exports = {
            generate: n,
            deterministic: r
        }
    }, function(t, e, n) {
        function r() {
            return i.get("events") || {}
        }
        var i = n(16),
            o = n(30),
            a = n(11);
        t.exports = a.aug(r(), o.Emitter)
    }, function(t, e, n) {
        var r = n(11),
            i = n(13),
            o = {
                bind: function(t, e) {
                    return this._handlers = this._handlers || {}, this._handlers[t] = this._handlers[t] || [], this._handlers[t].push(e)
                },
                unbind: function(t, e) {
                    if (this._handlers && this._handlers[t])
                        if (e) {
                            var n = this._handlers[t].indexOf(e);
                            n >= 0 && this._handlers[t].splice(n, 1)
                        } else this._handlers[t] = []
                },
                trigger: function(t, e) {
                    var n = this._handlers && this._handlers[t];
                    e = e || {}, e.type = t, n && n.forEach(function(t) {
                        r.async(i(t, this, e))
                    })
                }
            };
        t.exports = {
            Emitter: o
        }
    }, function(t, e, n) {
        function r(t) {
            c[t] = +new Date
        }

        function i(t) {
            return c[t] ? +new Date - c[t] : null
        }

        function o(t, e, n, r, o) {
            var s = i(e);
            s && a(t, n, r, s, o)
        }

        function a(t, e, n, r, i) {
            var o, a = void 0 === i ? d : i;
            100 * Math.random() > a || (n = u.aug(n || {}, {
                duration_ms: r
            }), o = {
                page: e,
                component: "performance",
                action: t
            }, s.clientEvent(o, n, !0))
        }
        var s = n(32),
            u = n(11),
            c = {},
            d = 1;
        t.exports = {
            start: r,
            end: i,
            track: a,
            endAndTrack: o
        }
    }, function(t, e, n) {
        function r(t, e, n) {
            return i(t, e, n, 2)
        }

        function i(t, e, n, r) {
            var i = !v.isObject(t),
                o = !!e && !v.isObject(e);
            i || o || a(m.formatClientEventNamespace(t), m.formatClientEventData(e, n, r), m.CLIENT_EVENT_ENDPOINT)
        }

        function o(t, e, n, r) {
            var o = m.extractTermsFromDOM(t.target || t.srcElement);
            o.action = r || "click", i(o, e, n)
        }

        function a(t, e, n) {
            var r, i;
            n && v.isObject(t) && v.isObject(e) && (r = m.flattenClientEventPayload(t, e), i = {
                l: m.stringify(r)
            }, r.dnt && (i.dnt = 1), l(p.url(n, i)))
        }

        function s(t, e, n, r) {
            var i, o = !v.isObject(t),
                a = !!e && !v.isObject(e);
            if (!o && !a) return i = m.flattenClientEventPayload(m.formatClientEventNamespace(t), m.formatClientEventData(e, n, r)), u(i)
        }

        function u(t) {
            return y.push(t), y
        }

        function c() {
            var t, e;
            return y.length > 1 && s({
                page: "widgets_js",
                component: "scribe_pixel",
                action: "batch_log"
            }, {}), t = y, y = [], e = t.reduce(function(e, n, r) {
                var i = e.length,
                    o = i && e[i - 1],
                    a = r + 1 == t.length;
                return a && n.event_namespace && "batch_log" == n.event_namespace.action && (n.message = ["entries:" + r, "requests:" + i].join("/")), d(n).forEach(function(t) {
                    var n = f(t);
                    (!o || o.urlLength + n > g) && (o = {
                        urlLength: b,
                        items: []
                    }, e.push(o)), o.urlLength += n, o.items.push(t)
                }), e
            }, []), e.map(function(t) {
                var e = {
                    l: t.items
                };
                return h.enabled() && (e.dnt = 1), l(p.url(m.CLIENT_EVENT_ENDPOINT, e))
            })
        }

        function d(t) {
            return Array.isArray(t) || (t = [t]), t.reduce(function(t, e) {
                var n, r = m.stringify(e),
                    i = f(r);
                return b + i < g ? t = t.concat(r) : (n = m.splitLogEntry(e), n.length > 1 && (t = t.concat(d(n)))), t
            }, [])
        }

        function f(t) {
            return encodeURIComponent(t).length + 3
        }

        function l(t) {
            var e = new Image;
            return e.src = t
        }
        var h = n(33),
            p = n(24),
            m = n(38),
            v = n(11),
            g = 2083,
            y = [],
            w = p.url(m.CLIENT_EVENT_ENDPOINT, {
                dnt: 0,
                l: ""
            }),
            b = encodeURIComponent(w).length;
        t.exports = {
            _enqueueRawObject: u,
            scribe: a,
            clientEvent: i,
            clientEvent2: r,
            enqueueClientEvent: s,
            flushClientEvents: c,
            interaction: o
        }
    }, function(t, e, n) {
        function r() {
            l = !0
        }

        function i(t, e) {
            return !!l || (!!d.asBoolean(f.val("dnt")) || (!(!s || 1 != s.doNotTrack && 1 != s.msDoNotTrack) || (!!c.isUrlSensitive(e || a.host) || (!(!u.isFramed() || !c.isUrlSensitive(u.rootDocumentLocation())) || (t = h.test(t || o.referrer) && RegExp.$1, !(!t || !c.isUrlSensitive(t)))))))
        }
        var o = n(9),
            a = n(18),
            s = n(10),
            u = n(34),
            c = n(36),
            d = n(25),
            f = n(37),
            l = !1,
            h = /https?:\/\/([^\/]+).*/i;
        t.exports = {
            setOn: r,
            enabled: i
        }
    }, function(t, e, n) {
        function r(t) {
            return t && u.isType("string", t) && (c = t), c
        }

        function i() {
            return d
        }

        function o() {
            return c !== d
        }
        var a = n(18),
            s = n(35),
            u = n(11),
            c = s.getCanonicalURL() || a.href,
            d = c;
        t.exports = {
            isFramed: o,
            rootDocumentLocation: r,
            currentDocumentLocation: i
        }
    }, function(t, e, n) {
        function r(t, e) {
            var n, r;
            return e = e || s, /^https?:\/\//.test(t) ? t : /^\/\//.test(t) ? e.protocol + t : (n = e.host + (e.port.length ? ":" + e.port : ""), 0 !== t.indexOf("/") && (r = e.pathname.split("/"), r.pop(), r.push(t), t = "/" + r.join("/")), [e.protocol, "//", n, t].join(""))
        }

        function i() {
            for (var t, e = a.getElementsByTagName("link"), n = 0; t = e[n]; n++)
                if ("canonical" == t.rel) return r(t.href)
        }

        function o() {
            for (var t, e, n, r = a.getElementsByTagName("a"), i = a.getElementsByTagName("link"), o = [r, i], s = 0, c = 0, d = /\bme\b/; t = o[s]; s++)
                for (c = 0; e = t[c]; c++)
                    if (d.test(e.rel) && (n = u.screenName(e.href))) return n
        }
        var a = n(9),
            s = n(18),
            u = n(23);
        t.exports = {
            absolutize: r,
            getCanonicalURL: i,
            getScreenNameFromPage: o
        }
    }, function(t, e, n) {
        function r(t) {
            return t in s ? s[t] : s[t] = a.test(t)
        }

        function i() {
            return r(o.host)
        }
        var o = n(18),
            a = /^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i,
            s = {};
        t.exports = {
            isUrlSensitive: r,
            isHostPageSensitive: i
        }
    }, function(t, e, n) {
        function r(t) {
            var e, n, r, i = 0;
            for (o = {}, t = t || a, e = t.getElementsByTagName("meta"); n = e[i]; i++) /^twitter:/.test(n.name) && (r = n.name.replace(/^twitter:/, ""), o[r] = n.content)
        }

        function i(t) {
            return o[t]
        }
        var o, a = n(9);
        r(), t.exports = {
            init: r,
            val: i
        }
    }, function(t, e, n) {
        function r(t, e) {
            var n;
            return e = e || {}, t && t.nodeType === Node.ELEMENT_NODE ? ((n = t.getAttribute("data-scribe")) && n.split(" ").forEach(function(t) {
                var n = t.trim().split(":"),
                    r = n[0],
                    i = n[1];
                r && i && !e[r] && (e[r] = i)
            }), r(t.parentNode, e)) : e
        }

        function i(t) {
            return p.aug({
                client: "tfw"
            }, t || {})
        }

        function o(t, e, n) {
            var r = t && t.widget_origin || f.referrer;
            return t = a("tfw_client_event", t, r), t.client_version = v, t.format_version = void 0 !== n ? n : 1, e || (t.widget_origin = r), t
        }

        function a(t, e, n) {
            return e = e || {}, p.aug({}, e, {
                _category_: t,
                triggered_on: e.triggered_on || +new Date,
                dnt: h.enabled(n)
            })
        }

        function s(t, e) {
            var n = {};
            return e = e || {}, e.association_namespace = i(t), n[b] = e, n
        }

        function u(t, e) {
            return p.aug({}, e, {
                event_namespace: t
            })
        }

        function c(t) {
            var e, n = Array.prototype.toJSON;
            return delete Array.prototype.toJSON, e = l.stringify(t), n && (Array.prototype.toJSON = n), e
        }

        function d(t) {
            if (t.item_ids && t.item_ids.length > 1) {
                var e = Math.floor(t.item_ids.length / 2),
                    n = t.item_ids.slice(0, e),
                    r = {},
                    i = t.item_ids.slice(e),
                    o = {};
                n.forEach(function(e) {
                    r[e] = t.item_details[e]
                }), i.forEach(function(e) {
                    o[e] = t.item_details[e]
                });
                var a = [p.aug({}, t, {
                    item_ids: n,
                    item_details: r
                }), p.aug({}, t, {
                    item_ids: i,
                    item_details: o
                })];
                return a
            }
            return [t]
        }
        var f = n(9),
            l = n(39),
            h = n(33),
            p = n(11),
            m = n(40),
            v = m.version,
            g = "https://syndication.twitter.com/i/jot",
            y = "https://syndication.twitter.com/i/jot/syndication",
            w = "https://platform.twitter.com/jot.html",
            b = 1;
        t.exports = {
            extractTermsFromDOM: r,
            flattenClientEventPayload: u,
            formatGenericEventData: a,
            formatClientEventData: o,
            formatClientEventNamespace: i,
            formatTweetAssociation: s,
            splitLogEntry: d,
            stringify: c,
            AUDIENCE_ENDPOINT: y,
            CLIENT_EVENT_ENDPOINT: g,
            RUFOUS_REDIRECT: w
        }
    }, function(t, e, n) {
        var r = n(7),
            i = r.JSON;
        t.exports = {
            stringify: i.stringify || i.encode,
            parse: i.parse || i.decode
        }
    }, function(t, e) {
        t.exports = {
            version: "cd22cbf:1485197404935"
        }
    }, function(t, e, n) {
        function r(t) {
            return t.reduce(function(t, e) {
                return t.concat(g.reduce(function(t, n) {
                    return t.concat(n(e))
                }, []))
            }, [])
        }

        function i() {
            var t = f.val("widgets:autoload") || !0;
            return !m.isFalseValue(t) && (m.isTruthValue(t) ? c.body : c.querySelectorAll(t))
        }

        function o(t) {
            var e;
            return t = t || c.body, t = t.length ? v.toRealArray(t) : [t], h.pause(), e = u.allResolved(r(t).map(function(t) {
                return d.addWidget(t)
            })).then(function(t) {
                p.trigger("loaded", {
                    widgets: t
                })
            }), u.always(e, function() {
                h.resume()
            }), e
        }

        function a() {
            var t = i();
            return t === !1 ? s.resolve() : (l.set("widgets.loaded", !0), o(t))
        }
        var s = n(2),
            u = n(42),
            c = n(9),
            d = n(43),
            f = n(37),
            l = n(14),
            h = n(50),
            p = n(29),
            m = n(25),
            v = n(11),
            g = n(73);
        t.exports = {
            load: o,
            loadPage: a,
            _getPageLoadTarget: i
        }
    }, function(t, e, n) {
        function r(t, e) {
            return t.then(e, e)
        }

        function i(t) {
            var e;
            return t = t || [], e = t.length, t = t.filter(s), e ? e !== t.length ? u.reject("non-Promise passed to .some") : new u(function(e, n) {
                function r() {
                    i += 1, i === t.length && n()
                }
                var i = 0;
                t.forEach(function(t) {
                    t.then(e, r)
                })
            }) : u.reject("no promises passed to .some")
        }

        function o(t) {
            var e;
            return void 0 === t ? u.reject(new Error("undefined is not an object")) : Array.isArray(t) ? (e = t.length, e ? new u(function(n, r) {
                function i() {
                    a += 1, a === e && (0 === u.length ? r() : n(u))
                }

                function o(t) {
                    u.push(t), i()
                }
                var a = 0,
                    u = [];
                t.forEach(function(t) {
                    s(t) ? t.then(o, i) : o(t)
                })
            }) : u.resolve([])) : u.reject(new Error("Type error"))
        }

        function a(t) {
            function e() {}
            return u.all((t || []).map(function(t) {
                return r(t, e)
            }))
        }

        function s(t) {
            return t instanceof u
        }
        var u = n(2);
        t.exports = {
            always: r,
            allResolved: o,
            some: i,
            isPromise: s,
            allSettled: a
        }
    }, function(t, e, n) {
        function r(t) {
            return t.reduce(function(t, e) {
                return t[e.className] = t[e.className] || [], t[e.className].push(e), t
            }, {})
        }

        function i(t) {
            var e = t.map(a.fromRawTask),
                n = r(e);
            f.forIn(n, function(t, e) {
                c.allSettled(e.map(function(t) {
                    return t.initialize()
                })).then(function() {
                    e.forEach(function(t) {
                        u.all([t.hydrate(), t.insertIntoDom()]).then(d(t.render, t)).then(d(t.success, t), d(t.fail, t))
                    })
                })
            })
        }

        function o(t) {
            return l.add(t)
        }
        var a = n(44),
            s = n(48),
            u = n(2),
            c = n(42),
            d = n(13),
            f = n(11),
            l = new s(i);
        t.exports = {
            addWidget: o
        }
    }, function(t, e, n) {
        function r(t) {
            var e = t.srcEl || t.targetEl;
            return e.ownerDocument.defaultView
        }

        function i(t, e) {
            this._widget = null, this._sandbox = null, this._hydrated = !1, this._insertedIntoDom = !1, this._Sandbox = t.Sandbox, this._factory = t.factory, this._widgetParams = t.parameters, this._resolve = e, this._className = t.className, this._renderedClassName = t.className + "-rendered", this._errorClassName = t.className + "-error", this._srcEl = t.srcEl, this._targetGlobal = r(t), this._insertionStrategy = function(e) {
                var n = t.srcEl,
                    r = t.targetEl;
                n ? r.insertBefore(e, n) : r.appendChild(e)
            }
        }
        var o = n(20),
            a = n(45),
            s = n(29),
            u = n(47),
            c = n(2),
            d = n(42);
        i.fromRawTask = function(t) {
            return new i(t.input, t.taskDoneDeferred.resolve)
        }, i.prototype.initialize = function() {
            var t = this,
                e = new this._Sandbox(this._targetGlobal);
            return this._factory(this._widgetParams, e).then(function(n) {
                return t._widget = n, t._sandbox = e, n
            })
        }, i.prototype.insertIntoDom = function() {
            var t = this;
            return this._widget ? this._sandbox.insert(this._widget.id, {
                class: [this._className, this._renderedClassName].join(" ")
            }, null, this._insertionStrategy).then(function() {
                t._insertedIntoDom = !0
            }) : c.reject(new Error("cannot insert widget into DOM before it is initialized"))
        }, i.prototype.hydrate = function() {
            var t = this;
            return this._widget ? this._widget.hydrate().then(function() {
                t._hydrated = !0
            }) : c.reject(new Error("cannot hydrate widget before it is initialized"))
        }, i.prototype.render = function() {
            function t() {
                r._sandbox.onResize(function() {
                    return r._widget.resize().then(function() {
                        s.trigger("resize", {
                            target: r._sandbox.sandboxEl
                        })
                    })
                })
            }

            function e() {
                return u(r._srcEl).then(function() {
                    return r._sandbox.sandboxEl
                })
            }

            function n(t) {
                return u(r._sandbox.sandboxEl).then(function() {
                    return c.reject(t)
                })
            }
            var r = this;
            return this._hydrated ? this._insertedIntoDom ? r._widget.render(r._sandbox).then(function() {
                return t(), r._widget.show()
            }).then(e, n) : n(new Error("cannot render widget before DOM insertion")) : n(new Error("cannot render widget before hydration"))
        }, i.prototype.fail = function() {
            var t = this;
            return this._srcEl ? d.always(a.write(function() {
                o.add(t._srcEl, t._errorClassName)
            }), function() {
                s.trigger("rendered", {
                    target: t._srcEl
                }), t._resolve(t._srcEl)
            }) : (t._resolve(), c.resolve())
        }, i.prototype.success = function() {
            s.trigger("rendered", {
                target: this._sandbox.sandboxEl
            }), this._resolve(this._sandbox.sandboxEl)
        }, t.exports = i
    }, function(t, e, n) {
        function r(t, e) {
            return function() {
                try {
                    e.resolve(t.call(this))
                } catch (t) {
                    e.reject(t)
                }
            }
        }

        function i(t, e) {
            t.call(e)
        }

        function o(t, e) {
            var n = new c;
            return u.read(r(t, n), e), n.promise
        }

        function a(t, e) {
            var n = new c;
            return u.write(r(t, n), e), n.promise
        }

        function s(t, e, n) {
            var i = new c;
            return d.isType("function", t) && (n = e, e = t, t = 1), u.defer(t, r(e, i), n), i.promise
        }
        var u = n(46),
            c = n(1),
            d = n(11);
        t.exports = {
            sync: i,
            read: o,
            write: a,
            defer: s
        }
    }, function(t, e, n) {
        var r;
        ! function() {
            "use strict";

            function i() {
                this.frames = [], this.lastId = 0, this.raf = o, this.batch = {
                    hash: {},
                    read: [],
                    write: [],
                    mode: null
                }
            }
            var o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                return window.setTimeout(t, 1e3 / 60)
            };
            i.prototype.read = function(t, e) {
                var n = this.add("read", t, e),
                    r = n.id;
                this.batch.read.push(n.id);
                var i = "reading" === this.batch.mode || this.batch.scheduled;
                return i ? r : (this.scheduleBatch(), r)
            }, i.prototype.write = function(t, e) {
                var n = this.add("write", t, e),
                    r = this.batch.mode,
                    i = n.id;
                this.batch.write.push(n.id);
                var o = "writing" === r || "reading" === r || this.batch.scheduled;
                return o ? i : (this.scheduleBatch(), i)
            }, i.prototype.defer = function(t, e, n) {
                "function" == typeof t && (n = e, e = t, t = 1);
                var r = this,
                    i = t - 1;
                return this.schedule(i, function() {
                    r.run({
                        fn: e,
                        ctx: n
                    })
                })
            }, i.prototype.clear = function(t) {
                if ("function" == typeof t) return this.clearFrame(t);
                t = Number(t);
                var e = this.batch.hash[t];
                if (e) {
                    var n = this.batch[e.type],
                        r = n.indexOf(t);
                    delete this.batch.hash[t], ~r && n.splice(r, 1)
                }
            }, i.prototype.clearFrame = function(t) {
                var e = this.frames.indexOf(t);
                ~e && this.frames.splice(e, 1)
            }, i.prototype.scheduleBatch = function() {
                var t = this;
                this.schedule(0, function() {
                    t.batch.scheduled = !1, t.runBatch()
                }), this.batch.scheduled = !0
            }, i.prototype.uniqueId = function() {
                return ++this.lastId
            }, i.prototype.flush = function(t) {
                for (var e; e = t.shift();) this.run(this.batch.hash[e]);
            }, i.prototype.runBatch = function() {
                try {
                    this.batch.mode = "reading", this.flush(this.batch.read), this.batch.mode = "writing", this.flush(this.batch.write), this.batch.mode = null
                } catch (t) {
                    throw this.runBatch(), t
                }
            }, i.prototype.add = function(t, e, n) {
                var r = this.uniqueId();
                return this.batch.hash[r] = {
                    id: r,
                    fn: e,
                    ctx: n,
                    type: t
                }
            }, i.prototype.run = function(t) {
                var e = t.ctx || this,
                    n = t.fn;
                if (delete this.batch.hash[t.id], !this.onError) return n.call(e);
                try {
                    n.call(e)
                } catch (t) {
                    this.onError(t)
                }
            }, i.prototype.loop = function() {
                var t = this,
                    e = this.raf;
                this.looping || (e(function n() {
                    var r = t.frames.shift();
                    t.frames.length ? e(n) : t.looping = !1, r && r()
                }), this.looping = !0)
            }, i.prototype.schedule = function(t, e) {
                return this.frames[t] ? this.schedule(t + 1, e) : (this.loop(), this.frames[t] = e)
            };
            var a = new i;
            "undefined" != typeof t && t.exports ? t.exports = a : (r = function() {
                return a
            }.call(e, n, e, t), !(void 0 !== r && (t.exports = r)))
        }()
    }, function(t, e, n) {
        function r(t) {
            return i.write(function() {
                t && t.parentNode && t.parentNode.removeChild(t)
            })
        }
        var i = n(45);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            this._inputsQueue = [], this._task = t, this._hasFlushBeenScheduled = !1
        }
        var i = n(1),
            o = n(49),
            a = n(13);
        r.prototype.add = function(t) {
            var e = new i;
            return this._inputsQueue.push({
                input: t,
                taskDoneDeferred: e
            }), this._hasFlushBeenScheduled || (this._hasFlushBeenScheduled = !0, o(a(this._flush, this))), e.promise
        }, r.prototype._flush = function() {
            try {
                this._task.call(null, this._inputsQueue)
            } catch (t) {
                this._inputsQueue.forEach(function(e) {
                    e.taskDoneDeferred.reject(t)
                })
            }
            this._inputsQueue = [], this._hasFlushBeenScheduled = !1
        }, t.exports = r
    }, function(t, e, n) {
        var r = n(3).Promise;
        t.exports = r._asap
    }, function(t, e, n) {
        function r(t) {
            t.forEach(function(t) {
                var e = t.input.namespace,
                    n = t.input.data,
                    r = t.input.offsite,
                    i = t.input.version;
                d.clientEvent(e, n, r, i), t.taskDoneDeferred.resolve()
            })
        }

        function i(t) {
            function e() {
                t.forEach(function(t) {
                    t.taskDoneDeferred.resolve()
                })
            }

            function n() {
                t.forEach(function(t) {
                    t.taskDoneDeferred.reject()
                })
            }
            c.init(), t.forEach(function(t) {
                var e = t.input.namespace,
                    n = t.input.data,
                    r = t.input.offsite,
                    i = t.input.version;
                c.clientEvent(e, n, r, i)
            }), c.flush().then(e, n)
        }

        function o(t) {
            (1 === t.length ? r : i)(t)
        }

        function a(t, e, n, r) {
            return l.add({
                namespace: t,
                data: e,
                offsite: n,
                version: r
            })
        }

        function s() {
            l.pause()
        }

        function u() {
            l.resume()
        }
        var c = n(51),
            d = n(32),
            f = n(72),
            l = new f(o);
        t.exports = {
            scribe: a,
            pause: s,
            resume: u
        }
    }, function(t, e, n) {
        function r() {
            function t(t) {
                h.body.appendChild(t)
            }
            return T ? I.promise : (l = new _(p), l.insert("rufous-sandbox", null, {
                display: "none"
            }, t).then(function() {
                l.setTitle("Twitter analytics iframe"), d = u(), f = c(), I.resolve([d, f])
            }), T = !0, I.promise)
        }

        function i(t, e) {
            var n, r, i;
            b.isObject(t) && b.isObject(e) && (i = w.flattenClientEventPayload(t, e), n = d.firstChild, n.value = +(+n.value || i.dnt || 0), r = l.createElement("input"), r.type = "hidden", r.name = "l", r.value = w.stringify(i), d.appendChild(r))
        }

        function o(t, e, n) {
            var r = !b.isObject(t),
                o = !!e && !b.isObject(e);
            r || o || I.promise.then(function() {
                i(w.formatClientEventNamespace(t), w.formatClientEventData(e, n))
            })
        }

        function a() {
            return I.promise.then(function() {
                if (d.children.length <= 2) return y.reject();
                var t = y.all([l.doc.body.appendChild(d), l.doc.body.appendChild(f)]).then(function(t) {
                    var e = t[0],
                        n = t[1];
                    return n.addEventListener("load", function() {
                        s(e, n)()
                    }), e.submit(), t
                });
                return d = u(), f = c(), t
            })
        }

        function s(t, e) {
            return function() {
                var n = t.parentNode;
                n && (n.removeChild(t), n.removeChild(e))
            }
        }

        function u() {
            var t = l.createElement("form"),
                e = l.createElement("input"),
                n = l.createElement("input");
            return C++, t.action = w.CLIENT_EVENT_ENDPOINT, t.method = "POST", t.target = x + C, t.id = A + C, e.type = "hidden", e.name = "dnt", e.value = v.enabled(), n.type = "hidden", n.name = "tfw_redirect", n.value = w.RUFOUS_REDIRECT, t.appendChild(e), t.appendChild(n), t
        }

        function c() {
            var t = x + C;
            return m({
                id: t,
                name: t,
                width: 0,
                height: 0,
                border: 0
            }, {
                display: "none"
            }, l.doc)
        }
        var d, f, l, h = n(9),
            p = n(7),
            m = n(52),
            v = n(33),
            g = n(1),
            y = n(2),
            w = n(38),
            b = n(11),
            _ = n(53),
            E = Math.floor(1e3 * Math.random()) + "_",
            x = "rufous-frame-" + E + "-",
            A = "rufous-form-" + E + "-",
            C = 0,
            T = !1,
            I = new g;
        t.exports = {
            clientEvent: o,
            flush: a,
            init: r
        }
    }, function(t, e, n) {
        var r = n(9),
            i = n(11);
        t.exports = function(t, e, n) {
            var o;
            if (n = n || r, t = t || {}, e = e || {}, t.name) {
                try {
                    o = n.createElement('<iframe name="' + t.name + '"></iframe>')
                } catch (e) {
                    o = n.createElement("iframe"), o.name = t.name
                }
                delete t.name
            } else o = n.createElement("iframe");
            return t.id && (o.id = t.id, delete t.id), o.allowtransparency = "true", o.scrolling = "no", o.setAttribute("frameBorder", 0), o.setAttribute("allowTransparency", !0), i.forIn(t, function(t, e) {
                o.setAttribute(t, e)
            }), i.forIn(e, function(t, e) {
                o.style[t] = e
            }), o
        }
    }, function(t, e, n) {
        var r = n(54),
            i = n(63);
        t.exports = r.build([i])
    }, function(t, e, n) {
        var r = n(55),
            i = n(58),
            o = n(13);
        r = Object.create(r), r.build = o(r.build, null, i), t.exports = r
    }, function(t, e, n) {
        function r() {
            return s.toRealArray(arguments)
        }

        function i(t, e, n) {
            var r = new t;
            return e = a(o(e || [])), e.forEach(function(t) {
                t.call(null, r)
            }), r.build(n)
        }
        var o = n(56),
            a = n(57),
            s = n(11);
        t.exports = {
            couple: r,
            build: i
        }
    }, function(t, e, n) {
        function r(t) {
            var e = [];
            return t.forEach(function(t) {
                var n = i.isType("array", t) ? r(t) : [t];
                e = e.concat(n)
            }), e
        }
        var i = n(11);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            return t.filter(function(e, n) {
                return t.indexOf(e) === n
            })
        }
        t.exports = n
    }, function(t, e, n) {
        function r() {
            i.apply(this, arguments)
        }
        var i = n(59),
            o = n(11),
            a = n(62);
        r.prototype = Object.create(i.prototype), o.aug(r.prototype, {
            factory: a
        }), t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = this[e];
            if (!r) throw new Error(e + " does not exist");
            this[e] = t(r, n)
        }

        function i() {
            this.Component = this.factory(), this._adviceArgs = [], this._lastArgs = []
        }
        var o = n(60),
            a = n(11),
            s = n(61);
        a.aug(i.prototype, {
            factory: s,
            build: function(t) {
                var e = this;
                this.Component;
                return a.aug(this.Component.prototype.boundParams, t), this._adviceArgs.concat(this._lastArgs).forEach(function(t) {
                    r.apply(e.Component.prototype, t)
                }), delete this._lastArgs, delete this._adviceArgs, this.Component
            },
            params: function(t) {
                var e = this.Component.prototype.paramConfigs;
                t = t || {}, this.Component.prototype.paramConfigs = a.aug({}, t, e)
            },
            define: function(t, e) {
                if (t in this.Component.prototype) throw new Error(t + " has previously been defined");
                this.override(t, e)
            },
            defineStatic: function(t, e) {
                this.Component[t] = e
            },
            override: function(t, e) {
                this.Component.prototype[t] = e
            },
            defineProperty: function(t, e) {
                if (t in this.Component.prototype) throw new Error(t + " has previously been defined");
                this.overrideProperty(t, e)
            },
            overrideProperty: function(t, e) {
                var n = a.aug({
                    configurable: !0
                }, e);
                Object.defineProperty(this.Component.prototype, t, n)
            },
            before: function(t, e) {
                this._adviceArgs.push([o.before, t, e])
            },
            after: function(t, e) {
                this._adviceArgs.push([o.after, t, e])
            },
            around: function(t, e) {
                this._adviceArgs.push([o.around, t, e])
            },
            last: function(t, e) {
                this._lastArgs.push([o.after, t, e])
            }
        }), t.exports = i
    }, function(t, e, n) {
        function r(t, e) {
            return function() {
                var n, r = this,
                    i = arguments;
                return n = e.apply(this, arguments), a.isPromise(n) ? n.then(function() {
                    return t.apply(r, i)
                }) : t.apply(this, arguments)
            }
        }

        function i(t, e) {
            return function() {
                function n(t, e) {
                    return a.isPromise(e) ? e.then(function() {
                        return t
                    }) : t
                }
                var r, i = this,
                    o = arguments;
                return r = t.apply(this, arguments), a.isPromise(r) ? r.then(function(t) {
                    return n(t, e.apply(i, o))
                }) : n(r, e.apply(this, arguments))
            }
        }

        function o(t, e) {
            return function() {
                var n = s.toRealArray(arguments);
                return n.unshift(u(t, this)), e.apply(this, n)
            }
        }
        var a = n(42),
            s = n(11),
            u = n(13);
        t.exports = {
            before: r,
            after: i,
            around: o
        }
    }, function(t, e, n) {
        function r() {
            return !0
        }

        function i(t) {
            return t
        }

        function o(t, e, n) {
            var r = null;
            return t.some(function(t) {
                if (t = s.isType("function", t) ? t() : t, e(t)) return r = n(t), !0
            }), r
        }

        function a() {
            function t(t) {
                var e = this;
                t = t || {}, this.params = Object.keys(this.paramConfigs).reduce(function(n, a) {
                    var s = [],
                        u = e.boundParams,
                        c = e.paramConfigs[a],
                        d = c.validate || r,
                        f = c.transform || i;
                    if (a in u && s.push(u[a]), a in t && s.push(t[a]), s = "fallback" in c ? s.concat(c.fallback) : s, n[a] = o(s, d, f), c.required && null == n[a]) throw new Error(a + " is a required parameter");
                    return n
                }, {}), this.initialize()
            }
            return s.aug(t.prototype, {
                paramConfigs: {},
                boundParams: {},
                initialize: function() {}
            }), t
        }
        var s = n(11);
        t.exports = a
    }, function(t, e, n) {
        function r() {
            function t(t) {
                e.apply(this, arguments), Object.defineProperty(this, "targetGlobal", {
                    value: t
                })
            }
            var e = a();
            return t.prototype = Object.create(e.prototype), u.aug(t.prototype, {
                id: null,
                initialized: !1,
                width: 0,
                height: 0,
                sandboxEl: null,
                insert: function() {
                    return s.reject()
                },
                onResize: function() {},
                addClass: function(t) {
                    var e = this.sandboxEl;
                    return t = Array.isArray(t) ? t : [t], o.write(function() {
                        t.forEach(function(t) {
                            i.add(e, t)
                        })
                    })
                },
                removeClass: function(t) {
                    var e = this.sandboxEl;
                    return t = Array.isArray(t) ? t : [t], o.write(function() {
                        t.forEach(function(t) {
                            i.remove(e, t)
                        })
                    })
                },
                styleSelf: function(t) {
                    var e = this;
                    return o.write(function() {
                        u.forIn(t, function(t, n) {
                            e.sandboxEl.style[t] = n
                        })
                    })
                }
            }), t
        }
        var i = n(20),
            o = n(45),
            a = n(61),
            s = n(2),
            u = n(11);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n, r) {
            return e = w.aug({
                id: t
            }, x, e), n = w.aug({}, A, n), m(e, n, r)
        }

        function i(t) {
            try {
                t.contentWindow.document
            } catch (t) {
                return y.reject(t)
            }
            return y.resolve(t)
        }

        function o(t, e, n, i, o) {
            var a = new g,
                u = _.generate(),
                d = r(t, e, n, o);
            return b.set(["sandbox", u], function() {
                var t = d.contentWindow.document,
                    e = "<!DOCTYPE html><html><head></head><body></body></html>";
                c.write(function() {
                    t.write(e)
                }).then(function() {
                    t.close(), a.resolve(d)
                })
            }), d.src = ["javascript:", 'document.write("");', "try { window.parent.document; }", 'catch (e) { document.domain="' + s.domain + '"; }', "window.parent." + b.fullPath(["sandbox", u]) + "();"].join(""), d.addEventListener("error", a.reject, !1), c.write(function() {
                i.parentNode.replaceChild(d, i)
            }), a.promise
        }

        function a(t) {
            t.overrideProperty("id", {
                get: function() {
                    return this.sandboxEl && this.sandboxEl.id
                }
            }), t.overrideProperty("initialized", {
                get: function() {
                    return !!this.win
                }
            }), t.overrideProperty("width", {
                get: function() {
                    return this._width
                }
            }), t.overrideProperty("height", {
                get: function() {
                    return this._height
                }
            }), t.overrideProperty("sandboxEl", {
                get: function() {
                    return this.iframeEl
                }
            }), t.defineProperty("iframeEl", {
                get: function() {
                    return this._iframe
                }
            }), t.defineProperty("rootEl", {
                get: function() {
                    return this.doc && this.doc.documentElement
                }
            }), t.defineProperty("widgetEl", {
                get: function() {
                    return this.doc && this.doc.body.firstElementChild
                }
            }), t.defineProperty("win", {
                get: function() {
                    return this.iframeEl && this.iframeEl.contentWindow
                }
            }), t.defineProperty("doc", {
                get: function() {
                    return this.win && this.win.document
                }
            }), t.define("_updateCachedDimensions", function() {
                var t = this;
                return c.read(function() {
                    var e, n = v(t.sandboxEl);
                    "visible" == t.sandboxEl.style.visibility ? t._width = n.width : (e = v(t.sandboxEl.parentElement).width, t._width = Math.min(n.width, e)), t._height = n.height
                })
            }), t.define("_setTargetToBlank", function() {
                var t = this.createElement("base");
                t.target = "_blank", this.doc.head.appendChild(t)
            }), t.define("_didResize", function() {
                var t = this,
                    e = this._resizeHandlers.slice(0);
                return this._updateCachedDimensions().then(function() {
                    e.forEach(function(e) {
                        e(t)
                    })
                })
            }), t.define("setTitle", function(t) {
                this.iframeEl.title = t
            }), t.override("createElement", function(t) {
                return this.doc.createElement(t)
            }), t.override("createFragment", function() {
                return this.doc.createDocumentFragment()
            }), t.override("htmlToElement", function(t) {
                var e;
                return e = this.createElement("div"), e.innerHTML = t, e.firstElementChild
            }), t.override("hasSelectedText", function() {
                return !!d.getSelectedText(this.win)
            }), t.override("addRootClass", function(t) {
                var e = this.rootEl;
                return t = Array.isArray(t) ? t : [t], this.initialized ? c.write(function() {
                    t.forEach(function(t) {
                        u.add(e, t)
                    })
                }) : y.reject(new Error("sandbox not initialized"))
            }), t.override("removeRootClass", function(t) {
                var e = this.rootEl;
                return t = Array.isArray(t) ? t : [t], this.initialized ? c.write(function() {
                    t.forEach(function(t) {
                        u.remove(e, t)
                    })
                }) : y.reject(new Error("sandbox not initialized"))
            }), t.override("hasRootClass", function(t) {
                return u.present(this.rootEl, t)
            }), t.define("addStyleSheet", function(t, e) {
                var n, r = new g;
                return this.initialized ? (n = this.createElement("link"), n.type = "text/css", n.rel = "stylesheet", n.href = t, n.addEventListener("load", r.resolve, !1), n.addEventListener("error", r.reject, !1), c.write(E(e, null, n)).then(function() {
                    return l(t).then(r.resolve, r.reject), r.promise
                })) : y.reject(new Error("sandbox not initialized"))
            }), t.override("prependStyleSheet", function(t) {
                var e = this.doc;
                return this.addStyleSheet(t, function(t) {
                    var n = e.head.firstElementChild;
                    return n ? e.head.insertBefore(t, n) : e.head.appendChild(t)
                })
            }), t.override("appendStyleSheet", function(t) {
                var e = this.doc;
                return this.addStyleSheet(t, function(t) {
                    return e.head.appendChild(t)
                })
            }), t.define("addCss", function(t, e) {
                var n;
                return h.inlineStyle() ? (n = this.createElement("style"), n.type = "text/css", n.appendChild(this.doc.createTextNode(t)), c.write(E(e, null, n))) : y.resolve()
            }), t.override("prependCss", function(t) {
                var e = this.doc;
                return this.addCss(t, function(t) {
                    var n = e.head.firstElementChild;
                    return n ? e.head.insertBefore(t, n) : e.head.appendChild(t)
                })
            }), t.override("appendCss", function(t) {
                var e = this.doc;
                return this.addCss(t, function(t) {
                    return e.head.appendChild(t)
                })
            }), t.override("makeVisible", function() {
                var t = this;
                return this.styleSelf(C).then(function() {
                    t._updateCachedDimensions()
                })
            }), t.override("injectWidgetEl", function(t) {
                var e = this;
                return this.initialized ? this.widgetEl ? y.reject(new Error("widget already injected")) : c.write(function() {
                    e.doc.body.appendChild(t)
                }) : y.reject(new Error("sandbox not initialized"))
            }), t.override("matchHeightToContent", function() {
                var t, e = this;
                return c.read(function() {
                    t = e.widgetEl ? v(e.widgetEl).height : 0
                }), c.write(function() {
                    e.sandboxEl.style.height = t + "px"
                }).then(function() {
                    return e._updateCachedDimensions()
                })
            }), t.override("matchWidthToContent", function() {
                var t, e = this;
                return c.read(function() {
                    t = e.widgetEl ? v(e.widgetEl).width : 0
                }), c.write(function() {
                    e.sandboxEl.style.width = t + "px"
                }).then(function() {
                    return e._updateCachedDimensions()
                })
            }), t.after("initialize", function() {
                this._iframe = null, this._width = this._height = 0, this._resizeHandlers = []
            }), t.override("insert", function(t, e, n, a) {
                var s = this,
                    u = new g,
                    d = this.targetGlobal.document,
                    f = r(t, e, n, d);
                return c.write(E(a, null, f)), f.addEventListener("load", function() {
                    i(f).then(null, E(o, null, t, e, n, f, d)).then(u.resolve, u.reject)
                }, !1), f.addEventListener("error", u.reject, !1), u.promise.then(function(t) {
                    var e = p(s._didResize, P, s);
                    return s._iframe = t, s.win.addEventListener("resize", e, !1), y.all([s._setTargetToBlank(), s.addRootClass(T), s.prependCss(I)])
                })
            }), t.override("onResize", function(t) {
                this._resizeHandlers.push(t)
            }), t.after("styleSelf", function() {
                return this._updateCachedDimensions()
            })
        }
        var s = n(9),
            u = n(20),
            c = n(45),
            d = n(64),
            f = n(54),
            l = n(65),
            h = n(66),
            p = n(67),
            m = n(52),
            v = (n(68), n(69)),
            g = n(1),
            y = n(2),
            w = n(11),
            b = n(14),
            _ = n(28),
            E = n(13),
            x = {
                allowfullscreen: "true"
            },
            A = {
                position: "absolute",
                visibility: "hidden",
                display: "block",
                width: "0px",
                height: "0px",
                padding: "0",
                border: "none"
            },
            C = {
                position: "static",
                visibility: "visible"
            },
            T = "SandboxRoot",
            I = ".SandboxRoot { display: none; }",
            P = 50;
        t.exports = f.couple(n(70), a)
    }, function(t, e, n) {
        function r(t) {
            return t = t || o, t.getSelection && t.getSelection()
        }

        function i(t) {
            var e = r(t);
            return e ? e.toString() : ""
        }
        var o = n(7);
        t.exports = {
            getSelection: r,
            getSelectedText: i
        }
    }, function(t, e, n) {
        function r(t) {
            var e = new a,
                n = i.createElement("img");
            return n.onload = n.onerror = function() {
                o.setTimeout(e.resolve, 50)
            }, n.src = t, o.setTimeout(e.reject, s), e.promise
        }
        var i = n(9),
            o = n(7),
            a = n(1),
            s = 2e4;
        t.exports = r
    }, function(t, e, n) {
        function r() {
            return h + l.generate()
        }

        function i() {
            var t = r(),
                e = s.createElement("div"),
                n = s.createElement("style"),
                i = "." + t + " { visibility: hidden; }";
            return !!s.body && (f.asBoolean(c.val("widgets:csp")) && (o = !1), void 0 !== o ? o : (e.style.display = "none", a.add(e, t), n.type = "text/css", n.appendChild(s.createTextNode(i)), s.body.appendChild(n), s.body.appendChild(e), o = "hidden" === u.getComputedStyle(e).visibility, d(e), d(n), o))
        }
        var o, a = n(20),
            s = n(9),
            u = n(7),
            c = n(37),
            d = n(47),
            f = n(25),
            l = n(28),
            h = "csptest";
        t.exports = {
            inlineStyle: i
        }
    }, function(t, e, n) {
        function r(t, e, n) {
            function r() {
                var s = n || this,
                    u = arguments,
                    c = +new Date;
                return i.clearTimeout(o), c - a > e ? (a = c, void t.apply(s, u)) : void(o = i.setTimeout(function() {
                    r.apply(s, u)
                }, e))
            }
            var o, a = 0;
            return n = n || null, r
        }
        var i = n(7);
        t.exports = r
    }, function(t, e, n) {
        function r() {
            c("info", l.toRealArray(arguments))
        }

        function i() {
            c("warn", l.toRealArray(arguments))
        }

        function o() {
            c("error", l.toRealArray(arguments))
        }

        function a(t) {
            m && (p[t] = u())
        }

        function s(t) {
            var e;
            m && (p[t] ? (e = u(), r("_twitter", t, e - p[t])) : o("timeEnd() called before time() for id: ", t))
        }

        function u() {
            return f.performance && +f.performance.now() || +new Date
        }

        function c(t, e) {
            if (f[h] && f[h][t]) switch (e.length) {
                case 1:
                    f[h][t](e[0]);
                    break;
                case 2:
                    f[h][t](e[0], e[1]);
                    break;
                case 3:
                    f[h][t](e[0], e[1], e[2]);
                    break;
                case 4:
                    f[h][t](e[0], e[1], e[2], e[3]);
                    break;
                case 5:
                    f[h][t](e[0], e[1], e[2], e[3], e[4]);
                    break;
                default:
                    0 !== e.length && f[h].warn && f[h].warn("too many params passed to logger." + t)
            }
        }
        var d = n(18),
            f = n(7),
            l = n(11),
            h = ["con", "sole"].join(""),
            p = {},
            m = l.contains(d.href, "tw_debug=true");
        t.exports = {
            info: r,
            warn: i,
            error: o,
            time: a,
            timeEnd: s
        }
    }, function(t, e) {
        function n(t) {
            var e = t.getBoundingClientRect();
            return {
                width: e.width,
                height: e.height
            }
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            t.define("createElement", i), t.define("createFragment", i), t.define("htmlToElement", i), t.define("hasSelectedText", i), t.define("addRootClass", i), t.define("removeRootClass", i), t.define("hasRootClass", i), t.define("prependStyleSheet", i), t.define("appendStyleSheet", i), t.define("prependCss", i), t.define("appendCss", i), t.define("makeVisible", i), t.define("injectWidgetEl", i), t.define("matchHeightToContent", i), t.define("matchWidthToContent", i)
        }
        var i = n(71);
        t.exports = r
    }, function(t, e) {
        function n() {
            throw new Error("unimplemented method")
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e) {
            this._inputsQueue = [], this._task = t, this._isPaused = !1, this._flushDelay = e && e.flushDelay || a, this._pauseLength = e && e.pauseLength || s, this._flushTimeout = void 0
        }
        var i = n(1),
            o = n(13),
            a = 100,
            s = 3e3;
        r.prototype.add = function(t) {
            var e = new i;
            return this._inputsQueue.push({
                input: t,
                taskDoneDeferred: e
            }), this._scheduleFlush(), e.promise
        }, r.prototype._scheduleFlush = function() {
            this._isPaused || (clearTimeout(this._flushTimeout), this._flushTimeout = setTimeout(o(this._flush, this), this._flushDelay))
        }, r.prototype._flush = function() {
            try {
                this._task.call(null, this._inputsQueue)
            } catch (t) {
                this._inputsQueue.forEach(function(e) {
                    e.taskDoneDeferred.reject(t)
                })
            }
            this._inputsQueue = [], this._flushTimeout = void 0
        }, r.prototype.pause = function(t) {
            clearTimeout(this._flushTimeout), this._isPaused = !0, !t && this._pauseLength && setTimeout(o(this.resume, this), this._pauseLength)
        }, r.prototype.resume = function() {
            this._isPaused = !1, this._scheduleFlush()
        }, t.exports = r
    }, function(t, e, n) {
        t.exports = [n(74), n(107), n(123), n(156), n(162), n(168), n(213), n(225), n(230)]
    }, function(t, e, n) {
        function r(t) {
            var e = t.getAttribute("data-show-screen-name"),
                n = u(t),
                r = t.getAttribute("href"),
                i = t.getAttribute("data-screen-name"),
                c = e ? a.asBoolean(e) : null,
                d = t.getAttribute("data-size"),
                f = o.decodeURL(r),
                l = f.recipient_id,
                h = t.getAttribute("data-text") || f.text,
                p = t.getAttribute("data-welcome-message-id") || f.welcomeMessageId;
            return s.aug(n, {
                screenName: i,
                showScreenName: c,
                size: d,
                text: h,
                userId: l,
                welcomeMessageId: p
            })
        }

        function i(t) {
            var e = c(t, f);
            return e.map(function(t) {
                return d(r(t), t.parentNode, t)
            })
        }
        var o = n(24),
            a = n(25),
            s = n(11),
            u = n(75),
            c = n(77)(),
            d = n(80),
            f = "a.twitter-dm-button";
        t.exports = i
    }, function(t, e, n) {
        function r(t) {
            var e = t.href && t.href.split("?")[1],
                n = e ? a.decode(e) : {},
                r = {
                    lang: u(t),
                    width: t.getAttribute("data-width") || t.getAttribute("width"),
                    height: t.getAttribute("data-height") || t.getAttribute("height"),
                    related: t.getAttribute("data-related"),
                    partner: t.getAttribute("data-partner")
                };
            return o.asBoolean(t.getAttribute("data-dnt")) && i.setOn(), s.forIn(r, function(t, e) {
                var r = n[t];
                n[t] = o.hasValue(r) ? r : e
            }), n
        }
        var i = n(33),
            o = n(25),
            a = n(24),
            s = n(11),
            u = n(76);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e;
            if (t) return e = t.lang || t.getAttribute("data-lang"), i.isType("string", e) ? e : r(t.parentElement)
        }
        var i = n(11);
        t.exports = r
    }, function(t, e, n) {
        var r = n(78),
            i = n(28);
        t.exports = function() {
            var t = "data-twitter-extracted-" + i.generate();
            return function(e, n) {
                function i(e) {
                    return !e.hasAttribute(t)
                }

                function o(e) {
                    return e.setAttribute(t, "true"), e
                }
                return r(e, n).filter(i).map(o)
            }
        }
    }, function(t, e, n) {
        function r(t, e) {
            return o(t, e) ? [t] : i.toRealArray(t.querySelectorAll(e))
        }
        var i = n(11),
            o = n(79);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            if (a) return a.call(t, e)
        }
        var i = n(7),
            o = i.HTMLElement,
            a = o.prototype.matches || o.prototype.matchesSelector || o.prototype.webkitMatchesSelector || o.prototype.mozMatchesSelector || o.prototype.msMatchesSelector || o.prototype.oMatchesSelector;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            return new i(o, a, "twitter-dm-button", t, e, n)
        }
        var i = n(81),
            o = n(82),
            a = n(103);
        t.exports = r
    }, function(t, e) {
        function n(t, e, n, r, i, o) {
            this.factory = t, this.Sandbox = e, this.srcEl = o, this.targetEl = i, this.parameters = r, this.className = n
        }
        n.prototype.destroy = function() {
            this.srcEl = this.targetEl = null
        }, t.exports = n
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(1, function(i, o) {
                var a;
                if (i) return r.reject(i);
                try {
                    a = n(83), r.resolve(new a(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , function(t, e, n) {
        var r = n(55),
            i = n(85),
            o = n(13);
        r = Object.create(r), r.build = o(r.build, null, i), t.exports = r
    }, function(t, e, n) {
        function r() {
            i.apply(this, arguments), this.Widget = this.Component
        }
        var i = n(59),
            o = n(11),
            a = n(86);
        r.prototype = Object.create(i.prototype), o.aug(r.prototype, {
            factory: a,
            build: function() {
                var t = i.prototype.build.apply(this, arguments);
                return t
            },
            selectors: function(t) {
                var e = this.Widget.prototype.selectors;
                t = t || {}, this.Widget.prototype.selectors = o.aug({}, t, e)
            }
        }), t.exports = r
    }, function(t, e, n) {
        function r() {
            function t(t, n) {
                e.apply(this, arguments), this.id = d + c(), this.sandbox = n
            }
            var e = a();
            return t.prototype = Object.create(e.prototype), s.aug(t.prototype, {
                selectors: {},
                hydrate: function() {
                    return i.resolve()
                },
                prepForInsertion: function() {},
                render: function() {
                    return i.resolve()
                },
                show: function() {
                    return i.resolve()
                },
                resize: function() {
                    return i.resolve()
                },
                select: function(t, e) {
                    return 1 === arguments.length && (e = t, t = this.el), t ? (e = this.selectors[e] || e, s.toRealArray(t.querySelectorAll(e))) : []
                },
                selectOne: function() {
                    return this.select.apply(this, arguments)[0]
                },
                selectLast: function() {
                    return this.select.apply(this, arguments).pop()
                },
                on: function(t, e, n) {
                    function r(t) {
                        s.addEventListener(t, n, !1)
                    }

                    function i(t) {
                        o.delegate(s, t, a, n)
                    }
                    var a, s = this.el;
                    this.el && (t = (t || "").split(/\s+/), 2 === arguments.length ? n = e : a = e, a = this.selectors[a] || a, n = u(n, this), t.forEach(a ? i : r))
                }
            }), t
        }
        var i = n(2),
            o = n(19),
            a = n(61),
            s = n(11),
            u = n(13),
            c = n(87),
            d = "twitter-widget-";
        t.exports = r
    }, function(t, e) {
        function n() {
            return String(r++)
        }
        var r = 0;
        t.exports = n
    }, , function(t, e, n) {
        function r(t) {
            return "dark" === t ? "dark" : "light"
        }

        function i(t, e, n) {
            var i, o;
            return n = r(n), i = s.isRtlLang(e) ? "rtl" : "ltr", o = [t, c.css, n, i, "css"].join("."), u.base() + "/css/" + o
        }

        function o() {
            return u.base() + "/css/" + ["periscope_on_air", c.css, "css"].join(".")
        }

        function a() {
            return u.base() + "/css/" + ["dm_button", c.css, "css"].join(".")
        }
        var s = n(90),
            u = n(93),
            c = n(94),
            d = n(13);
        t.exports = {
            dmButton: a,
            tweet: d(i, null, "tweet"),
            timeline: d(i, null, "timeline"),
            video: d(i, null, "video"),
            moment: d(i, null, "moment"),
            grid: d(i, null, "grid"),
            periscopeOnAir: o
        }
    }, function(t, e, n) {
        function r(t) {
            return t = String(t).toLowerCase(), o.contains(s, t)
        }

        function i(t) {
            return t = (t || "").toLowerCase(), t = t.replace("_", "-"), a(t) ? t : (t = t.replace(/\-.*/, ""), a(t) ? t : "en")
        }
        var o = n(11),
            a = n(91),
            s = ["ar", "fa", "he", "ur"];
        t.exports = {
            isRtlLang: r,
            matchLanguage: i
        }
    }, function(t, e, n) {
        function r(t) {
            return "en" === t || i.contains(o, t)
        }
        var i = n(11),
            o = n(92);
        t.exports = r
    }, function(t, e) {
        t.exports = ["hi", "zh-cn", "fr", "zh-tw", "msa", "fil", "fi", "sv", "pl", "ja", "ko", "de", "it", "pt", "es", "ru", "id", "tr", "da", "no", "nl", "hu", "fa", "ar", "ur", "he", "th", "cs", "uk", "vi", "ro", "bn", "el", "en-gb", "gu", "kn", "mr", "ta", "bg", "ca", "hr", "sr", "sk"]
    }, function(t, e, n) {
        function r(t) {
            var e = o.get("host");
            return a(t) + "://" + e
        }
        var i = n(18),
            o = n(14),
            a = function() {
                return /^http\:$/.test(i.protocol) ? function(t) {
                    return t ? "https" : "http"
                } : function() {
                    return "https"
                }
            }();
        t.exports = {
            base: r
        }
    }, function(t, e) {
        alert('here');
        t.exports = {
            css: "3a5bba37d8a97ff1a6185653efe28c38"
        }
    }, , function(t, e, n) {
        function r(t) {
            t.define("injectRefSrcParam", function(t) {
                t.getAttribute(a) || (t.setAttribute(a, !0), t.href = i(t.href))
            }), t.after("render", function() {
                this.on("click", "A", function(t, e) {
                    o.isTwitterURL(e.href) && this.injectRefSrcParam(e)
                })
            })
        }
        var i = n(97),
            o = n(23),
            a = "data-url-refsrc-injected";
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return i.url(t, {
                ref_src: o
            })
        }
        var i = n(24),
            o = "twsrc^tfw";
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            t.define("scribeNamespace", function() {
                return {
                    client: "tfw"
                }
            }), t.define("scribeData", function() {
                return {
                    widget_origin: a.rootDocumentLocation(),
                    widget_frame: a.isFramed() && a.currentDocumentLocation()
                }
            }), t.define("scribe", function(t, e, n) {
                t = s.aug(this.scribeNamespace(), t || {}), e = s.aug(this.scribeData(), e || {}), i.scribe(t, e, !1, n)
            }), t.define("scribeInteraction", function(t, e, n) {
                var r = o.extractTermsFromDOM(t.target);
                r.action = t.type, this.scribe(r, e, n)
            })
        }
        var i = n(50),
            o = n(38),
            a = n(34),
            s = n(11);
        t.exports = r
    }, , function(t, e, n) {
        function r(t) {
            var e;
            if (t) return e = s([t]), {
                item_ids: Object.keys(e),
                item_details: e
            }
        }

        function i(t) {
            t.selectors({
                tweetIdInfo: ".js-tweetIdInfo"
            }), t.define("scribeClickInteraction", function(t, e) {
                var n = o.closest(this.selectors.tweetIdInfo, e, this.el);
                this.scribeInteraction(t, r(n))
            }), t.after("render", function() {
                this.on("click", "A", this.scribeClickInteraction), this.on("click", "BUTTON", this.scribeClickInteraction)
            })
        }
        var o = n(21),
            a = n(84),
            s = n(101);
        t.exports = a.couple(n(98), i)
    }, function(t, e, n) {
        function r(t) {
            return t ? (t = Array.isArray(t) ? t : [t], t.reduce(function(t, e) {
                var n = e.getAttribute("data-tweet-id"),
                    r = e.getAttribute("data-rendered-tweet-id") || n;
                return n === r ? t[r] = {
                    item_type: i.TWEET
                } : n && (t[r] = {
                    item_type: i.RETWEET,
                    target_type: i.TWEET,
                    target_id: n
                }), t
            }, {})) : {}
        }
        var i = n(102);
        t.exports = r
    }, function(t, e) {
        t.exports = {
            TWEET: 0,
            RETWEET: 10,
            CUSTOM_TIMELINE: 17,
            LIVE_VIDEO_EVENT: 28
        }
    }, function(t, e, n) {
        var r = n(104),
            i = n(53);
        t.exports = r.isSupported() ? r : i
    }, function(t, e, n) {
        var r = n(54),
            i = n(105);
        t.exports = r.build([i])
    }, function(t, e, n) {
        function r(t) {
            t.defineStatic("isSupported", function() {
                return !!o.HTMLElement.prototype.createShadowRoot && l.inlineStyle() && !h.android()
            }), t.overrideProperty("id", {
                get: function() {
                    return this.sandboxEl && this.sandboxEl.id
                }
            }), t.overrideProperty("initialized", {
                get: function() {
                    return !!this._shadowHost
                }
            }), t.overrideProperty("width", {
                get: function() {
                    return this._width
                }
            }), t.overrideProperty("height", {
                get: function() {
                    return this._height
                }
            }), t.overrideProperty("sandboxEl", {
                get: function() {
                    return this._shadowHost
                }
            }), t.define("_updateCachedDimensions", function() {
                var t = this;
                return u.read(function() {
                    var e, n = p(t.sandboxEl);
                    "visible" == t.sandboxEl.style.visibility ? t._width = n.width : (e = p(t.sandboxEl.parentElement).width, t._width = Math.min(n.width, e)), t._height = n.height
                })
            }), t.define("_didResize", function() {
                var t = this,
                    e = this._resizeHandlers.slice(0);
                return this._updateCachedDimensions().then(function() {
                    e.forEach(function(e) {
                        e(t)
                    })
                })
            }), t.override("createElement", function(t) {
                return this.targetGlobal.document.createElement(t)
            }), t.override("createFragment", function() {
                return this.targetGlobal.document.createDocumentFragment()
            }), t.override("htmlToElement", function(t) {
                var e;
                return e = this.createElement("div"), e.innerHTML = t, e.firstElementChild
            }), t.override("hasSelectedText", function() {
                return !!c.getSelectedText(this.targetGlobal)
            }), t.override("addRootClass", function(t) {
                var e = this._shadowRootBody;
                return t = Array.isArray(t) ? t : [t], this.initialized ? u.write(function() {
                    t.forEach(function(t) {
                        a.add(e, t)
                    })
                }) : g.reject(new Error("sandbox not initialized"))
            }), t.override("removeRootClass", function(t) {
                var e = this._shadowRootBody;
                return t = Array.isArray(t) ? t : [t], this.initialized ? u.write(function() {
                    t.forEach(function(t) {
                        a.remove(e, t)
                    })
                }) : g.reject(new Error("sandbox not initialized"))
            }), t.override("hasRootClass", function(t) {
                return a.present(this._shadowRootBody, t)
            }), t.override("addStyleSheet", function(t, e) {
                return this.addCss('@import url("' + t + '");', e).then(function() {
                    return f(t)
                })
            }), t.override("prependStyleSheet", function(t) {
                var e = this._shadowRoot;
                return this.addStyleSheet(t, function(t) {
                    var n = e.firstElementChild;
                    return n ? e.insertBefore(t, n) : e.appendChild(t)
                })
            }), t.override("appendStyleSheet", function(t) {
                var e = this._shadowRoot;
                return this.addStyleSheet(t, function(t) {
                    return e.appendChild(t)
                })
            }), t.override("addCss", function(t, e) {
                var n;
                return this.initialized ? l.inlineStyle() ? (n = this.createElement("style"), n.type = "text/css", n.appendChild(this.targetGlobal.document.createTextNode(t)), u.write(m(e, null, n))) : g.resolve() : g.reject(new Error("sandbox not initialized"))
            }), t.override("prependCss", function(t) {
                var e = this._shadowRoot;
                return this.addCss(t, function(t) {
                    var n = e.firstElementChild;
                    return n ? e.insertBefore(t, n) : e.appendChild(t)
                })
            }), t.override("appendCss", function(t) {
                var e = this._shadowRoot;
                return this.addCss(t, function(t) {
                    return e.appendChild(t)
                })
            }), t.override("makeVisible", function() {
                return this.styleSelf(_)
            }), t.override("injectWidgetEl", function(t) {
                function e() {
                    var t = v(n._didResize, w, n);
                    new i(n._shadowRootBody, t)
                }
                var n = this;
                return this.initialized ? this._shadowRootBody.firstElementChild ? g.reject(new Error("widget already injected")) : u.write(function() {
                    n._shadowRootBody.appendChild(t)
                }).then(function() {
                    return n._updateCachedDimensions()
                }).then(e) : g.reject(new Error("sandbox not initialized"))
            }), t.override("matchHeightToContent", function() {
                return g.resolve()
            }), t.override("matchWidthToContent", function() {
                return g.resolve()
            }), t.override("insert", function(t, e, n, r) {
                var i = this.targetGlobal.document,
                    o = this._shadowHost = i.createElement(E),
                    a = this._shadowRoot = o.createShadowRoot(),
                    c = this._shadowRootBody = i.createElement("div");
                return y.forIn(e || {}, function(t, e) {
                    o.setAttribute(t, e)
                }), o.id = t, a.appendChild(c), s.delegate(c, "click", "A", function(t, e) {
                    e.hasAttribute("target") || e.setAttribute("target", "_blank")
                }), g.all([this.styleSelf(b), this.addRootClass(x), this.prependCss(A), u.write(r.bind(null, o))])
            }), t.override("onResize", function(t) {
                this._resizeHandlers.push(t)
            }), t.after("initialize", function() {
                this._shadowHost = this._shadowRoot = this._shadowRootBody = null, this._width = this._height = 0, this._resizeHandlers = []
            }), t.after("styleSelf", function() {
                return this._updateCachedDimensions()
            })
        }
        var i = n(106),
            o = n(7),
            a = n(20),
            s = n(19),
            u = n(45),
            c = n(64),
            d = n(54),
            f = n(65),
            l = n(66),
            h = n(8),
            p = n(69),
            m = n(13),
            v = n(67),
            g = n(2),
            y = n(11),
            w = 50,
            b = {
                position: "absolute",
                visibility: "hidden",
                display: "block",
                transform: "rotate(0deg)"
            },
            _ = {
                position: "static",
                visibility: "visible"
            },
            E = "twitterwidget",
            x = "SandboxRoot",
            A = ".SandboxRoot { display: none; }";
        t.exports = d.couple(n(70), r)
    }, function(t, e) {
        ! function() {
            var e = function(t, n) {
                function r() {
                    this.q = [], this.add = function(t) {
                        this.q.push(t)
                    };
                    var t, e;
                    this.call = function() {
                        for (t = 0, e = this.q.length; t < e; t++) this.q[t].call()
                    }
                }

                function i(t, e) {
                    return t.currentStyle ? t.currentStyle[e] : window.getComputedStyle ? window.getComputedStyle(t, null).getPropertyValue(e) : t.style[e]
                }

                function o(t, e) {
                    if (t.resizedAttached) {
                        if (t.resizedAttached) return void t.resizedAttached.add(e)
                    } else t.resizedAttached = new r, t.resizedAttached.add(e);
                    t.resizeSensor = document.createElement("div"), t.resizeSensor.className = "resize-sensor";
                    var n = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                        o = "position: absolute; left: 0; top: 0; transition: 0s;";
                    t.resizeSensor.style.cssText = n, t.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + n + '"><div style="' + o + '"></div></div><div class="resize-sensor-shrink" style="' + n + '"><div style="' + o + ' width: 200%; height: 200%"></div></div>', t.appendChild(t.resizeSensor), {
                        fixed: 1,
                        absolute: 1
                    }[i(t, "position")] || (t.style.position = "relative");
                    var a, s, u = t.resizeSensor.childNodes[0],
                        c = u.childNodes[0],
                        d = t.resizeSensor.childNodes[1],
                        f = (d.childNodes[0], function() {
                            c.style.width = u.offsetWidth + 10 + "px", c.style.height = u.offsetHeight + 10 + "px", u.scrollLeft = u.scrollWidth, u.scrollTop = u.scrollHeight, d.scrollLeft = d.scrollWidth, d.scrollTop = d.scrollHeight, a = t.offsetWidth, s = t.offsetHeight
                        });
                    f();
                    var l = function() {
                            t.resizedAttached && t.resizedAttached.call()
                        },
                        h = function(t, e, n) {
                            t.attachEvent ? t.attachEvent("on" + e, n) : t.addEventListener(e, n)
                        },
                        p = function() {
                            t.offsetWidth == a && t.offsetHeight == s || l(), f()
                        };
                    h(u, "scroll", p), h(d, "scroll", p)
                }
                var a = Object.prototype.toString.call(t),
                    s = "[object Array]" === a || "[object NodeList]" === a || "[object HTMLCollection]" === a || "undefined" != typeof jQuery && t instanceof jQuery || "undefined" != typeof Elements && t instanceof Elements;
                if (s)
                    for (var u = 0, c = t.length; u < c; u++) o(t[u], n);
                else o(t, n);
                this.detach = function() {
                    if (s)
                        for (var n = 0, r = t.length; n < r; n++) e.detach(t[n]);
                    else e.detach(t)
                }
            };
            e.detach = function(t) {
                t.resizeSensor && (t.removeChild(t.resizeSensor), delete t.resizeSensor, delete t.resizedAttached)
            }, "undefined" != typeof t && "undefined" != typeof t.exports ? t.exports = e : window.ResizeSensor = e
        }()
    }, function(t, e, n) {
        function r(t) {
            var e = s(t),
                n = {
                    screenName: o.screenName(t.href),
                    showScreenName: "false" !== t.getAttribute("data-show-screen-name"),
                    showCount: "false" !== t.getAttribute("data-show-count"),
                    size: t.getAttribute("data-size"),
                    count: t.getAttribute("data-count"),
                    preview: t.getAttribute("data-preview")
                };
            return a.forIn(n, function(t, n) {
                var r = e[t];
                e[t] = d.hasValue(r) ? r : n
            }), e.screenName = e.screenName || e.screen_name, e
        }

        function i(t) {
            var e = u(t, f);
            return e.map(function(t) {
                return c(r(t), t.parentNode, t)
            })
        }
        var o = n(23),
            a = n(11),
            s = n(75),
            u = n(77)(),
            c = n(108),
            d = n(25),
            f = "a.twitter-follow-button";
        t.exports = i
    }, function(t, e, n) {
        function r(t, e, n) {
            return new i(o, a, "twitter-follow-button", t, e, n)
        }
        var i = n(81),
            o = n(109),
            a = n(115);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(2, function(i, o) {
                var a;
                if (i) return r.reject(i);
                try {
                    a = n(110), r.resolve(new a(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , , , , function(t, e, n) {
        function r(t) {
            t.define("widgetDataAttributes", function() {
                return {}
            }), t.define("setDataAttributes", function() {
                var t = this.sandbox.sandboxEl;
                o.forIn(this.widgetDataAttributes(), function(e, n) {
                    i.hasValue(n) && t.setAttribute("data-" + e, n)
                })
            }), t.after("render", function() {
                this.setDataAttributes()
            })
        }
        var i = n(25),
            o = n(11);
        t.exports = r
    }, function(t, e, n) {
        var r = n(54),
            i = n(116);
        t.exports = r.build([i])
    }, function(t, e, n) {
        function r(t) {
            t.overrideProperty("id", {
                get: function() {
                    return this.sandboxEl && this.sandboxEl.id
                }
            }), t.overrideProperty("initialized", {
                get: function() {
                    return !!this.iframeEl
                }
            }), t.overrideProperty("width", {
                get: function() {
                    return this._width
                }
            }), t.overrideProperty("height", {
                get: function() {
                    return this._height
                }
            }), t.overrideProperty("sandboxEl", {
                get: function() {
                    return this.iframeEl
                }
            }), t.defineProperty("iframeEl", {
                get: function() {
                    return this._iframe
                }
            }), t.define("updateCachedDimensions", function() {
                var t = this;
                return this.initialized ? i.read(function() {
                    t._width = t.sandboxEl.offsetWidth, t._height = t.sandboxEl.offsetHeight
                }) : c.resolve()
            }), t.define("setTitle", function(t) {
                this.iframeEl.title = t
            }), t.define("makeVisible", function() {
                return this.styleSelf(h)
            }), t.define("didResize", function() {
                var t = this,
                    e = t._resizeHandlers.length > 0;
                return this.updateCachedDimensions().then(function() {
                    e && t._resizeHandlers.forEach(function(e) {
                        e(t)
                    })
                })
            }), t.define("loadDocument", function(t) {
                var e = new u;
                return this.initialized ? this.iframeEl.src ? c.reject(new Error("widget already loaded")) : (this.iframeEl.addEventListener("load", e.resolve, !1), this.iframeEl.addEventListener("error", e.reject, !1), this.iframeEl.src = t, e.promise) : c.reject(new Error("sandbox not initialized"))
            }), t.after("initialize", function() {
                this._iframe = null, this._width = this._height = 0, this._resizeHandlers = []
            }), t.override("insert", function(t, e, n, r) {
                var o = this;
                return e = f.aug({
                    id: t
                }, e), n = f.aug({}, l, n), this._iframe = s(e, n), p[t] = this, this.onResize(a(function() {
                    o.makeVisible()
                })), i.write(d(r, null, this._iframe))
            }), t.override("onResize", function(t) {
                this._resizeHandlers.push(t)
            }), t.after("styleSelf", function() {
                return this.updateCachedDimensions()
            })
        }
        var i = n(45),
            o = n(117),
            a = n(122),
            s = n(52),
            u = n(1),
            c = n(2),
            d = n(13),
            f = n(11),
            l = {
                position: "absolute",
                visibility: "hidden",
                width: "0px",
                height: "0px"
            },
            h = {
                position: "static",
                visibility: "visible"
            },
            p = {};
        o(function(t, e, n) {
            var r = p[t];
            if (r) return r.styleSelf({
                width: e + "px",
                height: n + "px"
            }).then(function() {
                r.didResize()
            })
        }), t.exports = r
    }, function(t, e, n) {
        function r(t) {
            (new o).attachReceiver(new a.Receiver(i, "twttr.button")).bind("twttr.private.trigger", function(t, e) {
                var n = c(this);
                s.trigger(t, {
                    target: n,
                    region: e,
                    type: t,
                    data: {}
                })
            }).bind("twttr.private.resizeButton", function(e) {
                var n = c(this),
                    r = n && n.id,
                    i = u.asInt(e.width),
                    o = u.asInt(e.height);
                r && i && o && t(r, i, o)
            })
        }
        var i = n(7),
            o = n(118),
            a = n(120),
            s = n(29),
            u = n(25),
            c = n(121);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            this.registry = t || {}
        }

        function i(t) {
            return h.isType("string", t) ? f.parse(t) : t
        }

        function o(t) {
            var e, n, r;
            return !!h.isObject(t) && (e = t.jsonrpc === v, n = h.isType("string", t.method), r = !("id" in t) || a(t.id), e && n && r)
        }

        function a(t) {
            var e, n, r;
            return e = h.isType("string", t), n = h.isType("number", t), r = null === t, e || n || r
        }

        function s(t) {
            return h.isObject(t) && !h.isType("function", t)
        }

        function u(t, e) {
            return {
                jsonrpc: v,
                id: t,
                result: e
            }
        }

        function c(t, e) {
            return {
                jsonrpc: v,
                id: a(t) ? t : null,
                error: e
            }
        }

        function d(t) {
            return p.all(t).then(function(t) {
                return t = t.filter(function(t) {
                    return void 0 !== t
                }), t.length ? t : void 0
            })
        }
        var f = n(39),
            l = n(119),
            h = n(11),
            p = n(2),
            m = n(42),
            v = "2.0";
        r.prototype._invoke = function(t, e) {
            var n, r, i;
            n = this.registry[t.method], r = t.params || [], r = h.isType("array", r) ? r : [r];
            try {
                i = n.apply(e.source || null, r)
            } catch (t) {
                i = p.reject(t.message)
            }
            return m.isPromise(i) ? i : p.resolve(i)
        }, r.prototype._processRequest = function(t, e) {
            function n(e) {
                return u(t.id, e)
            }

            function r() {
                return c(t.id, l.INTERNAL_ERROR)
            }
            var i;
            return o(t) ? (i = "params" in t && !s(t.params) ? p.resolve(c(t.id, l.INVALID_PARAMS)) : this.registry[t.method] ? this._invoke(t, {
                source: e
            }).then(n, r) : p.resolve(c(t.id, l.METHOD_NOT_FOUND)), null != t.id ? i : p.resolve()) : p.resolve(c(t.id, l.INVALID_REQUEST))
        }, r.prototype.attachReceiver = function(t) {
            return t.attachTo(this), this
        }, r.prototype.bind = function(t, e) {
            return this.registry[t] = e, this
        }, r.prototype.receive = function(t, e) {
            var n, r, o, a = this;
            try {
                t = i(t)
            } catch (t) {
                return p.resolve(c(null, l.PARSE_ERROR))
            }
            return e = e || null, n = h.isType("array", t), r = n ? t : [t], o = r.map(function(t) {
                return a._processRequest(t, e)
            }), n ? d(o) : o[0]
        }, t.exports = r
    }, function(t, e) {
        t.exports = {
            PARSE_ERROR: {
                code: -32700,
                message: "Parse error"
            },
            INVALID_REQUEST: {
                code: -32600,
                message: "Invalid Request"
            },
            INVALID_PARAMS: {
                code: -32602,
                message: "Invalid params"
            },
            METHOD_NOT_FOUND: {
                code: -32601,
                message: "Method not found"
            },
            INTERNAL_ERROR: {
                code: -32603,
                message: "Internal error"
            }
        }
    }, function(t, e, n) {
        function r(t, e, n) {
            var r;
            t && t.postMessage && (g ? r = (n || "") + f.stringify(e) : n ? (r = {}, r[n] = e) : r = e, t.postMessage(r, "*"))
        }

        function i(t) {
            return p.isType("string", t) ? t : "JSONRPC"
        }

        function o(t, e) {
            return e ? p.isType("string", t) && 0 === t.indexOf(e) ? t.substring(e.length) : t[e] ? t[e] : void 0 : t
        }

        function a(t, e) {
            var n = t.document;
            this.filter = i(e), this.server = null, this.isTwitterFrame = m.isTwitterURL(n.location.href), t.addEventListener("message", v(this._onMessage, this), !1)
        }

        function s(t, e) {
            this.pending = {}, this.target = t, this.isTwitterHost = m.isTwitterURL(c.href), this.filter = i(e), d.addEventListener("message", v(this._onMessage, this), !1)
        }

        function u(t) {
            return arguments.length > 0 && (g = !!t), g
        }
        var c = n(18),
            d = n(7),
            f = n(39),
            l = n(1),
            h = n(8),
            p = n(11),
            m = n(23),
            v = n(13),
            g = h.ie9();
        p.aug(a.prototype, {
            _onMessage: function(t) {
                var e, n = this;
                this.server && (this.isTwitterFrame && !m.isTwitterURL(t.origin) || (e = o(t.data, this.filter), e && this.server.receive(e, t.source).then(function(e) {
                    e && r(t.source, e, n.filter)
                })))
            },
            attachTo: function(t) {
                this.server = t
            },
            detach: function() {
                this.server = null
            }
        }), p.aug(s.prototype, {
            _processResponse: function(t) {
                var e = this.pending[t.id];
                e && (e.resolve(t), delete this.pending[t.id])
            },
            _onMessage: function(t) {
                var e;
                if ((!this.isTwitterHost || m.isTwitterURL(t.origin)) && (e = o(t.data, this.filter))) {
                    if (p.isType("string", e)) try {
                        e = f.parse(e)
                    } catch (t) {
                        return
                    }
                    e = p.isType("array", e) ? e : [e], e.forEach(v(this._processResponse, this))
                }
            },
            send: function(t) {
                var e = new l;
                return t.id ? this.pending[t.id] = e : e.resolve(), r(this.target, t, this.filter), e.promise
            }
        }), t.exports = {
            Receiver: a,
            Dispatcher: s,
            _stringifyPayload: u
        }
    }, function(t, e, n) {
        function r(t) {
            for (var e, n = i.getElementsByTagName("iframe"), r = 0; e = n[r]; r++)
                if (e.contentWindow === t) return e
        }
        var i = n(9);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            var e, n = !1;
            return function() {
                return n ? e : (n = !0, e = t.apply(this, arguments))
            }
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            var e = u(t),
                n = {
                    collectionId: s.collectionId(t.href),
                    chrome: t.getAttribute("data-chrome"),
                    limit: t.getAttribute("data-limit")
                };
            return a.forIn(n, function(t, n) {
                var r = e[t];
                e[t] = o.hasValue(r) ? r : n
            }), e
        }

        function i(t) {
            var e = c(t, f);
            return e.map(function(t) {
                return d(r(t), t.parentNode, t)
            })
        }
        var o = n(25),
            a = n(11),
            s = n(23),
            u = n(75),
            c = n(77)(),
            d = n(124),
            f = "a.twitter-grid";
        t.exports = i
    }, function(t, e, n) {
        function r(t, e, n) {
            return new i(o, a, "twitter-grid", t, e, n)
        }
        var i = n(81),
            o = n(125),
            a = n(53);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(3, function(i, o) {
                var a;
                if (i) return r.reject(i);
                try {
                    a = n(126), r.resolve(new a(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , , , function(t, e, n) {
        function r(t) {
            if (t) return t.replace(/[^\w\$]/g, "_")
        }

        function i() {
            return f + l++
        }

        function o(t, e, n, o) {
            var f, l, h;
            return o = r(o || i()), f = s.fullPath(["callbacks", o]), l = a.createElement("script"), h = new u, e = c.aug({}, e, {
                callback: f,
                suppress_response_codes: !0
            }), s.set(["callbacks", o], function(t) {
                var e, r;
                e = n(t || !1), t = e.resp, r = e.success, r ? h.resolve(t) : h.reject(t), l.onload = l.onreadystatechange = null, l.parentNode && l.parentNode.removeChild(l), s.unset(["callbacks", o])
            }), l.onerror = function() {
                h.reject(new Error("failed to fetch " + l.src))
            }, l.src = d.url(t, e), l.async = "async", a.body.appendChild(l), h.promise
        }
        var a = n(9),
            s = n(14),
            u = n(1),
            c = n(11),
            d = n(24),
            f = "cb",
            l = 0;
        t.exports = {
            fetch: o
        }
    }, function(t, e, n) {
        function r(t) {
            var e, n;
            return e = t.headers && t.headers.status, n = t && !t.error && 200 === e, !n && t.headers && t.headers.message && i.warn(t.headers.message), {
                success: n,
                resp: t
            }
        }
        var i = n(68);
        t.exports = r
    }, function(t, e) {
        function n() {
            var t = 9e5;
            return Math.floor(+new Date / t)
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            var e = t || [];
            return e.unshift("cookie/consent"), f(w, e)
        }

        function i(t) {
            var e = t || [];
            return e.unshift("video/event"), f(w, e)
        }

        function o(t) {
            var e = t || [];
            return e.unshift("grid/collection"), f(y, e)
        }

        function a(t) {
            var e = t || [];
            return e.unshift("moments"), f(y, e)
        }

        function s(t) {
            var e = t || [];
            return e.unshift("timeline"), f(y, e)
        }

        function u(t) {
            var e = t || [];
            return e.unshift("widgets/timelines"), f(y, e)
        }

        function c(t) {
            var e = t || [];
            return e.unshift("tweets.json"), f(y, e)
        }

        function d(t) {
            var e = t || [];
            return e.unshift("widgets/video"), f(y, e)
        }

        function f(t, e) {
            var n = [t];
            return e.forEach(function(t) {
                n.push(l(t))
            }), n.join("/")
        }

        function l(t) {
            var e = (t || "").toString(),
                n = h(e) ? 1 : 0,
                r = p(e) ? -1 : void 0;
            return e.slice(n, r)
        }

        function h(t) {
            return "/" === t.slice(0, 1)
        }

        function p(t) {
            return "/" === t.slice(-1)
        }
        var m = n(14),
            v = "https://cdn.syndication.twimg.com",
            g = "https://syndication.twitter.com",
            y = m.get("backendHost") || v,
            w = m.get("backendHost") || g;
        t.exports = {
            cookieConsent: r,
            eventVideo: i,
            grid: o,
            moment: a,
            timeline: s,
            timelinePreconfigured: u,
            tweetBatch: c,
            video: d
        }
    }, function(t, e, n) {
        var r = n(9),
            i = n(25),
            o = r.createElement("div");
        t.exports = function(t) {
            return i.isNumber(t) && (t += "px"), o.style.width = "", o.style.width = t, o.style.width || null
        }
    }, function(t, e, n) {
        function r(t) {
            var e = t.getBoundingClientRect(),
                n = i.innerWidth,
                r = i.innerHeight,
                o = e.top > r,
                a = e.bottom < 0,
                s = e.left > n,
                u = e.right < 0;
            return !(o || a || s || u)
        }
        var i = n(7);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            t.after("prepForInsertion", function(t) {
                o.sizeIframes(t, this.sandbox.width, a, i.sync)
            }), t.after("resize", function() {
                o.sizeIframes(this.el, this.sandbox.width, a, i.write)
            })
        }
        var i = n(45),
            o = n(136),
            a = 375;
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = t.split(" ");
            this.url = decodeURIComponent(e[0].trim()), this.width = +e[1].replace(/w$/, "").trim()
        }

        function i(t, e, n) {
            var i, o, a, s;
            if (t = h.devicePixelRatio ? t * h.devicePixelRatio : t, o = e.split(",").map(function(t) {
                    return new r(t.trim())
                }), n)
                for (s = 0; s < o.length; s++) o[s].url === n && (i = o[s]);
            return a = o.reduce(function(e, n) {
                return n.width < e.width && n.width >= t ? n : e
            }, o[0]), i && i.width > a.width ? i : a
        }

        function o(t, e) {
            var n, r = t.getAttribute("data-srcset"),
                o = t.src;
            r && (n = i(e, r, o), t.src = n.url)
        }

        function a(t, e) {
            e = void 0 !== e ? !!e : v.retina(), p.toRealArray(t.getElementsByTagName("IMG")).forEach(function(t) {
                var n = t.getAttribute("data-src-1x") || t.getAttribute("src"),
                    r = t.getAttribute("data-src-2x");
                e && r ? t.src = r : n && (t.src = n)
            })
        }

        function s(t, e, n) {
            t && (p.toRealArray(t.querySelectorAll(".NaturalImage-image")).forEach(function(t) {
                n(function() {
                    o(t, e)
                })
            }), p.toRealArray(t.querySelectorAll(".CroppedImage-image")).forEach(function(t) {
                n(function() {
                    o(t, e / 2)
                })
            }), p.toRealArray(t.querySelectorAll("img.autosized-media")).forEach(function(t) {
                n(function() {
                    o(t, e), t.removeAttribute("width"), t.removeAttribute("height")
                })
            }))
        }

        function u(t, e, n, r) {
            t && p.toRealArray(t.querySelectorAll("iframe.autosized-media, .wvp-player-container")).forEach(function(t) {
                var i = d(t.getAttribute("data-width"), t.getAttribute("data-height"), g.effectiveWidth(t.parentElement) || e, n);
                r(function() {
                    t.setAttribute("width", i.width), t.setAttribute("height", i.height), y.present(t, "wvp-player-container") ? (t.style.width = i.width, t.style.height = i.height) : (t.width = i.width, t.height = i.height)
                })
            })
        }

        function c(t, e, n, r) {
            s(t, e, r), u(t, e, n, r)
        }

        function d(t, e, n, r, i, o) {
            return n = n || t, r = r || e, i = i || 0, o = o || 0, t > n && (e *= n / t, t = n), e > r && (t *= r / e, e = r), t < i && (e *= i / t, t = i), e < o && (t *= o / e, e = o), {
                width: Math.floor(t),
                height: Math.floor(e)
            }
        }

        function f(t, e, n, r) {
            p.toRealArray(t.querySelectorAll(e)).forEach(function(t) {
                var e = t.getAttribute("style") || t.getAttribute("data-style"),
                    i = r.test(e) && RegExp.$1;
                i && (t.setAttribute("data-csp-fix", !0), t.style[n] = i)
            })
        }

        function l(t) {
            m.inlineStyle() || (f(t, ".MediaCard-widthConstraint", "maxWidth", w), f(t, ".MediaCard-mediaContainer", "paddingBottom", E), f(t, ".CroppedImage-image", "top", b), f(t, ".CroppedImage-image", "left", _))
        }
        var h = n(7),
            p = n(11),
            m = n(66),
            v = n(8),
            g = n(137),
            y = n(20),
            w = /max-width:\s*([\d\.]+px)/,
            b = /top:\s*(\-?[\d\.]+%)/,
            _ = /left:\s*(\-?[\d\.]+%)/,
            E = /padding-bottom:\s*([\d\.]+%)/;
        t.exports = {
            scaleDimensions: d,
            retinize: a,
            setSrcForImgs: s,
            sizeIframes: u,
            constrainMedia: c,
            fixMediaCardLayout: l,
            __setSrcFromSet: o
        }
    }, function(t, e) {
        function n(t) {
            return t && 1 === t.nodeType ? t.offsetWidth || n(t.parentNode) : 0
        }
        t.exports = {
            effectiveWidth: n
        }
    }, function(t, e, n) {
        function r(t) {
            return t.replace(/-(.)/g, function(t, e) {
                return e.toUpperCase()
            })
        }

        function i(t) {
            return (t || "").split(";").reduce(function(t, e) {
                var n, i;
                return c.test(e.trim()) && (n = RegExp.$1, i = RegExp.$2, t[r(n)] = i), t
            }, {})
        }

        function o(t) {
            var e = i(t.getAttribute("data-style"));
            0 !== Object.keys(e).length && (t.setAttribute("data-csp-fix", "true"), u.forIn(e, function(e, n) {
                t.style[e] = n
            }))
        }

        function a(t) {
            t.selectors({
                cspForcedStyle: ".js-cspForcedStyle"
            }), t.after("prepForInsertion", function(t) {
                s.inlineStyle() || this.select(t, "cspForcedStyle").forEach(o)
            })
        }
        var s = n(66),
            u = (n(68), n(11)),
            c = /^([a-zA-Z-]+):\s*(.+)$/;
        t.exports = a
    }, function(t, e, n) {
        function r(t) {
            t.after("prepForInsertion", function(t) {
                i.retinize(t)
            })
        }
        var i = n(136);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            t.after("prepForInsertion", function(t) {
                o.setSrcForImgs(t, this.sandbox.width, i.sync)
            }), t.after("resize", function() {
                o.setSrcForImgs(this.el, this.sandbox.width, i.write)
            })
        }
        var i = n(45),
            o = n(136);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            t.after("render", function() {
                var t = this.el.getAttribute(r);
                t && this.sandbox.setTitle && this.sandbox.setTitle(t)
            })
        }
        var r = "data-iframe-title";
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            return t.every(s.isInt)
        }

        function i(t) {
            var e = t.map(function(t) {
                return {
                    size: +t,
                    className: u + t
                }
            }).sort(function(t, e) {
                return t.size - e.size
            });
            return e.unshift({
                size: 0,
                className: c
            }), e
        }

        function o(t) {
            t.params({
                breakpoints: {
                    required: !0,
                    validate: r,
                    transform: i
                }
            }), t.define("getClassForWidth", function(t) {
                var e, n, r;
                for (n = this.params.breakpoints.length - 1; n >= 0; n--)
                    if (r = this.params.breakpoints[n], t > r.size) {
                        e = r.className;
                        break
                    }
                return e
            }), t.after("initialize", function() {
                this.allBreakpoints = this.params.breakpoints.map(function(t) {
                    return t.className
                })
            }), t.define("recalculateBreakpoints", function() {
                var t = this.getClassForWidth(this.sandbox.width);
                return t && this.sandbox.hasRootClass(t) ? a.resolve() : a.all([this.sandbox.removeRootClass(this.allBreakpoints), this.sandbox.addRootClass(t)])
            }), t.after("render", function() {
                return this.recalculateBreakpoints()
            }), t.after("resize", function() {
                return this.recalculateBreakpoints()
            })
        }
        var a = n(2),
            s = n(25),
            u = "env-bp-",
            c = u + "min";
        t.exports = o
    }, , function(t, e, n) {
        function r(t, e, n, r, i) {
            var o = new u,
                a = s(t, n, r, i);
            if (a) {
                var c = d.createPlayerForTweet(a.element, e, a.options);
                return c ? (o.resolve(c), o.promise) : o.reject(new Error("unable to create tweet video player"))
            }
        }

        function i(t, e, n, r, i) {
            var o = new u,
                a = s(t, n, r, i);
            if (!a) return o.reject(new Error("unable to initialize event video player"));
            var c = d.createPlayerForLiveVideo(a.element, e, a.options);
            return c.on("ready", function() {
                c.playPreview(), o.resolve(c)
            }), o.promise
        }

        function o(t) {
            var e = t.querySelector(".wvp-player-container"),
                n = e && d.findPlayerForElement(e);
            if (n) return n.teardown()
        }

        function a(t) {
            return d.findPlayerForElement(t)
        }

        function s(t, e, n, r) {
            var i;
            r = r || {};
            var o = {
                scribeContext: {
                    client: "tfw",
                    page: e
                },
                languageCode: n,
                hideControls: r.hideControls || !1,
                addTwitterBranding: r.addBranding || !1,
                widgetOrigin: r.widgetOrigin
            };
            if (i = c(t, ".wvp-player-container"), i.length > 0) return f && d.setBaseUrl(f), {
                element: i[0],
                options: o
            }
        }
        var u = n(1),
            c = n(78),
            d = n(145),
            f = null;
        t.exports = {
            insertForTweet: r,
            insertForEvent: i,
            remove: o,
            find: a
        }
    }, function(t, e, n) {
        var r;
        ! function(i, o) {
            r = function() {
                return i.TwitterVideoPlayer = o()
            }.call(e, n, e, t), !(void 0 !== r && (t.exports = r))
        }(this, function() {
            function t(t) {
                if (t && t.data && t.data.params && t.data.params[0]) {
                    var e = t.data.params[0],
                        n = t.data.id;
                    if (e && e.context && "TwitterVideoPlayer" === e.context) {
                        var r = e.playerId;
                        delete e.playerId, delete e.context;
                        var i = s[r];
                        i && i.processMessage(t.data.method, e, n)
                    }
                }
            }

            function e(t, e, n) {
                var r = Object.keys(n).filter(function(t) {
                    return null != n[t]
                }).map(function(t) {
                    var e = n[t];
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e)
                }).join("&");
                return r && (r = "?" + r), t + e + r
            }

            function n(n, i, o, u, c) {
                var d = n.ownerDocument,
                    f = d.defaultView;
                f.addEventListener("message", t), this.playerId = a++;
                var l = {
                    embed_source: "clientlib",
                    player_id: this.playerId,
                    rpc_init: 1
                };
                if (this.scribeParams = {}, this.scribeParams.suppressScribing = u && u.suppressScribing, !this.scribeParams.suppressScribing) {
                    if (!u.scribeContext) throw "video_player: Missing scribe context";
                    if (!u.scribeContext.client) throw "video_player: Scribe context missing client property";
                    this.scribeParams.client = u.scribeContext.client, this.scribeParams.page = u.scribeContext.page, this.scribeParams.section = u.scribeContext.section, this.scribeParams.component = u.scribeContext.component
                }
                this.scribeParams.debugScribe = u && u.scribeContext && u.scribeContext.debugScribing, this.scribeParams.scribeUrl = u && u.scribeContext && u.scribeContext.scribeUrl, this.promotedLogParams = u.promotedContext, this.adRequestCallback = u.adRequestCallback, u.languageCode && (l.language_code = u.languageCode);
                var h = e(r, i, l);
                return this.videoIframe = document.createElement("iframe"), this.videoIframe.setAttribute("src", h), this.videoIframe.setAttribute("allowfullscreen", ""), this.videoIframe.setAttribute("id", o), this.videoIframe.setAttribute("style", "width: 100%; height: 100%; position: absolute; top: 0; left: 0;"), this.domElement = n, this.domElement.appendChild(this.videoIframe), s[this.playerId] = this, this.eventCallbacks = {}, this.emitEvent = function(t, e) {
                    var n = this.eventCallbacks[t];
                    "undefined" != typeof n && n.forEach(function(t) {
                        t.apply(this.playerInterface, [e])
                    }.bind(this))
                }, this.jsonRpc = function(t) {
                    var e = this.videoIframe.contentWindow;
                    t.jsonrpc = "2.0", e && e.postMessage && e.postMessage(JSON.stringify(t), "*")
                }, this.jsonRpcCall = function(t, e) {
                    this.jsonRpc({
                        method: t,
                        params: e
                    })
                }, this.jsonRpcResult = function(t, e) {
                    this.jsonRpc({
                        result: t,
                        id: e
                    })
                }, this.processMessage = function(t, e, n) {
                    switch (t) {
                        case "requestPlayerConfig":
                            this.jsonRpcResult({
                                scribeParams: this.scribeParams,
                                promotedLogParams: this.promotedLogParams,
                                squareCorners: u.squareCorners,
                                borderRadius: u.borderRadius,
                                hideControls: u.hideControls,
                                embedded: u.addTwitterBranding,
                                widgetOrigin: u.widgetOrigin
                            }, n);
                            break;
                        case "videoPlayerAdStart":
                            this.emitEvent("adStart", e);
                            break;
                        case "videoPlayerAdEnd":
                            this.emitEvent("adEnd", e);
                            break;
                        case "videoPlayerPlay":
                            this.emitEvent("play", e);
                            break;
                        case "videoPlayerPause":
                            this.emitEvent("pause", e);
                            break;
                        case "videoPlayerMute":
                            this.emitEvent("mute", e);
                            break;
                        case "videoPlayerUnmute":
                            this.emitEvent("unmute", e);
                            break;
                        case "videoPlayerPlaybackComplete":
                            this.emitEvent("playbackComplete", e);
                            break;
                        case "videoPlayerReady":
                            this.emitEvent("ready", e);
                            break;
                        case "videoView":
                            this.emitEvent("view", e);
                            break;
                        case "debugLoggingEvent":
                            this.emitEvent("logged", e);
                            break;
                        case "requestDynamicAd":
                            "function" == typeof this.adRequestCallback ? this.jsonRpcResult(this.adRequestCallback(), n) : this.jsonRpcResult({}, n)
                    }
                }, this.playerInterface = {
                    on: function(t, e) {
                        return "undefined" == typeof this.eventCallbacks[t] && (this.eventCallbacks[t] = []), this.eventCallbacks[t].push(e), this.playerInterface
                    }.bind(this),
                    off: function(t, e) {
                        if ("undefined" == typeof e) delete this.eventCallbacks[t];
                        else {
                            var n = this.eventCallbacks[t];
                            if ("undefined" != typeof n) {
                                var r = n.indexOf(e);
                                r > -1 && n.splice(r, 1)
                            }
                        }
                        return this.playerInterface
                    }.bind(this),
                    play: function() {
                        return this.jsonRpcCall("play"), this.playerInterface
                    }.bind(this),
                    pause: function() {
                        return this.jsonRpcCall("pause"), this.playerInterface
                    }.bind(this),
                    mute: function() {
                        return this.jsonRpcCall("mute"), this.playerInterface
                    }.bind(this),
                    unmute: function() {
                        return this.jsonRpcCall("unmute"), this.playerInterface
                    }.bind(this),
                    playPreview: function() {
                        return this.jsonRpcCall("autoPlayPreview"), this.playerInterface
                    }.bind(this),
                    pausePreview: function() {
                        return this.jsonRpcCall("autoPlayPreviewStop"), this.playerInterface
                    }.bind(this),
                    updatePosition: function(t) {
                        return this.jsonRpcCall("updatePosition", [t]), this.playerInterface
                    }.bind(this),
                    updateLayoutBreakpoint: function(t) {
                        return this.jsonRpcCall("updateLayoutBreakpoint", [t]), this.playerInterface
                    }.bind(this),
                    enterFullScreen: function() {
                        return this.jsonRpcCall("enterFullScreen"), this.playerInterface
                    }.bind(this),
                    exitFullScreen: function() {
                        return this.jsonRpcCall("exitFullScreen"), this.playerInterface
                    }.bind(this),
                    teardown: function() {
                        this.eventCallbacks = {}, n.removeChild(this.videoIframe), this.videoIframe = void 0, delete s[this.playerId]
                    }.bind(this)
                }, this.playerInterface
            }
            var r = "https://twitter.com",
                i = /^https?:\/\/([a-zA-Z0-9]+\.)*twitter.com(:\d+)?$/,
                o = {
                    suppressScribing: !1,
                    squareCorners: !1,
                    hideControls: !1,
                    addTwitterBranding: !1
                },
                a = 0,
                s = {};
            return {
                setBaseUrl: function(t) {
                    i.test(t) ? r = t : window.console.error("newBaseUrl " + t + " not allowed")
                },
                createPlayerForTweet: function(t, e, r) {
                    var i = "/i/videos/tweet/" + e,
                        a = "player_tweet_" + e;
                    return new n(t, i, a, r || o)
                },
                createPlayerForDm: function(t, e, r) {
                    var i = "/i/videos/dm/" + e,
                        a = "player_dm_" + e;
                    return new n(t, i, a, r || o)
                },
                createPlayerForLiveVideo: function(t, e, r) {
                    var i = "/i/videos/live_video/" + e,
                        a = "player_live_video_" + e;
                    return new n(t, i, a, r || o)
                },
                findPlayerForElement: function(t) {
                    for (var e in s)
                        if (s.hasOwnProperty(e)) {
                            var n = s[e];
                            if (n && n.domElement === t) return n.playerInterface
                        }
                    return null
                }
            }
        })
    }, function(t, e, n) {
        function r(t) {
            t.selectors({
                clickToOpen: ".js-clickToOpenTarget"
            }), t.define("shouldOpenTarget", function(t) {
                var e = i.closest("A", t.target, this.el),
                    n = this.sandbox.hasSelectedText();
                return !e && !n
            }), t.define("openTarget", function(t, e) {
                var n = e && e.getAttribute(u);
                n && (o(n), this.scribeOpenClick(t))
            }), t.define("attemptToOpenTarget", function(t, e) {
                this.shouldOpenTarget(t) && this.openTarget(t, e)
            }), t.define("scribeOpenClick", function(t) {
                var e = s.extractTermsFromDOM(t.target),
                    n = {
                        associations: s.formatTweetAssociation(e)
                    };
                this.scribe({
                    section: "chrome",
                    action: "click"
                }, n)
            }), t.after("render", function() {
                this.on("click", "clickToOpen", this.attemptToOpenTarget)
            })
        }
        var i = n(21),
            o = n(147),
            a = n(84),
            s = n(38),
            u = "data-click-to-open-target";
        t.exports = a.couple(n(98), r)
    }, function(t, e, n) {
        function r(t) {
            a.isTwitterURL(t) && (t = o(t)), i.open(t)
        }
        var i = n(7),
            o = n(97),
            a = n(23);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            t.params({
                productName: {
                    required: !0
                },
                dataSource: {
                    required: !1
                },
                related: {
                    required: !1
                },
                partner: {
                    fallback: d(o.val, o, "partner")
                }
            }), t.selectors({
                timeline: ".timeline",
                tweetIdInfo: ".js-tweetIdInfo"
            }), t.define("injectWebIntentParams", function(t) {
                var e = i.closest(this.selectors.timeline, t, this.el),
                    n = i.closest(this.selectors.tweetIdInfo, t, this.el);
                t.getAttribute(f) || (t.setAttribute(f, !0), t.href = u.url(t.href, {
                    tw_w: this.params.dataSource && this.params.dataSource.id,
                    tw_i: n && n.getAttribute("data-tweet-id"),
                    tw_p: this.params.productName,
                    related: this.params.related,
                    partner: this.params.partner,
                    query: e && e.getAttribute("data-search-query"),
                    profile_id: e && e.getAttribute("data-profile-id"),
                    original_referer: s.rootDocumentLocation()
                }))
            }), t.after("render", function() {
                this.on("click", "A", function(t, e) {
                    c.isIntentURL(e.href) && (this.injectWebIntentParams(e), a.open(e.href, this.sandbox.sandboxEl, t))
                })
            })
        }
        var i = n(21),
            o = n(37),
            a = n(22),
            s = n(34),
            u = n(24),
            c = n(23),
            d = n(13),
            f = "data-url-params-injected";
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            t.before("render", function() {
                i.ios() && this.sandbox.addRootClass("env-ios"), i.ie9() && this.sandbox.addRootClass("ie9"), i.touch() && this.sandbox.addRootClass("is-touch")
            })
        }
        var i = n(8);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            t.params({
                pageForAudienceImpression: {
                    required: !0
                }
            }), t.before("hydrate", function() {
                i.scribeAudienceImpression(this.params.pageForAudienceImpression)
            })
        }
        var i = n(151);
        t.exports = r
    }, function(t, e, n) {
        function r() {
            return d.formatGenericEventData("syndicated_impression", {})
        }

        function i() {
            u("tweet")
        }

        function o() {
            u("timeline")
        }

        function a() {
            u("video")
        }

        function s() {
            u("partnertweet")
        }

        function u(t) {
            f.isHostPageSensitive() || l[t] || (l[t] = !0, c.scribe(d.formatClientEventNamespace({
                page: t,
                action: "impression"
            }), r(), d.AUDIENCE_ENDPOINT))
        }
        var c = n(32),
            d = n(38),
            f = n(36),
            l = {};
        t.exports = {
            scribeAudienceImpression: u,
            scribePartnerTweetAudienceImpression: s,
            scribeTweetAudienceImpression: i,
            scribeTimelineAudienceImpression: o,
            scribeVideoAudienceImpression: a
        }
    }, function(t, e, n) {
        function r(t) {
            var e = {
                    action: "dimensions"
                },
                n = new o(a);
            t.after("show", function() {
                if (n.nextBoolean()) {
                    var t = this.sandbox.width,
                        r = this.sandbox.height,
                        i = {
                            context: t + "," + r
                        };
                    this.scribe(e, i)
                }
            })
        }
        var i = n(84),
            o = n(153),
            a = 1;
        t.exports = i.couple(n(98), r)
    }, function(t, e) {
        function n(t) {
            this.percentage = t
        }
        n.prototype.nextBoolean = function() {
            return 100 * Math.random() < this.percentage
        }, t.exports = n
    }, , function(t, e, n) {
        function r(t) {
            var e = {
                transparent: !1,
                hideBorder: !1,
                hideHeader: !1,
                hideFooter: !1,
                hideScrollBar: !1
            };
            return t = t || "", i.contains(t, "transparent") && (e.transparent = !0), i.contains(t, "noborders") && (e.hideBorder = !0), i.contains(t, "noheader") && (e.hideHeader = !0), i.contains(t, "nofooter") && (e.hideFooter = !0), i.contains(t, "noscrollbar") && (e.hideScrollBar = !0), e
        }
        var i = n(11);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = u(t),
                n = {
                    momentId: s.momentId(t.href),
                    chrome: t.getAttribute("data-chrome"),
                    limit: t.getAttribute("data-limit")
                };
            return a.forIn(n, function(t, n) {
                var r = e[t];
                e[t] = o.hasValue(r) ? r : n
            }), e
        }

        function i(t) {
            var e = c(t, f);
            return e.map(function(t) {
                return d(r(t), t.parentNode, t)
            })
        }
        var o = n(25),
            a = n(11),
            s = n(23),
            u = n(75),
            c = n(77)(),
            d = n(157),
            f = "a.twitter-moment";
        t.exports = i
    }, function(t, e, n) {
        function r(t, e, n) {
            return new i(o, a, "twitter-moment", t, e, n)
        }
        var i = n(81),
            o = n(158),
            a = n(53);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(4, function(i, o) {
                var a;
                if (i) return r.reject(i);
                try {
                    a = n(159), r.resolve(new a(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , , , function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = t.getAttribute("href"),
                r = t.getAttribute("data-size"),
                i = d.exec(n)[1];
            return o.aug(e, {
                username: i,
                size: r
            })
        }

        function i(t) {
            var e = s(t, c);
            return e.map(function(t) {
                return u(r(t), t.parentNode, t)
            })
        }
        var o = n(11),
            a = n(75),
            s = n(77)(),
            u = n(163),
            c = "a.periscope-on-air",
            d = /^https?:\/\/(?:www\.)?periscope\.tv\/@?([a-zA-Z0-9_]+)\/?$/i;
        t.exports = i
    }, function(t, e, n) {
        function r(t, e, n) {
            return new i(o, a, "periscope-on-air", t, e, n)
        }
        var i = n(81),
            o = n(164),
            a = n(53);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(5, function(i, o) {
                var a;
                if (i) return r.reject(i);
                try {
                    a = n(165), r.resolve(new a(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , , , function(t, e, n) {
        function r(t) {
            var e = c(t),
                n = t.getAttribute("data-show-replies"),
                r = {
                    widgetId: t.getAttribute("data-widget-id"),
                    chrome: t.getAttribute("data-chrome"),
                    tweetLimit: t.getAttribute("data-tweet-limit"),
                    ariaLive: t.getAttribute("data-aria-polite"),
                    theme: t.getAttribute("data-theme"),
                    linkColor: t.getAttribute("data-link-color"),
                    borderColor: t.getAttribute("data-border-color"),
                    showReplies: n ? o.asBoolean(n) : null,
                    profileScreenName: t.getAttribute("data-screen-name"),
                    profileUserId: t.getAttribute("data-user-id"),
                    favoritesScreenName: t.getAttribute("data-favorites-screen-name"),
                    favoritesUserId: t.getAttribute("data-favorites-user-id"),
                    likesScreenName: t.getAttribute("data-likes-screen-name"),
                    likesUserId: t.getAttribute("data-likes-user-id"),
                    listOwnerScreenName: t.getAttribute("data-list-owner-screen-name"),
                    listOwnerUserId: t.getAttribute("data-list-owner-id"),
                    listId: t.getAttribute("data-list-id"),
                    listSlug: t.getAttribute("data-list-slug"),
                    customTimelineId: t.getAttribute("data-custom-timeline-id"),
                    staticContent: t.getAttribute("data-static-content"),
                    url: t.href
                };
            return r = a.aug(r, a.compact(e)), r.dataSource = s(r), r.useLegacyDefaults = r.dataSource instanceof u, r
        }

        function i(t) {
            var e = d(t, l);
            return e.map(function(t) {
                return f(r(t), t.parentNode, t)
            })
        }
        var o = n(25),
            a = n(11),
            s = n(169),
            u = n(185),
            c = n(75),
            d = n(77)(),
            f = n(187),
            l = "a.twitter-timeline,div.twitter-timeline";
        t.exports = i
    }, function(t, e, n) {
        function r(t) {
            var e, n;
            return e = (t.sourceType + "").toLowerCase(), n = p[e], n ? new n(t) : null
        }

        function i(t) {
            return a(m, function(e) {
                try {
                    return new e(t)
                } catch (t) {}
            })
        }

        function o(t) {
            return t ? r(t) || i(t) : null
        }
        var a = n(170),
            s = n(171),
            u = n(175),
            c = n(177),
            d = n(179),
            f = n(181),
            l = n(183),
            h = n(185),
            p = {
                collection: s,
                event: u,
                likes: c,
                list: d,
                profile: l,
                widget: h,
                url: i
            },
            m = [h, l, c, s, d, u, f];
        t.exports = o
    }, function(t, e) {
        t.exports = function(t, e, n) {
            for (var r, i = 0; i < t.length; i++)
                if (r = e.call(n, t[i], i, t)) return r
        }
    }, function(t, e, n) {
        var r = n(172);
        t.exports = r.build([n(173), n(174)])
    }, function(t, e, n) {
        var r = n(55),
            i = n(59),
            o = n(13);
        r = Object.create(r), r.build = o(r.build, null, i), t.exports = r
    }, function(t, e, n) {
        function r(t) {
            if (!t || !t.headers) throw new Error("unexpected response schema");
            return {
                html: t.body,
                config: t.config,
                pollInterval: 1e3 * parseInt(t.headers.xPolling, 10) || null,
                maxCursorPosition: t.headers.maxPosition,
                minCursorPosition: t.headers.minPosition
            }
        }

        function i(t) {
            if (t && t.headers) throw new Error(t.headers.status);
            throw t instanceof Error ? t : new Error(t)
        }

        function o(t) {
            t.params({
                instanceId: {
                    required: !0,
                    fallback: h.deterministic
                },
                lang: {
                    required: !0,
                    transform: d.matchLanguage,
                    fallback: "en"
                },
                tweetLimit: {
                    transform: l.asInt
                }
            }), t.defineProperty("endpoint", {
                get: function() {
                    throw new Error("endpoint not specified")
                }
            }), t.defineProperty("pollEndpoint", {
                get: function() {
                    return this.endpoint
                }
            }), t.define("cbId", function(t) {
                var e = t ? "_new" : "_old";
                return "tl_" + this.params.instanceId + "_" + this.id + e
            }), t.define("queryParams", function() {
                return {
                    lang: this.params.lang,
                    t: a(),
                    domain: c.host,
                    tweet_limit: this.params.tweetLimit,
                    dnt: f.enabled()
                }
            }), t.define("fetch", function() {
                return s.fetch(this.endpoint, this.queryParams(), u, this.cbId()).then(r, i)
            }), t.define("poll", function(t, e) {
                var n, o;
                return t = t || {}, n = {
                    since_id: t.sinceId,
                    max_id: t.maxId,
                    min_position: t.minPosition,
                    max_position: t.maxPosition
                }, o = p.aug(this.queryParams(), n), s.fetch(this.pollEndpoint, o, u, this.cbId(e)).then(r, i)
            })
        }
        var a = n(131),
            s = n(129),
            u = n(130),
            c = n(18),
            d = n(90),
            f = n(33),
            l = n(25),
            h = n(28),
            p = n(11);
        t.exports = o
    }, function(t, e, n) {
        function r(t, e) {
            return o.collectionId(t) || e
        }

        function i(t) {
            t.params({
                id: {},
                url: {}
            }), t.overrideProperty("id", {
                get: function() {
                    var t = r(this.params.url, this.params.id);
                    return u + t
                }
            }), t.overrideProperty("endpoint", {
                get: function() {
                    return s.timeline(["collection"])
                }
            }), t.around("queryParams", function(t) {
                return a.aug(t(), {
                    collection_id: r(this.params.url, this.params.id)
                })
            }), t.before("initialize", function() {
                if (!r(this.params.url, this.params.id)) throw new Error("one of url or id is required")
            })
        }
        var o = n(23),
            a = n(11),
            s = n(132),
            u = "collection:";
        t.exports = i
    }, function(t, e, n) {
        var r = n(172);
        t.exports = r.build([n(173), n(176)])
    }, function(t, e, n) {
        function r(t, e) {
            return o.eventId(t) || e
        }

        function i(t) {
            t.params({
                id: {},
                url: {}
            }), t.overrideProperty("id", {
                get: function() {
                    var t = r(this.params.url, this.params.id);
                    return u + t
                }
            }), t.overrideProperty("endpoint", {
                get: function() {
                    return s.timeline(["event"])
                }
            }), t.around("queryParams", function(t) {
                return a.aug(t(), {
                    event_id: r(this.params.url, this.params.id)
                })
            }), t.before("initialize", function() {
                if (!r(this.params.url, this.params.id)) throw new Error("one of url or id is required")
            })
        }
        var o = n(23),
            a = n(11),
            s = n(132),
            u = "event:";
        t.exports = i
    }, function(t, e, n) {
        var r = n(172);
        t.exports = r.build([n(173), n(178)])
    }, function(t, e, n) {
        function r(t) {
            return o.likesScreenName(t.url) || t.screenName
        }

        function i(t) {
            t.params({
                screenName: {},
                userId: {},
                url: {}
            }), t.overrideProperty("id", {
                get: function() {
                    var t = r(this.params) || this.params.userId;
                    return u + t
                }
            }), t.overrideProperty("endpoint", {
                get: function() {
                    return s.timeline(["likes"])
                }
            }), t.define("_getLikesQueryParam", function() {
                var t = r(this.params);
                return t ? {
                    screen_name: t
                } : {
                    user_id: this.params.userId
                }
            }), t.around("queryParams", function(t) {
                return a.aug(t(), this._getLikesQueryParam())
            }), t.before("initialize", function() {
                if (!r(this.params) && !this.params.userId) throw new Error("screen name or user id is required")
            })
        }
        var o = n(23),
            a = n(11),
            s = n(132),
            u = "likes:";
        t.exports = i
    }, function(t, e, n) {
        var r = n(172);
        t.exports = r.build([n(173), n(180)])
    }, function(t, e, n) {
        function r(t) {
            var e = o.listScreenNameAndSlug(t.url) || t;
            return a.compact({
                screen_name: e.ownerScreenName,
                user_id: e.ownerUserId,
                list_slug: e.slug
            })
        }

        function i(t) {
            t.params({
                id: {},
                ownerScreenName: {},
                ownerUserId: {},
                slug: {},
                url: {}
            }), t.overrideProperty("id", {
                get: function() {
                    var t, e, n;
                    return this.params.id ? u + this.params.id : (t = r(this.params), e = t && t.list_slug.replace(/-/g, "_"), n = t && (t.screen_name || t.user_id), u + (n + ":" + e))
                }
            }), t.overrideProperty("endpoint", {
                get: function() {
                    return s.timeline(["list"])
                }
            }), t.define("_getListQueryParam", function() {
                return this.params.id ? {
                    list_id: this.params.id
                } : r(this.params)
            }), t.around("queryParams", function(t) {
                return a.aug(t(), this._getListQueryParam())
            }), t.before("initialize", function() {
                var t = r(this.params);
                if (a.isEmptyObject(t) && !this.params.id) throw new Error("qualified slug or list id required")
            })
        }
        var o = n(23),
            a = n(11),
            s = n(132),
            u = "list:";
        t.exports = i
    }, function(t, e, n) {
        var r = n(172);
        t.exports = r.build([n(173), n(182)])
    }, function(t, e, n) {
        function r(t) {
            t.params({
                previewParams: {
                    required: !0,
                    validate: i.isObject
                }
            }), t.overrideProperty("id", {
                get: function() {
                    return "preview"
                }
            }), t.overrideProperty("endpoint", {
                get: function() {
                    return o.timelinePreconfigured(["preview"])
                }
            }), t.override("queryParams", function() {
                return this.params.previewParams
            })
        }
        var i = n(25),
            o = n(132);
        t.exports = r
    }, function(t, e, n) {
        var r = n(172);
        t.exports = r.build([n(173), n(184)])
    }, function(t, e, n) {
        function r(t, e) {
            return o.screenName(t) || e
        }

        function i(t) {
            t.params({
                showReplies: {
                    fallback: !1,
                    transform: a.asBoolean
                },
                screenName: {},
                userId: {},
                url: {}
            }), t.overrideProperty("id", {
                get: function() {
                    var t = r(this.params.url, this.params.screenName);
                    return c + (t || this.params.userId)
                }
            }), t.overrideProperty("endpoint", {
                get: function() {
                    return u.timeline(["profile"])
                }
            }), t.define("_getProfileQueryParam", function() {
                var t = r(this.params.url, this.params.screenName),
                    e = t ? {
                        screen_name: t
                    } : {
                        user_id: this.params.userId
                    };
                return s.aug(e, {
                    with_replies: this.params.showReplies ? "true" : "false"
                })
            }), t.around("queryParams", function(t) {
                return s.aug(t(), this._getProfileQueryParam())
            }), t.before("initialize", function() {
                var t = r(this.params.url, this.params.screenName);
                if (!t && !this.params.userId) throw new Error("screen name or user id is required")
            })
        }
        var o = n(23),
            a = n(25),
            s = n(11),
            u = n(132),
            c = "profile:";
        t.exports = i
    }, function(t, e, n) {
        var r = n(172);
        t.exports = r.build([n(173), n(186)])
    }, function(t, e, n) {
        function r(t) {
            t.params({
                widgetId: {
                    required: !0
                },
                profileShowReplies: {
                    fallback: !1,
                    transform: i.asBoolean
                },
                showReplies: {
                    fallback: !1,
                    transform: i.asBoolean
                },
                profileScreenName: {},
                screenName: {},
                profileUserId: {},
                userId: {},
                favoritesScreenName: {},
                favoritesUserId: {},
                listOwnerScreenName: {},
                listOwnerUserId: {},
                listOwnerId: {},
                listId: {},
                listSlug: {},
                customTimelineId: {},
                previewParams: {}
            }), t.overrideProperty("id", {
                get: function() {
                    return this.params.widgetId
                }
            }), t.overrideProperty("endpoint", {
                get: function() {
                    return a.timelinePreconfigured([this.params.widgetId])
                }
            }), t.overrideProperty("pollEndpoint", {
                get: function() {
                    return a.timelinePreconfigured(["paged", this.params.widgetId])
                }
            }), t.define("_getWidgetQueryParams", function() {
                var t = this.params.profileScreenName || this.params.screenName,
                    e = this.params.profileUserId || this.params.userId,
                    n = this.params.profileShowReplies || this.params.showReplies,
                    r = this.params.listOwnerUserId || this.params.listOwnerId;
                return t || e ? {
                    override_type: "user",
                    override_id: e,
                    override_name: t,
                    with_replies: n ? "true" : "false"
                } : this.params.favoritesScreenName || this.params.favoritesUserId ? {
                    override_type: "favorites",
                    override_id: this.params.favoritesUserId,
                    override_name: this.params.favoritesScreenName
                } : this.params.listOwnerScreenName || r || this.params.listId || this.params.listSlug ? {
                    override_type: "list",
                    override_owner_id: r,
                    override_owner_name: this.params.listOwnerScreenName,
                    override_id: this.params.listId,
                    override_name: this.params.listSlug
                } : this.params.customTimelineId ? {
                    override_type: "custom",
                    override_id: this.params.customTimelineId
                } : void 0
            }), t.around("queryParams", function(t) {
                return o.aug(t(), this._getWidgetQueryParams())
            })
        }
        var i = n(25),
            o = n(11),
            a = n(132);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            return new i(o, a, "twitter-timeline", t, e, n)
        }
        var i = n(81),
            o = n(188),
            a = n(53);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(6, function(i, o) {
                var a;
                if (i) return r.reject(i);
                try {
                    a = n(189), r.resolve(new a(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        function r(t) {
            var e = u(t),
                n = t.getElementsByTagName("A"),
                r = n && n[n.length - 1],
                i = r && a.status(r.href),
                c = t.getAttribute("data-conversation"),
                d = "none" == c || "hidden" == c || o.present(t, "tw-hide-thread"),
                f = t.getAttribute("data-cards"),
                h = "none" == f || "hidden" == f || o.present(t, "tw-hide-media"),
                p = t.getAttribute("data-align") || t.getAttribute("align"),
                m = t.getAttribute("data-link-color"),
                v = t.getAttribute("data-theme");
            return !p && l.test(t.className) && (p = RegExp.$1), s.aug(e, {
                tweetId: i,
                hideThread: d,
                hideCard: h,
                align: p,
                linkColor: m,
                theme: v
            })
        }

        function i(t) {
            var e = c(t, f);
            return e.map(function(t) {
                return d(r(t), t.parentNode, t)
            })
        }
        var o = n(20),
            a = n(23),
            s = n(11),
            u = n(75),
            c = n(77)(),
            d = n(214),
            f = "blockquote.twitter-tweet",
            l = /\btw-align-(left|right|center)\b/;
        t.exports = i
    }, function(t, e, n) {
        function r(t, e, n) {
            return new i(o, a, "twitter-tweet", t, e, n)
        }
        var i = n(81),
            o = n(215),
            a = n(103);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(7, function(i, o) {
                var a;
                if (i) return r.reject(i);
                try {
                    a = n(216), r.resolve(new a(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , , , function(t, e, n) {
        function r(t) {
            return t.input.lang || m
        }

        function i(t, e) {
            var n = {
                ids: [],
                lang: t
            };
            return n = e.reduce(function(t, e) {
                return t.ids.push(e.input.id), t
            }, n), n.ids = n.ids.sort().join(","), n
        }

        function o(t, e) {
            t.forEach(function(t) {
                var n = e[t.input.id];
                n ? t.taskDoneDeferred.resolve(n) : t.taskDoneDeferred.reject(new Error("not found"))
            })
        }

        function a(t) {
            t.forEach(function(t) {
                t.taskDoneDeferred.reject(new Error("request failed"))
            })
        }

        function s(t, e) {
            var n = f(e, r);
            h.forIn(n, function(e, n) {
                var r = i(e, n),
                    s = p(o, null, n),
                    u = p(a, null, n);
                d.fetch(t, r, c).then(s, u)
            })
        }

        function u(t) {
            this.requestQueue = new l(p(s, null, t))
        }
        var c = n(220),
            d = n(129),
            f = n(221),
            l = n(48),
            h = n(11),
            p = n(13),
            m = "en";
        u.prototype.fetch = function(t, e) {
            return this.requestQueue.add({
                id: t,
                lang: e
            })
        }, t.exports = u
    }, function(t, e) {
        function n(t) {
            return {
                success: !0,
                resp: t
            }
        }
        t.exports = n
    }, function(t, e) {
        function n(t, e) {
            return t.reduce(function(t, n) {
                var r = e(n);
                return t[r] = t[r] || [], t[r].push(n), t
            }, {})
        }
        t.exports = n
    }, , , , function(t, e, n) {
        function r(t) {
            var e = s(t),
                n = {
                    screenName: t.getAttribute("data-button-screen-name"),
                    text: t.getAttribute("data-text"),
                    type: t.getAttribute("data-type"),
                    size: t.getAttribute("data-size"),
                    url: t.getAttribute("data-url"),
                    hashtags: t.getAttribute("data-hashtags"),
                    via: t.getAttribute("data-via"),
                    buttonHashtag: t.getAttribute("data-button-hashtag")
                };
            return a.forIn(n, function(t, n) {
                var r = e[t];
                e[t] = d.hasValue(r) ? r : n
            }), e.screenName = e.screenName || e.screen_name, e.buttonHashtag = e.buttonHashtag || e.button_hashtag || e.hashtag, o.present(t, l) && (e.type = "hashtag"), o.present(t, h) && (e.type = "mention"), e
        }

        function i(t) {
            var e = u(t, f);
            return e.map(function(t) {
                return c(r(t), t.parentNode, t)
            })
        }
        var o = n(20),
            a = n(11),
            s = n(75),
            u = n(77)(),
            c = n(226),
            d = n(25),
            f = "a.twitter-share-button, a.twitter-mention-button, a.twitter-hashtag-button",
            l = "twitter-hashtag-button",
            h = "twitter-mention-button";
        t.exports = i
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = t && t.type || "share",
                s = "hashtag" == r ? "twitter-hashtag-button" : "mention" == r ? "twitter-mention-button" : "twitter-share-button";
            return new i(o, a, s, t, e, n)
        }
        var i = n(81),
            o = n(227),
            a = n(115);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(2, function(i, o) {
                var a;
                if (i) return r.reject(i);
                try {
                    a = n(228), r.resolve(new a(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , , function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = t.getElementsByTagName("A"),
                r = n && n[n.length - 1],
                i = {
                    url: r.href
                };
            return i = o.aug({}, i, o.compact(e)), i.dataSource = c(i), i
        }

        function i(t) {
            var e = s(t, d);
            return e.map(function(t) {
                return u(r(t), t.parentNode, t)
            })
        }
        var o = n(11),
            a = n(75),
            s = n(77)(),
            u = n(231),
            c = n(238),
            d = "blockquote.twitter-video";
        t.exports = i
    }, function(t, e, n) {
        function r(t, e, n) {
            return new i(o, a, "twitter-video", t, e, n)
        }
        var i = n(81),
            o = n(232),
            a = n(237);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(7, function(i, o) {
                var a;
                if (i) return r.reject(i);
                try {
                    a = n(233), r.resolve(new a(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , , , , function(t, e, n) {
        function r(t) {
            t.overrideProperty("sandboxEl", {
                get: function() {
                    return this._constrainingWrapper
                }
            }), t.override("makeVisible", function() {
                var t = this.iframeEl;
                return i.write(function() {
                    t.style.visibility = "visible"
                })
            }), t.define("setWrapperSize", function(t, e) {
                var n = this,
                    r = t / e,
                    o = 100 / r + "%",
                    a = u * r + "px";
                return i.write(function() {
                    n._constrainingWrapper.style.maxWidth = a, n._iframeWrapper.style.paddingBottom = o
                })
            }), t.after("initialize", function() {
                this._constrainingWrapper = this._iframeWrapper = null
            }), t.around("insert", function(t, e, n, r, i) {
                var o = this.targetGlobal.document,
                    a = this._constrainingWrapper = o.createElement("div"),
                    u = this._iframeWrapper = o.createElement("div");
                return a.id = e, a.className = (n || {}).class, a.style.minWidth = s + "px", a.style.position = "relative", a.style.margin = c, u.style.position = "relative", u.style.height = "0px", a.appendChild(u), t(void 0, null, null, function(t) {
                    t.style.position = "absolute", t.style.top = "0px", t.style.bottom = "0px", t.style.width = "100%", t.style.height = "100%", u.appendChild(t), i(a)
                })
            })
        }
        var i = n(45),
            o = n(54),
            a = n(63),
            s = 320,
            u = 500,
            c = "10px 0px";
        t.exports = o.build([a, r])
    }, function(t, e, n) {
        function r(t) {
            var e, n;
            return e = (t.sourceType + "").toLowerCase(), n = s[e], n ? new n(t) : null
        }

        function i(t) {
            return a(Object.keys(s), function(e) {
                var n = s[e];
                try {
                    return new n(t)
                } catch (t) {}
            })
        }

        function o(t) {
            return t ? r(t) || i(t) : null
        }
        var a = n(170),
            s = n(239);
        t.exports = o
    }, function(t, e, n) {
        var r = n(240),
            i = n(243);
        t.exports = {
            tweet: r,
            event: i
        }
    }, function(t, e, n) {
        var r = n(172);
        t.exports = r.build([n(241), n(242)])
    }, function(t, e, n) {
        function r(t) {
            t.params({
                lang: {
                    required: !0,
                    transform: i.matchLanguage,
                    fallback: "en"
                }
            }), t.defineProperty("identifier", {
                get: function() {
                    throw new Error("identifier not specified")
                }
            }), t.defineProperty("name", {
                get: function() {
                    throw new Error("name not specified")
                }
            }), t.defineProperty("scribeItemType", {
                get: function() {
                    throw new Error("scribeItemType not specified")
                }
            }), t.define("fetch", function() {
                throw new Error("fetch not specified")
            })
        }
        var i = n(90);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            return e || o.status(t)
        }

        function i(t) {
            t.params({
                id: {},
                url: {}
            }), t.overrideProperty("identifier", {
                get: function() {
                    return r(this.params.url, this.params.id)
                }
            }), t.override("fetch", function() {
                return u.fetch(this.identifier, this.params.lang)
            }), t.overrideProperty("scribeItemType", {
                get: function() {
                    return c.TWEET
                }
            }), t.overrideProperty("name", {
                get: function() {
                    return "tweet"
                }
            }), t.before("initialize", function() {
                if (!r(this.params.url, this.params.id)) throw new Error("one of url or id is required")
            })
        }
        var o = n(23),
            a = n(132),
            s = n(219),
            u = new s(a.video()),
            c = n(102);
        t.exports = i
    }, function(t, e, n) {
        var r = n(172);
        t.exports = r.build([n(241), n(244)])
    }, function(t, e, n) {
        function r(t, e) {
            return o.eventId(t) || e
        }

        function i(t) {
            t.params({
                id: {},
                url: {}
            }), t.overrideProperty("identifier", {
                get: function() {
                    return r(this.params.url, this.params.id)
                }
            }), t.override("fetch", function() {
                var t = {
                    lang: this.params.lang,
                    event_id: this.identifier
                };
                return a.fetch(s.eventVideo(), t)
            }), t.overrideProperty("scribeItemType", {
                get: function() {
                    return u.LIVE_VIDEO_EVENT
                }
            }), t.overrideProperty("name", {
                get: function() {
                    return "event"
                }
            }), t.before("initialize", function() {
                if (!r(this.params.url, this.params.id)) throw new Error("one of url or id is required")
            })
        }
        var o = n(23),
            a = n(245),
            s = n(132),
            u = n(102);
        t.exports = i
    }, function(t, e, n) {
        function r(t, e) {
            return s.fetch(t, e, i).then(o, a)
        }

        function i(t) {
            return {
                success: !t.error,
                resp: t
            }
        }

        function o(t) {
            return t.data.html
        }

        function a(t) {
            return u.reject(t.error.detail)
        }
        var s = n(129),
            u = n(2);
        t.exports = {
            fetch: r
        }
    }, function(t, e, n) {
        var r = n(11);
        t.exports = r.aug({}, n(247), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256))
    }, function(t, e, n) {
        var r = n(80),
            i = n(248),
            o = i(["userId"], {}, r);
        t.exports = {
            createDMButton: o
        }
    }, function(t, e, n) {
        function r(t, e, n) {
            t = t || [], e = e || {};
            var r = "ƒ(" + t.join(", ") + ", target, [options]);";
            return function() {
                var c, d, f, l, h = Array.prototype.slice.apply(arguments, [0, t.length]),
                    p = Array.prototype.slice.apply(arguments, [t.length]);
                return p.forEach(function(t) {
                    if (t) return t.nodeType === Node.ELEMENT_NODE ? void(f = t) : u.isType("function", t) ? void(c = t) : void(u.isType("object", t) && (d = t))
                }), h.length !== t.length || 0 === p.length ? (c && u.async(function() {
                    c(!1)
                }), i.reject(new Error("Not enough parameters. Expected: " + r))) : f ? (d = u.aug({}, d || {}, e), t.forEach(function(t) {
                    d[t] = h.shift()
                }), s.asBoolean(d.dnt) && a.setOn(), l = o.addWidget(n(d, f)), c && l.then(c, function() {
                    c(!1)
                }), l) : (c && u.async(function() {
                    c(!1)
                }), i.reject(new Error("No target element specified. Expected: " + r)))
            }
        }
        var i = n(2),
            o = n(43),
            a = n(33),
            s = n(25),
            u = n(11);
        t.exports = r
    }, function(t, e, n) {
        var r = n(108),
            i = n(248),
            o = i(["screenName"], {}, r);
        t.exports = {
            createFollowButton: o
        }
    }, function(t, e, n) {
        var r = n(124),
            i = n(248),
            o = i(["collectionId"], {}, r);
        t.exports = {
            createGridFromCollection: o
        }
    }, function(t, e, n) {
        var r = n(157),
            i = n(248),
            o = i(["momentId"], {}, r);
        t.exports = {
            createMoment: o
        }
    }, function(t, e, n) {
        var r = n(163),
            i = n(248),
            o = i(["username"], {}, r);
        t.exports = {
            createPeriscopeOnAirButton: o
        }
    }, function(t, e, n) {
        function r(t) {
            var e, n = s.toRealArray(arguments).slice(1);
            return t = t || {}, n.forEach(function(t) {
                s.isType("object", t) && (e = t, i(e))
            }), e || (e = {}, n.push(e)), u.isString(t) && (t = s.aug({}, e, {
                sourceType: "widget",
                widgetId: t
            })), t.lang = e.lang, t.tweetLimit = e.tweetLimit, t.showReplies = e.showReplies, e.dataSource = c(t), e.useLegacyDefaults = e.dataSource instanceof d, h.apply(this, n)
        }

        function i(t) {
            t.ariaLive = t.ariaPolite
        }
        var o = n(18),
            a = n(23),
            s = n(11),
            u = n(25),
            c = n(169),
            d = n(185),
            f = n(187),
            l = n(248),
            h = l([], {}, f),
            p = {
                createTimeline: r
            };
        a.isTwitterURL(o.href) && (p.createTimelinePreview = function(t, e, n) {
            var r = {
                previewParams: t,
                useLegacyDefaults: !0,
                isPreviewTimeline: !0
            };
            return r.dataSource = c(r), h(e, r, n)
        }), t.exports = p
    }, function(t, e, n) {
        function r(t) {
            return function() {
                return i.toRealArray(arguments).slice(1).forEach(function(t) {
                    i.isType("object", t) && (t.hideCard = "none" == t.cards || "hidden" == t.cards, t.hideThread = "none" == t.conversation || "hidden" == t.conversation)
                }), t.apply(this, arguments)
            }
        }
        var i = n(11),
            o = n(214),
            a = n(248),
            s = r(a(["tweetId"], {}, o));
        t.exports = {
            createTweet: s,
            createTweetEmbed: s
        }
    }, function(t, e, n) {
        function r(t) {
            return function() {
                return i.toRealArray(arguments).slice(1).forEach(function(t) {
                    i.isType("object", t) && (t.screenName = t.screenName || t.screen_name, t.buttonHashtag = t.buttonHashtag || t.button_hashtag || t.hashtag)
                }), t.apply(this, arguments)
            }
        }
        var i = n(11),
            o = n(226),
            a = n(248),
            s = a(["url"], {
                type: "share"
            }, o),
            u = a(["buttonHashtag"], {
                type: "hashtag"
            }, o),
            c = a(["screenName"], {
                type: "mention"
            }, o);
        t.exports = {
            createShareButton: r(s),
            createHashtagButton: r(u),
            createMentionButton: r(c)
        }
    }, function(t, e, n) {
        function r(t) {
            var e, n = a.toRealArray(arguments).slice(1),
                r = t || {};
            return n.forEach(function(t) {
                a.isType("object", t) && (e = t)
            }), e || (e = {}, n.push(e)), (s.isString(t) || s.isNumber(t)) && (r = {
                sourceType: "tweet",
                id: t
            }), r.lang = e.lang, e.dataSource = u(r), c.apply(this, n)
        }
        var i = n(231),
            o = n(248),
            a = n(11),
            s = n(25),
            u = n(238),
            c = o([], {}, i);
        t.exports = {
            createVideo: r
        }
    }, function(t, e, n) {
        function r() {
            c = 1;
            for (var t = 0, e = d.length; t < e; t++) d[t]()
        }
        var i, o, a, s = n(9),
            u = n(7),
            c = 0,
            d = [],
            f = !1,
            l = s.createElement("a");
        /^loade|c/.test(s.readyState) && (c = 1), s.addEventListener && s.addEventListener("DOMContentLoaded", o = function() {
            s.removeEventListener("DOMContentLoaded", o, f), r()
        }, f), l.doScroll && s.attachEvent("onreadystatechange", i = function() {
            /^c/.test(s.readyState) && (s.detachEvent("onreadystatechange", i), r())
        }), a = l.doScroll ? function(t) {
            u.self != u.top ? c ? t() : d.push(t) : ! function() {
                try {
                    l.doScroll("left")
                } catch (e) {
                    return setTimeout(function() {
                        a(t)
                    }, 50)
                }
                t()
            }()
        } : function(t) {
            c ? t() : d.push(t)
        }, t.exports = a
    }, function(t, e, n) {
        var r = n(40),
            i = n(14);
        t.exports = function() {
            i.set("buildVersion", r.version)
        }
    }])))
}();
