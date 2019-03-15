# 自动化运维

## 执行Linux命令

### sh
https://github.com/amoffat/sh

这个项目可以用来取代标准库中的 subprocess；同时兼容 Python2 和 Python3。

使用它可以写出比 subprocess 更简洁、更优雅的代码。

代码示例——获取命令输出
```
from sh import ifconfig
print(ifconfig("wlan0"))
```

代码示例——命令行参数
```
from sh import curl
# 传统风格
curl("https://program-think.blogspot.com/", "-o", "test.html", "--silent")
# 命名参数风格
curl("https://program-think.blogspot.com/", o="test.html", silent=True)
```

代码示例——管道
```
from sh import ls, wc
print(wc(ls("/etc", "-1"), "-l"))
```

## 进程间通信
### signal
用于进程信号处理的标准库（主要用于 Linux & UNIX 系统）。

## 硬件
### keyboard
https://github.com/boppreh/keyboard

顾名思义，这个库让你可以进行各种键盘相关的操作，包括：模拟按键、键盘钩子（hook），按键记录及重放。

支持复杂的组合键。纯 python 代码代码，同时支持 Windows 和 Linux。

```
import keyboard

# 模拟按键。
keyboard.press_and_release("shift+s, space")

# 模拟按键，并执行相应代码。
keyboard.add_hotkey("page up, page down", lambda: keyboard.write("xxxx"))

# 等待特定按键，然后继续执行。
keyboard.wait("esc")

# 记录按键，直到用户按了 ESC；然后以3倍速重放刚才记录的按键。
recorded = keyboard.record(until="esc")
keyboard.play(recorded, speed_factor=3)
```

## 系统资源
### sys
访问由解释器使用或维护的变量和与解释器进行交互的函数
```
sys.argv     # 命令行参数 List，第一个元素是程序本身路径
sys.exit(0)  # 退出程序，正常退出时用 0 表示退出码
sys.version  # 获取 Python 解释程序的版本信息
```

### platform
提供了很多用于获取操作系统的信息的功能。
```
import platform

platform.platform()      # 获取操作系统名称及版本号，例如："Windows-7-6.1.7601-SP1"
platform.version()       # 获取操作系统版本号，例如："6.1.7601"
platform.architecture()  # 获取操作系统的架构，例如：("32bit", "WindowsPE")
```

### psutil
https://github.com/giampaolo/psutil

psutil（Python system and process utilities）是一个跨平台的进程管理和系统工具库，可以处理”CPU、内存、磁盘、网络、用户“等信息。

主要用于系统资源的监控，分析，以及对进程进行一定的管理。
```
import psutil

psutil.cpu_count()       # 获取 CPU 数量
psutil.cpu_freq()        # 获取 CPU 频率

psutil.virtual_memory()  # 获取内存信息
psutil.swap_memory()     # 获取交换分区（换页文件）信息

psutil.disk_partitions() # 获取分区信息
psutil.disk_usage('/')   # 获取某分区的使用情况

psutil.users()           # 获取用户信息

p = psutil.Process(pid)  # 根据给定的 pid 获得进程对象
p.name()                 # 进程名
p.exe()                  # 可执行程序的全路径
p.cwd()                  # 进程的当前目录
p.cmdline()              # 启动进程的命令行参数
```

### syslog
可以很方便地跟 POSIX 的 syslog 服务进行交互

### PyWin32
http://python.net/crew/mhammond/win32/

这个第三方库封装了 Windows API 及 COM API。通过它可以方便地用 Python 进行 Windows 编程（调用 COM 组件、编写 Windows 服务、等）。

::: tip 学习路上遇到问题？

欢迎随时在[工单](https://github.com/de8ug/spt/issues)
或直接公众号`sublimePython`留言进行提问
:::
