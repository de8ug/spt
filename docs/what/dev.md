# 开发工程师（全栈/后端）


::: tip 学习路上遇到问题？

欢迎随时在[工单](https://github.com/de8ug/spt/issues)
或直接公众号`Python随身听`留言进行提问


<img src="https://upload.jianshu.io/users/qrcodes/543964/%E5%BE%AE%E4%BF%A1-%E7%AC%AC8%E5%93%A5.jpg" width = "180" height = "150" alt="感谢支持" align="center" />

:::

## 代码规范

### autopep8 
[https://github.com/hhatto/autopep8](https://github.com/hhatto/autopep8)


## 数据验证

### schema：
验证配置文件，表单，命令行等的数据结构 [https://github.com/keleshev/schema](https://github.com/keleshev/schema)

## 控制台/终端工具

### colorama: 
输出彩色文本 [https://github.com/tartley/colorama](https://github.com/tartley/colorama)


## 数据库


### sqlalchemy： 
数据库工具集和ORM框架 [https://github.com/sqlalchemy/sqlalchemy](https://github.com/sqlalchemy/sqlalchemy)

### pony： 
高级对象关系映射（ORM）库 [https://github.com/ponyorm/pony](https://github.com/ponyorm/pony)

### peewee：
一个简单的orm库 [https://github.com/coleifer/peewee](https://github.com/coleifer/peewee)

## 模板引擎

### jinja

[https://github.com/pallets/jinja](https://github.com/pallets/jinja)

```
{% extends 'base.html' %}
{% block title %}Memberlist{% endblock %}
{% block content %}
  <ul>
  {% for user in users %}
    <li><a href="{{ user.url }}">{{ user.username }}</a></li>
  {% endfor %}
  </ul>
{% endblock %}
```

## 图像处理

### Pillow：

[https://github.com/python-pillow/Pillow](https://github.com/python-pillow/Pillow)

```
# Convert files to JPEG
from __future__ import print_function
import os, sys
from PIL import Image

for infile in sys.argv[1:]:
    f, e = os.path.splitext(infile)
    outfile = f + ".jpg"
    if infile != outfile:
        try:
            Image.open(infile).save(outfile)
        except IOError:
            print("cannot convert", infile)
```

## web开发

### django

[文档（部分汉化）](https://docs.djangoproject.com/zh-hans/2.2/)

### flask

[官网](https://palletsprojects.com/p/flask/)

### pelican： 
静态网站生成器 https://github.com/getpelican/pelican  https://blog.getpelican.com/

### channels: 

https://channels.readthedocs.io/en/latest/introduction.html


## 部署

### WhiteNoise：
简化处理web服务中的静态文件  [http://whitenoise.evans.io/en/stable/](http://whitenoise.evans.io/en/stable/)


## 函数式编程

### fn.py 
[https://github.com/kachayev/fn.py](https://github.com/kachayev/fn.py)


## 设计模式

### python-patterns
[https://github.com/faif/python-patterns](https://github.com/faif/python-patterns)


## cpython源码分析

### CPython-Internals 
[https://github.com/zpoint/CPython-Internals](https://github.com/zpoint/CPython-Internals)

::: tip 学习路上遇到问题？

欢迎随时在[工单](https://github.com/de8ug/spt/issues)
或直接公众号`Python随身听`留言进行提问
<img src="https://upload.jianshu.io/users/qrcodes/543964/%E5%BE%AE%E4%BF%A1-%E7%AC%AC8%E5%93%A5.jpg" width = "180" height = "150" alt="感谢支持" align="center" />

:::
