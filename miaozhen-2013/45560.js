(function(){
    var CLICKI_CF = {
        version: '137655584',
        host: 'sitemonitor.cn.miaozhen.com',
        site_id: Number('45560'),
        site_name: "Philips%20Air%20Cleaner%20Summer",
        visitor_id: '1381370648523114',
        millisecond: '1381370648523114',
        session_key: 'aq43oo',
        time: '1381370648523',
        is_logined: true,
        rf_key: "dlnkwy7490",
        track_type: Number('0')||0,
        cross_domains: "",
        jscode: null,
        widgets: null
    };

    if (!window.CClicki) {
        var id = '__clicki_js_tracker_loader__';
        if (!document.getElementById(id)) {
            var c = document.createElement('script');
            c.id = id;
            c.type = 'text/javascript';
            c.charset = 'UTF-8';
            c.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + CLICKI_CF.host + '/boot/clicki.js?v=' + CLICKI_CF.version;;
            var h = document.getElementsByTagName('script')[0];
            h.parentNode.insertBefore(c, h);
        }
    }
    function check () {
        if (window.CClicki) {
            window.CClicki.New(CLICKI_CF);
        }else{
            setTimeout(check, 50);
        }
    };
    check();
})();