# 前言

工作一段时间后，对于vue和webpack的理解和用法更加熟悉和深刻，断断续续，花了近一个月的时间对之前的这个音乐播放器重写了一遍。期间，放弃了vue-cli的使用，慢慢入坑，webpack的配置，热加载，打包等功能已经是全手动配置了。该音乐播放器只是移动端的一个小项目，chrome浏览器下请切换至手机模式查看，也没有涉及到很复杂的交互，所以比较适合初学者用来练手以便加深理解，如果帮助到了你，记得点颗星O(∩_∩)O

# 项目简介

## 技术栈

vue3+vue-router+vuex+axios

## 已实现功能

* 搜索功能，包括搜索歌曲和歌手
* 歌曲的播放，暂停功能
* 切歌，歌曲的前进和后退
* 歌词滚动，悬浮框歌词
* 歌词颜色切换，顺序、逆序、随机播放
* 滚动加载等（该功能只在搜索歌曲后的页面有效）

## Build Setup

``` bash
# git clone https://github.com/lisbeth0720/vue-music-player.git

# install dependencies
npm i or cnpm i
如果安装了yarn, 也可以yarn install

# serve with hot reload at localhost:8080
npm run server

# build for production with minification
npm run build

## 部分效果图

### 首页和播放页
<img src = "" />
<img src = "" />


### 播放详情和搜索功能
<img src = ""/>
<img src = "" />

.
```

## 其他说明
由于接口调用的是酷狗官方的接口，需要跨域，所以项目中使用了代理，配置在config目录和build目录下的dev-server.js中，注意*请不要频繁访问请求，很有可能被酷狗封死接口*