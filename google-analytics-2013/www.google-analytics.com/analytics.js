/**
 * 代码翻译：墨歌
 * 电子邮件：505253293@163.com
 * 新浪微博：http://weibo.com/u/1667946592/home
 * 新浪博客：http://blog.sina.com.cn/tinggebar
 * 代码地址：https://www.google-analytics.com/analytics.js
 * 文档地址：https://developers.google.com/analytics/devguides/collection/analyticsjs/?hl=zh-CN
 * @fileoverview Google Analytics（分析）客户端javascript代码 Analytics.js。
 */
(function () {

    /**
     * 系统对象、属性表。
     */
    var aa = encodeURIComponent,
        f = window,
        ba = setTimeout,
        n = Math,
        ea = RegExp;

    /**
     * 将b作为对象a的属性name
     * @param a
     * @param b
     * @returns {*}
     */
    function fa(a, b) {
        return a.name = b
    }

    /**
     * 通用属性。
     */
    var p = "push",
        h = "hash",
        ha = "slice",
        q = "data",
        r = "cookie",
        t = "indexOf",
        m = "match",
        ia = "defaultValue",
        ja = "port",
        u = "createElement",
        v = "name",
        da = "getTime",
        x = "host",
        y = "length",
        z = "prototype",
        la = "clientWidth",
        A = "split",
        B = "location",
        ma = "hostname",
        ga = "search",
        C = "call",
        E = "protocol",
        na = "clientHeight",
        Ab = "href",
        F = "substring",
        G = "apply",
        oa = "navigator",
        Ub = "parentNode",
        H = "join",
        I = "toLowerCase";

    /**
     *  生成参数 _u : usage
     */
    var pa = new function () {
        var a = [];
        this.set = function (b) {
            a[b] = !0
        };
        this.M = function () {
            for (var b = [], c = 0; c < a[y]; c++){
                a[c] && (b[n.floor(c / 6)] = b[n.floor(c / 6)] ^ 1 << c % 6);
            }
            for (c = 0; c < b[y]; c++){
                b[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[c] || 0);
            }
            return b[H]("") + "~"
        }
    };

    /**
     * 将数组中的第a个元素赋值为true。
     * @param a 元素在数组中位置
     * @constructor
     */
    function J(a) {
        pa.set(a)
    };

    /**
     * 判断参数a是否函数
     * @param a
     * @returns {boolean}
     * @constructor
     */
    function K(a) {
        return "function" == typeof a
    }

    /**
     * 判断参数a是否字符串
     * @param a
     * @returns {boolean}
     */
    function qa(a) {
        return void 0 != a && -1 < (a.constructor + "")[t]("String")
    }

    /**
     * 0和2147483647之间的伪随机数
     * @returns {number} 可能为0，但总是小于2147483647，[0,2147483647)
     */
    function ra() {
        return n.round(2147483647 * n.random())
    }

    /**
     * 创建引入图片a的dom对象
     * @param a 图片路径
     * @returns {*}
     * @constructor
     */
    function Ca(a) {
        var b = M[u]("img");
        b.width = 1;
        b.height = 1;
        b.src = a;
        return b
    }

    /**
     * 空函数
     * @constructor
     */
    function L() {
    }

    /**
     * 使用encodeURIComponent将a编码
     * @param a URL
     * @returns {*}
     */
    function sa(a) {
        if (aa instanceof Function){
            return aa(a);
        }
        J(28);
        return a
    }

    /**
     * 使用encodeURIComponent把a编码，将编码后的字符串中的小括号做 URL编码
     * @param a
     * @returns {XML}
     */
    function ka(a) {
        return sa(a).replace(/\(/g, "%28").replace(/\)/g, "%29")
    }

    /**
     * 事件绑定
     * @param a
     * @param b
     * @param c
     * @param d
     */
    var ta = function (a, b, c, d) {
        try {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        } catch (e) {
            J(27)
        }
    },

    /**
     *  解除绑定事件
     */
    ua = function (a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    };

    /**
     * 在页面第一个script标签前插入引用a脚本
     * @param a js脚本路径
     * @param b script标签的id
     */
    function vc(a, b) {
        if (a) {
            var c = M[u]("script");
            c.type = "text/javascript";
            c.async = !0;
            c.src = a;
            c.id = b;
            var d = M.getElementsByTagName("script")[0];
            d[Ub].insertBefore(c, d)
        }
    }

    /**
     * 获取当前页面URL中的主域名
     * @returns {*} URL中的主域名
     */
    function eb() {
        var a = "" + M[B][ma];
        return 0 == a[t]("www.") ? a[F](4) : a
    }

    /**
     * 获取载入当前文档的URL
     * @param a
     * @returns {string} 链接到本页的到上一页的URL地址
     */
    function va(a) {
        var b = M.referrer;
        if (/^https?:\/\//i.test(b)) {
            if (a) {
                return b;
            }
            a = "//" + M[B][ma];
            var c = b[t](a);
            if (5 == c || 6 == c)
                if (a = b.charAt(c + a[y]), "/" == a || "?" == a || "" == a || ":" == a)
                    return;
            return b
        }
    }

    /**
     *
     * @param a {Object}
     * @param b {Array}
     * @returns {*}
     */
    function wa(a, b) {
        if (1 == b[y] && null != b[0] && "object" === typeof b[0])
            return b[0];
        for (var c = {}, d = n.min(a[y] + 1, b[y]), e = 0; e < d; e++)
            if ("object" === typeof b[e]) {
                for (var g in b[e])
                b[e].hasOwnProperty(g) && (c[g] = b[e][g]);
            break
            } else
                e < a[y] && (c[a[e]] = b[e]);
        return c
    };

    /**
     * 对象N
     * @constructor
     */
    var N = function () {
        this.keys = [];
        this.w = {};
        this.m = {}
    };

    /**
     * 对象N的原型属性 set
     * @param a
     * @param b
     * @param c
     */
    N[z].set = function (a, b, c) {
        this.keys[p](a);
        c ? this.m[":" + a] = b : this.w[":" + a] = b
    };

    /**
     * 对象N的原型属性 get
     * @param a
     * @returns {*}
     */
    N[z].get = function (a) {
        return this.m.hasOwnProperty(":" + a) ? this.m[":" + a] : this.w[":" + a]
    };

    /**
     * 对象N的原型属性 map
     * @param a
     */
    N[z].map = function (a) {
        for (var b = 0; b < this.keys[y]; b++) {
            var c = this.keys[b], d = this.get(c);
            d && a(c, d)
        }
    };

    var O = f,
        M = document,

        /**
         * 判断是否启用 Google Analytics（分析）停用浏览器扩展
         * 可参见 https://docs.google.com/document/d/1PyNXDRj69367K2U6NdOQlv22-hlcxhlNpzdn5wWTQ-w/edit?pli=1
         */
        xa = function (a) {
            var b = O._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === O["ga-disable-" + a]){
                return!0;
            }
            try {
                var c = O.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs){
                    return!0
                }
            } catch (d) {
            }
            return!1
        },

        /**
         *  0.1秒后执行a方法
         */
        fb = function (a) {
            ba(a, 100)
        },

        /**
         *
         */
        ya = function (a) {
            var b = [],
                c = M[r][A](";");
            a = ea("^\\s*" + a + "=\\s*(.*?)\\s*$");
            for (var d = 0; d < c[y]; d++) {
                var e = c[d][m](a);
                e && b[p](e[1])
            }
            return b
        },

        /**
         * 设置Cookie的值。
         * @param a {String} Cookie的键。
         * @param b {String} Cookie的值。
         * @param c {String} Cookie的路径。
         * @param d {String} Cookie的域。
         * @param e {String} 是否启用 Google Analytics（分析）停用 的标识。
         * @param g {Number} Cookie的过期时间。
         */
        zc = function (a, b, c, d, e, g) {
            e = xa(e) ? !1 : Aa.test(M[B][ma]) || "/" == c && za.test(d) ? !1 : !0;
            if (!e){
                return!1;
            }
            b && 200 < b[y] && (b = b[F](0, 200), J(24));
            a = a + "=" + b + "; path=" + c + "; ";
            g && (a += "expires=" + (new Date((new Date)[da]() + g)).toGMTString() + "; ");
            d && "none" != d && (a += "domain=" + d + ";");
            d = M[r];
            M.cookie = a;
            return d != M[r]
        },

        /**
         * google 域名的正则匹配
         */
        za = ea(/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/),

        /**
         * doubleclick 域名的正则匹配
         */
        Aa = ea(/(^|\.)doubleclick\.net$/i);

    var
        /**
         *  根据 location.protocol，返回 Google Analytics 的计数URL
         */
        oc = function () {
            return(Ba || "https:" == M[B][E] ? "https:" : "http:") + "//www.google-analytics.com"
        },

        /**
         * 标识 计数请求参数的长度
         * @param a {String} 计数请求参数的长度
         */
        Da = function (a) {
            fa(this, "len");
            this.message = a + "-8192"
        },

        /**
         * 标识为Firefox浏览器
         */
        Ea = function (a) {
            fa(this, "ff2post");
            this.message = a + "-2036"
        },

        /**
         * 根据计数请求参数的长度和浏览器，采用不同的方式发送计数请求
         * @param a {String} 计数请求的参数
         * @param b {Function} 发送请求后的回调函数
         */
        Ga = function (a, b) {
            b = b || L;
            if (2036 >= a[y]){
                // 通过 img标签src属性的方式 发送计数请求
                wc(a, b);
            } else if (8192 >= a[y]) {
                var c = b;
                //如果是Firefox浏览器且 数组不支持reduce方法
                if (0 <= O[oa].userAgent[t]("Firefox") && ![].reduce){
                    throw new Ea(a[y]);
                }
                //XDomain的方式异步 或 iframe标签src属性的方式 发送计数请求
                xc(a, c) || Fa(a, c)
            } else {
                throw new Da(a[y]);
            }
        },

        /**
         * 通过 img标签src属性的方式 发送计数请求
         * @param a {String} 计数请求的参数
         * @param b {Function} 发送请求后的回调函数
         */
        wc = function (a, b) {
            var c = Ca(oc() + "/collect?" + a);
            c.onload = c.onerror = function () {
                c.onload = null;
                c.onerror = null;
                b()
            }
        },

        /**
         * IE浏览器中，通过 XDomainRequest方式 异步发送跨域的计数请求
         * @param a {String} 计数请求的参数
         * @param b {Function} 发送请求后的回调函数
         */
        xc = function (a, b) {
            var c, d = O.XDomainRequest;
            if (d){
                c = new d, c.open("POST", oc() + "/collect");
            } else if (d = O.XMLHttpRequest){
                d = new d,
                "withCredentials"in d && (c = d, c.open("POST", oc() + "/collect", !0),
                c.setRequestHeader("Content-Type", "text/plain"));
            }
            if (c){
                return c.onreadystatechange = function () {
                    4 == c.readyState && (b(), c = null)
                }, c.send(a), !0
            }
        },

        /**
         *  通过 iframe标签src属性的方式 发送计数请求
         */
        Fa = function (a, b) {
            if (M.body) {
                a = aa(a);
                try {
                    var c = M[u]('<iframe name="' + a + '"></iframe>')
                } catch (d) {
                    c = M[u]("iframe"), fa(c, a)
                }
                c.height = "0";
                c.width = "0";
                c.style.display = "none";
                c.style.visibility =
                    "hidden";
                var e = M[B],
                    e = oc() + "/analytics_iframe.html#" + aa(e[E] + "//" + e[x] + "/favicon.ico"),
                    g = function () {
                        c.src = "";
                        c[Ub] && c[Ub].removeChild(c)
                    };
                ta(O, "beforeunload", g);
                var ca = !1, l = 0, k = function () {
                    if (!ca) {
                        try {
                            if (9 < l || c.contentWindow[B][x] == M[B][x]) {
                                ca = !0;
                                g();
                                ua(O, "beforeunload", g);
                                b();
                                return
                            }
                        } catch (a) {
                        }
                        l++;
                        ba(k, 200)
                    }
                };
                ta(c, "load", k);
                M.body.appendChild(c);
                c.src = e
            } else fb(function () {
                Fa(a, b)
            })
        };

    /**
     *
     */
    var Ha = function () {
        this.t = []
    };

    /**
     *
     */
    Ha[z].add = function (a) {
        this.t[p](a)
    };

    /**
     *
     */
    Ha[z].execute = function (a) {
        try {
            for (var b = 0; b < this.t[y]; b++) {
                var c = a.get(this.t[b]);
                c && K(c) && c[C](O, a)
            }
        } catch (d) {
        }
        b = a.get(Ia);
        b != L && K(b) && (a.set(Ia, L, !0), ba(b, 10))
    };

    /**
     *
     */
    function Ja(a) {
        if (100 != a.get(Ka) && La(P(a, Q)) % 1E4 >= 100 * R(a, Ka)){
            throw"abort";
        }
    }

    /**
     *
     */
    function Ma(a) {
        if (xa(P(a, Na))){
            throw"abort";
        }
    }

    /**
     *  如果location.protocol不是http或https时，
     */
    function Oa() {
        var a = M[B][E];
        if ("http:" != a && "https:" != a) {
            throw "abort";
        }
    }

    /**
     *
     */
    function Pa(a) {
        a.set(Ac, R(a, Ac) + 1);
        var b = [];
        Qa.map(function (c, d) {
            if (d.p) {
                var e = a.get(c);
                void 0 != e && e != d[ia] && ("boolean" == typeof e && (e *= 1), b[p](d.p + "=" + sa("" + e)))
            }
        });
        b[p]("z=" + ra());
        a.set(Ra, b[H]("&"), !0)
    }

    /**
     *
     * @param a {}
     * @constructor
     */
    function Sa(a) {
        Ga(P(a, Ra), a.get(Ia));
        a.set(Ia, L, !0)
    }

    /**
     *
     */
    function Hc(a) {
        var b = O.gaData;
        b && (b.expId && a.set(Nc, b.expId), b.expVar && a.set(Oc, b.expVar))
    }

    /**
     *
     */
    function cd() {
        if (O[oa] && "preview" == O[oa].loadPurpose)throw"abort";
    };

    /**
     *
     */
    function Ta(a) {
        var b = R(a, Ua);
        500 <= b && J(15);
        var c = P(a, Va);
        if ("transaction" != c && "item" != c) {
            var c = R(a, Wa), d = (new Date)[da](), e = R(a, Xa);
            0 == e && a.set(Xa, d);
            e = n.round(2 * (d - e) / 1E3);
            0 < e && (c = n.min(c + e, 20), a.set(Xa, d));
            if (0 >= c)throw"abort";
            a.set(Wa, --c)
        }
        a.set(Ua, ++b)
    };

    var
        /**
         *
         */
         Ya = function () {
            this.data = new N
        },
        Qa = new N,
        Za = [];

    /**
     *
     */
    Ya[z].get = function (a) {
        var b = $a(a),
            c = this[q].get(a);
        b && void 0 == c && (c = K(b[ia]) ? b[ia]() : b[ia]);
        return b && b.n ? b.n(this, a, c) : c
    };

    /**
     *
     */
    var P = function (a, b) {
            var c = a.get(b);
            return void 0 == c ? "" : "" + c
        },
        R = function (a, b) {
            var c = a.get(b);
            return void 0 == c || "" === c ? 0 : 1 * c
        };

    /**
     *
     */
    Ya[z].set = function (a, b, c) {
        if (a)
            if ("object" == typeof a)
                for (var d in a)
                    a.hasOwnProperty(d) && ab(this, d, a[d], c);
            else
                ab(this, a, b, c)
    };

    var
        ab = function (a, b, c, d) {
            var e = $a(b);
            e && e.o ? e.o(a, b, c, d) : a[q].set(b, c, d)
        },
        bb = function (a, b, c, d, e) {
            fa(this, a);
            this.p = b;
            this.n = d;
            this.o = e;
            this.defaultValue = c
        },
        $a = function (a) {
        var b = Qa.get(a);
            if (!b)for (var c = 0; c < Za[y]; c++) {
                var d = Za[c], e = d[0].exec(a);
                if (e) {
                    b = d[1](e);
                    Qa.set(b[v], b);
                    break
                }
            }
            return b
        },
        yc = function (a) {
            var b;
            Qa.map(function (c, d) {
                d.p == a && (b = d)
            });
            return b && b[v]
        },
        /**
         *
         */
        S = function (a, b, c, d, e) {
            a = new bb(a, b, c, d, e);
            Qa.set(a[v], a);
            return a[v]
        },
        cb = function (a, b) {
            Za[p]([ea("^" + a + "$"), b])
        },
        T = function (a, b, c) {
            return S(a,
                b, c, void 0, db)
        },
        db = function () {
        };

    /**
     * 矫正并设置 Google Analytics 的命名空间
     */
    var Pc;
    if (Pc = qa(f.GoogleAnalyticsObject)) {
        var Qc = f.GoogleAnalyticsObject;
        Pc = Qc ? Qc.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
    }


    var
        gb = Pc || "ga",
        Ba = !1,
        hb = T("apiVersion", "v"),
        ib = T("clientVersion", "_v");

    /*
     常规：IP 匿名化。将 IP地址最后位数换成0。
     参见 https://support.google.com/analytics/answer/2763052
     */
    S("anonymizeIp", "aip");

    var jb = S("adSenseId", "a"),
    /*
     * 一旦一个跟踪对象被创建并关联到一个网站的属性,您可以使用发送命令来将数据发送给web属性。一次发送给 Google Analytics数据的过程 称为一次冲击。
     */
        //冲击：冲击类型(Hit type)。值必须是 'pageview', 'appview', 'event', 'transaction', 'item', 'social', 'exception', 'timing'。
        Va = S("hitType", "t"),

        //常规：冲击回调函数
        Ia = S("hitCallback"),
        Ra = S("hitPayload");

    //冲击：指定一个击中被认为是非交互式的。
    S("nonInteraction", "ni");

    S("currencyCode", "cu");

    //Session会话：用来控制会话持续时间。值为“start”强制一个新的会话开始时这次打击和“end”强制当前会话结束这个打击。忽略其他值。
    S("sessionControl", "sc", "");
    S("queueTime", "qt");
    var Ac = S("_s", "_s");
    S("description", "cd");

    var
    //Page Tracking 内容信息：指定完整的URL(不含锚)的页面。由 create 方法初始化。
        kb = S("location", "dl", ""),

        //流量来源：指定推荐源
        lb = S("referrer", "dr"),

        //Page Tracking 内容信息：页面URL的路径部分。应该使用‘/’开始，指定虚拟页面路径。
        mb = S("page", "dp", "");

    // 内容信息：指定存储内容的主机名。
    S("hostname", "dh");
    var
        //系统信息：用户浏览器或系统语言。 由 create 方法初始化。
        nb = S("language", "ul"),

        //系统信息：指定页面/文档使用的字符集编码。由 create 方法初始化。
        ob = S("encoding", "de");

    //Page Tracking 内容信息：网页/文档的标题。默认文档标题。
    S("title", "dt", function () {
        return M.title || void 0
    });
    cb("contentGroup([0-9]+)", function (a) {
        return new bb(a[0], "cg" + a[1])
    });

    var
        //系统信息：指定屏幕颜色深度。由 create 方法初始化。
        pb = S("screenColors", "sd"),

        //系统信息：指定屏幕分辨率。由 create 方法初始化。
        qb = S("screenResolution", "sr"),

        //系统信息：指定浏览器/设备的可视面积。由 create 方法初始化。
        rb = S("viewportSize", "vp"),

        //系统信息：指定是否启用Java。由 create 方法初始化。
        sb = S("javaEnabled", "je"),

        //系统信息：指定flash版本。由 create 方法初始化。
        tb = S("flashVersion", "fl");

    //流量来源：活动编号（ID）
    S("campaignId", "ci");

    //流量来源：活动名称
    S("campaignName", "cn");

    //流量来源：活动源
    S("campaignSource", "cs");

    //流量来源：活动媒介
    S("campaignMedium", "cm");

    //流量来源：活动关键词
    S("campaignKeyword", "ck");

    //流量来源：活动内容
    S("campaignContent", "cc");


    var
        //Event Tracking 事件跟踪：指定事件类别。不能为空。
        ub = S("eventCategory", "ec"),

        //Event Tracking 事件跟踪：指定事件动作。不能为空。
        xb = S("eventAction", "ea"),

        //Event Tracking 事件跟踪：指定事件标签。
        yb = S("eventLabel", "el"),

        //Event Tracking 事件跟踪：指定事件的价值。值必须是非负数。
        zb = S("eventValue", "ev"),

        //Social Interactions 社交互动：指定了社交网络,例如 Facebook 或 Google Plus 。需要 social 冲击类型。
        Bb = S("socialNetwork", "sn"),

        //Social Interactions 社交互动：指定社交活动。例如在 Google Plus 上当用户点击“+ 1”按钮,社交活动是“plus”。需要 social 冲击类型。
        Cb = S("socialAction", "sa"),

        //Social Interactions 社交互动：社交活动的目标。通常是一个URL也可以是一段文本。需要 social 冲击类型。
        Db = S("socialTarget", "st"),
        Eb = S("l1", "plt"),
        Fb = S("l2", "pdt"),
        Gb = S("l3", "dns"),
        Hb = S("l4", "rrt"),
        Ib = S("l5", "srt"),
        Jb = S("l6", "tcp"),
        Kb = S("l7", "dit"),
        Lb = S("l8", "clt"),

        //User Timings 用户计时：指定用户定时类别。
        Mb = S("timingCategory", "utc"),

        //User Timings 用户计时：指定用户定时变量名称。
        Nb = S("timingVar", "utv"),

        //User Timings 用户计时：指定用户定时标签。
        Ob = S("timingLabel", "utl"),

        //User Timings 用户计时：指定用户时间值。该值以毫秒为单位。
        Pb = S("timingValue", "utt");

    //应用跟踪：指定应用程序名称。只在应用视图(配置文件)可见。
    S("appName", "an");

    //应用跟踪：指定应用程序版本。只在应用视图(配置文件)可见。
    S("appVersion", "av", "");
    S("appId", "aid", "");
    S("appInstallerId", "aiid", "");

    //异常：指定一个异常的描述
    S("exDescription", "exd");

    //异常：指定是否异常是致命的。
    S("exFatal", "exf");
    var Nc = S("expId", "xid"),
        Oc = S("expVar", "xvar"),
        Rc = S("_utma", "_utma"),
        Sc = S("_utmz", "_utmz"),
        Tc = S("_utmht", "_utmht"),
        Ua = S("_hc", void 0, 0),
        Xa = S("_ti", void 0, 0),
        Wa = S("_to", void 0, 20);

    //定制的维度和指标：每个自定义维度有一个相关的指数。有一个最大的20个自定义维度(200为溢价账户)。后缀名必须是一个正整数1到200(含200)之间的。
    cb("dimension([0-9]+)", function (a) {
        return new bb(a[0], "cd" + a[1])
    });

    //定制的维度和指标：每个自定义指标有一个相关的指数。有一个最大的20个自定义指标(200为溢价账户)。后缀名必须是一个正整数1到200(含200)之间的。
    cb("metric([0-9]+)", function (a) {
        return new bb(a[0], "cm" + a[1])
    });

    //Cross Domain Tracking ：链接参数
    S("linkerParam", void 0, void 0, Bc, db);
    S("usage", "_u", void 0, function () {
        return pa.M()
    }, db);

    //常规：强制使用 https 信标方式发送计数的URL
    S("forceSSL", void 0, void 0, function () {
        return Ba
    }, function (a, b, c) {
        Ba = !!c
    });
    var ed = S("joinId", "jid");
    cb("\\&(.*)", function (a) {
        var b = new bb(a[0], a[1]), c = yc(a[0][F](1));
        c && (b.n = function (a) {
            return a.get(c)
        }, b.o = function (a, b, g, ca) {
            a.set(c, g, ca)
        }, b.p = void 0);
        return b
    });
    var Qb = T("oot"),
        dd = S("previewTask"),
        Rb = S("checkProtocolTask"),
        Sb = S("checkStorageTask"),
        Uc = S("historyImportTask"),
        Tb = S("samplerTask"),
        Vb = T("rateLimiterTask"),
        Wb = S("buildHitTask"),
        Xb = S("sendHitTask"),
        Vc = S("ceTask"),

        //只能通过create方法创建：跟踪对象名称
        V = T("name"),

        //只能通过create方法创建：匿名标识一个浏览器实例。默认情况下,这个值是作为第一方cookie存储、分析跟踪，两年到期。
        Q = T("clientId", "cid"),
        Na = T("trackingId", "tid"),

        //只能通过create方法创建：用于存储分析数据的cookie名称
        U = T("cookieName", void 0, "_ga"),

        //只能通过create方法创建：指定用来存储分析cookie的域。
        W = T("cookieDomain"),

        //
        Yb = T("cookiePath", void 0, "/"),

        //只能通过create方法创建：指定cookie过期时间,单位为秒。
        Zb = T("cookieExpires", void 0, 63072E3),

        //只能通过create方法创建：遗留Cookie域。这个字段是用来配置 analytics.js 如何搜索早期 Google Analytics 生成的cookie跟踪脚本如ga.js和urchin.js。
        $b = T("legacyCookieDomain"),
        Wc = T("legacyHistoryImport", void 0, !0),
        ac = T("storage", void 0, "cookie"),
        bc = T("allowLinker", void 0, !1),

        //只能通过create方法创建：允许锚点参数
        cc = T("allowAnchor", void 0, !0),

        //只能通过create方法创建：抽样率
        Ka = T("sampleRate", "sf", 100),

        //只能通过create方法创建：网站速度采样率
        dc = T("siteSpeedSampleRate", void 0, 1),

        //只能通过create方法创建：总是发送推荐源(Referrer)
        ec = T("alwaysSendReferrer", void 0, !1);

    /**
     * 将 analytics.js 中的属性和方法赋给 window.命名空间
     * @constructor
     */
    function Cc() {
        var a = $;

        X("create", a, a.create, 3);


        X("getByName", a, a.j, 5);
        X("getAll", a, a.K, 6);
        a = pc[z];
        X("get", a, a.get, 7);
        X("set", a, a.set, 4);
        X("send", a, a.send, 2);
        a = Ya[z];
        X("get", a, a.get);
        X("set", a, a.set);
        (O.gaplugins = O.gaplugins || {}).Linker = Dc;
        a = Dc[z];
        Z.C("linker", Dc);

        //
        X("decorate", a, a.Q, 20);
        X("autoLink", a, a.S, 25);
        Z.C("displayfeatures", fd)
    }

    /**
     *
     * @param a {String} 方法名称
     * @param b {Object} Google Analytics 的命名空间(全局变量)
     * @param c {Function}
     * @param d {Number}
     * @constructor
     */
    function X(a, b, c, d) {
        b[a] = function () {
            try {
                return d && J(d), c[G](this, arguments)
            } catch (b) {
                var g = b && b[v];
                if (!(1 <= 100 * n.random())) {
                    var ca = ["t=error", "_e=exc", "_v=j13", "sr=1"];
                    a && ca[p]("_f=" + a);
                    g && ca[p]("_m=" + sa(g[F](0, 100)));
                    ca[p]("aip=1");
                    ca[p]("z=" + ra());
                    Ga(ca[H]("&"))
                }
                throw b;
            }
        }
    };

    /**
     * 获取浏览器flash player插件的版本
     * @returns {*}
     */
    function fc() {
        var a, b, c;
        if ((c = (c = O[oa]) ? c.plugins : null) && c[y])for (var d = 0; d < c[y] && !b; d++) {
            var e = c[d];
            -1 < e[v][t]("Shockwave Flash") && (b = e.description)
        }
        if (!b)try {
            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
            b = a.GetVariable("$version")
        } catch (g) {
        }
        if (!b)try {
            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
            b = "WIN 6,0,21,0",
            a.AllowScriptAccess = "always",
            b = a.GetVariable("$version")
        } catch (ca) {
        }
        if (!b)try {
            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
            b = a.GetVariable("$version")
        } catch (l) {
        }
        b && (a = b[m](/[\d]+/g)) && 3 <= a[y] && (b = a[0] + "." + a[1] + " r" + a[2]);
        return b || void 0
    };

    /**
     *
     * @param a
     * @param b
     */
    var gc = function (a, b) {
        var c = n.min(R(a, dc), 100);
            if (!(La(P(a, Q)) % 100 >= c) && (c = {}, Ec(c) || Fc(c))) {
                var d = c[Eb];
                void 0 == d || Infinity == d || isNaN(d) || (0 < d ? (Y(c, Gb), Y(c, Jb), Y(c, Ib), Y(c, Fb), Y(c, Hb), Y(c, Kb), Y(c, Lb), b(c)) : ta(O, "load", function () {
                    gc(a, b)
                }, !1))
            }
        },
        Ec = function (a) {
            var b = O.performance || O.webkitPerformance,
                b = b && b.timing;
            if (!b)return!1;
            var c = b.navigationStart;
            if (0 == c)return!1;
            a[Eb] = b.loadEventStart - c;
            a[Gb] = b.domainLookupEnd - b.domainLookupStart;
            a[Jb] = b.connectEnd - b.connectStart;
            a[Ib] = b.responseStart - b.requestStart;
            a[Fb] = b.responseEnd - b.responseStart;
            a[Hb] = b.fetchStart - c;
            a[Kb] = b.domInteractive - c;
            a[Lb] = b.domContentLoadedEventStart - c;
            return!0
        },
        Fc = function (a) {
            if (O.top != O)return!1;
            var b = O.external, c = b && b.onloadT;
            b && !b.isValidLoadTime && (c = void 0);
            2147483648 < c && (c = void 0);
            0 < c && b.setPageReadyTime();
            if (void 0 == c)return!1;
            a[Eb] = c;
            return!0
        },
        Y = function (a, b) {
            var c = a[b];
            if (isNaN(c) || Infinity == c || 0 > c){
                a[b] = void 0
            }
        };
    var hc = !1,
        mc = function (a) {
            if ("cookie" == P(a, ac)) {
                var b = P(a, U), c;
                c = ka(P(a, Q));
                var d = ic(P(a, W)), e = jc(P(a, Yb));
                1 < e && (d += "-" + e);
                c = ["GA1", d, c][H](".");
                var d = kc(P(a, Yb)),
                    e = lc(P(a, W)),
                    g = 1E3 * R(a, Zb);
                a = P(a, Na);
                zc(b, c, d, e, a, g) && (hc = !0)
            }
        },
        nc = function (a) {
            if ("cookie" == P(a, ac) && !hc && (mc(a), !hc)){
                throw"abort";
            }
        },
        Yc = function (a) {
            if (a.get(Wc)) {
                var b = P(a, W), c = P(a, $b) || eb(), d = Xc("__utma", c, b);
                d && (J(19), a.set(Tc, (new Date)[da](), !0), a.set(Rc, d.R), (b = Xc("__utmz", c, b)) && d[h] == b[h] && a.set(Sc, b.R))
            }
        },
        Gc = function (a, b, c) {
            for (var d =
                [], e = [], g, ca = 0; ca < a[y]; ca++) {
                var l = a[ca];
                if (l.r[c] == b)d[p](l); else void 0 == g || l.r[c] < g ? (e = [l], g = l.r[c]) : l.r[c] == g && e[p](l)
            }
            return 0 < d[y] ? d : e
        },
        lc = function (a) {
            return 0 == a[t](".") ? a.substr(1) : a
        },
        ic = function (a) {
            return lc(a)[A](".")[y]
        },
        kc = function (a) {
            if (!a)return"/";
            1 < a[y] && a.lastIndexOf("/") == a[y] - 1 && (a = a.substr(0, a[y] - 1));
            0 != a[t]("/") && (a = "/" + a);
            return a
        },
        jc = function (a) {
            a = kc(a);
            return"/" == a ? 1 : a[A]("/")[y]
        };

    function Xc(a, b, c) {
        "none" == b && (b = "");
        var d = [], e = ya(a);
        a = "__utma" == a ? 6 : 2;
        for (var g = 0; g < e[y]; g++) {
            var ca = ("" + e[g])[A](".");
            ca[y] >= a && d[p]({hash: ca[0], R: e[g], O: ca})
        }
        return 0 == d[y] ? void 0 : 1 == d[y] ? d[0] : Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0]
    }

    function Zc(a, b) {
        var c, d;
        null == a ? c = d = 1 : (c = La(a), d = La(0 == a[t](".") ? a[F](1) : "." + a));
        for (var e = 0; e < b[y]; e++)if (b[e][h] == c || b[e][h] == d)return b[e]
    };

    /**
     * Google Analytics 的 cookie值
     * @param a {} clientid
     * @returns {string}
     * @constructor
     */
    function Bc(a) {
        a = a.get(Q);
        var b = Ic(a, 0);
        return "_ga=1." + sa(b + "." + a)
    }

    function Ic(a, b) {
        for (var c = new Date, d = O.screen || {}, e = O[oa], g = e.plugins || [], c = [a, e.userAgent, d.width, d.height, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b], d = 0; d < g[y]; ++d){
            c[p](g[d].description);
        }
        return La(c[H]("."))
    }

    /**
     *  Linker
     * @param a
     * @constructor
     */
    var Dc = function (a) {
        this.target = a
    };

    /**
     *
     * @param a
     * @param b
     * @returns {*}
     * @constructor
     */
    Dc[z].Q = function (a, b) {
        var c = /(.*)([?&#])(?:_ga=[^&]*)(?:&?)(.*)/.exec(a);
        c && 3 <= c[y] && (a = c[1] + (c[3] ? c[2] + c[3] : ""));
        var c = this.target.get("linkerParam"), d = a[t]("?"), e = a[t]("#");
        b ? a += (-1 == e ? "#" : "&") + c : (d = -1 == d ? "?" : "&", a = -1 == e ? a + (d + c) : a[F](0, e) + d + c + a[F](e));
        return a
    };

    /**
     * 监听页面 mousedown、touchstart 和 keyup 事件，查找 a或 area标签的 href属性。个人认为可能和监测“跳出率”指标有关
     * @param a {}
     * @param b {}
     * @constructor
     */
    Dc[z].S = function (a, b) {
        function c(c) {
            try {
                c = c || O.event;
                var g;
                t:{
                    var ca = c.target || c.srcElement;
                    for (c = 100; ca && 0 < c;) {
                        if (ca[Ab] && ca.nodeName[m](/^a(?:rea)?$/i)) {
                            g = ca;
                            break t
                        }
                        ca = ca[Ub];
                        c--
                    }
                    g = {}
                }
                if ("http:" == g[E] || "https:" == g[E]) {
                    var l;
                    t:{
                        var k = g[ma] || "";
                        if (k != M[B][ma]){
                            for (ca = 0; ca < a[y]; ca++){
                                if (0 <= k[t](a[ca])) {
                                    l = !0;
                                    break t
                                }
                            }
                        }
                        l = !1
                    }
                    l && (g.href = d.Q(g[Ab], b))
                }
            } catch (w) {
                J(26)
            }
        }

        var d = this;
        ta(M, "mousedown", c, !1);
        ta(M, "touchstart", c, !1);
        ta(M, "keyup", c, !1)
    };


    var gd = function (a) {
            return a.get(V) && "t0" != a.get(V) ? "_dc_" + ka(a.get(V)) : "_dc"
        },
        hd = function (a) {
            if (a.get(ed)) {
                var b = new N, c = function (c) {
                    b.set($a(c).p, a.get(c))
                };
                c(hb);
                c(ib);
                c(Na);
                c(Q);
                c(ed);
                var d = R(a, "forceSSL") || "https:" == M[B][E] ? "https:" : "http:", d = d + "//stats.g.doubleclick.net/collect?t=dc&aip=1&";
                b.map(function (a, c) {
                    d += sa(a) + "=" + sa("" + c) + "&"
                });
                d += "z=" + ra();
                Ca(d);
                a.set(ed, "", !0)
            }
        },
        fd = function (a) {
            J(29);
            a = a.b;
            var b = a.get(Wb);
            a.set(Wb, function (a) {
                a.get(ed) || (-1 != M[r][t](gd(a) + "=1") ? a.set(ed, "", !0) : (gd(a),
                    zc(gd(a), "1", a.get(Yb), a.get(W), a.get(Na), 6E5) ? a.set(ed, "" + ra(), !0) : J(30)));
                return b(a)
            });
            var c = a.get(Xb);
            a.set(Xb, function (a) {
                var b = c(a);
                hd(a);
                return b
            })
        };

    function $c() {
        var a = O.gaGlobal = O.gaGlobal || {};
        return a.hid = a.hid || ra()
    };
    var ad,
        bd = function (a, b, c) {
            if (!ad) {
                var d;
                d = M[B][h];
                var e = O[v],
                    g = /^#?gaso=([^&]*)/;
                if (e = (d = (d = d && d[m](g) || e && e[m](g)) ? d[1] : ya("GASO")[0] || "") && d[m](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))zc("GASO", "" + d, c, b, a, 0), f._udo || (f._udo = b), f._utcp || (f._utcp = c), a = e[1], vc("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + ra(), "_gasojs");
                ad = !0
            }
        };
    var pc = function (a) {
            function b(a, c) {
                d.b[q].set(a, c)
            }

            function c(a, c) {
                b(a, c);
                d.filters.add(a)
            }

            var d = this;
            this.b = new Ya;
            this.filters = new Ha;
            b(V, a[V]);
            b(Na, a[Na]);
            b(U, a[U]);
            b(W, a[W] || eb());
            b(Yb, a[Yb]);
            b(Zb, a[Zb]);
            b($b, a[$b]);
            b(Wc, a[Wc]);
            b(bc, a[bc]);
            b(cc, a[cc]);
            b(Ka, a[Ka]);
            b(dc, a[dc]);
            b(ec, a[ec]);
            b(ac, a[ac]);
            b(hb, 1);
            b(ib, "j13");
            c(Qb, Ma);
            c(dd, cd);
            c(Rb, Oa);
            c(Sb, nc);
            c(Uc, Yc);
            c(Tb, Ja);
            c(Vb, Ta);
            c(Vc, Hc);
            c(Wb, Pa);
            c(Xb, Sa);
            Jc(this.b, a[Q]);
            Kc(this.b);
            this.b.set(jb, $c());
            bd(this.b.get(Na), this.b.get(W), this.b.get(Yb))
        },

        Jc = function (a, b) {
            if ("cookie" == P(a, ac)) {
                hc = !1;
                var c;
                i:{
                    var d = ya(P(a, U));
                    if (d && !(1 > d[y])) {
                        c = [];
                        for (var e = 0; e < d[y]; e++) {
                            var g;
                            g = d[e][A](".");
                            var ca = g.shift();
                            ("GA1" == ca || "1" == ca) && 1 < g[y] ? (ca = g.shift()[A]("-"), 1 == ca[y] && (ca[1] = "1"), ca[0] *= 1, ca[1] *= 1, g = {r: ca, s: g[H](".")}) : g = void 0;
                            g && c[p](g)
                        }
                        if (1 == c[y]) {
                            J(13);
                            c = c[0].s;
                            break i
                        }
                        if (0 == c[y])J(12); else {
                            J(14);
                            d = ic(P(a, W));
                            c = Gc(c, d, 0);
                            if (1 == c[y]) {
                                c = c[0].s;
                                break i
                            }
                            d = jc(P(a, Yb));
                            c = Gc(c, d, 1);
                            c = c[0] && c[0].s;
                            break i
                        }
                    }
                    c = void 0
                }
                c || (c = P(a, W), d = P(a, $b) || eb(), c = Xc("__utma",
                    d, c), (c = void 0 == c ? void 0 : c.O[1] + "." + c.O[2]) && J(10));
                c && (a[q].set(Q, c), hc = !0)
            }
            if (e = (c = M[B][Ab][m]("(?:&|\\?)_ga=([^&]*)")) && 2 == c[y] ? c[1] : "")a.get(bc) ? (c = e[t]("."), -1 == c ? J(22) : (d = e[F](c + 1), "1" != e[F](0, c) ? J(22) : (c = d[t]("."), -1 == c ? J(22) : (e = d[F](0, c), c = d[F](c + 1), e != Ic(c, 0) && e != Ic(c, -1) && e != Ic(c, -2) ? J(23) : (J(11), a[q].set(Q, c)))))) : J(21);
            b && (J(9), a[q].set(Q, sa(b)));
            if (!a.get(Q))if (c = (c = O.gaGlobal && O.gaGlobal.vid) && -1 != c[ga](/^(?:utma\.)?\d+\.\d+$/) ? c : void 0)J(17), a[q].set(Q, c); else {
                J(8);
                c = O[oa];
                c = c.appName +
                    c.version + c.platform + c.userAgent + (M[r] ? M[r] : "") + (M.referrer ? M.referrer : "");
                d = c[y];
                for (e = O.history[y]; 0 < e;)c += e-- ^ d++;
                a[q].set(Q, [ra() ^ La(c) & 2147483647, n.round((new Date)[da]() / 1E3)][H]("."))
            }
            mc(a)
        },
        Kc = function (a) {
            var b = O[oa], c = O.screen, d = M[B];
            a.set(lb, va(a.get(ec)));
            d && a.set(kb, d[E] + "//" + d[ma] + d.pathname + d[ga]);
            c && a.set(qb, c.width + "x" + c.height);
            c && a.set(pb, c.colorDepth + "-bit");
            var c = M.documentElement, e = M.body, g = e && e[la] && e[na], ca = [];
            c && c[la] && c[na] && ("CSS1Compat" === M.compatMode || !g) ? ca = [c[la], c[na]] :
                g && (ca = [e[la], e[na]]);
            c = 0 >= ca[0] || 0 >= ca[1] ? "" : ca[H]("x");
            a.set(rb, c);
            a.set(tb, fc());
            a.set(ob, M.characterSet || M.charset);
            a.set(sb, b && "function" === typeof b.javaEnabled && b.javaEnabled() || !1);
            a.set(nb, (b && (b.language || b.browserLanguage) || "")[I]());
            if (d && a.get(cc) && (b = M[B][h])) {
                b = b[F](1);
                b = b[A]("&");
                d = [];
                for (c = 0; c < b[y]; ++c) {
                    0 != b[c][t]("utm_id") && 0 != b[c][t]("utm_campaign") && 0 != b[c][t]("utm_source") && 0 != b[c][t]("utm_medium") && 0 != b[c][t]("utm_term") && 0 != b[c][t]("utm_content") || d[p](b[c]);
                }
                0 < d[y] && (b = "#" + d[H]("&"),a.set(kb, a.get(kb) + b))
            }
        };

    /**
     * Tracker Object Methods ：返回与给定字段关联的值。可以通过一个跟踪对象的实例调用。
     * @param a fieldName {String} 要检索字段的名称
     * @returns {String|Number|Object} 给定字段的值
     */
    pc[z].get = function (a) {
        return this.b.get(a)
    };

    /**
     * Tracker Object Methods ：更新给定字段关联的值。也可以通过 ga('set', fieldObject); 的方式使用一组字段/值对实现批量更新
     *
     * @param a fieldName {String} 设置字段的名称
     * @param b value {String|Number|Object} 与给定字段关联的新值。
     * @param fieldObject {Object} 一个包含一个或多个设置的字段/值对的对象。
     */
    pc[z].set = function (a, b) {
        this.b.set(a, b)
    };

    /**
     *
     * @type {{pageview: Array, event: Array, social: Array, timing: Array}}
     */
    var qc = {
        pageview: [mb],
        event: [ub, xb, yb, zb],
        social: [Bb, Cb, Db],
        timing: [Mb, Nb, Pb, Ob]
    };

    /**
     *  Tracker Object Methods ：向谷歌收集服务器发送一个跟踪的信标。只允许用户覆盖这次冲击中一个或多个字段值的可选的字段对象。
     *
     * @param a hitType {String} 发送冲击的类型。支持的值有: pageview、event、social、timing
     * @param opt_fieldObject {Object} 一个包含一个或多个字段/值对 用来覆盖这次冲击一个字段值的对象。这次冲击完成后，字段将恢复为初始值。
     */
    pc[z].send = function (a) {
        if (!(1 > arguments[y])) {
            var b, c;
            "string" === typeof arguments[0] ? (b = arguments[0], c = [][ha][C](arguments, 1)) : (b = arguments[0] && arguments[0][Va], c = arguments);
            b && (c = wa(qc[b] || [], c), c[Va] = b, this.b.set(c, void 0, !0), this.filters.execute(this.b), "pageview" == b && Lc(this), this.b[q].m = {})
        }
    };

    /**
     *
     * @param a
     * @constructor
     */
    var Lc = function (a) {
        a.I || (a.I = !0, gc(a.b, function (b) {
            a.send("timing", b)
        }))
    };


    var
        /**
         * HTML5 Page Visibility API：检测页面是否预渲染中并且不可见状态
         * @param a {String} 回调函数名称
         * @returns {boolean}
         */
        rc = function (a) {
            /*
             “visible” 当前页面至少部分可见
             “hidden” 页面不可见(可能是后台tab或者最小化了)
             “prerender” 预渲染中并且不可见,该状态可以是开始状态并且向其他两个状态变化但不可能从其他状态转变到该状态
             */
            if ("prerender" == M.webkitVisibilityState){
                return!1;
            }
            a();
            return!0
        },

        /**
         * HTML5 Page Visibility API：增加或移除监听页面对于用户的可见性的事件
         * @param a {Function} 回调函数
         * @returns {boolean}
         */
        Mc = function (a) {
            if (!rc(a)) {
                J(16);
                var b = !1,
                    c = function () {
                    !b && rc(a) && (b = !0, ua(M, "webkitvisibilitychange", c))
                };
                ta(M, "webkitvisibilitychange", c)
            }
        };
    var Z = {
        F: "/plugins/ua/",
        D: /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/
    };
    Z.k = new N;
    Z.f = [];

    /**
     *
     * @param a
     */
    var sc = function (a) {
        if (K(a[0]))this.u = a[0]; else {
            var b = Z.D.exec(a[0]);
            null != b && 4 == b[y] && (this.c = b[1] || "t0", this.e = b[2] || "", this.d = b[3], this.a = [][ha][C](a, 1), this.e || (this.A = "create" == this.d, this.i = "require" == this.d, this.g = "provide" == this.d));
            if (!K(a[0])) {
                b = a[1];
                a = a[2];
                if (!this.d)throw"abort";
                if (this.i && (!qa(b) || "" == b))throw"abort";
                if (this.g && (!qa(b) || "" == b || !K(a)))throw"abort";
                if (0 <= this.c[t](".") || 0 <= this.c[t](":") || 0 <= this.e[t](".") || 0 <= this.e[t](":"))throw"abort";
                if (this.g && "t0" != this.c)throw"abort";
            }
        }
    };

    /**
     *
     * @param a
     * @param b
     * @param c
     * @returns {boolean}
     * @constructor
     */
    Z.B = function (a, b, c) {
        var d = Z.k.get(a);
        if (!K(d))return!1;
        b.plugins_ = b.plugins_ || new N;
        b.plugins_.set(a, new d(b, c || {}));
        return!0
    };

    /**
     *
     * @param a
     * @param b
     * @constructor
     */
    Z.C = function (a, b) {
        Z.k.set(a, b)
    };

    /**
     *
     * @param a
     */
    Z.execute = function (a) {
        var b = Z.J[G](Z, arguments), b = Z.f.concat(b);
        for (Z.f = []; 0 < b[y] && !Z.v(b[0]) && !(b.shift(), 0 < Z.f[y]););
        Z.f = Z.f.concat(b)
    };

    /**
     *
     * @param a
     * @returns {Array}
     * @constructor
     */
    Z.J = function (a) {
        for (var b = [], c = 0; c < arguments[y]; c++)try {
            var d = new sc(arguments[c]);
            if (d.g)Z.v(d); else {
                if (d.i) {
                    var e = d.a[1];
                    if (!K(Z.k.get(d.a[0])) && !d.H && e) {
                        var g = e + "", e = g && 0 <= g[t]("/") ? g : "//www.google-analytics.com" + Z.F + g;
                        var ca = tc("" + e), l;
                        var k = ca[E], w = M[B][E];
                        l = "https:" == k || k == w ? !0 : "http:" != k ? !1 : "http:" == w;
                        var s;
                        if (s = l) {
                            var g = ca, D = tc(M[B][Ab]);
                            if (g.G || 0 <= g.url[t]("?") || 0 <= g.path[t]("://"))s = !1; else if (g[x] == D[x] && g[ja] == D[ja])s = !0; else {
                                var vb = "http:" == g[E] ? 80 : 443;
                                s = "www.google-analytics.com" == g[x] &&
                                    (g[ja] || vb) == vb && 0 == g.path[t]("/plugins/") ? !0 : !1
                            }
                        }
                        s && (d.H = !!vc(ca.url))
                    }
                }
                b[p](d)
            }
        } catch (wb) {
        }
        return b
    };

    /**
     *
     * @param a
     * @returns {boolean}
     */
    Z.v = function (a) {
        try {
            if (a.u)a.u[C](O, $.j("t0")); else if (a.g)Z.C(a.a[0], a.a[1]); else {
                var b = a.c == gb ? $ : $.j(a.c);
                if (a.A)"t0" == a.c && $.create[G]($, a.a); else if (b)if (a.i) {
                    if (!Z.B(a.a[0], b, a.a[2]))return!0
                } else a.e && (b = b.plugins_.get(a.e)), b[a.d][G](b, a.a)
            }
        } catch (c) {
        }
    };

    /**
     *
     * @param a
     * @returns {{protocol: *, host: *, port: *, path: *, G: (*|string), url: (*|string)}}
     */
    function tc(a) {
        function b(a) {
            var c = (a[ma] || "")[A](":")[0][I](), b = (a[E] || "")[I](), b = 1 * a[ja] || ("http:" == b ? 80 : "https:" == b ? 443 : "");
            a = a.pathname || "";
            0 == a[t]("/") || (a = "/" + a);
            return[c, "" + b, a]
        }

        var c = M[u]("a");
        c.href = M[B][Ab];
        var d = (c[E] || "")[I](), e = b(c), g = c[ga] || "", ca = d + "//" + e[0] + (e[1] ? ":" + e[1] : "");
        0 == a[t]("//") ? a = d + a : 0 == a[t]("/") ? a = ca + a : a && 0 != a[t]("?") ? 0 > a[A]("/")[0][t](":") && (a = ca + e[2][F](0, e[2].lastIndexOf("/")) + "/" + a) : a = ca + e[2] + (a || g);
        c.href = a;
        d = b(c);
        return{protocol: (c[E] || "")[I](), host: d[0], port: d[1],
            path: d[2], G: c[ga] || "", url: a || ""}
    };

    /**
     * Google Analytics 的命名空间
     * @param a
     */
    var $ = function (a) {
        J(1);
        Z.execute[G](Z, [arguments])
    };
    $.h = {};
    $.P = [];
    $.L = 0;
    $.answer = 42;
    var uc = [Na, W, V];

    /**
     * ga Object Methods ：创建一个新的默认跟踪器对象。
     *
     * @param a trackingId {String} 被跟踪的网站web属性ID
     * @param  opt_configObject {Object} 一个包含配置字段/值对的可选的对象。
     * @returns {*}
     */
    $.create = function (a) {
        var b = wa(uc, [][ha][C](arguments));
        b[V] || (b[V] = "t0");
        var c = "" + b[V];
        if ($.h[c]){
            return $.h[c];
        }
        b = new pc(b);
        $.h[c] = b;
        $.P[p](b);
        return b
    };

    /**
     *  ga Object Methods ：getByName
     *
     * @param a name {String} 要获取的跟踪器的名字
     * @returns {*} 一个跟踪器对象
     */
    $.j = function (a) {
        return $.h[a]
    };

    /**
     * ga Object Methods ：getAll
     * @returns {*}  一个所有跟踪对象的数组。
     * @constructor
     */
    $.K = function () {
        return $.P[ha](0)
    };

    /**
     *
     * @constructor
     */
    $.N = function () {
        var a = O[gb];
        if (!a || 42 != a.answer) {
            $.L = a && a.l;//将埋点中的时间戳，存为 命名空间的属性
            $.loaded = !0; //标识为已加载
            O[gb] = $;
            Cc();
            var b = a && a.q;
            "[object Array]" == Object[z].toString[C](Object(b)) && Mc(function () {
                Z.execute[G]($, b)
            })
        }
    };

    /**
     *
     */
    $.N();

    /**
     *
     * @param a
     * @returns {number}
     * @constructor
     */
    function La(a) {
        var b = 1,
            c = 0,
            d;
        if (a) {
            for (b = 0, d = a[y] - 1; 0 <= d; d--) {
                c = a.charCodeAt(d),
                b = (b << 6 & 268435455) + c + (c << 14),
                c = b & 266338304,
                b = (0 != c) ? (b ^ c >> 21) : b;
            }

        }
        return b;
    };
})(window);