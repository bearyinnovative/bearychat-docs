# BearyChat Stash 手动配置指南

## 下载并安装 Stash2BearyChat 插件

在 [Stash2BearyChat 仓库](https://github.com/bearyinnovative/stash2bearychat/releases/latest)下载最新版本的插件，请下载 jar 文件而非源码文件。

## 安装插件

进入网址 http://{your-stash-site}/admin 里面的 ADD-ONS 中的 Manage add-ons 页面如下图

![](/images/tutorial/stash_manage_add_ons.png)

点击「Upload add-on」选项

![](/images/tutorial/stash_upload_add_ons.png)

点击选择文件，选择刚刚下载的插件 jar 文件。选择 Upload 上传

![](/images/tutorial/stash_uploading_add_ons.png)

## 设置 Stash2BearyChat 插件

插件安装完成之后，回到你想设置的仓库，然后点击左侧的「Settings」。

![](/images/tutorial/stash_repo_setting.png)

进入后找到「ADD_ONS」下的「BearyChat settings」选上你想要推送的类型，现在只支持 pull request 和 push 事件，之后再填写上你的 BearyChat Stash 机器人的 webhook url。点击Save保存。

保存后会刷新页面，刷新后似乎都没有变，但是实际上已经保存了，可以通过发一个 pull request 或者 push 来查看效果。下图就是 pull request 重新打开的事件消息。

![](/images/tutorial/stash_pull_request_msg.png)
