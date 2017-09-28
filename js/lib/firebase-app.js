/*! @license Firebase v3.5.2
 Build: 3.5.2-rc.1
 Terms: https://developers.google.com/terms */
var firebase = null;
(function () {
    for (var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
        if (c.get || c.set)throw new TypeError("ES3 does not support getters and setters.");
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    }, h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, ba = function () {
        ba = function () {
        };
        h.Symbol || (h.Symbol = ca)
    }, da = 0, ca = function (a) {
        return "jscomp_symbol_" + (a || "") + da++
    }, m = function () {
        ba();
        var a = h.Symbol.iterator;
        a || (a = h.Symbol.iterator =
            h.Symbol("iterator"));
        "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
                return ea(this)
            }
        });
        m = function () {
        }
    }, ea = function (a) {
        var b = 0;
        return fa(function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        })
    }, fa = function (a) {
        m();
        a = {next: a};
        a[h.Symbol.iterator] = function () {
            return this
        };
        return a
    }, n = function (a) {
        m();
        var b = a[Symbol.iterator];
        return b ? b.call(a) : ea(a)
    }, p = h, q = ["Promise"], r = 0; r < q.length - 1; r++) {
        var t = q[r];
        t in p || (p[t] = {});
        p = p[t]
    }
    var ga = q[q.length - 1], u = p[ga], w = function () {
        function a() {
            this.c = null
        }

        if (u)return u;
        a.prototype.L = function (a) {
            null == this.c && (this.c = [], this.W());
            this.c.push(a)
        };
        a.prototype.W = function () {
            var a = this;
            this.M(function () {
                a.$()
            })
        };
        var b = h.setTimeout;
        a.prototype.M = function (a) {
            b(a, 0)
        };
        a.prototype.$ = function () {
            for (; this.c && this.c.length;) {
                var a = this.c;
                this.c = [];
                for (var b = 0; b < a.length; ++b) {
                    var c = a[b];
                    delete a[b];
                    try {
                        c()
                    } catch (k) {
                        this.X(k)
                    }
                }
            }
            this.c = null
        };
        a.prototype.X = function (a) {
            this.M(function () {
                throw a;
            })
        };
        var c =
            function (a) {
                this.a = 0;
                this.j = void 0;
                this.m = [];
                var b = this.F();
                try {
                    a(b.resolve, b.reject)
                } catch (g) {
                    b.reject(g)
                }
            };
        c.prototype.F = function () {
            function a(a) {
                return function (e) {
                    c || (c = !0, a.call(b, e))
                }
            }

            var b = this, c = !1;
            return {resolve: a(this.ia), reject: a(this.K)}
        };
        c.prototype.ia = function (a) {
            if (a === this)this.K(new TypeError("A Promise cannot resolve to itself")); else if (a instanceof c)this.la(a); else {
                var b;
                a:switch (typeof a) {
                    case "object":
                        b = null != a;
                        break a;
                    case "function":
                        b = !0;
                        break a;
                    default:
                        b = !1
                }
                b ? this.ha(a) :
                    this.R(a)
            }
        };
        c.prototype.ha = function (a) {
            var b = void 0;
            try {
                b = a.then
            } catch (g) {
                this.K(g);
                return
            }
            "function" == typeof b ? this.ma(b, a) : this.R(a)
        };
        c.prototype.K = function (a) {
            this.U(2, a)
        };
        c.prototype.R = function (a) {
            this.U(1, a)
        };
        c.prototype.U = function (a, b) {
            if (0 != this.a)throw Error("Cannot settle(" + a + ", " + b | "): Promise already settled in state" + this.a);
            this.a = a;
            this.j = b;
            this.ba()
        };
        c.prototype.ba = function () {
            if (null != this.m) {
                for (var a = this.m, b = 0; b < a.length; ++b)a[b].call(), a[b] = null;
                this.m = null
            }
        };
        var d = new a;
        c.prototype.la =
            function (a) {
                var b = this.F();
                a.o(b.resolve, b.reject)
            };
        c.prototype.ma = function (a, b) {
            var c = this.F();
            try {
                a.call(b, c.resolve, c.reject)
            } catch (k) {
                c.reject(k)
            }
        };
        c.prototype.then = function (a, b) {
            function e(a, b) {
                return "function" == typeof a ? function (b) {
                    try {
                        d(a(b))
                    } catch (Fa) {
                        f(Fa)
                    }
                } : b
            }

            var d, f, z = new c(function (a, b) {
                d = a;
                f = b
            });
            this.o(e(a, d), e(b, f));
            return z
        };
        c.prototype.catch = function (a) {
            return this.then(void 0, a)
        };
        c.prototype.o = function (a, b) {
            function c() {
                switch (e.a) {
                    case 1:
                        a(e.j);
                        break;
                    case 2:
                        b(e.j);
                        break;
                    default:
                        throw Error("Unexpected state: " +
                            e.a);
                }
            }

            var e = this;
            null == this.m ? d.L(c) : this.m.push(function () {
                d.L(c)
            })
        };
        c.resolve = function (a) {
            return a instanceof c ? a : new c(function (b) {
                b(a)
            })
        };
        c.reject = function (a) {
            return new c(function (b, c) {
                c(a)
            })
        };
        c.race = function (a) {
            return new c(function (b, d) {
                for (var e = n(a), f = e.next(); !f.done; f = e.next())c.resolve(f.value).o(b, d)
            })
        };
        c.all = function (a) {
            var b = n(a), d = b.next();
            return d.done ? c.resolve([]) : new c(function (a, e) {
                function k(b) {
                    return function (c) {
                        f[b] = c;
                        l--;
                        0 == l && a(f)
                    }
                }

                var f = [], l = 0;
                do f.push(void 0), l++, c.resolve(d.value).o(k(f.length -
                    1), e), d = b.next(); while (!d.done)
            })
        };
        c.$jscomp$new$AsyncExecutor = function () {
            return new a
        };
        return c
    }();
    w != u && null != w && aa(p, ga, {configurable: !0, writable: !0, value: w});
    var x = this, y = function () {
    }, ha = function (a) {
        var b = typeof a;
        if ("object" == b)if (a) {
            if (a instanceof Array)return "array";
            if (a instanceof Object)return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call)return "object";
        return b
    }, A = function (a) {
        return "function" == ha(a)
    }, ia = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, ja = function (a, b, c) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }, B = function (a, b, c) {
        B = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
            ia : ja;
        return B.apply(null, arguments)
    }, ka = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }, la = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.sa = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.ra = function (a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
    var C;
    C = "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : global;
    function __extends(a, b) {
        function c() {
            this.constructor = a
        }

        for (var d in b)b.hasOwnProperty(d) && (a[d] = b[d]);
        a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
    }

    function __decorate(a, b, c, d) {
        var e = arguments.length, f = 3 > e ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d, g;
        g = C.Reflect;
        if ("object" === typeof g && "function" === typeof g.decorate)f = g.decorate(a, b, c, d); else for (var k = a.length - 1; 0 <= k; k--)if (g = a[k])f = (3 > e ? g(f) : 3 < e ? g(b, c, f) : g(b, c)) || f;
        return 3 < e && f && Object.defineProperty(b, c, f), f
    }

    function __metadata(a, b) {
        var c = C.Reflect;
        if ("object" === typeof c && "function" === typeof c.metadata)return c.metadata(a, b)
    }

    var __param = function (a, b) {
        return function (c, d) {
            b(c, d, a)
        }
    }, __awaiter = function (a, b, c, d) {
        return new (c || (c = Promise))(function (e, f) {
            function g(a) {
                try {
                    l(d.next(a))
                } catch (v) {
                    f(v)
                }
            }

            function k(a) {
                try {
                    l(d.throw(a))
                } catch (v) {
                    f(v)
                }
            }

            function l(a) {
                a.done ? e(a.value) : (new c(function (b) {
                    b(a.value)
                })).then(g, k)
            }

            l((d = d.apply(a, b)).next())
        })
    };
    "undefined" !== typeof C.V && C.V || (C.__extends = __extends, C.__decorate = __decorate, C.__metadata = __metadata, C.__param = __param, C.__awaiter = __awaiter);
    var D = function (a) {
        if (Error.captureStackTrace)Error.captureStackTrace(this, D); else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    la(D, Error);
    D.prototype.name = "CustomError";
    var ma = function (a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)d += c.shift() + e.shift();
        return d + c.join("%s")
    };
    var E = function (a, b) {
        b.unshift(a);
        D.call(this, ma.apply(null, b));
        b.shift()
    };
    la(E, D);
    E.prototype.name = "AssertionError";
    var na = function (a, b, c, d) {
        var e = "Assertion failed";
        if (c)var e = e + (": " + c), f = d; else a && (e += ": " + a, f = b);
        throw new E("" + e, f || []);
    }, F = function (a, b, c) {
        a || na("", null, b, Array.prototype.slice.call(arguments, 2))
    }, G = function (a, b, c) {
        A(a) || na("Expected function but got %s: %s.", [ha(a), a], b, Array.prototype.slice.call(arguments, 2))
    };
    var H = function (a, b, c) {
        this.ea = c;
        this.Y = a;
        this.ga = b;
        this.A = 0;
        this.w = null
    };
    H.prototype.get = function () {
        var a;
        0 < this.A ? (this.A--, a = this.w, this.w = a.next, a.next = null) : a = this.Y();
        return a
    };
    H.prototype.put = function (a) {
        this.ga(a);
        this.A < this.ea && (this.A++, a.next = this.w, this.w = a)
    };
    var I;
    a:{
        var oa = x.navigator;
        if (oa) {
            var pa = oa.userAgent;
            if (pa) {
                I = pa;
                break a
            }
        }
        I = ""
    }
    ;
    var qa = function (a) {
        x.setTimeout(function () {
            throw a;
        }, 0)
    }, J, ra = function () {
        var a = x.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == I.indexOf("Presto") && (a = function () {
            var a = document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow, a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol +
            "//" + b.location.host, a = B(function (a) {
                if (("*" == d || a.origin == d) && a.data == c)this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && -1 == I.indexOf("Trident") && -1 == I.indexOf("MSIE")) {
            var b = new a, c = {}, d = c;
            b.port1.onmessage = function () {
                if (void 0 !== c.next) {
                    c = c.next;
                    var a = c.N;
                    c.N = null;
                    a()
                }
            };
            return function (a) {
                d.next = {N: a};
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in
        document.createElement("SCRIPT") ? function (a) {
            var b = document.createElement("SCRIPT");
            b.onreadystatechange = function () {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            document.documentElement.appendChild(b)
        } : function (a) {
            x.setTimeout(a, 0)
        }
    };
    var K = function () {
        this.C = this.g = null
    }, sa = new H(function () {
        return new L
    }, function (a) {
        a.reset()
    }, 100);
    K.prototype.add = function (a, b) {
        var c = sa.get();
        c.set(a, b);
        this.C ? this.C.next = c : (F(!this.g), this.g = c);
        this.C = c
    };
    K.prototype.remove = function () {
        var a = null;
        this.g && (a = this.g, this.g = this.g.next, this.g || (this.C = null), a.next = null);
        return a
    };
    var L = function () {
        this.next = this.scope = this.H = null
    };
    L.prototype.set = function (a, b) {
        this.H = a;
        this.scope = b;
        this.next = null
    };
    L.prototype.reset = function () {
        this.next = this.scope = this.H = null
    };
    var O = function (a, b) {
        M || ta();
        N || (M(), N = !0);
        ua.add(a, b)
    }, M, ta = function () {
        var a = x.Promise;
        if (-1 != String(a).indexOf("[native code]")) {
            var b = a.resolve(void 0);
            M = function () {
                b.then(va)
            }
        } else M = function () {
            var a = va, b;
            !(b = !A(x.setImmediate)) && (b = x.Window && x.Window.prototype) && (b = -1 == I.indexOf("Edge") && x.Window.prototype.setImmediate == x.setImmediate);
            b ? (J || (J = ra()), J(a)) : x.setImmediate(a)
        }
    }, N = !1, ua = new K, va = function () {
        for (var a; a = ua.remove();) {
            try {
                a.H.call(a.scope)
            } catch (b) {
                qa(b)
            }
            sa.put(a)
        }
        N = !1
    };
    var Q = function (a, b) {
        this.a = 0;
        this.j = void 0;
        this.s = this.h = this.B = null;
        this.v = this.G = !1;
        if (a != y)try {
            var c = this;
            a.call(b, function (a) {
                P(c, 2, a)
            }, function (a) {
                try {
                    if (a instanceof Error)throw a;
                    throw Error("Promise rejected.");
                } catch (e) {
                }
                P(c, 3, a)
            })
        } catch (d) {
            P(this, 3, d)
        }
    }, wa = function () {
        this.next = this.context = this.i = this.f = this.child = null;
        this.D = !1
    };
    wa.prototype.reset = function () {
        this.context = this.i = this.f = this.child = null;
        this.D = !1
    };
    var xa = new H(function () {
        return new wa
    }, function (a) {
        a.reset()
    }, 100), ya = function (a, b, c) {
        var d = xa.get();
        d.f = a;
        d.i = b;
        d.context = c;
        return d
    }, Aa = function (a, b, c) {
        za(a, b, c, null) || O(ka(b, a))
    };
    Q.prototype.then = function (a, b, c) {
        null != a && G(a, "opt_onFulfilled should be a function.");
        null != b && G(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return Ba(this, A(a) ? a : null, A(b) ? b : null, c)
    };
    Q.prototype.then = Q.prototype.then;
    Q.prototype.$goog_Thenable = !0;
    Q.prototype.na = function (a, b) {
        return Ba(this, null, a, b)
    };
    var Da = function (a, b) {
        a.h || 2 != a.a && 3 != a.a || Ca(a);
        F(null != b.f);
        a.s ? a.s.next = b : a.h = b;
        a.s = b
    }, Ba = function (a, b, c, d) {
        var e = ya(null, null, null);
        e.child = new Q(function (a, g) {
            e.f = b ? function (c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (z) {
                    g(z)
                }
            } : a;
            e.i = c ? function (b) {
                try {
                    var e = c.call(d, b);
                    a(e)
                } catch (z) {
                    g(z)
                }
            } : g
        });
        e.child.B = a;
        Da(a, e);
        return e.child
    };
    Q.prototype.oa = function (a) {
        F(1 == this.a);
        this.a = 0;
        P(this, 2, a)
    };
    Q.prototype.pa = function (a) {
        F(1 == this.a);
        this.a = 0;
        P(this, 3, a)
    };
    var P = function (a, b, c) {
        0 == a.a && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, za(c, a.oa, a.pa, a) || (a.j = c, a.a = b, a.B = null, Ca(a), 3 != b || Ea(a, c)))
    }, za = function (a, b, c, d) {
        if (a instanceof Q)return null != b && G(b, "opt_onFulfilled should be a function."), null != c && G(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), Da(a, ya(b || y, c || null, d)), !0;
        var e;
        if (a)try {
            e = !!a.$goog_Thenable
        } catch (g) {
            e = !1
        } else e = !1;
        if (e)return a.then(b, c, d),
            !0;
        e = typeof a;
        if ("object" == e && null != a || "function" == e)try {
            var f = a.then;
            if (A(f))return Ga(a, f, b, c, d), !0
        } catch (g) {
            return c.call(d, g), !0
        }
        return !1
    }, Ga = function (a, b, c, d, e) {
        var f = !1, g = function (a) {
            f || (f = !0, c.call(e, a))
        }, k = function (a) {
            f || (f = !0, d.call(e, a))
        };
        try {
            b.call(a, g, k)
        } catch (l) {
            k(l)
        }
    }, Ca = function (a) {
        a.G || (a.G = !0, O(a.aa, a))
    }, Ha = function (a) {
        var b = null;
        a.h && (b = a.h, a.h = b.next, b.next = null);
        a.h || (a.s = null);
        null != b && F(null != b.f);
        return b
    };
    Q.prototype.aa = function () {
        for (var a; a = Ha(this);) {
            var b = this.a, c = this.j;
            if (3 == b && a.i && !a.D) {
                var d;
                for (d = this; d && d.v; d = d.B)d.v = !1
            }
            if (a.child)a.child.B = null, Ia(a, b, c); else try {
                a.D ? a.f.call(a.context) : Ia(a, b, c)
            } catch (e) {
                Ja.call(null, e)
            }
            xa.put(a)
        }
        this.G = !1
    };
    var Ia = function (a, b, c) {
        2 == b ? a.f.call(a.context, c) : a.i && a.i.call(a.context, c)
    }, Ea = function (a, b) {
        a.v = !0;
        O(function () {
            a.v && Ja.call(null, b)
        })
    }, Ja = qa;

    function R(a, b) {
        if (!(b instanceof Object))return b;
        switch (b.constructor) {
            case Date:
                return new Date(b.getTime());
            case Object:
                void 0 === a && (a = {});
                break;
            case Array:
                a = [];
                break;
            default:
                return b
        }
        for (var c in b)b.hasOwnProperty(c) && (a[c] = R(a[c], b[c]));
        return a
    };
    Q.all = function (a) {
        return new Q(function (b, c) {
            var d = a.length, e = [];
            if (d)for (var f = function (a, c) {
                d--;
                e[a] = c;
                0 == d && b(e)
            }, g = function (a) {
                c(a)
            }, k = 0, l; k < a.length; k++)l = a[k], Aa(l, ka(f, k), g); else b(e)
        })
    };
    Q.resolve = function (a) {
        if (a instanceof Q)return a;
        var b = new Q(y);
        P(b, 2, a);
        return b
    };
    Q.reject = function (a) {
        return new Q(function (b, c) {
            c(a)
        })
    };
    Q.prototype["catch"] = Q.prototype.na;
    var S = Q;
    "undefined" !== typeof Promise && (S = Promise);
    var Ka = S;

    function La(a, b) {
        a = new T(a, b);
        return a.subscribe.bind(a)
    }

    var T = function (a, b) {
        var c = this;
        this.b = [];
        this.T = 0;
        this.task = Ka.resolve();
        this.u = !1;
        this.J = b;
        this.task.then(function () {
            a(c)
        }).catch(function (a) {
            c.error(a)
        })
    };
    T.prototype.next = function (a) {
        U(this, function (b) {
            b.next(a)
        })
    };
    T.prototype.error = function (a) {
        U(this, function (b) {
            b.error(a)
        });
        this.close(a)
    };
    T.prototype.complete = function () {
        U(this, function (a) {
            a.complete()
        });
        this.close()
    };
    T.prototype.subscribe = function (a, b, c) {
        var d = this, e;
        if (void 0 === a && void 0 === b && void 0 === c)throw Error("Missing Observer.");
        e = Ma(a) ? a : {next: a, error: b, complete: c};
        void 0 === e.next && (e.next = Na);
        void 0 === e.error && (e.error = Na);
        void 0 === e.complete && (e.complete = Na);
        a = this.qa.bind(this, this.b.length);
        this.u && this.task.then(function () {
            try {
                d.O ? e.error(d.O) : e.complete()
            } catch (f) {
            }
        });
        this.b.push(e);
        return a
    };
    T.prototype.qa = function (a) {
        void 0 !== this.b && void 0 !== this.b[a] && (delete this.b[a], --this.T, 0 === this.T && void 0 !== this.J && this.J(this))
    };
    var U = function (a, b) {
        if (!a.u)for (var c = 0; c < a.b.length; c++)Oa(a, c, b)
    }, Oa = function (a, b, c) {
        a.task.then(function () {
            if (void 0 !== a.b && void 0 !== a.b[b])try {
                c(a.b[b])
            } catch (d) {
                "undefined" !== typeof console && console.error && console.error(d)
            }
        })
    };
    T.prototype.close = function (a) {
        var b = this;
        this.u || (this.u = !0, void 0 !== a && (this.O = a), this.task.then(function () {
            b.b = void 0;
            b.J = void 0
        }))
    };
    function Ma(a) {
        if ("object" !== typeof a || null === a)return !1;
        for (var b = n(["next", "error", "complete"]), c = b.next(); !c.done; c = b.next())if (c = c.value, c in a && "function" === typeof a[c])return !0;
        return !1
    }

    function Na() {
    };
    var Pa = Error.captureStackTrace, V = function (a, b) {
        this.code = a;
        this.message = b;
        if (Pa)Pa(this, Qa.prototype.create); else {
            var c = Error.apply(this, arguments);
            this.name = "FirebaseError";
            Object.defineProperty(this, "stack", {
                get: function () {
                    return c.stack
                }
            })
        }
    };
    V.prototype = Object.create(Error.prototype);
    V.prototype.constructor = V;
    V.prototype.name = "FirebaseError";
    var Qa = function (a, b, c) {
        this.ja = a;
        this.ka = b;
        this.Z = c;
        this.pattern = /\{\$([^}]+)}/g
    };
    Qa.prototype.create = function (a, b) {
        void 0 === b && (b = {});
        var c = this.Z[a];
        a = this.ja + "/" + a;
        var c = void 0 === c ? "Error" : c.replace(this.pattern, function (a, c) {
            a = b[c];
            return void 0 !== a ? a.toString() : "<" + c + "?>"
        }), c = this.ka + ": " + c + " (" + a + ").", c = new V(a, c), d;
        for (d in b)b.hasOwnProperty(d) && "_" !== d.slice(-1) && (c[d] = b[d]);
        return c
    };
    var W = S, X = function (a, b, c) {
        var d = this;
        this.P = c;
        this.S = !1;
        this.l = {};
        this.I = b;
        this.fa = R(void 0, a);
        Object.keys(c.INTERNAL.factories).forEach(function (a) {
            var b = c.INTERNAL.useAsService(d, a);
            null !== b && (b = d.da.bind(d, b), d[a] = b)
        })
    };
    X.prototype.delete = function () {
        var a = this;
        return (new W(function (b) {
            Y(a);
            b()
        })).then(function () {
            a.P.INTERNAL.removeApp(a.I);
            return W.all(Object.keys(a.l).map(function (b) {
                return a.l[b].INTERNAL.delete()
            }))
        }).then(function () {
            a.S = !0;
            a.l = {}
        })
    };
    X.prototype.da = function (a) {
        Y(this);
        void 0 === this.l[a] && (this.l[a] = this.P.INTERNAL.factories[a](this, this.ca.bind(this)));
        return this.l[a]
    };
    X.prototype.ca = function (a) {
        R(this, a)
    };
    var Y = function (a) {
        a.S && Z(Ra("deleted", {name: a.I}))
    };
    h.Object.defineProperties(X.prototype, {
        name: {
            configurable: !0, enumerable: !0, get: function () {
                Y(this);
                return this.I
            }
        }, options: {
            configurable: !0, enumerable: !0, get: function () {
                Y(this);
                return this.fa
            }
        }
    });
    X.prototype.name && X.prototype.options || X.prototype.delete || console.log("dc");
    function Sa() {
        function a(a) {
            a = a || "[DEFAULT]";
            var b = d[a];
            void 0 === b && Z("noApp", {name: a});
            return b
        }

        function b(a, b) {
            Object.keys(e).forEach(function (d) {
                d = c(a, d);
                if (null !== d && f[d])f[d](b, a)
            })
        }

        function c(a, b) {
            if ("serverAuth" === b)return null;
            var c = b;
            a = a.options;
            "auth" === b && (a.serviceAccount || a.credential) && (c = "serverAuth", "serverAuth" in e || Z("serverAuthMissing"));
            return c
        }

        var d = {}, e = {}, f = {}, g = {
            __esModule: !0, initializeApp: function (a, c) {
                void 0 === c ? c = "[DEFAULT]" : "string" === typeof c && "" !== c || Z("bad-app-name",
                    {name: c + ""});
                void 0 !== d[c] && Z("dupApp", {name: c});
                a = new X(a, c, g);
                d[c] = a;
                b(a, "create");
                void 0 != a.INTERNAL && void 0 != a.INTERNAL.getToken || R(a, {
                    INTERNAL: {
                        getToken: function () {
                            return W.resolve(null)
                        }, addAuthTokenListener: function () {
                        }, removeAuthTokenListener: function () {
                        }
                    }
                });
                return a
            }, app: a, apps: null, Promise: W, SDK_VERSION: "0.0.0", INTERNAL: {
                registerService: function (b, c, d, v) {
                    e[b] && Z("dupService", {name: b});
                    e[b] = c;
                    v && (f[b] = v);
                    c = function (c) {
                        void 0 === c && (c = a());
                        return c[b]()
                    };
                    void 0 !== d && R(c, d);
                    return g[b] = c
                }, createFirebaseNamespace: Sa,
                extendNamespace: function (a) {
                    R(g, a)
                }, createSubscribe: La, ErrorFactory: Qa, removeApp: function (a) {
                    b(d[a], "delete");
                    delete d[a]
                }, factories: e, useAsService: c, Promise: Q, deepExtend: R
            }
        };
        g["default"] = g;
        Object.defineProperty(g, "apps", {
            get: function () {
                return Object.keys(d).map(function (a) {
                    return d[a]
                })
            }
        });
        a.App = X;
        return g
    }

    function Z(a, b) {
        throw Error(Ra(a, b));
    }

    function Ra(a, b) {
        b = b || {};
        b = {
            noApp: "No Firebase App '" + b.name + "' has been created - call Firebase App.initializeApp().",
            "bad-app-name": "Illegal App name: '" + b.name + "'.",
            dupApp: "Firebase App named '" + b.name + "' already exists.",
            deleted: "Firebase App named '" + b.name + "' already deleted.",
            dupService: "Firebase Service named '" + b.name + "' already registered.",
            serverAuthMissing: "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain."
        }[a];
        return void 0 === b ? "Application Error: (" + a + ")" : b
    };
    "undefined" !== typeof firebase && (firebase = Sa());
})();
firebase.SDK_VERSION = "3.5.2";
