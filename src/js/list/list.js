import $ from 'jquery';
import 'weui.js';
import template from 'art-template/dist/template-debug';
import list from './data';
import tpl from 'raw!./list.html';
import style from './list.less';

export default {
    url: '/list',
    className: 'list',
    render: function () {
        return template.compile(tpl)({
            list: list
        });
    },
    bind: function () {
        let start;
        $(this).on('touchstart', function (e) {
        }).on('touchmove', function (e) {

        }).on('touchend', function (e) {

        });
    }
};