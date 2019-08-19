# 说明

这里的内容都和编程工具有关

- 工具使用
- 常见问题

## vscode与anaconda（或miniconda）

### 在vscdoe集成的终端执行py文件出错`No such file or directory`

完整报错为：
```
bash: C:UserssothiMiniconda3/etc/profile.d/conda.sh: No such file or directory

CommandNotFoundError: Your shell has not been properly  # 找不到上面的sh文件，因为路径识别错了
configured to use 'conda activate'.
If your shell is Bash or a Bourne variant, enable conda for the current user with  如果shell是bash，让执行下面的命令

    $ echo ". C:\Users\sothi\Miniconda3/etc/profile.d/conda.sh" >> ~/.bashrc

or, for all users, enable conda with  # 或这个，用于所有用户

    $ sudo ln -s C:\Users\sothi\Miniconda3/etc/profile.d/conda.sh /etc/profile.d/conda.sh

The options above will permanently enable the 'conda' command, but they do NOT
put conda's base (root) environment on PATH.  To do so, run  # 上面只是激活conda命令，但是如果把conda放到环境变量，还需要执行

    $ conda activate

in your terminal, or to put the base environment on PATH permanently, run

    $ echo "conda activate" >> ~/.bashrc

Previous to conda 4.4, the recommended way to activate
conda was to modify PATH in
your ~/.bashrc file.  You should manually remove the line that looks like  # 在4.4版本之前，conda自动添加了下面的语句，把他们删掉

    export PATH="C:\Users\sothi\Miniconda3/bin:$PATH"

^^^ The above line should NO LONGER be in your ~/.bashrc file! ^^^
```
关键点，DE8UG在上面加了中文注释

解决方案： 
在终端里执行这两句：
```
echo ". C:\Users\sothi\Miniconda3/etc/profile.d/conda.sh" >> ~/.bashrc
echo "conda activate" >> ~/.bashrc
```
然后用`vi ~/.bashrc`打开文件查看
应该是有这两行，那么说明已经ok，再出现上面的内容只是提示而已。
```
. C:\Users\sothi\Miniconda3/etc/profile.d/conda.sh
conda activate
```
