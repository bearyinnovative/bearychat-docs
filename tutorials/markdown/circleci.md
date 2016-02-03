# BearyChat CircleCI 配置指南

## 添加 Webhook Url

在你的项目根目录下，修改或创建一个文件 `circle.yml`，并添加下面的内容

```
notify:
  webhooks:
    # A list of hook hashes, containing the url field
    - url: {{webhookUrl}}
```

## 完成设置

这个时候 CircleCI 的 Build 信息就会及时推送到你指定的讨论组了!
