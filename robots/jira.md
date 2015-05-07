# BearyChat Jira 手动配置指南

## 进入Jira中你的项目页面

在右上角设置下拉菜单里面点击「System」按钮

![](/images/tutorial/jira_system.png)

## 进入「System」页面

然后在左侧边栏找到「WebHooks」按钮

![](/images/tutorial/jira_webhooks.png)

## 设置webhook

点击「Create WebHook」按钮。然后在弹出页面里面，在「Name」中填入你想取的名字，将 {{webhookUrl}} 填入「URL」中

![](/images/tutorial/jira_add_webhook.png)

选中所关心的 Events，并保存

![](/images/tutorial/jira_save_webhook.png)

## 设置完成

最后，你就能够在 BearyChat 的讨论组中，收到来自 Jira 的提醒啦!
