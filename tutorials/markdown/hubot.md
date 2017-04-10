# BearyChat Hubot 机器人配置指南


## 部署 Hubot

[Hubot](https://hubot.github.com/) 是一个流行的机器人框架，由 GitHub 开源，有很多开源插件，任何人都可以定制、部署属于自己的 Hubot 来完成各种各样的功能。

我们提供了官方的 BearyChat Hubot 适配器 (adapter)：  [hubot-bearychat](https://github.com/bearyinnovative/hubot-bearychat)

具体的配置，请参考 [《BearyChat Hubot 安装教程(中文)》](https://github.com/bearyinnovative/hubot-bearychat/blob/master/README_CN.md) 或  [《BearyChat Hubot Setup Guide(English)》](https://github.com/bearyinnovative/hubot-bearychat/blob/master/README.md)


## 使用 Hubot

Hubot 比其他机器人有更丰富的功能，使用上也有一些区别：

1. Hubot 会出现在会话列表里，可以和 Hubot 进行私聊，你直接对它说的话都会得到响应。

  ![](/tutorials/image/hubot_p2p.png)

2. Hubot 可以被邀请到讨论组。

  ![](/tutorials/image/hubot_invite.png)

  在有 Hubot 的讨论组里，Hubot 可以 `hear` 到讨论组的所有对话，也可以对所有 @ 它的消息进行 `respond`。(只有运行在 `rtm` 模式下运行的 Hubot 支持 `hear`)

  具体 `hear` 和 `respond` 如何使用请阅读 Hubot 官方文档里，关于 [Hearing and responding](https://hubot.github.com/docs/scripting/#hearing-and-responding) 的说明。

  ![](/tutorials/image/hubot_channel.png)

3. Hubot 有在线状态，对于 `rtm` 模式下，在线状态意味着 BearyChat 和 Hubot 服务的连接是否正常，在 `http` 模式下，认为 Hubot 一直在线。

4. 可以在 npm 上通过关键词 [hubot-scripts](https://www.npmjs.com/browse/keyword/hubot-scripts) 来找到各种社区提供的 Hubot 脚本，让你的 Hubot 可以做更多事情。
