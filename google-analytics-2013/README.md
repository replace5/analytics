Google Analytics
==================

谷歌互联网媒体监测研究 


网络视图
--
![ga网络视图](https://raw.github.com/clientlab/analytics/master/google-analytics-2013/img/network.jpg)

监测埋点
--
      <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      
      ga('create', 'UA-44687225-1', 'example.com');
      ga('send', 'pageview');
      
      </script>

analytics.js分析
--
参见：[www.google-analytics.com/analytics.js](https://github.com/clientlab/analytics/blob/master/google-analytics-2013/www.google-analytics.com/analytics.js)

计数URL和参数
--
![](https://raw.github.com/clientlab/analytics/master/google-analytics-2013/img/send_request.jpg)
--
使用信标方式(即：通过1x1 img的src属性)发送计数请求

http://www.google-analytics.com/collect?v=1&_v=j13&a=994561489&t=pageview&_s=1&dl=http%3A%2F%2Fweb.example.com%2Findex.html&ul=zh-cn&de=UTF-8&dt=test&sd=32-bit&sr=1440x900&vp=1440x445&je=1&fl=11.8%20r800&_u=ME~&cid=1568799843.1381222720&tid=UA-44687225-1&z=1013138030

### 计数URL###
http://www.google-analytics.com/collect?

### 参数说明 ###
- v=1 ：apiVersion
- _v=j13 ：clientVersion
- a=994561489 ：adSenseId
- t=pageview ：hitType
- _s=1 ：
- dl=http%3A%2F%2Fweb.example.com%2Findex.html ：当前页面的地址 (URL)
- ul=zh-cn ：用户浏览器语言
- de=UTF-8 ： 页面编码
- dt=test ： 当前文档的标题（title 标签内的字符串）
- sd=32-bit ： 用户浏览器表示的颜色位数
- sr=1440x900 ：屏幕分辨率的宽高
- vp=1440x445 ：浏览器窗口的宽高（不包括工具栏和滚动条）
- je=1 ： Java 是否可用 （1代表可用）
- fl=11.8%20r800 ：浏览器flash player插件的版本
- _u=ME~ ：usage
- cid=1568799843.1381222720 ：clientId
- tid=UA-44687225-1 ：trackingId
- z=1013138030 ：0和2147483647之间的伪随机数，可能为0，但总是小于2147483647，[0,2147483647)

浏览器端存储
--
### cookie ###
![](https://raw.github.com/clientlab/analytics/master/google-analytics-2013/img/cookie.jpg)

### 参数说明 ###
- _ga：域为 被监测网站（如.example.com），路径为/，过期时间是2年以后。值如 GA.1.2.232959034.1381396409 。
当客户端存有TANX域的Cookie时，广告调度请求携带Cookie参数。没有Cookie，则不必携带。

Google Analytics中的监测指标
--

### 全部网站数据 ###
![](https://raw.github.com/clientlab/analytics/master/google-analytics-2013/img/report.jpg)

### 网站使用情况 ###
![](https://raw.github.com/clientlab/analytics/master/google-analytics-2013/img/website_report.jpg)

### 电子商务 ###
![](https://raw.github.com/clientlab/analytics/master/google-analytics-2013/img/e-commerce_report.jpg)
