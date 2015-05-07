# Incoming 机器人

## 格式说明

以下两种方式 BearyChat 都可以接受 ：
1. 发送一个 JSON 字符串做为 POST 请求的 payload 参数
2. 发送一个 JSON 字符串做为 POST 请求的 body, `Content-Type`为`application/json`

JSON 格式要求
* 必须有`text` 字段: {"text": "Hello world"}
* markdown 为可选字段，用于控制`text`字段是否进行 markdown 解析，默认为 false

示例：

    {
        text: "text, this field may accept markdown",
        markdown: true
        channel: "bearychat-dev",
        attachments: [
            {
                title: "title_1"
                text: "attachment_text"
                color: "#ffffff"
            }]
    }

## 字段含义

### 顶层字段

1. `text`. 必须字段。支持 inline md 的文本内容。
2. `markdown`. 可选字段。用于控制 text 是否解析为 markdown。默认为 false
2. `channel`. 可选字段。如果有这个字段，消息会发送到指定讨论组。如果没有，消息会发送到创建机器人时默认的讨论组。
3. `attachments`. 可选。一系列附件

### attachments

1. `title`. 可选。
2. `text`. 可选。
3. `color`. 可选。用于控制 attachment 在排版时左侧的竖线分隔符颜色
4. `title`和`text`字段必须有一个。其他的随意组合。

## 测试你的 WebHook

通过对 Webhook url 发送请求
1. 可以直接往 url post 一个 json 数据
2. 可以往 url post 一个 form，对应字段是 payload，该字段的值应该是一个序列化之后的 json 字符串

代码示例

```curl -X POST --data-urlencode "payload={\"text\":\"愿原力与你同在\"}" http://hook.bearychat.com/your_webhook_url ```


![](/images/tutorial/incoming_r2d2_1.png)

```curl -H "Content-Type: application/json" -d '{"text":"愿原力与你同在","attachments":[{"title":"Star Wars III","text":"Return of the Jedi","color":"#ffa500"}]}' "http://hook.bearychat.com/your_webhook_url" ```

![](/images/tutorial/incoming_r2d2_2.png)
