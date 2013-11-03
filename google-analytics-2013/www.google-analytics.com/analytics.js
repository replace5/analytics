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
    var _encodeURIComponent = encodeURIComponent,
        _o_window = window,
        _setTimeout = setTimeout,
        _o_math = Math,
        _o_regexp = RegExp;

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
    var prop_push = "push",
        prop_hash = "hash",
        prop_slice = "slice",
        prop_data = "data",
        prop_cookie = "cookie",
        prop_indexOf = "indexOf",
        prop_match = "match",
        prop_defaultValue = "defaultValue",
        prop_port = "port",
        prop_createElement = "createElement",
        prop_name = "name",
        prop_getTime = "getTime",
        prop_host = "host",
        prop_length = "length",
        prop_prototype = "prototype",
        prop_clientWidth = "clientWidth",
        prop_split = "split",
        prop_location = "location",
        prop_hostname = "hostname",
        prop_search = "search",
        prop_call = "call",
        prop_protocol = "protocol",
        prop_clientHeight = "clientHeight",
        prop_href = "href",
        prop_substring = "substring",
        prop_apply = "apply",
        prop_navigator = "navigator",
        prop_parentNode = "parentNode",
        prop_join = "join",
        prop_toLowerCase = "toLowerCase";

    /**
     *  生成参数 _u : usage
     */
    var pa = new function () {
        var a = [];
        this.set = function (b) {
            a[b] = !0
        };
        this.M = function () {
            for (var b = [], c = 0; c < a[prop_length]; c++){
                a[c] && (b[_o_math.floor(c / 6)] = b[_o_math.floor(c / 6)] ^ 1 << c % 6);
            }
            for (c = 0; c < b[prop_length]; c++){
                b[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[c] || 0);
            }
            return b[prop_join]("") + "~"
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
     * @param fun {*}
     * @returns {boolean}
     */
    function isFunction(fun) {
        return "function" == typeof fun
    }

    /**
     * 判断参数 str 是否字符串
     * @param str {*}
     * @returns {boolean}
     */
    function isString(str) {
        return void 0 != str && -1 < (str.constructor + "")[prop_indexOf]("String")
    }

    /**
     * 0和2147483647之间的伪随机数
     * @returns {number} 可能为0，但总是小于2147483647，[0,2147483647)
     */
    function Random() {
        return _o_math.round(2147483647 * _o_math.random())
    }

    /**
     * createElement('img')方式创建图片元素
     * @param path {String} 图片路径
     * @returns {*} 图片路径为path的图片元素
     */
    function createImg(path) {
        var img = _o_document[prop_createElement]("img");
        img.width = 1;
        img.height = 1;
        img.src = path;
        return img
    }

    /**
     * 空函数对象
     * @constructor
     */
    function emptyFunction() {
    }

    /**
     * 使用encodeURIComponent将 uri 编码
     * @param uri {String} 要编码的字符串。
     * @returns {String} 编码后的字符串。
     */
    function Encode(uri) {
        if (_encodeURIComponent instanceof Function){
            return _encodeURIComponent(uri);
        }
        J(28);
        return uri
    }

    /**
     * 将使用encodeURIComponent编码后的uri中的小括号做URL编码
     * @param uri {String} 含有小括号的字符串。
     * @returns {String} 小括号被编码后的字符串。
     */
    function encodeParenthesis(uri) {
        return Encode(uri).replace(/\(/g, "%28").replace(/\)/g, "%29")
    }

    /**
     * 添加监听事件。
     * @param element {Element} 注册方法的对象。
     * @param type {String} 要注册方法的事件。
     * @param listener {Function} 面加载完毕的回调方法。
     * @param useCapture {Boolean}
     */
    var AddListener = function (element, type, listener, useCapture) {
        try {
            element.addEventListener ? element.addEventListener(type, listener, !!useCapture) : element.attachEvent && element.attachEvent("on" + type, listener)
        } catch (e) {
            J(27)
        }
    },

    /**
     *  解除绑定事件
     */
    RemoveListener = function (element, type, listener) {
        element.removeEventListener ? element.removeEventListener(type, listener, !1) : element.detachEvent && element.detachEvent("on" + type, listener)
    };

    /**
     * 使用createElement方法创建脚本请求。
     * @param {String} url 脚本请求的URL地址。
     * @param {String} id 脚本ID。
     */
    function createScript(url, id) {
        if (url) {
            var ctrl_script = _o_document[prop_createElement]("script");
            ctrl_script.type = "text/javascript";
            ctrl_script.async = !0;
            ctrl_script.src = url;
            ctrl_script.id = id;
            var first_script = _o_document.getElementsByTagName("script")[0];
            first_script[prop_parentNode].insertBefore(ctrl_script, first_script)
        }
    }

    /**
     * 处理hostname主域名。
     * @returns {*} 处理过的hostname主域名。
     */
    function processHostname() {
        var hostname = "" + _o_document[prop_location][prop_hostname];
        return 0 == hostname[prop_indexOf]("www.") ? hostname[prop_substring](4) : hostname
    }

    /**
     * 处理referrer网址。
     * @param domain {String} 域名。
     * @return {String} 处理过的referrer网址。
     */
    function processReferrer(domain) {
        var referrer = _o_document.referrer;
        if (/^https?:\/\//i.test(referrer)) {
            if (domain) {
                return referrer;
            }
            domain = "//" + _o_document[prop_location][prop_hostname];
            var c = referrer[prop_indexOf](domain);
            if (5 == c || 6 == c)
                if (domain = referrer.charAt(c + domain[prop_length]), "/" == domain || "?" == domain || "" == domain || ":" == domain)
                    return;
            return referrer
        }
    }

    /**
     *
     * @param a {Object}
     * @param b {Array}
     * @returns {*}
     */
    function wa(a, b) {
        if (1 == b[prop_length] && null != b[0] && "object" === typeof b[0])
            return b[0];
        for (var c = {}, d = _o_math.min(a[prop_length] + 1, b[prop_length]), e = 0; e < d; e++)
            if ("object" === typeof b[e]) {
                for (var g in b[e])
                b[e].hasOwnProperty(g) && (c[g] = b[e][g]);
            break
            } else
                e < a[prop_length] && (c[a[e]] = b[e]);
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
    N[prop_prototype].set = function (a, b, c) {
        this.keys[prop_push](a);
        c ? this.m[":" + a] = b : this.w[":" + a] = b
    };

    /**
     * 对象N的原型属性 get
     * @param a
     * @returns {*}
     */
    N[prop_prototype].get = function (a) {
        return this.m.hasOwnProperty(":" + a) ? this.m[":" + a] : this.w[":" + a]
    };

    /**
     * 对象N的原型属性 map
     * @param a
     */
    N[prop_prototype].map = function (a) {
        for (var b = 0; b < this.keys[prop_length]; b++) {
            var c = this.keys[b], d = this.get(c);
            d && a(c, d)
        }
    };

    var _o_win = _o_window,
        _o_document = document,

        /**
         * 判断是否启用了不参与Google数据分析的扩展
         * 可参见 https://docs.google.com/document/d/1PyNXDRj69367K2U6NdOQlv22-hlcxhlNpzdn5wWTQ-w/edit?pli=1
         * @param flag {String} 是否启用 停用Google Anflaglytics（分析） 的标识。
         */
        getGaUserPrefs = function (flag) {
            var gaUserPrefs = _o_win._gaUserPrefs;
            if (gaUserPrefs && gaUserPrefs.ioo && gaUserPrefs.ioo() || flag && !0 === _o_win["ga-disable-" + flag]){
                return!0;
            }
            try {
                var external = _o_win.external;
                if (external && external._gaUserPrefs && "oo" == external._gaUserPrefs){
                    return!0
                }
            } catch (exp) {
            }
            return!1
        },

        /**
         *  0.1秒后执行a方法
         * @param callback {Function}
         */
        wait = function (callback) {
            _setTimeout(callback, 100)
        },

        /**
         *
         */
        ya = function (a) {
            var b = [],
                c = _o_document[prop_cookie][prop_split](";");
            a = _o_regexp("^\\s*" + a + "=\\s*(.*?)\\s*$");
            for (var d = 0; d < c[prop_length]; d++) {
                var e = c[d][prop_match](a);
                e && b[prop_push](e[1])
            }
            return b
        },

        /**
         * 设置Cookie的值。
         * @param key {String} Cookie的键。
         * @param value {String} Cookie的值。
         * @param path {String} Cookie的路径。
         * @param domain {String} Cookie的域。
         * @param flag {String} 是否启用 停用Google Analytics（分析） 的标识。
         * @param timeout {Number} Cookie的过期时间。
         */
        setCookie = function (key, value, path, domain, flag, timeout) {
            flag = getGaUserPrefs(flag) ? !1 : doubleclick_domain.test(_o_document[prop_location][prop_hostname]) || "/" == path && google_analytics_domain.test(domain) ? !1 : !0;
            if (!flag){
                return!1;
            }
            value && 200 < value[prop_length] && (value = value[prop_substring](0, 200), J(24));
            key = key + "=" + value + "; path=" + path + "; ";
            timeout && (key += "expires=" + (new Date((new Date)[prop_getTime]() + timeout)).toGMTString() + "; ");
            domain && "none" != domain && (key += "domain=" + domain + ";");
            domain = _o_document[prop_cookie];
            _o_document.cookie = key;
            return domain != _o_document[prop_cookie]
        },

        /**
         * google 域名的正则匹配
         */
        google_analytics_domain = _o_regexp(/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/),

        /**
         * doubleclick 域名的正则匹配
         */
        doubleclick_domain = _o_regexp(/(^|\.)doubleclick\.net$/i);

    var
        /**
         *  根据 location.protocol，返回 Google Analytics 的计数URL
         */
        oc = function () {
            return(Ba || "https:" == _o_document[prop_location][prop_protocol] ? "https:" : "http:") + "//www.google-analytics.com"
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
            b = b || emptyFunction;
            if (2036 >= a[prop_length]){
                // 通过 img标签src属性的方式 发送计数请求
                sendByImage(a, b);
            } else if (8192 >= a[prop_length]) {
                var c = b;
                //如果是Firefox浏览器且 数组不支持reduce方法
                if (0 <= _o_win[prop_navigator].userAgent[prop_indexOf]("Firefox") && ![].reduce){
                    throw new Ea(a[prop_length]);
                }
                //XDomain的方式异步 或 iframe标签src属性的方式 发送计数请求
                sendByXDomainRequest(a, c) || sendByIFrame(a, c)
            } else {
                throw new Da(a[prop_length]);
            }
        },

        /**
         * 使用图片对象发出请求。
         * @param src {String} 组装完毕的图片的地址。
         * @param callback {Function} 回调函数。
         */
        sendByImage = function (src, callback) {
            var c = createImg(oc() + "/collect?" + src);
            c.onload = c.onerror = function () {
                c.onload = null;
                c.onerror = null;
                callback()
            }
        },

        /**
         * IE浏览器中，通过 XDomainRequest方式 异步发送跨域的计数请求
         * @param param {String} 发送请求的参数串。
         * @param callback {Function} 回调函数。
         */
        sendByXDomainRequest = function (param, callback) {
            var c, d = _o_win.XDomainRequest;
            if (d){
                c = new d, c.open("POST", oc() + "/collect");
            } else if (d = _o_win.XMLHttpRequest){
                d = new d,
                "withCredentials"in d && (c = d, c.open("POST", oc() + "/collect", !0),
                c.setRequestHeader("Content-Type", "text/plain"));
            }
            if (c){
                return c.onreadystatechange = function () {
                    4 == c.readyState && (callback(), c = null)
                }, c.send(param), !0
            }
        },

        /**
         *  通过 iframe标签src属性的方式 发送计数请求
         * @param param {String} 发送请求的参数串。
         * @param callback {Function} 回调函数。
         */
        sendByIFrame = function (param, callback) {
            if (_o_document.body) {
                param = _encodeURIComponent(param);
                try {
                    var c = _o_document[prop_createElement]('<iframe name="' + param + '"></iframe>')
                } catch (d) {
                    c = _o_document[prop_createElement]("iframe"), fa(c, param)
                }
                c.height = "0";
                c.width = "0";
                c.style.display = "none";
                c.style.visibility =
                    "hidden";
                var e = _o_document[prop_location],
                    e = oc() + "/analytics_iframe.html#" + _encodeURIComponent(e[prop_protocol] + "//" + e[prop_host] + "/favicon.ico"),
                    g = function () {
                        c.src = "";
                        c[prop_parentNode] && c[prop_parentNode].removeChild(c)
                    };
                AddListener(_o_win, "beforeunload", g);
                var ca = !1, l = 0, k = function () {
                    if (!ca) {
                        try {
                            if (9 < l || c.contentWindow[prop_location][prop_host] == _o_document[prop_location][prop_host]) {
                                ca = !0;
                                g();
                                RemoveListener(_o_win, "beforeunload", g);
                                callback();
                                return
                            }
                        } catch (param) {
                        }
                        l++;
                        _setTimeout(k, 200)
                    }
                };
                AddListener(c, "load", k);
                _o_document.body.appendChild(c);
                c.src = e
            } else wait(function () {
                sendByIFrame(param, b)
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
    Ha[prop_prototype].add = function (a) {
        this.t[prop_push](a)
    };

    /**
     *
     */
    Ha[prop_prototype].execute = function (a) {
        try {
            for (var b = 0; b < this.t[prop_length]; b++) {
                var c = a.get(this.t[b]);
                c && isFunction(c) && c[prop_call](_o_win, a)
            }
        } catch (d) {
        }
        b = a.get(Ia);
        b != emptyFunction && isFunction(b) && (a.set(Ia, emptyFunction, !0), _o_setTimeout(b, 10))
    };

    /**
     *
     */
    function Ja(a) {
        if (100 != a.get(Ka) && Hash(P(a, Q)) % 1E4 >= 100 * R(a, Ka)){
            throw"abort";
        }
    }

    /**
     *
     */
    function Ma(a) {
        if (getGaUserPrefs(P(a, Na))){
            throw"abort";
        }
    }

    /**
     *  如果location.protocol不是http或https时，
     */
    function Oa() {
        var a = _o_document[prop_location][prop_protocol];
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
                void 0 != e && e != d[prop_defaultValue] && ("boolean" == typeof e && (e *= 1), b[prop_push](d.p + "=" + Encode("" + e)))
            }
        });
        b[prop_push]("z=" + Random());
        a.set(Ra, b[prop_join]("&"), !0)
    }

    /**
     *
     * @param a {}
     * @constructor
     */
    function Sa(a) {
        Ga(P(a, Ra), a.get(Ia));
        a.set(Ia, emptyFunction, !0)
    }

    /**
     *
     */
    function Hc(a) {
        var b = _o_win.gaData;
        b && (b.expId && a.set(Nc, b.expId), b.expVar && a.set(Oc, b.expVar))
    }

    /**
     *
     */
    function cd() {
        if (_o_win[prop_navigator] && "preview" == _o_win[prop_navigator].loadPurpose)throw"abort";
    };

    /**
     *
     */
    function Ta(a) {
        var b = R(a, Ua);
        500 <= b && J(15);
        var c = P(a, Va);
        if ("transaction" != c && "item" != c) {
            var c = R(a, Wa), d = (new Date)[prop_getTime](), e = R(a, Xa);
            0 == e && a.set(Xa, d);
            e = _o_math.round(2 * (d - e) / 1E3);
            0 < e && (c = _o_math.min(c + e, 20), a.set(Xa, d));
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
    Ya[prop_prototype].get = function (a) {
        var b = $a(a),
            c = this[prop_data].get(a);
        b && void 0 == c && (c = isFunction(b[prop_defaultValue]) ? b[prop_defaultValue]() : b[prop_defaultValue]);
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
    Ya[prop_prototype].set = function (a, b, c) {
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
            e && e.o ? e.o(a, b, c, d) : a[prop_data].set(b, c, d)
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
            if (!b)for (var c = 0; c < Za[prop_length]; c++) {
                var d = Za[c], e = d[0].exec(a);
                if (e) {
                    b = d[1](e);
                    Qa.set(b[prop_name], b);
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
            return b && b[prop_name]
        },
        /**
         *
         */
        S = function (a, b, c, d, e) {
            a = new bb(a, b, c, d, e);
            Qa.set(a[prop_name], a);
            return a[prop_name]
        },
        cb = function (a, b) {
            Za[prop_push]([_o_regexp("^" + a + "$"), b])
        },
        T = function (a, b, c) {
            return S(a, b, c, void 0, db)
        },
        db = function () {
        };

    /**
     * 矫正并设置 Google Analytics 的命名空间
     */
    var Pc;
    if (Pc = isString(_o_window.GoogleAnalyticsObject)) {
        var Qc = _o_window.GoogleAnalyticsObject;
        // 去除命名空间中的空白字符
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
        return _o_document.title || void 0
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
        var b = new bb(a[0], a[1]), c = yc(a[0][prop_substring](1));
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
        a = pc[prop_prototype];
        X("get", a, a.get, 7);
        X("set", a, a.set, 4);
        X("send", a, a.send, 2);
        a = Ya[prop_prototype];
        X("get", a, a.get);
        X("set", a, a.set);
        (_o_win.gaplugins = _o_win.gaplugins || {}).Linker = Dc;
        a = Dc[prop_prototype];
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
                return d && J(d), c[prop_apply](this, arguments)
            } catch (b) {
                var g = b && b[prop_name];
                if (!(1 <= 100 * _o_math.random())) {
                    var ca = ["t=error", "_e=exc", "_v=j13", "sr=1"];
                    a && ca[prop_push]("_f=" + a);
                    g && ca[prop_push]("_m=" + Encode(g[prop_substring](0, 100)));
                    ca[prop_push]("aip=1");
                    ca[prop_push]("z=" + Random());
                    Ga(ca[prop_join]("&"))
                }
                throw b;
            }
        }
    };

    /**
     * 获取浏览器FLASH播放器的版本号。
     * @return {String} FLASH播放器的版本号。
     */
    function getFlashVersion() {
        var _active_x_object, _version, _navigator;
        if ((_navigator = (_navigator = _o_win[prop_navigator]) ? _navigator.plugins : null) && _navigator[prop_length])
            for (var d = 0; d < _navigator[prop_length] && !_version; d++) {
                var e = _navigator[d];
                -1 < e[prop_name][prop_indexOf]("Shockwave Flash") && (_version = e.description)
            }
        if (!_version)try {
            _active_x_object = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
            _version = _active_x_object.GetVariable("$version")
        } catch (g) {
        }
        if (!_version)try {
            _active_x_object = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
            _version = "WIN 6,0,21,0",
            _active_x_object.AllowScriptAccess = "always",
            _version = _active_x_object.GetVariable("$version")
        } catch (ca) {
        }
        if (!_version)try {
            _active_x_object = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
            _version = _active_x_object.GetVariable("$version")
        } catch (l) {
        }
        _version && (_active_x_object = _version[prop_match](/[\d]+/g)) && 3 <= _active_x_object[prop_length] && (_version = _active_x_object[0] + "." + _active_x_object[1] + " r" + _active_x_object[2]);
        return _version || void 0
    };

    /**
     *
     * @param a
     * @param b
     */
    var gc = function (a, b) {
        var c = _o_math.min(R(a, dc), 100);
            if (!(Hash(P(a, Q)) % 100 >= c) && (c = {}, Ec(c) || Fc(c))) {
                var d = c[Eb];
                void 0 == d || Infinity == d || isNaN(d) || (0 < d ? (Y(c, Gb), Y(c, Jb), Y(c, Ib), Y(c, Fb), Y(c, Hb), Y(c, Kb), Y(c, Lb), b(c)) : AddListener(_o_win, "load", function () {
                    gc(a, b)
                }, !1))
            }
        },
        Ec = function (a) {
            var b = _o_win.performance || _o_win.webkitPerformance,
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
            if (_o_win.top != _o_win)return!1;
            var b = _o_win.external, c = b && b.onloadT;
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
                c = encodeParenthesis(P(a, Q));
                var d = ic(P(a, W)), e = jc(P(a, Yb));
                1 < e && (d += "-" + e);
                c = ["GA1", d, c][prop_join](".");
                var d = kc(P(a, Yb)),
                    e = lc(P(a, W)),
                    g = 1E3 * R(a, Zb);
                a = P(a, Na);
                setCookie(b, c, d, e, a, g) && (hc = !0)
            }
        },
        nc = function (a) {
            if ("cookie" == P(a, ac) && !hc && (mc(a), !hc)){
                throw"abort";
            }
        },
        Yc = function (a) {
            if (a.get(Wc)) {
                var b = P(a, W), c = P(a, $b) || processHostname(), d = Xc("__utma", c, b);
                d && (J(19), a.set(Tc, (new Date)[prop_getTime](), !0), a.set(Rc, d.R), (b = Xc("__utmz", c, b)) && d[prop_hash] == b[prop_hash] && a.set(Sc, b.R))
            }
        },
        Gc = function (a, b, c) {
            for (var d =
                [], e = [], g, ca = 0; ca < a[prop_length]; ca++) {
                var l = a[ca];
                if (l.r[c] == b)d[prop_push](l); else void 0 == g || l.r[c] < g ? (e = [l], g = l.r[c]) : l.r[c] == g && e[prop_push](l)
            }
            return 0 < d[prop_length] ? d : e
        },
        lc = function (a) {
            return 0 == a[prop_indexOf](".") ? a.substr(1) : a
        },
        ic = function (a) {
            return lc(a)[prop_split](".")[prop_length]
        },
        kc = function (a) {
            if (!a)return"/";
            1 < a[prop_length] && a.lastIndexOf("/") == a[prop_length] - 1 && (a = a.substr(0, a[prop_length] - 1));
            0 != a[prop_indexOf]("/") && (a = "/" + a);
            return a
        },
        jc = function (a) {
            a = kc(a);
            return"/" == a ? 1 : a[prop_split]("/")[prop_length]
        };

    function Xc(a, b, c) {
        "none" == b && (b = "");
        var d = [], e = ya(a);
        a = "__utma" == a ? 6 : 2;
        for (var g = 0; g < e[prop_length]; g++) {
            var ca = ("" + e[g])[prop_split](".");
            ca[prop_length] >= a && d[prop_push]({hash: ca[0], R: e[g], O: ca})
        }
        return 0 == d[prop_length] ? void 0 : 1 == d[prop_length] ? d[0] : Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0]
    }

    function Zc(a, b) {
        var c, d;
        null == a ? c = d = 1 : (c = Hash(a), d = Hash(0 == a[prop_indexOf](".") ? a[prop_substring](1) : "." + a));
        for (var e = 0; e < b[prop_length]; e++)if (b[e][prop_hash] == c || b[e][prop_hash] == d)return b[e]
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
        return "_ga=1." + Encode(b + "." + a)
    }

    function Ic(a, b) {
        for (var c = new Date, d = _o_win.screen || {}, e = _o_win[prop_navigator], g = e.plugins || [], c = [a, e.userAgent, d.width, d.height, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b], d = 0; d < g[prop_length]; ++d){
            c[prop_push](g[d].description);
        }
        return Hash(c[prop_join]("."))
    }

    /**
     * Cross Domain Tracking ：Linker
     * @param a
     * @constructor
     */
    var Dc = function (a) {
        this.target = a
    };

    /**
     * Cross Domain Auto Linking ：decorate
     * @param a
     * @param b
     * @returns {*}
     * @constructor
     */
    Dc[prop_prototype].Q = function (a, b) {
        var c = /(.*)([?&#])(?:_ga=[^&]*)(?:&?)(.*)/.exec(a);
        c && 3 <= c[prop_length] && (a = c[1] + (c[3] ? c[2] + c[3] : ""));
        var c = this.target.get("linkerParam"), d = a[prop_indexOf]("?"), e = a[prop_indexOf]("#");
        b ? a += (-1 == e ? "#" : "&") + c : (d = -1 == d ? "?" : "&", a = -1 == e ? a + (d + c) : a[prop_substring](0, e) + d + c + a[prop_substring](e));
        return a
    };

    /**
     * Cross Domain Auto Linking ：autoLink
     * 监听页面 mousedown、touchstart 和 keyup 事件，查找 a或 area标签的 href属性。
     * @param a {}
     * @param b {}
     * @constructor
     */
    Dc[prop_prototype].S = function (a, b) {
        function c(c) {
            try {
                c = c || _o_win.event;
                var g;
                t:{
                    var ca = c.target || c.srcElement;
                    for (c = 100; ca && 0 < c;) {
                        if (ca[prop_href] && ca.nodeName[prop_match](/^a(?:rea)?$/i)) {
                            g = ca;
                            break t
                        }
                        ca = ca[prop_parentNode];
                        c--
                    }
                    g = {}
                }
                if ("http:" == g[prop_protocol] || "https:" == g[prop_protocol]) {
                    var l;
                    t:{
                        var k = g[prop_hostname] || "";
                        if (k != _o_document[prop_location][prop_hostname]){
                            for (ca = 0; ca < a[prop_length]; ca++){
                                if (0 <= k[prop_indexOf](a[ca])) {
                                    l = !0;
                                    break t
                                }
                            }
                        }
                        l = !1
                    }
                    l && (g.href = d.Q(g[prop_href], b))
                }
            } catch (w) {
                J(26)
            }
        }

        var d = this;
        AddListener(_o_document, "mousedown", c, !1);
        AddListener(_o_document, "touchstart", c, !1);
        AddListener(_o_document, "keyup", c, !1)
    };


    var gd = function (a) {
            return a.get(V) && "t0" != a.get(V) ? "_dc_" + encodeParenthesis(a.get(V)) : "_dc"
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
                var d = R(a, "forceSSL") || "https:" == _o_document[prop_location][prop_protocol] ? "https:" : "http:", d = d + "//stats.g.doubleclick.net/collect?t=dc&aip=1&";
                b.map(function (a, c) {
                    d += Encode(a) + "=" + Encode("" + c) + "&"
                });
                d += "z=" + Random();
                createImg(d);
                a.set(ed, "", !0)
            }
        },
        /**
         * displayfeatures
         */
        fd = function (a) {
            J(29);
            a = a.b;
            var b = a.get(Wb);
            a.set(Wb, function (a) {
                a.get(ed) || (-1 != _o_document[prop_cookie][prop_indexOf](gd(a) + "=1") ? a.set(ed, "", !0) : (gd(a),
                    setCookie(gd(a), "1", a.get(Yb), a.get(W), a.get(Na), 6E5) ? a.set(ed, "" + Random(), !0) : J(30)));
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
        var a = _o_win.gaGlobal = _o_win.gaGlobal || {};
        return a.hid = a.hid || Random()
    };
    var ad,
        bd = function (a, b, c) {
            if (!ad) {
                var d;
                d = _o_document[prop_location][prop_hash];
                var e = _o_win[prop_name],
                    g = /^#?gaso=([^&]*)/;
                if (e = (d = (d = d && d[prop_match](g) || e && e[prop_match](g)) ? d[1] : ya("GASO")[0] || "") && d[prop_match](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))setCookie("GASO", "" + d, c, b, a, 0), _o_window._udo || (_o_window._udo = b), _o_window._utcp || (_o_window._utcp = c), a = e[1], createScript("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + Random(), "_gasojs");
                ad = !0
            }
        };
    var pc = function (a) {
            function b(a, c) {
                d.b[prop_data].set(a, c)
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
            b(W, a[W] || processHostname());
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
                    if (d && !(1 > d[prop_length])) {
                        c = [];
                        for (var e = 0; e < d[prop_length]; e++) {
                            var g;
                            g = d[e][prop_split](".");
                            var ca = g.shift();
                            ("GA1" == ca || "1" == ca) && 1 < g[prop_length] ? (ca = g.shift()[prop_split]("-"), 1 == ca[prop_length] && (ca[1] = "1"), ca[0] *= 1, ca[1] *= 1, g = {r: ca, s: g[prop_join](".")}) : g = void 0;
                            g && c[prop_push](g)
                        }
                        if (1 == c[prop_length]) {
                            J(13);
                            c = c[0].s;
                            break i
                        }
                        if (0 == c[prop_length])J(12); else {
                            J(14);
                            d = ic(P(a, W));
                            c = Gc(c, d, 0);
                            if (1 == c[prop_length]) {
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
                c || (c = P(a, W), d = P(a, $b) || processHostname(), c = Xc("__utma",
                    d, c), (c = void 0 == c ? void 0 : c.O[1] + "." + c.O[2]) && J(10));
                c && (a[prop_data].set(Q, c), hc = !0)
            }
            if (e = (c = _o_document[prop_location][prop_href][prop_match]("(?:&|\\?)_ga=([^&]*)")) && 2 == c[prop_length] ? c[1] : "")a.get(bc) ? (c = e[prop_indexOf]("."), -1 == c ? J(22) : (d = e[prop_substring](c + 1), "1" != e[prop_substring](0, c) ? J(22) : (c = d[prop_indexOf]("."), -1 == c ? J(22) : (e = d[prop_substring](0, c), c = d[prop_substring](c + 1), e != Ic(c, 0) && e != Ic(c, -1) && e != Ic(c, -2) ? J(23) : (J(11), a[prop_data].set(Q, c)))))) : J(21);
            b && (J(9), a[prop_data].set(Q, Encode(b)));
            if (!a.get(Q))if (c = (c = _o_win.gaGlobal && _o_win.gaGlobal.vid) && -1 != c[prop_search](/^(?:utma\.)?\d+\.\d+$/) ? c : void 0)J(17), a[prop_data].set(Q, c); else {
                J(8);
                c = _o_win[prop_navigator];
                c = c.appName +
                    c.version + c.platform + c.userAgent + (_o_document[prop_cookie] ? _o_document[prop_cookie] : "") + (_o_document.referrer ? _o_document.referrer : "");
                d = c[prop_length];
                for (e = _o_win.history[prop_length]; 0 < e;)c += e-- ^ d++;
                a[prop_data].set(Q, [Random() ^ Hash(c) & 2147483647, _o_math.round((new Date)[prop_getTime]() / 1E3)][prop_join]("."))
            }
            mc(a)
        },
        Kc = function (a) {
            var b = _o_win[prop_navigator], c = _o_win.screen, d = _o_document[prop_location];
            a.set(lb, processReferrer(a.get(ec)));
            d && a.set(kb, d[prop_protocol] + "//" + d[prop_hostname] + d.pathname + d[prop_search]);
            c && a.set(qb, c.width + "x" + c.height);
            c && a.set(pb, c.colorDepth + "-bit");
            var c = _o_document.documentElement, e = _o_document.body, g = e && e[prop_clientWidth] && e[prop_clientHeight], ca = [];
            c && c[prop_clientWidth] && c[prop_clientHeight] && ("CSS1Compat" === _o_document.compatMode || !g) ? ca = [c[prop_clientWidth], c[prop_clientHeight]] :
                g && (ca = [e[prop_clientWidth], e[prop_clientHeight]]);
            c = 0 >= ca[0] || 0 >= ca[1] ? "" : ca[prop_join]("x");
            a.set(rb, c);
            a.set(tb, getFlashVersion());
            a.set(ob, _o_document.characterSet || _o_document.charset);
            a.set(sb, b && "function" === typeof b.javaEnabled && b.javaEnabled() || !1);
            a.set(nb, (b && (b.language || b.browserLanguage) || "")[prop_toLowerCase]());
            if (d && a.get(cc) && (b = _o_document[prop_location][prop_hash])) {
                b = b[prop_substring](1);
                b = b[prop_split]("&");
                d = [];
                for (c = 0; c < b[prop_length]; ++c) {
                    0 != b[c][prop_indexOf]("utm_id") && 0 != b[c][prop_indexOf]("utm_campaign") && 0 != b[c][prop_indexOf]("utm_source") && 0 != b[c][prop_indexOf]("utm_medium") && 0 != b[c][prop_indexOf]("utm_term") && 0 != b[c][prop_indexOf]("utm_content") || d[prop_push](b[c]);
                }
                0 < d[prop_length] && (b = "#" + d[prop_join]("&"),a.set(kb, a.get(kb) + b))
            }
        };

    /**
     * Tracker Object Methods ：返回与给定字段关联的值。可以通过一个跟踪对象的实例调用。
     * @param a fieldName {String} 要检索字段的名称
     * @returns {String|Number|Object} 给定字段的值
     */
    pc[prop_prototype].get = function (a) {
        return this.b.get(a)
    };

    /**
     * Tracker Object Methods ：更新给定字段关联的值。也可以通过 ga('set', fieldObject); 的方式使用一组字段/值对实现批量更新
     *
     * @param a fieldName {String} 设置字段的名称
     * @param b value {String|Number|Object} 与给定字段关联的新值。
     * @param fieldObject {Object} 一个包含一个或多个设置的字段/值对的对象。
     */
    pc[prop_prototype].set = function (a, b) {
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
    pc[prop_prototype].send = function (a) {
        if (!(1 > arguments[prop_length])) {
            var b, c;
            "string" === typeof arguments[0] ? (b = arguments[0], c = [][prop_slice][prop_call](arguments, 1)) : (b = arguments[0] && arguments[0][Va], c = arguments);
            b && (c = wa(qc[b] || [], c), c[Va] = b, this.b.set(c, void 0, !0), this.filters.execute(this.b), "pageview" == b && Lc(this), this.b[prop_data].m = {})
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
            if ("prerender" == _o_document.webkitVisibilityState){
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
                    !b && rc(a) && (b = !0, RemoveListener(_o_document, "webkitvisibilitychange", c))
                };
                AddListener(_o_document, "webkitvisibilitychange", c)
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
        if (isFunction(a[0]))this.u = a[0]; else {
            var b = Z.D.exec(a[0]);
            null != b && 4 == b[prop_length] && (this.c = b[1] || "t0", this.e = b[2] || "", this.d = b[3], this.a = [][prop_slice][prop_call](a, 1), this.e || (this.A = "create" == this.d, this.i = "require" == this.d, this.g = "provide" == this.d));
            if (!isFunction(a[0])) {
                b = a[1];
                a = a[2];
                if (!this.d)throw"abort";
                if (this.i && (!isString(b) || "" == b))throw"abort";
                if (this.g && (!isString(b) || "" == b || !isFunction(a)))throw"abort";
                if (0 <= this.c[prop_indexOf](".") || 0 <= this.c[prop_indexOf](":") || 0 <= this.e[prop_indexOf](".") || 0 <= this.e[prop_indexOf](":"))throw"abort";
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
        if (!isFunction(d))return!1;
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
        var b = Z.J[prop_apply](Z, arguments), b = Z.f.concat(b);
        for (Z.f = []; 0 < b[prop_length] && !Z.v(b[0]) && !(b.shift(), 0 < Z.f[prop_length]););
        Z.f = Z.f.concat(b)
    };

    /**
     *
     * @param a
     * @returns {Array}
     * @constructor
     */
    Z.J = function (a) {
        for (var b = [], c = 0; c < arguments[prop_length]; c++)try {
            var d = new sc(arguments[c]);
            if (d.g)Z.v(d); else {
                if (d.i) {
                    var e = d.a[1];
                    if (!isFunction(Z.k.get(d.a[0])) && !d.H && e) {
                        var g = e + "", e = g && 0 <= g[prop_indexOf]("/") ? g : "//www.google-analytics.com" + Z.F + g;
                        var ca = tc("" + e), l;
                        var k = ca[prop_protocol], w = _o_document[prop_location][prop_protocol];
                        l = "https:" == k || k == w ? !0 : "http:" != k ? !1 : "http:" == w;
                        var s;
                        if (s = l) {
                            var g = ca, D = tc(_o_document[prop_location][prop_href]);
                            if (g.G || 0 <= g.url[prop_indexOf]("?") || 0 <= g.path[prop_indexOf]("://"))s = !1; else if (g[prop_host] == D[prop_host] && g[prop_port] == D[prop_port])s = !0; else {
                                var vb = "http:" == g[prop_protocol] ? 80 : 443;
                                s = "www.google-analytics.com" == g[prop_host] &&
                                    (g[prop_port] || vb) == vb && 0 == g.path[prop_indexOf]("/plugins/") ? !0 : !1
                            }
                        }
                        s && (d.H = !!createScript(ca.url))
                    }
                }
                b[prop_push](d)
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
            if (a.u)a.u[prop_call](_o_win, $.j("t0")); else if (a.g)Z.C(a.a[0], a.a[1]); else {
                var b = a.c == gb ? $ : $.j(a.c);
                if (a.A)"t0" == a.c && $.create[prop_apply]($, a.a); else if (b)if (a.i) {
                    if (!Z.B(a.a[0], b, a.a[2]))return!0
                } else a.e && (b = b.plugins_.get(a.e)), b[a.d][prop_apply](b, a.a)
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
            var c = (a[prop_hostname] || "")[prop_split](":")[0][prop_toLowerCase](), b = (a[prop_protocol] || "")[prop_toLowerCase](), b = 1 * a[prop_port] || ("http:" == b ? 80 : "https:" == b ? 443 : "");
            a = a.pathname || "";
            0 == a[prop_indexOf]("/") || (a = "/" + a);
            return[c, "" + b, a]
        }

        var c = _o_document[prop_createElement]("a");
        c.href = _o_document[prop_location][prop_href];
        var d = (c[prop_protocol] || "")[prop_toLowerCase](), e = b(c), g = c[prop_search] || "", ca = d + "//" + e[0] + (e[1] ? ":" + e[1] : "");
        0 == a[prop_indexOf]("//") ? a = d + a : 0 == a[prop_indexOf]("/") ? a = ca + a : a && 0 != a[prop_indexOf]("?") ? 0 > a[prop_split]("/")[0][prop_indexOf](":") && (a = ca + e[2][prop_substring](0, e[2].lastIndexOf("/")) + "/" + a) : a = ca + e[2] + (a || g);
        c.href = a;
        d = b(c);
        return{protocol: (c[prop_protocol] || "")[prop_toLowerCase](), host: d[0], port: d[1],
            path: d[2], G: c[prop_search] || "", url: a || ""}
    };

    /**
     * Google Analytics 的命名空间
     * @param a
     */
    var $ = function (a) {
        J(1);
        Z.execute[prop_apply](Z, [arguments])
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
        var b = wa(uc, [][prop_slice][prop_call](arguments));
        b[V] || (b[V] = "t0");
        var c = "" + b[V];
        if ($.h[c]){
            return $.h[c];
        }
        b = new pc(b);
        $.h[c] = b;
        $.P[prop_push](b);
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
        return $.P[prop_slice](0)
    };

    /**
     *
     * @constructor
     */
    $.N = function () {
        var a = _o_win[gb];
        if (!a || 42 != a.answer) {
            $.L = a && a.l;//将埋点中的时间戳，存为 命名空间的属性
            $.loaded = !0; //标识为已加载
            _o_win[gb] = $;
            Cc();
            var b = a && a.q;
            "[object Array]" == Object[prop_prototype].toString[prop_call](Object(b)) && Mc(function () {
                Z.execute[prop_apply]($, b)
            })
        }
    };

    /**
     *
     */
    $.N();

    /**
     * 哈希函数。
     * @param a {String} 需要哈希的字符串。
     * @return {number}
     */
    function Hash(a) {
        var hash = 1,
            charCode = 0,
            idx;
        if (a) {
            for (hash = 0, idx = a[prop_length] - 1; 0 <= idx; idx--) {
                charCode = a.charCodeAt(idx),
                hash = (hash << 6 & 268435455) + charCode + (charCode << 14),
                charCode = hash & 266338304,
                hash = (0 != charCode) ? (hash ^ charCode >> 21) : hash;
            }

        }
        return hash;
    };
})(window);