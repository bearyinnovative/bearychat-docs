# BearyChat Hubot 机器人配置指南

## 在 BearyChat 中添加 Hubot 机器人

Hubot 机器人目前支持两种运行模式：

- `rtm` 模式
- `http` 模式

如果使用 `http` 模式，需要在 「Hubot URL」中填写私有部署的 Hubot 机器人服务链接。
关于两种模式的详细介绍请参考 [hubot-bearychat](https://github.com/bearyinnovative/hubot-bearychat)
的相关文档。

创建之后，需要把 Hubot 添加到指定的讨论组，这样 Hubot 才能监听到讨论组的消息。

## 私有部署 Hubot 机器人

1. 按照 [BearyChat Hubot 安装教程](https://github.com/bearyinnovative/hubot-bearychat/blob/master/README_CN.md) 将 Hubot 服务以及 hubot-bearychat adapter 安装完毕

2. BearyChat Hubot Token 是启动 hubot-bearychat 的必要变量。私有部署的 Hubot 机器人只会接受指定 Token 的 BearyChat Hubot 机器人的请求

## 说明

- 为了方便调试，可以打开 Hubot 的调试模式： `export HUBOT_LOG_LEVEL="debug"`

- `http` 模式下，hubot-bearychat 使用的是内置的 express 模块，默认监听 8080 端口，确认防火墙允许访问该端口，或者也可以修改环境变量 `EXPRESS_PORT` 或 `PORT` 来监听别的端口

- 私有部署 Hubot 机器人在接收到请求后，需要有专门的脚本来处理接收到的数据，用户可以自行添加。但 Hubot 默认支持一些简单的交互，如 ping， echo， time 等，可以用来帮助对接 BearyChat 的 Hubot 机器人

- 更加详细的配置和开发文档，请参考 Hubot 官方文档：https://hubot.github.com
