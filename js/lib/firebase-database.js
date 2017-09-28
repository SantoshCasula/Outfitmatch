/*! @license Firebase v3.5.2
 Build: 3.5.2-rc.1
 Terms: https://developers.google.com/terms */
(function () {
    var g, n = this;

    function p(a) {
        return void 0 !== a
    }

    function aa() {
    }

    function ba(a) {
        a.Wb = function () {
            return a.bf ? a.bf : a.bf = new a
        }
    }

    function ca(a) {
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
    }

    function da(a) {
        return "array" == ca(a)
    }

    function ea(a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function q(a) {
        return "string" == typeof a
    }

    function fa(a) {
        return "number" == typeof a
    }

    function ga(a) {
        return "function" == ca(a)
    }

    function ha(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ia(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ja(a, b, c) {
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
    }

    function r(a, b, c) {
        r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
        return r.apply(null, arguments)
    }

    function ka(a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.Ig = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Eg = function (a, c, f) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++)h[k - 2] = arguments[k];
            return b.prototype[c].apply(a, h)
        }
    };
    function la() {
        this.Ya = -1
    };
    function ma() {
        this.Ya = -1;
        this.Ya = 64;
        this.N = [];
        this.Wd = [];
        this.Jf = [];
        this.zd = [];
        this.zd[0] = 128;
        for (var a = 1; a < this.Ya; ++a)this.zd[a] = 0;
        this.Pd = this.ac = 0;
        this.reset()
    }

    ka(ma, la);
    ma.prototype.reset = function () {
        this.N[0] = 1732584193;
        this.N[1] = 4023233417;
        this.N[2] = 2562383102;
        this.N[3] = 271733878;
        this.N[4] = 3285377520;
        this.Pd = this.ac = 0
    };
    function na(a, b, c) {
        c || (c = 0);
        var d = a.Jf;
        if (q(b))for (var e = 0; 16 > e; e++)d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4; else for (e = 0; 16 > e; e++)d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.N[0];
        c = a.N[1];
        for (var h = a.N[2], k = a.N[3], m = a.N[4], l, e = 0; 80 > e; e++)40 > e ? 20 > e ? (f = k ^ c & (h ^ k), l = 1518500249) : (f = c ^ h ^ k, l = 1859775393) : 60 > e ? (f = c & h | k & (c | h), l = 2400959708) : (f = c ^ h ^ k, l = 3395469782), f = (b <<
            5 | b >>> 27) + f + m + l + d[e] & 4294967295, m = k, k = h, h = (c << 30 | c >>> 2) & 4294967295, c = b, b = f;
        a.N[0] = a.N[0] + b & 4294967295;
        a.N[1] = a.N[1] + c & 4294967295;
        a.N[2] = a.N[2] + h & 4294967295;
        a.N[3] = a.N[3] + k & 4294967295;
        a.N[4] = a.N[4] + m & 4294967295
    }

    ma.prototype.update = function (a, b) {
        if (null != a) {
            p(b) || (b = a.length);
            for (var c = b - this.Ya, d = 0, e = this.Wd, f = this.ac; d < b;) {
                if (0 == f)for (; d <= c;)na(this, a, d), d += this.Ya;
                if (q(a))for (; d < b;) {
                    if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.Ya) {
                        na(this, e);
                        f = 0;
                        break
                    }
                } else for (; d < b;)if (e[f] = a[d], ++f, ++d, f == this.Ya) {
                    na(this, e);
                    f = 0;
                    break
                }
            }
            this.ac = f;
            this.Pd += b
        }
    };
    function t(a, b) {
        for (var c in a)b.call(void 0, a[c], c, a)
    }

    function oa(a, b) {
        var c = {}, d;
        for (d in a)c[d] = b.call(void 0, a[d], d, a);
        return c
    }

    function pa(a, b) {
        for (var c in a)if (!b.call(void 0, a[c], c, a))return !1;
        return !0
    }

    function qa(a) {
        var b = 0, c;
        for (c in a)b++;
        return b
    }

    function ra(a) {
        for (var b in a)return b
    }

    function sa(a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = a[d];
        return b
    }

    function ta(a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = d;
        return b
    }

    function ua(a, b) {
        for (var c in a)if (a[c] == b)return !0;
        return !1
    }

    function va(a, b, c) {
        for (var d in a)if (b.call(c, a[d], d, a))return d
    }

    function wa(a, b) {
        var c = va(a, b, void 0);
        return c && a[c]
    }

    function xa(a) {
        for (var b in a)return !1;
        return !0
    }

    function ya(a) {
        var b = {}, c;
        for (c in a)b[c] = a[c];
        return b
    };
    function za(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))try {
            return eval("(" + a + ")")
        } catch (b) {
        }
        throw Error("Invalid JSON string: " + a);
    }

    function Aa() {
        this.Fd = void 0
    }

    function Ba(a, b, c) {
        switch (typeof b) {
            case "string":
                Ca(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (null == b) {
                    c.push("null");
                    break
                }
                if (da(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++)c.push(e), e = b[f], Ba(a, a.Fd ? a.Fd.call(b, String(f), e) : e, c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (f in b)Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), Ca(f, c),
                    c.push(":"), Ba(a, a.Fd ? a.Fd.call(b, f, e) : e, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }

    var Da = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }, Ea = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function Ca(a, b) {
        b.push('"', a.replace(Ea, function (a) {
            if (a in Da)return Da[a];
            var b = a.charCodeAt(0), e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return Da[a] = e + b.toString(16)
        }), '"')
    };
    var v;
    a:{
        var Fa = n.navigator;
        if (Fa) {
            var Ga = Fa.userAgent;
            if (Ga) {
                v = Ga;
                break a
            }
        }
        v = ""
    }
    ;
    function Ha(a) {
        if (Error.captureStackTrace)Error.captureStackTrace(this, Ha); else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }

    ka(Ha, Error);
    Ha.prototype.name = "CustomError";
    var w = Array.prototype, Ia = w.indexOf ? function (a, b, c) {
        return w.indexOf.call(a, b, c)
    } : function (a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (q(a))return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)if (c in a && a[c] === b)return c;
        return -1
    }, Ja = w.forEach ? function (a, b, c) {
        w.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
    }, Ka = w.filter ? function (a, b, c) {
        return w.filter.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = [], f = 0, h = q(a) ?
            a.split("") : a, k = 0; k < d; k++)if (k in h) {
            var m = h[k];
            b.call(c, m, k, a) && (e[f++] = m)
        }
        return e
    }, La = w.map ? function (a, b, c) {
        return w.map.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = Array(d), f = q(a) ? a.split("") : a, h = 0; h < d; h++)h in f && (e[h] = b.call(c, f[h], h, a));
        return e
    }, Ma = w.reduce ? function (a, b, c, d) {
        for (var e = [], f = 1, h = arguments.length; f < h; f++)e.push(arguments[f]);
        d && (e[0] = r(b, d));
        return w.reduce.apply(a, e)
    } : function (a, b, c, d) {
        var e = c;
        Ja(a, function (c, h) {
            e = b.call(d, e, c, h, a)
        });
        return e
    }, Na = w.every ? function (a, b,
                                c) {
        return w.every.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && !b.call(c, e[f], f, a))return !1;
        return !0
    };

    function Oa(a, b) {
        var c = Pa(a, b, void 0);
        return 0 > c ? null : q(a) ? a.charAt(c) : a[c]
    }

    function Pa(a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c, e[f], f, a))return f;
        return -1
    }

    function Qa(a, b) {
        var c = Ia(a, b);
        0 <= c && w.splice.call(a, c, 1)
    }

    function Ra(a, b, c) {
        return 2 >= arguments.length ? w.slice.call(a, b) : w.slice.call(a, b, c)
    }

    function Sa(a, b) {
        a.sort(b || Ta)
    }

    function Ta(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    var Ua = -1 != v.indexOf("Opera") || -1 != v.indexOf("OPR"), Va = -1 != v.indexOf("Trident") || -1 != v.indexOf("MSIE"), Wa = -1 != v.indexOf("Gecko") && -1 == v.toLowerCase().indexOf("webkit") && !(-1 != v.indexOf("Trident") || -1 != v.indexOf("MSIE")), Xa = -1 != v.toLowerCase().indexOf("webkit");
    (function () {
        var a = "", b;
        if (Ua && n.opera)return a = n.opera.version, ga(a) ? a() : a;
        Wa ? b = /rv\:([^\);]+)(\)|;)/ : Va ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Xa && (b = /WebKit\/(\S+)/);
        b && (a = (a = b.exec(v)) ? a[1] : "");
        return Va && (b = (b = n.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a
    })();
    var Ya = null, Za = null, $a = null;

    function ab(a, b) {
        if (!ea(a))throw Error("encodeByteArray takes an array as a parameter");
        bb();
        for (var c = b ? Za : Ya, d = [], e = 0; e < a.length; e += 3) {
            var f = a[e], h = e + 1 < a.length, k = h ? a[e + 1] : 0, m = e + 2 < a.length, l = m ? a[e + 2] : 0, u = f >> 2, f = (f & 3) << 4 | k >> 4, k = (k & 15) << 2 | l >> 6, l = l & 63;
            m || (l = 64, h || (k = 64));
            d.push(c[u], c[f], c[k], c[l])
        }
        return d.join("")
    }

    function bb() {
        if (!Ya) {
            Ya = {};
            Za = {};
            $a = {};
            for (var a = 0; 65 > a; a++)Ya[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), Za[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a), $a[Za[a]] = a, 62 <= a && ($a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)] = a)
        }
    };
    function cb(a) {
        n.setTimeout(function () {
            throw a;
        }, 0)
    }

    var db;

    function eb() {
        var a = n.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == v.indexOf("Presto") && (a = function () {
            var a = document.createElement("iframe");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow, a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = r(function (a) {
                if (("*" == d || a.origin ==
                    d) && a.data == c)this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && -1 == v.indexOf("Trident") && -1 == v.indexOf("MSIE")) {
            var b = new a, c = {}, d = c;
            b.port1.onmessage = function () {
                if (p(c.next)) {
                    c = c.next;
                    var a = c.Le;
                    c.Le = null;
                    a()
                }
            };
            return function (a) {
                d.next = {Le: a};
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function (a) {
            var b =
                document.createElement("script");
            b.onreadystatechange = function () {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            document.documentElement.appendChild(b)
        } : function (a) {
            n.setTimeout(a, 0)
        }
    };
    function fb(a, b) {
        gb || hb();
        ib || (gb(), ib = !0);
        jb.push(new kb(a, b))
    }

    var gb;

    function hb() {
        if (n.Promise && n.Promise.resolve) {
            var a = n.Promise.resolve();
            gb = function () {
                a.then(lb)
            }
        } else gb = function () {
            var a = lb;
            !ga(n.setImmediate) || n.Window && n.Window.prototype && n.Window.prototype.setImmediate == n.setImmediate ? (db || (db = eb()), db(a)) : n.setImmediate(a)
        }
    }

    var ib = !1, jb = [];
    [].push(function () {
        ib = !1;
        jb = []
    });
    function lb() {
        for (; jb.length;) {
            var a = jb;
            jb = [];
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                try {
                    c.Wf.call(c.scope)
                } catch (d) {
                    cb(d)
                }
            }
        }
        ib = !1
    }

    function kb(a, b) {
        this.Wf = a;
        this.scope = b
    };
    function mb(a, b) {
        this.L = nb;
        this.uf = void 0;
        this.Ca = this.Ha = null;
        this.jd = this.be = !1;
        if (a == ob)pb(this, qb, b); else try {
            var c = this;
            a.call(b, function (a) {
                pb(c, qb, a)
            }, function (a) {
                if (!(a instanceof rb))try {
                    if (a instanceof Error)throw a;
                    throw Error("Promise rejected.");
                } catch (b) {
                }
                pb(c, sb, a)
            })
        } catch (d) {
            pb(this, sb, d)
        }
    }

    var nb = 0, qb = 2, sb = 3;

    function ob() {
    }

    mb.prototype.then = function (a, b, c) {
        return tb(this, ga(a) ? a : null, ga(b) ? b : null, c)
    };
    mb.prototype.then = mb.prototype.then;
    mb.prototype.$goog_Thenable = !0;
    g = mb.prototype;
    g.Ag = function (a, b) {
        return tb(this, null, a, b)
    };
    g.cancel = function (a) {
        this.L == nb && fb(function () {
            var b = new rb(a);
            ub(this, b)
        }, this)
    };
    function ub(a, b) {
        if (a.L == nb)if (a.Ha) {
            var c = a.Ha;
            if (c.Ca) {
                for (var d = 0, e = -1, f = 0, h; h = c.Ca[f]; f++)if (h = h.k)if (d++, h == a && (e = f), 0 <= e && 1 < d)break;
                0 <= e && (c.L == nb && 1 == d ? ub(c, b) : (d = c.Ca.splice(e, 1)[0], vb(c, d, sb, b)))
            }
            a.Ha = null
        } else pb(a, sb, b)
    }

    function wb(a, b) {
        a.Ca && a.Ca.length || a.L != qb && a.L != sb || xb(a);
        a.Ca || (a.Ca = []);
        a.Ca.push(b)
    }

    function tb(a, b, c, d) {
        var e = {k: null, hf: null, kf: null};
        e.k = new mb(function (a, h) {
            e.hf = b ? function (c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (l) {
                    h(l)
                }
            } : a;
            e.kf = c ? function (b) {
                try {
                    var e = c.call(d, b);
                    !p(e) && b instanceof rb ? h(b) : a(e)
                } catch (l) {
                    h(l)
                }
            } : h
        });
        e.k.Ha = a;
        wb(a, e);
        return e.k
    }

    g.Cf = function (a) {
        this.L = nb;
        pb(this, qb, a)
    };
    g.Df = function (a) {
        this.L = nb;
        pb(this, sb, a)
    };
    function pb(a, b, c) {
        if (a.L == nb) {
            if (a == c)b = sb, c = new TypeError("Promise cannot resolve to itself"); else {
                var d;
                if (c)try {
                    d = !!c.$goog_Thenable
                } catch (e) {
                    d = !1
                } else d = !1;
                if (d) {
                    a.L = 1;
                    c.then(a.Cf, a.Df, a);
                    return
                }
                if (ha(c))try {
                    var f = c.then;
                    if (ga(f)) {
                        yb(a, c, f);
                        return
                    }
                } catch (h) {
                    b = sb, c = h
                }
            }
            a.uf = c;
            a.L = b;
            a.Ha = null;
            xb(a);
            b != sb || c instanceof rb || zb(a, c)
        }
    }

    function yb(a, b, c) {
        function d(b) {
            f || (f = !0, a.Df(b))
        }

        function e(b) {
            f || (f = !0, a.Cf(b))
        }

        a.L = 1;
        var f = !1;
        try {
            c.call(b, e, d)
        } catch (h) {
            d(h)
        }
    }

    function xb(a) {
        a.be || (a.be = !0, fb(a.Uf, a))
    }

    g.Uf = function () {
        for (; this.Ca && this.Ca.length;) {
            var a = this.Ca;
            this.Ca = null;
            for (var b = 0; b < a.length; b++)vb(this, a[b], this.L, this.uf)
        }
        this.be = !1
    };
    function vb(a, b, c, d) {
        if (c == qb)b.hf(d); else {
            if (b.k)for (; a && a.jd; a = a.Ha)a.jd = !1;
            b.kf(d)
        }
    }

    function zb(a, b) {
        a.jd = !0;
        fb(function () {
            a.jd && Ab.call(null, b)
        })
    }

    var Ab = cb;

    function rb(a) {
        Ha.call(this, a)
    }

    ka(rb, Ha);
    rb.prototype.name = "cancel";
    function Bb(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function x(a, b) {
        if (Object.prototype.hasOwnProperty.call(a, b))return a[b]
    }

    function Cb(a, b) {
        for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    };
    function y(a, b, c, d) {
        var e;
        d < b ? e = "at least " + b : d > c && (e = 0 === c ? "none" : "no more than " + c);
        if (e)throw Error(a + " failed: Was called with " + d + (1 === d ? " argument." : " arguments.") + " Expects " + e + ".");
    }

    function Db(a, b, c) {
        var d = "";
        switch (b) {
            case 1:
                d = c ? "first" : "First";
                break;
            case 2:
                d = c ? "second" : "Second";
                break;
            case 3:
                d = c ? "third" : "Third";
                break;
            case 4:
                d = c ? "fourth" : "Fourth";
                break;
            default:
                throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");
        }
        return a = a + " failed: " + (d + " argument ")
    }

    function A(a, b, c, d) {
        if ((!d || p(c)) && !ga(c))throw Error(Db(a, b, d) + "must be a valid function.");
    }

    function Eb(a, b, c) {
        if (p(c) && (!ha(c) || null === c))throw Error(Db(a, b, !0) + "must be a valid context object.");
    };
    function Fb(a) {
        var b = [];
        Cb(a, function (a, d) {
            da(d) ? Ja(d, function (d) {
                b.push(encodeURIComponent(a) + "=" + encodeURIComponent(d))
            }) : b.push(encodeURIComponent(a) + "=" + encodeURIComponent(d))
        });
        return b.length ? "&" + b.join("&") : ""
    };
    var Gb = n.Promise || mb;
    mb.prototype["catch"] = mb.prototype.Ag;
    function Hb() {
        var a = this;
        this.reject = this.resolve = null;
        this.sa = new Gb(function (b, c) {
            a.resolve = b;
            a.reject = c
        })
    }

    function Ib(a, b) {
        return function (c, d) {
            c ? a.reject(c) : a.resolve(d);
            ga(b) && (Jb(a.sa), 1 === b.length ? b(c) : b(c, d))
        }
    }

    function Jb(a) {
        a.then(void 0, aa)
    };
    function Kb(a, b) {
        if (!a)throw Lb(b);
    }

    function Lb(a) {
        return Error("Firebase Database (" + firebase.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + a)
    };
    function Mb(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            55296 <= e && 56319 >= e && (e -= 55296, d++, Kb(d < a.length, "Surrogate pair missing trail surrogate."), e = 65536 + (e << 10) + (a.charCodeAt(d) - 56320));
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (65536 > e ? b[c++] = e >> 12 | 224 : (b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128), b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    }

    function Nb(a) {
        for (var b = 0, c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b++ : 2048 > d ? b += 2 : 55296 <= d && 56319 >= d ? (b += 4, c++) : b += 3
        }
        return b
    };
    function Ob(a) {
        return "undefined" !== typeof JSON && p(JSON.parse) ? JSON.parse(a) : za(a)
    }

    function B(a) {
        if ("undefined" !== typeof JSON && p(JSON.stringify))a = JSON.stringify(a); else {
            var b = [];
            Ba(new Aa, a, b);
            a = b.join("")
        }
        return a
    };
    function Pb(a, b) {
        this.committed = a;
        this.snapshot = b
    };
    function Qb() {
        return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : "")
    };
    function Rb(a) {
        this.te = a;
        this.Bd = [];
        this.Rb = 0;
        this.Yd = -1;
        this.Gb = null
    }

    function Sb(a, b, c) {
        a.Yd = b;
        a.Gb = c;
        a.Yd < a.Rb && (a.Gb(), a.Gb = null)
    }

    function Tb(a, b, c) {
        for (a.Bd[b] = c; a.Bd[a.Rb];) {
            var d = a.Bd[a.Rb];
            delete a.Bd[a.Rb];
            for (var e = 0; e < d.length; ++e)if (d[e]) {
                var f = a;
                Ub(function () {
                    f.te(d[e])
                })
            }
            if (a.Rb === a.Yd) {
                a.Gb && (clearTimeout(a.Gb), a.Gb(), a.Gb = null);
                break
            }
            a.Rb++
        }
    };
    function Vb() {
        this.qc = {}
    }

    Vb.prototype.set = function (a, b) {
        null == b ? delete this.qc[a] : this.qc[a] = b
    };
    Vb.prototype.get = function (a) {
        return Bb(this.qc, a) ? this.qc[a] : null
    };
    Vb.prototype.remove = function (a) {
        delete this.qc[a]
    };
    Vb.prototype.cf = !0;
    function Wb(a) {
        this.vc = a;
        this.Cd = "firebase:"
    }

    g = Wb.prototype;
    g.set = function (a, b) {
        null == b ? this.vc.removeItem(this.Cd + a) : this.vc.setItem(this.Cd + a, B(b))
    };
    g.get = function (a) {
        a = this.vc.getItem(this.Cd + a);
        return null == a ? null : Ob(a)
    };
    g.remove = function (a) {
        this.vc.removeItem(this.Cd + a)
    };
    g.cf = !1;
    g.toString = function () {
        return this.vc.toString()
    };
    function Xb(a) {
        try {
            if ("undefined" !== typeof window && "undefined" !== typeof window[a]) {
                var b = window[a];
                b.setItem("firebase:sentinel", "cache");
                b.removeItem("firebase:sentinel");
                return new Wb(b)
            }
        } catch (c) {
        }
        return new Vb
    }

    var Yb = Xb("localStorage"), Zb = Xb("sessionStorage");

    function $b(a, b, c) {
        this.type = ac;
        this.source = a;
        this.path = b;
        this.Ja = c
    }

    $b.prototype.Nc = function (a) {
        return this.path.e() ? new $b(this.source, C, this.Ja.R(a)) : new $b(this.source, D(this.path), this.Ja)
    };
    $b.prototype.toString = function () {
        return "Operation(" + this.path + ": " + this.source.toString() + " overwrite: " + this.Ja.toString() + ")"
    };
    function bc(a, b) {
        this.type = cc;
        this.source = a;
        this.path = b
    }

    bc.prototype.Nc = function () {
        return this.path.e() ? new bc(this.source, C) : new bc(this.source, D(this.path))
    };
    bc.prototype.toString = function () {
        return "Operation(" + this.path + ": " + this.source.toString() + " listen_complete)"
    };
    function dc(a) {
        this.He = a
    }

    dc.prototype.getToken = function (a) {
        return this.He.INTERNAL.getToken(a).then(null, function (a) {
            return a && "auth/token-not-initialized" === a.code ? (E("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(a)
        })
    };
    function ec(a, b) {
        a.He.INTERNAL.addAuthTokenListener(b)
    };
    function fc() {
        this.Jd = F
    }

    fc.prototype.j = function (a) {
        return this.Jd.Q(a)
    };
    fc.prototype.toString = function () {
        return this.Jd.toString()
    };
    function gc(a, b, c, d, e) {
        this.host = a.toLowerCase();
        this.domain = this.host.substr(this.host.indexOf(".") + 1);
        this.Sc = b;
        this.pe = c;
        this.Cg = d;
        this.nf = e || "";
        this.bb = Yb.get("host:" + a) || this.host
    }

    function hc(a, b) {
        b !== a.bb && (a.bb = b, "s-" === a.bb.substr(0, 2) && Yb.set("host:" + a.host, a.bb))
    }

    function ic(a, b, c) {
        H("string" === typeof b, "typeof type must == string");
        H("object" === typeof c, "typeof params must == object");
        if ("websocket" === b)b = (a.Sc ? "wss://" : "ws://") + a.bb + "/.ws?"; else if ("long_polling" === b)b = (a.Sc ? "https://" : "http://") + a.bb + "/.lp?"; else throw Error("Unknown connection type: " + b);
        a.host !== a.bb && (c.ns = a.pe);
        var d = [];
        t(c, function (a, b) {
            d.push(b + "=" + a)
        });
        return b + d.join("&")
    }

    gc.prototype.toString = function () {
        var a = (this.Sc ? "https://" : "http://") + this.host;
        this.nf && (a += "<" + this.nf + ">");
        return a
    };
    function jc() {
        this.uc = {}
    }

    function kc(a, b, c) {
        p(c) || (c = 1);
        Bb(a.uc, b) || (a.uc[b] = 0);
        a.uc[b] += c
    }

    jc.prototype.get = function () {
        return ya(this.uc)
    };
    function lc(a) {
        this.Nf = a;
        this.rd = null
    }

    lc.prototype.get = function () {
        var a = this.Nf.get(), b = ya(a);
        if (this.rd)for (var c in this.rd)b[c] -= this.rd[c];
        this.rd = a;
        return b
    };
    function mc() {
        this.wb = []
    }

    function nc(a, b) {
        for (var c = null, d = 0; d < b.length; d++) {
            var e = b[d], f = e.Zb();
            null === c || f.$(c.Zb()) || (a.wb.push(c), c = null);
            null === c && (c = new oc(f));
            c.add(e)
        }
        c && a.wb.push(c)
    }

    function pc(a, b, c) {
        nc(a, c);
        qc(a, function (a) {
            return a.$(b)
        })
    }

    function rc(a, b, c) {
        nc(a, c);
        qc(a, function (a) {
            return a.contains(b) || b.contains(a)
        })
    }

    function qc(a, b) {
        for (var c = !0, d = 0; d < a.wb.length; d++) {
            var e = a.wb[d];
            if (e)if (e = e.Zb(), b(e)) {
                for (var e = a.wb[d], f = 0; f < e.hd.length; f++) {
                    var h = e.hd[f];
                    if (null !== h) {
                        e.hd[f] = null;
                        var k = h.Ub();
                        sc && E("event: " + h.toString());
                        Ub(k)
                    }
                }
                a.wb[d] = null
            } else c = !1
        }
        c && (a.wb = [])
    }

    function oc(a) {
        this.ra = a;
        this.hd = []
    }

    oc.prototype.add = function (a) {
        this.hd.push(a)
    };
    oc.prototype.Zb = function () {
        return this.ra
    };
    function tc(a, b, c, d) {
        this.ae = b;
        this.Md = c;
        this.Dd = d;
        this.gd = a
    }

    tc.prototype.Zb = function () {
        var a = this.Md.xb();
        return "value" === this.gd ? a.path : a.getParent().path
    };
    tc.prototype.ge = function () {
        return this.gd
    };
    tc.prototype.Ub = function () {
        return this.ae.Ub(this)
    };
    tc.prototype.toString = function () {
        return this.Zb().toString() + ":" + this.gd + ":" + B(this.Md.Ue())
    };
    function uc(a, b, c) {
        this.ae = a;
        this.error = b;
        this.path = c
    }

    uc.prototype.Zb = function () {
        return this.path
    };
    uc.prototype.ge = function () {
        return "cancel"
    };
    uc.prototype.Ub = function () {
        return this.ae.Ub(this)
    };
    uc.prototype.toString = function () {
        return this.path.toString() + ":cancel"
    };
    function vc() {
    }

    vc.prototype.Xe = function () {
        return null
    };
    vc.prototype.fe = function () {
        return null
    };
    var wc = new vc;

    function xc(a, b, c) {
        this.Gf = a;
        this.Na = b;
        this.yd = c
    }

    xc.prototype.Xe = function (a) {
        var b = this.Na.O;
        if (yc(b, a))return b.j().R(a);
        b = null != this.yd ? new zc(this.yd, !0, !1) : this.Na.w();
        return this.Gf.rc(a, b)
    };
    xc.prototype.fe = function (a, b, c) {
        var d = null != this.yd ? this.yd : Ac(this.Na);
        a = this.Gf.Xd(d, b, 1, c, a);
        return 0 === a.length ? null : a[0]
    };
    function I(a, b, c, d) {
        this.type = a;
        this.Ma = b;
        this.Za = c;
        this.qe = d;
        this.Dd = void 0
    }

    function Bc(a) {
        return new I(Cc, a)
    }

    var Cc = "value";

    function zc(a, b, c) {
        this.A = a;
        this.ea = b;
        this.Tb = c
    }

    function Dc(a) {
        return a.ea
    }

    function Ec(a) {
        return a.Tb
    }

    function Fc(a, b) {
        return b.e() ? a.ea && !a.Tb : yc(a, J(b))
    }

    function yc(a, b) {
        return a.ea && !a.Tb || a.A.Fa(b)
    }

    zc.prototype.j = function () {
        return this.A
    };
    function Gc(a, b) {
        return Hc(a.name, b.name)
    }

    function Ic(a, b) {
        return Hc(a, b)
    };
    function K(a, b) {
        this.name = a;
        this.S = b
    }

    function Jc(a, b) {
        return new K(a, b)
    };
    function Kc(a, b) {
        return a && "object" === typeof a ? (H(".sv" in a, "Unexpected leaf node or priority contents"), b[a[".sv"]]) : a
    }

    function Lc(a, b) {
        var c = new Mc;
        Nc(a, new L(""), function (a, e) {
            Oc(c, a, Pc(e, b))
        });
        return c
    }

    function Pc(a, b) {
        var c = a.C().H(), c = Kc(c, b), d;
        if (a.J()) {
            var e = Kc(a.Ea(), b);
            return e !== a.Ea() || c !== a.C().H() ? new Qc(e, M(c)) : a
        }
        d = a;
        c !== a.C().H() && (d = d.ga(new Qc(c)));
        a.P(N, function (a, c) {
            var e = Pc(c, b);
            e !== c && (d = d.U(a, e))
        });
        return d
    };
    var Rc = function () {
        var a = 1;
        return function () {
            return a++
        }
    }(), H = Kb, Sc = Lb;

    function Tc(a) {
        try {
            var b;
            bb();
            for (var c = $a, d = [], e = 0; e < a.length;) {
                var f = c[a.charAt(e++)], h = e < a.length ? c[a.charAt(e)] : 0;
                ++e;
                var k = e < a.length ? c[a.charAt(e)] : 64;
                ++e;
                var m = e < a.length ? c[a.charAt(e)] : 64;
                ++e;
                if (null == f || null == h || null == k || null == m)throw Error();
                d.push(f << 2 | h >> 4);
                64 != k && (d.push(h << 4 & 240 | k >> 2), 64 != m && d.push(k << 6 & 192 | m))
            }
            if (8192 > d.length)b = String.fromCharCode.apply(null, d); else {
                a = "";
                for (c = 0; c < d.length; c += 8192)a += String.fromCharCode.apply(null, Ra(d, c, c + 8192));
                b = a
            }
            return b
        } catch (l) {
            E("base64Decode failed: ",
                l)
        }
        return null
    }

    function Uc(a) {
        var b = Mb(a);
        a = new ma;
        a.update(b);
        var b = [], c = 8 * a.Pd;
        56 > a.ac ? a.update(a.zd, 56 - a.ac) : a.update(a.zd, a.Ya - (a.ac - 56));
        for (var d = a.Ya - 1; 56 <= d; d--)a.Wd[d] = c & 255, c /= 256;
        na(a, a.Wd);
        for (d = c = 0; 5 > d; d++)for (var e = 24; 0 <= e; e -= 8)b[c] = a.N[d] >> e & 255, ++c;
        return ab(b)
    }

    function Vc(a) {
        for (var b = "", c = 0; c < arguments.length; c++)b = ea(arguments[c]) ? b + Vc.apply(null, arguments[c]) : "object" === typeof arguments[c] ? b + B(arguments[c]) : b + arguments[c], b += " ";
        return b
    }

    var sc = null, Wc = !0;

    function Xc(a, b) {
        Kb(!b || !0 === a || !1 === a, "Can't turn on custom loggers persistently.");
        !0 === a ? ("undefined" !== typeof console && ("function" === typeof console.log ? sc = r(console.log, console) : "object" === typeof console.log && (sc = function (a) {
            console.log(a)
        })), b && Zb.set("logging_enabled", !0)) : ga(a) ? sc = a : (sc = null, Zb.remove("logging_enabled"))
    }

    function E(a) {
        !0 === Wc && (Wc = !1, null === sc && !0 === Zb.get("logging_enabled") && Xc(!0));
        if (sc) {
            var b = Vc.apply(null, arguments);
            sc(b)
        }
    }

    function Yc(a) {
        return function () {
            E(a, arguments)
        }
    }

    function Zc(a) {
        if ("undefined" !== typeof console) {
            var b = "FIREBASE INTERNAL ERROR: " + Vc.apply(null, arguments);
            "undefined" !== typeof console.error ? console.error(b) : console.log(b)
        }
    }

    function $c(a) {
        var b = Vc.apply(null, arguments);
        throw Error("FIREBASE FATAL ERROR: " + b);
    }

    function O(a) {
        if ("undefined" !== typeof console) {
            var b = "FIREBASE WARNING: " + Vc.apply(null, arguments);
            "undefined" !== typeof console.warn ? console.warn(b) : console.log(b)
        }
    }

    function ad(a) {
        var b, c, d, e, f, h = a;
        f = c = a = b = "";
        d = !0;
        e = "https";
        if (q(h)) {
            var k = h.indexOf("//");
            0 <= k && (e = h.substring(0, k - 1), h = h.substring(k + 2));
            k = h.indexOf("/");
            -1 === k && (k = h.length);
            b = h.substring(0, k);
            f = "";
            h = h.substring(k).split("/");
            for (k = 0; k < h.length; k++)if (0 < h[k].length) {
                var m = h[k];
                try {
                    m = decodeURIComponent(m.replace(/\+/g, " "))
                } catch (l) {
                }
                f += "/" + m
            }
            h = b.split(".");
            3 === h.length ? (a = h[1], c = h[0].toLowerCase()) : 2 === h.length && (a = h[0]);
            k = b.indexOf(":");
            0 <= k && (d = "https" === e || "wss" === e)
        }
        "firebase" === a && $c(b + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
        c && "undefined" != c || $c("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");
        d || "undefined" !== typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && O("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
        return {kc: new gc(b, d, c, "ws" === e || "wss" === e), path: new L(f)}
    }

    function bd(a) {
        return fa(a) && (a != a || a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY)
    }

    function cd(a) {
        if ("complete" === document.readyState)a(); else {
            var b = !1, c = function () {
                document.body ? b || (b = !0, a()) : setTimeout(c, Math.floor(10))
            };
            document.addEventListener ? (document.addEventListener("DOMContentLoaded", c, !1), window.addEventListener("load", c, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function () {
                "complete" === document.readyState && c()
            }), window.attachEvent("onload", c))
        }
    }

    function Hc(a, b) {
        if (a === b)return 0;
        if ("[MIN_NAME]" === a || "[MAX_NAME]" === b)return -1;
        if ("[MIN_NAME]" === b || "[MAX_NAME]" === a)return 1;
        var c = dd(a), d = dd(b);
        return null !== c ? null !== d ? 0 == c - d ? a.length - b.length : c - d : -1 : null !== d ? 1 : a < b ? -1 : 1
    }

    function ed(a, b) {
        if (b && a in b)return b[a];
        throw Error("Missing required key (" + a + ") in object: " + B(b));
    }

    function fd(a) {
        if ("object" !== typeof a || null === a)return B(a);
        var b = [], c;
        for (c in a)b.push(c);
        b.sort();
        c = "{";
        for (var d = 0; d < b.length; d++)0 !== d && (c += ","), c += B(b[d]), c += ":", c += fd(a[b[d]]);
        return c + "}"
    }

    function gd(a, b) {
        if (a.length <= b)return [a];
        for (var c = [], d = 0; d < a.length; d += b)d + b > a ? c.push(a.substring(d, a.length)) : c.push(a.substring(d, d + b));
        return c
    }

    function hd(a, b) {
        if (da(a))for (var c = 0; c < a.length; ++c)b(c, a[c]); else t(a, b)
    }

    function id(a) {
        H(!bd(a), "Invalid JSON number");
        var b, c, d, e;
        0 === a ? (d = c = 0, b = -Infinity === 1 / a ? 1 : 0) : (b = 0 > a, a = Math.abs(a), a >= Math.pow(2, -1022) ? (d = Math.min(Math.floor(Math.log(a) / Math.LN2), 1023), c = d + 1023, d = Math.round(a * Math.pow(2, 52 - d) - Math.pow(2, 52))) : (c = 0, d = Math.round(a / Math.pow(2, -1074))));
        e = [];
        for (a = 52; a; --a)e.push(d % 2 ? 1 : 0), d = Math.floor(d / 2);
        for (a = 11; a; --a)e.push(c % 2 ? 1 : 0), c = Math.floor(c / 2);
        e.push(b ? 1 : 0);
        e.reverse();
        b = e.join("");
        c = "";
        for (a = 0; 64 > a; a += 8)d = parseInt(b.substr(a, 8), 2).toString(16), 1 === d.length &&
        (d = "0" + d), c += d;
        return c.toLowerCase()
    }

    var jd = /^-?\d{1,10}$/;

    function dd(a) {
        return jd.test(a) && (a = Number(a), -2147483648 <= a && 2147483647 >= a) ? a : null
    }

    function Ub(a) {
        try {
            a()
        } catch (b) {
            setTimeout(function () {
                O("Exception was thrown by user callback.", b.stack || "");
                throw b;
            }, Math.floor(0))
        }
    }

    function kd(a, b, c) {
        Object.defineProperty(a, b, {get: c})
    }

    function ld(a, b) {
        var c = setTimeout(a, b);
        "object" === typeof c && c.unref && c.unref();
        return c
    };
    function md(a) {
        var b = {}, c = {}, d = {}, e = "";
        try {
            var f = a.split("."), b = Ob(Tc(f[0]) || ""), c = Ob(Tc(f[1]) || ""), e = f[2], d = c.d || {};
            delete c.d
        } catch (h) {
        }
        return {Fg: b, Me: c, data: d, xg: e}
    }

    function nd(a) {
        a = md(a);
        var b = a.Me;
        return !!a.xg && !!b && "object" === typeof b && b.hasOwnProperty("iat")
    }

    function od(a) {
        a = md(a).Me;
        return "object" === typeof a && !0 === x(a, "admin")
    };
    function pd(a, b, c) {
        this.f = Yc("p:rest:");
        this.M = a;
        this.Hb = b;
        this.Vd = c;
        this.aa = {}
    }

    function qd(a, b) {
        if (p(b))return "tag$" + b;
        H(rd(a.n), "should have a tag if it's not a default query.");
        return a.path.toString()
    }

    g = pd.prototype;
    g.df = function (a, b, c, d) {
        var e = a.path.toString();
        this.f("Listen called for " + e + " " + a.ka());
        var f = qd(a, c), h = {};
        this.aa[f] = h;
        a = sd(a.n);
        var k = this;
        td(this, e + ".json", a, function (a, b) {
            var u = b;
            404 === a && (a = u = null);
            null === a && k.Hb(e, u, !1, c);
            x(k.aa, f) === h && d(a ? 401 == a ? "permission_denied" : "rest_error:" + a : "ok", null)
        })
    };
    g.Ef = function (a, b) {
        var c = qd(a, b);
        delete this.aa[c]
    };
    g.qf = function () {
    };
    g.re = function () {
    };
    g.gf = function () {
    };
    g.xd = function () {
    };
    g.put = function () {
    };
    g.ef = function () {
    };
    g.ye = function () {
    };
    function td(a, b, c, d) {
        c = c || {};
        c.format = "export";
        a.Vd.getToken(!1).then(function (e) {
            (e = e && e.accessToken) && (c.auth = e);
            var f = (a.M.Sc ? "https://" : "http://") + a.M.host + b + "?" + Fb(c);
            a.f("Sending REST request for " + f);
            var h = new XMLHttpRequest;
            h.onreadystatechange = function () {
                if (d && 4 === h.readyState) {
                    a.f("REST Response for " + f + " received. status:", h.status, "response:", h.responseText);
                    var b = null;
                    if (200 <= h.status && 300 > h.status) {
                        try {
                            b = Ob(h.responseText)
                        } catch (c) {
                            O("Failed to parse JSON response for " + f + ": " + h.responseText)
                        }
                        d(null,
                            b)
                    } else 401 !== h.status && 404 !== h.status && O("Got unsuccessful REST response for " + f + " Status: " + h.status), d(h.status);
                    d = null
                }
            };
            h.open("GET", f, !0);
            h.send()
        })
    };
    function vd(a, b, c) {
        this.type = wd;
        this.source = a;
        this.path = b;
        this.children = c
    }

    vd.prototype.Nc = function (a) {
        if (this.path.e())return a = this.children.subtree(new L(a)), a.e() ? null : a.value ? new $b(this.source, C, a.value) : new vd(this.source, C, a);
        H(J(this.path) === a, "Can't get a merge for a child not on the path of the operation");
        return new vd(this.source, D(this.path), this.children)
    };
    vd.prototype.toString = function () {
        return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
    };
    function xd(a, b) {
        this.zf = {};
        this.Vc = new lc(a);
        this.wa = b;
        var c = 1E4 + 2E4 * Math.random();
        ld(r(this.rf, this), Math.floor(c))
    }

    xd.prototype.rf = function () {
        var a = this.Vc.get(), b = {}, c = !1, d;
        for (d in a)0 < a[d] && Bb(this.zf, d) && (b[d] = a[d], c = !0);
        c && this.wa.ye(b);
        ld(r(this.rf, this), Math.floor(6E5 * Math.random()))
    };
    var yd = {}, zd = {};

    function Ad(a) {
        a = a.toString();
        yd[a] || (yd[a] = new jc);
        return yd[a]
    }

    function Bd(a, b) {
        var c = a.toString();
        zd[c] || (zd[c] = b());
        return zd[c]
    };
    var Cd = null;
    "undefined" !== typeof MozWebSocket ? Cd = MozWebSocket : "undefined" !== typeof WebSocket && (Cd = WebSocket);
    function Dd(a, b, c, d) {
        this.Zd = a;
        this.f = Yc(this.Zd);
        this.frames = this.Ac = null;
        this.qb = this.rb = this.Fe = 0;
        this.Xa = Ad(b);
        a = {v: "5"};
        "undefined" !== typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com") && (a.r = "f");
        c && (a.s = c);
        d && (a.ls = d);
        this.Ne = ic(b, "websocket", a)
    }

    var Ed;
    Dd.prototype.open = function (a, b) {
        this.kb = b;
        this.hg = a;
        this.f("Websocket connecting to " + this.Ne);
        this.xc = !1;
        Yb.set("previous_websocket_failure", !0);
        try {
            this.La = new Cd(this.Ne)
        } catch (c) {
            this.f("Error instantiating WebSocket.");
            var d = c.message || c.data;
            d && this.f(d);
            this.fb();
            return
        }
        var e = this;
        this.La.onopen = function () {
            e.f("Websocket connected.");
            e.xc = !0
        };
        this.La.onclose = function () {
            e.f("Websocket connection was disconnected.");
            e.La = null;
            e.fb()
        };
        this.La.onmessage = function (a) {
            if (null !== e.La)if (a = a.data, e.qb +=
                    a.length, kc(e.Xa, "bytes_received", a.length), Fd(e), null !== e.frames)Gd(e, a); else {
                a:{
                    H(null === e.frames, "We already have a frame buffer");
                    if (6 >= a.length) {
                        var b = Number(a);
                        if (!isNaN(b)) {
                            e.Fe = b;
                            e.frames = [];
                            a = null;
                            break a
                        }
                    }
                    e.Fe = 1;
                    e.frames = []
                }
                null !== a && Gd(e, a)
            }
        };
        this.La.onerror = function (a) {
            e.f("WebSocket error.  Closing connection.");
            (a = a.message || a.data) && e.f(a);
            e.fb()
        }
    };
    Dd.prototype.start = function () {
    };
    Dd.isAvailable = function () {
        var a = !1;
        if ("undefined" !== typeof navigator && navigator.userAgent) {
            var b = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
            b && 1 < b.length && 4.4 > parseFloat(b[1]) && (a = !0)
        }
        return !a && null !== Cd && !Ed
    };
    Dd.responsesRequiredToBeHealthy = 2;
    Dd.healthyTimeout = 3E4;
    g = Dd.prototype;
    g.sd = function () {
        Yb.remove("previous_websocket_failure")
    };
    function Gd(a, b) {
        a.frames.push(b);
        if (a.frames.length == a.Fe) {
            var c = a.frames.join("");
            a.frames = null;
            c = Ob(c);
            a.hg(c)
        }
    }

    g.send = function (a) {
        Fd(this);
        a = B(a);
        this.rb += a.length;
        kc(this.Xa, "bytes_sent", a.length);
        a = gd(a, 16384);
        1 < a.length && Hd(this, String(a.length));
        for (var b = 0; b < a.length; b++)Hd(this, a[b])
    };
    g.Tc = function () {
        this.Bb = !0;
        this.Ac && (clearInterval(this.Ac), this.Ac = null);
        this.La && (this.La.close(), this.La = null)
    };
    g.fb = function () {
        this.Bb || (this.f("WebSocket is closing itself"), this.Tc(), this.kb && (this.kb(this.xc), this.kb = null))
    };
    g.close = function () {
        this.Bb || (this.f("WebSocket is being closed"), this.Tc())
    };
    function Fd(a) {
        clearInterval(a.Ac);
        a.Ac = setInterval(function () {
            a.La && Hd(a, "0");
            Fd(a)
        }, Math.floor(45E3))
    }

    function Hd(a, b) {
        try {
            a.La.send(b)
        } catch (c) {
            a.f("Exception thrown from WebSocket.send():", c.message || c.data, "Closing connection."), setTimeout(r(a.fb, a), 0)
        }
    };
    function Id() {
        this.hb = {}
    }

    function Jd(a, b) {
        var c = b.type, d = b.Za;
        H("child_added" == c || "child_changed" == c || "child_removed" == c, "Only child changes supported for tracking");
        H(".priority" !== d, "Only non-priority child changes can be tracked.");
        var e = x(a.hb, d);
        if (e) {
            var f = e.type;
            if ("child_added" == c && "child_removed" == f)a.hb[d] = new I("child_changed", b.Ma, d, e.Ma); else if ("child_removed" == c && "child_added" == f)delete a.hb[d]; else if ("child_removed" == c && "child_changed" == f)a.hb[d] = new I("child_removed", e.qe, d); else if ("child_changed" == c &&
                "child_added" == f)a.hb[d] = new I("child_added", b.Ma, d); else if ("child_changed" == c && "child_changed" == f)a.hb[d] = new I("child_changed", b.Ma, d, e.qe); else throw Sc("Illegal combination of changes: " + b + " occurred after " + e);
        } else a.hb[d] = b
    };
    function Kd(a) {
        this.W = a;
        this.g = a.n.g
    }

    function Ld(a, b, c, d) {
        var e = [], f = [];
        Ja(b, function (b) {
            "child_changed" === b.type && a.g.nd(b.qe, b.Ma) && f.push(new I("child_moved", b.Ma, b.Za))
        });
        Md(a, e, "child_removed", b, d, c);
        Md(a, e, "child_added", b, d, c);
        Md(a, e, "child_moved", f, d, c);
        Md(a, e, "child_changed", b, d, c);
        Md(a, e, Cc, b, d, c);
        return e
    }

    function Md(a, b, c, d, e, f) {
        d = Ka(d, function (a) {
            return a.type === c
        });
        Sa(d, r(a.Of, a));
        Ja(d, function (c) {
            var d = Nd(a, c, f);
            Ja(e, function (e) {
                e.tf(c.type) && b.push(e.createEvent(d, a.W))
            })
        })
    }

    function Nd(a, b, c) {
        "value" !== b.type && "child_removed" !== b.type && (b.Dd = c.Ze(b.Za, b.Ma, a.g));
        return b
    }

    Kd.prototype.Of = function (a, b) {
        if (null == a.Za || null == b.Za)throw Sc("Should only compare child_ events.");
        return this.g.compare(new K(a.Za, a.Ma), new K(b.Za, b.Ma))
    };
    function Od(a, b) {
        this.Sd = a;
        this.Mf = b
    }

    function Pd(a) {
        this.V = a
    }

    Pd.prototype.gb = function (a, b, c, d) {
        var e = new Id, f;
        if (b.type === ac)b.source.ee ? c = Qd(this, a, b.path, b.Ja, c, d, e) : (H(b.source.We, "Unknown source."), f = b.source.Ee || Ec(a.w()) && !b.path.e(), c = Rd(this, a, b.path, b.Ja, c, d, f, e)); else if (b.type === wd)b.source.ee ? c = Sd(this, a, b.path, b.children, c, d, e) : (H(b.source.We, "Unknown source."), f = b.source.Ee || Ec(a.w()), c = Td(this, a, b.path, b.children, c, d, f, e)); else if (b.type === Ud)if (b.Id)if (b = b.path, null != c.mc(b))c = a; else {
            f = new xc(c, a, d);
            d = a.O.j();
            if (b.e() || ".priority" === J(b))Dc(a.w()) ?
                b = c.Ba(Ac(a)) : (b = a.w().j(), H(b instanceof P, "serverChildren would be complete if leaf node"), b = c.sc(b)), b = this.V.za(d, b, e); else {
                var h = J(b), k = c.rc(h, a.w());
                null == k && yc(a.w(), h) && (k = d.R(h));
                b = null != k ? this.V.F(d, h, k, D(b), f, e) : a.O.j().Fa(h) ? this.V.F(d, h, F, D(b), f, e) : d;
                b.e() && Dc(a.w()) && (d = c.Ba(Ac(a)), d.J() && (b = this.V.za(b, d, e)))
            }
            d = Dc(a.w()) || null != c.mc(C);
            c = Vd(a, b, d, this.V.Qa())
        } else c = Wd(this, a, b.path, b.Pb, c, d, e); else if (b.type === cc)d = b.path, b = a.w(), f = b.j(), h = b.ea || d.e(), c = Xd(this, new Yd(a.O, new zc(f,
            h, b.Tb)), d, c, wc, e); else throw Sc("Unknown operation type: " + b.type);
        e = sa(e.hb);
        d = c;
        b = d.O;
        b.ea && (f = b.j().J() || b.j().e(), h = Zd(a), (0 < e.length || !a.O.ea || f && !b.j().$(h) || !b.j().C().$(h.C())) && e.push(Bc(Zd(d))));
        return new Od(c, e)
    };
    function Xd(a, b, c, d, e, f) {
        var h = b.O;
        if (null != d.mc(c))return b;
        var k;
        if (c.e())H(Dc(b.w()), "If change path is empty, we must have complete server data"), Ec(b.w()) ? (e = Ac(b), d = d.sc(e instanceof P ? e : F)) : d = d.Ba(Ac(b)), f = a.V.za(b.O.j(), d, f); else {
            var m = J(c);
            if (".priority" == m)H(1 == $d(c), "Can't have a priority with additional path components"), f = h.j(), k = b.w().j(), d = d.$c(c, f, k), f = null != d ? a.V.ga(f, d) : h.j(); else {
                var l = D(c);
                yc(h, m) ? (k = b.w().j(), d = d.$c(c, h.j(), k), d = null != d ? h.j().R(m).F(l, d) : h.j().R(m)) : d = d.rc(m,
                    b.w());
                f = null != d ? a.V.F(h.j(), m, d, l, e, f) : h.j()
            }
        }
        return Vd(b, f, h.ea || c.e(), a.V.Qa())
    }

    function Rd(a, b, c, d, e, f, h, k) {
        var m = b.w();
        h = h ? a.V : a.V.Vb();
        if (c.e())d = h.za(m.j(), d, null); else if (h.Qa() && !m.Tb)d = m.j().F(c, d), d = h.za(m.j(), d, null); else {
            var l = J(c);
            if (!Fc(m, c) && 1 < $d(c))return b;
            var u = D(c);
            d = m.j().R(l).F(u, d);
            d = ".priority" == l ? h.ga(m.j(), d) : h.F(m.j(), l, d, u, wc, null)
        }
        m = m.ea || c.e();
        b = new Yd(b.O, new zc(d, m, h.Qa()));
        return Xd(a, b, c, e, new xc(e, b, f), k)
    }

    function Qd(a, b, c, d, e, f, h) {
        var k = b.O;
        e = new xc(e, b, f);
        if (c.e())h = a.V.za(b.O.j(), d, h), a = Vd(b, h, !0, a.V.Qa()); else if (f = J(c), ".priority" === f)h = a.V.ga(b.O.j(), d), a = Vd(b, h, k.ea, k.Tb); else {
            c = D(c);
            var m = k.j().R(f);
            if (!c.e()) {
                var l = e.Xe(f);
                d = null != l ? ".priority" === ae(c) && l.Q(c.parent()).e() ? l : l.F(c, d) : F
            }
            m.$(d) ? a = b : (h = a.V.F(k.j(), f, d, c, e, h), a = Vd(b, h, k.ea, a.V.Qa()))
        }
        return a
    }

    function Sd(a, b, c, d, e, f, h) {
        var k = b;
        be(d, function (d, l) {
            var u = c.k(d);
            yc(b.O, J(u)) && (k = Qd(a, k, u, l, e, f, h))
        });
        be(d, function (d, l) {
            var u = c.k(d);
            yc(b.O, J(u)) || (k = Qd(a, k, u, l, e, f, h))
        });
        return k
    }

    function ce(a, b) {
        be(b, function (b, d) {
            a = a.F(b, d)
        });
        return a
    }

    function Td(a, b, c, d, e, f, h, k) {
        if (b.w().j().e() && !Dc(b.w()))return b;
        var m = b;
        c = c.e() ? d : de(Q, c, d);
        var l = b.w().j();
        c.children.ia(function (c, d) {
            if (l.Fa(c)) {
                var G = b.w().j().R(c), G = ce(G, d);
                m = Rd(a, m, new L(c), G, e, f, h, k)
            }
        });
        c.children.ia(function (c, d) {
            var G = !yc(b.w(), c) && null == d.value;
            l.Fa(c) || G || (G = b.w().j().R(c), G = ce(G, d), m = Rd(a, m, new L(c), G, e, f, h, k))
        });
        return m
    }

    function Wd(a, b, c, d, e, f, h) {
        if (null != e.mc(c))return b;
        var k = Ec(b.w()), m = b.w();
        if (null != d.value) {
            if (c.e() && m.ea || Fc(m, c))return Rd(a, b, c, m.j().Q(c), e, f, k, h);
            if (c.e()) {
                var l = Q;
                m.j().P(ee, function (a, b) {
                    l = l.set(new L(a), b)
                });
                return Td(a, b, c, l, e, f, k, h)
            }
            return b
        }
        l = Q;
        be(d, function (a) {
            var b = c.k(a);
            Fc(m, b) && (l = l.set(a, m.j().Q(b)))
        });
        return Td(a, b, c, l, e, f, k, h)
    };
    function fe(a) {
        this.g = a
    }

    g = fe.prototype;
    g.F = function (a, b, c, d, e, f) {
        H(a.zc(this.g), "A node must be indexed if only a child is updated");
        e = a.R(b);
        if (e.Q(d).$(c.Q(d)) && e.e() == c.e())return a;
        null != f && (c.e() ? a.Fa(b) ? Jd(f, new I("child_removed", e, b)) : H(a.J(), "A child remove without an old child only makes sense on a leaf node") : e.e() ? Jd(f, new I("child_added", c, b)) : Jd(f, new I("child_changed", c, b, e)));
        return a.J() && c.e() ? a : a.U(b, c).ob(this.g)
    };
    g.za = function (a, b, c) {
        null != c && (a.J() || a.P(N, function (a, e) {
            b.Fa(a) || Jd(c, new I("child_removed", e, a))
        }), b.J() || b.P(N, function (b, e) {
            if (a.Fa(b)) {
                var f = a.R(b);
                f.$(e) || Jd(c, new I("child_changed", e, b, f))
            } else Jd(c, new I("child_added", e, b))
        }));
        return b.ob(this.g)
    };
    g.ga = function (a, b) {
        return a.e() ? F : a.ga(b)
    };
    g.Qa = function () {
        return !1
    };
    g.Vb = function () {
        return this
    };
    function ge(a) {
        this.he = new fe(a.g);
        this.g = a.g;
        var b;
        a.la ? (b = he(a), b = a.g.Fc(ie(a), b)) : b = a.g.Ic();
        this.Uc = b;
        a.oa ? (b = je(a), a = a.g.Fc(ke(a), b)) : a = a.g.Gc();
        this.wc = a
    }

    g = ge.prototype;
    g.matches = function (a) {
        return 0 >= this.g.compare(this.Uc, a) && 0 >= this.g.compare(a, this.wc)
    };
    g.F = function (a, b, c, d, e, f) {
        this.matches(new K(b, c)) || (c = F);
        return this.he.F(a, b, c, d, e, f)
    };
    g.za = function (a, b, c) {
        b.J() && (b = F);
        var d = b.ob(this.g), d = d.ga(F), e = this;
        b.P(N, function (a, b) {
            e.matches(new K(a, b)) || (d = d.U(a, F))
        });
        return this.he.za(a, d, c)
    };
    g.ga = function (a) {
        return a
    };
    g.Qa = function () {
        return !0
    };
    g.Vb = function () {
        return this.he
    };
    function le(a) {
        this.ta = new ge(a);
        this.g = a.g;
        H(a.ya, "Only valid if limit has been set");
        this.pa = a.pa;
        this.Jb = !me(a)
    }

    g = le.prototype;
    g.F = function (a, b, c, d, e, f) {
        this.ta.matches(new K(b, c)) || (c = F);
        return a.R(b).$(c) ? a : a.Fb() < this.pa ? this.ta.Vb().F(a, b, c, d, e, f) : ne(this, a, b, c, e, f)
    };
    g.za = function (a, b, c) {
        var d;
        if (b.J() || b.e())d = F.ob(this.g); else if (2 * this.pa < b.Fb() && b.zc(this.g)) {
            d = F.ob(this.g);
            b = this.Jb ? b.$b(this.ta.wc, this.g) : b.Yb(this.ta.Uc, this.g);
            for (var e = 0; 0 < b.Sa.length && e < this.pa;) {
                var f = R(b), h;
                if (h = this.Jb ? 0 >= this.g.compare(this.ta.Uc, f) : 0 >= this.g.compare(f, this.ta.wc))d = d.U(f.name, f.S), e++; else break
            }
        } else {
            d = b.ob(this.g);
            d = d.ga(F);
            var k, m, l;
            if (this.Jb) {
                b = d.$e(this.g);
                k = this.ta.wc;
                m = this.ta.Uc;
                var u = oe(this.g);
                l = function (a, b) {
                    return u(b, a)
                }
            } else b = d.Xb(this.g), k = this.ta.Uc,
                m = this.ta.wc, l = oe(this.g);
            for (var e = 0, z = !1; 0 < b.Sa.length;)f = R(b), !z && 0 >= l(k, f) && (z = !0), (h = z && e < this.pa && 0 >= l(f, m)) ? e++ : d = d.U(f.name, F)
        }
        return this.ta.Vb().za(a, d, c)
    };
    g.ga = function (a) {
        return a
    };
    g.Qa = function () {
        return !0
    };
    g.Vb = function () {
        return this.ta.Vb()
    };
    function ne(a, b, c, d, e, f) {
        var h;
        if (a.Jb) {
            var k = oe(a.g);
            h = function (a, b) {
                return k(b, a)
            }
        } else h = oe(a.g);
        H(b.Fb() == a.pa, "");
        var m = new K(c, d), l = a.Jb ? pe(b, a.g) : qe(b, a.g), u = a.ta.matches(m);
        if (b.Fa(c)) {
            for (var z = b.R(c), l = e.fe(a.g, l, a.Jb); null != l && (l.name == c || b.Fa(l.name));)l = e.fe(a.g, l, a.Jb);
            e = null == l ? 1 : h(l, m);
            if (u && !d.e() && 0 <= e)return null != f && Jd(f, new I("child_changed", d, c, z)), b.U(c, d);
            null != f && Jd(f, new I("child_removed", z, c));
            b = b.U(c, F);
            return null != l && a.ta.matches(l) ? (null != f && Jd(f, new I("child_added",
                l.S, l.name)), b.U(l.name, l.S)) : b
        }
        return d.e() ? b : u && 0 <= h(l, m) ? (null != f && (Jd(f, new I("child_removed", l.S, l.name)), Jd(f, new I("child_added", d, c))), b.U(c, d).U(l.name, F)) : b
    };
    function Qc(a, b) {
        this.B = a;
        H(p(this.B) && null !== this.B, "LeafNode shouldn't be created with null/undefined value.");
        this.ba = b || F;
        re(this.ba);
        this.Eb = null
    }

    var se = ["object", "boolean", "number", "string"];
    g = Qc.prototype;
    g.J = function () {
        return !0
    };
    g.C = function () {
        return this.ba
    };
    g.ga = function (a) {
        return new Qc(this.B, a)
    };
    g.R = function (a) {
        return ".priority" === a ? this.ba : F
    };
    g.Q = function (a) {
        return a.e() ? this : ".priority" === J(a) ? this.ba : F
    };
    g.Fa = function () {
        return !1
    };
    g.Ze = function () {
        return null
    };
    g.U = function (a, b) {
        return ".priority" === a ? this.ga(b) : b.e() && ".priority" !== a ? this : F.U(a, b).ga(this.ba)
    };
    g.F = function (a, b) {
        var c = J(a);
        if (null === c)return b;
        if (b.e() && ".priority" !== c)return this;
        H(".priority" !== c || 1 === $d(a), ".priority must be the last token in a path");
        return this.U(c, F.F(D(a), b))
    };
    g.e = function () {
        return !1
    };
    g.Fb = function () {
        return 0
    };
    g.P = function () {
        return !1
    };
    g.H = function (a) {
        return a && !this.C().e() ? {".value": this.Ea(), ".priority": this.C().H()} : this.Ea()
    };
    g.hash = function () {
        if (null === this.Eb) {
            var a = "";
            this.ba.e() || (a += "priority:" + te(this.ba.H()) + ":");
            var b = typeof this.B, a = a + (b + ":"), a = "number" === b ? a + id(this.B) : a + this.B;
            this.Eb = Uc(a)
        }
        return this.Eb
    };
    g.Ea = function () {
        return this.B
    };
    g.tc = function (a) {
        if (a === F)return 1;
        if (a instanceof P)return -1;
        H(a.J(), "Unknown node type");
        var b = typeof a.B, c = typeof this.B, d = Ia(se, b), e = Ia(se, c);
        H(0 <= d, "Unknown leaf type: " + b);
        H(0 <= e, "Unknown leaf type: " + c);
        return d === e ? "object" === c ? 0 : this.B < a.B ? -1 : this.B === a.B ? 0 : 1 : e - d
    };
    g.ob = function () {
        return this
    };
    g.zc = function () {
        return !0
    };
    g.$ = function (a) {
        return a === this ? !0 : a.J() ? this.B === a.B && this.ba.$(a.ba) : !1
    };
    g.toString = function () {
        return B(this.H(!0))
    };
    function ue() {
    }

    var ve = {};

    function oe(a) {
        return r(a.compare, a)
    }

    ue.prototype.nd = function (a, b) {
        return 0 !== this.compare(new K("[MIN_NAME]", a), new K("[MIN_NAME]", b))
    };
    ue.prototype.Ic = function () {
        return we
    };
    function xe(a) {
        H(!a.e() && ".priority" !== J(a), "Can't create PathIndex with empty path or .priority key");
        this.cc = a
    }

    ka(xe, ue);
    g = xe.prototype;
    g.yc = function (a) {
        return !a.Q(this.cc).e()
    };
    g.compare = function (a, b) {
        var c = a.S.Q(this.cc), d = b.S.Q(this.cc), c = c.tc(d);
        return 0 === c ? Hc(a.name, b.name) : c
    };
    g.Fc = function (a, b) {
        var c = M(a), c = F.F(this.cc, c);
        return new K(b, c)
    };
    g.Gc = function () {
        var a = F.F(this.cc, ye);
        return new K("[MAX_NAME]", a)
    };
    g.toString = function () {
        return this.cc.slice().join("/")
    };
    function ze() {
    }

    ka(ze, ue);
    g = ze.prototype;
    g.compare = function (a, b) {
        var c = a.S.C(), d = b.S.C(), c = c.tc(d);
        return 0 === c ? Hc(a.name, b.name) : c
    };
    g.yc = function (a) {
        return !a.C().e()
    };
    g.nd = function (a, b) {
        return !a.C().$(b.C())
    };
    g.Ic = function () {
        return we
    };
    g.Gc = function () {
        return new K("[MAX_NAME]", new Qc("[PRIORITY-POST]", ye))
    };
    g.Fc = function (a, b) {
        var c = M(a);
        return new K(b, new Qc("[PRIORITY-POST]", c))
    };
    g.toString = function () {
        return ".priority"
    };
    var N = new ze;

    function Ae() {
    }

    ka(Ae, ue);
    g = Ae.prototype;
    g.compare = function (a, b) {
        return Hc(a.name, b.name)
    };
    g.yc = function () {
        throw Sc("KeyIndex.isDefinedOn not expected to be called.");
    };
    g.nd = function () {
        return !1
    };
    g.Ic = function () {
        return we
    };
    g.Gc = function () {
        return new K("[MAX_NAME]", F)
    };
    g.Fc = function (a) {
        H(q(a), "KeyIndex indexValue must always be a string.");
        return new K(a, F)
    };
    g.toString = function () {
        return ".key"
    };
    var ee = new Ae;

    function Be() {
    }

    ka(Be, ue);
    g = Be.prototype;
    g.compare = function (a, b) {
        var c = a.S.tc(b.S);
        return 0 === c ? Hc(a.name, b.name) : c
    };
    g.yc = function () {
        return !0
    };
    g.nd = function (a, b) {
        return !a.$(b)
    };
    g.Ic = function () {
        return we
    };
    g.Gc = function () {
        return Ce
    };
    g.Fc = function (a, b) {
        var c = M(a);
        return new K(b, c)
    };
    g.toString = function () {
        return ".value"
    };
    var De = new Be;

    function Ee() {
        this.Sb = this.oa = this.Lb = this.la = this.ya = !1;
        this.pa = 0;
        this.oc = "";
        this.ec = null;
        this.Ab = "";
        this.bc = null;
        this.yb = "";
        this.g = N
    }

    var Fe = new Ee;

    function me(a) {
        return "" === a.oc ? a.la : "l" === a.oc
    }

    function ie(a) {
        H(a.la, "Only valid if start has been set");
        return a.ec
    }

    function he(a) {
        H(a.la, "Only valid if start has been set");
        return a.Lb ? a.Ab : "[MIN_NAME]"
    }

    function ke(a) {
        H(a.oa, "Only valid if end has been set");
        return a.bc
    }

    function je(a) {
        H(a.oa, "Only valid if end has been set");
        return a.Sb ? a.yb : "[MAX_NAME]"
    }

    function Ge(a) {
        var b = new Ee;
        b.ya = a.ya;
        b.pa = a.pa;
        b.la = a.la;
        b.ec = a.ec;
        b.Lb = a.Lb;
        b.Ab = a.Ab;
        b.oa = a.oa;
        b.bc = a.bc;
        b.Sb = a.Sb;
        b.yb = a.yb;
        b.g = a.g;
        return b
    }

    g = Ee.prototype;
    g.ne = function (a) {
        var b = Ge(this);
        b.ya = !0;
        b.pa = a;
        b.oc = "l";
        return b
    };
    g.oe = function (a) {
        var b = Ge(this);
        b.ya = !0;
        b.pa = a;
        b.oc = "r";
        return b
    };
    g.Nd = function (a, b) {
        var c = Ge(this);
        c.la = !0;
        p(a) || (a = null);
        c.ec = a;
        null != b ? (c.Lb = !0, c.Ab = b) : (c.Lb = !1, c.Ab = "");
        return c
    };
    g.fd = function (a, b) {
        var c = Ge(this);
        c.oa = !0;
        p(a) || (a = null);
        c.bc = a;
        p(b) ? (c.Sb = !0, c.yb = b) : (c.Hg = !1, c.yb = "");
        return c
    };
    function He(a, b) {
        var c = Ge(a);
        c.g = b;
        return c
    }

    function Ie(a) {
        var b = {};
        a.la && (b.sp = a.ec, a.Lb && (b.sn = a.Ab));
        a.oa && (b.ep = a.bc, a.Sb && (b.en = a.yb));
        if (a.ya) {
            b.l = a.pa;
            var c = a.oc;
            "" === c && (c = me(a) ? "l" : "r");
            b.vf = c
        }
        a.g !== N && (b.i = a.g.toString());
        return b
    }

    function S(a) {
        return !(a.la || a.oa || a.ya)
    }

    function rd(a) {
        return S(a) && a.g == N
    }

    function sd(a) {
        var b = {};
        if (rd(a))return b;
        var c;
        a.g === N ? c = "$priority" : a.g === De ? c = "$value" : a.g === ee ? c = "$key" : (H(a.g instanceof xe, "Unrecognized index type!"), c = a.g.toString());
        b.orderBy = B(c);
        a.la && (b.startAt = B(a.ec), a.Lb && (b.startAt += "," + B(a.Ab)));
        a.oa && (b.endAt = B(a.bc), a.Sb && (b.endAt += "," + B(a.yb)));
        a.ya && (me(a) ? b.limitToFirst = a.pa : b.limitToLast = a.pa);
        return b
    }

    g.toString = function () {
        return B(Ie(this))
    };
    function Je(a, b) {
        this.od = a;
        this.dc = b
    }

    Je.prototype.get = function (a) {
        var b = x(this.od, a);
        if (!b)throw Error("No index defined for " + a);
        return b === ve ? null : b
    };
    function Ke(a, b, c) {
        var d = oa(a.od, function (d, f) {
            var h = x(a.dc, f);
            H(h, "Missing index implementation for " + f);
            if (d === ve) {
                if (h.yc(b.S)) {
                    for (var k = [], m = c.Xb(Jc), l = R(m); l;)l.name != b.name && k.push(l), l = R(m);
                    k.push(b);
                    return Le(k, oe(h))
                }
                return ve
            }
            h = c.get(b.name);
            k = d;
            h && (k = k.remove(new K(b.name, h)));
            return k.Ra(b, b.S)
        });
        return new Je(d, a.dc)
    }

    function Me(a, b, c) {
        var d = oa(a.od, function (a) {
            if (a === ve)return a;
            var d = c.get(b.name);
            return d ? a.remove(new K(b.name, d)) : a
        });
        return new Je(d, a.dc)
    }

    var Ne = new Je({".priority": ve}, {".priority": N});

    function Oe() {
        this.set = {}
    }

    g = Oe.prototype;
    g.add = function (a, b) {
        this.set[a] = null !== b ? b : !0
    };
    g.contains = function (a) {
        return Bb(this.set, a)
    };
    g.get = function (a) {
        return this.contains(a) ? this.set[a] : void 0
    };
    g.remove = function (a) {
        delete this.set[a]
    };
    g.clear = function () {
        this.set = {}
    };
    g.e = function () {
        return xa(this.set)
    };
    g.count = function () {
        return qa(this.set)
    };
    function Pe(a, b) {
        t(a.set, function (a, d) {
            b(d, a)
        })
    }

    g.keys = function () {
        var a = [];
        t(this.set, function (b, c) {
            a.push(c)
        });
        return a
    };
    function Qe(a, b, c, d) {
        this.Zd = a;
        this.f = Yc(a);
        this.kc = b;
        this.qb = this.rb = 0;
        this.Xa = Ad(b);
        this.Bf = c;
        this.xc = !1;
        this.Db = d;
        this.Yc = function (a) {
            return ic(b, "long_polling", a)
        }
    }

    var Re, Se;
    Qe.prototype.open = function (a, b) {
        this.Qe = 0;
        this.ja = b;
        this.ff = new Rb(a);
        this.Bb = !1;
        var c = this;
        this.tb = setTimeout(function () {
            c.f("Timed out trying to connect.");
            c.fb();
            c.tb = null
        }, Math.floor(3E4));
        cd(function () {
            if (!c.Bb) {
                c.Wa = new Te(function (a, b, d, k, m) {
                    Ue(c, arguments);
                    if (c.Wa)if (c.tb && (clearTimeout(c.tb), c.tb = null), c.xc = !0, "start" == a)c.id = b, c.mf = d; else if ("close" === a)b ? (c.Wa.Kd = !1, Sb(c.ff, b, function () {
                        c.fb()
                    })) : c.fb(); else throw Error("Unrecognized command received: " + a);
                }, function (a, b) {
                    Ue(c, arguments);
                    Tb(c.ff, a, b)
                }, function () {
                    c.fb()
                }, c.Yc);
                var a = {start: "t"};
                a.ser = Math.floor(1E8 * Math.random());
                c.Wa.Qd && (a.cb = c.Wa.Qd);
                a.v = "5";
                c.Bf && (a.s = c.Bf);
                c.Db && (a.ls = c.Db);
                "undefined" !== typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com") && (a.r = "f");
                a = c.Yc(a);
                c.f("Connecting via long-poll to " + a);
                Ve(c.Wa, a, function () {
                })
            }
        })
    };
    Qe.prototype.start = function () {
        var a = this.Wa, b = this.mf;
        a.fg = this.id;
        a.gg = b;
        for (a.Ud = !0; We(a););
        a = this.id;
        b = this.mf;
        this.gc = document.createElement("iframe");
        var c = {dframe: "t"};
        c.id = a;
        c.pw = b;
        this.gc.src = this.Yc(c);
        this.gc.style.display = "none";
        document.body.appendChild(this.gc)
    };
    Qe.isAvailable = function () {
        return Re || !Se && "undefined" !== typeof document && null != document.createElement && !("object" === typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href)) && !("object" === typeof Windows && "object" === typeof Windows.Dg) && !0
    };
    g = Qe.prototype;
    g.sd = function () {
    };
    g.Tc = function () {
        this.Bb = !0;
        this.Wa && (this.Wa.close(), this.Wa = null);
        this.gc && (document.body.removeChild(this.gc), this.gc = null);
        this.tb && (clearTimeout(this.tb), this.tb = null)
    };
    g.fb = function () {
        this.Bb || (this.f("Longpoll is closing itself"), this.Tc(), this.ja && (this.ja(this.xc), this.ja = null))
    };
    g.close = function () {
        this.Bb || (this.f("Longpoll is being closed."), this.Tc())
    };
    g.send = function (a) {
        a = B(a);
        this.rb += a.length;
        kc(this.Xa, "bytes_sent", a.length);
        a = Mb(a);
        a = ab(a, !0);
        a = gd(a, 1840);
        for (var b = 0; b < a.length; b++) {
            var c = this.Wa;
            c.Qc.push({ug: this.Qe, Bg: a.length, Se: a[b]});
            c.Ud && We(c);
            this.Qe++
        }
    };
    function Ue(a, b) {
        var c = B(b).length;
        a.qb += c;
        kc(a.Xa, "bytes_received", c)
    }

    function Te(a, b, c, d) {
        this.Yc = d;
        this.kb = c;
        this.ve = new Oe;
        this.Qc = [];
        this.$d = Math.floor(1E8 * Math.random());
        this.Kd = !0;
        this.Qd = Rc();
        window["pLPCommand" + this.Qd] = a;
        window["pRTLPCB" + this.Qd] = b;
        a = document.createElement("iframe");
        a.style.display = "none";
        if (document.body) {
            document.body.appendChild(a);
            try {
                a.contentWindow.document || E("No IE domain setting required")
            } catch (e) {
                a.src = "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.close();})())"
            }
        } else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
        a.contentDocument ? a.ib = a.contentDocument : a.contentWindow ? a.ib = a.contentWindow.document : a.document && (a.ib = a.document);
        this.Ga = a;
        a = "";
        this.Ga.src && "javascript:" === this.Ga.src.substr(0, 11) && (a = '<script>document.domain="' + document.domain + '";\x3c/script>');
        a = "<html><body>" + a + "</body></html>";
        try {
            this.Ga.ib.open(), this.Ga.ib.write(a), this.Ga.ib.close()
        } catch (f) {
            E("frame writing exception"), f.stack && E(f.stack), E(f)
        }
    }

    Te.prototype.close = function () {
        this.Ud = !1;
        if (this.Ga) {
            this.Ga.ib.body.innerHTML = "";
            var a = this;
            setTimeout(function () {
                null !== a.Ga && (document.body.removeChild(a.Ga), a.Ga = null)
            }, Math.floor(0))
        }
        var b = this.kb;
        b && (this.kb = null, b())
    };
    function We(a) {
        if (a.Ud && a.Kd && a.ve.count() < (0 < a.Qc.length ? 2 : 1)) {
            a.$d++;
            var b = {};
            b.id = a.fg;
            b.pw = a.gg;
            b.ser = a.$d;
            for (var b = a.Yc(b), c = "", d = 0; 0 < a.Qc.length;)if (1870 >= a.Qc[0].Se.length + 30 + c.length) {
                var e = a.Qc.shift(), c = c + "&seg" + d + "=" + e.ug + "&ts" + d + "=" + e.Bg + "&d" + d + "=" + e.Se;
                d++
            } else break;
            Xe(a, b + c, a.$d);
            return !0
        }
        return !1
    }

    function Xe(a, b, c) {
        function d() {
            a.ve.remove(c);
            We(a)
        }

        a.ve.add(c, 1);
        var e = setTimeout(d, Math.floor(25E3));
        Ve(a, b, function () {
            clearTimeout(e);
            d()
        })
    }

    function Ve(a, b, c) {
        setTimeout(function () {
            try {
                if (a.Kd) {
                    var d = a.Ga.ib.createElement("script");
                    d.type = "text/javascript";
                    d.async = !0;
                    d.src = b;
                    d.onload = d.onreadystatechange = function () {
                        var a = d.readyState;
                        a && "loaded" !== a && "complete" !== a || (d.onload = d.onreadystatechange = null, d.parentNode && d.parentNode.removeChild(d), c())
                    };
                    d.onerror = function () {
                        E("Long-poll script failed to load: " + b);
                        a.Kd = !1;
                        a.close()
                    };
                    a.Ga.ib.body.appendChild(d)
                }
            } catch (e) {
            }
        }, Math.floor(1))
    };
    function Ye(a) {
        Ze(this, a)
    }

    var $e = [Qe, Dd];

    function Ze(a, b) {
        var c = Dd && Dd.isAvailable(), d = c && !(Yb.cf || !0 === Yb.get("previous_websocket_failure"));
        b.Cg && (c || O("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), d = !0);
        if (d)a.Wc = [Dd]; else {
            var e = a.Wc = [];
            hd($e, function (a, b) {
                b && b.isAvailable() && e.push(b)
            })
        }
    }

    function af(a) {
        if (0 < a.Wc.length)return a.Wc[0];
        throw Error("No transports available");
    };
    function bf(a, b, c, d, e, f, h) {
        this.id = a;
        this.f = Yc("c:" + this.id + ":");
        this.te = c;
        this.Mc = d;
        this.ja = e;
        this.se = f;
        this.M = b;
        this.Ad = [];
        this.Oe = 0;
        this.Af = new Ye(b);
        this.L = 0;
        this.Db = h;
        this.f("Connection created");
        cf(this)
    }

    function cf(a) {
        var b = af(a.Af);
        a.I = new b("c:" + a.id + ":" + a.Oe++, a.M, void 0, a.Db);
        a.xe = b.responsesRequiredToBeHealthy || 0;
        var c = df(a, a.I), d = ef(a, a.I);
        a.Xc = a.I;
        a.Rc = a.I;
        a.D = null;
        a.Cb = !1;
        setTimeout(function () {
            a.I && a.I.open(c, d)
        }, Math.floor(0));
        b = b.healthyTimeout || 0;
        0 < b && (a.md = ld(function () {
            a.md = null;
            a.Cb || (a.I && 102400 < a.I.qb ? (a.f("Connection exceeded healthy timeout but has received " + a.I.qb + " bytes.  Marking connection healthy."), a.Cb = !0, a.I.sd()) : a.I && 10240 < a.I.rb ? a.f("Connection exceeded healthy timeout but has sent " +
                a.I.rb + " bytes.  Leaving connection alive.") : (a.f("Closing unhealthy connection after timeout."), a.close()))
        }, Math.floor(b)))
    }

    function ef(a, b) {
        return function (c) {
            b === a.I ? (a.I = null, c || 0 !== a.L ? 1 === a.L && a.f("Realtime connection lost.") : (a.f("Realtime connection failed."), "s-" === a.M.bb.substr(0, 2) && (Yb.remove("host:" + a.M.host), a.M.bb = a.M.host)), a.close()) : b === a.D ? (a.f("Secondary connection lost."), c = a.D, a.D = null, a.Xc !== c && a.Rc !== c || a.close()) : a.f("closing an old connection")
        }
    }

    function df(a, b) {
        return function (c) {
            if (2 != a.L)if (b === a.Rc) {
                var d = ed("t", c);
                c = ed("d", c);
                if ("c" == d) {
                    if (d = ed("t", c), "d" in c)if (c = c.d, "h" === d) {
                        var d = c.ts, e = c.v, f = c.h;
                        a.yf = c.s;
                        hc(a.M, f);
                        0 == a.L && (a.I.start(), ff(a, a.I, d), "5" !== e && O("Protocol version mismatch detected"), c = a.Af, (c = 1 < c.Wc.length ? c.Wc[1] : null) && gf(a, c))
                    } else if ("n" === d) {
                        a.f("recvd end transmission on primary");
                        a.Rc = a.D;
                        for (c = 0; c < a.Ad.length; ++c)a.wd(a.Ad[c]);
                        a.Ad = [];
                        hf(a)
                    } else"s" === d ? (a.f("Connection shutdown command received. Shutting down..."),
                    a.se && (a.se(c), a.se = null), a.ja = null, a.close()) : "r" === d ? (a.f("Reset packet received.  New host: " + c), hc(a.M, c), 1 === a.L ? a.close() : (jf(a), cf(a))) : "e" === d ? Zc("Server Error: " + c) : "o" === d ? (a.f("got pong on primary."), kf(a), lf(a)) : Zc("Unknown control packet command: " + d)
                } else"d" == d && a.wd(c)
            } else if (b === a.D)if (d = ed("t", c), c = ed("d", c), "c" == d)"t" in c && (c = c.t, "a" === c ? mf(a) : "r" === c ? (a.f("Got a reset on secondary, closing it"), a.D.close(), a.Xc !== a.D && a.Rc !== a.D || a.close()) : "o" === c && (a.f("got pong on secondary."),
                a.xf--, mf(a))); else if ("d" == d)a.Ad.push(c); else throw Error("Unknown protocol layer: " + d); else a.f("message on old connection")
        }
    }

    bf.prototype.va = function (a) {
        nf(this, {t: "d", d: a})
    };
    function hf(a) {
        a.Xc === a.D && a.Rc === a.D && (a.f("cleaning up and promoting a connection: " + a.D.Zd), a.I = a.D, a.D = null)
    }

    function mf(a) {
        0 >= a.xf ? (a.f("Secondary connection is healthy."), a.Cb = !0, a.D.sd(), a.D.start(), a.f("sending client ack on secondary"), a.D.send({
            t: "c",
            d: {t: "a", d: {}}
        }), a.f("Ending transmission on primary"), a.I.send({
            t: "c",
            d: {t: "n", d: {}}
        }), a.Xc = a.D, hf(a)) : (a.f("sending ping on secondary."), a.D.send({t: "c", d: {t: "p", d: {}}}))
    }

    bf.prototype.wd = function (a) {
        kf(this);
        this.te(a)
    };
    function kf(a) {
        a.Cb || (a.xe--, 0 >= a.xe && (a.f("Primary connection is healthy."), a.Cb = !0, a.I.sd()))
    }

    function gf(a, b) {
        a.D = new b("c:" + a.id + ":" + a.Oe++, a.M, a.yf);
        a.xf = b.responsesRequiredToBeHealthy || 0;
        a.D.open(df(a, a.D), ef(a, a.D));
        ld(function () {
            a.D && (a.f("Timed out trying to upgrade."), a.D.close())
        }, Math.floor(6E4))
    }

    function ff(a, b, c) {
        a.f("Realtime connection established.");
        a.I = b;
        a.L = 1;
        a.Mc && (a.Mc(c, a.yf), a.Mc = null);
        0 === a.xe ? (a.f("Primary connection is healthy."), a.Cb = !0) : ld(function () {
            lf(a)
        }, Math.floor(5E3))
    }

    function lf(a) {
        a.Cb || 1 !== a.L || (a.f("sending ping on primary."), nf(a, {t: "c", d: {t: "p", d: {}}}))
    }

    function nf(a, b) {
        if (1 !== a.L)throw"Connection is not connected";
        a.Xc.send(b)
    }

    bf.prototype.close = function () {
        2 !== this.L && (this.f("Closing realtime connection."), this.L = 2, jf(this), this.ja && (this.ja(), this.ja = null))
    };
    function jf(a) {
        a.f("Shutting down all connections");
        a.I && (a.I.close(), a.I = null);
        a.D && (a.D.close(), a.D = null);
        a.md && (clearTimeout(a.md), a.md = null)
    };
    function L(a, b) {
        if (1 == arguments.length) {
            this.o = a.split("/");
            for (var c = 0, d = 0; d < this.o.length; d++)0 < this.o[d].length && (this.o[c] = this.o[d], c++);
            this.o.length = c;
            this.Z = 0
        } else this.o = a, this.Z = b
    }

    function T(a, b) {
        var c = J(a);
        if (null === c)return b;
        if (c === J(b))return T(D(a), D(b));
        throw Error("INTERNAL ERROR: innerPath (" + b + ") is not within outerPath (" + a + ")");
    }

    function of(a, b) {
        for (var c = a.slice(), d = b.slice(), e = 0; e < c.length && e < d.length; e++) {
            var f = Hc(c[e], d[e]);
            if (0 !== f)return f
        }
        return c.length === d.length ? 0 : c.length < d.length ? -1 : 1
    }

    function J(a) {
        return a.Z >= a.o.length ? null : a.o[a.Z]
    }

    function $d(a) {
        return a.o.length - a.Z
    }

    function D(a) {
        var b = a.Z;
        b < a.o.length && b++;
        return new L(a.o, b)
    }

    function ae(a) {
        return a.Z < a.o.length ? a.o[a.o.length - 1] : null
    }

    g = L.prototype;
    g.toString = function () {
        for (var a = "", b = this.Z; b < this.o.length; b++)"" !== this.o[b] && (a += "/" + this.o[b]);
        return a || "/"
    };
    g.slice = function (a) {
        return this.o.slice(this.Z + (a || 0))
    };
    g.parent = function () {
        if (this.Z >= this.o.length)return null;
        for (var a = [], b = this.Z; b < this.o.length - 1; b++)a.push(this.o[b]);
        return new L(a, 0)
    };
    g.k = function (a) {
        for (var b = [], c = this.Z; c < this.o.length; c++)b.push(this.o[c]);
        if (a instanceof L)for (c = a.Z; c < a.o.length; c++)b.push(a.o[c]); else for (a = a.split("/"), c = 0; c < a.length; c++)0 < a[c].length && b.push(a[c]);
        return new L(b, 0)
    };
    g.e = function () {
        return this.Z >= this.o.length
    };
    g.$ = function (a) {
        if ($d(this) !== $d(a))return !1;
        for (var b = this.Z, c = a.Z; b <= this.o.length; b++, c++)if (this.o[b] !== a.o[c])return !1;
        return !0
    };
    g.contains = function (a) {
        var b = this.Z, c = a.Z;
        if ($d(this) > $d(a))return !1;
        for (; b < this.o.length;) {
            if (this.o[b] !== a.o[c])return !1;
            ++b;
            ++c
        }
        return !0
    };
    var C = new L("");

    function pf(a, b) {
        this.Ta = a.slice();
        this.Ka = Math.max(1, this.Ta.length);
        this.Te = b;
        for (var c = 0; c < this.Ta.length; c++)this.Ka += Nb(this.Ta[c]);
        qf(this)
    }

    pf.prototype.push = function (a) {
        0 < this.Ta.length && (this.Ka += 1);
        this.Ta.push(a);
        this.Ka += Nb(a);
        qf(this)
    };
    pf.prototype.pop = function () {
        var a = this.Ta.pop();
        this.Ka -= Nb(a);
        0 < this.Ta.length && --this.Ka
    };
    function qf(a) {
        if (768 < a.Ka)throw Error(a.Te + "has a key path longer than 768 bytes (" + a.Ka + ").");
        if (32 < a.Ta.length)throw Error(a.Te + "path specified exceeds the maximum depth that can be written (32) or object contains a cycle " + rf(a));
    }

    function rf(a) {
        return 0 == a.Ta.length ? "" : "in property '" + a.Ta.join(".") + "'"
    };
    function sf(a) {
        a instanceof tf || $c("Don't call new Database() directly - please use firebase.database().");
        this.ua = a;
        this.ca = new U(a, C);
        this.INTERNAL = new uf(this)
    }

    var vf = {TIMESTAMP: {".sv": "timestamp"}};
    g = sf.prototype;
    g.app = null;
    g.pf = function (a) {
        wf(this, "ref");
        y("database.ref", 0, 1, arguments.length);
        return p(a) ? this.ca.k(a) : this.ca
    };
    g.rg = function (a) {
        wf(this, "database.refFromURL");
        y("database.refFromURL", 1, 1, arguments.length);
        var b = ad(a);
        xf("database.refFromURL", b);
        var c = b.kc;
        c.host !== this.ua.M.host && $c("database.refFromURL: Host name does not match the current database: (found " + c.host + " but expected " + this.ua.M.host + ")");
        return this.pf(b.path.toString())
    };
    function wf(a, b) {
        null === a.ua && $c("Cannot call " + b + " on a deleted database.")
    }

    g.$f = function () {
        y("database.goOffline", 0, 0, arguments.length);
        wf(this, "goOffline");
        this.ua.eb()
    };
    g.ag = function () {
        y("database.goOnline", 0, 0, arguments.length);
        wf(this, "goOnline");
        this.ua.lc()
    };
    Object.defineProperty(sf.prototype, "app", {
        get: function () {
            return this.ua.app
        }
    });
    function uf(a) {
        this.$a = a
    }

    uf.prototype.delete = function () {
        wf(this.$a, "delete");
        var a = yf.Wb(), b = this.$a.ua;
        x(a.nb, b.app.name) !== b && $c("Database " + b.app.name + " has already been deleted.");
        b.eb();
        delete a.nb[b.app.name];
        this.$a.ua = null;
        this.$a.ca = null;
        this.$a = this.$a.INTERNAL = null;
        return firebase.Promise.resolve()
    };
    sf.prototype.ref = sf.prototype.pf;
    sf.prototype.refFromURL = sf.prototype.rg;
    sf.prototype.goOnline = sf.prototype.ag;
    sf.prototype.goOffline = sf.prototype.$f;
    uf.prototype["delete"] = uf.prototype.delete;
    function Mc() {
        this.m = this.B = null
    }

    Mc.prototype.find = function (a) {
        if (null != this.B)return this.B.Q(a);
        if (a.e() || null == this.m)return null;
        var b = J(a);
        a = D(a);
        return this.m.contains(b) ? this.m.get(b).find(a) : null
    };
    function Oc(a, b, c) {
        if (b.e())a.B = c, a.m = null; else if (null !== a.B)a.B = a.B.F(b, c); else {
            null == a.m && (a.m = new Oe);
            var d = J(b);
            a.m.contains(d) || a.m.add(d, new Mc);
            a = a.m.get(d);
            b = D(b);
            Oc(a, b, c)
        }
    }

    function zf(a, b) {
        if (b.e())return a.B = null, a.m = null, !0;
        if (null !== a.B) {
            if (a.B.J())return !1;
            var c = a.B;
            a.B = null;
            c.P(N, function (b, c) {
                Oc(a, new L(b), c)
            });
            return zf(a, b)
        }
        return null !== a.m ? (c = J(b), b = D(b), a.m.contains(c) && zf(a.m.get(c), b) && a.m.remove(c), a.m.e() ? (a.m = null, !0) : !1) : !0
    }

    function Nc(a, b, c) {
        null !== a.B ? c(b, a.B) : a.P(function (a, e) {
            var f = new L(b.toString() + "/" + a);
            Nc(e, f, c)
        })
    }

    Mc.prototype.P = function (a) {
        null !== this.m && Pe(this.m, function (b, c) {
            a(b, c)
        })
    };
    var Af = /[\[\].#$\/\u0000-\u001F\u007F]/, Bf = /[\[\].#$\u0000-\u001F\u007F]/;

    function Cf(a) {
        return q(a) && 0 !== a.length && !Af.test(a)
    }

    function Df(a) {
        return null === a || q(a) || fa(a) && !bd(a) || ha(a) && Bb(a, ".sv")
    }

    function Ef(a, b, c, d) {
        d && !p(b) || Ff(Db(a, 1, d), b, c)
    }

    function Ff(a, b, c) {
        c instanceof L && (c = new pf(c, a));
        if (!p(b))throw Error(a + "contains undefined " + rf(c));
        if (ga(b))throw Error(a + "contains a function " + rf(c) + " with contents: " + b.toString());
        if (bd(b))throw Error(a + "contains " + b.toString() + " " + rf(c));
        if (q(b) && b.length > 10485760 / 3 && 10485760 < Nb(b))throw Error(a + "contains a string greater than 10485760 utf8 bytes " + rf(c) + " ('" + b.substring(0, 50) + "...')");
        if (ha(b)) {
            var d = !1, e = !1;
            Cb(b, function (b, h) {
                if (".value" === b)d = !0; else if (".priority" !== b && ".sv" !== b && (e = !0, !Cf(b)))throw Error(a + " contains an invalid key (" + b + ") " + rf(c) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                c.push(b);
                Ff(a, h, c);
                c.pop()
            });
            if (d && e)throw Error(a + ' contains ".value" child ' + rf(c) + " in addition to actual children.");
        }
    }

    function Gf(a, b) {
        var c, d;
        for (c = 0; c < b.length; c++) {
            d = b[c];
            for (var e = d.slice(), f = 0; f < e.length; f++)if ((".priority" !== e[f] || f !== e.length - 1) && !Cf(e[f]))throw Error(a + "contains an invalid key (" + e[f] + ") in path " + d.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
        }
        b.sort(of);
        e = null;
        for (c = 0; c < b.length; c++) {
            d = b[c];
            if (null !== e && e.contains(d))throw Error(a + "contains a path " + e.toString() + " that is ancestor of another path " + d.toString());
            e = d
        }
    }

    function Hf(a, b, c) {
        var d = Db(a, 1, !1);
        if (!ha(b) || da(b))throw Error(d + " must be an object containing the children to replace.");
        var e = [];
        Cb(b, function (a, b) {
            var k = new L(a);
            Ff(d, b, c.k(k));
            if (".priority" === ae(k) && !Df(b))throw Error(d + "contains an invalid value for '" + k.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
            e.push(k)
        });
        Gf(d, e)
    }

    function If(a, b, c) {
        if (bd(c))throw Error(Db(a, b, !1) + "is " + c.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
        if (!Df(c))throw Error(Db(a, b, !1) + "must be a valid Firebase priority (a string, finite number, server value, or null).");
    }

    function Jf(a, b, c) {
        if (!c || p(b))switch (b) {
            case "value":
            case "child_added":
            case "child_removed":
            case "child_changed":
            case "child_moved":
                break;
            default:
                throw Error(Db(a, 1, c) + 'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');
        }
    }

    function Kf(a, b) {
        if (p(b) && !Cf(b))throw Error(Db(a, 2, !0) + 'was an invalid key: "' + b + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');
    }

    function Lf(a, b) {
        if (!q(b) || 0 === b.length || Bf.test(b))throw Error(Db(a, 1, !1) + 'was an invalid path: "' + b + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');
    }

    function Mf(a, b) {
        if (".info" === J(b))throw Error(a + " failed: Can't modify data under /.info/");
    }

    function xf(a, b) {
        var c = b.path.toString(), d;
        !(d = !q(b.kc.host) || 0 === b.kc.host.length || !Cf(b.kc.pe)) && (d = 0 !== c.length) && (c && (c = c.replace(/^\/*\.info(\/|$)/, "/")), d = !(q(c) && 0 !== c.length && !Bf.test(c)));
        if (d)throw Error(Db(a, 1, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');
    };
    function V(a, b) {
        this.ua = a;
        this.ra = b
    }

    V.prototype.cancel = function (a) {
        y("Firebase.onDisconnect().cancel", 0, 1, arguments.length);
        A("Firebase.onDisconnect().cancel", 1, a, !0);
        var b = new Hb;
        this.ua.xd(this.ra, Ib(b, a));
        return b.sa
    };
    V.prototype.cancel = V.prototype.cancel;
    V.prototype.remove = function (a) {
        y("Firebase.onDisconnect().remove", 0, 1, arguments.length);
        Mf("Firebase.onDisconnect().remove", this.ra);
        A("Firebase.onDisconnect().remove", 1, a, !0);
        var b = new Hb;
        Nf(this.ua, this.ra, null, Ib(b, a));
        return b.sa
    };
    V.prototype.remove = V.prototype.remove;
    V.prototype.set = function (a, b) {
        y("Firebase.onDisconnect().set", 1, 2, arguments.length);
        Mf("Firebase.onDisconnect().set", this.ra);
        Ef("Firebase.onDisconnect().set", a, this.ra, !1);
        A("Firebase.onDisconnect().set", 2, b, !0);
        var c = new Hb;
        Nf(this.ua, this.ra, a, Ib(c, b));
        return c.sa
    };
    V.prototype.set = V.prototype.set;
    V.prototype.Kb = function (a, b, c) {
        y("Firebase.onDisconnect().setWithPriority", 2, 3, arguments.length);
        Mf("Firebase.onDisconnect().setWithPriority", this.ra);
        Ef("Firebase.onDisconnect().setWithPriority", a, this.ra, !1);
        If("Firebase.onDisconnect().setWithPriority", 2, b);
        A("Firebase.onDisconnect().setWithPriority", 3, c, !0);
        var d = new Hb;
        Of(this.ua, this.ra, a, b, Ib(d, c));
        return d.sa
    };
    V.prototype.setWithPriority = V.prototype.Kb;
    V.prototype.update = function (a, b) {
        y("Firebase.onDisconnect().update", 1, 2, arguments.length);
        Mf("Firebase.onDisconnect().update", this.ra);
        if (da(a)) {
            for (var c = {}, d = 0; d < a.length; ++d)c["" + d] = a[d];
            a = c;
            O("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
        }
        Hf("Firebase.onDisconnect().update", a, this.ra);
        A("Firebase.onDisconnect().update", 2, b, !0);
        c = new Hb;
        Pf(this.ua, this.ra, a, Ib(c, b));
        return c.sa
    };
    V.prototype.update = V.prototype.update;
    function Qf(a) {
        H(da(a) && 0 < a.length, "Requires a non-empty array");
        this.Kf = a;
        this.Ec = {}
    }

    Qf.prototype.Ge = function (a, b) {
        var c;
        c = this.Ec[a] || [];
        var d = c.length;
        if (0 < d) {
            for (var e = Array(d), f = 0; f < d; f++)e[f] = c[f];
            c = e
        } else c = [];
        for (d = 0; d < c.length; d++)c[d].Ke.apply(c[d].Pa, Array.prototype.slice.call(arguments, 1))
    };
    Qf.prototype.hc = function (a, b, c) {
        Rf(this, a);
        this.Ec[a] = this.Ec[a] || [];
        this.Ec[a].push({Ke: b, Pa: c});
        (a = this.Ye(a)) && b.apply(c, a)
    };
    Qf.prototype.Jc = function (a, b, c) {
        Rf(this, a);
        a = this.Ec[a] || [];
        for (var d = 0; d < a.length; d++)if (a[d].Ke === b && (!c || c === a[d].Pa)) {
            a.splice(d, 1);
            break
        }
    };
    function Rf(a, b) {
        H(Oa(a.Kf, function (a) {
            return a === b
        }), "Unknown event: " + b)
    };
    function Sf() {
        Qf.call(this, ["online"]);
        this.ic = !0;
        if ("undefined" !== typeof window && "undefined" !== typeof window.addEventListener && !Qb()) {
            var a = this;
            window.addEventListener("online", function () {
                a.ic || (a.ic = !0, a.Ge("online", !0))
            }, !1);
            window.addEventListener("offline", function () {
                a.ic && (a.ic = !1, a.Ge("online", !1))
            }, !1)
        }
    }

    ka(Sf, Qf);
    Sf.prototype.Ye = function (a) {
        H("online" === a, "Unknown event type: " + a);
        return [this.ic]
    };
    ba(Sf);
    function Tf() {
        Qf.call(this, ["visible"]);
        var a, b;
        "undefined" !== typeof document && "undefined" !== typeof document.addEventListener && ("undefined" !== typeof document.hidden ? (b = "visibilitychange", a = "hidden") : "undefined" !== typeof document.mozHidden ? (b = "mozvisibilitychange", a = "mozHidden") : "undefined" !== typeof document.msHidden ? (b = "msvisibilitychange", a = "msHidden") : "undefined" !== typeof document.webkitHidden && (b = "webkitvisibilitychange", a = "webkitHidden"));
        this.Nb = !0;
        if (b) {
            var c = this;
            document.addEventListener(b,
                function () {
                    var b = !document[a];
                    b !== c.Nb && (c.Nb = b, c.Ge("visible", b))
                }, !1)
        }
    }

    ka(Tf, Qf);
    Tf.prototype.Ye = function (a) {
        H("visible" === a, "Unknown event type: " + a);
        return [this.Nb]
    };
    ba(Tf);
    var Uf = function () {
        var a = 0, b = [];
        return function (c) {
            var d = c === a;
            a = c;
            for (var e = Array(8), f = 7; 0 <= f; f--)e[f] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c % 64), c = Math.floor(c / 64);
            H(0 === c, "Cannot push at time == 0");
            c = e.join("");
            if (d) {
                for (f = 11; 0 <= f && 63 === b[f]; f--)b[f] = 0;
                b[f]++
            } else for (f = 0; 12 > f; f++)b[f] = Math.floor(64 * Math.random());
            for (f = 0; 12 > f; f++)c += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);
            H(20 === c.length, "nextPushId: Length should be 20.");
            return c
        }
    }();

    function Vf(a, b) {
        this.Oa = a;
        this.ca = b ? b : Wf
    }

    g = Vf.prototype;
    g.Ra = function (a, b) {
        return new Vf(this.Oa, this.ca.Ra(a, b, this.Oa).Y(null, null, !1, null, null))
    };
    g.remove = function (a) {
        return new Vf(this.Oa, this.ca.remove(a, this.Oa).Y(null, null, !1, null, null))
    };
    g.get = function (a) {
        for (var b, c = this.ca; !c.e();) {
            b = this.Oa(a, c.key);
            if (0 === b)return c.value;
            0 > b ? c = c.left : 0 < b && (c = c.right)
        }
        return null
    };
    function Xf(a, b) {
        for (var c, d = a.ca, e = null; !d.e();) {
            c = a.Oa(b, d.key);
            if (0 === c) {
                if (d.left.e())return e ? e.key : null;
                for (d = d.left; !d.right.e();)d = d.right;
                return d.key
            }
            0 > c ? d = d.left : 0 < c && (e = d, d = d.right)
        }
        throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
    }

    g.e = function () {
        return this.ca.e()
    };
    g.count = function () {
        return this.ca.count()
    };
    g.Hc = function () {
        return this.ca.Hc()
    };
    g.fc = function () {
        return this.ca.fc()
    };
    g.ia = function (a) {
        return this.ca.ia(a)
    };
    g.Xb = function (a) {
        return new Yf(this.ca, null, this.Oa, !1, a)
    };
    g.Yb = function (a, b) {
        return new Yf(this.ca, a, this.Oa, !1, b)
    };
    g.$b = function (a, b) {
        return new Yf(this.ca, a, this.Oa, !0, b)
    };
    g.$e = function (a) {
        return new Yf(this.ca, null, this.Oa, !0, a)
    };
    function Yf(a, b, c, d, e) {
        this.Hd = e || null;
        this.le = d;
        this.Sa = [];
        for (e = 1; !a.e();)if (e = b ? c(a.key, b) : 1, d && (e *= -1), 0 > e)a = this.le ? a.left : a.right; else if (0 === e) {
            this.Sa.push(a);
            break
        } else this.Sa.push(a), a = this.le ? a.right : a.left
    }

    function R(a) {
        if (0 === a.Sa.length)return null;
        var b = a.Sa.pop(), c;
        c = a.Hd ? a.Hd(b.key, b.value) : {key: b.key, value: b.value};
        if (a.le)for (b = b.left; !b.e();)a.Sa.push(b), b = b.right; else for (b = b.right; !b.e();)a.Sa.push(b), b = b.left;
        return c
    }

    function Zf(a) {
        if (0 === a.Sa.length)return null;
        var b;
        b = a.Sa;
        b = b[b.length - 1];
        return a.Hd ? a.Hd(b.key, b.value) : {key: b.key, value: b.value}
    }

    function $f(a, b, c, d, e) {
        this.key = a;
        this.value = b;
        this.color = null != c ? c : !0;
        this.left = null != d ? d : Wf;
        this.right = null != e ? e : Wf
    }

    g = $f.prototype;
    g.Y = function (a, b, c, d, e) {
        return new $f(null != a ? a : this.key, null != b ? b : this.value, null != c ? c : this.color, null != d ? d : this.left, null != e ? e : this.right)
    };
    g.count = function () {
        return this.left.count() + 1 + this.right.count()
    };
    g.e = function () {
        return !1
    };
    g.ia = function (a) {
        return this.left.ia(a) || a(this.key, this.value) || this.right.ia(a)
    };
    function ag(a) {
        return a.left.e() ? a : ag(a.left)
    }

    g.Hc = function () {
        return ag(this).key
    };
    g.fc = function () {
        return this.right.e() ? this.key : this.right.fc()
    };
    g.Ra = function (a, b, c) {
        var d, e;
        e = this;
        d = c(a, e.key);
        e = 0 > d ? e.Y(null, null, null, e.left.Ra(a, b, c), null) : 0 === d ? e.Y(null, b, null, null, null) : e.Y(null, null, null, null, e.right.Ra(a, b, c));
        return bg(e)
    };
    function cg(a) {
        if (a.left.e())return Wf;
        a.left.fa() || a.left.left.fa() || (a = dg(a));
        a = a.Y(null, null, null, cg(a.left), null);
        return bg(a)
    }

    g.remove = function (a, b) {
        var c, d;
        c = this;
        if (0 > b(a, c.key))c.left.e() || c.left.fa() || c.left.left.fa() || (c = dg(c)), c = c.Y(null, null, null, c.left.remove(a, b), null); else {
            c.left.fa() && (c = eg(c));
            c.right.e() || c.right.fa() || c.right.left.fa() || (c = fg(c), c.left.left.fa() && (c = eg(c), c = fg(c)));
            if (0 === b(a, c.key)) {
                if (c.right.e())return Wf;
                d = ag(c.right);
                c = c.Y(d.key, d.value, null, null, cg(c.right))
            }
            c = c.Y(null, null, null, null, c.right.remove(a, b))
        }
        return bg(c)
    };
    g.fa = function () {
        return this.color
    };
    function bg(a) {
        a.right.fa() && !a.left.fa() && (a = gg(a));
        a.left.fa() && a.left.left.fa() && (a = eg(a));
        a.left.fa() && a.right.fa() && (a = fg(a));
        return a
    }

    function dg(a) {
        a = fg(a);
        a.right.left.fa() && (a = a.Y(null, null, null, null, eg(a.right)), a = gg(a), a = fg(a));
        return a
    }

    function gg(a) {
        return a.right.Y(null, null, a.color, a.Y(null, null, !0, null, a.right.left), null)
    }

    function eg(a) {
        return a.left.Y(null, null, a.color, null, a.Y(null, null, !0, a.left.right, null))
    }

    function fg(a) {
        return a.Y(null, null, !a.color, a.left.Y(null, null, !a.left.color, null, null), a.right.Y(null, null, !a.right.color, null, null))
    }

    function hg() {
    }

    g = hg.prototype;
    g.Y = function () {
        return this
    };
    g.Ra = function (a, b) {
        return new $f(a, b, null)
    };
    g.remove = function () {
        return this
    };
    g.count = function () {
        return 0
    };
    g.e = function () {
        return !0
    };
    g.ia = function () {
        return !1
    };
    g.Hc = function () {
        return null
    };
    g.fc = function () {
        return null
    };
    g.fa = function () {
        return !1
    };
    var Wf = new hg;

    function P(a, b, c) {
        this.m = a;
        (this.ba = b) && re(this.ba);
        a.e() && H(!this.ba || this.ba.e(), "An empty node cannot have a priority");
        this.zb = c;
        this.Eb = null
    }

    g = P.prototype;
    g.J = function () {
        return !1
    };
    g.C = function () {
        return this.ba || F
    };
    g.ga = function (a) {
        return this.m.e() ? this : new P(this.m, a, this.zb)
    };
    g.R = function (a) {
        if (".priority" === a)return this.C();
        a = this.m.get(a);
        return null === a ? F : a
    };
    g.Q = function (a) {
        var b = J(a);
        return null === b ? this : this.R(b).Q(D(a))
    };
    g.Fa = function (a) {
        return null !== this.m.get(a)
    };
    g.U = function (a, b) {
        H(b, "We should always be passing snapshot nodes");
        if (".priority" === a)return this.ga(b);
        var c = new K(a, b), d, e;
        b.e() ? (d = this.m.remove(a), c = Me(this.zb, c, this.m)) : (d = this.m.Ra(a, b), c = Ke(this.zb, c, this.m));
        e = d.e() ? F : this.ba;
        return new P(d, e, c)
    };
    g.F = function (a, b) {
        var c = J(a);
        if (null === c)return b;
        H(".priority" !== J(a) || 1 === $d(a), ".priority must be the last token in a path");
        var d = this.R(c).F(D(a), b);
        return this.U(c, d)
    };
    g.e = function () {
        return this.m.e()
    };
    g.Fb = function () {
        return this.m.count()
    };
    var ig = /^(0|[1-9]\d*)$/;
    g = P.prototype;
    g.H = function (a) {
        if (this.e())return null;
        var b = {}, c = 0, d = 0, e = !0;
        this.P(N, function (f, h) {
            b[f] = h.H(a);
            c++;
            e && ig.test(f) ? d = Math.max(d, Number(f)) : e = !1
        });
        if (!a && e && d < 2 * c) {
            var f = [], h;
            for (h in b)f[h] = b[h];
            return f
        }
        a && !this.C().e() && (b[".priority"] = this.C().H());
        return b
    };
    g.hash = function () {
        if (null === this.Eb) {
            var a = "";
            this.C().e() || (a += "priority:" + te(this.C().H()) + ":");
            this.P(N, function (b, c) {
                var d = c.hash();
                "" !== d && (a += ":" + b + ":" + d)
            });
            this.Eb = "" === a ? "" : Uc(a)
        }
        return this.Eb
    };
    g.Ze = function (a, b, c) {
        return (c = jg(this, c)) ? (a = Xf(c, new K(a, b))) ? a.name : null : Xf(this.m, a)
    };
    function pe(a, b) {
        var c;
        c = (c = jg(a, b)) ? (c = c.Hc()) && c.name : a.m.Hc();
        return c ? new K(c, a.m.get(c)) : null
    }

    function qe(a, b) {
        var c;
        c = (c = jg(a, b)) ? (c = c.fc()) && c.name : a.m.fc();
        return c ? new K(c, a.m.get(c)) : null
    }

    g.P = function (a, b) {
        var c = jg(this, a);
        return c ? c.ia(function (a) {
            return b(a.name, a.S)
        }) : this.m.ia(b)
    };
    g.Xb = function (a) {
        return this.Yb(a.Ic(), a)
    };
    g.Yb = function (a, b) {
        var c = jg(this, b);
        if (c)return c.Yb(a, function (a) {
            return a
        });
        for (var c = this.m.Yb(a.name, Jc), d = Zf(c); null != d && 0 > b.compare(d, a);)R(c), d = Zf(c);
        return c
    };
    g.$e = function (a) {
        return this.$b(a.Gc(), a)
    };
    g.$b = function (a, b) {
        var c = jg(this, b);
        if (c)return c.$b(a, function (a) {
            return a
        });
        for (var c = this.m.$b(a.name, Jc), d = Zf(c); null != d && 0 < b.compare(d, a);)R(c), d = Zf(c);
        return c
    };
    g.tc = function (a) {
        return this.e() ? a.e() ? 0 : -1 : a.J() || a.e() ? 1 : a === ye ? -1 : 0
    };
    g.ob = function (a) {
        if (a === ee || ua(this.zb.dc, a.toString()))return this;
        var b = this.zb, c = this.m;
        H(a !== ee, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
        for (var d = [], e = !1, c = c.Xb(Jc), f = R(c); f;)e = e || a.yc(f.S), d.push(f), f = R(c);
        d = e ? Le(d, oe(a)) : ve;
        e = a.toString();
        c = ya(b.dc);
        c[e] = a;
        a = ya(b.od);
        a[e] = d;
        return new P(this.m, this.ba, new Je(a, c))
    };
    g.zc = function (a) {
        return a === ee || ua(this.zb.dc, a.toString())
    };
    g.$ = function (a) {
        if (a === this)return !0;
        if (a.J())return !1;
        if (this.C().$(a.C()) && this.m.count() === a.m.count()) {
            var b = this.Xb(N);
            a = a.Xb(N);
            for (var c = R(b), d = R(a); c && d;) {
                if (c.name !== d.name || !c.S.$(d.S))return !1;
                c = R(b);
                d = R(a)
            }
            return null === c && null === d
        }
        return !1
    };
    function jg(a, b) {
        return b === ee ? null : a.zb.get(b.toString())
    }

    g.toString = function () {
        return B(this.H(!0))
    };
    function M(a, b) {
        if (null === a)return F;
        var c = null;
        "object" === typeof a && ".priority" in a ? c = a[".priority"] : "undefined" !== typeof b && (c = b);
        H(null === c || "string" === typeof c || "number" === typeof c || "object" === typeof c && ".sv" in c, "Invalid priority type found: " + typeof c);
        "object" === typeof a && ".value" in a && null !== a[".value"] && (a = a[".value"]);
        if ("object" !== typeof a || ".sv" in a)return new Qc(a, M(c));
        if (a instanceof Array) {
            var d = F, e = a;
            t(e, function (a, b) {
                if (Bb(e, b) && "." !== b.substring(0, 1)) {
                    var c = M(a);
                    if (c.J() || !c.e())d =
                        d.U(b, c)
                }
            });
            return d.ga(M(c))
        }
        var f = [], h = !1, k = a;
        Cb(k, function (a) {
            if ("string" !== typeof a || "." !== a.substring(0, 1)) {
                var b = M(k[a]);
                b.e() || (h = h || !b.C().e(), f.push(new K(a, b)))
            }
        });
        if (0 == f.length)return F;
        var m = Le(f, Gc, function (a) {
            return a.name
        }, Ic);
        if (h) {
            var l = Le(f, oe(N));
            return new P(m, M(c), new Je({".priority": l}, {".priority": N}))
        }
        return new P(m, M(c), Ne)
    }

    var kg = Math.log(2);

    function lg(a) {
        this.count = parseInt(Math.log(a + 1) / kg, 10);
        this.Re = this.count - 1;
        this.Lf = a + 1 & parseInt(Array(this.count + 1).join("1"), 2)
    }

    function mg(a) {
        var b = !(a.Lf & 1 << a.Re);
        a.Re--;
        return b
    }

    function Le(a, b, c, d) {
        function e(b, d) {
            var f = d - b;
            if (0 == f)return null;
            if (1 == f) {
                var l = a[b], u = c ? c(l) : l;
                return new $f(u, l.S, !1, null, null)
            }
            var l = parseInt(f / 2, 10) + b, f = e(b, l), z = e(l + 1, d), l = a[l], u = c ? c(l) : l;
            return new $f(u, l.S, !1, f, z)
        }

        a.sort(b);
        var f = function (b) {
            function d(b, h) {
                var k = u - b, z = u;
                u -= b;
                var z = e(k + 1, z), k = a[k], G = c ? c(k) : k, z = new $f(G, k.S, h, null, z);
                f ? f.left = z : l = z;
                f = z
            }

            for (var f = null, l = null, u = a.length, z = 0; z < b.count; ++z) {
                var G = mg(b), ud = Math.pow(2, b.count - (z + 1));
                G ? d(ud, !1) : (d(ud, !1), d(ud, !0))
            }
            return l
        }(new lg(a.length));
        return null !== f ? new Vf(d || b, f) : new Vf(d || b)
    }

    function te(a) {
        return "number" === typeof a ? "number:" + id(a) : "string:" + a
    }

    function re(a) {
        if (a.J()) {
            var b = a.H();
            H("string" === typeof b || "number" === typeof b || "object" === typeof b && Bb(b, ".sv"), "Priority must be a string or number.")
        } else H(a === ye || a.e(), "priority of unexpected type.");
        H(a === ye || a.C().e(), "Priority nodes can't have a priority of their own.")
    }

    var F = new P(new Vf(Ic), null, Ne);

    function ng() {
        P.call(this, new Vf(Ic), F, Ne)
    }

    ka(ng, P);
    g = ng.prototype;
    g.tc = function (a) {
        return a === this ? 0 : 1
    };
    g.$ = function (a) {
        return a === this
    };
    g.C = function () {
        return this
    };
    g.R = function () {
        return F
    };
    g.e = function () {
        return !1
    };
    var ye = new ng, we = new K("[MIN_NAME]", F), Ce = new K("[MAX_NAME]", ye);

    function W(a, b, c) {
        this.A = a;
        this.W = b;
        this.g = c
    }

    W.prototype.H = function () {
        y("Firebase.DataSnapshot.val", 0, 0, arguments.length);
        return this.A.H()
    };
    W.prototype.val = W.prototype.H;
    W.prototype.Ue = function () {
        y("Firebase.DataSnapshot.exportVal", 0, 0, arguments.length);
        return this.A.H(!0)
    };
    W.prototype.exportVal = W.prototype.Ue;
    W.prototype.Vf = function () {
        y("Firebase.DataSnapshot.exists", 0, 0, arguments.length);
        return !this.A.e()
    };
    W.prototype.exists = W.prototype.Vf;
    W.prototype.k = function (a) {
        y("Firebase.DataSnapshot.child", 0, 1, arguments.length);
        fa(a) && (a = String(a));
        Lf("Firebase.DataSnapshot.child", a);
        var b = new L(a), c = this.W.k(b);
        return new W(this.A.Q(b), c, N)
    };
    W.prototype.child = W.prototype.k;
    W.prototype.Fa = function (a) {
        y("Firebase.DataSnapshot.hasChild", 1, 1, arguments.length);
        Lf("Firebase.DataSnapshot.hasChild", a);
        var b = new L(a);
        return !this.A.Q(b).e()
    };
    W.prototype.hasChild = W.prototype.Fa;
    W.prototype.C = function () {
        y("Firebase.DataSnapshot.getPriority", 0, 0, arguments.length);
        return this.A.C().H()
    };
    W.prototype.getPriority = W.prototype.C;
    W.prototype.forEach = function (a) {
        y("Firebase.DataSnapshot.forEach", 1, 1, arguments.length);
        A("Firebase.DataSnapshot.forEach", 1, a, !1);
        if (this.A.J())return !1;
        var b = this;
        return !!this.A.P(this.g, function (c, d) {
            return a(new W(d, b.W.k(c), N))
        })
    };
    W.prototype.forEach = W.prototype.forEach;
    W.prototype.kd = function () {
        y("Firebase.DataSnapshot.hasChildren", 0, 0, arguments.length);
        return this.A.J() ? !1 : !this.A.e()
    };
    W.prototype.hasChildren = W.prototype.kd;
    W.prototype.getKey = function () {
        y("Firebase.DataSnapshot.key", 0, 0, arguments.length);
        return this.W.getKey()
    };
    kd(W.prototype, "key", W.prototype.getKey);
    W.prototype.Fb = function () {
        y("Firebase.DataSnapshot.numChildren", 0, 0, arguments.length);
        return this.A.Fb()
    };
    W.prototype.numChildren = W.prototype.Fb;
    W.prototype.xb = function () {
        y("Firebase.DataSnapshot.ref", 0, 0, arguments.length);
        return this.W
    };
    kd(W.prototype, "ref", W.prototype.xb);
    function Yd(a, b) {
        this.O = a;
        this.Ld = b
    }

    function Vd(a, b, c, d) {
        return new Yd(new zc(b, c, d), a.Ld)
    }

    function Zd(a) {
        return a.O.ea ? a.O.j() : null
    }

    Yd.prototype.w = function () {
        return this.Ld
    };
    function Ac(a) {
        return a.Ld.ea ? a.Ld.j() : null
    };
    function og(a, b) {
        this.W = a;
        var c = a.n, d = new fe(c.g), c = S(c) ? new fe(c.g) : c.ya ? new le(c) : new ge(c);
        this.of = new Pd(c);
        var e = b.w(), f = b.O, h = d.za(F, e.j(), null), k = c.za(F, f.j(), null);
        this.Na = new Yd(new zc(k, f.ea, c.Qa()), new zc(h, e.ea, d.Qa()));
        this.ab = [];
        this.Sf = new Kd(a)
    }

    function pg(a) {
        return a.W
    }

    g = og.prototype;
    g.w = function () {
        return this.Na.w().j()
    };
    g.jb = function (a) {
        var b = Ac(this.Na);
        return b && (S(this.W.n) || !a.e() && !b.R(J(a)).e()) ? b.Q(a) : null
    };
    g.e = function () {
        return 0 === this.ab.length
    };
    g.Ob = function (a) {
        this.ab.push(a)
    };
    g.mb = function (a, b) {
        var c = [];
        if (b) {
            H(null == a, "A cancel should cancel all event registrations.");
            var d = this.W.path;
            Ja(this.ab, function (a) {
                (a = a.Pe(b, d)) && c.push(a)
            })
        }
        if (a) {
            for (var e = [], f = 0; f < this.ab.length; ++f) {
                var h = this.ab[f];
                if (!h.matches(a))e.push(h); else if (a.af()) {
                    e = e.concat(this.ab.slice(f + 1));
                    break
                }
            }
            this.ab = e
        } else this.ab = [];
        return c
    };
    g.gb = function (a, b, c) {
        a.type === wd && null !== a.source.Ib && (H(Ac(this.Na), "We should always have a full cache before handling merges"), H(Zd(this.Na), "Missing event cache, even though we have a server cache"));
        var d = this.Na;
        a = this.of.gb(d, a, b, c);
        b = this.of;
        c = a.Sd;
        H(c.O.j().zc(b.V.g), "Event snap not indexed");
        H(c.w().j().zc(b.V.g), "Server snap not indexed");
        H(Dc(a.Sd.w()) || !Dc(d.w()), "Once a server snap is complete, it should never go back");
        this.Na = a.Sd;
        return qg(this, a.Mf, a.Sd.O.j(), null)
    };
    function rg(a, b) {
        var c = a.Na.O, d = [];
        c.j().J() || c.j().P(N, function (a, b) {
            d.push(new I("child_added", b, a))
        });
        c.ea && d.push(Bc(c.j()));
        return qg(a, d, c.j(), b)
    }

    function qg(a, b, c, d) {
        return Ld(a.Sf, b, c, d ? [d] : a.ab)
    };
    function sg(a, b, c) {
        this.Qb = a;
        this.sb = b;
        this.ub = c || null
    }

    g = sg.prototype;
    g.tf = function (a) {
        return "value" === a
    };
    g.createEvent = function (a, b) {
        var c = b.n.g;
        return new tc("value", this, new W(a.Ma, b.xb(), c))
    };
    g.Ub = function (a) {
        var b = this.ub;
        if ("cancel" === a.ge()) {
            H(this.sb, "Raising a cancel event on a listener with no cancel callback");
            var c = this.sb;
            return function () {
                c.call(b, a.error)
            }
        }
        var d = this.Qb;
        return function () {
            d.call(b, a.Md)
        }
    };
    g.Pe = function (a, b) {
        return this.sb ? new uc(this, a, b) : null
    };
    g.matches = function (a) {
        return a instanceof sg ? a.Qb && this.Qb ? a.Qb === this.Qb && a.ub === this.ub : !0 : !1
    };
    g.af = function () {
        return null !== this.Qb
    };
    function tg(a, b, c) {
        this.ha = a;
        this.sb = b;
        this.ub = c
    }

    g = tg.prototype;
    g.tf = function (a) {
        a = "children_added" === a ? "child_added" : a;
        return ("children_removed" === a ? "child_removed" : a) in this.ha
    };
    g.Pe = function (a, b) {
        return this.sb ? new uc(this, a, b) : null
    };
    g.createEvent = function (a, b) {
        H(null != a.Za, "Child events should have a childName.");
        var c = b.xb().k(a.Za);
        return new tc(a.type, this, new W(a.Ma, c, b.n.g), a.Dd)
    };
    g.Ub = function (a) {
        var b = this.ub;
        if ("cancel" === a.ge()) {
            H(this.sb, "Raising a cancel event on a listener with no cancel callback");
            var c = this.sb;
            return function () {
                c.call(b, a.error)
            }
        }
        var d = this.ha[a.gd];
        return function () {
            d.call(b, a.Md, a.Dd)
        }
    };
    g.matches = function (a) {
        if (a instanceof tg) {
            if (!this.ha || !a.ha)return !0;
            if (this.ub === a.ub) {
                var b = qa(a.ha);
                if (b === qa(this.ha)) {
                    if (1 === b) {
                        var b = ra(a.ha), c = ra(this.ha);
                        return c === b && (!a.ha[b] || !this.ha[c] || a.ha[b] === this.ha[c])
                    }
                    return pa(this.ha, function (b, c) {
                        return a.ha[c] === b
                    })
                }
            }
        }
        return !1
    };
    g.af = function () {
        return null !== this.ha
    };
    function X(a, b, c, d) {
        this.u = a;
        this.path = b;
        this.n = c;
        this.Oc = d
    }

    function ug(a) {
        var b = null, c = null;
        a.la && (b = ie(a));
        a.oa && (c = ke(a));
        if (a.g === ee) {
            if (a.la) {
                if ("[MIN_NAME]" != he(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
                if ("string" !== typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");
            }
            if (a.oa) {
                if ("[MAX_NAME]" != je(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
                if ("string" !== typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");
            }
        } else if (a.g === N) {
            if (null != b && !Df(b) || null != c && !Df(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");
        } else if (H(a.g instanceof xe || a.g === De, "unknown index type."), null != b && "object" === typeof b || null != c && "object" === typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
    }

    function vg(a) {
        if (a.la && a.oa && a.ya && (!a.ya || "" === a.oc))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");
    }

    function wg(a, b) {
        if (!0 === a.Oc)throw Error(b + ": You can't combine multiple orderBy calls.");
    }

    g = X.prototype;
    g.xb = function () {
        y("Query.ref", 0, 0, arguments.length);
        return new U(this.u, this.path)
    };
    g.hc = function (a, b, c, d) {
        y("Query.on", 2, 4, arguments.length);
        Jf("Query.on", a, !1);
        A("Query.on", 2, b, !1);
        var e = xg("Query.on", c, d);
        if ("value" === a)yg(this.u, this, new sg(b, e.cancel || null, e.Pa || null)); else {
            var f = {};
            f[a] = b;
            yg(this.u, this, new tg(f, e.cancel, e.Pa))
        }
        return b
    };
    g.Jc = function (a, b, c) {
        y("Query.off", 0, 3, arguments.length);
        Jf("Query.off", a, !0);
        A("Query.off", 2, b, !0);
        Eb("Query.off", 3, c);
        var d = null, e = null;
        "value" === a ? d = new sg(b || null, null, c || null) : a && (b && (e = {}, e[a] = b), d = new tg(e, null, c || null));
        e = this.u;
        d = ".info" === J(this.path) ? e.pd.mb(this, d) : e.K.mb(this, d);
        pc(e.da, this.path, d)
    };
    g.kg = function (a, b) {
        function c(k) {
            f && (f = !1, e.Jc(a, c), b && b.call(d.Pa, k), h.resolve(k))
        }

        y("Query.once", 1, 4, arguments.length);
        Jf("Query.once", a, !1);
        A("Query.once", 2, b, !0);
        var d = xg("Query.once", arguments[2], arguments[3]), e = this, f = !0, h = new Hb;
        Jb(h.sa);
        this.hc(a, c, function (b) {
            e.Jc(a, c);
            d.cancel && d.cancel.call(d.Pa, b);
            h.reject(b)
        });
        return h.sa
    };
    g.ne = function (a) {
        y("Query.limitToFirst", 1, 1, arguments.length);
        if (!fa(a) || Math.floor(a) !== a || 0 >= a)throw Error("Query.limitToFirst: First argument must be a positive integer.");
        if (this.n.ya)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
        return new X(this.u, this.path, this.n.ne(a), this.Oc)
    };
    g.oe = function (a) {
        y("Query.limitToLast", 1, 1, arguments.length);
        if (!fa(a) || Math.floor(a) !== a || 0 >= a)throw Error("Query.limitToLast: First argument must be a positive integer.");
        if (this.n.ya)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
        return new X(this.u, this.path, this.n.oe(a), this.Oc)
    };
    g.lg = function (a) {
        y("Query.orderByChild", 1, 1, arguments.length);
        if ("$key" === a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
        if ("$priority" === a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
        if ("$value" === a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
        Lf("Query.orderByChild", a);
        wg(this, "Query.orderByChild");
        var b = new L(a);
        if (b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
        b = new xe(b);
        b = He(this.n, b);
        ug(b);
        return new X(this.u, this.path, b, !0)
    };
    g.mg = function () {
        y("Query.orderByKey", 0, 0, arguments.length);
        wg(this, "Query.orderByKey");
        var a = He(this.n, ee);
        ug(a);
        return new X(this.u, this.path, a, !0)
    };
    g.ng = function () {
        y("Query.orderByPriority", 0, 0, arguments.length);
        wg(this, "Query.orderByPriority");
        var a = He(this.n, N);
        ug(a);
        return new X(this.u, this.path, a, !0)
    };
    g.og = function () {
        y("Query.orderByValue", 0, 0, arguments.length);
        wg(this, "Query.orderByValue");
        var a = He(this.n, De);
        ug(a);
        return new X(this.u, this.path, a, !0)
    };
    g.Nd = function (a, b) {
        y("Query.startAt", 0, 2, arguments.length);
        Ef("Query.startAt", a, this.path, !0);
        Kf("Query.startAt", b);
        var c = this.n.Nd(a, b);
        vg(c);
        ug(c);
        if (this.n.la)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
        p(a) || (b = a = null);
        return new X(this.u, this.path, c, this.Oc)
    };
    g.fd = function (a, b) {
        y("Query.endAt", 0, 2, arguments.length);
        Ef("Query.endAt", a, this.path, !0);
        Kf("Query.endAt", b);
        var c = this.n.fd(a, b);
        vg(c);
        ug(c);
        if (this.n.oa)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
        return new X(this.u, this.path, c, this.Oc)
    };
    g.Rf = function (a, b) {
        y("Query.equalTo", 1, 2, arguments.length);
        Ef("Query.equalTo", a, this.path, !1);
        Kf("Query.equalTo", b);
        if (this.n.la)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");
        if (this.n.oa)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
        return this.Nd(a, b).fd(a, b)
    };
    g.toString = function () {
        y("Query.toString", 0, 0, arguments.length);
        for (var a = this.path, b = "", c = a.Z; c < a.o.length; c++)"" !== a.o[c] && (b += "/" + encodeURIComponent(String(a.o[c])));
        return this.u.toString() + (b || "/")
    };
    g.ka = function () {
        var a = fd(Ie(this.n));
        return "{}" === a ? "default" : a
    };
    g.isEqual = function (a) {
        y("Query.isEqual", 1, 1, arguments.length);
        if (!(a instanceof X))throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");
        var b = this.u === a.u, c = this.path.$(a.path), d = this.ka() === a.ka();
        return b && c && d
    };
    function xg(a, b, c) {
        var d = {cancel: null, Pa: null};
        if (b && c)d.cancel = b, A(a, 3, d.cancel, !0), d.Pa = c, Eb(a, 4, d.Pa); else if (b)if ("object" === typeof b && null !== b)d.Pa = b; else if ("function" === typeof b)d.cancel = b; else throw Error(Db(a, 3, !0) + " must either be a cancel callback or a context object.");
        return d
    }

    X.prototype.on = X.prototype.hc;
    X.prototype.off = X.prototype.Jc;
    X.prototype.once = X.prototype.kg;
    X.prototype.limitToFirst = X.prototype.ne;
    X.prototype.limitToLast = X.prototype.oe;
    X.prototype.orderByChild = X.prototype.lg;
    X.prototype.orderByKey = X.prototype.mg;
    X.prototype.orderByPriority = X.prototype.ng;
    X.prototype.orderByValue = X.prototype.og;
    X.prototype.startAt = X.prototype.Nd;
    X.prototype.endAt = X.prototype.fd;
    X.prototype.equalTo = X.prototype.Rf;
    X.prototype.toString = X.prototype.toString;
    X.prototype.isEqual = X.prototype.isEqual;
    kd(X.prototype, "ref", X.prototype.xb);
    function zg(a, b) {
        this.value = a;
        this.children = b || Ag
    }

    var Ag = new Vf(function (a, b) {
        return a === b ? 0 : a < b ? -1 : 1
    });

    function Bg(a) {
        var b = Q;
        t(a, function (a, d) {
            b = b.set(new L(d), a)
        });
        return b
    }

    g = zg.prototype;
    g.e = function () {
        return null === this.value && this.children.e()
    };
    function Cg(a, b, c) {
        if (null != a.value && c(a.value))return {path: C, value: a.value};
        if (b.e())return null;
        var d = J(b);
        a = a.children.get(d);
        return null !== a ? (b = Cg(a, D(b), c), null != b ? {path: (new L(d)).k(b.path), value: b.value} : null) : null
    }

    function Dg(a, b) {
        return Cg(a, b, function () {
            return !0
        })
    }

    g.subtree = function (a) {
        if (a.e())return this;
        var b = this.children.get(J(a));
        return null !== b ? b.subtree(D(a)) : Q
    };
    g.set = function (a, b) {
        if (a.e())return new zg(b, this.children);
        var c = J(a), d = (this.children.get(c) || Q).set(D(a), b), c = this.children.Ra(c, d);
        return new zg(this.value, c)
    };
    g.remove = function (a) {
        if (a.e())return this.children.e() ? Q : new zg(null, this.children);
        var b = J(a), c = this.children.get(b);
        return c ? (a = c.remove(D(a)), b = a.e() ? this.children.remove(b) : this.children.Ra(b, a), null === this.value && b.e() ? Q : new zg(this.value, b)) : this
    };
    g.get = function (a) {
        if (a.e())return this.value;
        var b = this.children.get(J(a));
        return b ? b.get(D(a)) : null
    };
    function de(a, b, c) {
        if (b.e())return c;
        var d = J(b);
        b = de(a.children.get(d) || Q, D(b), c);
        d = b.e() ? a.children.remove(d) : a.children.Ra(d, b);
        return new zg(a.value, d)
    }

    function Eg(a, b) {
        return Fg(a, C, b)
    }

    function Fg(a, b, c) {
        var d = {};
        a.children.ia(function (a, f) {
            d[a] = Fg(f, b.k(a), c)
        });
        return c(b, a.value, d)
    }

    function Gg(a, b, c) {
        return Hg(a, b, C, c)
    }

    function Hg(a, b, c, d) {
        var e = a.value ? d(c, a.value) : !1;
        if (e)return e;
        if (b.e())return null;
        e = J(b);
        return (a = a.children.get(e)) ? Hg(a, D(b), c.k(e), d) : null
    }

    function Ig(a, b, c) {
        Jg(a, b, C, c)
    }

    function Jg(a, b, c, d) {
        if (b.e())return a;
        a.value && d(c, a.value);
        var e = J(b);
        return (a = a.children.get(e)) ? Jg(a, D(b), c.k(e), d) : Q
    }

    function be(a, b) {
        Kg(a, C, b)
    }

    function Kg(a, b, c) {
        a.children.ia(function (a, e) {
            Kg(e, b.k(a), c)
        });
        a.value && c(b, a.value)
    }

    function Lg(a, b) {
        a.children.ia(function (a, d) {
            d.value && b(a, d.value)
        })
    }

    var Q = new zg(null);
    zg.prototype.toString = function () {
        var a = {};
        be(this, function (b, c) {
            a[b.toString()] = c.toString()
        });
        return B(a)
    };
    function Mg(a, b, c) {
        this.type = Ud;
        this.source = Ng;
        this.path = a;
        this.Pb = b;
        this.Id = c
    }

    Mg.prototype.Nc = function (a) {
        if (this.path.e()) {
            if (null != this.Pb.value)return H(this.Pb.children.e(), "affectedTree should not have overlapping affected paths."), this;
            a = this.Pb.subtree(new L(a));
            return new Mg(C, a, this.Id)
        }
        H(J(this.path) === a, "operationForChild called for unrelated child.");
        return new Mg(D(this.path), this.Pb, this.Id)
    };
    Mg.prototype.toString = function () {
        return "Operation(" + this.path + ": " + this.source.toString() + " ack write revert=" + this.Id + " affectedTree=" + this.Pb + ")"
    };
    var ac = 0, wd = 1, Ud = 2, cc = 3;

    function Og(a, b, c, d) {
        this.ee = a;
        this.We = b;
        this.Ib = c;
        this.Ee = d;
        H(!d || b, "Tagged queries must be from server.")
    }

    var Ng = new Og(!0, !1, null, !1), Pg = new Og(!1, !0, null, !1);
    Og.prototype.toString = function () {
        return this.ee ? "user" : this.Ee ? "server(queryID=" + this.Ib + ")" : "server"
    };
    function Qg(a) {
        this.X = a
    }

    var Rg = new Qg(new zg(null));

    function Sg(a, b, c) {
        if (b.e())return new Qg(new zg(c));
        var d = Dg(a.X, b);
        if (null != d) {
            var e = d.path, d = d.value;
            b = T(e, b);
            d = d.F(b, c);
            return new Qg(a.X.set(e, d))
        }
        a = de(a.X, b, new zg(c));
        return new Qg(a)
    }

    function Tg(a, b, c) {
        var d = a;
        Cb(c, function (a, c) {
            d = Sg(d, b.k(a), c)
        });
        return d
    }

    Qg.prototype.Ed = function (a) {
        if (a.e())return Rg;
        a = de(this.X, a, Q);
        return new Qg(a)
    };
    function Ug(a, b) {
        var c = Dg(a.X, b);
        return null != c ? a.X.get(c.path).Q(T(c.path, b)) : null
    }

    function Vg(a) {
        var b = [], c = a.X.value;
        null != c ? c.J() || c.P(N, function (a, c) {
            b.push(new K(a, c))
        }) : a.X.children.ia(function (a, c) {
            null != c.value && b.push(new K(a, c.value))
        });
        return b
    }

    function Wg(a, b) {
        if (b.e())return a;
        var c = Ug(a, b);
        return null != c ? new Qg(new zg(c)) : new Qg(a.X.subtree(b))
    }

    Qg.prototype.e = function () {
        return this.X.e()
    };
    Qg.prototype.apply = function (a) {
        return Xg(C, this.X, a)
    };
    function Xg(a, b, c) {
        if (null != b.value)return c.F(a, b.value);
        var d = null;
        b.children.ia(function (b, f) {
            ".priority" === b ? (H(null !== f.value, "Priority writes must always be leaf nodes"), d = f.value) : c = Xg(a.k(b), f, c)
        });
        c.Q(a).e() || null === d || (c = c.F(a.k(".priority"), d));
        return c
    };
    function Yg() {
        this.Aa = {}
    }

    g = Yg.prototype;
    g.e = function () {
        return xa(this.Aa)
    };
    g.gb = function (a, b, c) {
        var d = a.source.Ib;
        if (null !== d)return d = x(this.Aa, d), H(null != d, "SyncTree gave us an op for an invalid query."), d.gb(a, b, c);
        var e = [];
        t(this.Aa, function (d) {
            e = e.concat(d.gb(a, b, c))
        });
        return e
    };
    g.Ob = function (a, b, c, d, e) {
        var f = a.ka(), h = x(this.Aa, f);
        if (!h) {
            var h = c.Ba(e ? d : null), k = !1;
            h ? k = !0 : (h = d instanceof P ? c.sc(d) : F, k = !1);
            h = new og(a, new Yd(new zc(h, k, !1), new zc(d, e, !1)));
            this.Aa[f] = h
        }
        h.Ob(b);
        return rg(h, b)
    };
    g.mb = function (a, b, c) {
        var d = a.ka(), e = [], f = [], h = null != Zg(this);
        if ("default" === d) {
            var k = this;
            t(this.Aa, function (a, d) {
                f = f.concat(a.mb(b, c));
                a.e() && (delete k.Aa[d], S(a.W.n) || e.push(a.W))
            })
        } else {
            var m = x(this.Aa, d);
            m && (f = f.concat(m.mb(b, c)), m.e() && (delete this.Aa[d], S(m.W.n) || e.push(m.W)))
        }
        h && null == Zg(this) && e.push(new U(a.u, a.path));
        return {sg: e, Tf: f}
    };
    function $g(a) {
        return Ka(sa(a.Aa), function (a) {
            return !S(a.W.n)
        })
    }

    g.jb = function (a) {
        var b = null;
        t(this.Aa, function (c) {
            b = b || c.jb(a)
        });
        return b
    };
    function ah(a, b) {
        if (S(b.n))return Zg(a);
        var c = b.ka();
        return x(a.Aa, c)
    }

    function Zg(a) {
        return wa(a.Aa, function (a) {
                return S(a.W.n)
            }) || null
    };
    function bh() {
        this.T = Rg;
        this.ma = [];
        this.Cc = -1
    }

    function ch(a, b) {
        for (var c = 0; c < a.ma.length; c++) {
            var d = a.ma[c];
            if (d.Zc === b)return d
        }
        return null
    }

    g = bh.prototype;
    g.Ed = function (a) {
        var b = Pa(this.ma, function (b) {
            return b.Zc === a
        });
        H(0 <= b, "removeWrite called with nonexistent writeId.");
        var c = this.ma[b];
        this.ma.splice(b, 1);
        for (var d = c.visible, e = !1, f = this.ma.length - 1; d && 0 <= f;) {
            var h = this.ma[f];
            h.visible && (f >= b && dh(h, c.path) ? d = !1 : c.path.contains(h.path) && (e = !0));
            f--
        }
        if (d) {
            if (e)this.T = eh(this.ma, fh, C), this.Cc = 0 < this.ma.length ? this.ma[this.ma.length - 1].Zc : -1; else if (c.Ja)this.T = this.T.Ed(c.path); else {
                var k = this;
                t(c.children, function (a, b) {
                    k.T = k.T.Ed(c.path.k(b))
                })
            }
            return !0
        }
        return !1
    };
    g.Ba = function (a, b, c, d) {
        if (c || d) {
            var e = Wg(this.T, a);
            return !d && e.e() ? b : d || null != b || null != Ug(e, C) ? (e = eh(this.ma, function (b) {
                return (b.visible || d) && (!c || !(0 <= Ia(c, b.Zc))) && (b.path.contains(a) || a.contains(b.path))
            }, a), b = b || F, e.apply(b)) : null
        }
        e = Ug(this.T, a);
        if (null != e)return e;
        e = Wg(this.T, a);
        return e.e() ? b : null != b || null != Ug(e, C) ? (b = b || F, e.apply(b)) : null
    };
    g.sc = function (a, b) {
        var c = F, d = Ug(this.T, a);
        if (d)d.J() || d.P(N, function (a, b) {
            c = c.U(a, b)
        }); else if (b) {
            var e = Wg(this.T, a);
            b.P(N, function (a, b) {
                var d = Wg(e, new L(a)).apply(b);
                c = c.U(a, d)
            });
            Ja(Vg(e), function (a) {
                c = c.U(a.name, a.S)
            })
        } else e = Wg(this.T, a), Ja(Vg(e), function (a) {
            c = c.U(a.name, a.S)
        });
        return c
    };
    g.$c = function (a, b, c, d) {
        H(c || d, "Either existingEventSnap or existingServerSnap must exist");
        a = a.k(b);
        if (null != Ug(this.T, a))return null;
        a = Wg(this.T, a);
        return a.e() ? d.Q(b) : a.apply(d.Q(b))
    };
    g.rc = function (a, b, c) {
        a = a.k(b);
        var d = Ug(this.T, a);
        return null != d ? d : yc(c, b) ? Wg(this.T, a).apply(c.j().R(b)) : null
    };
    g.mc = function (a) {
        return Ug(this.T, a)
    };
    g.Xd = function (a, b, c, d, e, f) {
        var h;
        a = Wg(this.T, a);
        h = Ug(a, C);
        if (null == h)if (null != b)h = a.apply(b); else return [];
        h = h.ob(f);
        if (h.e() || h.J())return [];
        b = [];
        a = oe(f);
        e = e ? h.$b(c, f) : h.Yb(c, f);
        for (f = R(e); f && b.length < d;)0 !== a(f, c) && b.push(f), f = R(e);
        return b
    };
    function dh(a, b) {
        return a.Ja ? a.path.contains(b) : !!va(a.children, function (c, d) {
            return a.path.k(d).contains(b)
        })
    }

    function fh(a) {
        return a.visible
    }

    function eh(a, b, c) {
        for (var d = Rg, e = 0; e < a.length; ++e) {
            var f = a[e];
            if (b(f)) {
                var h = f.path;
                if (f.Ja)c.contains(h) ? (h = T(c, h), d = Sg(d, h, f.Ja)) : h.contains(c) && (h = T(h, c), d = Sg(d, C, f.Ja.Q(h))); else if (f.children)if (c.contains(h))h = T(c, h), d = Tg(d, h, f.children); else {
                    if (h.contains(c))if (h = T(h, c), h.e())d = Tg(d, C, f.children); else if (f = x(f.children, J(h)))f = f.Q(D(h)), d = Sg(d, C, f)
                } else throw Sc("WriteRecord should have .snap or .children");
            }
        }
        return d
    }

    function gh(a, b) {
        this.Mb = a;
        this.X = b
    }

    g = gh.prototype;
    g.Ba = function (a, b, c) {
        return this.X.Ba(this.Mb, a, b, c)
    };
    g.sc = function (a) {
        return this.X.sc(this.Mb, a)
    };
    g.$c = function (a, b, c) {
        return this.X.$c(this.Mb, a, b, c)
    };
    g.mc = function (a) {
        return this.X.mc(this.Mb.k(a))
    };
    g.Xd = function (a, b, c, d, e) {
        return this.X.Xd(this.Mb, a, b, c, d, e)
    };
    g.rc = function (a, b) {
        return this.X.rc(this.Mb, a, b)
    };
    g.k = function (a) {
        return new gh(this.Mb.k(a), this.X)
    };
    function hh() {
        this.children = {};
        this.ad = 0;
        this.value = null
    }

    function ih(a, b, c) {
        this.ud = a ? a : "";
        this.Ha = b ? b : null;
        this.A = c ? c : new hh
    }

    function jh(a, b) {
        for (var c = b instanceof L ? b : new L(b), d = a, e; null !== (e = J(c));)d = new ih(e, d, x(d.A.children, e) || new hh), c = D(c);
        return d
    }

    g = ih.prototype;
    g.Ea = function () {
        return this.A.value
    };
    function kh(a, b) {
        H("undefined" !== typeof b, "Cannot set value to undefined");
        a.A.value = b;
        lh(a)
    }

    g.clear = function () {
        this.A.value = null;
        this.A.children = {};
        this.A.ad = 0;
        lh(this)
    };
    g.kd = function () {
        return 0 < this.A.ad
    };
    g.e = function () {
        return null === this.Ea() && !this.kd()
    };
    g.P = function (a) {
        var b = this;
        t(this.A.children, function (c, d) {
            a(new ih(d, b, c))
        })
    };
    function mh(a, b, c, d) {
        c && !d && b(a);
        a.P(function (a) {
            mh(a, b, !0, d)
        });
        c && d && b(a)
    }

    function nh(a, b) {
        for (var c = a.parent(); null !== c && !b(c);)c = c.parent()
    }

    g.path = function () {
        return new L(null === this.Ha ? this.ud : this.Ha.path() + "/" + this.ud)
    };
    g.name = function () {
        return this.ud
    };
    g.parent = function () {
        return this.Ha
    };
    function lh(a) {
        if (null !== a.Ha) {
            var b = a.Ha, c = a.ud, d = a.e(), e = Bb(b.A.children, c);
            d && e ? (delete b.A.children[c], b.A.ad--, lh(b)) : d || e || (b.A.children[c] = a.A, b.A.ad++, lh(b))
        }
    };
    function oh(a, b, c, d, e, f) {
        this.id = ph++;
        this.f = Yc("p:" + this.id + ":");
        this.qd = {};
        this.aa = {};
        this.qa = [];
        this.Pc = 0;
        this.Lc = [];
        this.na = !1;
        this.Va = 1E3;
        this.td = 3E5;
        this.Hb = b;
        this.Kc = c;
        this.ue = d;
        this.M = a;
        this.pb = this.Ia = this.Db = this.ze = null;
        this.Vd = e;
        this.de = !1;
        this.ke = 0;
        if (f)throw Error("Auth override specified in options, but not supported on non Node.js platforms");
        this.Je = f || null;
        this.vb = null;
        this.Nb = !1;
        this.Gd = {};
        this.tg = 0;
        this.Ve = !0;
        this.Bc = this.me = null;
        qh(this, 0);
        Tf.Wb().hc("visible", this.jg, this);
        -1 ===
        a.host.indexOf("fblocal") && Sf.Wb().hc("online", this.ig, this)
    }

    var ph = 0, rh = 0;
    g = oh.prototype;
    g.va = function (a, b, c) {
        var d = ++this.tg;
        a = {r: d, a: a, b: b};
        this.f(B(a));
        H(this.na, "sendRequest call when we're not connected not allowed.");
        this.Ia.va(a);
        c && (this.Gd[d] = c)
    };
    g.df = function (a, b, c, d) {
        var e = a.ka(), f = a.path.toString();
        this.f("Listen called for " + f + " " + e);
        this.aa[f] = this.aa[f] || {};
        H(rd(a.n) || !S(a.n), "listen() called for non-default but complete query");
        H(!this.aa[f][e], "listen() called twice for same path/queryId.");
        a = {G: d, ld: b, pg: a, tag: c};
        this.aa[f][e] = a;
        this.na && sh(this, a)
    };
    function sh(a, b) {
        var c = b.pg, d = c.path.toString(), e = c.ka();
        a.f("Listen on " + d + " for " + e);
        var f = {p: d};
        b.tag && (f.q = Ie(c.n), f.t = b.tag);
        f.h = b.ld();
        a.va("q", f, function (f) {
            var k = f.d, m = f.s;
            if (k && "object" === typeof k && Bb(k, "w")) {
                var l = x(k, "w");
                da(l) && 0 <= Ia(l, "no_index") && O("Using an unspecified index. Consider adding " + ('".indexOn": "' + c.n.g.toString() + '"') + " at " + c.path.toString() + " to your security rules for better performance")
            }
            (a.aa[d] && a.aa[d][e]) === b && (a.f("listen response", f), "ok" !== m && th(a, d, e), b.G &&
            b.G(m, k))
        })
    }

    g.qf = function (a) {
        this.pb = a;
        this.f("Auth token refreshed");
        this.pb ? uh(this) : this.na && this.va("unauth", {}, function () {
        });
        if (a && 40 === a.length || od(a))this.f("Admin auth credential detected.  Reducing max reconnect time."), this.td = 3E4
    };
    function uh(a) {
        if (a.na && a.pb) {
            var b = a.pb, c = nd(b) ? "auth" : "gauth", d = {cred: b};
            a.Je && (d.authvar = a.Je);
            a.va(c, d, function (c) {
                var d = c.s;
                c = c.d || "error";
                a.pb === b && ("ok" === d ? a.ke = 0 : vh(a, d, c))
            })
        }
    }

    g.Ef = function (a, b) {
        var c = a.path.toString(), d = a.ka();
        this.f("Unlisten called for " + c + " " + d);
        H(rd(a.n) || !S(a.n), "unlisten() called for non-default but complete query");
        if (th(this, c, d) && this.na) {
            var e = Ie(a.n);
            this.f("Unlisten on " + c + " for " + d);
            c = {p: c};
            b && (c.q = e, c.t = b);
            this.va("n", c)
        }
    };
    g.re = function (a, b, c) {
        this.na ? wh(this, "o", a, b, c) : this.Lc.push({we: a, action: "o", data: b, G: c})
    };
    g.gf = function (a, b, c) {
        this.na ? wh(this, "om", a, b, c) : this.Lc.push({we: a, action: "om", data: b, G: c})
    };
    g.xd = function (a, b) {
        this.na ? wh(this, "oc", a, null, b) : this.Lc.push({we: a, action: "oc", data: null, G: b})
    };
    function wh(a, b, c, d, e) {
        c = {p: c, d: d};
        a.f("onDisconnect " + b, c);
        a.va(b, c, function (a) {
            e && setTimeout(function () {
                e(a.s, a.d)
            }, Math.floor(0))
        })
    }

    g.put = function (a, b, c, d) {
        xh(this, "p", a, b, c, d)
    };
    g.ef = function (a, b, c, d) {
        xh(this, "m", a, b, c, d)
    };
    function xh(a, b, c, d, e, f) {
        d = {p: c, d: d};
        p(f) && (d.h = f);
        a.qa.push({action: b, sf: d, G: e});
        a.Pc++;
        b = a.qa.length - 1;
        a.na ? yh(a, b) : a.f("Buffering put: " + c)
    }

    function yh(a, b) {
        var c = a.qa[b].action, d = a.qa[b].sf, e = a.qa[b].G;
        a.qa[b].qg = a.na;
        a.va(c, d, function (d) {
            a.f(c + " response", d);
            delete a.qa[b];
            a.Pc--;
            0 === a.Pc && (a.qa = []);
            e && e(d.s, d.d)
        })
    }

    g.ye = function (a) {
        this.na && (a = {c: a}, this.f("reportStats", a), this.va("s", a, function (a) {
            "ok" !== a.s && this.f("reportStats", "Error sending stats: " + a.d)
        }))
    };
    g.wd = function (a) {
        if ("r" in a) {
            this.f("from server: " + B(a));
            var b = a.r, c = this.Gd[b];
            c && (delete this.Gd[b], c(a.b))
        } else {
            if ("error" in a)throw"A server-side error has occurred: " + a.error;
            "a" in a && (b = a.a, a = a.b, this.f("handleServerMessage", b, a), "d" === b ? this.Hb(a.p, a.d, !1, a.t) : "m" === b ? this.Hb(a.p, a.d, !0, a.t) : "c" === b ? zh(this, a.p, a.q) : "ac" === b ? vh(this, a.s, a.d) : "sd" === b ? this.ze ? this.ze(a) : "msg" in a && "undefined" !== typeof console && console.log("FIREBASE: " + a.msg.replace("\n", "\nFIREBASE: ")) : Zc("Unrecognized action received from server: " +
                B(b) + "\nAre you using the latest client?"))
        }
    };
    g.Mc = function (a, b) {
        this.f("connection ready");
        this.na = !0;
        this.Bc = (new Date).getTime();
        this.ue({serverTimeOffset: a - (new Date).getTime()});
        this.Db = b;
        if (this.Ve) {
            var c = {};
            c["sdk.js." + firebase.SDK_VERSION.replace(/\./g, "-")] = 1;
            Qb() ? c["framework.cordova"] = 1 : "object" === typeof navigator && "ReactNative" === navigator.product && (c["framework.reactnative"] = 1);
            this.ye(c)
        }
        Ah(this);
        this.Ve = !1;
        this.Kc(!0)
    };
    function qh(a, b) {
        H(!a.Ia, "Scheduling a connect when we're already connected/ing?");
        a.vb && clearTimeout(a.vb);
        a.vb = setTimeout(function () {
            a.vb = null;
            Bh(a)
        }, Math.floor(b))
    }

    g.jg = function (a) {
        a && !this.Nb && this.Va === this.td && (this.f("Window became visible.  Reducing delay."), this.Va = 1E3, this.Ia || qh(this, 0));
        this.Nb = a
    };
    g.ig = function (a) {
        a ? (this.f("Browser went online."), this.Va = 1E3, this.Ia || qh(this, 0)) : (this.f("Browser went offline.  Killing connection."), this.Ia && this.Ia.close())
    };
    g.jf = function () {
        this.f("data client disconnected");
        this.na = !1;
        this.Ia = null;
        for (var a = 0; a < this.qa.length; a++) {
            var b = this.qa[a];
            b && "h" in b.sf && b.qg && (b.G && b.G("disconnect"), delete this.qa[a], this.Pc--)
        }
        0 === this.Pc && (this.qa = []);
        this.Gd = {};
        Ch(this) && (this.Nb ? this.Bc && (3E4 < (new Date).getTime() - this.Bc && (this.Va = 1E3), this.Bc = null) : (this.f("Window isn't visible.  Delaying reconnect."), this.Va = this.td, this.me = (new Date).getTime()), a = Math.max(0, this.Va - ((new Date).getTime() - this.me)), a *= Math.random(), this.f("Trying to reconnect in " +
            a + "ms"), qh(this, a), this.Va = Math.min(this.td, 1.3 * this.Va));
        this.Kc(!1)
    };
    function Bh(a) {
        if (Ch(a)) {
            a.f("Making a connection attempt");
            a.me = (new Date).getTime();
            a.Bc = null;
            var b = r(a.wd, a), c = r(a.Mc, a), d = r(a.jf, a), e = a.id + ":" + rh++, f = a.Db, h = !1, k = null, m = function () {
                k ? k.close() : (h = !0, d())
            };
            a.Ia = {
                close: m, va: function (a) {
                    H(k, "sendRequest call when we're not connected not allowed.");
                    k.va(a)
                }
            };
            var l = a.de;
            a.de = !1;
            a.Vd.getToken(l).then(function (l) {
                h ? E("getToken() completed but was canceled") : (E("getToken() completed. Creating connection."), a.pb = l && l.accessToken, k = new bf(e, a.M, b, c, d, function (b) {
                    O(b +
                        " (" + a.M.toString() + ")");
                    a.eb("server_kill")
                }, f))
            }).then(null, function (b) {
                a.f("Failed to get token: " + b);
                h || m()
            })
        }
    }

    g.eb = function (a) {
        E("Interrupting connection for reason: " + a);
        this.qd[a] = !0;
        this.Ia ? this.Ia.close() : (this.vb && (clearTimeout(this.vb), this.vb = null), this.na && this.jf())
    };
    g.lc = function (a) {
        E("Resuming connection for reason: " + a);
        delete this.qd[a];
        xa(this.qd) && (this.Va = 1E3, this.Ia || qh(this, 0))
    };
    function zh(a, b, c) {
        c = c ? La(c, function (a) {
            return fd(a)
        }).join("$") : "default";
        (a = th(a, b, c)) && a.G && a.G("permission_denied")
    }

    function th(a, b, c) {
        b = (new L(b)).toString();
        var d;
        p(a.aa[b]) ? (d = a.aa[b][c], delete a.aa[b][c], 0 === qa(a.aa[b]) && delete a.aa[b]) : d = void 0;
        return d
    }

    function vh(a, b, c) {
        E("Auth token revoked: " + b + "/" + c);
        a.pb = null;
        a.de = !0;
        a.Ia.close();
        "invalid_token" === b && (a.ke++, 3 <= a.ke && (a.Va = 3E4, O("Provided authentication credentials are invalid. This usually indicates your FirebaseApp instance was not initialized correctly. Make sure your apiKey and databaseURL match the values provided for your app at https://console.firebase.google.com/, or if you're using a service account, make sure it's authorized to access the specified databaseURL and is from the correct project.")))
    }

    function Ah(a) {
        uh(a);
        t(a.aa, function (b) {
            t(b, function (b) {
                sh(a, b)
            })
        });
        for (var b = 0; b < a.qa.length; b++)a.qa[b] && yh(a, b);
        for (; a.Lc.length;)b = a.Lc.shift(), wh(a, b.action, b.we, b.data, b.G)
    }

    function Ch(a) {
        var b;
        b = Sf.Wb().ic;
        return xa(a.qd) && b
    };
    var Y = {
        Xf: function () {
            Re = Ed = !0
        }
    };
    Y.forceLongPolling = Y.Xf;
    Y.Yf = function () {
        Se = !0
    };
    Y.forceWebSockets = Y.Yf;
    Y.dg = function () {
        return Dd.isAvailable()
    };
    Y.isWebSocketsAvailable = Y.dg;
    Y.wg = function (a, b) {
        a.u.Ua.ze = b
    };
    Y.setSecurityDebugCallback = Y.wg;
    Y.Be = function (a, b) {
        a.u.Be(b)
    };
    Y.stats = Y.Be;
    Y.Ce = function (a, b) {
        a.u.Ce(b)
    };
    Y.statsIncrementCounter = Y.Ce;
    Y.ed = function (a) {
        return a.u.ed
    };
    Y.dataUpdateCount = Y.ed;
    Y.cg = function (a, b) {
        a.u.je = b
    };
    Y.interceptServerData = Y.cg;
    function Dh(a) {
        this.xa = Q;
        this.lb = new bh;
        this.De = {};
        this.jc = {};
        this.Dc = a
    }

    function Eh(a, b, c, d, e) {
        var f = a.lb, h = e;
        H(d > f.Cc, "Stacking an older write on top of newer ones");
        p(h) || (h = !0);
        f.ma.push({path: b, Ja: c, Zc: d, visible: h});
        h && (f.T = Sg(f.T, b, c));
        f.Cc = d;
        return e ? Fh(a, new $b(Ng, b, c)) : []
    }

    function Gh(a, b, c, d) {
        var e = a.lb;
        H(d > e.Cc, "Stacking an older merge on top of newer ones");
        e.ma.push({path: b, children: c, Zc: d, visible: !0});
        e.T = Tg(e.T, b, c);
        e.Cc = d;
        c = Bg(c);
        return Fh(a, new vd(Ng, b, c))
    }

    function Hh(a, b, c) {
        c = c || !1;
        var d = ch(a.lb, b);
        if (a.lb.Ed(b)) {
            var e = Q;
            null != d.Ja ? e = e.set(C, !0) : Cb(d.children, function (a, b) {
                e = e.set(new L(a), b)
            });
            return Fh(a, new Mg(d.path, e, c))
        }
        return []
    }

    function Ih(a, b, c) {
        c = Bg(c);
        return Fh(a, new vd(Pg, b, c))
    }

    function Jh(a, b, c, d) {
        d = Kh(a, d);
        if (null != d) {
            var e = Lh(d);
            d = e.path;
            e = e.Ib;
            b = T(d, b);
            c = new $b(new Og(!1, !0, e, !0), b, c);
            return Mh(a, d, c)
        }
        return []
    }

    function Nh(a, b, c, d) {
        if (d = Kh(a, d)) {
            var e = Lh(d);
            d = e.path;
            e = e.Ib;
            b = T(d, b);
            c = Bg(c);
            c = new vd(new Og(!1, !0, e, !0), b, c);
            return Mh(a, d, c)
        }
        return []
    }

    Dh.prototype.Ob = function (a, b) {
        var c = a.path, d = null, e = !1;
        Ig(this.xa, c, function (a, b) {
            var f = T(a, c);
            d = d || b.jb(f);
            e = e || null != Zg(b)
        });
        var f = this.xa.get(c);
        f ? (e = e || null != Zg(f), d = d || f.jb(C)) : (f = new Yg, this.xa = this.xa.set(c, f));
        var h;
        null != d ? h = !0 : (h = !1, d = F, Lg(this.xa.subtree(c), function (a, b) {
            var c = b.jb(C);
            c && (d = d.U(a, c))
        }));
        var k = null != ah(f, a);
        if (!k && !S(a.n)) {
            var m = Oh(a);
            H(!(m in this.jc), "View does not exist, but we have a tag");
            var l = Ph++;
            this.jc[m] = l;
            this.De["_" + l] = m
        }
        h = f.Ob(a, b, new gh(c, this.lb), d, h);
        k ||
        e || (f = ah(f, a), h = h.concat(Qh(this, a, f)));
        return h
    };
    Dh.prototype.mb = function (a, b, c) {
        var d = a.path, e = this.xa.get(d), f = [];
        if (e && ("default" === a.ka() || null != ah(e, a))) {
            f = e.mb(a, b, c);
            e.e() && (this.xa = this.xa.remove(d));
            e = f.sg;
            f = f.Tf;
            b = -1 !== Pa(e, function (a) {
                    return S(a.n)
                });
            var h = Gg(this.xa, d, function (a, b) {
                return null != Zg(b)
            });
            if (b && !h && (d = this.xa.subtree(d), !d.e()))for (var d = Rh(d), k = 0; k < d.length; ++k) {
                var m = d[k], l = m.W, m = Sh(this, m);
                this.Dc.Ae(Th(l), Uh(this, l), m.ld, m.G)
            }
            if (!h && 0 < e.length && !c)if (b)this.Dc.Od(Th(a), null); else {
                var u = this;
                Ja(e, function (a) {
                    a.ka();
                    var b = u.jc[Oh(a)];
                    u.Dc.Od(Th(a), b)
                })
            }
            Vh(this, e)
        }
        return f
    };
    Dh.prototype.Ba = function (a, b) {
        var c = this.lb, d = Gg(this.xa, a, function (b, c) {
            var d = T(b, a);
            if (d = c.jb(d))return d
        });
        return c.Ba(a, d, b, !0)
    };
    function Rh(a) {
        return Eg(a, function (a, c, d) {
            if (c && null != Zg(c))return [Zg(c)];
            var e = [];
            c && (e = $g(c));
            t(d, function (a) {
                e = e.concat(a)
            });
            return e
        })
    }

    function Vh(a, b) {
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (!S(d.n)) {
                var d = Oh(d), e = a.jc[d];
                delete a.jc[d];
                delete a.De["_" + e]
            }
        }
    }

    function Th(a) {
        return S(a.n) && !rd(a.n) ? a.xb() : a
    }

    function Qh(a, b, c) {
        var d = b.path, e = Uh(a, b);
        c = Sh(a, c);
        b = a.Dc.Ae(Th(b), e, c.ld, c.G);
        d = a.xa.subtree(d);
        if (e)H(null == Zg(d.value), "If we're adding a query, it shouldn't be shadowed"); else for (e = Eg(d, function (a, b, c) {
            if (!a.e() && b && null != Zg(b))return [pg(Zg(b))];
            var d = [];
            b && (d = d.concat(La($g(b), function (a) {
                return a.W
            })));
            t(c, function (a) {
                d = d.concat(a)
            });
            return d
        }), d = 0; d < e.length; ++d)c = e[d], a.Dc.Od(Th(c), Uh(a, c));
        return b
    }

    function Sh(a, b) {
        var c = b.W, d = Uh(a, c);
        return {
            ld: function () {
                return (b.w() || F).hash()
            }, G: function (b) {
                if ("ok" === b) {
                    if (d) {
                        var f = c.path;
                        if (b = Kh(a, d)) {
                            var h = Lh(b);
                            b = h.path;
                            h = h.Ib;
                            f = T(b, f);
                            f = new bc(new Og(!1, !0, h, !0), f);
                            b = Mh(a, b, f)
                        } else b = []
                    } else b = Fh(a, new bc(Pg, c.path));
                    return b
                }
                f = "Unknown Error";
                "too_big" === b ? f = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == b ? f = "Client doesn't have permission to access the desired data." : "unavailable" == b &&
                (f = "The service is unavailable");
                f = Error(b + " at " + c.path.toString() + ": " + f);
                f.code = b.toUpperCase();
                return a.mb(c, null, f)
            }
        }
    }

    function Oh(a) {
        return a.path.toString() + "$" + a.ka()
    }

    function Lh(a) {
        var b = a.indexOf("$");
        H(-1 !== b && b < a.length - 1, "Bad queryKey.");
        return {Ib: a.substr(b + 1), path: new L(a.substr(0, b))}
    }

    function Kh(a, b) {
        var c = a.De, d = "_" + b;
        return d in c ? c[d] : void 0
    }

    function Uh(a, b) {
        var c = Oh(b);
        return x(a.jc, c)
    }

    var Ph = 1;

    function Mh(a, b, c) {
        var d = a.xa.get(b);
        H(d, "Missing sync point for query tag that we're tracking");
        return d.gb(c, new gh(b, a.lb), null)
    }

    function Fh(a, b) {
        return Wh(a, b, a.xa, null, new gh(C, a.lb))
    }

    function Wh(a, b, c, d, e) {
        if (b.path.e())return Xh(a, b, c, d, e);
        var f = c.get(C);
        null == d && null != f && (d = f.jb(C));
        var h = [], k = J(b.path), m = b.Nc(k);
        if ((c = c.children.get(k)) && m)var l = d ? d.R(k) : null, k = e.k(k), h = h.concat(Wh(a, m, c, l, k));
        f && (h = h.concat(f.gb(b, e, d)));
        return h
    }

    function Xh(a, b, c, d, e) {
        var f = c.get(C);
        null == d && null != f && (d = f.jb(C));
        var h = [];
        c.children.ia(function (c, f) {
            var l = d ? d.R(c) : null, u = e.k(c), z = b.Nc(c);
            z && (h = h.concat(Xh(a, z, f, l, u)))
        });
        f && (h = h.concat(f.gb(b, e, d)));
        return h
    };
    function tf(a, b, c) {
        this.app = c;
        var d = new dc(c);
        this.M = a;
        this.Xa = Ad(a);
        this.Vc = null;
        this.da = new mc;
        this.vd = 1;
        this.Ua = null;
        if (b || 0 <= ("object" === typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.wa = new pd(this.M, r(this.Hb, this), d), setTimeout(r(this.Kc, this, !0), 0); else {
            b = c.options.databaseAuthVariableOverride || null;
            if (null !== b) {
                if ("object" !== ca(b))throw Error("Only objects are supported for option databaseAuthVariableOverride");
                try {
                    B(b)
                } catch (e) {
                    throw Error("Invalid authOverride provided: " + e);
                }
            }
            this.wa = this.Ua = new oh(this.M, r(this.Hb, this), r(this.Kc, this), r(this.ue, this), d, b)
        }
        var f = this;
        ec(d, function (a) {
            f.wa.qf(a)
        });
        this.zg = Bd(a, r(function () {
            return new xd(this.Xa, this.wa)
        }, this));
        this.nc = new ih;
        this.ie = new fc;
        this.pd = new Dh({
            Ae: function (a, b, c, d) {
                b = [];
                c = f.ie.j(a.path);
                c.e() || (b = Fh(f.pd, new $b(Pg, a.path, c)), setTimeout(function () {
                    d("ok")
                }, 0));
                return b
            }, Od: aa
        });
        Yh(this, "connected", !1);
        this.ja = new Mc;
        this.$a = new sf(this);
        this.ed =
            0;
        this.je = null;
        this.K = new Dh({
            Ae: function (a, b, c, d) {
                f.wa.df(a, c, b, function (b, c) {
                    var e = d(b, c);
                    rc(f.da, a.path, e)
                });
                return []
            }, Od: function (a, b) {
                f.wa.Ef(a, b)
            }
        })
    }

    g = tf.prototype;
    g.toString = function () {
        return (this.M.Sc ? "https://" : "http://") + this.M.host
    };
    g.name = function () {
        return this.M.pe
    };
    function Zh(a) {
        a = a.ie.j(new L(".info/serverTimeOffset")).H() || 0;
        return (new Date).getTime() + a
    }

    function $h(a) {
        a = a = {timestamp: Zh(a)};
        a.timestamp = a.timestamp || (new Date).getTime();
        return a
    }

    g.Hb = function (a, b, c, d) {
        this.ed++;
        var e = new L(a);
        b = this.je ? this.je(a, b) : b;
        a = [];
        d ? c ? (b = oa(b, function (a) {
            return M(a)
        }), a = Nh(this.K, e, b, d)) : (b = M(b), a = Jh(this.K, e, b, d)) : c ? (d = oa(b, function (a) {
            return M(a)
        }), a = Ih(this.K, e, d)) : (d = M(b), a = Fh(this.K, new $b(Pg, e, d)));
        d = e;
        0 < a.length && (d = ai(this, e));
        rc(this.da, d, a)
    };
    g.Kc = function (a) {
        Yh(this, "connected", a);
        !1 === a && bi(this)
    };
    g.ue = function (a) {
        var b = this;
        hd(a, function (a, d) {
            Yh(b, d, a)
        })
    };
    function Yh(a, b, c) {
        b = new L("/.info/" + b);
        c = M(c);
        var d = a.ie;
        d.Jd = d.Jd.F(b, c);
        c = Fh(a.pd, new $b(Pg, b, c));
        rc(a.da, b, c)
    }

    g.Kb = function (a, b, c, d) {
        this.f("set", {path: a.toString(), value: b, Gg: c});
        var e = $h(this);
        b = M(b, c);
        var e = Pc(b, e), f = this.vd++, e = Eh(this.K, a, e, f, !0);
        nc(this.da, e);
        var h = this;
        this.wa.put(a.toString(), b.H(!0), function (b, c) {
            var e = "ok" === b;
            e || O("set at " + a + " failed: " + b);
            e = Hh(h.K, f, !e);
            rc(h.da, a, e);
            ci(d, b, c)
        });
        e = di(this, a);
        ai(this, e);
        rc(this.da, e, [])
    };
    g.update = function (a, b, c) {
        this.f("update", {path: a.toString(), value: b});
        var d = !0, e = $h(this), f = {};
        t(b, function (a, b) {
            d = !1;
            var c = M(a);
            f[b] = Pc(c, e)
        });
        if (d)E("update() called with empty data.  Don't do anything."), ci(c, "ok"); else {
            var h = this.vd++, k = Gh(this.K, a, f, h);
            nc(this.da, k);
            var m = this;
            this.wa.ef(a.toString(), b, function (b, d) {
                var e = "ok" === b;
                e || O("update at " + a + " failed: " + b);
                var e = Hh(m.K, h, !e), f = a;
                0 < e.length && (f = ai(m, a));
                rc(m.da, f, e);
                ci(c, b, d)
            });
            t(b, function (b, c) {
                var d = di(m, a.k(c));
                ai(m, d)
            });
            rc(this.da,
                a, [])
        }
    };
    function bi(a) {
        a.f("onDisconnectEvents");
        var b = $h(a), c = [];
        Nc(Lc(a.ja, b), C, function (b, e) {
            c = c.concat(Fh(a.K, new $b(Pg, b, e)));
            var f = di(a, b);
            ai(a, f)
        });
        a.ja = new Mc;
        rc(a.da, C, c)
    }

    g.xd = function (a, b) {
        var c = this;
        this.wa.xd(a.toString(), function (d, e) {
            "ok" === d && zf(c.ja, a);
            ci(b, d, e)
        })
    };
    function Nf(a, b, c, d) {
        var e = M(c);
        a.wa.re(b.toString(), e.H(!0), function (c, h) {
            "ok" === c && Oc(a.ja, b, e);
            ci(d, c, h)
        })
    }

    function Of(a, b, c, d, e) {
        var f = M(c, d);
        a.wa.re(b.toString(), f.H(!0), function (c, d) {
            "ok" === c && Oc(a.ja, b, f);
            ci(e, c, d)
        })
    }

    function Pf(a, b, c, d) {
        var e = !0, f;
        for (f in c)e = !1;
        e ? (E("onDisconnect().update() called with empty data.  Don't do anything."), ci(d, "ok")) : a.wa.gf(b.toString(), c, function (e, f) {
            if ("ok" === e)for (var m in c) {
                var l = M(c[m]);
                Oc(a.ja, b.k(m), l)
            }
            ci(d, e, f)
        })
    }

    function yg(a, b, c) {
        c = ".info" === J(b.path) ? a.pd.Ob(b, c) : a.K.Ob(b, c);
        pc(a.da, b.path, c)
    }

    g.eb = function () {
        this.Ua && this.Ua.eb("repo_interrupt")
    };
    g.lc = function () {
        this.Ua && this.Ua.lc("repo_interrupt")
    };
    g.Be = function (a) {
        if ("undefined" !== typeof console) {
            a ? (this.Vc || (this.Vc = new lc(this.Xa)), a = this.Vc.get()) : a = this.Xa.get();
            var b = Ma(ta(a), function (a, b) {
                return Math.max(b.length, a)
            }, 0), c;
            for (c in a) {
                for (var d = a[c], e = c.length; e < b + 2; e++)c += " ";
                console.log(c + d)
            }
        }
    };
    g.Ce = function (a) {
        kc(this.Xa, a);
        this.zg.zf[a] = !0
    };
    g.f = function (a) {
        var b = "";
        this.Ua && (b = this.Ua.id + ":");
        E(b, arguments)
    };
    function ci(a, b, c) {
        a && Ub(function () {
            if ("ok" == b)a(null); else {
                var d = (b || "error").toUpperCase(), e = d;
                c && (e += ": " + c);
                e = Error(e);
                e.code = d;
                a(e)
            }
        })
    };
    function ei(a, b, c, d, e) {
        function f() {
        }

        a.f("transaction on " + b);
        var h = new U(a, b);
        h.hc("value", f);
        c = {
            path: b, update: c, G: d, status: null, lf: Rc(), Ie: e, wf: 0, Rd: function () {
                h.Jc("value", f)
            }, Td: null, Da: null, bd: null, cd: null, dd: null
        };
        d = a.K.Ba(b, void 0) || F;
        c.bd = d;
        d = c.update(d.H());
        if (p(d)) {
            Ff("transaction failed: Data returned ", d, c.path);
            c.status = 1;
            e = jh(a.nc, b);
            var k = e.Ea() || [];
            k.push(c);
            kh(e, k);
            "object" === typeof d && null !== d && Bb(d, ".priority") ? (k = x(d, ".priority"), H(Df(k), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")) :
                k = (a.K.Ba(b) || F).C().H();
            e = $h(a);
            d = M(d, k);
            e = Pc(d, e);
            c.cd = d;
            c.dd = e;
            c.Da = a.vd++;
            c = Eh(a.K, b, e, c.Da, c.Ie);
            rc(a.da, b, c);
            fi(a)
        } else c.Rd(), c.cd = null, c.dd = null, c.G && (a = new W(c.bd, new U(a, c.path), N), c.G(null, !1, a))
    }

    function fi(a, b) {
        var c = b || a.nc;
        b || gi(a, c);
        if (null !== c.Ea()) {
            var d = hi(a, c);
            H(0 < d.length, "Sending zero length transaction queue");
            Na(d, function (a) {
                return 1 === a.status
            }) && ii(a, c.path(), d)
        } else c.kd() && c.P(function (b) {
            fi(a, b)
        })
    }

    function ii(a, b, c) {
        for (var d = La(c, function (a) {
            return a.Da
        }), e = a.K.Ba(b, d) || F, d = e, e = e.hash(), f = 0; f < c.length; f++) {
            var h = c[f];
            H(1 === h.status, "tryToSendTransactionQueue_: items in queue should all be run.");
            h.status = 2;
            h.wf++;
            var k = T(b, h.path), d = d.F(k, h.cd)
        }
        d = d.H(!0);
        a.wa.put(b.toString(), d, function (d) {
            a.f("transaction put response", {path: b.toString(), status: d});
            var e = [];
            if ("ok" === d) {
                d = [];
                for (f = 0; f < c.length; f++) {
                    c[f].status = 3;
                    e = e.concat(Hh(a.K, c[f].Da));
                    if (c[f].G) {
                        var h = c[f].dd, k = new U(a, c[f].path);
                        d.push(r(c[f].G,
                            null, null, !0, new W(h, k, N)))
                    }
                    c[f].Rd()
                }
                gi(a, jh(a.nc, b));
                fi(a);
                rc(a.da, b, e);
                for (f = 0; f < d.length; f++)Ub(d[f])
            } else {
                if ("datastale" === d)for (f = 0; f < c.length; f++)c[f].status = 4 === c[f].status ? 5 : 1; else for (O("transaction at " + b.toString() + " failed: " + d), f = 0; f < c.length; f++)c[f].status = 5, c[f].Td = d;
                ai(a, b)
            }
        }, e)
    }

    function ai(a, b) {
        var c = ji(a, b), d = c.path(), c = hi(a, c);
        ki(a, c, d);
        return d
    }

    function ki(a, b, c) {
        if (0 !== b.length) {
            for (var d = [], e = [], f = Ka(b, function (a) {
                return 1 === a.status
            }), f = La(f, function (a) {
                return a.Da
            }), h = 0; h < b.length; h++) {
                var k = b[h], m = T(c, k.path), l = !1, u;
                H(null !== m, "rerunTransactionsUnderNode_: relativePath should not be null.");
                if (5 === k.status)l = !0, u = k.Td, e = e.concat(Hh(a.K, k.Da, !0)); else if (1 === k.status)if (25 <= k.wf)l = !0, u = "maxretry", e = e.concat(Hh(a.K, k.Da, !0)); else {
                    var z = a.K.Ba(k.path, f) || F;
                    k.bd = z;
                    var G = b[h].update(z.H());
                    p(G) ? (Ff("transaction failed: Data returned ", G,
                        k.path), m = M(G), "object" === typeof G && null != G && Bb(G, ".priority") || (m = m.ga(z.C())), z = k.Da, G = $h(a), G = Pc(m, G), k.cd = m, k.dd = G, k.Da = a.vd++, Qa(f, z), e = e.concat(Eh(a.K, k.path, G, k.Da, k.Ie)), e = e.concat(Hh(a.K, z, !0))) : (l = !0, u = "nodata", e = e.concat(Hh(a.K, k.Da, !0)))
                }
                rc(a.da, c, e);
                e = [];
                l && (b[h].status = 3, setTimeout(b[h].Rd, Math.floor(0)), b[h].G && ("nodata" === u ? (k = new U(a, b[h].path), d.push(r(b[h].G, null, null, !1, new W(b[h].bd, k, N)))) : d.push(r(b[h].G, null, Error(u), !1, null))))
            }
            gi(a, a.nc);
            for (h = 0; h < d.length; h++)Ub(d[h]);
            fi(a)
        }
    }

    function ji(a, b) {
        for (var c, d = a.nc; null !== (c = J(b)) && null === d.Ea();)d = jh(d, c), b = D(b);
        return d
    }

    function hi(a, b) {
        var c = [];
        li(a, b, c);
        c.sort(function (a, b) {
            return a.lf - b.lf
        });
        return c
    }

    function li(a, b, c) {
        var d = b.Ea();
        if (null !== d)for (var e = 0; e < d.length; e++)c.push(d[e]);
        b.P(function (b) {
            li(a, b, c)
        })
    }

    function gi(a, b) {
        var c = b.Ea();
        if (c) {
            for (var d = 0, e = 0; e < c.length; e++)3 !== c[e].status && (c[d] = c[e], d++);
            c.length = d;
            kh(b, 0 < c.length ? c : null)
        }
        b.P(function (b) {
            gi(a, b)
        })
    }

    function di(a, b) {
        var c = ji(a, b).path(), d = jh(a.nc, b);
        nh(d, function (b) {
            mi(a, b)
        });
        mi(a, d);
        mh(d, function (b) {
            mi(a, b)
        });
        return c
    }

    function mi(a, b) {
        var c = b.Ea();
        if (null !== c) {
            for (var d = [], e = [], f = -1, h = 0; h < c.length; h++)4 !== c[h].status && (2 === c[h].status ? (H(f === h - 1, "All SENT items should be at beginning of queue."), f = h, c[h].status = 4, c[h].Td = "set") : (H(1 === c[h].status, "Unexpected transaction status in abort"), c[h].Rd(), e = e.concat(Hh(a.K, c[h].Da, !0)), c[h].G && d.push(r(c[h].G, null, Error("set"), !1, null))));
            -1 === f ? kh(b, null) : c.length = f + 1;
            rc(a.da, b.path(), e);
            for (h = 0; h < d.length; h++)Ub(d[h])
        }
    };
    function yf() {
        this.nb = {};
        this.Ff = !1
    }

    yf.prototype.eb = function () {
        for (var a in this.nb)this.nb[a].eb()
    };
    yf.prototype.lc = function () {
        for (var a in this.nb)this.nb[a].lc()
    };
    yf.prototype.ce = function (a) {
        this.Ff = a
    };
    ba(yf);
    yf.prototype.interrupt = yf.prototype.eb;
    yf.prototype.resume = yf.prototype.lc;
    var Z = {};
    Z.pc = oh;
    Z.DataConnection = Z.pc;
    oh.prototype.yg = function (a, b) {
        this.va("q", {p: a}, b)
    };
    Z.pc.prototype.simpleListen = Z.pc.prototype.yg;
    oh.prototype.Qf = function (a, b) {
        this.va("echo", {d: a}, b)
    };
    Z.pc.prototype.echo = Z.pc.prototype.Qf;
    oh.prototype.interrupt = oh.prototype.eb;
    Z.If = bf;
    Z.RealTimeConnection = Z.If;
    bf.prototype.sendRequest = bf.prototype.va;
    bf.prototype.close = bf.prototype.close;
    Z.bg = function (a) {
        var b = oh.prototype.put;
        oh.prototype.put = function (c, d, e, f) {
            p(f) && (f = a());
            b.call(this, c, d, e, f)
        };
        return function () {
            oh.prototype.put = b
        }
    };
    Z.hijackHash = Z.bg;
    Z.Hf = gc;
    Z.ConnectionTarget = Z.Hf;
    Z.ka = function (a) {
        return a.ka()
    };
    Z.queryIdentifier = Z.ka;
    Z.eg = function (a) {
        return a.u.Ua.aa
    };
    Z.listens = Z.eg;
    Z.ce = function (a) {
        yf.Wb().ce(a)
    };
    Z.forceRestClient = Z.ce;
    Z.Context = yf;
    function U(a, b) {
        if (!(a instanceof tf))throw Error("new Firebase() no longer supported - use app.database().");
        X.call(this, a, b, Fe, !1);
        this.then = void 0;
        this["catch"] = void 0
    }

    ka(U, X);
    g = U.prototype;
    g.getKey = function () {
        y("Firebase.key", 0, 0, arguments.length);
        return this.path.e() ? null : ae(this.path)
    };
    g.k = function (a) {
        y("Firebase.child", 1, 1, arguments.length);
        if (fa(a))a = String(a); else if (!(a instanceof L))if (null === J(this.path)) {
            var b = a;
            b && (b = b.replace(/^\/*\.info(\/|$)/, "/"));
            Lf("Firebase.child", b)
        } else Lf("Firebase.child", a);
        return new U(this.u, this.path.k(a))
    };
    g.getParent = function () {
        y("Firebase.parent", 0, 0, arguments.length);
        var a = this.path.parent();
        return null === a ? null : new U(this.u, a)
    };
    g.Zf = function () {
        y("Firebase.ref", 0, 0, arguments.length);
        for (var a = this; null !== a.getParent();)a = a.getParent();
        return a
    };
    g.Pf = function () {
        return this.u.$a
    };
    g.set = function (a, b) {
        y("Firebase.set", 1, 2, arguments.length);
        Mf("Firebase.set", this.path);
        Ef("Firebase.set", a, this.path, !1);
        A("Firebase.set", 2, b, !0);
        var c = new Hb;
        this.u.Kb(this.path, a, null, Ib(c, b));
        return c.sa
    };
    g.update = function (a, b) {
        y("Firebase.update", 1, 2, arguments.length);
        Mf("Firebase.update", this.path);
        if (da(a)) {
            for (var c = {}, d = 0; d < a.length; ++d)c["" + d] = a[d];
            a = c;
            O("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
        }
        Hf("Firebase.update", a, this.path);
        A("Firebase.update", 2, b, !0);
        c = new Hb;
        this.u.update(this.path, a, Ib(c, b));
        return c.sa
    };
    g.Kb = function (a, b, c) {
        y("Firebase.setWithPriority", 2, 3, arguments.length);
        Mf("Firebase.setWithPriority", this.path);
        Ef("Firebase.setWithPriority", a, this.path, !1);
        If("Firebase.setWithPriority", 2, b);
        A("Firebase.setWithPriority", 3, c, !0);
        if (".length" === this.getKey() || ".keys" === this.getKey())throw"Firebase.setWithPriority failed: " + this.getKey() + " is a read-only object.";
        var d = new Hb;
        this.u.Kb(this.path, a, b, Ib(d, c));
        return d.sa
    };
    g.remove = function (a) {
        y("Firebase.remove", 0, 1, arguments.length);
        Mf("Firebase.remove", this.path);
        A("Firebase.remove", 1, a, !0);
        return this.set(null, a)
    };
    g.transaction = function (a, b, c) {
        y("Firebase.transaction", 1, 3, arguments.length);
        Mf("Firebase.transaction", this.path);
        A("Firebase.transaction", 1, a, !1);
        A("Firebase.transaction", 2, b, !0);
        if (p(c) && "boolean" != typeof c)throw Error(Db("Firebase.transaction", 3, !0) + "must be a boolean.");
        if (".length" === this.getKey() || ".keys" === this.getKey())throw"Firebase.transaction failed: " + this.getKey() + " is a read-only object.";
        "undefined" === typeof c && (c = !0);
        var d = new Hb;
        ga(b) && Jb(d.sa);
        ei(this.u, this.path, a, function (a, c,
                                           h) {
            a ? d.reject(a) : d.resolve(new Pb(c, h));
            ga(b) && b(a, c, h)
        }, c);
        return d.sa
    };
    g.vg = function (a, b) {
        y("Firebase.setPriority", 1, 2, arguments.length);
        Mf("Firebase.setPriority", this.path);
        If("Firebase.setPriority", 1, a);
        A("Firebase.setPriority", 2, b, !0);
        var c = new Hb;
        this.u.Kb(this.path.k(".priority"), a, null, Ib(c, b));
        return c.sa
    };
    g.push = function (a, b) {
        y("Firebase.push", 0, 2, arguments.length);
        Mf("Firebase.push", this.path);
        Ef("Firebase.push", a, this.path, !0);
        A("Firebase.push", 2, b, !0);
        var c = Zh(this.u), d = Uf(c), c = this.k(d);
        if (null != a) {
            var e = this, f = c.set(a, b).then(function () {
                return e.k(d)
            });
            c.then = r(f.then, f);
            c["catch"] = r(f.then, f, void 0);
            ga(b) && Jb(f)
        }
        return c
    };
    g.kb = function () {
        Mf("Firebase.onDisconnect", this.path);
        return new V(this.u, this.path)
    };
    U.prototype.child = U.prototype.k;
    U.prototype.set = U.prototype.set;
    U.prototype.update = U.prototype.update;
    U.prototype.setWithPriority = U.prototype.Kb;
    U.prototype.remove = U.prototype.remove;
    U.prototype.transaction = U.prototype.transaction;
    U.prototype.setPriority = U.prototype.vg;
    U.prototype.push = U.prototype.push;
    U.prototype.onDisconnect = U.prototype.kb;
    kd(U.prototype, "database", U.prototype.Pf);
    kd(U.prototype, "key", U.prototype.getKey);
    kd(U.prototype, "parent", U.prototype.getParent);
    kd(U.prototype, "root", U.prototype.Zf);
    if ("undefined" === typeof firebase)throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
    try {
        firebase.INTERNAL.registerService("database", function (a) {
            var b = yf.Wb(), c = a.options.databaseURL;
            p(c) || $c("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");
            var d = ad(c), c = d.kc;
            xf("Invalid Firebase Database URL", d);
            d.path.e() || $c("Database URL must point to the root of a Firebase Database (not including a child path).");
            (d = x(b.nb, a.name)) && $c("FIREBASE INTERNAL ERROR: Database initialized multiple times.");
            d = new tf(c, b.Ff, a);
            b.nb[a.name] =
                d;
            return d.$a
        }, {Reference: U, Query: X, Database: sf, enableLogging: Xc, INTERNAL: Y, TEST_ACCESS: Z, ServerValue: vf})
    } catch (ni) {
        $c("Failed to register the Firebase Database Service (" + ni + ")")
    }
    ;
})();

