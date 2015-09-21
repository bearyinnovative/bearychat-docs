# BearyChat Redmine 手动配置指南

## 安装 Redmine Webhook 插件

```
$ cd $REDMINE_ROOT/plugins #进入redmine安装路径下的plugins路径
$ git clone git://github.com/suer/redmine_webhook.git
$ bundle install #安装webhook插件以来的gem
$ rake redmine:plugins:migrate RAILS_ENV=production
```

## 进入 Webhook 界面

进入需要加入 Webhook 的项目主页 点击「配置」 在点击「WebHook」

![](/images/tutorial/redmine_webhook_setting.png)

## 添加 Webhook

然后将 BearyChat 生成的 Webhook 地址填入「URL」文本框中 点击保存即可

![](/images/tutorial/redmine_add_webhook.png)

## 完成设置

最后，这个 Redmine 机器人就设置完成啦! 你现在能够在 BearyChat 中收到来自 Redmine 的提醒了!

![](/images/tutorial/redmine_notify_sample.png)
