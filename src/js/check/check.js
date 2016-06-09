import 'weui.js';
import tpl from 'raw!./check.html';
import './check.less';

export default {
    url: '/check',
    className: 'check',
    render: function () {
        return tpl;
    },
    bind: function () {
        $(this).on('click', '#checkListBtn', function () {
            const data = $('form').serialize();
            const content = JSON.stringify(data).replace(/"/gi, '').replace(/&/gi, '<br>');
            $.weui.confirm(content, () => {
                console.log(data);
                $.weui.loading('提交中...');
                $.post('/api/v1/user', data).success((res) => {
                    console.log(res);
                }).error((err) => {
                    console.log(err);
                }).always(() => {
                    setTimeout(() => {
                        $.weui.hideLoading();
                        $.weui.toast('提交成功');
                    }, 1000);
                });
            });
        });
    }
};