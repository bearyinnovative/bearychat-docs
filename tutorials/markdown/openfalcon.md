# BearyChat Open-Falcon 手动配置指南

## 修改 Open-Falcon [alarm](https://github.com/open-falcon/falcon-plus/tree/master/modules/alarm) 模块的 cfg.json 文件

将 api 的 email 或者 im 的值修改为 {{webhookUrl}} 。

![](/tutorials/image/openfalcon_webhook.png)

重启 alarm 模块 `./open-falcon restart alarm` 。

## 完成设置

最后，Open-Falcon 机器人配置就完成了，你现在能够在 BearyChat 中收到来自 Open-Falcon 的提醒了。

![](/tutorials/image/openfalcon_notification.png)
