import Router from 'router';
import 'vconsole';
import attachFastClick from 'fastclick';
import './app.less';
import Home from './home/home';
import Register from './register/register';
import Profile from './profile/profile';
import Setting from './setting/setting';
import Swiper from './swiper/swiper';
import Check from './check/check';
import Uploader from './uploader/uploader';
import List from './list/list';

attachFastClick.attach(document.body);

const router = new Router();
router
    .push(Home)
    .push(Register)
    .push(Profile)
    .push(Swiper)
    .push(Setting)
    .push(Check)
    .push(Uploader)
    .push(List)
    .setDefault('/')
    .init();

if (NODE_ENV === 'production') {
    $.getJSON('https://weui.io/api/sign?url=' + encodeURIComponent(location.href.split('#')[0])).success((res) => {
        wx.config({
            debug: false,
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

        const option = {
            title: 'WeUI',
            desc: 'WeUI, 为微信 Web 服务量身设计',
            link: 'https://weui.io/example',
            imgUrl: 'https://mmrb.github.io/avatar/bear.jpg'
        };
        wx.onMenuShareAppMessage(option);
        wx.onMenuShareTimeline(option);
        wx.onMenuShareQQ(option);
    });
}