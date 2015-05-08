## Outgoing 机器人

Outgoing 机器人可以通过设置触发词，将团队内部的相关消息实时地发送到用户指定的外部服务上。

Outgoing 机器人需要做两个必要的设置：

1. **trigger_word**: 用户可以设定一个**触发词**，当发送的实时消息里面是以**触发词** 开始的，就会将相关内容发出去，比如 `/baike` 是**触发词**, 当用户输入并发送了 `/baike 中国`, 就会将相关信息发送到指定服务上。
2. **URL**: 第三方服务的 URL 地址，BearyChat 会将满足条件了信息 `POST` 到用户设置的这个 URL 地址。

### 数据格式

BearyChat 会 `POST` 一个特定格式的内容到用户指定的 `URL` 上:

**Request:**

``` javascript
{
    token: "eewoCbrv3z1VuxbTDRpmPAkQ"
    ts:1355517523
    text: "/baike 中国"
    trigger_word: "/baike"
}
```

外部服务可以返回一个 Response，如果格式满足下面的样例，Outgoing 会发送一条对应的消息到讨论组内

**Response:**
``` javascript
{
    text: "text, this field may accept markdown",
    attachments: [
        {
            title: "title_1",
            text: "attachment_text",
            color: "#ffffff",
            images: [
                {"url": "http://example.com/index.jpg"}
                ]
        }]
}
```

### 示例

* 设置 trigger_word 和 URL

只要是以 `/baike` 开头的消息，都会 `POST` 到我们设定的地址 `http://bearybots.com/baike`
![](/images/tutorial/outgoing_sample1.png)

* 测试一下 `outgoing`

![](/images/tutorial/outgoing_sample2.png)

