var clickEleNum = "0";
var _ozpoc;
var hrefNum = "0";
var urlCnt = "//1844.oadz.com/cnt;C1;1844;.coolpad.cn;KJZ4wUXHS+72DZcOuzzsSVLqHK4=;";
var urlJcnt = "//1844.oadz.com/jcnt;C1;1844;.coolpad.cn;sl5eJKA/rlyopEXuLxZZRnUWxN0=;";
var ozrec = "ozrec";
var win = window;
var doc = win.document;
var protocol = win.location.protocol.toLowerCase();
var winTop = win.top;
var winScreen = win.screen;
var img1 = new Image();
var img2 = new Image();
var _734OADZaU = 0;
var locHrefNum = "-";
var _734OADZbl = "-";
var INPUT = "\x49\x4e\x50\x55\x54";			//INPUT
var button = "\x62\x75\x74\x74\x6f\x6e";	//button
var image = "\x69\x6d\x61\x67\x65";			//image
var submit = "\x73\x75\x62\x6d\x69\x74";	//submit
var img = "\x69\x6d\x67";					//img
var alt = "\x61\x6c\x74";					//alt
var width = "\x77\x69\x64\x74\x68";			//width
var height = "\x68\x65\x69\x67\x68\x74";	//height
var script = "\x73\x63\x72\x69\x70\x74";	//script
var type = "\x74\x79\x70\x65";				//type
var text = "\x74\x65\x78\x74";				//text
var javascript = "\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74";		//javascript
var src = "\x73\x72\x63";					//src
var init = "\x69\x6e\x69\x74";				//init
var FLASH = "\x46\x4c\x41\x53\x48";			//FLASH
var body = "\x62\x6f\x64\x79";				//body
var html = "\x68\x74\x6d\x6c";				//html
var DIV = "\x44\x49\x56";					//DIV
var __ozlvd = "\x5f\x5f\x6f\x7a\x6c\x76\x64";       //__ozlvd
var cookieName1 = __ozlvd + urlCnt.split(";")[2];   //__ozlvd1844
var OZ_0J_ = "\x4f\x5a\x5f\x30\x4a\x5f";            //OZ_0J_
var cookieName2 = OZ_0J_ + urlCnt.split(";")[2];    //OZ_0J_1844
var isIe = (navigator.appName == 'Microsoft Internet Explorer');
var nav = navigator;

/*将数字转换成16进制
 *
 */
function transform(num) {		//转换成16进制
    return parseInt(num, 16);
};

/*将（\*、\&、\#、\?、\'）转换成url编码
 *@param str 字符串
 */
function charaRep(str) {
    if (str) {
        var arr1 = new Array(5);
        arr1[0] = /\*/g;
        arr1[1] = /\&/g;
        arr1[2] = /\#/g;
        arr1[3] = /\?/g;
        arr1[4] = /\'/g;
        var arr2 = new Array(5);
        arr2[0] = "%2A";
        arr2[1] = "%26";
        arr2[2] = "%23";
        arr2[3] = "%3F";
        arr2[4] = "%27";
        for (var i = 0; i < 5; i++) {
            str = str.replace(arr1[i], arr2[i]);
        }
    }
    return str;
};

/*设置cookie值
 *@param name 字符串 cookie的name
 *@param value 字符串 cookie的name对应的value
 *@param expires Date 过期时间
 *@param domain 字符串 domain
 */
function setCookie(name, value, expires, domain) {
    if (expires && expires > 0) var cookie = name + "=" + value + ";expires=" + expires.toGMTString() + ";path=/;domain=" + domain;
    else var cookie = name + "=" + value + ";path=/;domain=" + domain;
    doc.cookie = cookie;
};

/*获取cookie值
 *@param name 字符串 cookie的name
 */
function getCookie(name) {
    var cookie = doc.cookie;
    var index = cookie.indexOf(name + "=");
    if (index != -1) {
        var beginIndex = index + name.length + 1;
        var endIndex = cookie.indexOf(";", beginIndex);
        if (endIndex == -1) {
            endIndex = cookie.length;
        }
        return cookie.substring(beginIndex, endIndex);
    }
    return null;
};

