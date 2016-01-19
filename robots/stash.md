# BearyChat Stash 手动配置指南

## 下载并安装 Stash2BearyChat 插件

在 [Stash2BearyChat 仓库](https://github.com/bearyinnovative/stash2bearychat/releases/latest)下载最新版本的插件，请下载 jar 文件而非源码文件。

## 安装插件

进入网址 http://{your-stash-site}/admin 里面的 ADD-ONS 中的 Manage add-ons 页面如下图

![](http://7jpt3p.com1.z0.glb.clouddn.com/FswTt1llAdRvsFHLJITxOKEwi70V)

点击「Upload add-on」选项

![](http://7jpt3p.com1.z0.glb.clouddn.com/FvxCly8hz7tFZR5ecSzJMHoyli9W)

点击选择文件，选择刚刚下载的插件 jar 文件。选择 Upload 上传

![](http://7jpt3p.com1.z0.glb.clouddn.com/FsPiMBqCVkYpJMF86anCpglxUSWw)

## 设置 Stash2BearyChat 插件

插件安装完成之后，回到你想设置的仓库，然后点击左侧的「Settings」。

![](http://7jpt3p.com1.z0.glb.clouddn.com/FpG0VZSHvm04tTpWLRuk0MDmJ9hO)

进入后找到「ADD_ONS」下的「BearyChat settings」选上你想要推送的类型，现在只支持 pull request 和 push 事件，之后再填写上你的 BearyChat Stash 机器人的 webhook url。点击Save保存。

保存后会刷新页面，刷新后似乎都没有变，但是实际上已经保存了，可以通过发一个 pull request 或者 push 来查看效果。下图就是 pull request 重新打开的事件消息。

![](http://7jpt3p.com1.z0.glb.clouddn.com/FnEx8s7A9AaHQzkgJry-2EZYBCEv)
