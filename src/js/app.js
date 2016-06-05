import Router from 'router';
import 'vconsole';
import attachFastClick from 'fastclick';
import './app.less';
import Home from './home/home';
import Register from './register/register';
import Profile from './profile/profile';
import Setting from './setting/setting';

attachFastClick.attach(document.body);

const router = new Router();
router.push(Home).push(Register).push(Profile).push(Setting).setDefault('/').init();

$.getJSON('https://weui.io/api/sign?url=' + location.href).success((res) => {
    wx.config({
        debug: true,
        appId: res.appid,
        timestamp: res.timestamp,
        nonceStr: res.nonceStr,
        signature: res.signature,
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone'
        ]
    });

    wx.onMenuShareAppMessage({
        title: 'WeUI',
        desc: 'WeUI, 为微信 Web 服务量身设计', // 分享描述
        link: encodeURIComponent(location.href.split('#')[0]), // 分享链接
        imgUrl: 'https://mmrb.github.io/avatar/bear.jpg', // 分享图标
        success: function () {

        },
        cancel: function () {

        }
    });
});