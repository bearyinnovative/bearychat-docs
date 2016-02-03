# BearyChat Phabricator手动配置指南

## 获取「Conduit API Token」

进入「Phabricator」设置界面

![](/tutorials/image/phabricator_settings.png)

在设置界面，点击「Conduit API Tokens」

![](/tutorials/image/phabricator_token_settings.png)

再点击「Generate API Token」

![](/tutorials/image/phabricator_generate_token.png)

最后点击「Generate Token」即可

![](/tutorials/image/phabricator_generate_token_confirm.png)

然后复制出生成好的「Conduit API Token」

![](/tutorials/image/phabricator_copy_token.png)

## 设置中间件

将 [phabricator-bearychat 仓库](https://github.com/bearyinnovative/phabricator-bearychat) 代码克隆到服务器上，根据「Setup instructions」设置并运行中间件

## 完成设置

一切搞定! 你现在能够在 BearyChat 中收到来自「Phabricator」的提醒了!

![](/tutorials/image/phabricator_in_bearychat.png)
