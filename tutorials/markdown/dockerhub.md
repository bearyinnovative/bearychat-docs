# BearyChat DockerHub 手动配置指南

## 进入 DockerHub 自动化构建仓库（AUTOMATED BUILD）添加 webhook

进入你管理的 DockerHub Automated build 仓库页面，依次点击「Webhooks」、「CREATE A WEBHOOK」来添加 webhook

![](/tutorials/image/dockerhub_add_webhook.png)

## 设置 webhook

将 {{webhookUrl}} 填入「Webhook URL」， 并且保存

![](/tutorials/image/dockerhub_webhook_url.png)

## 完成设置

最后，DockerHub 手动配置就完成了，你现在能够在 BearyChat 中收到来自 DockerHub 的提醒了。
