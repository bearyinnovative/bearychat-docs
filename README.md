# BearyChat-Tutorial

BearyChat 的公开文档


## 机器人教程编写规范


1. 遵守 [LeanCloud 的中文规范](https://github.com/sparanoid/chinese-copywriting-guidelines)
2. 文件以 `# 教程标题` 开头，标题不会在 BearyChat 页面被用户看到。
3. 步骤以 `## 步骤标题` ，每个步骤在 BearyChat 里会被自动加上序号。
4. 已经创建好了配图规则见：[配图规则](/tutorials/markdown/specfication.md) 。
5. 截图内的用户数据，可以使用示意性强的用户名，讨论组，建议使用 [示意团队](https://example.bearychat.com) 来截图。
6. 不要使用 「！」「啦」等过于口语话的表达，在 BearyChat 里，尽量使用朴实清晰，没有强烈感情的用语。 卖萌请在此 README 里尽情发挥 (。・`ω´・)

## 可用模板参数

教程中可以使用模板参数，如 `{{webhookUrl}}`，此类参数有：

| 参数名称 | 说明 |
| ---- | ---- |
| webhookUrl | webhook 地址，大部分 webhook 机器人有这个参数 |
| robotToken | 机器人 token，如 hubot 机器人的 token 等 |
| teamSubdomain | 如果团队域名是 beary.bearychat.com，这个值为 beary |
