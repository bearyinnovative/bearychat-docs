# BearyChat Email 机器人配置指南

### Email 机器人配置说明 ###

每个 Email 机器人都有一个自己的邮箱地址 （地址看起来有点长，但这是为了保证唯一且不易被盗用）

只要给这个地址发邮件，就都会发一条消息给你指定的发送目标，你现在就可以试试。

![](/images/tutorial/email_hello.png)

邮件发出后稍等片刻你就会收到消息，但更常见的使用场景是设置邮件自动转发。比如将标题带有“会议记录”的邮件发送到指定讨论组。

下面是针对 QQ 邮箱和 Gmail 设置转发过滤器的操作指南，使用其他邮箱的用户如果设置出现问题可以反馈或发邮件联系我们 support@bearyinnovative.com。


## 进入自己邮箱的设置界面

![](/images/tutorial/email_setting.png)


## Gmail 邮箱添加转发邮件地址，(QQ 邮箱用户可以跳过这个步骤)

![](/images/tutorial/gmail_forward.png)
将机器人的邮箱地址 `{{emailAddress}}` 添加到转发列表里，为了安全起见，Gmail 设置了验证步骤，添加后会自动发一个验证链接给机器人，去消息界面点击即可。




## 添加过滤器

![](/images/tutorial/email_filter.png)


## 设置转发规则

通过过滤器/规则，将邮件标题带有“会议记录”做为匹配条件，转发地址里填写/选择机器人的邮件地址。

![](/images/tutorial/qq_filter.png)
![](/images/tutorial/gmail_filter.png)


## 设置成功

以后“会议记录”的邮件机器人都会帮你发到讨论组里啦，赶紧去试试吧。

![](/images/tutorial/email_message.png)
