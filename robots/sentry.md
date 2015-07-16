# BearyChat Sentry 手动配置指南

## 安装 sentry-bearychat 插件

`pip install sentry-bearychat`

## 重启你的 Sentry 服务

## 登录你的 Sentry

进入你的项目页面，点击「Manage Integrations」

![](/images/tutorial/sentry_integrations.png)

## 启用插件

勾选复选框「Bearychat」, 并保存

![](/images/tutorial/sentry_bearychat.png)

## 设置 webhook

点击「Bearychat」插件

将 {{webhookUrl}} 粘贴到「Webhook」那个框中, 并点击保存

![](/images/tutorial/sentry_webhook.png)

## 完成设置

一切搞定! 你现在能够在 BearyChat 中收到来自 Sentry 的提醒了!

![](/images/tutorial/sentry_notification.png)
