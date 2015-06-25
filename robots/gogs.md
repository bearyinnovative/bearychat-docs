# gogs 手动配置指南

## 进入 dashboard 界面
 点击「Settings」 进入设置界面

![](/images/tutorial/gogs_dashboard.png)

## 进入 Setting 界面
 点击「Add Webhook」 进入 Webhook 设置界面

![](/images/tutorial/gogs_setting.png)

## 设置 webhook

将 {{webhookUrl}} 填入「Payload URL」中, 「Content Type」 选择 `application/json`，然后点击 Add 按钮提交

![](/images/tutorial/gogs_webhook.png)

## 完成设置

最后，这个 gogs 机器人就配合完成啦! 在 gogs 服务中的 `push` 就能够出现 BearyChat 中了!

![](/images/tutorial/gogs_bearychat.png)
