# BearyChat kf5 手动配置指南

## 进入 kf5 控制台页面

在 kf5 dashboard 中，在左边侧边栏，点击「功能管理」，然后点击「提醒目标 Webhook」，「添加新的提醒目标」

![](/images/tutorial/kf5_step1.png)

## 添加提醒目标
 - 目标名称：用来在后面的动作设置中辨别是本目标
 - Hook 地址：在 BearyChat 中添加 kf5 机器人时生成的 Hook 地址
 - 讨论组：在 BearyChat 中添加 kf5 机器人时，选择的讨论组名称，可不填
 - 测试：此时可以点击「测试」按钮，来查看BearyChat 能否正确的收到来自 kf5 的测试消息了
 将对应的内容填写好，点击「提交」

![](/images/tutorial/kf5_step2.png)

## 添加「触发器任务/提醒任务」

点击「触发器任务/提醒任务」面板中，点击「添加新的触发器任务」来添加新的触发器

![](/images/tutorial/kf5_step3.png)

## 设置 「触发器任务/提醒任务」
 - 设置触发器的条件：选择「满足以下所有条件」或「满足以下任一条件」，根据自己的需求来选择 （这是 kf5 的关键触发条件，满足该条件才会向 BearyChat 讨论组中推送消息）
 - 执行以下动作：选择「通知:发送消息到指定目标」并选择刚刚设置好的 Hook 目标
 - 消息内容：具体的内容，可以根据「替换标签」来选择将更加有价值的信息推送到 BearyChat 讨论组中 （具体「替换标签」可点击下方的「查看所有替换标签」）

![](/images/tutorial/kf5_step4.png)

##  以上便完成了 kf5 的 BearyChat webhook 的设置

根据设置的触发条件，做相应的动作会有内容推送到 BearyChat 讨论组中，本实例中的触发条件是「发表评论」

![](/images/tutorial/kf5_step5.png)

## 最后，你 便可以在 BearyChat 中实时的收到来自 kf5 系统的满足触发条件的消息了。一切工作就此搞定！

![](/images/tutorial/kf5_step6.png)

