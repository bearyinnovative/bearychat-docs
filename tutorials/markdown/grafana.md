# BearyChat Grafana 手动配置指南

## 进入 Grafana 设置页面添加 webhook

进入你管理的 GitHub 项目页面，依次点击「Alerting」、「Notifications」、「New Notification」来添加 Notification

## 设置 webhook

将 `type` 改为 `webhook`

选中 `Send on all alerts`

将 `Http Method` 选为 `POST`

将 {{webhookUrl}} 填入「Url」, 并且保存


![](/tutorials/image/grafana_webhook.png)


## 添加 alert

![](/tutorials/image/grafana_alert.png)

## 完成设置

最后，Grafana 手动配置就完成了 ，你现在能够在 BearyChat 中收到来自 的提醒了。

