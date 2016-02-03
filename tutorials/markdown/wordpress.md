# BearyChat WordPress Webhooks 手动配置指南

WordPress Webhooks 功能可以通过 [HookPress](https://wordpress.org/plugins/hookpress/) 插件来实现。

## 博客文章发布推送

在 `Settings (配置)` - `Webhooks` 中创建一个 `publish_post` 事件，在 `URL` 中输入 `{{webhookUrl}}`。


并选取 **post_content** **post_title** **post_url** 三个字段（必选）：

![](/images/tutorial/wordpress_publish_post_bearychat.png)

## 博客页面发布推送

在 `Settings (配置)` - `Webhooks` 中创建一个 `publish_page` 事件，在 `URL` 中输入 `{{webhookUrl}}`。


并选取 **post_content** **post_title** **post_url** 三个字段（必选）：

![](/images/tutorial/wordpress_publish_page_bearychat.png)

## 新增评论推送

在 `Settings (配置)` - `Webhooks` 中创建一个 `comment_post` 事件，在 `URL` 中输入 `{{webhookUrl}}`。


并选取 **comment_content** **comment_author** 两个字段（必选）：

![](/images/tutorial/wordpress_comment_post_bearychat.png)

## 完成设置

保存上面的配置后，你现在就能够在 BearyChat 中收到 WordPress 的提醒了。

![](/images/tutorial/wordpress_webhooks_bearychat.png)
![](/images/tutorial/wordpress_in_bearychat.png)
