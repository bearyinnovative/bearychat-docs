# BearyChat Heroku 手动配置指南

## 通过 Heroku 命令行工具配置

安装 [Heroku 命令行工具](https://devcenter.heroku.com/articles/heroku-command) 并登录后，在终端执行以下命令：

```bash
$ heroku addons:create deployhooks:http --url {{webhookUrl}}
```

你也可以单独为某一个 App 添加 Webhook：

```bash
$ heroku addons:create deployhooks:http --url {{webhookUrl}} --app your-heroku-app-name
```

## 完成配置

恭喜。你现在能够在 BearyChat 中收到来自 Heroku 的提醒了。