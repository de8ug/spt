# Python基础知识


## 基本数据类型

### boolean  
- [boolean:](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not )  bool类型，判断真假，可搭配and，or，not使用

以下的值都为False，其他的为True
```
None
False
任何数字类型，例如零，0，0L，0.0，0j。
任何空序列，例如''，()，[]。
例如，任何空映射{}。
用户定义的类的实例，如果该类定义了一个__nonzero__()or __len__()方法，则该方法返回整数零或bool值False
```


### int,float,complex
- [int,float,complex :](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex) 数字类型，整数，浮点数，复数 

### str, unicode, list, tuple, bytearray, buffer, xrange

序列类型：字符串，Unicode字符串，列表，元组，字节数组，缓冲区和xrange对象。
其中str，list，tuple更为常用。


字符串文字用单引号或双引号写入：'xyzzy'，"frobozz"。Unicode字符串很像字符串，但是在语法中使用前面的'u'字符指定：u'abc'，u"def"。除了这里描述的功能之外，字符串方法部分中还描述了特定于字符串的方法。列表用方括号构成，用逗号分隔项目：[a, b, c]。元组由逗号运算符（不在方括号内）构造，带或不带括号括起来，但空元组必须带括号括起来的括号，如a, b, c或()。单个元组元组必须具有尾随逗号，例如(d,)。

Bytearray对象是使用内置函数创建的bytearray()。

缓冲区对象不直接受Python语法支持，但可以通过调用内置函数来创建buffer()。他们不支持连接或重复。

xrange类型的对象类似于缓冲区，因为没有特定的语法来创建它们，但是它们是使用xrange()函数创建的。它们不支持切片，串联或重复使用in，not in，min()或max()对它们是无效的。

大多数序列类型支持以下操作。在in和not in操作具有比较操作相同的优先级。在+与*操作具有相同的优先级对应的数字运算。[3]为可变序列类型提供了其他方法。

### str

