import $ from 'jquery';
import 'weui.js';
import '../lib/pull';
import template from 'art-template/dist/template-debug';
import list from './data';
import tpl from 'raw!./list.html';
import './list.less';

export default {
    url: '/list',
    render: function () {
        return template.compile(tpl)({
            list: list
        });
    },
    bind: function () {
        $('.weui_pull').pull({
            onRefresh: function (callback){
                setTimeout(callback, 1000);
            }
        });
    }
};