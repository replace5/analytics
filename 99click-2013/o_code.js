var _734OADZac = "0";
var _ozpoc;
var _734OADZad = "0";
var _734OADZaf = "//1844.oadz.com/cnt;C1;1844;.coolpad.cn;KJZ4wUXHS+72DZcOuzzsSVLqHK4=;";
var _734OADZag = "//1844.oadz.com/jcnt;C1;1844;.coolpad.cn;sl5eJKA/rlyopEXuLxZZRnUWxN0=;";
var _734OADZae = "ozrec";
var win = window;
var doc = win.document;
var protocol = win.location.protocol.toLowerCase();
var winTop = win.top;
var winScreen = win.screen;
var _734OADZbb = new Image();
var _734OADZbc = new Image();
var _734OADZaU = 0;
var _734OADZbr = "-";
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
var __ozlvd = "\x5f\x5f\x6f\x7a\x6c\x76\x64";//__ozlvd
var _734OADZbK = __ozlvd + _734OADZaf.split(";")[2];
var OZ_0J_ = "\x4f\x5a\x5f\x30\x4a\x5f";	//OZ_0J_
var _734OADZbI = OZ_0J_ + _734OADZaf.split(";")[2];
var isIe = (navigator.appName == 'Microsoft Internet Explorer');
var nav = navigator;
function transform(num) {		//转换成16进制
    return parseInt(num, 16);
};
function _734OADZq(_734OADZbR) {
    if (_734OADZbR) {
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
            _734OADZbR = _734OADZbR.replace(arr1[i], arr2[i]);
        }
    }
    return _734OADZbR;
};
function _734OADZB(_734OADZaP, _734OADZce, _734OADZax, _734OADZau) {
    if (_734OADZax && _734OADZax > 0) var _734OADZbU = _734OADZaP + "=" + _734OADZce + ";expires=" + _734OADZax.toGMTString() + ";path=/;domain=" + _734OADZau;
    else var _734OADZbU = _734OADZaP + "=" + _734OADZce + ";path=/;domain=" + _734OADZau;
    doc.cookie = _734OADZbU;
};
function _734OADZs(_734OADZaP) {
    var _734OADZas = doc.cookie;
    var _734OADZbU = _734OADZas.indexOf(_734OADZaP + "=");
    if (_734OADZbU != -1) {
        var _734OADZaN = _734OADZbU + _734OADZaP.length + 1;
        var _734OADZax = _734OADZas.indexOf(";", _734OADZaN);
        if (_734OADZax == -1) {
            _734OADZax = _734OADZas.length;
        }
        return _734OADZas.substring(_734OADZaN, _734OADZax);
    }
    return null;
};
function _734OADZt() {
    var _734OADZau = doc.domain;
    if (_734OADZau.indexOf(".") > -1) {
        var _734OADZbN = _734OADZau.split(".");
        _734OADZau = _734OADZbN[_734OADZbN.length - 2] + "." + _734OADZbN[_734OADZbN.length - 1];
        if (_734OADZbN.length > 2 && _734OADZbN[_734OADZbN.length - 3] != "www") {
            var _734OADZbM = _734OADZbN[_734OADZbN.length - 2];
            if (_734OADZbM.length <= 2 || (_734OADZbM == "com" || _734OADZbM == "edu" || _734OADZbM == "gov" || _734OADZbM == "net" || _734OADZbM == "org" || _734OADZbM == "mil")) {
                _734OADZau = _734OADZbN[_734OADZbN.length - 3] + "." + _734OADZbM + "." + _734OADZbN[_734OADZbN.length - 1];
            }
        }
    }
    return _734OADZau;
};
function _734OADZy(d, h) {
    if (d.onclick) {
        d._734OADZab = d.onclick;
    }
    d.onclick = h;
};
function _734OADZz(d, s) {
    if (!d.onclick) {
        d.onclick = s;
    } else {
        if (isIe) {
            d.attachEvent("onclick", s);
        } else {
            d.addEventListener("click", s, false);
        }
    }
};
function _734OADZv() {
    for (var i = 0; i < win.frames.length; i++) {
        try {
            _734OADZz(win.frames[i].document, _734OADZp);
        } catch(_734OADZaC) {}
    }
    if (win._734OADZaa) {
        win._734OADZaa();
    }
};
function _734OADZw(_734OADZaQ) {
    var _734OADZaE = 1;
    while (_734OADZaQ && _734OADZaQ.tagName != "A" && _734OADZaQ.tagName != "AREA" && _734OADZaE <= 10) {
        _734OADZaQ = _734OADZaQ.parentNode;
        _734OADZaE++;
    }
    if (_734OADZaQ && (_734OADZaQ.tagName == "A" || _734OADZaQ.tagName == "AREA")) {
        return _734OADZaQ;
    } else {
        return null;
    }
};
function _734OADZx(_734OADZaQ) {
    var _734OADZaE = 1;
    if (_734OADZac == 1) {
        var _734OADZbD = _734OADZu(_734OADZaQ);
        while (_734OADZaQ && _734OADZaE <= 5 && !(_734OADZbD && _734OADZbD.indexOf("__") == 0 && _734OADZbD.length > 2 && _734OADZaQ.onclick)) {
            _734OADZaQ = _734OADZaQ.parentNode;
            _734OADZbD = _734OADZu(_734OADZaQ);
            _734OADZaE++;
        }
        if (_734OADZaQ && _734OADZaQ.onclick && _734OADZbD && _734OADZbD.indexOf("__") == 0 && _734OADZbD.length > 2) {
            return _734OADZaQ;
        }
    } else {
        var _734OADZca;
        if (_734OADZaQ && _734OADZaQ.tagName) {
            _734OADZca = _734OADZaQ.tagName.toLowerCase();
        }
        while (_734OADZaQ && !_734OADZaQ.onclick && _734OADZaE <= 5 && _734OADZca != body && _734OADZca != html) {
            if (_734OADZaQ.parentNode && _734OADZaQ.parentNode.tagName) {
                _734OADZaQ = _734OADZaQ.parentNode;
                _734OADZca = _734OADZaQ.tagName.toLowerCase();
                _734OADZaE++;
            } else {
                return null;
            }
        }
        if (_734OADZaQ && _734OADZaQ.onclick && _734OADZca != body && _734OADZca != html) {
            return _734OADZaQ;
        }
    }
    return null;
};
function _734OADZb(_734OADZbC, _734OADZak) {
    try {
        if (_734OADZbC && _734OADZak && _734OADZbC.getAttribute(_734OADZak)) {
            return _734OADZbC.getAttribute(_734OADZak).toString();
        }
    } catch(_734OADZaC) {}
    return null;
};
function _734OADZu(_734OADZaQ) {
    if (_734OADZaQ && _734OADZaQ.name) {
        return _734OADZaQ.name.toString();
    } else if (_734OADZb(_734OADZaQ, "name")) {
        return _734OADZb(_734OADZaQ, "name");
    } else if (_734OADZaQ && _734OADZaQ.id) {
        return _734OADZaQ.id.toString();
    } else {
        return "-";
    }
};
function _734OADZc() {
    try {
        var _734OADZcc = navigator.userAgent;
        var _734OADZaJ = _734OADZcc.indexOf("Opera") > -1;
        var _734OADZaH = _734OADZcc.indexOf("KHTML") > -1 || _734OADZcc.indexOf("Konqueror") > -1 || _734OADZcc.indexOf("AppleWebkit") > -1;
        if (!_734OADZaJ && _734OADZcc.indexOf("compatible") > -1 && _734OADZcc.indexOf("MSIE") > -1) {
            var _734OADZbT = new RegExp("MSIE (\\d+\\.\\d+);");
            if (_734OADZbT.test(_734OADZcc)) {
                return "IE" + RegExp["$1"];
            }
        } else if (!_734OADZaJ && !_734OADZaH && _734OADZcc.indexOf("Gecko") > -1) {
            var _734OADZbS = new RegExp("Firefox/(\\d+(\\.\\d+)+)");
            if (_734OADZbS.test(_734OADZcc)) {
                return "FF" + RegExp["$1"];
            } else {
                var _734OADZam = _734OADZcc.lastIndexOf("/");
                if (_734OADZam > -1) {
                    return "NC" + _734OADZcc.substring(_734OADZam + 1);
                }
            }
        } else if (_734OADZaJ) {
            return "Opera";
        } else if (_734OADZaH) {
            return "KHTML";
        }
    } catch(_734OADZaC) {}
    return "-";
};
function _734OADZr(_734OADZaQ) {
    var _734OADZaE = 1;
    var _734OADZaD = 0;
    while (_734OADZaQ && _734OADZaE <= 50) {
        _734OADZaQ = _734OADZaQ.parentNode;
        _734OADZaE++;
        if (_734OADZaQ && _734OADZaQ.tagName == "DIV") {
            var _734OADZaR = _734OADZu(_734OADZaQ);
            if (_734OADZaR && _734OADZaR.indexOf("__") == 0 && _734OADZaR.length > 2) {
                _734OADZaD = 1;
                break;
            }
        }
    }
    if (_734OADZaD == 1) {
        return _734OADZaQ;
    } else {
        return null;
    }
};
function _734OADZA(_734OADZbH, _734OADZbG, _734OADZaM) {
    _734OADZbG = escape(_734OADZbG);
    var _734OADZat = _734OADZs(_734OADZbI);
    if (_734OADZat) {
        var i = 0,
        k = 0,
        p = 0;
        for (i = 0; i < _734OADZat.length; i++) {
            if (_734OADZat.charAt(i) == '&') {
                k++;
                if (k == 1) {
                    p = i + 1;
                }
            }
        }
        if (k < 4) {
            _734OADZat = _734OADZat + "&" + _734OADZbH + "*" + _734OADZbG + "*" + _734OADZaM;
        } else if (k == 4 && p > 0) {
            _734OADZat = _734OADZat.substr(p) + "&" + _734OADZbH + "*" + _734OADZbG + "*" + _734OADZaM;
        }
    } else {
        _734OADZat = _734OADZbH + "*" + _734OADZbG + "*" + _734OADZaM;
    }
    _734OADZB(_734OADZbI, _734OADZat, 0, _734OADZt());
};
function _734OADZp(_734OADZax) {
    var _734OADZai = 0;
    if (_734OADZaU <= 49) {
        var _734OADZaB = null;
        var _734OADZap = "-";
        var _734OADZF = null;
        var _734OADZLN = "-";
        var _734OADZbP = 0;
        var _734OADZbQ = 0;
        var _734OADZbF = _734OADZax;
        if (!_734OADZax) {
            if (win.event) {
                _734OADZax = win.event;
                _734OADZaB = _734OADZax.srcElement;
            } else {
                try {
                    for (var i = 0; i < win.frames.length; i++) {
                        if (win.frames[i].event) {
                            _734OADZax = win.frames[i].event;
                            _734OADZaB = _734OADZax.srcElement;
                        }
                    }
                } catch(_734OADZaC) {}
            }
        } else {
            if (_734OADZax.target) {
                _734OADZaB = _734OADZax.target;
            } else if (_734OADZax.srcElement) {
                _734OADZaB = _734OADZax.srcElement;
            }
        }
        if (_734OADZax && _734OADZaB) {
            var _734OADZan = null;
            var _734OADZaj = _734OADZw(_734OADZaB);
            if (_734OADZaj && _734OADZaj.href) {
                _734OADZan = _734OADZaj;
                _734OADZF = "A";
                _734OADZLN = escape(_734OADZu(_734OADZan));
                _734OADZap = escape(_734OADZan.href);
                if (!_734OADZap) _734OADZap = "-";
            } else if (_734OADZaB.tagName == INPUT && (_734OADZaB.type == button || _734OADZaB.type == image || _734OADZaB.type == submit)) {
                _734OADZan = _734OADZaB;
                _734OADZF = INPUT;
                _734OADZLN = escape(_734OADZu(_734OADZan));
            } else {
                _734OADZan = _734OADZx(_734OADZaB);
                if (_734OADZan) {
                    _734OADZF = _734OADZan.tagName;
                    if (_734OADZac == 1) {
                        _734OADZai = 1;
                        _734OADZLN = escape(_734OADZu(_734OADZan).substring(2));
                    } else {
                        _734OADZLN = escape(_734OADZu(_734OADZan));
                    }
                }
            }
            if (_734OADZan) {
                var _734OADZao;
                if (_734OADZF && _734OADZF != "-") {
                    var _734OADZaw = _734OADZr(_734OADZan);
                    _734OADZbj = _734OADZb(_734OADZan, _ozpoc);
                    _734OADZbl = _734OADZb(_734OADZan, _734OADZae);
                    var _734OADZay = _734OADZaB;
                    while (_734OADZay) {
                        _734OADZbP = _734OADZbP + _734OADZay.offsetLeft;
                        _734OADZbQ = _734OADZbQ + _734OADZay.offsetTop;
                        _734OADZay = _734OADZay.offsetParent;
                    }
                    if (_734OADZai != 1 && _734OADZLN.toLowerCase().indexOf("__ad_") == 0) {
                        _734OADZLN = _734OADZLN.substring(2)
                    }
                    if (_734OADZaw) {
                        var _734OADZav = escape(_734OADZu(_734OADZaw).substring(2));
                        _734OADZao = _734OADZF + "*" + _734OADZLN + "*" + _734OADZbP + "*" + _734OADZbQ + "*" + _734OADZav;
                    } else {
                        _734OADZao = _734OADZF + "*" + _734OADZLN + "*" + _734OADZbP + "*" + _734OADZbQ;
                    }
                    var _734OADZaM = Math.floor((new Date()).getTime() / 1000);
                    var _734OADZbE = _734OADZu(_734OADZan);
                    if (_734OADZbE.toLowerCase().indexOf("__ad_") == 0) {
                        _734OADZA(_734OADZF, _734OADZbE.substring(2), _734OADZaM);
                    } else if (_734OADZaw) {
                        _734OADZbE = _734OADZu(_734OADZaw);
                        if (_734OADZbE.toLowerCase().indexOf("__ad_") == 0) {
                            _734OADZA(DIV, _734OADZbE.substring(2), _734OADZaM);
                        }
                    }
                }
                if (_734OADZF && _734OADZag) {
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
                    } catch(_734OADZaC) {
                        _734OADZaU = 99;
                    }
                    _734OADZa(_734OADZao, _734OADZaU, _734OADZap);
                    _734OADZC(isIe ? 100 : 300);
                }
            }
        }
    }
};
function _734OADZC(_734OADZbZ) {
    var bt = (new Date()).getTime();
    while (((new Date()).getTime() - bt) < _734OADZbZ);
};
function _734OADZa(_734OADZao, _734OADZcb, _734OADZap) {
    var _734OADZaW = _734OADZf();
    if (_734OADZag && _734OADZbx && _734OADZbt && _734OADZbp && _734OADZao && _734OADZcb > 0 && _734OADZap) {
        _734OADZbc.src = protocol + _734OADZag + "?" + _734OADZcb + "&" + _734OADZbx + "&" + _734OADZbt + "&" + _734OADZbp + "&" + _734OADZao + "&" + _734OADZap + "&" + _734OADZaW;
    }
};
function __ozflash(_734OADZaP) {
    if (_734OADZaP && _734OADZaP != '') {
        if (_734OADZaU <= 49) {
            _734OADZaU = _734OADZaU + 1;
            if (_734OADZaP.toLowerCase().indexOf("__ad_") == 0) {
                var _734OADZaM = Math.floor((new Date()).getTime() / 1000);
                _734OADZaP = _734OADZaP.substring(2);
                _734OADZA(FLASH, _734OADZaP, _734OADZaM);
            }
            var _734OADZao = FLASH + "*" + _734OADZaP + "*0*0";
            _734OADZa(_734OADZao, _734OADZaU, '-');
            _734OADZC(isIe ? 100 : 300);
        }
    }
};
function _734OADZl() {
    var _734OADZbx = "-";
    try {
        try {
            _734OADZbx = winTop.location.href;
        } catch(_734OADZaC) {
            _734OADZbx = win.location.href;
        }
    } catch(_734OADZaC) {}
    if (!_734OADZbx) {
        _734OADZbx = "-";
    }
    _734OADZbx = escape(_734OADZbx);
    return _734OADZbx;
};
function _734OADZe() {
    var _734OADZbx = "-";
    try {
        _734OADZbx = win.location.href;
    } catch(_734OADZaC) {}
    if (!_734OADZbx) {
        _734OADZbx = "-";
    }
    _734OADZbx = escape(_734OADZbx);
    return _734OADZbx;
};
function _734OADZo() {
    try {
        var _734OADZcc = nav.userAgent;
        if (_734OADZcc && _734OADZcc.toLowerCase().indexOf("alexa") > -1) {
            return 1;
        }
    } catch(_734OADZaC) {}
    return 0;
};
function _734OADZg() {
    try {
        var _734OADZbV = nav.userAgent;
        var _734OADZaL = (nav.platform == "Win32") || (navigator.platform == "Windows");
        var _734OADZaI = (nav.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh");
        if (_734OADZaI) return "Mac";
        var _734OADZaK = (nav.platform == "X11") && !_734OADZaL && !_734OADZaI;
        if (_734OADZaK) return "Unix";
        if (_734OADZaL) {
            var _734OADZaG = new RegExp("Windows (\\w+);");
            var _734OADZaF = new RegExp("Windows NT (\\d+\\.\\d+);");
            if (_734OADZaF.test(_734OADZbV) || _734OADZaG.test(_734OADZbV)) {
                return RegExp["$1"];
            }
            return "Wins"
        }
        return "-";
    } catch(_734OADZaC) {}
};
function _734OADZj() {
    var _734OADZbt = "-";
    try {
        try {
            _734OADZbt = winTop.document.referrer;
        } catch(_734OADZaC) {
            _734OADZbt = doc.referrer;
        }
        if (!_734OADZbt) {
            try {
                _734OADZbt = winTop.opener.location.href;
            } catch(_734OADZaC) {
                _734OADZbt = _734OADZbg.location.href;
            }
        }
    } catch(_734OADZaC) {}
    if (!_734OADZbt) {
        _734OADZbt = "-";
    }
    _734OADZbt = escape(_734OADZbt);
    return _734OADZbt;
};
function _734OADZi() {
    var _734OADZbp = "-";
    try {
        if (_ozurltail.indexOf("#") == 0 && _ozurltail.length > 1) {
            _734OADZbp = escape(_ozurltail);
        }
    } catch(_734OADZaC) {}
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
    } catch(_734OADZaC) {}
    if (!_734OADZbk) {
        _734OADZbk = "-";
    }
    return _734OADZbk;
};
function _734OADZn(_734OADZbY) {
    try {
        var reg = /^\d+$/;
        return reg.test(_734OADZbY);
    } catch(_734OADZaC) {}
    return null;
};
function _734OADZd() {
    if (winScreen) {
        var _734OADZbX = winScreen.width;
        var _734OADZbW = winScreen.height;
        if (_734OADZbX && _734OADZbW && _734OADZn(_734OADZbX) && _734OADZn(_734OADZbW)) {
            return _734OADZbX + "*" + _734OADZbW;
        }
    }
    return null;
};
function _734OADZk() {
    var _734OADZbe = _734OADZs(_734OADZbK);
    if (!_734OADZbe) {
        _734OADZbe = "0";
    }
    var _734OADZbw = "-";
    try {
        _734OADZbw = escape(doc.title.substring(0, 30));
    } catch(_734OADZaC) {}
    if (!_734OADZbw) {
        _734OADZbw = "-";
    }
    var _734OADZbo;
    try {
        if (_ozuid) {
            _734OADZbo = escape(_ozuid);
        }
    } catch(_734OADZaC) {}
    if (!_734OADZbo) {
        _734OADZbo = "-";
    }
    var _734OADZbm;
    try {
        _734OADZbm = _734OADZs(_734OADZbI);
    } catch(_734OADZaC) {}
    if (!_734OADZbm) {
        _734OADZbm = "-";
    }
    var _734OADZby = _734OADZc();
    if (!_734OADZby) {
        _734OADZby = "-";
    }
    var _734OADZbn = _734OADZd();
    if (!_734OADZbn) {
        _734OADZbn = "0*0";
    }
    var _734OADZbq = 0;
    try {
        var _734OADZaY = new Date().getTime();
        if (_oztime && _734OADZaY > _oztime) {
            _734OADZbq = _734OADZaY - _oztime;
        }
    } catch(_734OADZaC) {}
    var _734OADZaT = 0;
    if (_734OADZo()) {
        _734OADZaT = 1;
    }
    var _734OADZbh = _734OADZg();
    if (!_734OADZbh) {
        _734OADZbh = "-";
    }
    var _734OADZbi;
    try {
        if (_oznvs) {
            _734OADZbi = escape(_oznvs);
        }
    } catch(_734OADZaC) {}
    if (!_734OADZbi) {
        _734OADZbi = "-";
    }
    return "ozlvd=" + _734OADZbe + "&ozept=" + _734OADZbw + "&ozsru=" + _734OADZbo + "&ozsat=" + escape(_734OADZbm) + "&ozver=" + escape(_734OADZby) + "&ozscr=" + _734OADZbn + "&ozplt=" + _734OADZbq + "&ozos=" + escape(_734OADZbh) + "&ozalx=" + _734OADZaT + "&oznvs=" + _734OADZbi;
};
function _734OADZf() {
    var _734OADZbo;
    try {
        if (_ozuid) {
            _734OADZbo = escape(_ozuid);
        }
    } catch(_734OADZaC) {}
    if (!_734OADZbo) {
        _734OADZbo = "-";
    }
    var _734OADZbn = _734OADZd();
    if (!_734OADZbn) {
        _734OADZbn = "0*0";
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
    } catch(_734OADZaC) {}
    if (!_734OADZbi) {
        _734OADZbi = "-";
    }
    if (!_734OADZbl) {
        _734OADZbl = "-";
    }
    return "ozsru=" + _734OADZbo + "&ozscr=" + _734OADZbn + "&ozpoc=" + escape(_734OADZbj) + "&ozprm=" + _734OADZbk + "&oznvs=" + _734OADZbi + "&ozrec=" + escape(_734OADZbl);
};
function __ozcount(_734OADZbp, _734OADZbk) {
    if (_734OADZad == 0) {
        _734OADZbx = _734OADZl();
    } else {
        _734OADZbx = _734OADZe();
    }
    if (_734OADZbr != "-") {
        _734OADZbt = _734OADZbr;
    } else {
        _734OADZbt = _734OADZj();
    }
    if (!_734OADZbp) _734OADZbp = "-";
    if (!_734OADZbk) _734OADZbk = "-";
    _734OADZbv = _734OADZk();
    _734OADZbb.src = protocol + _734OADZaf + "?1&" + _734OADZbx + "&" + _734OADZbt + "&" + _734OADZbp + "&" + _734OADZbk + "&" + _734OADZbv;
    var dt = new Date();
    var _734OADZaO = Math.floor(dt.getTime() / 1000);
    if (_734OADZaO > 0) {
        _734OADZB(_734OADZbK, _734OADZaO, new Date((_734OADZaO + 730 * 86400) * 1000), _734OADZt());
    }
    if (_734OADZbp == "-") {
        _734OADZbr = _734OADZbx;
    } else {
        _734OADZbr = _734OADZbx + _734OADZbp;
    }
};
var _734OADZbu = 1;
try {
    if (_734OADZaZ) {
        _734OADZbu = 2;
        _734OADZaV = 2;
    }
} catch(_734OADZaC) {
    _734OADZaZ = 1;
    _734OADZaV = 1;
    _734OADZba = 1;
}
var _734OADZbx;
var _734OADZbt;
var _734OADZbv;
var _734OADZbp = _734OADZi();
var _734OADZbk = _734OADZh();
var _734OADZbj;
if (_734OADZbu == 1) {
    if (win.onload) {
        win._734OADZaa = win.onload;
    }
    win.onload = _734OADZv;
    _734OADZz(doc, _734OADZp);
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
    } catch(_734OADZaC) {}
    if (!_734OADZar) {
        _734OADZar = "-";
    }
    __ozcount(_734OADZar, null);
};
function __ozclk() {
    var _734OADZaz = win.event || arguments.callee.caller.arguments[0];
    var _734OADZaA = 1;
    try {
        if (_734OADZaz.eventPhase && _734OADZaz.eventPhase == 0) {
            _734OADZaA = 0;
        }
    } catch(_734OADZaC) {}
    if (_734OADZaA) {
        if (!win.event) {
            _734OADZp(_734OADZaz);
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
    } catch(_734OADZaC) {}
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
    } catch(_734OADZaC) {}
    if (!_734OADZaq) {
        _734OADZaq = "-";
    }
    __ozcount(_734OADZar, _734OADZaq);
}