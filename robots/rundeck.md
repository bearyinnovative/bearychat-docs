# BearyChat Rundeck 手动配置指南

## 下载插件

在 [rundeck-bearychat-plugin 仓库](https://github.com/bearyinnovative/rundeck-bearychat-plugin/releases/latest)下载最新版本的插件，请下载 jar 文件而非源码文件。

## 安装插件

将下载得到的 rundeck-bearychat-plugin 插件 jar 文件复制到 Rundeck 安装根路径下的 libext 路径下即可，更多细节可以参考[官方文档](http://rundeck.org/docs/plugins-user-guide/installing.html#included-plugins)

## 设置插件

新建一个新的 Job 可以直接进入设置界面，或者选择一个已创建的需要添加 Webhook 提醒的 Job，点击「Edit this Job」进入 Job 设置界面

![](http://7jpt3p.com1.z0.glb.clouddn.com/Fj7UKNFy53yE_r7lXruDDiWLFlZn)

在 Job 设置界面中将「Send Notification?」选项勾选为「Yes」，然后在需要设置提醒的 Job 执行状态下面选上「BearyChat Rundeck WebHook」选项，然后将 BearyChat 生成的 Webhook 地址填入「WebHook URL」文本框中，点击保存即可

![](http://7jpt3p.com1.z0.glb.clouddn.com/FtRUUQn3wP7_pvVdnJtUSKr1d7UE)

## 完成设置

这样你就可以在 BearyChat 中收到来自 Rundeck 中 Job 执行状态的消息啦

![](http://7jpt3p.com1.z0.glb.clouddn.com/FhJoA4qOlfkv150xkebkAD3obLLr)
![](http://7jpt3p.com1.z0.glb.clouddn.com/FpIjdfO8CVPtj4PFcFQxK7kRa31v)

