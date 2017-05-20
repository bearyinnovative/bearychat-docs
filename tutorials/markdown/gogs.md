# Gogs 手动配置指南

## 进入 Dashboard 界面
选择你的仓库，点击「仓库设置」 进入设置界面

![](/tutorials/image/gogs_dashboard.png)

## 进入 Settings 界面
 点击「管理 Web 钩子」 进入 Webhook 设置界面，点击「添加 Web 钩子」并选择 Gogs

![](/tutorials/image/gogs_setting.png)

## 设置 Webhook

将 {{webhookUrl}} 填入「推送地址」中, 「数据格式」 选择 `application/json`，然后点击「添加 Web 钩子」按钮提交

![](/tutorials/image/gogs_webhook.png)

## 完成设置

最后，这个 Gogs 机器人就配合完成啦! 在 Gogs 服务中的 `push` 就能够出现 BearyChat 中了!

![](/tutorials/image/gogs_bearychat.png)
