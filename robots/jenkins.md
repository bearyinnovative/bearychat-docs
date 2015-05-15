# BearyChat Jenkins 手动配置指南

## 进入 Jenkins 管理页面

在 Jenkins dashboard 中，在左边侧边栏，点击「Manage Jenkins」

![](/images/tutorial/jenkins_manage.png)

## 进入插件管理

点击「Manage Plugins」选项

![](/images/tutorial/jenkins_manage_plugins.png)

## 安装 BearyChat Jenkins 插件

点击「Available」标签，在「Filter」中搜索「Bearychat」。然后勾选并安装插件。

![](/images/tutorial/jenkins_install_plugin.png)

## 设置 BearyChat Jenkins 插件

插件安装完成之后，回到「Manage Jenkins」，然后点击「Configure System」。

![](/images/tutorial/jenkins_configure_system.png)

Team Domain: {{teamSubdomain}}

Integration Token: {{robotToken}}

找到「Global Bearychat Notifier Settings」，然后添加如下文本。其他字段是可选的，可以点击问号来获得那些字段的对应帮助信息。

![](/images/tutorial/jenkins_global_bearychat_settings.png)

为了使得 jenkins 的推送消息，可以通过链接直接跳转到 jenkins 对应的任务，需要配置下 jenkins 的 Locations。记得最后点击「Save」按钮。

![](/images/tutorial/jenkins_config_locations.png)

## 设置提醒项目和关注实现

在每个你希望收到提醒的项目中，找到「Configure」菜单

![](/images/tutorial/jenkins_configure_project.png)

在「Bearychat Notifications」部分，选中你所关注的事件。

![](/images/tutorial/jenkins_bearychat_notifications.png)

## 完成设置

![](/images/tutorial/jenkins_post_build_actions.png)

最后，你需要在项目的「Post-build Actions」设置部分，添加上「Bearychat Notifications」。一切工作就此搞定！
