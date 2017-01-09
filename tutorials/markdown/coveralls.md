# BearyChat coveralls 机器人手动配置指南

## 登录 [coveralls.io](https://coveralls.io) 并按照指引配置好 repo

## 设置 webhook

在 coveralls.io 的 repo 页面中，点击左侧导航栏中的 「Settings」，跳转到 repo 设置页面。

接着点击左侧导航 「Notifications」 ，进入项目通知设置页面。

选择 「WEBHOOK」 ，点击右侧的 「CONFIGURE」 按钮，将 {{ webhookUrl }} 填入 URL 文本框中，并点击 「SAVE NOTIFICATION」

![](/tutorials/image/coveralls.png)

## 设置完成

保存以后，coveralls 即配置完成。你现在可以在讨论中收到来自 coveralls 的消息了。
