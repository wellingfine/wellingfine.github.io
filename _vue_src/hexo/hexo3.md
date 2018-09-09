---
title: Hexo 三种图片处理方式
date: 2018-09-07 00:00:00
tags: hexo
---


## 使用hexo 支持的方式动态插入图片资源

简略

## 开启post_asset_folder

开启 _config.yml 下面的 post_asset_folder: true，这样运行的时候

```
$ hexo new post title
```
就会在_posts下面创建一个文件 title.md 和相对应的目录，build的时候就自动把资源目录里的文件和title.md放在一个位置，本地用vscode写md文件时用markdown的标准格式引用图片

```
![图片名字](title/xx.png)
```
![试下asset_folder](./hexo3/cool.png)


## 全局图片

本博做法是根目录下放着3个主目录

```
_blog_src 源码
assets 图片资源
blog hexo生成的html相关文件
```
把图片放到 assets 后

```
![全局图片](/assets/xx.png)
```
![测试全局图片](/assets/imgs/smile.png)

经测试vscode可以解决绝对路径，只要路径是在工作目录下就行了。用hexo server 跑起来之后反而不支持，只好搭个koa-static替代一下，完全按照工作区目录跑起来了，再跑一下hexo 的watch监听文件变化，就能在本地页面中刷新预览。

## 主题图片
这个不怎么推荐，原理是把图片放到主题的目录下面，因为生成主题的时候会生成相对应的主题文件。但是当要换主题的时候就比较麻烦

