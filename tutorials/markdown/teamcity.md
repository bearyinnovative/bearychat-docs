# TeamCity 手动配置指南

## 下载 tcWebHooks 插件

在 [JetBrains Plugins Repository](https://plugins.jetbrains.com/plugin/8948-web-hooks-plugin-tcwebhooks-) 或 [GitHub](https://github.com/tcplugins/tcWebHooks/releases) 下载 tcWebHooks 插件。

JetBrains Plugins Repository:

![](/tutorials/image/teamcity_download_from_jetbrains.jpg)

GitHub:

![](/tutorials/image/teamcity_download_from_github.jpg)



## 进入 TeamCity 项目页面
在 TeamCity 的 Project 页面中，在右上角，点击「Administration」
![](/tutorials/image/teamcity_to_administration.jpg)


## 进入插件管理

点击「Plugins List」选项  
![](/tutorials/image/teamcity_to_plugins_list.jpg)


## 安装 tcWebHooks 插件

点击「Upload plugin zip」标签，选择在前面下载的插件并上传。
![](/tutorials/image/teamcity_to_upload_page.jpg)
![](/tutorials/image/teamcity_upload.jpg)


## 重启 TeamCity 服务

插件上传完成之后，重启 TeamCity 服务。

## 设置具体项目的提醒

在项目页面中，选择你想要添加提醒的项目，可以跳转到项目配置页面，点击其上方的「WebHooks」选项，并根据需要添加 WebHooks 配置。

![](/tutorials/image/teamcity_to_webhooks.jpg)

点击 「Add projects WebHooks」

![](/tutorials/image/teamcity_to_create_one.jpg)

点击 「Click to create new WebHook for this project」

![](/tutorials/image/teamcity_to_create_page.jpg)


在「Click to create new WebHook for this project」菜单中填入在 BearyChat Robot 页面生成的 webhookUrl， {{ webhookUrl }}。

在「Payload Format」中选择「ElasticSearch Document Creation (JSON)」，选择其他的将导致 BearyChat 无法解析其消息。

在「Trigger on Events」和「On Completion」中，用户需要选择需要的事件，其中 BearyChat 支持的事件有：

- Build Started （开始构建）
- Build Interrupted （中断构建）
- Trigger when build is Successful （构建成功）
- Trigger when build Fails （构建失败）

配置完成后点击「Save」即可生效。

![](/tutorials/image/teamcity_create_page.jpg)


## 完成设置

至此 TeamCity Robot 设置完毕，团队已经可以接收 TeamCity 的构建结果了

![](/tutorials/image/teamcity_result.png)
