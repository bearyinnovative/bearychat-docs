# BearyChat 逸创云客服 手动配置指南

## 进入逸创云客服控制台页面

在逸创云客服控制台中，在左边侧边栏，点击「功能管理」，然后点击「提醒目标 Webhook」，「添加新的提醒目标」

![](http://7jpt3p.com1.z0.glb.clouddn.com/FpKExeXOrxAcp5VvvE-xc7-nmzUw)

## 添加提醒目标
 - 目标名称：用来在后面的动作设置中辨别是本目标
 - Hook 地址：在 BearyChat 中添加逸创云客服机器人时生成的 Hook 地址
 - 讨论组：在 BearyChat 中添加逸创云客服机器人时，选择的讨论组名称，可不填
 - 测试：此时可以点击「测试」按钮，来查看BearyChat 能否正确的收到来自逸创云客服的测试消息了
 将对应的内容填写好，点击「提交」

![](http://7jpt3p.com1.z0.glb.clouddn.com/FgWwrn8taR9KNQUoemqX12RY0vG8)

## 添加「触发器任务/提醒任务」

点击「触发器任务/提醒任务」面板中，点击「添加新的触发器任务」来添加新的触发器

![](http://7jpt3p.com1.z0.glb.clouddn.com/Fm6Qj3EoykAzBPHJgmyL6q-iQ3Sg)

## 设置 「触发器任务/提醒任务」
 - 设置触发器的条件：选择「满足以下所有条件」或「满足以下任一条件」，根据自己的需求来选择 （这是逸创云客服的关键触发条件，满足该条件才会向 BearyChat 讨论组中推送消息）
 - 执行以下动作：选择「通知:发送消息到指定目标」并选择刚刚设置好的 Hook 目标
 - 消息内容：具体的内容，可以根据「替换标签」来选择将更加有价值的信息推送到 BearyChat 讨论组中 （具体「替换标签」可点击下方的「查看所有替换标签」）

![](http://7jpt3p.com1.z0.glb.clouddn.com/FnLYWifaehcpoDr8TPq-849n70K-)

##  完成设置

以上便完成了逸创云客服的 BearyChat webhook 的设置。根据设置的触发条件，做相应的动作，便会有内容推送到 BearyChat 讨论组中（本实例中的触发条件是「发表评论」）

![](http://7jpt3p.com1.z0.glb.clouddn.com/Fr-LQPN7Ha8P6BJBebZq21-OqnOu)

##  一切工作搞定

最后，你便可以在 BearyChat 中实时的收到来自逸创云客服系统的满足触发条件的消息了

![](http://7jpt3p.com1.z0.glb.clouddn.com/FqdDibC2O4xoqlONR4DstzNtDgCS)