/*获取网站domain
 *
 */
function getDomain() {
    var domain = doc.domain;
    if (domain.indexOf(".") > -1) {
        var arr = domain.split(".");
        // arr =['shop', 'coolpad', 'cn'];
        // http://ent.sina.com.cn/
        domain = arr[arr.length - 2] + "." + arr[arr.length - 1];
        // domain = 'coolpad.cn';
        if (arr.length > 2 && arr[arr.length - 3] != "www") {
            var domainType = arr[arr.length - 2];
            // domainType = 'coolpad';
            if (domainType.length <= 2 || (domainType == "com" || domainType == "edu" || domainType == "gov" || domainType == "net" || domainType == "org" || domainType == "mil")) {
                domain = arr[arr.length - 3] + "." + domainType + "." + arr[arr.length - 1];
            }
        }
    }
    return domain;
};

function _734OADZy(docNode, callback) {
    if (docNode.onclick) {
        docNode._734OADZab = docNode.onclick;
    }
    docNode.onclick = callback;
};

/*事件绑定
 *@param str        document        对象
 *@param callback   function        回调方法
 */
function addEventLis(docNode, callback) {
    if (!docNode.onclick) {
        docNode.onclick = callback;
    } else {
        if (isIe) {
            docNode.attachEvent("onclick", callback);
        } else {
            docNode.addEventListener("click", callback, false);
        }
    }
};

function _734OADZv() {
    for (var i = 0; i < win.frames.length; i++) {
        try {
            addEventLis(win.frames[i].document, _734OADZp);
        } catch(err) {}
    }
    if (win.onloadCallback) {
        win.onloadCallback();
    }
};

/*获取有href属性的document对象
 *当前元素不满足条件向上找10层，都不满足条件返回null
 *@param element    document        对象
 */
function getHrefElem(element) {
    var num = 1;
    while (element && element.tagName != "A" && element.tagName != "AREA" && num <= 10) {
        element = element.parentNode;
        num++;
    }
    if (element && (element.tagName == "A" || element.tagName == "AREA")) {
        return element;
    } else {
        return null;
    }
};

/*获取onclick事件的element对象。
 *count2初始值为1；
 *clickEleNum == 1时：有参数element、count2小于等于5且元素不满足（有name或id（nameOrid2）、nameOrid2以"__"开头、nameOrid2长度大于2、element有onclick属性）4个条件之一，向当前元素上一层元素进一步判断；count2=6或者上面条件不成立，判断（element && element.onclick && nameOrid2 && nameOrid2.indexOf("__") == 0 && nameOrid2.length > 2）满足条件返回当前元素。
 *clickEleNum != 1时：
 *tagname2为element.tagName.toLowerCase()；除html元素和body元素，返回有onclick属性的emement元素，不满足条件，向上找5层，在没有满足条件的元素，返回null。
 *
 *当前元素不满足条件，向父元素找，对到找50层父元素。
 *@param        element    document        对象
 *@returns      element    document        对象
 */
function getClickEle(element) {
    var count2 = 1;
    if (clickEleNum == 1) {
        var nameOrid2 = getNameOrId(element);
        while (element && count2 <= 5 && !(nameOrid2 && nameOrid2.indexOf("__") == 0 && nameOrid2.length > 2 && element.onclick)) {
            element = element.parentNode;
            nameOrid2 = getNameOrId(element);
            count2++;
        }
        if (element && element.onclick && nameOrid2 && nameOrid2.indexOf("__") == 0 && nameOrid2.length > 2) {
            return element;
        }
    } else {
        var tagname2;
        if (element && element.tagName) {
            tagname2 = element.tagName.toLowerCase();
        }
        while (element && !element.onclick && count2 <= 5 && tagname2 != body && tagname2 != html) {
            if (element.parentNode && element.parentNode.tagName) {
                element = element.parentNode;
                tagname2 = element.tagName.toLowerCase();
                count2++;
            } else {
                return null;
            }
        }
        if (element && element.onclick && tagname2 != body && tagname2 != html) {
            return element;
        }
    }
    return null;
};

