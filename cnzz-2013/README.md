
#代码分析

##嵌入页面的代码
	<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
	document.write(unescape("%3Cspan id='cnzz_stat_icon_1000092332'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s22.cnzz.com/z_stat.php%3Fid%3D1000092332' type='text/javascript'%3E%3C/script%3E"));</script>
这段代码在页面中写入的如下的内容：  
<span id='cnzz_stat_icon_1000092332'></span><script src='http//s22.cnzz.com/z_stat.php?id=1000092332' type='text/javascript'></script> 或  
<span id='cnzz_stat_icon_1000092332'></span><script src='http//s22.cnzz.com/z_stat.php?id=1000092332' type='text/javascript'></script>

##主体代码
由http//s22.cnzz.com/zstat.php?请求返回的js

	(function() {
	var h = document,
	i = window,
	m = navigator,
	l = location,
	n = screen,
	e = encodeURIComponent,
	j = decodeURIComponent,
	k = "https:" == l.protocol ? "https:": "http:",

	/*在出错情况下，执行这个函数，向日志服务器发送必要信息和出错信息
	 *@param a error对象
	 *@param c 出错信息的名字
	 */
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

	/*class p
	 *这个对象处理收集信息和发送信息的所有事情，每个嵌入js的页面中生成一个对象保存在页面全局变量中，以后加载的js通过全局变量使用这个对象
	 */
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
		/*p对象的初始化函数
		 *获取页面的cnzz_eid、载入时间、来源、语言、屏幕宽高、ntime、页面url信息
		 */
		init: function() {	
			try {
				this.gASC(),									//从cookie中取出cnzz_eid和ntime，放入this.subcookies
				this.subCookieParts = {},						//保存要写入cookie的值
				this.is_async = "none" == this.pic || 0 == this.lpic || "true" == this.async,
				this.cnzzed = new Date,		
				this.now = parseInt(this.cnzzed.getTime()),		//页面载入时间
				this.cnzzed.setTime(this.now + 157248E5),		//cookie过期时间
				this.gAP(),										//获取页面来源、语言、屏幕宽高、ntime、url，保存在对象属性中
				this.bridgename = "_CNZZDbridge_" + this.siteid,//在全局对象中获取当前p对象的属性名称
				i[this.bridgename] = i[this.bridgename] || {}	//创建一个全局对象用以保存当前p对象
			} catch(a) {
				f(a, "init failed")
			}
		},
		/*获取页面来源、语言、屏幕宽高、ntime、url，保存在对象属性中*/
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
		/*获取页面来源*/
		gRf: function() {	
			try {
				this.refer = h.referrer || ""
			} catch(a) {
				f(a, "getReferer failed")
			}
		},
		/*获取页面语言*/
		gLG: function() {	
			try {
				this.lg = m.systemLanguage || m.language,
				this.lg = this.lg.toLowerCase()
			} catch(a) {
				f(a, "getLG failed")
			}
		},
		/*获取屏幕高度x宽度*/
		gSp: function() {	
			this.showp = "";
			try {
				this.showp = n.width + "x" + n.height
			} catch(a) {
				f(a, "getShowp failed")
			}
		},
		/*获取cnzz_eid(cookie中)*/
		gCe: function() {	
			this.eid = this.gSCP("cnzz_eid") || "none"
		},
		/*获取ntime(cookie中)*/
		gLT: function() {	
			this.ntime = this.gSCP("ntime") || "none"
		},
		/*向this.NR服务器请求下一个js*/
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
		/*存cookie*/
		sUS: function() {
			this.sSCV()
		},
		/*设置cnzz_eid。cnzz_eid的值从cookie中取出，如果不存在则新生成一个。
		 *@param a this.server_now的值
		 */
		sCe: function(a) {
			try {
				var c = k + "//" + l.hostname,
				b = this.gSCP("cnzz_eid") || Math.floor(2147483648 * Math.random()) + "-" + a + "-" + c;
				this.sCP("cnzz_eid", b)
			} catch(d) {
				f(d, "setCNZZeid failed")
			}
		},
		/*设置ntime。
		 *@param a ntime的值
		 */
		sLT: function(a) {
			this.sCP("ntime", a)
		},
		/*从subcookies中取cookie值*/
		gSCP: function(a) {
			try {
				return this.subcookies ? this.subcookies[a] || null: null
			} catch(c) {
				f(c, "getSubCookiePart failed")
			}
		},
		/*从cookie中取出cnzz_eid和ntime，放入this.subcookies*/
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
		/*把需要保存到cookie的值存入this.subCookieParts中*/
		sCP: function(a, c) {
			try {
				c = "undefined" != typeof c ? c.toString() : "none",
				this.subCookieParts[e(a)] = e(c)
			} catch(b) {
				f(b, "setCookiePart failed")
			}
		},
		/*把this.subCookieParts中的值存入cookie，如果this.subCookieParts中无值则删除cookie*/
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
		/*获取页面url*/
		gU: function() {	
			this.href = l.href
		},
		/*
		 *向文档中添加一批script标签
		 *@param a 由【src, charset】组成的数组
		 */
		cS: function(a) {
			try {
				for (var c = a.length,
				b = 0; b < c; b++) a[b][0] && this.cAS(a[b][0], a[b][1])
			} catch(d) {
				f(d, "callScript failed")
			}
		},
		/*
		 *加载script标签
		 *@param a script的源
		 *@param c script的字符编码
		 */
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
		/*以请求图片的方式向服务器发送信息
		 *@param a 由请求地址组成的数组
		 */
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
		/*把信息保存到页面上
		 *@param a 要写入页面的信息组成的数组
		 */
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
		/*在cnzz特定的span下加入script标签
		 *@param a script的源
		 *@param c script的字符编码
		 */
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
		/*向服务器发送信息：网站id、来源、语言、ntime、cnzz_eid、屏幕宽高、页面url
		 */
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
		g.sCe(g.server_now);			//从cookie中取出网站的cnzz_eid，如果不存在则生成一个，放入对象的subcookieParts属性中
		g.sLT(g.server_now);			//由server_now设置ntime的值，放入对象的subcookieParts属性中
		g.sUS();                        //把对象的subcookieParts属性中的cnzz_eid和ntime值存入cookie
		g.gASC();						//从cookie中获取cnzz_eid和ntime值，保存在对象的subcookies属性中
		g.gCe();						//从对象的subcookies属性中获取cnzz_eid的值，保存在对象的eid属性中
		g.sD();							//向服务器发送信息（id、来源、语言、ntime、cnzz_eid、屏幕宽高、页面url），以图片的方式
		i[g.bridgename].bobject = g;	//全局对象中保存这个对象
		g.rN()							//向NR服务器请求另一段js，并发送一些信息
	} catch(q) {
		f(q, "main failed")
	}
	})();


##在rN函数中向NR服务器请求的js

	(function() {
	try {
		var d = window._CNZZDbridge_1000092332.bobject;
		var scheme = (document.location.protocol == 'https:') ? 'https:': 'http:';
		d.callRequest([]);
		d.callScript([]);
		d.createIcon(["<a href='http://www.cnzz.com/stat/website.php?web_id=1000092332' target=_blank title='&#31449;&#38271;&#32479;&#35745;'>&#31449;&#38271;&#32479;&#35745;</a>"])
	} catch(err) {}
	})();

该段代码在页面嵌入的span中写入了一个名为“站长统计”的链接，该链接连接到了cnzz的统计页面。
