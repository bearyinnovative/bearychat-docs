# BearyChat Jenkins 手动配置指南

## 进入 Jenkins 管理页面

在 Jenkins dashboard 中，在左边侧边栏，点击「Manage Jenkins」

![](/images/tutorial/jenkins_manage.png)

## 进入插件管理

点击「Manage Plugins」选项

![](/images/tutorial/jenkins_manage_plugins.png)

## 安装 BearyChat Jenkins 插件

点击「Available」标签，在「Filter」中搜索「bearychat」，勾选并安装插件。

![](/images/tutorial/jenkins_install_plugin.png)

## 设置全局 BearyChat Jenkins 插件

插件安装完成之后，回到「Manage Jenkins」，然后点击「Configure System」。

![](/images/tutorial/jenkins_configure_system.png)

找到「Global BearyChat Notifier Settings」，然后添加如下文本。

Team Subdomain: 在 https://example.bearychat.com 中，example 便是团队的 subdomain
Integration Token: 在 BearyChat 中的 Jenkins 机器人的 hook 地址中， 最后的部分便是 token。
Channel: 讨论组名称，如果指定的话，可以将 Jenkins 通知推送到该讨论组
Build Server URL: 团队的 Jenkins 服务器所在的地址，用于构建 Jenkins 通知中的链接等信息

Test Connection: 在填写上面的相关信息后，可以测试下是否配置成功

![](/images/tutorial/jenkins_global_bearychat_settings.png)

## 设置具体项目的 BearyChat Jenkins 提醒

在项目中，找到「Configure」菜单

![](/images/tutorial/jenkins_configure_project.png)

在「Post-build Actions」菜单中选择「Bearychat Notifications」

Subdomain, Token 和 Channel: 优先级高于全局设置，留空则会使用全局设置
Custom Message: 用户自定义消息，会伴随构建结果一同显示在 BearyChat 中

Test Connection: 用于测试是否配置正确

![](/images/tutorial/jenkins_bearychat_notifications.png)

## 完成设置

至此 Jenkins 设置完毕，团队已经可以接收 Jenkins 的构建结果了

![](/images/tutorial/jenkins_in_bearychat.png)
