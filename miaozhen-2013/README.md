#秒针监测代码分析#
---
## 文件说明 ##
+ 嵌入页面的js.js：嵌入页面的js代码。
+ one.js: 嵌入页面的js执行后向服务器请求的js文件。
+ clicki.js: one.js执行后，向服务器请求的js文件，是监测代码的主要js。

## 前后台交互流程 ##
1. 页面打开后，嵌入页面的js执行，以script标签的形式加载one.js（请求名称为网站id）。
2. one.js执行后，还是以script标签的形式加载clicki.js，在one.js代码最后，提供了程序执行的入口。创建对象window.CClicki.New(CLICKI_CF)。
3. CClicki对象初始化，以此执行在siteTracker类中注册的boot、ready、load配置中模块的初始化，开始检测，并向服务器第一次发送数据track(0)。
4. track(0)之后开始发送心跳，每分钟一次track(2)。
5. 页面退出时发送最后一次数据track(1)。

## clicki.js代码结构 ##
第一部分：定义了两个类: 类clicki提供浏览器检测、事件添加、发送请求、文档就绪判断等功能，对不同浏览器进行了兼容处理；类siteTracker提供了对监测行为的控制。  
第二部分：加入了类似seajs的模块化加载功能。把类clicki和类siteTracker和seajs的功能集中到了类Clicki中。  
第三部分：把信息收集的行为分成几个模块进行处理，模块放在Clicki命名空间下。  
 
## Session是如何定义的 ##

一个session, 即一次会话，以session\_id为标识，session\_id的值是本次会话开始时服务器返回的毫秒数（millisecond），session\_id存储在cookie中，名称为\_\_c\_session_+(site\_id)。

session\_id存储在cookie中的时间是浏览器默认的存储时间，当浏览器关闭后，session\_id在cookie中的存储就被清除了，下一次访问网站会被认为是一个新的session。

当浏览器没有关闭时，如果当前客户端时间距离会话开始时间（即session\_id）超过20分钟，则本次访问被认为是一次新的session。

注： session的规则见"~/Session"模块的代码。

## Session中保存了那些信息 ##

+ flow_key：随机数（猜测，不知道还有什么功能）
+ site_id： 网站id，如45560
+ session_id：会话标识
+ flow_id：本次会话的总访问页面数, 在本次会话时间内，每访问一个页面自增1.
+ visitor：visitor对象，包括三个属性，id:用户标识，is_new：用户是否新访客，is_active:用户活跃程度，详细见"~Visitor"模块
+ today: 今天的总访问次数, 今天的session数
+ review：10万小时内的回访数， 10万小时内session数-1
+ referer：页面来源
+ page: Page对象，包括五个属性，url, domain：页面domain, title：页面title, server_time服务器时间, loadtime: js加载时间
+ client: Client对象，包含信息，agent：浏览器信息userAgent，screen.width:屏幕宽，screen_height:屏幕高，screen_size: 页面宽*页面高/10000

## 与Session相关的cookie ##
+ "\_\_c\_session\_"+site\_id: session\_id, 存储时间：浏览器默认时间
+ "\_\_c\_pv\_" + site_id: 本次会话的总访问页面数, 存储时间：浏览器默认时间
+ "\_\_c\_review\_" + site_id: 回访次数, 存储时间：36e7
+ "\_\_c\_today\_" + site_id: 今天的访问次数, 存储时间：今天的剩余时间
+ "\_\_c\_session\_at\_" + site_id: session_key
+ "\_\_c\_visitor": visitor_id，用户标识

## SessionTimeList ##
"~SessionTimeList"模块的主要作用是判断用户活跃程度，is_active, 取值0， 1， 2， 3

"~SessionTimeList"模块在维护一个队列，保存在cookie中名称为"\_\_c\_sesslist\_"+site_id。每次访问页面时，把当时的时间加入这个队列中，这个cookie值最多保存五天内的10页面访问时间。

cookie值"\_\_c\_isactive\_"+site_id保存用户是否活跃，取值0或1，如果sessiontimelist队列的前三个中存在五天内的访问时间，则这个cookie值为1, 否则为0。

