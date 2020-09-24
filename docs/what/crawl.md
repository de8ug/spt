# 爬虫

爬虫是很多Python初学者最开始学习很感兴趣的方向，但DE8UG建议你不要一门心思放到爬虫上，因为从别人网站爬数据其实是个擦边球的事儿，而且爬虫技术简单，变化多端，你需要处理各种反爬虫的变化，比较浪费时间。除非，有人花大量银子请你干活，且守法的情况下，才值得多花些时间。

以下是DE8UG精心挑选的GitHub上面的代码库，方便你完成各种操作。

## 获取数据

* [purl](https://github.com/codeinthehole/purl):查询和操作url  
* [requests](https://github.com/psf/requests)

```
>>> import requests
>>> r = requests.get('https://api.github.com/user', auth=('user', 'pass'))
>>> r.status_code
200
>>> r.headers['content-type']
'application/json; charset=utf8'
>>> r.encoding
'utf-8'
>>> r.text
u'{"type":"User"...'
>>> r.json()
{u'disk_usage': 368627, u'private_gists': 484, ...}
```

* [HTTPie](https://github.com/jakubroztocil/httpie): http客户端，可进行各种http请求相关操作

## 解析


## 存储

* PDFKit：把网页数据转换成pdf  https://github.com/JazzCore/python-pdfkit


## 爬虫框架

* [Scrapy](https://github.com/scrapy/scrapy)：一个快速高级的网页采集框架
* cola：一个分布式爬虫框架
* Demiurge：基于PyQuery 的爬虫微型框架
* feedparser：通用 feed 解析器
* Grab：站点爬取框架
* MechanicalSoup：用于自动和网络站点交互的 Python 库
* portia：Scrapy 可视化爬取
* pyspider：一个强大的爬虫系统
* RoboBrowser：一个简单的，Python 风格的库，用来浏览网站，而不需要一个独立安装的浏览器
* BeautifulSoup：以 Python 风格的方式来对 HTML 或 XML 进行迭代，搜索和修改
* bleach：一个基于白名单的 HTML 清理和文本链接库
* cssutils：一个 Python 的 CSS 库
* html5lib：一个兼容标准的 HTML 文档和片段解析及序列化库
* lxml：一个非常快速，简单易用，功能齐全的库，用来处理 HTML 和 XML
* MarkupSafe：为Python 实现 XML/HTML/XHTML 标记安全字符串
* pyquery：一个解析 HTML 的库，类似 jQuery
* untangle：将XML文档转换为Python对象，使其可以方便的访问
* xhtml2pdf：HTML/CSS 转 PDF 工具
* xmltodict：像处理 JSON 一样处理 XML

