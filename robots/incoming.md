# Incoming 机器人

You have two options for sending data to the Webhook URL above:

1. Send a JSON string as the payload parameter in a POST request
2. Send a JSON string as the body of a POST request

For a simple message, your JSON payload must contain a text property. This is the text that will be posted to the channel.
A simple example:

`payload={"text": "This is a line of text in a channel.\nAnd this is another line of text."}`

创建完Incoming机器人之后, 得到Incoming机器人的Webhook url

1. 可以直接往url post一个json数据
2. 可以往url post一个form，对应字段是payload，该字段的值应该是一个序列化之后的json字符串

数据本身，暂时只支持`text` field: {"text": "Hello world"}

TODO: 更多可自定义的字段正在开发中
