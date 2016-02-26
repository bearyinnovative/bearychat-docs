# BearyChat 为知笔记 手动配置指南

## 登录为知笔记账号

选择要进行设置 WebHook 的群组点击对应的齿轮按钮进入群组设置界面

![](/tutorials/image/wiz_projects.png)

## 进入「企业群组信息」界面，点击「消息推送」菜单按钮

点击「添加 WebHook」按钮

![](/tutorials/image/wiz_set_webhook1.png)

在「URL 地址」文本框中输入 {{webhookUrl}} 并点击「确认」

![](/tutorials/image/wiz_set_webhook2.png)

## 注意事项

根据 [为知笔记的文档](http://www.wiz.cn/wiz-webhook.html) 有三种操作会触发消息提醒

* 编辑笔记
* 群组笔记有评论
* 笔记标题或评论中有 @all 消息

在为知笔记中，编辑和评论笔记是两个独立的操作，互不影响。通知提醒仅在评论或编辑他人创建的文档时才会发出，如文档原创建者未能及时阅读编辑或评论提醒，则后续不再触发此种操作的提醒功能，直到原创建者将前一次相应类别提醒消息标记为已读。

![](/tutorials/image/wiz_new_feeds.png)

## 完成设置

一切搞定! 你现在能够在 BearyChat 中收到来自 为知笔记 的提醒了!

![](/tutorials/image/wiz_notification.png)
