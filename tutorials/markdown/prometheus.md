# Prometheus Alertmanager 手动配置指南

## 将如下内容添加到 alertmanager.yml 文件中

```
receivers:
    - name: '<receiver 名称>'
      webhook_configs:
          - url: '{{webhookUrl}}'
```

## 完成设置

保存后 Prometheus alertmanager 配置即可完成，你现在可以在 BearyChat 讨论组中收到来自 alertmanager 的提醒了。