/*获取"属性"值
 *@param element    document    对象
 *@param name       string      属性名
 */
function getAttr(element, name) {
    try {
        if (element && name && element.getAttribute(name)) {
            return element.getAttribute(name).toString();
        }
    } catch(err) {}
    return null;
};

/*获取name或者id,默认返回"-"。
 *@param        element    document         对象
 *@returns      string    nameORid        字符串
 */
function getNameOrId(element) {
    if (element && element.name) {
        return element.name.toString();
    } else if (getAttr(element, "name")) {
        return getAttr(element, "name");
    } else if (element && element.id) {
        return element.id.toString();
    } else {
        return "-";
    }
};

/*获取浏览器类型
 *
 */
function getBrowVers() {
    try {
        var userAgent = navigator.userAgent;
        var Opera = userAgent.indexOf("Opera") > -1;
        var KHTML = userAgent.indexOf("KHTML") > -1 || userAgent.indexOf("Konqueror") > -1 || userAgent.indexOf("AppleWebkit") > -1;
        if (!Opera && userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1) {
            var regExp1 = new RegExp("MSIE (\\d+\\.\\d+);");
            if (regExp1.test(userAgent)) {
                return "IE" + RegExp["$1"];
            }
        } else if (!Opera && !KHTML && userAgent.indexOf("Gecko") > -1) {
            var regExp2 = new RegExp("Firefox/(\\d+(\\.\\d+)+)");
            if (regExp2.test(userAgent)) {
                return "FF" + RegExp["$1"];
            } else {
                var index = userAgent.lastIndexOf("/");
                if (index > -1) {
                    return "NC" + userAgent.substring(index + 1);
                }
            }
        } else if (Opera) {
            return "Opera";
        } else if (KHTML) {
            return "KHTML";
        }
    } catch(err) {}
    return "-";
};

/*获取tagName为"DIV"的element对象。
 *name不包含"__"并且name长度大于2；
 *没有name属性，id不包含"__"并且id长度大于2。
 *当前元素不满足条件，向父元素找，对到找50层父元素。
 *@param        element    document        对象
 *@returns      element    document        对象
 */
function getDiv(element) {
    var count = 1;
    var flagNum = 0;
    while (element && count <= 50) {
        element = element.parentNode;
        count++;
        if (element && element.tagName == "DIV") {
            var nameORid = getNameOrId(element);
            if (nameORid && nameORid.indexOf("__") == 0 && nameORid.length > 2) {
                flagNum = 1;
                break;
            }
        }
    }
    if (flagNum == 1) {
        return element;
    } else {
        return null;
    }
};

/*设置cookie。
 *cookie里不存在OZ_0J_1844值：直接设置为tagNameGL + "*" + nameOridGt2 + "*" + seconds；
 *cookie里有OZ_0J_1844值：
 *value里有少于4个"&"时，cookieValue = cookieValue + "&" + tagNameGL + "*" + nameOridGt2 + "*" + seconds;
 *value里有等于4个"&"时，cookieValue = cookieValue.substr(p) + "&" + tagNameGL + "*" + nameOridGt2 + "*" + seconds;
 *没有name属性，id不包含"__"并且id长度大于2。
 *当前元素不满足条件，向父元素找，对到找50层父元素。
 *@param        tagNameGL       string        tagName (IPUT、A)为大写，其他小写。
 *@param        nameOridGt2     string        name或者id(开始两个字符后面的部分)
 *@param        seconds         number        //当前时间距 1970 年 1 月 1 日的秒数
 */
function setTagnameCookie(tagNameGL, nameOridGt2, seconds) {
    nameOridGt2 = escape(nameOridGt2);
    var cookieValue = getCookie(cookieName2);//OZ_0J_1844
    if (cookieValue) {
        var i = 0,
        k = 0,
        p = 0;
        for (i = 0; i < cookieValue.length; i++) {
            if (cookieValue.charAt(i) == '&') {
                k++;
                if (k == 1) {
                    p = i + 1;
                }
            }
        }
        if (k < 4) {
            cookieValue = cookieValue + "&" + tagNameGL + "*" + nameOridGt2 + "*" + seconds;
        } else if (k == 4 && p > 0) {
            cookieValue = cookieValue.substr(p) + "&" + tagNameGL + "*" + nameOridGt2 + "*" + seconds;
        }
    } else {
        cookieValue = tagNameGL + "*" + nameOridGt2 + "*" + seconds;
    }
    setCookie(cookieName2, cookieValue, 0, getDomain());
};

