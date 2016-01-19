# BearyChat Zendesk 手动配置指南

## 添加「URL target」

在 Zendesk 侧边栏「Admin」中，点击「Extensions」，然后点击「add target」并选择「URL target」

![](http://7jpt3p.com1.z0.glb.clouddn.com/Fhgm6ZfJyeau5R2pzA2NU8S1c8hX)

![](http://7jpt3p.com1.z0.glb.clouddn.com/FjKgCIMZPrXq7UkTWgsLZG7WdqI9)

## 配置「URL target」
 - Title：用来在后面的触发器中辨别是本目标
 - Url：在 BearyChat 中添加 Zendesk 机器人时生成的 Hook 地址
 - Method：只能是 POST
 - Attribute Name：只能是 payload
 将对应的内容填写好，选择「Create target」并点击「submit」

![](http://7jpt3p.com1.z0.glb.clouddn.com/Ft8CFm5MIMCEUeIA7pwgWq-fM8hy)

## 添加「Trigger」

在 Zendesk 侧边栏「Admin」中，点击「Triggers」，然后点击「add trigger」

![](http://7jpt3p.com1.z0.glb.clouddn.com/FkO-jbHwKNFoBUf-ZkI5Ii8aAO_t)

## 配置 「Trigger」
 - 设置触发器的条件：在「Meet any of the following conditions」中，根据自己的需求来选择 （建议按照图中样式来设置）
 - 执行以下动作：在「Perform these actions」中选择「Notifications:Notify target」并选择刚刚设置好的 「URL target」
 - 消息内容：在「Message」中，填写如下内容：
 ```
{"id": "{{ticket.id}}", "link":"{{ticket.link}}", "title": "{{ticket.title}}", "description" :"{{ticket.description}}", "priority": "{{ticket.priority}}", "status": "{{ticket.status}}", "requester":"{{ticket.requester.name}}", "assignee" :"{{ticket.assignee.name}}", "due" :"{{ticket.due_date}}"}
 ```

![](http://7jpt3p.com1.z0.glb.clouddn.com/FjHlJZy9nY-K72VI1baiG9sLGKro)

##  完成设置

以上便完成了 Zendesk BearyChat webhook 的设置。 你便可以在 BearyChat 中实时的收到来自 Zendesk 的消息提醒了

![](http://7jpt3p.com1.z0.glb.clouddn.com/Fl-gBDZXHhj5NadVmAowiKpKYYMs)

