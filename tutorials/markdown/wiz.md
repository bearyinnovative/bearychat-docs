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

其中前两点要特别注意的是，必须是评论或者编辑团队中其他成员新建的笔记才会有消息提醒，并且在第一次编辑和评论之后假如笔记创建者没有在为知笔记中读取你的评论和编辑的站内消息，那么之后对这个笔记的评论和编辑操作都不会再触发消息提醒，直到笔记创建者将之前的消息都标记已读，其中评论与编辑的操作互不影响。

![](/tutorials/image/wiz_markread.png)

## 完成设置

一切搞定! 你现在能够在 BearyChat 中收到来自 为知笔记 的提醒了!

![](/tutorials/image/wiz_notification.png)
