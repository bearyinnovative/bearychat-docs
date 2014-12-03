# Bearychat Jenkins配置指南

1. In your Jenkins dashboard, click on Manage Jenkins from the left navigation.

在Jenkins dashboard中，在左边侧边栏，点击「Manage Jenkins」

![](/images/tutorial/jenkins_manage.png)

2. Click on Manage Plugins

点击「Manage Plugins」选项

![](/images/tutorial/jenkins_manage_plugins.png)

3. In the Available tab, search for Bearychat in Filter. Click the checkbox and install the plugin.

点击「Available」标签，在「Filter」中搜索「Bearychat」。然后勾选并安装插件。

![](/images/tutorial/jenkins_install_plugin.png)


4. After it's installed, click on Manage Jenkins again in the left navigation, and then go to Configure System.

插件安装完成之后，回到「Manage Jenkins」，然后点击「Configure System」。

![](/images/tutorial/jenkins_configure_system.png)

5. Find the Global Bearychat Notifier Settings section and add the following values:
Team Domain: beary
Integration Token: xxxxxxxxxxx
The other fields are optional. See the help text by clicking the question mark icon next to the fiields for more information. Press the Save button when you're done.

找到「Global Bearychat Notifier Settings」，然后添加如下文本。其他字段是可选的，可以点击问号来获得那些字段的对应帮助信息。记得最后点击「Save」按钮。


![](/images/tutorial/jenkins_global_bearychat_settings.png)

6. For each Project that you would like receive notifications for, choose Configure from the project's menu.

在每个你希望收到提醒的项目中，找到「Configure」菜单

![](/images/tutorial/jenkins_configure_project.png)

7. In the Bearychat Notifications section, choose the events you'd like to be notified about.

在「Bearychat Notifications」部分，选中你所关注的事件。

![](/images/tutorial/jenkins_bearychat_notifications.png)

8. You'll also need to add Bearychat Notifications to the Post-build Actions for this project.

最后，你需要在项目的「Post-build Actions」设置部分，添加上「Bearychat Notifications」。一切工作就此搞定！


![](/images/tutorial/jenkins_post_build_actions.png)