```
str.capitalize()

返回字符串的一个副本，其首字母大写，其余的小写。

str.center(width[, fillchar])

返回以一个长度宽度的字符串为中心。填充是使用指定的fillchar完成的（默认为空格）。
str.count(sub[, start[, end]])

返回范围start，end 中子串sub的非重叠次数。可选参数开始和结束被解释为切片符号。

str.decode([encoding[, errors]])

使用注册编码的编码解码器解码字符串。编码默认为默认的字符串编码。可能会给出错误来设置不同的错误处理方案。默认值是'strict'，意味着编码错误会增加UnicodeError。其他可能的值是'ignore'，'replace'并且通过注册的任何其他名称codecs.register_error()

str.encode([encoding[, errors]])

返回字符串的编码版本。默认编码是当前的默认字符串编码。可能会给出错误来设置不同的错误处理方案。错误的默认值是'strict'，这意味着编码错误会引发一个错误UnicodeError。其他可能的值'ignore'，'replace'，'xmlcharrefreplace'，'backslashreplace'并通过注册的任何其他名称codecs.register_error()


str.endswith(suffix[, start[, end]])

返回True字符串是否与指定的结束后缀，否则返回False。后缀也可以是后缀的元组来查找。随着可选启动，测试开始在那个位置。选择结束时，停止在该位置进行比较。

str.find(sub[, start[, end]])

返回切片中找到substring 子字符串的最低索引s[start:end]。可选参数开始和结束被解释为切片符号。-1如果未找到子项，则返回。

注释

find()只有在您需要知道sub的位置时才应该使用该方法。要检查sub是否是子字符串，请使用in运算符：

>>> 'Py' in 'Python'
True
str.format(*args, **kwargs)

执行字符串格式化操作。调用此方法的字符串可以包含由大括号分隔的文本文本或替换字段{}。每个替换字段包含位置参数的数字索引或关键字参数的名称。返回字符串的副本，其中每个替换字段将替换为相应参数的字符串值。
字符串和Unicode对象有一个独特的内置操作：%操作符

```
更多[内容](https://docs.python.org/zh-cn/3/library/stdtypes.html#textseq)


### list列表特性

列表数据类型还有很多的方法。这里是列表对象方法的清单：

```
list.append(x)
在列表的末尾添加一个元素。相当于 a[len(a):] = [x] 。

list.extend(iterable)
使用可迭代对象中的所有元素来扩展列表。相当于 a[len(a):] = iterable 。

list.insert(i, x)
在给定的位置插入一个元素。第一个参数是要插入的元素的索引，所以 a.insert(0, x) 插入在列表头部， a.insert(len(a), x) 等同于 a.append(x) 。

list.remove(x)
移除列表中第一个值为 x 的元素。如果没有这样的元素，则抛出 ValueError 异常。

list.pop([i])
删除列表中给定位置的元素并返回它。如果没有给定位置，a.pop() 将会删除并返回列表中的最后一个元素。（ 方法签名中 i 两边的方括号表示这个参数是可选的，而不是要你输入方括号。你会在 Python 参考库中经常看到这种表示方法)。

list.clear()
删除列表中所有的元素。相当于 del a[:] 。

list.index(x[, start[, end]])
返回列表中第一个值为 x 的元素的从零开始的索引。如果没有这样的元素将会抛出 ValueError 异常。

可选参数 start 和 end 是切片符号，用于将搜索限制为列表的特定子序列。返回的索引是相对于整个序列的开始计算的，而不是 start 参数。

list.count(x)
返回元素 x 在列表中出现的次数。

list.sort(key=None, reverse=False)
对列表中的元素进行排序（参数可用于自定义排序，解释请参见 sorted()）。

list.reverse()
反转列表中的元素。

list.copy()
返回列表的一个浅拷贝。相当于 a[:] 。
```

列表方法示例：

```
>>>
>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> fruits.count('apple')
2
>>> fruits.count('tangerine')
0
>>> fruits.index('banana')
3
>>> fruits.index('banana', 4)  # Find next banana starting a position 4
6
>>> fruits.reverse()
>>> fruits
['banana', 'apple', 'kiwi', 'banana', 'pear', 'apple', 'orange']
>>> fruits.append('grape')
>>> fruits
['banana', 'apple', 'kiwi', 'banana', 'pear', 'apple', 'orange', 'grape']
>>> fruits.sort()
>>> fruits
['apple', 'apple', 'banana', 'banana', 'grape', 'kiwi', 'orange', 'pear']
>>> fruits.pop()
'pear'
你可能已经注意到，像 insert ，remove 或者 sort 方法，只修改列表，没有打印出返回值——它们返回默认值 None 。[1] 这是Python中所有可变数据结构的设计原则。

```

### 列表的应用

#### 1. 列表作为栈使用

列表方法使得列表作为堆栈非常容易，最后一个插入，最先取出（“后进先出”）。要添加一个元素到堆栈的顶端，使用 append() 。要从堆栈顶部取出一个元素，使用 pop() ，不用指定索引。例如

```
>>>
>>> stack = [3, 4, 5]
>>> stack.append(6)
>>> stack.append(7)
>>> stack
[3, 4, 5, 6, 7]
>>> stack.pop()
7
>>> stack
[3, 4, 5, 6]
>>> stack.pop()
6
>>> stack.pop()
5
>>> stack
[3, 4]
```

#### 2. 列表作为队列使用

列表也可以用作队列，其中先添加的元素被最先取出 (“先进先出”)；然而列表用作这个目的相当低效。因为在列表的末尾添加和弹出元素非常快，但是在列表的开头插入或弹出元素却很慢 (因为所有的其他元素都必须移动一位)。

若要实现一个队列， collections.deque 被设计用于快速地从两端操作。例如

```
>>>
>>> from collections import deque
>>> queue = deque(["Eric", "John", "Michael"])
>>> queue.append("Terry")           # Terry arrives
>>> queue.append("Graham")          # Graham arrives
>>> queue.popleft()                 # The first to arrive now leaves
'Eric'
>>> queue.popleft()                 # The second to arrive now leaves
'John'
>>> queue                           # Remaining queue in order of arrival
deque(['Michael', 'Terry', 'Graham'])
```

#### 3. 列表推导式

列表推导式提供了一个更简单的创建列表的方法。常见的用法是把某种操作应用于序列或可迭代对象的每个元素上，然后使用其结果来创建列表，或者通过满足某些特定条件元素来创建子序列。

例如，假设我们想创建一个平方列表，像这样

```
>>>
>>> squares = []
>>> for x in range(10):
...     squares.append(x**2)
...
>>> squares
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
注意这里创建（或被重写）的名为 x 的变量在for循环后仍然存在。我们可以计算平方列表的值而不会产生任何副作用

squares = list(map(lambda x: x**2, range(10)))
或者，等价于

squares = [x**2 for x in range(10)]
上面这种写法更加简洁易读。
```

> 列表推导式的结构是由一对方括号所包含的以下内容：一个表达式，后面跟一个 for 子句，然后是零个或多个 for 或 if 子句。 其结果将是一个新列表，由对表达式依据后面的 for 和 if 子句的内容进行求值计算而得出。 举例来说，以下列表推导式会将两个列表中不相等的元素组合起来:

```
>>>
>>> [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]
[(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]
而它等价于

>>>
>>> combs = []
>>> for x in [1,2,3]:
...     for y in [3,1,4]:
...         if x != y:
...             combs.append((x, y))
...
>>> combs
[(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]
注意在上面两个代码片段中， for 和 if 的顺序是相同的。

如果表达式是一个元组（例如上面的 (x, y)），那么就必须加上括号

>>>
>>> vec = [-4, -2, 0, 2, 4]
>>> # create a new list with the values doubled
>>> [x*2 for x in vec]
[-8, -4, 0, 4, 8]
>>> # filter the list to exclude negative numbers
>>> [x for x in vec if x >= 0]
[0, 2, 4]
>>> # apply a function to all the elements
>>> [abs(x) for x in vec]
[4, 2, 0, 2, 4]
>>> # call a method on each element
>>> freshfruit = ['  banana', '  loganberry ', 'passion fruit  ']
>>> [weapon.strip() for weapon in freshfruit]
['banana', 'loganberry', 'passion fruit']
>>> # create a list of 2-tuples like (number, square)
>>> [(x, x**2) for x in range(6)]
[(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25)]
>>> # the tuple must be parenthesized, otherwise an error is raised
>>> [x, x**2 for x in range(6)]
  File "<stdin>", line 1, in <module>
    [x, x**2 for x in range(6)]
               ^
SyntaxError: invalid syntax
>>> # flatten a list using a listcomp with two 'for'
>>> vec = [[1,2,3], [4,5,6], [7,8,9]]
>>> [num for elem in vec for num in elem]
[1, 2, 3, 4, 5, 6, 7, 8, 9]
列表推导式可以使用复杂的表达式和嵌套函数

>>>
>>> from math import pi
>>> [str(round(pi, i)) for i in range(1, 6)]
['3.1', '3.14', '3.142', '3.1416', '3.14159']
5.1.4. 嵌套的列表推导式
列表推导式中的初始表达式可以是任何表达式，包括另一个列表推导式。

考虑下面这个 3x4的矩阵，它由3个长度为4的列表组成

>>>
>>> matrix = [
...     [1, 2, 3, 4],
...     [5, 6, 7, 8],
...     [9, 10, 11, 12],
... ]
下面的列表推导式将交换其行和列

>>>
>>> [[row[i] for row in matrix] for i in range(4)]
[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
如上节所示，嵌套的列表推导式是基于跟随其后的 for 进行求值的，所以这个例子等价于:

>>>
>>> transposed = []
>>> for i in range(4):
...     transposed.append([row[i] for row in matrix])
...
>>> transposed
[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
反过来说，也等价于

>>>
>>> transposed = []
>>> for i in range(4):
...     # the following 3 lines implement the nested listcomp
...     transposed_row = []
...     for row in matrix:
...         transposed_row.append(row[i])
...     transposed.append(transposed_row)
...
>>> transposed
[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
实际应用中，你应该会更喜欢使用内置函数去组成复杂的流程语句。 zip()函数将会很好地处理这种情况

>>>
>>> list(zip(*matrix))
[(1, 5, 9), (2, 6, 10), (3, 7, 11), (4, 8, 12)]
```

关于本行中星号的详细说明，参见 [解包参数列表](https://docs.python.org/zh-cn/3/tutorial/controlflow.html#tut-unpacking-arguments)。

### tuple元组

一个元组由几个被逗号隔开的值组成，例如

```
>>>
>>> t = 12345, 54321, 'hello!'
>>> t[0]
12345
>>> t
(12345, 54321, 'hello!')
>>> # Tuples may be nested:
... u = t, (1, 2, 3, 4, 5)
>>> u
((12345, 54321, 'hello!'), (1, 2, 3, 4, 5))
>>> # Tuples are immutable:
... t[0] = 88888
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>> # but they can contain mutable objects:
... v = ([1, 2, 3], [3, 2, 1])
>>> v
([1, 2, 3], [3, 2, 1])

```
  
如你所见，元组在输出时总是被圆括号包围的，以便正确表示嵌套元组。输入时圆括号可有可无，不过经常会是必须的（如果这个元组是一个更大的表达式的一部分）。给元组中的一个单独的元素赋值是不允许的，当然你可以创建包含可变对象的元组，例如列表。

虽然元组可能看起来与列表很像，但它们通常是在不同的场景被使用，并且有着不同的用途。元组是 [immutable （不可变的）](https://docs.python.org/zh-cn/3/glossary.html#term-immutable)，其序列通常包含不同种类的元素，并且通过解包（这一节下面会解释）或者索引来访问（如果是 namedtuples 的话甚至还可以通过属性访问）。列表是 [mutable （可变的）](https://docs.python.org/zh-cn/3/glossary.html#term-mutable)，并且列表中的元素一般是同种类型的，并且通过迭代访问。

一个特殊的问题是构造包含0个或1个元素的元组：为了适应这种情况，语法有一些额外的改变。空元组可以直接被一对空圆括号创建，含有一个元素的元组可以通过在这个元素后添加一个逗号来构建（圆括号里只有一个值的话不够明确）。丑陋，但是有效。例如

```

>>>
>>> empty = ()
>>> singleton = 'hello',    # <-- note trailing comma
>>> len(empty)
0
>>> len(singleton)
1
>>> singleton
('hello',)
语句 t = 12345, 54321, 'hello!' 是 元组打包 的一个例子：值 12345, 54321 和 'hello!' 被打包进元组。其逆操作也是允许的

>>>
>>> x, y, z = t

```

这被称为 **序列解包** 也是很恰当的，因为解包操作的等号右侧可以是任何序列。序列解包要求等号左侧的变量数与右侧序列里所含的元素数相同。注意可变参数其实也只是元组打包和序列解包的组合。

---

## 标准库 ----------------

官网总入口: [https://docs.python.org/zh-cn/3/library/index.html](https://docs.python.org/zh-cn/3/library/index.html)

以下为DE8UG总结的比较重点和常用的一些：

## 字符与编码
### base64
提供 Base16、Base32、Base64 格式的编码和解码。



## 数学
### math
封装了常用的数学函数（开方、指数、对数、三角函数......）

### random
进行随机数生成
```
import random
random.seed()
random.randint(0, 100)
```

## 正则
### re
正则表达式


## 时间
### time --- 时间的访问和转换
[https://docs.python.org/zh-cn/3/library/time.html](https://docs.python.org/zh-cn/3/library/time.html)

## 文件与操作系统
### os --- 操作系统接口模块

常见的操作系统相关功能。[https://docs.python.org/zh-cn/3/library/os.html](https://docs.python.org/zh-cn/3/library/os.html)

### io --- 处理流的核心工具
[https://docs.python.org/zh-cn/3/library/io.html](https://docs.python.org/zh-cn/3/library/io.html)

### path.py

更方便的处理文件路径 https://github.com/jaraco/path.py

### shutil
提供了一些比较高级的文件和目录操作（目录递归复制、目录递归删除、目录压缩打包...）
示例：
```
import shutil
shutil.rmtree(xxxx)
```

### glob
用于查找文件，【支持通配符】（* 和 ?）

```
import glob
for file in glob.glob("./*.txt") :
    print(file)
```

### fnmatch
用于匹配文件名（支持通配符，类似上面的 glob）
```
import os, fnmatch

for file in os.listdir(".") :
    if fnmatch.fnmatch(file, "*.txt") :
        print(file)
```
### tempfile
安全地生成临时文件或临时目录

### StringIO

属于Python里面io模块的一种，和文本io类似，只不过是在内存里处理文本流数据。

```
f = io.StringIO("some initial text data")
```

https://docs.python.org/zh-cn/3/library/io.html?highlight=stringio

### csv --- CSV 文件读写
[https://docs.python.org/zh-cn/3/library/csv.html](https://docs.python.org/zh-cn/3/library/csv.html)

### configparser --- Configuration file parser

[https://docs.python.org/zh-cn/3/library/configparser.html](https://docs.python.org/zh-cn/3/library/configparser.html)


## 数据压缩和存档

### zlib --- 与 gzip 兼容的压缩

此模块为需要数据压缩的程序提供了一系列函数，用于压缩和解压缩。这些函数使用了 zlib 库。zlib 库的项目主页是 http://www.zlib.net. 版本低于 1.1.3 的 zlib 与此 Python 模块之间存在已知的不兼容。1.1.3 版本的 zlib 存在一个安全漏洞，我们推荐使用 1.1.4 或更新的版本。

zlib 的函数有很多选项，一般需要按特定顺序使用。Python文档没有覆盖全部的用法。更多详细信息请于 http://www.zlib.net/manual.html 参阅官方手册。

https://docs.python.org/zh-cn/3/library/zlib.html

### gzip --- 对 gzip 格式的支持
### bz2 --- 对 bzip2 压缩算法的支持
### lzma --- 用 LZMA 算法压缩
### zipfile --- 使用ZIP存档
### tarfile --- 读写tar归档文件

## 异常处理

### Exception

[https://docs.python.org/zh-cn/3/library/exceptions.html#Exception](https://docs.python.org/zh-cn/3/library/exceptions.html#Exception)

## 线程与进程

### threading
提供了比较高层的线程封装 API。它本身包含了线程同步/互斥的机制。

代码示例——基于“函数”的线程
```
import threading
import time

def my_thread() :
    print("Thread started!")
    time.sleep(3)
    print("Thread finished!")

threading.Thread(target=my_thread).start()
```

代码示例——基于“类”的线程
```
import threading
import time
from __future__ import print_function

class MyThread(threading.Thread) :
    def run(self) :
        print("{} started!".format(self.getName()))
        time.sleep(3)
        print("{} finished!".format(self.getName()))

if __name__ == "__main__" :
    for n in range(10) :
        mythread = MyThread(name = "Thread-{}".format(n + 1))
        mythread.start()
        time.sleep(1)
```

### subprocess
用于进程管理，可以启动子进程，通过标准输入输出跟子进程交互。

代码示例——启动命令行进程，并获取该进程的标准输出
```
import subprocess
output = subprocess.check_output(["dir"])  # 获取当前目录的内容
output = subprocess.check_output(["netstat", "-an"])  # 获取当前网络链接
```

### multiprocessing
它是 2.6 版本加入到标准库的，其 API 接口的风格类似于 threading 模块。

它本身包含了进程同步/互斥的机制。

代码示例——利用其 Lock 机制，确保多个子进程的标准输出不会混杂（每次只有一个进程调用 print）。

```
from multiprocessing import Process, Lock

def f(lock, n) :
    lock.acquire()
    print("hello world %d" % n)
    lock.release()

if __name__ == "__main__" :
    lock = Lock()
    for num in range(10):
        Process(target=f, args=(lock, num)).start()
```



::: tip 学习路上遇到问题？

欢迎随时在[工单](https://github.com/de8ug/spt/issues)
或直接公众号`Python随身听`留言进行提问
:::
