# BearyChat NewRelic 手动配置指南

## 添加 Webhook 提醒

* 点击「Alerts Beta」按钮，再点击「Notification channels」菜单 再点击「Channels」选项 再点击「Create a notification channel」

![](http://7jpt3p.com1.z0.glb.clouddn.com/FvJyqNebmT5v_1rH-TGU9Ikf98gF)

* 然后选择「Webhook」选项

![](http://7jpt3p.com1.z0.glb.clouddn.com/FuaJVKYQs67NaA3_Aa1oa5KMDPYJ)

* 在「Channel name」中填上这个通知通道的名字，在「Base Url」中填上 BearyChat 生成的 Webhook 地址

![](http://7jpt3p.com1.z0.glb.clouddn.com/FroGxurlQYygGocMiHoLoAojyXaX)

* 然后点击「Use Custom Payload」选项，选择「Payload Type」为「JSON」，然后点击「Create channel」按钮

![](http://7jpt3p.com1.z0.glb.clouddn.com/Fop-DbAJTg0jugbxYh6Yz4BPt-CO)

## 添加警告策略

* 点击「Alerts Beta」按钮，再点击「Alert policies」菜单 再点击「New alert policy」按钮

![](http://7jpt3p.com1.z0.glb.clouddn.com/FiKc-MUzmgTIHHQu1dhx70_m92FX)

* 为这个新建的警告策略起一个名字，然后点击「Create a condition」

![](http://7jpt3p.com1.z0.glb.clouddn.com/FjoNvL8D7W6-lrdG3ANyNrWKTS9S)

* 在设置 condition 的第二步选择要为这个警告策略绑定的监控实例，在该实例上打钩

![](http://7jpt3p.com1.z0.glb.clouddn.com/Frz4l4jHg6mTOR4jrfogGFXszH7t)

## 设置 Webhook 警告

* 选择刚刚创建的警告策略，然后点击「Notification channels」选项，在点击「Add notification channels」按钮

![](http://7jpt3p.com1.z0.glb.clouddn.com/Fn_BUjqHdZffUoGWpDZ5E6DopjAn)

* 在弹出的对话框中选择「Webhook」文件夹

![](http://7jpt3p.com1.z0.glb.clouddn.com/FoB-JvifrV-iw0bZ3CMH9wM_3_A-)

* 然后选择需要绑定到当前警告策略的 Webhook 实例，在该实例上打钩，然后点击「Update policy」按钮

![](http://7jpt3p.com1.z0.glb.clouddn.com/FhLckbcqd8WJiGNwbZ8hJuxj-BjK)

## 完成设置

最后，这个 NewRelic 机器人就设置完成啦! 你现在能够在 BearyChat 中收到来自 NewRelic 的提醒了!

![](http://7jpt3p.com1.z0.glb.clouddn.com/Fn51M0LRhiAqQjmMdLiG-NnvZAJw)
