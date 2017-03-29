# BearyChat Grafana 手动配置指南

## 配置 `AWS S3` (可选)

修改 `/etc/grafana/grafana.ini` 中 `External image storage`


```
#################################### External image storage ##########################
[external_image_storage]
provider = s3

[external_image_storage.s3]
## S3 Global
## https://BUCKET_NAME.s3-REGION.amazonaws.com
## S3 Beijing
## https://BUCKET_NAME.s3-REGION.amazonaws.com.cn
## e.g. S3 Beijing
bucket_url = https://grafana.s3-cn-north-1.amazonaws.com.cn

access_key = YOUR_ACCESS_KEY
secret_key = YOuR_SECRET_KEY
```

## 进入 Grafana 设置页面添加 webhook

进入你管理的 Grafana 页面，依次点击「Alerting」、「Notifications」、「New Notification」来添加 Notification

## 设置 webhook

将 `type` 改为 `webhook`

选中 `Send on all alerts`

将 `Http Method` 选为 `POST`

将 {{webhookUrl}} 填入「Url」, 并且保存


![](/tutorials/image/grafana_webhook.png)


## 添加 alert

![](/tutorials/image/grafana_alert.png)

## 完成设置

最后，Grafana 手动配置就完成了 ，你现在能够在 BearyChat 中收到来自Grafana的提醒了。

## 效果图(需要配置 `AWS S3`)
![](/tutorials/image/grafana_demo.png)

