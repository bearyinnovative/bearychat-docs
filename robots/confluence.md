# BearyChat Confluence 手动配置指南

## 下载插件

在 [bearychat-for-confluence 仓库](https://github.com/bearyinnovative/bearychat-for-confluence/releases/latest)下载最新版本的插件，请下载 jar 文件而非源码文件。

## 安装插件

进入 「Add-ons」 中的 「Manage add-ons」 页面，如下图

![](/images/tutorial/confluence_manage_add_ons.png)

点击「Upload add-on」选项，选择 bearychat-for-confluence 插件 jar 文件， 点击 「Upload」 上传

![](/images/tutorial/confluence_upload_add_ons.png)

## 设置插件

插件安装完成之后，侧边栏中会出现「BearyChat Configuration」选项，设置「Webhook URL」 选项并点击「Save」

![](/images/tutorial/confluence_set_webhook.png)

在「Space tools」选项中点击「Add-ons」标签，可以进一步设置 Webhook 的目标 channel，点击「save」
注：设置 channel 是可选项，如果不设置，则会发送到 BearyChat 中该 Confluence 机器人指定的 channel

![](/images/tutorial/confluence_set_channel.png)

## 完成设置

这样你就可以在 BearyChat 中收到来自 Confluence 中的消息啦

![](/images/tutorial/confluence_in_bearychat.png)
