# Gitlab CI 手动配置指南

## 进入 Gitlab CI 的 Dashboard 页面
选择对应的项目，点击 「Add project to CI」按钮完成添加

![](http://7jpt3p.com1.z0.glb.clouddn.com/FjhbpINq7aV5QtTuoaJE0I5NbRSs)

## 进入 Project 页面
添加 CI 完成之后进入项目设置页面， 按照「How to setup CI for this project」来正确配置 GitLab CI

![](http://7jpt3p.com1.z0.glb.clouddn.com/FsFnt3siBteAc4Rqc1CGWxGiR8q7)

## 设置 Web hook

将 {{webhookUrl}} 填入「URL」中并保存

![](http://7jpt3p.com1.z0.glb.clouddn.com/FvJnWaAo6yZYdYvANZR8rGI_GSkT)

## 设置完成

最后，你就能够在 BearyChat 的讨论组中，收到来自 Gitlab CI 的提醒啦!

![](http://7jpt3p.com1.z0.glb.clouddn.com/Fm-X3jo8M1S5DdEC3uZU73YzKjQ0)

最后要说明两点：
 1. GitLab CI 的消息提醒，只有在 push 代码到项目下才会触发， Merge Request 的构建不会触发 webhook
 2. 为了能够指向正确的 CI 地址，需要在 yaml 文件中设置下 `ci_external_url` 变量，并将真实的地址替换 `https://ci.bearychat.com`。如：

![](http://7jpt3p.com1.z0.glb.clouddn.com/Fmas4AZSDo21MkQDIOrfuYxLEZLa)
