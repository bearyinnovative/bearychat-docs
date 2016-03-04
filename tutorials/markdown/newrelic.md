# BearyChat NewRelic 手动配置指南

NewRelic 提供了两种设置 Webhook 的机制在 BearyChat 中都支持，新版的 Webhook 机制对于一些新注册用户不开放可以使用旧版来进行集成，对于新旧版都可以使用的用户可以根据喜好来选择，也可以同时使用

### 旧版配置指南

## 添加 Webhook 提醒

* 点击「Alerts」按钮，再点击「Channels and groups」侧边栏菜单 再点击「Create channel」按钮 再点击「Webhook」选项

![](/tutorials/image/newrelic_old_webhook_step0.png)

* 在「Webhook name」中填上这个通知通道的名字，在「Webhook URL」中填上 BearyChat 生成的 Webhook 地址

![](/tutorials/image/newrelic_old_webhook_step1.png)

## 添加警告策略(以设置应用警告策略为例，设置服务器警告策略步骤相同)

* 点击「Alerts」按钮，再点击「Application policies」侧边栏菜单(如果是服务器警告策略请点击「Server policies」) 再点击「Create application policy」按钮 然后输入警告策略的名字 最后点击「Create」按钮

![](/tutorials/image/newrelic_old_alertpolicy_step0.png)

* 点击「Applications」菜单，然后点击「Assign applications」按钮

![](/tutorials/image/newrelic_old_alertpolicy_step1.png)

* 勾选上需要绑定警告策略的应用，然后点击「Assign applications」按钮

![](/tutorials/image/newrelic_old_alertpolicy_step2.png)

## 设置 Webhook 警告

* 点击「Alert channels」菜单，然后点击「Select channels」按钮

![](/tutorials/image/newrelic_old_alertpolicy_notificationchannel_step0.png)

* 在「Webhook」板块中勾选上需要绑定的消息提醒通道，然后点击「Save now」按钮

![](/tutorials/image/newrelic_old_alertpolicy_notificationchannel_step1.png)

## 完成设置

最后，这个 NewRelic 机器人就设置完成啦! 你现在能够在 BearyChat 中收到来自 NewRelic 的提醒了!

![](/tutorials/image/newrelic_old_notify_sample.png)

### 新版配置指南

## 添加 Webhook 提醒

* 点击「Alerts New」按钮，再点击「Notification channels」菜单 再点击「Channels」选项 再点击「Create a notification channel」

![](/tutorials/image/newrelic_webhook_step0.png)

* 然后选择「Webhook」选项

![](/tutorials/image/newrelic_webhook_step1.png)

* 在「Channel name」中填上这个通知通道的名字，在「Base Url」中填上 BearyChat 生成的 Webhook 地址

![](/tutorials/image/newrelic_webhook_step2.png)

* 然后点击「Use Custom Payload」选项，选择「Payload Type」为「JSON」，然后点击「Create channel」按钮

![](/tutorials/image/newrelic_webhook_step3.png)

## 添加警告策略

* 点击「Alerts New」按钮，再点击「Alert policies」菜单 再点击「New alert policy」按钮

![](/tutorials/image/newrelic_alertpolicy_step0.png)

* 为这个新建的警告策略起一个名字，然后点击「Create a condition」

![](/tutorials/image/newrelic_alertpolicy_step1.png)

* 在设置 condition 的第二步选择要为这个警告策略绑定的监控实例，在该实例上打钩

![](/tutorials/image/newrelic_alertpolicy_step2.png)

## 设置 Webhook 警告

* 选择刚刚创建的警告策略，然后点击「Notification channels」选项，在点击「Add notification channels」按钮

![](/tutorials/image/newrelic_alertpolicy_notificationchannel_step0.png)

* 在弹出的对话框中选择「Webhook」文件夹

![](/tutorials/image/newrelic_alertpolicy_notificationchannel_step1.png)

* 然后选择需要绑定到当前警告策略的 Webhook 实例，在该实例上打钩，然后点击「Update policy」按钮

![](/tutorials/image/newrelic_alertpolicy_notificationchannel_step2.png)

## 完成设置

最后，这个 NewRelic 机器人就设置完成啦! 你现在能够在 BearyChat 中收到来自 NewRelic 的提醒了!

![](/tutorials/image/newrelic_notify_sample.png)
