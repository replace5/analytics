#cnzz代码分析
---
##前后台交互流程
页面中植入cnzz代码后，用户第一次打开页面后，页面会向cnzz的相关服务器连续发五个请求，以后回访页面时只会发前三个请求。  

请求1：嵌入页面js执行，请求监测的js文件  
请求2：监测的js文件执行，发送监测数据  
请求3：又一次请求一个js文件  
请求4：执行二次请求的js文件，向服务器发送请求，服务器植入了cookie,并重定向了请求  
请求5：重定向服务器又植入了cookie  

###详细说明：  

请求1：嵌入的js请求监测的js文件   
发送参数：  
   
+ id=1000106073(网站id)  
+ l=3  

返回js文件：cnzz-main.js


请求2：发送监测数据（请求图片）  
发送参数：  

+ id=1000106073 网站id  
+ r="http://activate.adobe.com/"
+ lg=zh_cn 页面语言
+ ntime=1381566370 页面第一次访问服务器时间
+ repeatip=0 当日回访次数
+ rtime=0 回访次数
+ cnzz-eid=353968358-1381549991-http://activate.adobe.com 用户标识
+ showp=1366x768 屏幕宽高
+ st=1634 本次访问时间与页面第一次访问服务器时间差值
+ sin="none"来源域名
+ rnd=1736555105

请求3：请求第二个js文件
发送参数：  

+ web_id=1000106073   
+ l=3                    
+ t="q"

返回js文件：another.js

请求4： 执行第二个js,向服务器发请求（请求图片）  
发送参数：  

+ abc=1  
+ rnd=1445243348

服务器写入cookie:  

+ cna="p7XfCqnj5HkCAXx/hfJITWI+"; domain="mmstat.com"
+ sc="0043c181"; domain="cnzz.mmstat.com"
+ atpsid="859a3dc7a7ec6f0eaaeabbe6_1381549991"; domain="cnzz.mmstat.com"  

请求5：重定向服务器写入cookie

发送参数：

+ cna="p7XfCqnj5HkCAXx/hfJITWI"

服务器写入cookie:  

+ cna="p7XfCqnj5HkCAXx/hfJITWI+"; domain=".cnzz.com"

注： 以后回访该网站时，只会发前三个请求，并且请求中都包含cookie cna="p7XfCqnj5HkCAXx/hfJITWI+"，没有发第四次请求，是因为第三次请求返回的js文件不同了，代码在another1.js

##代码结构
监测的js文件cnzz-main.js中，只有一个类l, 类l中的属性保存了加载时的服务器时间，发送数据的服务器地址，保存l对象的全局变量名等。类l中的方法用于收集监测信息、读写cookie、发送数据、请求js等。  
发送数据时传递那些信息请参看类l的w和M方法。
全局函数g用户出错处理，发送出错信息到日志。
  


              