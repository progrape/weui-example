import $ from 'jquery';
import 'weui.js';
import tpl from 'raw!./profile.html';
import style from './profile.less';

export default {
    url: '/profile',
    className: 'profile',
    render: function () {
        return tpl;
    },
    bind: function () {

    }
};