function _734OADZp(event) {
    var flagBool = 0;
    if (_734OADZaU <= 49) {
        var element = null;
        var elemHref = "-";
        var tagname = null;
        var nameOrid = "-";
        var offsetLeft = 0;
        var offsetTop = 0;
        var e = event;
        if (!event) {
            if (win.event) {
                event = win.event;
                element = event.srcElement;
            } else {
                try {
                    for (var i = 0; i < win.frames.length; i++) {
                        if (win.frames[i].event) {
                            event = win.frames[i].event;
                            element = event.srcElement;
                        }
                    }
                } catch(err) {}
            }
        } else {
            if (event.target) {
                element = event.target;
            } else if (event.srcElement) {
                element = event.srcElement;
            }
        }
        if (event && element) {
            var elem = null;
            var hrefElement = getHrefElem(element);
            if (hrefElement && hrefElement.href) {
                elem = hrefElement;
                tagname = "A";
                nameOrid = escape(getNameOrId(elem));
                elemHref = escape(elem.href);
                if (!elemHref) elemHref = "-";
            } else if (element.tagName == INPUT && (element.type == button || element.type == image || element.type == submit)) {
                elem = element;
                tagname = INPUT;
                nameOrid = escape(getNameOrId(elem));
            } else {
                elem = getClickEle(element);
                if (elem) {
                    tagname = elem.tagName;
                    if (clickEleNum == 1) {
                        flagBool = 1;
                        nameOrid = escape(getNameOrId(elem).substring(2));
                    } else {
                        nameOrid = escape(getNameOrId(elem));
                    }
                }
            }
            if (elem) {
                var _734OADZao;
                if (tagname && tagname != "-") {
                    var elemDiv = getDiv(elem);
                    _734OADZbj = getAttr(elem, _ozpoc);
                    _734OADZbl = getAttr(elem, ozrec);
                    var elem2 = element;
                    while (elem2) {
                        offsetLeft = offsetLeft + elem2.offsetLeft;
                        offsetTop = offsetTop + elem2.offsetTop;
                        elem2 = elem2.offsetParent;
                    }
                    if (flagBool != 1 && nameOrid.toLowerCase().indexOf("__ad_") == 0) {
                        nameOrid = nameOrid.substring(2)
                    }
                    if (elemDiv) {
                        var _734OADZav = escape(getNameOrId(elemDiv).substring(2));
                        _734OADZao = tagname + "*" + nameOrid + "*" + offsetLeft + "*" + offsetTop + "*" + _734OADZav;
                    } else {
                        _734OADZao = tagname + "*" + nameOrid + "*" + offsetLeft + "*" + offsetTop;
                    }
                    var seconds = Math.floor((new Date()).getTime() / 1000);//当前时间距 1970 年 1 月 1 日的秒数
                    var nameOrid = getNameOrId(elem);
                    if (nameOrid.toLowerCase().indexOf("__ad_") == 0) {
                        setTagnameCookie(tagname, nameOrid.substring(2), seconds);
                    } else if (elemDiv) {
                        nameOrid = getNameOrId(elemDiv);
                        if (nameOrid.toLowerCase().indexOf("__ad_") == 0) {
                            setTagnameCookie(DIV, nameOrid.substring(2), seconds);
                        }
                    }
                }
                if (tagname && urlJcnt) {
                    try {
                        if (_734OADZaV == 1 && _734OADZaU == 0 && _734OADZba == 1) {
                            _734OADZaU = 1;
                            _734OADZaV = 2;
                            _734OADZba = _734OADZaU + 1;
                        } else {
                            if (_734OADZba == 1) {
                                _734OADZaU = 2;
                            } else {
                                _734OADZaU = _734OADZba;
                            }
                            _734OADZba = _734OADZaU + 1;
                        }
                    } catch(err) {
                        _734OADZaU = 99;
                    }
                    _734OADZa(_734OADZao, _734OADZaU, elemHref);
                    _734OADZC(isIe ? 100 : 300);
                }
            }
        }
    }
};

