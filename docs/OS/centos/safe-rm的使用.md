---
title: safe-rm的使用
copyright: true
date: 2019-05-28 15:51:00
comments: true
post: true  
categories:
- Linux
tags:
- Linux
---

## safe-rm介绍

safe-rm是避免删除重要文件的工具。执行rm命令时就会检查rm命令的参数是否在黑名单中存在，如果存在则提示用户不能删除该文件或者目录。

## 1. 安装wget

    yum -y install wget

## 2. 下载safe-rm安装包

    wget https://launchpad.net/safe-rm/trunk/0.12/+download/safe-rm-0.12.tar.gz


## 3. 解压 

    tar -zxvf safe-rm-0.12.tar.gz -C /usr/local/bin

> -C：指定解压目录

## 4. 软连接

    ln -s /usr/local/bin/safe-rm-0.12/safe-rm /usr/local/bin/rm

## 5. 配置环境变量

    vim /etc/profile    # 全局配置
    vim ~/.bash_profile # 单独用户配置


**在配置文件最后一行加上**

    PATH=/usr/local/bin:$PATH

**保存后使其生效**

    source /etc/profile
    source ~/.bash_profile


## 6. 配置保护文件列表

    vim /etc/safe-rm.conf # 全局配置
    vim ~/.safe-rm        # 单独用户配置

**配置文件示例**
```
/
/bin
/boot
/dev
/etc
/home
/initrd
/lib
/proc
/root
/sbin
/sys
/usr
/usr/bin
/usr/include
/usr/lib
/usr/local
/usr/local/bin
/usr/local/include
/usr/local/sbin
/usr/local/share
/usr/sbin
/usr/share
/usr/src
/var

~
```