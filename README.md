# Music Player

> Begin: 2018.10.8

## 我觉得这个项目好的地方

1. 模仿 Apple Music 和网易云音乐的界面设计。

2. 在播放界面添加了几个简单的动画。我很喜欢当点击首页下面的当前歌曲跳转到播放界面的功能，
因此时我加了三个动画：
    - 播放界面的高度
    - 封面的由左下角宽度和高度同时变化
    - 点击播放封面放大并添加了合适阴影效果让它更好看

3. 在我的、发现、搜索、播放页面都实现了前端路由，都支持分享。我很满意我做分享播放页的方法：在锚点后面加 `-n` 或 `-y` 来代表是否在播放。

## 笔记

1. transition-orgin 来控制动画的起点。

## 根据 Bug 得来的总结

### tip1
点击 tab 状态栏就消失了，我估计是锚点的影响，后来解决了，原来加锚点作为路由的时候
也是有技巧的：

```
http://127.0.0.1:5500/src/index.html#/find -> true 
http://127.0.0.1:5500/src/index.html#find -> false
```

错误的原因的就是因为路径中少了个 `/` 。

本来我还在想为什么 Vue 的路由链接是很奇怪的 `http://baidu.com/#/find` ，既然用锚点为什么要多一个斜杠？现在我懂了，没有那个 `/` 就会出现未知 Bug。