function _734OADZC(duration) {
    var bt = (new Date()).getTime();
    while (((new Date()).getTime() - bt) < duration);
};

function _734OADZa(_734OADZao, _734OADZcb, _734OADZap) {
    var _734OADZaW = _734OADZf();
    if (urlJcnt && locationHref && _734OADZbt && _734OADZbp && _734OADZao && _734OADZcb > 0 && _734OADZap) {
        img2.src = protocol + urlJcnt + "?" + _734OADZcb + "&" + locationHref + "&" + _734OADZbt + "&" + _734OADZbp + "&" + _734OADZao + "&" + _734OADZap + "&" + _734OADZaW;
    }
};

function __ozflash(str) {
    if (str && str != '') {
        if (_734OADZaU <= 49) {
            _734OADZaU = _734OADZaU + 1;
            if (str.toLowerCase().indexOf("__ad_") == 0) {
                var seconds = Math.floor((new Date()).getTime() / 1000);//当前时间距 1970 年 1 月 1 日的秒数
                str = str.substring(2);
                setTagnameCookie(FLASH, str, seconds);
            }
            var _734OADZao = FLASH + "*" + str + "*0*0";
            _734OADZa(_734OADZao, _734OADZaU, '-');
            _734OADZC(isIe ? 100 : 300);
        }
    }
};

function getLocationHref() {
    var locationHref = "-";
    try {
        try {
            locationHref = winTop.location.href;
        } catch(err) {
            locationHref = win.location.href;
        }
    } catch(err) {}
    if (!locationHref) {
        locationHref = "-";
    }
    locationHref = escape(locationHref);
    return locationHref;
};
/*获取location.href
 *
 */
function getCurLocationHref() {
    var locationHref = "-";
    try {
        locationHref = win.location.href;
    } catch(err) {}
    if (!locationHref) {
        locationHref = "-";
    }
    locationHref = escape(locationHref);
    return locationHref;
};

function isAlexa() {
    try {
        var userAgent = nav.userAgent;
        if (userAgent && userAgent.toLowerCase().indexOf("alexa") > -1) {
            return 1;
        }
    } catch(err) {}
    return 0;
};
/*获取OS版本
 *
 */
