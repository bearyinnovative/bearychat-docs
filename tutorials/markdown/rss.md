# BearyChat RSS 机器人手动配置指南

[RSS](https://zh.wikipedia.org/wiki/RSS) (Rich Site Summary) 是一种消息来源格式规范，用以聚合经常发布更新数据的网站，例如博客文章、新闻、音频或视频的网摘。

很多博客和新闻媒体都支持 RSS 输出，用户可以使用 RSS 阅读器来及时获取更新， RSS 机器人通过同样的原理，将更新转化为消息，发到倍洽里。

## 找到你需要的 RSS 源

RSS 源（Feed） 通常是提供一个 URL （网址），很多博客系统和网站都支持 RSS，通常你可以在页面里寻找带有 RSS 图标，或者写有「订阅」的按钮就可以获得。

![](/tutorials/image/rss_icon.png)

比如 [一熊科技博客](http://bearyinnovative.com/) 的 RSS 源地址就是 `http://bearyinnovative.com/rss/`。

也有一些支持 RSS 的网站没有 RSS 源的按钮，这种情况你可以研究一下通过源代码找到。

## 设置 RSS 机器人

将上面的地址，填入机器人订阅地址一栏。

![](/tutorials/image/rss_config.png)

你还可以对抓取频率和关键词过滤进行设置。

## 设置完成

![](/tutorials/image/rss_success.png)

更多使用 RSS 机器人的技巧可以参考 [这篇博客](http://bearyinnovative.com/master-rss-robot)
