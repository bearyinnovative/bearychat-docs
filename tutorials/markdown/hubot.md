# BearyChat Hubot 机器人配置指南

## 在 BearyChat 中添加 Hubot 机器人

Hubot 机器人需要做一些必要的设置：

 1. Hubot URL. 目前 BearyChat 的 Hubot 机器人是通过 HTTP 机制实现的，Hubot URL 是可以访问私有部署 Hubot 机器人的链接

 2. 添加 Hubot 机器人到讨论组. 讨论组中的消息，只有 Hubot 机器人加入后才会监听

## 私有部署 Hubot 机器人

 1. 按照 [BearyChat Hubot 安装教程](https://github.com/bearyinnovative/hubot-bearychat) 将 Hubot 服务以及 hubot-bearychat adapter 安装完毕

 2. BearyChat Hubot Token 是启动 hubot-bearychat 的必要变量，可以使用多个 Token 并用逗号分隔。私有部署的 Hubot 机器人只会接受指定 Token 的 BearyChat Hubot 机器人的请求

## 示例

 - 配置 Hubot 机器人

 ![](/tutorials/image/config_hubot_in_bearychat.png)

 - 将一个配置好的 Hubot 机器人邀请进入一个讨论组后，可以通过 at 该 Hubot 机器人跟私有部署的 Hubot 机器人通信

 ![](/tutorials/image/hubot_in_bearychat_channel.png)

 - 可以跟 Hubot 机器人私聊，此时不需要 at 该机器人

 ![](/tutorials/image/hubot_in_bearychat_p2p.png)

## 说明

 - 为了方便调试，可以打开 Hubot 的调试模式： `export HUBOT_LOG_LEVEL="debug"`

 - 目前 hubot-bearychat 的 adapter 使用的是内置的 express 模块，默认监听 8080 端口，确认防火墙允许访问该端口，或者也可以修改环境变量 `EXPRESS_PORT` 或 `PORT` 来监听别的端口

 - 私有部署 Hubot 机器人在接收到请求后，需要有专门的脚本来处理接收到的数据，用户可以自行添加。但 Hubot 默认支持一些简单的交互，如 ping， echo， time 等，可以用来帮助对接 BearyChat 的 Hubot 机器人

 - 更加详细的配置和开发文档，请参考 Hubot 官方文档：https://hubot.github.com
