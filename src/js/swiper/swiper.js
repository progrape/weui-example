import 'weui.js';
import template from 'art-template/dist/template-debug';
import Swiper from 'iswiper';
import tpl from 'raw!./swiper.html';
import './swiper.less';

// 图片来自微软 cn.bing.com , 版权归原作者所有
import swiper1 from './images/swiper1.png';
import swiper2 from './images/swiper2.png';
import swiper3 from './images/swiper3.png';
import swiper4 from './images/swiper4.png';

export default {
    url: '/swiper',
    className: 'swiper-wrapper',
    render: function () {
        return template.compile(tpl)({items: [swiper1, swiper2, swiper3, swiper4]});
    },
    bind: function () {
        const swiper = new Swiper({
            direction: 'horizontal'
        });
        swiper.on('swiped', (prev, current) => {
            console.log('prev', prev);
            console.log('current', current);
        });
    }
};