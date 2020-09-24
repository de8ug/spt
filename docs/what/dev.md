# 开发工程师（全栈/后端）


::: tip 学习路上遇到问题？

欢迎随时在公众号`Python随身听`按「相应格式」留言进行提问


<img src="https://upload.jianshu.io/users/qrcodes/543964/%E5%BE%AE%E4%BF%A1-%E7%AC%AC8%E5%93%A5.jpg" width = "150" height = "150" alt="感谢支持" align="center" />

:::

## 代码规范

### autopep8 
[https://github.com/hhatto/autopep8](https://github.com/hhatto/autopep8)


## 管理 Python 版本和环境的工具

### p：非常简单的交互式 python 版本管理工具。
[官网](https://github.com/qw3rtman/p)
  ![Github stars](https://img.shields.io/github/stars/qw3rtman/p.svg)
### pyenv：简单的 Python 版本管理工具。
[官网](https://github.com/yyuu/pyenv)
  ![Github stars](https://img.shields.io/github/stars/yyuu/pyenv.svg)
### Vex：可以在虚拟环境中执行命令。
[官网](https://github.com/sashahart/vex)
  ![Github stars](https://img.shields.io/github/stars/sashahart/vex.svg)
### pipenv：Python 官方推荐的新一代包管理工具。
[官网](https://github.com/pypa/pipenv)
  ![Github stars](https://img.shields.io/github/stars/pypa/pipenv.svg)
### [warehouse](https://pypi.org/)：下一代 PyPI。
[官网](https://github.com/pypa/warehouse)
  ![Github stars](https://img.shields.io/github/stars/pypa/warehouse.svg)
  
## 数据验证

### schema：
验证配置文件，表单，命令行等的数据结构 [https://github.com/keleshev/schema](https://github.com/keleshev/schema)

## 解析器/控制台/终端工具

### IPython：功能丰富的工具，非常有效的使用交互式 Python。
[官网](https://github.com/ipython/ipython)
  ![Github stars](https://img.shields.io/github/stars/ipython/ipython.svg)
### ptpython：高级交互式 Python 解析器， 
构建于 [python-prompt-toolkit](https://github.com/jonathanslenders/python-prompt-toolkit) 之上。
[官网](https://github.com/jonathanslenders/ptpython)
  ![Github stars](https://img.shields.io/github/stars/jonathanslenders/ptpython.svg)
### colorama: 
输出彩色文本 [https://github.com/tartley/colorama](https://github.com/tartley/colorama)


## 文件管理和 MIME（多用途的网际邮件扩充协议）类型检测。

### aiofiles：基于 asyncio，提供文件异步操作。
[官网](https://github.com/Tinche/aiofiles)
  ![Github stars](https://img.shields.io/github/stars/Tinche/aiofiles.svg)

### path.py：对 os.path 进行封装的模块。
[官网](https://github.com/jaraco/path.py)
  ![Github stars](https://img.shields.io/github/stars/jaraco/path.py.svg)
### pathlib：（Python3.4+ 标准库）跨平台的、面向对象的路径操作库。
[官网](https://pathlib.readthedocs.org/en/pep428/)
### python-magic：文件类型检测的第三方库 libmagic 的 Python 接口。
[官网](https://github.com/ahupp/python-magic)
  ![Github stars](https://img.shields.io/github/stars/ahupp/python-magic.svg)
### Unipath：用面向对象的方式操作文件和目录。
[官网](https://github.com/mikeorr/Unipath)
  ![Github stars](https://img.shields.io/github/stars/mikeorr/Unipath.svg)
### watchdog：管理文件系统事件的 API 和 shell 工具。
[官网](https://github.com/gorakhargosh/watchdog)
  ![Github stars](https://img.shields.io/github/stars/gorakhargosh/watchdog.svg)
  
  
## 操作日期和时间的类库。

### arrow：更好的 Python 日期时间操作类库。
[官网](https://github.com/crsmithdev/arrow)
  ![Github stars](https://img.shields.io/github/stars/crsmithdev/arrow.svg)
### Chronyk：Python 3 的类库，用于解析手写格式的时间和日期。
[官网](https://github.com/KoffeinFlummi/Chronyk)
  ![Github stars](https://img.shields.io/github/stars/KoffeinFlummi/Chronyk.svg)

### maya：人性化的时间处理库。
[官网](https://github.com/kennethreitz/maya)
  ![Github stars](https://img.shields.io/github/stars/kennethreitz/maya.svg)
### moment：一个用来处理时间和日期的 Python 库。灵感来自于 Moment.js。
[官网](https://github.com/zachwill/moment)
  ![Github stars](https://img.shields.io/github/stars/zachwill/moment.svg)
### pendulum：一个比 arrow 更具有明确的，可预测的行为的时间操作库。
[官网](https://github.com/sdispater/pendulum)
  ![Github stars](https://img.shields.io/github/stars/sdispater/pendulum.svg)
### PyTime：一个简单易用的 Python 模块，用于通过字符串来操作日期/时间。
[官网](https://github.com/shinux/PyTime)
  ![Github stars](https://img.shields.io/github/stars/shinux/PyTime.svg)
### pytz：现代以及历史版本的世界时区定义。将时区数据库引入 Python。
[官网](https://launchpad.net/pytz)
### when.py：提供用户友好的函数来帮助用户进行常用的日期和时间操作。
[官网](https://github.com/dirn/When.py)
  ![Github stars](https://img.shields.io/github/stars/dirn/When.py.svg)

  
## 数据库
### sqlalchemy： 数据库工具集和ORM框架 
[https://github.com/sqlalchemy/sqlalchemy](https://github.com/sqlalchemy/sqlalchemy)

### pony： 高级对象关系映射（ORM）库
[https://github.com/ponyorm/pony](https://github.com/ponyorm/pony)

### peewee：一个简单的orm库 
[https://github.com/coleifer/peewee](https://github.com/coleifer/peewee)


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


## 部署、打包、分发、构建工具

### WhiteNoise：简化处理web服务中的静态文件  
[http://whitenoise.evans.io/en/stable/](http://whitenoise.evans.io/en/stable/)
### PyInstaller：将 Python 程序转换成独立的执行文件（跨平台）。
[官网](https://github.com/pyinstaller/pyinstaller)
  ![Github stars](https://img.shields.io/github/stars/pyinstaller/pyinstaller.svg)
### PlatformIO：多平台命令行构建工具。
[官网](https://github.com/platformio/platformio)
  ![Github stars](https://img.shields.io/github/stars/platformio/platformio.svg)
### PyBuilder：纯 Python 实现的持续化构建工具。
[官网](https://github.com/pybuilder/pybuilder)
  ![Github stars](https://img.shields.io/github/stars/pybuilder/pybuilder.svg)

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
欢迎随时在公众号`Python随身听`按「相应格式」留言进行提问
<img src="https://upload.jianshu.io/users/qrcodes/543964/%E5%BE%AE%E4%BF%A1-%E7%AC%AC8%E5%93%A5.jpg" width = "150" height = "150" alt="感谢支持" align="center" />

:::
