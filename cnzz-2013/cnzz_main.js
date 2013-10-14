(function() {
	function l() {
		this.c = "1000106073";
		this.P = "q";
		this.L = "";
		this.I = "3";
		this.K = "";
		this.n = "1381549991";
		this.N = "q1.cnzz.com";
		this.J = "";
		this.r = "CNZZDATA" + this.c;
		this.q = "_CNZZDbridge_" + this.c;
		this.C = "_cnzz_CV";
		this.H = "";
		this.A = {};
		this.a = {};
		this.ha()
	}
	function g(a, b) {
		try {
			var c = [];
			c.push("siteid=1000106073");
			c.push("name=" + d(a.name));
			c.push("msg=" + d(a.message));
			c.push("r=" + d(h.referrer));
			c.push("page=" + d(e.location.href));
			c.push("agent=" + d(e.navigator.userAgent));
			c.push("ex=" + d(b));
			c.push("rnd=" + Math.floor(2147483648 * Math.random())); (new Image).src = "http://jserr.cnzz.com/log.php?" + c.join("&")
		} catch(f) {}
	}
	var h = document,
	e = window,
	d = encodeURIComponent,
	k = decodeURIComponent,
	p = unescape,
	m = "https:" === e.location.protocol ? "https:": "http:",
	r = m + "//c.cnzz.com/core.php";
	l.prototype = {
		ha: function() {
			try {
				this.S(),
				this.G(),
				this.fa(),
				this.D(),
				this.l(),
				this.da(),
				this.ca(),
				this.ga(),
				this.t(),
				this.ba(),
				this.ea(),
				this.$(),
				this.Z(),
				this.aa(),
				this.ka(),
				e[this.q] = e[this.q] || {}
			} catch(a) {
				g(a, "init failed")
			}
		},
		ja: function() {
			try {
				var a = this;
				e._czc = {
					push: function() {
						return a.B.apply(a, arguments)
					}
				}
			} catch(b) {
				g(b, "overloadPush failed")
			}
		},
		Z: function() {
			try {
				var a = e._czc;
				if ("[object Array]" === {}.toString.call(a)) for (var b = 0; b < a.length; b++) {
					var c = a[b];
					switch (c[0]) {
					case "_setAccount":
						e._cz_account = "[object String]" === {}.toString.call(c[1]) ? c[1] : String(c[1]);
						break;
					case "_setAutoPageview":
						"boolean" === typeof c[1] && (e._cz_autoPageview = c[1])
					}
				}
			} catch(f) {
				g(f, "customSet failed")
			}
		},
		ka: function() {
			try {
				if ("undefined" === typeof e._cz_account || e._cz_account === this.c) {
					e._cz_account = this.c;
					if ("[object Array]" === {}.toString.call(e._czc)) for (var a = e._czc,
					b = 0,
					c = a.length; b < c; b++) this.B(a[b]);
					this.ja()
				}
			} catch(f) {
				g(f, "preProcess failed")
			}
		},
		B: function(a) {
			try {
				if ("[object Array]" === {}.toString.call(a)) switch (a[0]) {
				case "_trackPageview":
					if (a[1]) {
						this.d = m + "//" + e.location.host;
						"/" !== a[1].charAt(0) && (this.d += "/");
						this.d += a[1];
						if ("" === a[2]) this.a.f = "";
						else if (a[2]) {
							var b = a[2];
							"http" !== b.substr(0, 4) && (b = m + "//" + e.location.host, "/" !== a[2].charAt(0) && (b += "/"), b += a[2]);
							this.a.f = b
						}
						this.w();
						"undefined" !== typeof this.a.f && delete this.a.f
					}
					break;
				case "_trackEvent":
					var c = [];
					a[1] && a[2] && (c.push(d(a[1])), c.push(d(a[2])), c.push(a[3] ? d(a[3]) : ""), a[4] = parseFloat(a[4]), c.push(isNaN(a[4]) ? 0 : a[4]), c.push(a[5] ? d(a[5]) : ""), this.k = c.join("|"), this.w(), delete this.k);
					break;
				case "_setCustomVar":
					if (3 <= a.length) {
						var c = a[1],
						f = a[2],
						q = a[3] || 0;
						a = 0;
						for (var h in this.a.b) a++;
						if (5 <= a) return ! 1;
						var k;
						k = 0 === q ? "p": 1 === q ? "m": (new Date).getTime() + 1E3 * q;
						this.a.b[c] = {};
						this.a.b[c].R = f;
						this.a.b[c].g = k;
						this.v()
					}
					break;
				case "_deleteCustomVar":
					2 <= a.length && (c = a[1], this.a.b[c] && (delete this.a.b[c], this.v()))
				}
			} catch(l) {
				g(l, "analysisCommand failed")
			}
		},
		aa: function() {
			try {
				var a = this.s(this.C),
				b,
				c;
				this.a.b = {};
				if (a) for (var f = a.split("&"), a = 0; a < f.length; a++) c = k(f[a]),
				b = c.split("|"),
				this.a.b[k(b[0])] = {},
				this.a.b[k(b[0])].R = k(b[1]),
				this.a.b[k(b[0])].g = k(b[2])
			} catch(d) {
				g(d, "getCustomVars failed")
			}
		},
		T: function() {
			try {
				var a = (new Date).getTime(),
				b;
				for (b in this.a.b)"p" === this.a.b[b].g ? this.a.b[b].g = 0 : "m" !== this.a.b[b].g && a > this.a.b[b].g && delete this.a.b[b];
				this.v()
			} catch(c) {
				g(c, "checkCustomVar failed")
			}
		},
		v: function() {
			try {
				var a = [],
				b,
				c,
				f;
				for (f in this.a.b) {
					var e = [];
					e.push(d(f));
					e.push(d(this.a.b[f].R));
					e.push(d(this.a.b[f].g));
					b = e.join("|");
					a.push(d(b))
				}
				var k = new Date;
				k.setTime(k.getTime() + 157248E5);
				c = this.C + "=";
				c += a.join("&");
				c += "; expires=" + k.toUTCString();
				h.cookie = c + "; path=/"
			} catch(l) {
				g(l, "saveCustomVars failed")
			}
		},
		$: function() {
			try {
				if ("" !== e.location.hash) return this.d = e.location.href
			} catch(a) {
				g(a, "getCurrentPage failed")
			}
		},
		t: function() {
			try {
				return this.a.la = h.referrer || ""
			} catch(a) {
				g(a, "getReferer failed")
			}
		},
		ba: function() {
			try {
				return this.a.m = e.navigator.systemLanguage || e.navigator.language,
				this.a.m = this.a.m.toLowerCase(),
				this.a.m
			} catch(a) {
				g(a, "getLanguage failed")
			}
		},
		ea: function() {
			try {
				return this.a.O = e.screen.width && e.screen.height ? e.screen.width + "x" + e.screen.height: "0x0",
				this.a.O
			} catch(a) {
				g(a, "getShowp failed")
			}
		},
		//取得上次访问的服务器时间
		l: function() {
			try {
				return this.a.ia = this.h("ntime") || "none"
			} catch(a) {
				g(a, "getLastViewServerTime failed")
			}
		},
		//取得上次访问的浏览器时间
		F: function() {
			try {
				return this.a.p = this.h("ltime") || (new Date).getTime()
			} catch(a) {
				g(a, "getLastViewBrowserTime failed")
			}
		},
		//获取用户当日的回访次数
		da: function() {
			try {
				var a = this.h("cnzz_a");
				if (null === a) a = 0;
				else {
					var b = 1E3 * this.l(),
					c = new Date;
					c.setTime(b); (new Date).getDate() === c.getDate() ? a++:a = 0
				}
				return this.a.u = a
			} catch(f) {
				g(f, "getReviewTime failed")
			}
		},
		//获取回访次数（超出12小时为一次）
		ca: function() {
			try {
				return this.a.e = this.h("rtime"),
				null === this.a.e && (this.a.e = 0),
				0 < this.F() && 432E5 < (new Date).getTime() - this.F() && (this.a.e++, this.a.p = (new Date).getTime()),
				this.a.e
			} catch(a) {
				g(a, "getReturnVisitTime failed")
			}
		},
		ga: function() {
			try {
				return "none" === this.l() ? this.a.Q = 0 : this.a.Q = parseInt(((new Date).getTime() - 1E3 * this.l()) / 1E3)
			} catch(a) {
				g(a, "getStandingTime failed")
			}
		},
		fa: function() {
			try {
				var a = this.h("sin") || "none";
				if (!h.domain) return this.a.o = "none";
				this.t().split("/")[2] !== h.domain && (a = this.t());
				return this.a.o = a
			} catch(b) {
				g(b, "getSin failed")
			}
		},
		D: function() {
			try {
				return this.a.i = this.h("cnzz_eid") || "none"
			} catch(a) {
				g(a, "getCnzzeid failed")
			}
		},
		ma: function() {
			try {
				var a = r + "?",
				b = [];
				b.push("web_id=" + d(this.c));
				this.L && b.push("show=" + d(this.L));
				this.K && b.push("online=" + d(this.K));
				this.I && b.push("l=" + d(this.I));
				this.P && b.push("t=" + this.P);
				a += b.join("&");
				this.W(a, "utf-8")
			} catch(c) {
				g(c, "requestNext failed")
			}
		},
		S: function() {
			try {
				return ! 1 === e.navigator.cookieEnabled ? this.a.V = !1 : this.a.V = !0
			} catch(a) {
				g(a, "checkCookieEnable failed")
			}
		},
		s: function(a) {
			try {
				a += "=";
				var b = h.cookie.indexOf(a),
				c = "";
				if ( - 1 < b) {
					var f = h.cookie.indexOf(";", b); - 1 === f && (f = h.cookie.length);
					c = k(h.cookie.substring(b + a.length, f))
				}
				return c ? c: ""
			} catch(d) {
				g(d, "getACookie failed")
			}
		},
		G: function() {
			try {
				var a = this.r,
				b = {},
				c = this.s(this.r);
				if (0 < c.length) if (1E8 < this.c) {
					var f = c.split("|");
					b.cnzz_eid = k(f[0]);
					b.ntime = k(f[1])
				} else for (var f = c.split("&"), d = 0, e = f.length; d < e; d++) {
					var h = f[d].split("=");
					b[k(h[0])] = k(h[1])
				}
				this.A = b
			} catch(l) {
				g(l, "importCookie failed:" + a + ":" + c)
			}
		},
		M: function() {
			try {
				var a = this.r + "=",
				b = [],
				c = new Date;
				c.setTime(c.getTime() + 157248E5);
				if (1E8 < this.c) {
					if ("none" !== this.a.i) b.push(d(this.a.i));
					else {
						var f = Math.floor(2147483648 * Math.random()) + "-" + this.n + "-" + m + "//" + h.location.hostname;
						b.push(d(f))
					}
					b.push(this.n);
					0 < b.length ? (a += d(b.join("|")), a += "; expires=" + c.toUTCString(), a += "; path=/") : a += "; expires=" + (new Date(0)).toUTCString()
				} else "none" !== this.a.i ? b.push("cnzz_eid=" + d(this.a.i)) : (f = Math.floor(2147483648 * Math.random()) + "-" + this.n + "-" + m + "//" + h.location.hostname, b.push("cnzz_eid=" + d(f))),
				b.push("ntime=" + this.n),
				null !== this.a.u && b.push("cnzz_a=" + d(this.a.u)),
				this.a.o && b.push("sin=" + d(this.a.o)),
				this.a.p && b.push("ltime=" + d(this.a.p)),
				this.a.e && b.push("rtime=" + d(this.a.e)),
				0 < b.length ? (a += d(b.join("&")), a += "; expires=" + c.toUTCString(), a += "; path=/") : a += "; expires=" + (new Date(0)).toUTCString();
				h.cookie = a
			} catch(e) {
				g(e, "saveSubcookies failed")
			}
		},
		h: function(a) {
			try {
				return "undefined" !== typeof this.A[a] ? this.A[a] : null
			} catch(b) {
				g(b, "getCookiePart failed")
			}
		},
		W: function(a, b) {
			try {
				if (b = b || "utf-8", "1" === this.H) {
					var c = h.createElement("script");
					c.type = "text/javascript";
					c.async = !0;
					c.charset = b;
					c.src = a;
					var f = h.getElementsByTagName("script")[0];
					f.parentNode && f.parentNode.insertBefore(c, f)
				} else h.write(p("%3Cscript src='" + a + "' charset='" + b + "' type='text/javascript'%3E%3C/script%3E"))
			} catch(d) {
				g(d, "createAScript failed")
			}
		},
		Y: function(a, b) {
			try {
				var c = h.getElementById("cnzz_stat_icon_" + this.c);
				if (c) {
					var d = h.createElement("script");
					d.type = "text/javascript";
					d.async = !0;
					d.charset = b;
					d.src = a;
					c.appendChild(d)
				} else this.H || h.write(p("%3Cscript src='" + a + "' charset='" + b + "' type='text/javascript'%3E%3C/script%3E"))
			} catch(e) {
				g(e, "createScriptIcon failed")
			}
		},
		X: function(a) {
			try {
				for (var b = a.length,
				c = "",
				d = 0; d < b; d++) a[d] && (c += p(a[d]));
				var e = h.getElementById("cnzz_stat_icon_" + this.c);
				e ? e.innerHTML = c: h.write(c)
			} catch(k) {
				g(k, "createIcon failed")
			}
		},
		w: function() {
			try {
				this.M();
				this.G();
				this.D();
				this.T();
				var a = [];
				a.push("id=" + d(this.c));
				this.a.f || "" === this.a.f ? a.push("r=" + d(this.a.f)) : a.push("r=" + d(this.a.la));
				a.push("lg=" + d(this.a.m));
				a.push("ntime=" + d(this.a.ia));
				a.push("repeatip=" + this.a.u);
				a.push("rtime=" + d(this.a.e));
				a.push("cnzz_eid=" + d(this.a.i));
				a.push("showp=" + d(this.a.O));
				a.push("st=" + d(this.a.Q));
				a.push("sin=" + d(this.a.o));
				"[object String]" === {}.toString.call(this.d) && a.push("p=" + d(this.d));
				"[object String]" === {}.toString.call(this.k) && a.push("ei=" + d(this.k));
				"[object String]" === {}.toString.call(this.b) && a.push("cv=" + d(this.b));
				var b = a.join("&");
				"[object String]" === {}.toString.call(this.k) ? this.j([m + "//ei.cnzz.com/stat.htm?" + b]) : (this.J && this.j([m + "//" + this.J + "/stat.htm?" + b]), this.N && this.j([m + "//" + this.N + "/stat.htm?" + b]))
			} catch(c) {
				g(c, "sendData failed")
			}
		},
		j: function(a) {
			try {
				for (var b = a.length,
				c = null,
				d = 0; d < b; d++) a[d] && (c = "cnzz_image_" + Math.floor(2147483648 * Math.random()), e[c] = new Image, e[c].U = c, e[c].onload = e[c].onerror = e[c].onabort = function() {
					try {
						this.onload = this.onerror = this.onabort = null,
						e[this.U] = null
					} catch(a) {}
				},
				e[c].src = a[d] + "&rnd=" + Math.floor(2147483648 * Math.random()))
			} catch(h) {
				g(h, "callRequest failed")
			}
		}
	};
	try {
		var n = new l;
		e[n.q].bobject = n; ! 1 !== e._cz_autoPageview ? n.w() : n.M();
		l.prototype.getACookie = l.prototype.s;
		l.prototype.callRequest = l.prototype.j;
		l.prototype.createScriptIcon = l.prototype.Y;
		l.prototype.createIcon = l.prototype.X;
		n.ma()
	} catch(s) {
		g(s, "main failed")
	}
})();