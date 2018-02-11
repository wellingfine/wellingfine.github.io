---
title: 简单上手Hexo
date: 2018-02-10
tags: hexo
---

开博了！

## 环境安装 

``` bash
npm i -g hexo-cli 
```
安装环境之前一直用sudo npm装的依赖，导致 /usr/local/lib/node_modules/下的权限一片混乱，于是直接删掉hexo依赖，再跑一下上面的安装命令就ok了。

``` bash
npm i hexo  # 安装hexo
npm i hexo server #安装本地博客svr
hexo g -dw # hexo generate --deploy --watch
```
-dw 参数适合边写边看效果，只生成变动的html

``` js
//package.json 加入 方便的命令
"scripts":{
    "build":"hexo publish",
    "run":"hexo server -p5000 & hexo g -dw"
}
```

## 配置
_config.yaml 大部分配置一眼能看出具体的功能，这里对生成的文件做了下重定向子目录，根目录预留给其它功能使用；改了下文件标题，及url路径规则

默认有三个布局，draft page post ，暂时没看出有什么区别，默认配置没多大差别。draft 可以使得文件不会发布，暂作保存 hexo publish后自动移到 **_posts**

## 引用资源
总体来说，比较麻烦
* 打开 _config.yml 的 post_asset_folder: true
* 手动创建同名文件，或运行 hexo new [layout] title

每个post 对应一个资源目录，必须使用 hexo new [layout] title 来新建 post。如果显示不了，最好再重启下本地服务器
```
{% asset_img hexo-logo.svg hexo's logo %}
```
最后想了想，还是用根目录的资源吧 ![global assets dir](/assets/imgs/hexo-logo.svg)

发现也有缺点，本地运行没办法显示图片，hexo的 server 不支持，囧

* 图片大小设置？
* 图片重用问题？

## 后续

* 默认的 js 用到了google的cdn，墙内一些js运行不了
* 更换主题/定制主题
* 增加评论插件
* 文章标题目录插件
* 图片上传
* 统计
* 修订记录插件
* 全部文章都写到 source/_posts/ ? 日累月累，git肯定会乱，所以应该会有分类