如果"\_\_c\_isactive\_"+site_id的值为0, 并且五天内无访问，则发送给服务器的is_active值为0；若cookie值为0但五天内有访问，则is_active值为1，cookie值置1；如果cookie值为1，且今天有访问，则is_active为3，否则isz_active值为1。

## ActionTrack ##
"~ActionTrack"模块负责监测动作，包括点击链接次数、输入次数、跳入次数、跳出次数。getActionTrackData函数返回监测的动作数据。

### 统计跳入次数和跳出次数 ###
dom加载完成后，document添加click事件，判断时间源是否是a元素并有href属性。如果前一判断成立，分几种情况：  

+ href以http、https、ftp开头，并且包含本页面的域名，且本页面域名起始位置在href前8内，则是内部跳转;  
+ href以http、https、ftp开头，不包含本页面的域名，或且本页面域名起始位置不在href前8内，则外部跳转;  
+ href不是协议名开头，并且不是javascript开头，则内部跳转

注： 代码在"~ActionTrack"模块中

## CustomTrack ##
"~CustomTrack"模块的模块的作用目前不清楚。

## Page ##
"~Page"模块在对外接口的data对象中保存这些信息：

+ url: 页面url
+ domain: 页面域名
+ title: 页面title
+ server_time: 本次页面访问的服务器时间CLICKI_CF.time
+ loadtime: js加载时间（猜测）

## Referer ##
"~Referer"模块提供页面来源

## Visitor ##
"~Visitor"模块保存用户的信息，三个属性：
+ id: visitor_id，用户标识，用户第一次访问网站的时间（第一次访问时，CLICKI_CF.visitor_id的值），其值存储在名称为\_\_c\_visitor的cookie中，存储时间36e7
+ is_new: 用户是否新访客，当cookie中\_\_c\_visitor有值时, 即不是新访客。
+ is_active: 由SessionTimeList模块的checkActive函数判断。

## Json ##
"~Json"模块主要用stringify函数把一些其他类型数据转换成字符串。

## Cookie ##
"~Cookie"模块对外提供三个接口：

+ get: 根据名称获取cookie值。
+ set:
+ set2: 

## Client ##
"~Client"模块提供客户端信息：

+ agent: 浏览器的userAgent
+ screen.width: 屏幕宽
+ screen.height: 屏幕高
+ screen.size: 页面宽*页面高/10000

## Observer ##
"~Observer"模块负责控制所有向服务器发送数据的行为。由track函数组织发送的参数，并发送。

"~Observer"模块在页面加载时初始化，在其初始化时向服务器发送一次数据track(0)，然后打开心跳，每分钟发送一次心跳track(2)，在页面退出的beforeunload事件中发送一次数据track(1)。

track(0)、track(1)、track(2)发送的共同数据：

+ rf：rf_key（服务器发过来的）  
+ t：track_type(取值0、1、2)  
+ i:stie_id(45560)  
+ fk:随机数
+ k: session_key
+ s: session_id
+ fi: flow_id(本次会话访问页面数)
+ ct: customTrack模块的动作监测数据（如果没有数据，则不发送此参数）
+ ac: activeTrack模块的动作监测数据（如果没有数据，则不发送此参数）

track(0)额外发送的数据：

+ v: "id"-"is\_new"-"is\_active"(visitor的信息)  
+ rv: review回访次数
+ td: today今天访问的次数
+ ru: refer.url来源
+ sr: 屏幕宽-屏幕高-页面大小的指标
+ u: 页面url
+ dt: 页面title
+ st: server_time(本次访问的服务器时间)
+ lt: js加载时间

## AppEngine ##
"~AppEngine"模块加载额外的程序代码的，要加载的js在CLICKI_CF.widgets中配置，在飞利浦的秒针代码中没有加载其他程序代码。

## LoadJsCode ##
"~LoadJsCode"模块加载额外的js文件，要加载的js在CLICKI_CF.jscode中配置，在飞利浦的秒针代码中没有加载额外的js。









  

