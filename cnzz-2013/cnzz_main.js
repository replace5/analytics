/*http://s22.cnzz.com/z_stat.php?id=1000092332返回的js文件*/

(function() {
	var h = document,
	i = window,
	m = navigator,
	l = location,
	n = screen,
	e = encodeURIComponent,
	j = decodeURIComponent,
	k = "https:" == l.protocol ? "https:": "http:",
	f = function(a, c) {
		try {
			var b = [];
			b.push("siteid=1000092332");
			b.push("name=" + e(a.name));
			b.push("msg=" + e(a.message));
			b.push("r=" + e(h.referrer));
			b.push("page=" + e(l.href));
			b.push("agent=" + e(m.userAgent));
			b.push("ex=" + e(c));
			b.push("rnd=" + Math.floor(2147483648 * Math.random())); 
			(new Image).src = "http://jserr.cnzz.com/log.php?" + b.join("&")
		} catch(d) {}
	},
	p = function() {
		this.siteid = "1000092332";
		this.pic = "";
		this.lpic = "none";
		this.NR = k + "//c.cnzz.com/cnzz_core_v3.php";
		this.online = "";
		this.error_log = "_CNZZ_error_log";
		this.server_now = "1381198266";
		this.server_ip = "z1.cnzz.com";
		this.move_server = "";
		this.async = "false";
		this.cs = "|";
		this.init()
	};
	p.prototype = {
		init: function() {
			try {
				this.gASC(),
				this.subCookieParts = {},
				this.is_async = "none" == this.pic || 0 == this.lpic || "true" == this.async,
				this.cnzzed = new Date,
				this.now = parseInt(this.cnzzed.getTime()),
				this.cnzzed.setTime(this.now + 157248E5),
				this.gAP(),
				this.bridgename = "_CNZZDbridge_" + this.siteid,
				i[this.bridgename] = i[this.bridgename] || {}
			} catch(a) {
				f(a, "init failed")
			}
		},
		gAP: function() {
			try {
				this.gRf(),
				this.gLG(),
				this.gSp(),
				this.gLT(),
				this.gU()
			} catch(a) {
				f(a, "getAllPara failed")
			}
		},
		gRf: function() {
			try {
				this.refer = h.referrer || ""
			} catch(a) {
				f(a, "getReferer failed")
			}
		},
		gLG: function() {
			try {
				this.lg = m.systemLanguage || m.language,
				this.lg = this.lg.toLowerCase()
			} catch(a) {
				f(a, "getLG failed")
			}
		},
		gSp: function() {
			this.showp = "";
			try {
				this.showp = n.width + "x" + n.height
			} catch(a) {
				f(a, "getShowp failed")
			}
		},
		gCe: function() {
			this.eid = this.gSCP("cnzz_eid") || "none"
		},
		gLT: function() {
			this.ntime = this.gSCP("ntime") || "none"
		},
		rN: function() {
			try {
				var a = this.NR + "?web_id=" + this.siteid;
				this.pic && (a += "&show=" + this.pic);
				this.online && (a += "&online=" + this.online);
				this.lpic && (a += "&l=" + this.lpic);
				this.cAS(a, "utf-8")
			} catch(c) {
				f(c, "requestNext failed")
			}
		},
		sUS: function() {
			this.sSCV()
		},
		sCe: function(a) {
			try {
				var c = k + "//" + l.hostname,
				b = this.gSCP("cnzz_eid") || Math.floor(2147483648 * Math.random()) + "-" + a + "-" + c;
				this.sCP("cnzz_eid", b)
			} catch(d) {
				f(d, "setCNZZeid failed")
			}
		},
		sLT: function(a) {
			this.sCP("ntime", a)
		},
		gSCP: function(a) {
			try {
				return this.subcookies ? this.subcookies[a] || null: null
			} catch(c) {
				f(c, "getSubCookiePart failed")
			}
		},
		gASC: function() {
			try {
				var a = "CNZZDATA" + this.siteid + "=",
				c = h.cookie.indexOf(a),
				b = null,
				d = {};
				if ( - 1 < c) {
					var e = h.cookie.indexOf(";", c); - 1 == e && (e = h.cookie.length);
					b = j(h.cookie.substring(c + a.length, e));
					if (0 < b.length) {
						var g = b.split(this.cs);
						d[j("cnzz_eid")] = j(g[0]);
						d[j("ntime")] = j(g[1]);
						this.subcookies = d
					}
				} else this.subcookies = null
			} catch(i) {
				f(i, "getAllSubCookies failed")
			}
		},
		sCP: function(a, c) {
			try {
				c = "undefined" != typeof c ? c.toString() : "none",
				this.subCookieParts[e(a)] = e(c)
			} catch(b) {
				f(b, "setCookiePart failed")
			}
		},
		sSCV: function() {
			try {
				var a = "CNZZDATA" + this.siteid + "=",
				c = [],
				b;
				for (b in this.subCookieParts) c.push(this.subCookieParts[b]);
				0 < c.length ? (a += e(c.join([this.cs])), a += "; expires=" + this.cnzzed.toUTCString(), a += "; path=/") : a += "; expires=" + (new Date(0)).toUTCString();
				h.cookie = a;
				this.subCookieParts = {}
			} catch(d) {
				f(d, "setSubCookieValue failed")
			}
		},
		gU: function() {
			this.href = l.href
		},
		cS: function(a) {
			try {
				for (var c = a.length, b = 0; b < c; b++) a[b][0] && this.cAS(a[b][0], a[b][1])
			} catch(d) {
				f(d, "callScript failed")
			}
		},
		cAS: function(a, c) {
			try {
				if (!0 == this.is_async) {
					var b = h.createElement("script");
					b.type = "text/javascript";
					b.async = !0;
					b.charset = c;
					b.src = a;
					var d = h.getElementsByTagName("script")[0];
					d.parentNode.insertBefore(b, d)
				} else h.write(unescape("%3Cscript src='" + a + "' charset='" + c + "' type='text/javascript'%3E%3C/script%3E"))
			} catch(e) {
				f(e, "createAScript failed")
			}
		},
		cR: function(a) {
			try {
				for (var c = a.length, b = null, d = 0; d < c; d++) a[d] && (b = "cnzz_image_" + Math.floor(2147483648 * Math.random()), i[b] = new Image, i[b].cnzzname = b, i[b].onload = i[b].onerror = i[b].onabort = function() {
					try {
						this.onload = this.onerror = this.onabort = null,
						i[this.cnzzname] = null
					} catch(a) {}
				},
				i[b].src = a[d] + "&rnd=" + Math.floor(2147483648 * Math.random()))
			} catch(e) {
				f(e, "callRequest failed")
			}
		},
		cI: function(a) {
			try {
				for (var c = a.length,
				b = "",
				d = 0; d < c; d++) a[d] && (b += unescape(a[d]));
				var e = h.getElementById("cnzz_stat_icon_" + this.siteid);
				e && (e.innerHTML = b)
			} catch(g) {
				f(g, "createIcon failed")
			}
		},
		cSI: function(a, c) {
			try {
				var b = h.getElementById("cnzz_stat_icon_" + this.siteid);
				if (b) {
					var d = h.createElement("script");
					d.type = "text/javascript";
					d.async = !0;
					d.charset = c;
					d.src = a;
					b.appendChild(d)
				}
			} catch(e) {
				f(e, "createScriptIcon failed")
			}
		},
		sD: function() {
			var a = [];
			a.push("id=1000092332");
			a.push("r=" + e(this.refer));
			a.push("lg=" + e(this.lg));
			a.push("ntime=" + this.ntime);
			a.push("cnzz_eid=" + e(this.eid));
			a.push("showp=" + e(this.showp));
			a.push("page=" + e(this.href));
			a = a.join("&");
			this.move_server && this.cR([k + "//" + this.move_server + "/stat.htm?" + a]);
			this.server_ip && this.cR([k + "//" + this.server_ip + "/stat.htm?" + a]);
			this.server_ip_v3 && this.cR([k + "//" + this.server_ip_v3 + "/stat.htm?" + a])
		},
		callScript: function(a) {
			this.cS(a)
		},
		createScriptIcon: function(a, c) {
			this.cSI(a, c)
		},
		createIcon: function(a) {
			this.cI(a)
		},
		callRequest: function(a) {
			this.cR(a)
		}
	};
	try {
		var g = new p;
		g.sCe(g.server_now);
		g.sLT(g.server_now);
		g.sUS();
		g.gASC();
		g.gCe();
		g.sD();
		i[g.bridgename].bobject = g;
		g.rN()
	} catch(q) {
		f(q, "main failed")
	}
})();