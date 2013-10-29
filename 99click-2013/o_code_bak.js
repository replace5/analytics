var _734OADZac = "0";
var _ozpoc;
var _734OADZad = "0";
var _734OADZaf = "//1844.oadz.com/cnt;C1;1844;.coolpad.cn;KJZ4wUXHS+72DZcOuzzsSVLqHK4=;";
var _734OADZag = "//1844.oadz.com/jcnt;C1;1844;.coolpad.cn;sl5eJKA/rlyopEXuLxZZRnUWxN0=;";
var _734OADZae = "ozrec";
var _734OADZbz = window;
var _734OADZaX = _734OADZbz.document;
var _734OADZbs = _734OADZbz.location.protocol.toLowerCase();
var _734OADZbB = _734OADZbz.top;
var _734OADZbA = _734OADZbz.screen;
var _734OADZbb = new Image();
var _734OADZbc = new Image();
var _734OADZaU = 0;
var _734OADZbr = "-";
var _734OADZbl = "-";
var _734OADZK = "\x49\x4e\x50\x55\x54";			//INPUT
var _734OADZN = "\x62\x75\x74\x74\x6f\x6e";		//button
var _734OADZQ = "\x69\x6d\x61\x67\x65";			//image
var _734OADZW = "\x73\x75\x62\x6d\x69\x74";		//submit
var _734OADZR = "\x69\x6d\x67";					//img
var _734OADZL = "\x61\x6c\x74";					//alt
var _734OADZZ = "\x77\x69\x64\x74\x68";			//width
var _734OADZO = "\x68\x65\x69\x67\x68\x74";		//height
var _734OADZU = "\x73\x63\x72\x69\x70\x74";		//script
var _734OADZY = "\x74\x79\x70\x65";				//type
var _734OADZX = "\x74\x65\x78\x74";				//text
var _734OADZT = "\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74";		//javascript
var _734OADZV = "\x73\x72\x63";					//src
var _734OADZS = "\x69\x6e\x69\x74";				//init
var _734OADZJ = "\x46\x4c\x41\x53\x48";			//FLASH
var _734OADZM = "\x62\x6f\x64\x79";				//body
var _734OADZP = "\x68\x74\x6d\x6c";				//html
var _734OADZI = "\x44\x49\x56";					//DIV
var _734OADZbL = "\x5f\x5f\x6f\x7a\x6c\x76\x64";//__ozlvd
var _734OADZbK = _734OADZbL + _734OADZaf.split(";")[2];
var _734OADZbJ = "\x4f\x5a\x5f\x30\x4a\x5f";	//OZ_0J_
var _734OADZbI = _734OADZbJ + _734OADZaf.split(";")[2];
var _734OADZbd = (navigator.appName == 'Microsoft Internet Explorer');
var _734OADZbf = navigator;
function _734OADZm(_734OADZbY) {		//转换成16进制
    return parseInt(_734OADZbY, 16);
};
function _734OADZq(_734OADZbR) {
    if (_734OADZbR) {
        var _734OADZG = new Array(5);
        _734OADZG[0] = /\*/g;
        _734OADZG[1] = /\&/g;
        _734OADZG[2] = /\#/g;
        _734OADZG[3] = /\?/g;
        _734OADZG[4] = /\'/g;
        var _734OADZH = new Array(5);
        _734OADZH[0] = "%2A";
        _734OADZH[1] = "%26";
        _734OADZH[2] = "%23";
        _734OADZH[3] = "%3F";
        _734OADZH[4] = "%27";
        for (var _734OADZaE = 0; _734OADZaE < 5; _734OADZaE++) {
            _734OADZbR = _734OADZbR.replace(_734OADZG[_734OADZaE], _734OADZH[_734OADZaE]);
        }
    }
    return _734OADZbR;
};
function _734OADZB(_734OADZaP, _734OADZce, _734OADZax, _734OADZau) {
    if (_734OADZax && _734OADZax > 0) var _734OADZbU = _734OADZaP + "=" + _734OADZce + ";expires=" + _734OADZax.toGMTString() + ";path=/;domain=" + _734OADZau;
    else var _734OADZbU = _734OADZaP + "=" + _734OADZce + ";path=/;domain=" + _734OADZau;
    _734OADZaX.cookie = _734OADZbU;
};
function _734OADZs(_734OADZaP) {
    var _734OADZas = _734OADZaX.cookie;
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
    var _734OADZau = _734OADZaX.domain;
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
        if (_734OADZbd) {
            d.attachEvent("onclick", s);
        } else {
            d.addEventListener("click", s, false);
        }
    }
};
function _734OADZv() {
    for (var i = 0; i < _734OADZbz.frames.length; i++) {
        try {
            _734OADZz(_734OADZbz.frames[i].document, _734OADZp);
        } catch(_734OADZaC) {}
    }
    if (_734OADZbz._734OADZaa) {
        _734OADZbz._734OADZaa();
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
        while (_734OADZaQ && !_734OADZaQ.onclick && _734OADZaE <= 5 && _734OADZca != _734OADZM && _734OADZca != _734OADZP) {
            if (_734OADZaQ.parentNode && _734OADZaQ.parentNode.tagName) {
                _734OADZaQ = _734OADZaQ.parentNode;
                _734OADZca = _734OADZaQ.tagName.toLowerCase();
                _734OADZaE++;
            } else {
                return null;
            }
        }
        if (_734OADZaQ && _734OADZaQ.onclick && _734OADZca != _734OADZM && _734OADZca != _734OADZP) {
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
            if (_734OADZbz.event) {
                _734OADZax = _734OADZbz.event;
                _734OADZaB = _734OADZax.srcElement;
            } else {
                try {
                    for (var i = 0; i < _734OADZbz.frames.length; i++) {
                        if (_734OADZbz.frames[i].event) {
                            _734OADZax = _734OADZbz.frames[i].event;
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
            } else if (_734OADZaB.tagName == _734OADZK && (_734OADZaB.type == _734OADZN || _734OADZaB.type == _734OADZQ || _734OADZaB.type == _734OADZW)) {
                _734OADZan = _734OADZaB;
                _734OADZF = _734OADZK;
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
                            _734OADZA(_734OADZI, _734OADZbE.substring(2), _734OADZaM);
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
                    _734OADZC(_734OADZbd ? 100 : 300);
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
        _734OADZbc.src = _734OADZbs + _734OADZag + "?" + _734OADZcb + "&" + _734OADZbx + "&" + _734OADZbt + "&" + _734OADZbp + "&" + _734OADZao + "&" + _734OADZap + "&" + _734OADZaW;
    }
};
function __ozflash(_734OADZaP) {
    if (_734OADZaP && _734OADZaP != '') {
        if (_734OADZaU <= 49) {
            _734OADZaU = _734OADZaU + 1;
            if (_734OADZaP.toLowerCase().indexOf("__ad_") == 0) {
                var _734OADZaM = Math.floor((new Date()).getTime() / 1000);
                _734OADZaP = _734OADZaP.substring(2);
                _734OADZA(_734OADZJ, _734OADZaP, _734OADZaM);
            }
            var _734OADZao = _734OADZJ + "*" + _734OADZaP + "*0*0";
            _734OADZa(_734OADZao, _734OADZaU, '-');
            _734OADZC(_734OADZbd ? 100 : 300);
        }
    }
};
function _734OADZl() {
    var _734OADZbx = "-";
    try {
        try {
            _734OADZbx = _734OADZbB.location.href;
        } catch(_734OADZaC) {
            _734OADZbx = _734OADZbz.location.href;
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
        _734OADZbx = _734OADZbz.location.href;
    } catch(_734OADZaC) {}
    if (!_734OADZbx) {
        _734OADZbx = "-";
    }
    _734OADZbx = escape(_734OADZbx);
    return _734OADZbx;
};
function _734OADZo() {
    try {
        var _734OADZcc = _734OADZbf.userAgent;
        if (_734OADZcc && _734OADZcc.toLowerCase().indexOf("alexa") > -1) {
            return 1;
        }
    } catch(_734OADZaC) {}
    return 0;
};
function _734OADZg() {
    try {
        var _734OADZbV = _734OADZbf.userAgent;
        var _734OADZaL = (_734OADZbf.platform == "Win32") || (navigator.platform == "Windows");
        var _734OADZaI = (_734OADZbf.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh");
        if (_734OADZaI) return "Mac";
        var _734OADZaK = (_734OADZbf.platform == "X11") && !_734OADZaL && !_734OADZaI;
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
            _734OADZbt = _734OADZbB.document.referrer;
        } catch(_734OADZaC) {
            _734OADZbt = _734OADZaX.referrer;
        }
        if (!_734OADZbt) {
            try {
                _734OADZbt = _734OADZbB.opener.location.href;
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
    if (_734OADZbA) {
        var _734OADZbX = _734OADZbA.width;
        var _734OADZbW = _734OADZbA.height;
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
        _734OADZbw = escape(_734OADZaX.title.substring(0, 30));
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
    _734OADZbb.src = _734OADZbs + _734OADZaf + "?1&" + _734OADZbx + "&" + _734OADZbt + "&" + _734OADZbp + "&" + _734OADZbk + "&" + _734OADZbv;
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
    if (_734OADZbz.onload) {
        _734OADZbz._734OADZaa = _734OADZbz.onload;
    }
    _734OADZbz.onload = _734OADZv;
    _734OADZz(_734OADZaX, _734OADZp);
    __ozcount(_734OADZbp, _734OADZbk);
}
function _734OADZD(_734OADZah, _734OADZal) {
    var _734OADZcf = _734OADZm(80000000);
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
    var _734OADZaz = _734OADZbz.event || arguments.callee.caller.arguments[0];
    var _734OADZaA = 1;
    try {
        if (_734OADZaz.eventPhase && _734OADZaz.eventPhase == 0) {
            _734OADZaA = 0;
        }
    } catch(_734OADZaC) {}
    if (_734OADZaA) {
        if (!_734OADZbz.event) {
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