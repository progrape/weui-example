### weui-example

用作呈现 weui 的场景示例、应用示例等

#### 目录结构

```
├── LICENSE
├── package.json
├── README.md
├── src                                     # 源码目录
│   ├── index.html                          # html 入口文件
│   └── js
│       ├── app.js                          # js 入口文件
│       ├── app.less                        # 样式文件
│       ├── check
│       ├── home                            # 首页
│       ├── lib                             # 库文件
│       ├── list                            # 各功能目录
│       ├── profile
│       ├── register
│       ├── setting
│       └── swiper
└── webpack.config.js                       # webpack 配置文件
```

本示例是单页面应用，使用 [https://github.com/progrape/router](router) 简单的路由方案（demo用途）。每个功能页面对应一个路由配置。

例如首页：

```javascript
import tpl from 'raw!./home.html';

export default {
    url: '/',
    className: 'home',
    render: function (){
        return tpl;
    }
};
```

然后在 js 入口文件中引入

```javascript
router.push(Home).setDefault('/').init();
```

#### 增加示例

如果是外部链接的示例，则在 `src/js/home/home.html` 中找一个位置，增加一个 `cell`，链接指向需要跳转的示例链接即可。

如果不是外部链接，则在 `src/js` 目录：

1. 新建一个存放示例的目录；
2. 新建路由配置文件、模板文件、样式文件等；
3. 然后在 `src/js/app.js` 入口文件加入到路由配置；
4. 在 `src/js/home/home.html` 找个位置加上一个 `cell`，链接指向这个示例的路由即可。


#### License

MIT License