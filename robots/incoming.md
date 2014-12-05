# Incoming 机器人

1.  ## 格式说明
    以下两种方式 BearyChat 都可以接受 ：
    1. 发送一个 JSON 字符串做为 POST 请求的 payload 参数
    2. 发送一个 JSON 字符串做为 POST 请求的 body

    JSON格式要求
    * 必须有`text` 字段: {"text": "Hello world"}
    * markdown为可选字段，用于控制`text`字段是否进行markdown解析，默认为false

    示例：

    `payload={"text": "This is a line of text in a channel.\nAnd this is another line of text."}`


2.  ## 测试你的 WebHook

    通过对 Webhook url 发送请求
    1. 可以直接往url post一个json数据
    2. 可以往url post一个form，对应字段是payload，该字段的值应该是一个序列化之后的json字符串

    代码示例

    ```curl -X POST --data-urlencode "payload={\"text\":\"消息正文\"}" http://hook.bearychat.com/你的webhook地址 ```


