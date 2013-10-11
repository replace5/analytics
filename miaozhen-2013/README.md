-analytics
==========


#嵌入页面的js
	(function() {
	    var c = document.createElement('script'); 
	    c.type = 'text/javascript';
	    c.async = true;
	    c.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'sitemonitor.cn.miaozhen.com/boot/45560';
	    var h = document.getElementsByTagName('script')[0];
	    h.parentNode.insertBefore(c, h);
	})();

#第一次请求的js(45560)
1、给处理服务器对该网站的配置信息：  

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
2、请求了主体的js文件： clicki.js

3、执行监测的入口函数

#主体js(clicki)

##代码结构
第一部分：定义了两个类: 类clicki提供浏览器检测、事件添加、发送请求、文档就绪判断等功能，对不同浏览器进行了兼容处理；类siteTracker提供了对监测行为的控制。  
第二部分：加入了类似seajs的模块化加载功能。把类clicki和类siteTracker和seajs的功能集中到了类Clicki中。  
第三部分：把信息收集的行为分成几个模块进行处理，模块放在Clicki命名空间下。  

    "~/Cookie"： 读写cookie等功能。  

	"~/Json"： 转化成字符串等功能。  

	"~/Visitor"： 输出信息：id,is_new,is_active。  

	"~/Referer"： 输出页面来源。  

	"~/Page"： 输出信息: url, domain, title, server_time（加载时服务器时间）, loadtime(加载时间)。
  
	"~/CustomTrack"： 

	"~/ActionTrack"： 为文档添加了click、keyup和mousemove的事件监测。输出信息clicks（用户点击次数）, inputs（输入次数）, innner_clickis(内部点击次数)， outer_clickis（外部点击次数）, inactive_period。 
 
	"~/SessionTimeList"：  

	"~/Session"： flow_key, 	site_id, session_id, flow_id, visitor, today, review, referer, page, client。

	"~/Client"：输出信息width（屏幕宽度）,height(屏幕高度), size(页面大小)。  

	"~/Observer"： 提供页面心跳监测，向服务器发送信息的组织。所有向后台发送的信息都由track函数组织。track发送方式有三种： 0信息发送,1退出页面,2用户心跳。   
 
	"~/AppEngine"：  

	"~/LoadJsCode"：  

  

