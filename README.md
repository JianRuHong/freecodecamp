## FreeCodeCamp前端学习记录
**因为FreeCodeCamp上的内容点比较分散, 所以在学习过程中会对内容进行扩展学习, 让自己所学到的知识点争取足够全,所有注释均放在了代码的页面**

### VSCode使用到的插件总结:
1. Beautify, 代码格式化的插件, 可以自定义快捷键, 插件页面有使用方法介绍
2. Debugger for chrome 这个插件不要太屌, 可以继承chrome浏览器的测试环境, 在VSCode里就可以进行调试
3. HTML snippets, HTML标签提示, 必须要的, 没有提示的编程不是一个完成的编程
4. 最让我头疼的是CSS类名提示的插件, 因为用的Mac, 使用了插件排行榜上的一个插件叫做HTML CSS Support的插件, 在win的电脑上很好用, 但是在Mac上只能给个差评, 内存泄露严重, 启动该插件后, 内存暴涨, 导致电脑异常卡顿, 无奈卸载掉了, 之后又使用了Intellisence for css names, 这个可以用, 但是如果通过link引入的cdn上的css库, 则不会有类名提示了!一番周折之后, 发现了Class Autocomplete, 非常棒, 本地和cdn上的皆有提示.(win上的直接使用HTML CSS Support即可)
5. Path Autocomplete, 当需要引入本地的一张图片或者css样式时, 路径多的情况下很麻烦, 这个完美解决, 智能提示路径
6. vscode-icons, 这个很也是很好的一款插件, 会在文件夹, 文件前面添加其对应问价格式的图标, 很美观, 主要易于查找文件
### 以下记录在学习中查看到且有价值的资料(以下的资料都是我按时间顺序用到的):
1. [廖雪峰博客](https://www.liaoxuefeng.com/), 包含了git, js教程, js教程写的较深入, 很值的学习!
2. [Bootstrap中文网](http://v3.bootcss.com/), 可以查看其使用方法, 毕竟英文对我来说还是有点难度的!
3. [JS闭包讲解](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html), 这是我参考众多资料之后, 发现的最浅显易懂, 且功能明确的文章了, 该作者的其他文章也很好, 可以收藏!
4. [阮一峰个人博客](http://www.ruanyifeng.com/blog/archives.html), 不解释, 赶紧上车!
5. [JS中的正则表达式使用](http://javascript.ruanyifeng.com/stdlib/regexp.html#toc0), 足够应付日常开发, 正则指望总结, 那太多了, 忘记了就来看看这个教程
6. [DOM教程](http://www.runoob.com/htmldom/htmldom-intro.html), DOM是独立于语言和平台的,它允许程序和脚本动态地访问和更新文档的内容、结构和样式。这个上面讲解的还是很简洁明了!
7. [SASS安装步骤](https://www.sass.hk/install/), 我使用Mac安装时也碰到了不少坑, 不过已记录在了test.scss中
8. [SASS入门学习](http://www.ruanyifeng.com/blog/2012/06/sass.html)这个文章写的还是很浅显易懂的, 使用SASS来做CSS的日常处理, 足够了, 不过对于我来说, 目前阶段我更喜欢使用CSS来处理样式, 可以加强记忆.
9. [阮一峰React入门知识](http://www.ruanyifeng.com/blog/2015/03/react), [React官方文档翻译](https://discountry.github.io/react/), React入门以及较深入的知识和原理, 看这个两个文章, 完全足够.
10. [Node.js概述](http://javascript.ruanyifeng.com/nodejs/basic.html), 学习完Node.js的入门知识回头看
11. [Node.js教程](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434501245426ad4b91f2b880464ba876a8e3043fc8ef000), 看的这篇入门, 还不错
12. [菜鸟教程Node.js教程](http://www.runoob.com/nodejs/nodejs-tutorial.html), 可以参考, 也还不错
13. [Homebrew](https://brew.sh/index_zh-cn.html),Mac端的包管理工具,可以用来安装Nodejs以及卸载, 很是方便, 如果去nodejs官网下载安装, 也行, 但是如果卸载的话就会很麻烦, 如果使用Homebrew, 使用brew uninstall 包应用, 就可以删除干净.
14. [NPM使用教程](http://www.jianshu.com/p/4643a8e43b79), 这哥们的浅显易懂, 不错(NPM就是nodejs的包管理工具, 类似于cocoapods)