function getOSVers() {
    try {
        var userAgent = nav.userAgent;
        var pfWin = (nav.platform == "Win32") || (navigator.platform == "Windows");
        var pfMac = (nav.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh");
        if (pfMac) return "Mac";
        var pfUnix = (nav.platform == "X11") && !pfWin && !pfMac;
        if (pfUnix) return "Unix";
        if (pfWin) {
            var regExp1 = new RegExp("Windows (\\w+);");
            var regExp2 = new RegExp("Windows NT (\\d+\\.\\d+);");
            if (regExp2.test(userAgent) || regExp1.test(userAgent)) {
                return RegExp["$1"];
            }
            return "Wins"
        }
        return "-";
    } catch(err) {}
};
/*获取OS版本
 *
 */
function getReferrer() {
    var referrer = "-";
    try {
        try {
            referrer = winTop.document.referrer;
        } catch(err) {
            referrer = doc.referrer;
        }
        if (!referrer) {
            try {
                referrer = winTop.opener.location.href;
            } catch(err) {
                referrer = _734OADZbg.location.href;
            }
        }
    } catch(err) {}
    if (!referrer) {
        referrer = "-";
    }
    referrer = escape(referrer);
    return referrer;
};

function _734OADZi() {
    var _734OADZbp = "-";
    try {
        if (_ozurltail.indexOf("#") == 0 && _ozurltail.length > 1) {
            _734OADZbp = escape(_ozurltail);
        }
    } catch(err) {}
    if (!_734OADZbp) {
        _734OADZbp = "-";
    }
    return _734OADZbp;
};

function _734OADZh() {
    var _734OADZbk = "-";
    try {
        if (_ozprm) {
            _734OADZbk = escape("&" + _ozprm);
        }
    } catch(err) {}
    if (!_734OADZbk) {
        _734OADZbk = "-";
    }
    return _734OADZbk;
};
/*是否整数
 *
 */
function isInteger(num) {
    try {
        var reg = /^\d+$/;
        return reg.test(num);
    } catch(err) {}
    return null;
};
/*获取屏幕分辨率
 *
 */
function getScrWidHei() {
    if (winScreen) {
        var width = winScreen.width;
        var height = winScreen.height;
        if (width && height && isInteger(width) && isInteger(height)) {
            return width + "*" + height;
        }
    }
    return null;
};

function _734OADZk() {
    var _734OADZbe = getCookie(cookieName1);
    if (!_734OADZbe) {
        _734OADZbe = "0";
    }
    var docTitle = "-";
    try {
        docTitle = escape(doc.title.substring(0, 30));
    } catch(err) {}
    if (!docTitle) {
        docTitle = "-";
    }
    var _734OADZbo;
    try {
        if (_ozuid) {
            _734OADZbo = escape(_ozuid);
        }
    } catch(err) {}
    if (!_734OADZbo) {
        _734OADZbo = "-";
    }
    var _734OADZbm;
    try {
        _734OADZbm = getCookie(cookieName2);
    } catch(err) {}
    if (!_734OADZbm) {
        _734OADZbm = "-";
    }
    var browVers = getBrowVers();
    if (!browVers) {
        browVers = "-";
    }
    var scrWidHei = getScrWidHei();
    if (!scrWidHei) {
        scrWidHei = "0*0";
    }
    var _734OADZbq = 0;
    try {
        var _734OADZaY = new Date().getTime();
        if (_oztime && _734OADZaY > _oztime) {
            _734OADZbq = _734OADZaY - _oztime;
        }
    } catch(err) {}
    var _734OADZaT = 0;
    if (isAlexa()) {
        _734OADZaT = 1;
    }
    var _734OADZbh = getOSVers();
    if (!_734OADZbh) {
        _734OADZbh = "-";
    }
    var _734OADZbi;
    try {
        if (_oznvs) {
            _734OADZbi = escape(_oznvs);
        }
    } catch(err) {}
    if (!_734OADZbi) {
        _734OADZbi = "-";
    }
    return "ozlvd=" + _734OADZbe + "&ozept=" + docTitle + "&ozsru=" + _734OADZbo + "&ozsat=" + escape(_734OADZbm) + "&ozver=" + escape(browVers) + "&ozscr=" + scrWidHei + "&ozplt=" + _734OADZbq + "&ozos=" + escape(_734OADZbh) + "&ozalx=" + _734OADZaT + "&oznvs=" + _734OADZbi;
};

function _734OADZf() {
    var _734OADZbo;
    try {
        if (_ozuid) {
            _734OADZbo = escape(_ozuid);
        }
    } catch(err) {}
    if (!_734OADZbo) {
        _734OADZbo = "-";
    }
    var scrWidHei = getScrWidHei();
    if (!scrWidHei) {
        scrWidHei = "0*0";
    }
    if (!_734OADZbj) {
        _734OADZbj = "-";
    }
    if (!_734OADZbk) _734OADZbk = "-";
    var _734OADZbi;
    try {
        if (_oznvs) {
            _734OADZbi = escape(_oznvs);
        }
    } catch(err) {}
    if (!_734OADZbi) {
        _734OADZbi = "-";
    }
    if (!_734OADZbl) {
        _734OADZbl = "-";
    }
    return "ozsru=" + _734OADZbo + "&ozscr=" + scrWidHei + "&ozpoc=" + escape(_734OADZbj) + "&ozprm=" + _734OADZbk + "&oznvs=" + _734OADZbi + "&ozrec=" + escape(_734OADZbl);
};

function __ozcount(_734OADZbp, _734OADZbk) {
    if (hrefNum == 0) {
        locationHref = getLocationHref();
    } else {
        locationHref = getCurLocationHref();
    }
    if (locHrefNum != "-") {
        _734OADZbt = locHrefNum;
    } else {
        _734OADZbt = getReferrer();
    }
    if (!_734OADZbp) _734OADZbp = "-";
    if (!_734OADZbk) _734OADZbk = "-";
    _734OADZbv = _734OADZk();
    img1.src = protocol + urlCnt + "?1&" + locationHref + "&" + _734OADZbt + "&" + _734OADZbp + "&" + _734OADZbk + "&" + _734OADZbv;
    var dt = new Date();
    var date = Math.floor(dt.getTime() / 1000);
    if (date > 0) {
        setCookie(cookieName1, date, new Date((date + 730 * 86400) * 1000), getDomain());
    }
    if (_734OADZbp == "-") {
        locHrefNum = locationHref;
    } else {
        locHrefNum = locationHref + _734OADZbp;
    }
};

var _734OADZbu = 1;
try {
    if (_734OADZaZ) {
        _734OADZbu = 2;
        _734OADZaV = 2;
    }
} catch(err) {
    _734OADZaZ = 1;
    _734OADZaV = 1;
    _734OADZba = 1;
}
var locationHref;
var _734OADZbt;
var _734OADZbv;
var _734OADZbp = _734OADZi();
var _734OADZbk = _734OADZh();
var _734OADZbj;
if (_734OADZbu == 1) {
    if (win.onload) {
        win.onloadCallback = win.onload;
    }
    win.onload = _734OADZv;
    addEventLis(doc, _734OADZp);
    __ozcount(_734OADZbp, _734OADZbk);
}

function _734OADZD(_734OADZah, _734OADZal) {
    var _734OADZcf = transform(80000000);
    var _734OADZaS = "0C417";
    if (_734OADZcf & _734OADZah) {
        _734OADZah = _734OADZah >> 1;
        _734OADZah &= ~_734OADZcf;
        _734OADZah |= 0x40000000;
        _734OADZah = _734OADZah >> (_734OADZal - 1);
    } else {
        _734OADZah = _734OADZah >> _734OADZal;
    }
    return (_734OADZah);
};

function __ozfac(_734OADZcd) {
    _734OADZaU = 0;
    var _734OADZar = "-";
    try {
        if (_734OADZcd == null || (typeof _734OADZcd == 'undefined')) {
            _734OADZar = escape(_ozurltail);
        } else if (_734OADZcd.indexOf("#") == 0 && _734OADZcd.length > 1) {
            _734OADZar = escape(_734OADZcd);
            _ozurltail = _734OADZcd;
        }
    } catch(err) {}
    if (!_734OADZar) {
        _734OADZar = "-";
    }
    __ozcount(_734OADZar, null);
};

function __ozclk() {
    var event = win.event || arguments.callee.caller.arguments[0];
    var stepData = 1;
    try {
        if (event.eventPhase && event.eventPhase == 0) {
            stepData = 0;
        }
    } catch(err) {}
    if (stepData) {
        if (!win.event) {
            _734OADZp(event);
        } else {
            _734OADZp();
        }
    }
};

function __ozfac2(_734OADZbO, _734OADZcd) {
    _734OADZaU = 0;
    var _734OADZaq = "-";
    var _734OADZar = "-";
    try {
        if (_734OADZcd == null || (typeof _734OADZcd == 'undefined')) {
            _734OADZar = escape(_ozurltail);
        } else if (_734OADZcd.indexOf("#") == 0 && _734OADZcd.length > 1) {
            _734OADZar = escape(_734OADZcd);
            _ozurltail = _734OADZcd;
        }
    } catch(err) {}
    if (!_734OADZar) {
        _734OADZar = "-";
    }
    try {
        if (_734OADZbO == null || (typeof _734OADZbO == 'undefined')) {
            _734OADZaq = escape("&" + _ozprm);
        } else if (_734OADZbO) {
            _734OADZaq = escape("&" + _734OADZbO);
            _ozprm = _734OADZbO;
        }
    } catch(err) {}
    if (!_734OADZaq) {
        _734OADZaq = "-";
    }
    __ozcount(_734OADZar, _734OADZaq);
}