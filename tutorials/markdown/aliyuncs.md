# BearyChat 阿里云容器服务 手动配置指南

## 进入阿里云容器服务仓库管理页面

进入[容器 Hub 服务](https://cr.console.aliyun.com)页面，点击管理，进入某个仓库的管理页面

![](/tutorials/image/aliyuncs_setting.png)

## 设置 webhook

在管理页面，依次点击「webhook」、「添加一条」来添加 webhook

![](/tutorials/image/aliyuncs_webhooks.png)

填入 Webhook 名称，之后之后将 {{webhookUrl}} 填入「Webhook URL」中，并点击「确认」进行保存

![](/tutorials/image/aliyuncs_create_webhook.png)

## 完成设置

最后，阿里云容器服务机器人配置就完成了，你现在能够在 BearyChat 中收到来自阿里云容器服务的提醒了。

![](/tutorials/image/aliyuncs_notification.png)
