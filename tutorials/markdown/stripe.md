# BearyChat stripe 机器人手动配置指南

## 登录 [stripe](https://dashboard.stripe.com/login) dashboard 页面

点击右侧导航栏中的「webhook」。

![](/tutorials/image/stripe_webhook.png)

## 设置 webhook

点击 「Settings...」,再点击「Add endpoints」,在弹出的窗口中，将 {{ webhookUrl }} 填入 URL 中，并点击「Create endpoint」。

![](/tutorials/image/stripe_settings.png)
![](/tutorials/image/stripe_add_url.png)

## 设置完成

- 保存以后，stripe 即配置完成。你现在可以在讨论组中收到来自 stripe 的消息提醒了。
