# BearyChat 金数据 手动配置指南
### 备注：只有付费的金数据账号才支持 webhook

## 进入金数据中「我的表单」页面

![](/images/tutorial/jinshuju_form.png)

## 进入表单「设置」页面, 设置 Webhook

进入表单详情，在顶部标签栏中点击「设置」，然后在左侧菜单栏里面点击「数据提交」标签，勾选页面底部的「将数据以JSON格式发送给第三方」选项，
在「HTTP POST 地址」中填入 {{webhookUrl}} 地址, 并点击「保存设置」

![](/images/tutorial/jinshuju_setting.png)
![](/images/tutorial/jinshuju_hook.png)

## 设置完成，发布表单

将表单的发布出去，无论是「直接访问网址」还是「二维码发布」，或是其他途径。
这样，当别人在你「发布」出去的表单中填写内容时，你就能够在 BearyChat 中收到提醒啦!

![](/images/tutorial/jinshuju_publish.png)
![](/images/tutorial/jinshuju_in_bearychat.png)
