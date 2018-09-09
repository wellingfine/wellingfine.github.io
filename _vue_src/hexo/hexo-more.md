---
title: 继续折腾Hexo
date: 2018-02-12 12:00:00
tags: hexo
---

昨天基本搭好了框架，不过还是有些问题的

---
## 挂图片的3种方式

* 默认：使用 `hexo new ` 在_posts下创建同名目录，放置图片资源。**优点**是可以用相对路径直接写；**缺点**是目录变得很多，不好管理
* 全局：在站点根路径放置图片。**缺点**是`hexo server`不支持显示
* 主题：在主题中加入资源，直接markdown 引用。切换主题会比较头疼，下面顺便看下主题怎么整

## 主题结构

``` 
.
├── _config.yml #配置
├── languages   #国际化
├── layout      #布局
├── scripts     #通用的脚本
└── source      #前端资源,图片,js,css
```
看一眼基本就懂了，要注意的是 scripts 是插件用的脚本，只会在 `hexo generate` 时运行。官方文档的解释是 「在启动时就会自动载入」

## 上一次的小问题

* google被墙资源
  改模板使用 [微软](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview#jQuery_Releases_on_the_CDN_0 "微软cdn列表") 的 [http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js](http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js "js")
  找到 `themes/landscape/layout/_partial/after-footer.ejs` 替换里面google的连接
  还有一个font也用的google，没替换，字体什么的，不太重要
* 替换 _mta.qq.com_ 统计
  找到 `themes/landscape/layout/_partial/google-analytics.ejs`，然后去mta申请一个h5应用
* _posts文件管理
  1. 可以在_posts下面任意创建目录，生成后只会按Front-Matter的日期做归类
  2. 路径会略有不同，最好是做好规划，不让路径随便变化
  3. page 和 post 两种 layout 不一样的地方是，page是独立的一个页面，不会显示在文章列表里面，所以可以在导航栏指定对应的地址进行跳转，例如，专门制作一个about.md
* 插件
  评论插件，目录插件，文章修订，暂没找到轮子


## 总结

文档太简单了点
