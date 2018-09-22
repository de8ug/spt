# vscode

## 1.错误提示

### Q：不是每一个红波浪线都是错误，都需要修改

A: 看下面这个地方：

![](http://i2.51cto.com/images/blog/201805/02/09ed10b3ffa59307755c68071f457961.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=)



这里的from确实标记了红色波浪线，鼠标放上去还有提示：

![](http://i2.51cto.com/images/blog/201805/02/2d1aa1fbf1db30f45d84ee14929bf608.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=)


但是，这里并不需要修改，因为pep8检查很严格，我们这里前面是针对整个工程，把工程目录添加到了环境变量在前，所以这里不需要修改。

**这里可以简单记作：只有运行python脚本的时候运行失败了，才是必须要修改的错误**。

其他提示：比如空多少行，空多少格，单行字符串字数过多等，都可以课上的说明为主，忽略多余的警告提示。



##  2.插件安装

- 默认Py开头的，在需要时候会有提示，都安装
- 数据库相关的不用安装



## 3. git

vscode与git有很好的集成，我们需要做的就是安装git软件。从淘宝的源下载最新版安装。全都默认即可。

https://npm.taobao.org/mirrors/git-for-windows/



## 4.关于debug调试

### 使用默认安装的Python配置(知道就行了)

这时候直接点击调试中的绿色箭头，然后选择Python即可。

![](http://i2.51cto.com/images/blog/201805/02/79f900b8c6eed746e9da85887ce4ea72.gif)


### 自定义配置Python的debug环境（建议用这个）



![](http://sublimepython.top/img/vscode-gif2.gif)

如图所示：

- 选择添加配置
- 自动出现.vscode目录和launch文件。甚至还有一些提示框，不用管，这一步已经好了
- 然后手动在.vscode新建settings.json，把下面的内容贴进去，注意第一个python的路径，改成你机器上的。*粘贴时候包含前后的大括号啊！*

```
{
        "python.pythonPath": "C:\\Users\\sothi\\Miniconda3\\envs\\de8ug\\python.exe",
        "python.linting.pylintEnabled": false,
        "python.linting.pep8Enabled": true,
        "python.linting.lintOnSave": true,
        "python.formatting.provider": "yapf"
}
```

手动配置的好处：你能清楚的知道自己当前这个工程用的哪个python环境。这个工程指的就是打开的这个目录，也就是包含.vscode目录的工程目录。这就可以不同目录有自己独特的开发环境了。

**这个你以后写的工程多了，开发环境各种各样，就知道好处了，到时候想起来这里[http://blog.51cto.com/de8ug/2110764](http://blog.51cto.com/de8ug/2110764)，记得回来点个赞，留个言。**



## 5. 更多参考


- [pep8](https://www.python.org/dev/peps/pep-0008/)，只是一个样式指南，并不一定必须按这个来做。
- [git-for-windows](https://npm.taobao.org/mirrors/git-for-windows/)
- [vscode官网](https://code.visualstudio.com/docs)


> ###### 文字版权归sublimePython.top所有，转载请注明出处。