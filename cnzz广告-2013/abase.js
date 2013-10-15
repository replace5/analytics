function FixedRealShow() {
	return document.body ? (this.init.apply(this, arguments), void 0) : !1
} (function(window) {
	function FnRegister(e, t) {
		return w[e] || (w[e] = t)
	}
	function parseParams(e) {
		var t = map[e];
		return t ? {
			id: e || e,
			af: t.af || !1,
			did: t.aid || 0,
			slotType: t.stype,
			isbefore: t.pop || 0,
			htmlcode: t._html || 0,
			width: t._w || 0,
			height: t._h || 0,
			stime: 1e3 * t.time || 5e3,
			ptime: 1e3 * t.parktime || 0,
			loadtime: 1e3 * t.loadtime || 0,
			closePosition: t.cb || 0,
			scroll: t.sc || 0,
			position: t.pos || 0,
			mleft: t._m_left || 0,
			mtop: t._m_top || 0,
			ip: t.ip || "",
			isiframe: t.isiframe || !1,
			cc: t.cc,
			ht: t.ht,
			turl: t.turl || "",
			framesrc: ""
		}: {}
	}
	function _adShow(e) {
		if (e) {
			var t = loaded(e);
			if (t) return ! 1;
			if (map[e]) single_batch(e);
			else {
				e = parseInt(e, 10);
				var o = urlSet(e);
				d.write('<script type="text/javascript" charset="gbk" src="' + o + '"></scr' + "ipt>")
			}
		}
	}
	function do_batch(e) {
		var t, o = window.location.href,
		i = encodeURIComponent(o),
		n = window.ids = window.ids || [];
		return "" == e || n["ids_" + e] || window[i] ? !1 : (t = urlSet(e, "ids"), d.write('<script type="text/javascript" charset="gbk" src="' + t + '"></scr' + "ipt>"), n["ids_" + e] = !0, void 0)
	}
	function add_batch(e, t) {
		var o;
		if (!e) return ! 1;
		for (o in e) e[o] && (e[o].id = o, map[o] = e[o]);
		return t !== void 0 && 1 == t ? o: void 0
	}
	function single_batch(e) {
		_renderSlot(map[e] || "", !1)
	}
	function _renderSlot(e, t) {
		var o, i, n, r;
		if (!e) return ! 1;
		if (o = t === void 0 ? add_batch(e, !0) || 0 : e.id || 0, 1 > parseInt(o, 10)) return ! 1;
		if (loaded(o), options = parseParams(o), !options) return ! 1;
		switch (options.position && (n = options.position, i = n.split("-"), options.fleft = "left" == i[0], options.ftop = "up" == i[1]), options.slotType) {
		case "1":
			ADS.showFixed(),
			runRealShow("cnzz_slot_" + o, o, options.ht);
			break;
		case "2":
			ADS.showFloat();
			break;
		case "3":
			ADS.showPop()
		}
		r = options["t_url_" + o] || "",
		r && setTimeout(function() {
			sendRequest(r)
		},
		0),
		options.turl && setTimeout(function() {
			sendRequest(options.turl)
		},
		0)
	}
	function sendRequest(e) {
		var t = new Image;
		new Date,
		t.onload = t.onabort = t.onerror = function() {
			t = null
		},
		t.src = e
	}
	function urlSet(e, t, o, i) {
		if (!e) return ! 1;
		var n, r, a;
		if (customOion = GetOrientation(), s_width = screen.width, s_height = screen.height, adm_client_referer = d.referrer, adm_client_url = "" + d.location, adm_client_domain = "", a = o || "CNZZ_AD_RSLOT", adm_client_url = adm_client_url.match(/http:\/\/.+/) ? encodeURIComponent(adm_client_url) : "", "" != adm_client_referer) {
			var s = /(\w+):\/\/([^\/:]+)(:\d*)?([^#]*)/,
			l = adm_client_referer.match(s);
			adm_client_domain = l[2]
		}
		return t ? (a = "CNZZ_ADD_BATCH", "url" == t ? n = rootDomain + "/prebat.php?url=" + e: (r = e.split(","), n = rootDomain + "/batch.php?batchid=" + e)) : n = rootUrl + "?sid=" + e,
		i && (n += i),
		n = n + "&fn=" + a + "&width=" + s_width + "&height=" + s_height + customOion + "&time=" + +new Date + "&domain=" + adm_client_domain + "&referer=" + encodeURIComponent(adm_client_referer) + "&href=" + adm_client_url
	}
	function iframeset() {
		var e = options.id || "",
		t = options.htmlcode,
		o = options.framesrc || "about:blank",
		i = options.width,
		n = options.height,
		r = adHolder(),
		a = "<iframe id=cnzz_iframe_" + e + ' src="' + o + '" ' + 'onload="cnzz_RenderIFrame(' + e + ')"' + " " + ( - 1 == i ? "": "width=" + i) + " " + ( - 1 == n ? "": "height=" + n) + ' vspace="0" hspace="0" allowTransparency="true" scrolling="no" marginHeight="0" marginWidth="0" frameborder="0" style="padding:0px;border:0;vertical-align:bottom;margin:0px;display:block;"></iframe>';
		if (holderArray["sshtml" + e] = r, "2" == options.slotType)"rich" == t.type && (r = a);
		else if ("1" == options.slotType) {
			if (! (r && -1 != i && -1 != n && "rich" != t.type || options.isiframe)) return r;
			r = a
		}
		return r
	}
	function __loadScript(e) {
		if (!e) return ! 1;
		var t = document.createElement("script");
		t.charset = "gbk",
		t.async = !0,
		t.src = e,
		document.body.insertBefore(t, document.body.firstChild)
	}
	function cnzz_RenderIFrame(e) {
		if (map[e] = map[e] || {},
		map[e].done) return ! 1;
		var t, o, i = d.getElementById("cnzz_iframe_" + e) || "";
		if (!i) return ! 1;
		if (t = holderArray["sshtml" + e] || "", !t) return ! 1;
		try {
			map[e].done = !0,
			o = i.contentWindow.document,
			0 > t.indexOf("<body>") && (t = "<!DOCTYPE html><body style='padding:0px;margin:0px;background-color: transparent;'>" + t),
			o.open("text/html", "replace"),
			o.write(t),
			o.close()
		} catch(n) {
			if (browser.ie) {
				var r = document.getElementsByTagName("base") || "",
				a = !1,
				s = [];
				if (r) for (var l = 0,
				c = r.length; c > l; l++) {
					var p = r[l].target || "";
					"_blank" == p && (r[l].target = "_self", s[l] = p, a = !0)
				}
				if (map[e].done = !0, i.src = "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.close()})())", o = i.contentWindow.document, 0 > t.indexOf("<body>") && (t = "<!DOCTYPE html><body style='padding:0px;margin:0px;background-color: transparent;'>" + t), o.open("text/html", "replace"), o.write(t), o.close(), a) for (var h in s) r[h].target = s[h]
			}
		}
	}
	function adHolder() {
		var mtype, tongjipont, htmlcode, html = options.htmlcode || "",
		mid;
		if (!html) return "";
		if ("string" == typeof html && (html = eval(html)), mtype = "object" == typeof html && html.length ? "slide": html.type, !mtype) return ! 1;
		switch (mtype) {
		case "image":
			html.src && (htmlcode = '<a href="' + html.href + '" target="' + html.target + '"><img src="' + html.src + '" ' + (html.width ? "width=" + html.width: "") + " " + (html.height ? "height=" + html.height: "") + " border=0 " + (html.title ? 'title="' + html.title + '"': "") + " /></a>", mid = html.id);
			break;
		case "flash":
			html.src && (htmlcode = SetFlash(html), mid = html.id);
			break;
		case "rich":
			html.content && (htmlcode = html.content, mid = html.id);
			break;
		case "slide":
			if (html = eval(html), html.length) {
				var point, o, h, childmid = [];
				htmlcode = '<div id="cnzz_slide_' + options.id + '" onmouseover="clearInterval(rollId)" onmouseout="showAtTime()">';
				for (o in html) h = html[o],
				"string" == typeof h && (h = eval("[" + h + "]"), h = h[0]),
				h.type && (childmid[o] = h.id, htmlcode += "<div " + (0 != o ? 'style="display:none;"': "") + '><a href="' + h.href + '" target="' + h.target + '" ' + ("text" == h.type ? 'style="' + (void 0 == h.color ? "": "color:" + h.color + ";") + (void 0 == h.font ? "": "font-size:" + h.font + "px;") + '"': "") + ">" + ("text" == h.type ? h.text: "image" == h.type ? "<img width=" + h.width + " height=" + h.height + " src='" + h.src + "' border=0 />": "rich" == h.type ? h.content: null) + "</a></div>");
				htmlcode += "</div><script>var defaultNum=0,slidetime = " + options.stime + ';var rollId=setInterval(showPushLink,slidetime);function G(x){return document.getElementById(x);}function showAtTime(){showPushLink();rollId=setInterval(showPushLink,slidetime);}function showPushLink(){var num,cnode,clength,pnode = G("cnzz_slide_' + options.id + '");cnode = pnode.childNodes;clength = cnode.length;defaultNum++;if(defaultNum>clength-1) defaultNum=0;num=defaultNum;for(var i=0;i<clength;i++){if(num != i){cnode[i].style.display = "none";}else{cnode[num].style.display = "";}}}</script>'
			}
			mid = childmid.join(","),
			htmlcode = htmlcode || ""
		}
		return options.af && (tongjipont = options.ht + "/stat.gif?sid=" + options.id + "&aid=" + options.did + "&mid=" + mid + "&ip=" + options.ip + "&cookie=" + options.cc + "&showp=" + (screen.width + "x" + screen.height) + "&href=" + encodeURIComponent(d.location) + "&referer=" + encodeURIComponent(d.referrer) + "&rtime=" + +new Date + "&js=2", htmlcode && (options["t_url_" + options.id] = tongjipont, options["real_" + options.id] = "rsid=" + options.id + "&raid=" + options.did + "&rmid=" + mid + "&rip=" + options.ip + "&rcookie=" + options.cc)),
		htmlcode
	}
	function SetFlash(e) {
		if (!e) return null;
		var t, o = "";
		return isflash = isflash === void 0 ? IsFlash() : isflash,
		isflash ? (t = 1 == e.wmode ? "transparent": "opaque", o = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="' + e.width + '" height="' + e.height + '" align="middle"><param name="allowScriptAccess" value="always"><param name="quality" value="high"><param name="wmode" value="' + t + '"><param name="movie" value="' + e.src + '"><embed wmode="' + t + '" src="' + e.src + '" quality="high" width="' + e.width + '" height="' + e.height + '" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></object>', "" != e.href && (o = '<div style="position:relative;overflow:hidden;width:' + e.width + "px;height:" + e.height + 'px;"><a href="' + e.href + '" target="' + e.target + '" style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;filter:alpha(opacity=0);opacity:0;background:#FFF;cursor:pointer;display:block;"></a>' + o + "</div>")) : "" != e.href && (o = '<a href="' + e.href + '" target="' + e.target + '"><img src="' + e.backupimage + '" width="' + e.width + '" height="' + e.height + '" border="0" /></a>'),
		o
	}
	function sgCookie(e, t, o) {
		if (!e) return ! 1;
		if (void 0 !== t) {
			o.expires ? (o.expires = parseInt(o.expires, 10), 0 >= o.expires && (o.expires = 1)) : o.expires = 1;
			var i = o.expires,
			n = t2 = new Date;
			return n.setTime(t2.getTime() + 864e5 * i),
			o.expires = n,
			document.cookie = [e, "=", t, o.expires ? ";expires=" + o.expires.toUTCString() : "", o.path ? ";path=" + o.path: ";path=/", o.domain ? ";domain=" + o.domain: "", o.secure ? ";secure": ""].join("")
		}
		document.cookie.split("; ");
		var r = document.cookie.match(RegExp("(^| )" + e + "=([^;]*)(;|$)"));
		return r ? unescape(r[2]) : ""
	}
	function GetOrientation() {
		var e = "",
		t = w.CNZZ_ADM_Orientation || "";
		if ("" != t) {
			for (var o = [], i = /([0-9a-zA-Z_]+\((?:[0-9a-zA-Z_,]+?)\))\|*/; i.test(t);) {
				var n = RegExp.$1;
				n = n.substr(0, n.length - 1).replace(/[\(|\)]/g, ","),
				o.push(n),
				t = t.replace(i, "")
			}
			t = o.join("|"),
			e = "&customOion=" + t
		}
		var r = getPluginParams();
		return e += r
	}
	function getPluginParams() {
		var e, t = window,
		o = t.cnzzadm_proid || "",
		i = t.cnzzadm_pid || "",
		n = t.cnzzadm_fid || "",
		r = t.cnzzadm_mid || "",
		a = t.cnzzadm_floorid || "";
		return e = (o ? "&proid=" + o: "") + (o ? "&proid=" + o: "") + (i ? "&pid=" + i: "") + (n ? "&fid=" + n: "") + (r ? "&mid=" + r: "") + (a ? "&floorid=" + a: "")
	}
	function abind(e, t, o) {
		e.addEventListener ? e.addEventListener(t, o, 0) : e.attachEvent("on" + t, o)
	}
	function loaded(e) {
		return e ? (window.loaded = window.loaded || [], loaded["load_" + e] ? loaded["load_" + e] : (loaded["load_" + e] = !0, !1)) : !1
	}
	function runRealShow(e, t, o) {
		"function" == typeof FixedRealShow && options && options["real_" + t] &&
		function(o) {
			var i = /http:\/\/([^\/]+)/i,
			n = o.match(i),
			r = n[1] || "",
			a = "";
			r && (a = "http://ex." + r + "/stat.gif?" + options["real_" + t], new FixedRealShow(e, a))
		} (o)
	}
	function render_async(e, t, o) {
		var i, n, r, a, d, s, l;
		return t && (i = document.getElementById(t)),
		i && e ? (l = o === void 0 ? add_batch(e, !0) || 0 : e.id, loaded(l), options = parseParams(l), n = adHolder(), l = options.id, n && (r = parseInt(options.width, 10), a = parseInt(options.height, 10), r >= 0 && (d += ";width:" + r + "px;"), a >= 0 && (d += ";height:" + a + "px;"), (r >= 0 || a >= 0) && (d += ";overflow:hidden;", i.style.cssText += d), browser.ie && -1 !== n.toLowerCase().indexOf("</object>") && -1 !== n.toLowerCase().indexOf(".swf") && -1 !== n.toLowerCase().indexOf("<param") && (i.style.cssText += ";position:relative;"), i.innerHTML = n), options.af && (s = options["t_url_" + l] || "", s && setTimeout(function() {
			sendRequest(s)
		},
		0), options.turl && setTimeout(function() {
			sendRequest(options.turl)
		},
		0), runRealShow(t, l, options.ht)), void 0) : !1
	}
	function randomRunBatch() {
		var e = window.location.href,
		t = encodeURIComponent(e),
		o = RegExp("file:///");
		if (o.test(e)) return ! 1;
		if (window[t]) return ! 1;
		var i = urlSet(t, "url");
		d.write('<script type="text/javascript" charset="gbk" src="' + i + '"></scr' + "ipt>"),
		window[t] = !0
	}
	var ADS = {
		showFixed: function() {
			var e, t = options,
			o = options.htmlcode,
			i = iframeset(),
			n = o.type,
			r = o.fromtype || "text" == o.originaltype,
			a = t.width,
			d = t.height;
			return i ? "rich" != n || (r && (i = '<div id="cnzz_slot_' + t.id + '" style="' + ( - 1 != a && "width:" + a + "px;" || "") + ( - 1 != d && "height:" + d + "px;" || "") + "border:none;margin:0px;padding:0px;" + (i ? "": "background-color:#FFFFFF;") + 'overflow:hidden;" >' + i + "</div>"), e = i, t.isiframe) ? -1 == a || -1 == d ? (e = '<div id="cnzz_slot_' + t.id + '" style="' + ( - 1 != a && "width:" + a + "px;" || "") + ( - 1 != d && "height:" + d + "px;" || "") + 'border:none;margin:0px;padding:0px;overflow:hidden;" >' + i + "</div>", document.write(e), !1) : (e = '<div id="cnzz_slot_' + t.id + '" style="width:' + a + "px;height:" + d + "px;border:none;margin:0px;padding:0px;" + (i ? "": "background-color:#FFFFFF;") + 'overflow:hidden;" >' + i + "</div>", document.write(e), !1) : (document.write(e), !0) : i === !1 ? !1 : (e = '<div id="cnzz_slot_' + t.id + '" style="width:' + a + "px;height:" + d + 'px;border:none;margin:0px;padding:0px;background-color:#FFFFFF;overflow:hidden;" ></div>', document.write(e), void 0)
		},
		showFloat: function() {
			var e, t, o, i, n, r, a, s, l, c = options,
			p = "",
			h = 0,
			m = 0,
			u = 0,
			f = !0,
			g = c.width,
			v = c.height;
			if (f = !(browser.ie && (6 == browser.version || "BackCompat" == document.compatMode)), l = document.compatMode && "css1compat" == document.compatMode.toLowerCase() ? document.documentElement: document.body, d.body) {
				if (iframeHtml = iframeset() || "", "" == iframeHtml) return ! 1;
				c.position = c.position || "right-down",
				s = c.position.split("-"),
				m = c.mleft || 0,
				u = c.mtop || 0;
				for (e in s) {
					var b = s[e];
					0 == e ? "left" == b ? p = "left:" + m + "px;": "right" == b ? p = "right:" + m + "px;": "center" == b && (m = (l.clientWidth - g) / 2, 0 > m && (m = 0), p = "left:" + m + "px;") : 1 == e && ("up" == b ? (h = parseInt(c.mtop, 10), p += "top:" + u + "px;") : "down" == b ? p += "bottom:" + u + "px;": "center" == b && (u = (l.clientHeight - v - 22) / 2, 0 > u && (u = 0), h = u, p += "top:" + u + "px;"))
				}
				i = '<div id="cnzz_float_' + c.id + '" style="width:' + (g || 0) + "px;" + (1 == c.scroll ? "position:fixed;": "position:absolute;") + p + 'border:1px solid #E5E5E5;z-index:9999;background-color:#FFFFFF;">' + ("t" == c.closePosition.charAt(1) ? '<div style="width:' + (g || 0) + 'px;height:18px;border-bottom: 1px solid #E5E5E5;background:#F2F2F2;" ><span id="closebutton_' + c.id + '" onclick="this.parentNode.parentNode.style.display=\'none\';return false;" style="width:45px;height:18px;' + ("l" == c.closePosition.charAt(0) ? "float:left;background:url(" + imagepath + "/cbutton1.gif) no-repeat;background-position:center;": "float:right;background:url(" + imagepath + "/cbutton2.gif) no-repeat;background-position:center;") + 'cursor:pointer;"></span></div>': "") + '<div style="width:' + (g || 0) + "px;height:" + (v || 0) + 'px;z-index:9999;overflow:hidden;">' + iframeHtml + "</div>" + ("b" == c.closePosition.charAt(1) ? '<div style="width:' + (g || 0) + 'px;height:18px;border-top: 1px solid #E5E5E5;background:#F2F2F2;" ><span id="closebutton_' + c.id + '" onclick="this.parentNode.parentNode.style.display=\'none\';return false;" style="width:45px;height:18px;' + ("r" == c.closePosition.charAt(0) ? "float:right;background:url(" + imagepath + "/cbutton2.gif) no-repeat;background-position:center;": "float:left;background:url(" + imagepath + "/cbutton1.gif) no-repeat;background-position:center;") + 'cursor:pointer;"></span></div>': "") + "</div>",
				d.write(i),
				r = d.getElementById("cnzz_float_" + c.id),
				n = d.getElementById("closebutton_" + c.id) || {},
				0 != c.ptime && setTimeout(function() {
					r.style.display = "none"
				},
				c.ptime),
				f || 1 != c.scroll || (r.style.position = "absolute", "down" == s[1] && (h = l.clientHeight - (r.offsetHeight || parseInt(v, 10) + 21) - c.mtop), t = d.body.scrollTop + d.documentElement.scrollTop, w.attachEvent("onscroll",
				function() {
					a && clearTimeout(a),
					o = d.body.scrollTop + d.documentElement.scrollTop,
					a = setTimeout(function() {
						Math.abs(o - t),
						r.style.top = o + h + "px"
					},
					100)
				}), w.attachEvent("onresize",
				function() {
					r.style.top = d.body.scrollTop + d.documentElement.scrollTop + h + "px"
				}))
			}
			return ! 1
		},
		showPop: function() {
			var e, t, o, i, n = options,
			r = adHolder() || "",
			a = n.width,
			d = n.height;
			return "" == r ? !1 : (0 > r.indexOf("<body>") && (r = "<!DOCTYPE html><body style='padding:0px;margin:0px;background-color: transparent;'>" + r), i = function(e, t, o, i, n, r, a, d) {
				var s, l, c = r || 0,
				p = a || 0;
				"right" == e && (o = screen.width - c - o),
				"down" == t && (i = screen.height - p - i - 100);
				try {
					s = w.open("about:blank", "CNPOP" + +new Date, "width=" + c + ",height=" + p + ",left=" + o + ",top=" + i + ",toolbar=no,Location=no,status=no,titlebar=no,alwaysRaised=yes,menubar=no,resizable=no"),
					s.document && (l = s.document, l.open("text/html", "replace"), l.write(d), l.close(), s.focus(), l.body && (l.body.style.fontSize = "12px", l.body.style.padding = 0, l.body.style.margin = 0), n > 0 && setTimeout(function() {
						s && s.close()
					},
					n))
				} catch(h) {
					return ! 1
				}
				return ! 1
			},
			e = n.position.split("-"), t = e[0] || "left", o = e[1] || "up", "1" == n.isbefore ? setTimeout(function() {
				i(t, o, n.mleft, n.mtop, n.ptime, a, d, r)
			},
			n.loadtime) : (n.ptime > 0 && (r += "<script>setTimeout(function(){window.close();}," + n.ptime + ");</script>"), w.addEventListener ? w.addEventListener("unload",
			function() {
				i(t, o, n.mleft, n.mtop, n.ptime, a, d, r)
			},
			0) : w.attachEvent("onunload",
			function() {
				i(t, o, n.mleft, n.mtop, n.ptime, a, d, r)
			})), !1)
		}
	},
	w = window,
	d = w.document,
	options = [],
	singleId,
	n = w.navigator,
	holderArray = [],
	rootDomain = "http://js.adm.cnzz.net",
	imagepath = "http://cache.adm.cnzz.net/images",
	rootUrl = rootDomain + "/appgcm.php",
	isflash,
	mybody = d.compatMode && "css1compat" == d.compatMode.toLowerCase() ? d.documentElement: d.body,
	map = FnRegister("CNZZ_SLOT_MAP", {});
	w.cnzz_api_adm = !0;
	var getRootDomain = function(e) {
		var t = e || d.domain,
		o = t.match(/([a-z0-9][a-z0-9\-]*?\.(?:com|cn|net|org|gov|info|la|cc|co|jp)(?:\.(?:cn|jp))?)$/);
		return o ? o[0] : t
	},
	getDomain = function() {
		var e = d.referrer;
		if ("" != e) {
			var t = /(\w+):\/\/([^\/:]+)(:\d*)?([^#]*)/,
			o = e.match(t);
			return o ? o[2] : ""
		}
		return ""
	},
	browser = function() {
		var e = n.userAgent.toLowerCase(),
		t = w.opera,
		o = 0,
		i = {
			ie: !!window.ActiveXObject,
			opera: !!t && t.vision,
			webkit: e.indexOf(" applewebkit") > -1,
			air: e.indexOf(" adobeair") > -1,
			mac: e.indexOf("macintosh") > -1,
			quirks: document.compactMode || false || !1
		};
		if (i.gecko = "Gecko" == n.product && !i.webkit && !i.opera, i.ie && (o = parseInt(e.match(/msie (\d+)/)[1], 10)), i.gecko) { / firefox\ / (\S + ) / .test(e) && (i.firefox = !!RegExp.$1);
			var r = e.match(/rv:([\d\.]+)/);
			o = parseInt(r[1], 10) || 0
		}
		return i.webkit && (/chrome\/(\S+)/.test(e) ? (o = parseInt(RegExp.$1, 10), i.chrome = !!RegExp.$1) : /version \/(S+)/.test(e) && (o = parseInt(RegExp.$1, 10), i.safari = !!RegExp.$1)),
		i.opera && (o = t.version()),
		i.version = o,
		i
	} (),
	IsFlash = function() {
		var hasflash = !1,
		ii, fl;
		if (n.plugins && n.plugins.length) {
			for (ii = 0; n.plugins.length > ii; ii++) if ( - 1 != n.plugins[ii].name.indexOf("Shockwave Flash")) {
				hasflash = !0;
				break
			}
		} else if (w.ActiveXObject && !w.opera) for (ii = 12; ii >= 2; ii--) try {
			if (fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');")) {
				hasflash = !0;
				break
			}
		} catch(e) {}
		return hasflash
	};
	FnRegister("CNZZ_SLOT_Async",
	function(e, t) {
		var o, i, n, e = parseInt(e, 10);
		return (n = loaded(e)) ? !1 : map[e] ? (render_async(map[e], t, !0), !0) : (t && (o = document.getElementById(t)), !o || 1 > e ? !1 : (i = urlSet(e, "", "CNZZ_AD_Async", "&eid=" + t), __loadScript(i), void 0))
	}),
	function() {
		var e, t = "cnzz_random_seed",
		o = parseInt(10 * Math.random() + 1),
		i = sgCookie(t),
		n = 5,
		r = !1;
		i ? i == n && (r = !0) : (e = {
			expires: 1,
			domain: document.domain
		},
		sgCookie(t, o, e), o == n && (r = !0)),
		r && randomRunBatch()
	} (),
	FnRegister("CNZZ_AD_Async", render_async),
	FnRegister("CNZZ_ADD_BATCH", add_batch),
	FnRegister("CNZZ_AD_BATCH", do_batch),
	FnRegister("cnzz_RenderIFrame", cnzz_RenderIFrame),
	FnRegister("CNZZ_AD_RSLOT", _renderSlot),
	FnRegister("CNZZ_SLOT_RENDER", _adShow)
})(window),
FixedRealShow.prototype = {
	init: function(e, t) {
		if (this.elem = document.getElementById(e) || "", this.flagArray = [], this.id = e, this.url = t, this.flagArray[e] = !1, !this.elem) return ! 1;
		this.locationinfo = this.getelemlocation(this.elem),
		this.sendHttp();
		var o = this;
		this.addEvents(window, "scroll",
		function() {
			o.sendHttp()
		})
	},
	sendHttp: function() {
		if (!this.flagArray[this.id]) {
			var e = this.isSeen(this.id),
			t = this.makeUrl(),
			o = this;
			e && t && (setTimeout(function() {
				o.sendRequest(t)
			},
			0), this.flagArray[this.id] = !0)
		}
	},
	makeUrl: function() {
		var e = screen.width + "x" + screen.height,
		t = document.referrer,
		o = "";
		return t && (t = encodeURIComponent(t)),
		this.url && (o = this.url + "&showp=" + e + "&href=" + encodeURIComponent(document.location) + "&referer=" + t + "&rtime=" + +new Date + "&view=1"),
		o
	},
	sendRequest: function(e) {
		var t = new Image;
		new Date,
		t.onload = t.onabort = t.onerror = function() {
			t = null
		},
		t.src = e
	},
	getelemlocation: function(e) {
		if (!e || 1 != e.nodeType) return {
			x: -1,
			y: -1
		};
		var t, o, i, n, r, a = navigator.userAgent.toLowerCase(),
		d = "",
		s = [];
		if (null === e.parentNodeNode || "none" == e.style.display) return ! 1;
		if (e.getBoundingClientRect) return t = e.getBoundingClientRect(),
		o = Math.max(document.documentElement.scrollTop, document.body.scrollTop),
		i = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
		{
			x: t.left + i,
			y: t.top + o
		};
		if (document.getBoxObjectFor) t = document.getBoxObjectFor(e),
		n = e.style.borderLeftWidth ? parseInt(e.style.borderLeftWidth, 10) : 0,
		r = e.style.borderTopWidth ? parseInt(e.style.borderTopWidth, 10) : 0,
		s = [t.x - n, t.y - r];
		else {
			if (s = [e.offsetLeft, e.offsetTop], d = e.offsetParent, d != e) for (; d;) s[0] += d.offsetLeft,
			s[1] += d.offsetTop,
			d = d.offsetParent; ( - 1 != a.indexOf("opera") || -1 != a.indexOf("safari") && "absolute" == e.style.PageXYition) && (s[0] -= document.body.offsetLeft, s[1] -= document.body.offsetTop)
		}
		for (d = e.parentNodeNode ? e.parentNodeNode: null; d && "BODY" != d.tagName && "HTML" != d.tagName;) s[0] -= d.scrollLeft,
		s[1] -= d.scrollTop,
		d = d.parentNodeNode ? d.parentNodeNode: null;
		return {
			x: s[0],
			y: s[1]
		}
	},
	isSeen: function(e) {
		var t = document.getElementById(e) || "";
		if (t) {
			var o, i = this.getelemlocation(t),
			n = (document.documentElement.scrollTop + document.body.scrollTop, Math.max(document.body.scrollTop, document.documentElement.scrollTop, 0));
			if (o = "BackCompat" == document.compatMode ? document.body.clientHeight: document.documentElement.clientHeight, i && o + n >= i.y) return ! 0
		}
		return ! 1
	},
	addEvents: function(e, t, o) {
		e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent && e.attachEvent("on" + t, o)
	}
};