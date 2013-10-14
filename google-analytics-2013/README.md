Google Analytics
==================

谷歌互联网媒体监测研究 


网络视图
--
![ga网络视图](https://raw.github.com/clientlab/analytics/master/google-analytics-2013/img/network.jpg)

监测埋点
--
当启用了 JavaScript 的浏览器加载附带 Google Analytics（分析）标记（ga.js 或 analytics.js）的网页时，将以异步方式执行两项操作：加载并处理 Google Analytics（分析）函数队列和请求 Google Analytics（分析）JavaScript。函数队列是一个 JavaScript 数组，用于推送不同的 Google Analytics（分析）配置和数据收集函数。这些函数由网站所有者在实施 Google Analytics（分析）时设置，可能包含的功能有指定 Google Analytics（分析）帐号，以及将网页浏览数据实际发送给 Google Analytics（分析）收集网络以便处理。

原始代码

      <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      
      ga('create', 'UA-44687225-1', 'example.com');
      ga('send', 'pageview');
      
      </script>

代码分析

	<script>
	    (function (i, s, o, g, r, a, m) {
	        i['GoogleAnalyticsObject'] = r; //定义谷歌的命名空间 ‘ga'
	
	        /*
	        初始化Google Analytics（分析）函数队列
	         */
	        i[r] = i[r] || function () {
	            (i[r].q = i[r].q || []).push(arguments)
	        },
	
	        i[r].l = 1 * new Date(); //创建ga <script>标签时的时间戳
	
	        /*
	        请求 Google Analytics（分析）JavaScript(analytics.js)
	         */
	        a = s.createElement(o),
	        m = s.getElementsByTagName(o)[0];
	        a.async = 1;
	        a.src = g;
	        m.parentNode.insertBefore(a, m)
	    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
	
	    ga('create', 'UA-44687225-1', 'example.com');   //创建跟踪对象, UA-44687225-1 为跟踪id
	    ga('send', 'pageview'); //发送URL的默认数据到 Google Analytics
	</script>

analytics.js分析
--
参见：[www.google-analytics.com/analytics.js](https://github.com/clientlab/analytics/blob/master/google-analytics-2013/www.google-analytics.com/analytics.js)

计数URL和参数
--
![](https://raw.github.com/clientlab/analytics/master/google-analytics-2013/img/send_request.jpg)
--

以附加到 HTTP 请求的网址参数的形式发送数据。

根据计数请求URL中参数长度和浏览器，从信标(即通过1x1 img的src属性)、XDomainRequest异步请求和iframe的src属性三种方式中选取一种方式发送计数请求。上图中为使用信标方式发送计数请求。

http://www.google-analytics.com/collect?v=1&_v=j13&a=994561489&t=pageview&_s=1&dl=http%3A%2F%2Fweb.example.com%2Findex.html&ul=zh-cn&de=UTF-8&dt=test&sd=32-bit&sr=1440x900&vp=1440x445&je=1&fl=11.8%20r800&_u=ME~&cid=1568799843.1381222720&tid=UA-44687225-1&z=1013138030

### 计数URL###
http://www.google-analytics.com/collect?

### 参数说明 ###
- v=1 ：apiVersion
- _v=j13 ：clientVersion
- a=994561489 ：adSenseId
- t=pageview ：hitType
- _s=1 ：
- dl=http%3A%2F%2Fweb.example.com%2Findex.html ：当前页面的URL地址 (由主机名和目标网页组成)
- ul=zh-cn ：用户浏览器（或系统）语言
- de=UTF-8 ：页面编码
- dt=test ：当前文档的标题（title 标签内的字符串）
- sd=32-bit ：用户屏幕颜色
- sr=1440x900 ：屏幕分辨率
- vp=1440x445 ：浏览器窗口的宽高（不包括工具栏和滚动条）
- je=1 ：是否支持Java （1代表支持）
- fl=11.8%20r800 ：Flash版本
- _u=ME~ ：usage
- cid=1568799843.1381222720 ：clientId
- tid=UA-44687225-1 ：跟踪对象的ID
- z=1013138030 ：0和2147483647之间的伪随机数，可能为0，但总是小于2147483647，[0,2147483647)

浏览器端存储
--
### cookie ###
![](https://raw.github.com/clientlab/analytics/master/google-analytics-2013/img/cookie.jpg)

### 参数说明 ###
- _ga：域为 去除www.的被监测网站域名（如.example.com），路径为/，过期时间是24个月(2年)。值如 GA.1.2.1568799843.1381222720 。通过计数请求的cid参数发送给服务器。
当客户端没有 _ga 的Cookie时，由analytics.js执行生成；客户端存有 _ga 的Cookie时，刷新 cookie过期时间 Expires/Max-age。

Google Analytics中的监测指标
--

### 全部网站数据（摘要） ###
![](https://raw.github.com/clientlab/analytics/master/google-analytics-2013/img/report.jpg)

### 网站使用情况 ###
![](https://raw.github.com/clientlab/analytics/master/google-analytics-2013/img/website_report.jpg)

### 电子商务 ###
![](https://raw.github.com/clientlab/analytics/master/google-analytics-2013/img/e-commerce_report.jpg)

### 次级维度 ###
![](https://raw.github.com/clientlab/analytics/master/google-analytics-2013/img/secondary_dimension.jpg)

参考
--

- https://developers.google.com/analytics/devguides/collection/analyticsjs/?hl=zh-CN
- https://support.google.com/analytics/answer/2763052