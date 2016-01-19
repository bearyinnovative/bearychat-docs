# BearyChat Jenkins 手动配置指南

## 进入 Jenkins 管理页面

在 Jenkins dashboard 中，在左边侧边栏，点击「Manage Jenkins」

![](http://7jpt3p.com1.z0.glb.clouddn.com/FvEQKlkoZX21M5CfC2u1jrIQRKSX)

## 进入插件管理

点击「Manage Plugins」选项

![](http://7jpt3p.com1.z0.glb.clouddn.com/Fpn-OoFnG08TpmrchJ5AAxu1b2o1)

## 安装 BearyChat Jenkins 插件

点击「Available」标签，在「Filter」中搜索「Bearychat」。然后勾选并安装插件。

![](http://7jpt3p.com1.z0.glb.clouddn.com/FodeXwlEFMtL2jDuKJ81MAgJqpLp)

## 设置 BearyChat Jenkins 插件

插件安装完成之后，回到「Manage Jenkins」，然后点击「Configure System」。

![](http://7jpt3p.com1.z0.glb.clouddn.com/FlEahotZAz9NnwEiFDL1bWE0-AiU)

Team Domain: {{teamSubdomain}}

Integration Token: {{robotToken}}

找到「Global Bearychat Notifier Settings」，然后添加如下文本。其他字段是可选的，可以点击问号来获得那些字段的对应帮助信息。

![](http://7jpt3p.com1.z0.glb.clouddn.com/FuuCwPrF-p3ss5E89YFqa_ZEsCaL)

为了使得 jenkins 的推送消息，可以通过链接直接跳转到 jenkins 对应的任务，需要配置下 jenkins 的 Locations。记得最后点击「Save」按钮。

![](http://7jpt3p.com1.z0.glb.clouddn.com/FjVKN5ykuQxpPktU_n9GMUecE-fX)

## 设置提醒项目和关注实现

在每个你希望收到提醒的项目中，找到「Configure」菜单

![](http://7jpt3p.com1.z0.glb.clouddn.com/Fri4_hqw7izoTJN2K2dPxqc4aJfG)

在「Bearychat Notifications」部分，选中你所关注的事件。

![](http://7jpt3p.com1.z0.glb.clouddn.com/FoD3JDRWKTJsyDp8JDOCYU86hrpZ)

## 完成设置

![](http://7jpt3p.com1.z0.glb.clouddn.com/FoQXJ5LG5p_Xv54eMY6OF__tEHQW)

最后，你需要在项目的「Post-build Actions」设置部分，添加上「Bearychat Notifications」。一切工作就此搞定！
