---
title: 在vultr上布署 l2tp-ipsec vpn
date: 2018-03-05
tags: vps
---

## Old time
荒废了半年的vpn，终于在前两天重新搞个东京的vps，跟着这篇[文章](https://segmentfault.com/a/1190000006125737)搭了起来，居然好了，mac ipad android都可以连上，终于再次连接世界。速度体验了下还比较快，流畅看youtube高清视频，也稳定很多。

比起以前的l2tp，多了一个密钥填写项，看回以前那个[DigitalOcean的文章](https://www.digitalocean.com/community/tutorials/how-to-setup-your-own-vpn-with-pptp) 状态已经是 _Deprecated_ 了，虽然好过一段时间，但经常会被重置连接，同样是vultr的东京主机，稳定性一般。

## 小问题

1. /etc/ppp/options.xl2tpd

    re-mschap-v2，这一行由于用了 vi 来编辑，没先打 i 导致 require 前面几个字母缺失了，发现日志有错，于是google一下。居然也有同道中人，世界真小，错都错得一毛一样

2. xl2tpd 下载

    由于yum没有源，所以需要手动下载一下。原文直接就给了链接，觉得搞个新版本可能会好点，就上 [centos.pkgs.org](http://centos.pkgs.org) 搜xl2tpd，找到对应的系统版本下载装上
3. 日志

    ```
    cd /var/log
    tailf messages
    ```

4. 来个重启脚本，方便以后定时重启

    ```
    ipsec setup restart
    service xl2tpd restart
    sysctl -p 
    ```

## 小米路由

虽然使用这个l2tp使用起来很方便，不用装任何软件，手机 pc mac 都能直接使用。win10看了下是有自带的智能切换流量的功能，不过mac和手机，就少了这个原生支持。

[global assets dir](/assets/imgs/mi_route.png)

小米路由支持l2tp的链接，神奇的是它没有共享密钥的设定，一开始还以为不行。鬼使神差的试了下，居然能连上，我就开始怀疑是不是根本没有用到ipsec。

验证了下，发现之前设置过vpn并填了共享密钥的设备能连上vpn，如果未在设备上设置过密钥就不行。未太明白原理，倒也是稳定可用，足矣。
