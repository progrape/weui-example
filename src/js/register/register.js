import $ from 'jquery';
import 'weui.js';
import tpl from 'raw!./register.html';

export default {
    url: '/register',
    className: 'register',
    render: function () {
        return tpl;
    },
    bind: function () {
        $('#registerForm').form();

        $(this).on('click', '.js_btn', function () {
            $('#registerForm').validate(function (err) {
                if (!err) {
                    $.weui.loading('数据提交中...');
                    // 提交数据
                    const data = $('#registerForm').serialize();
                    $.post('/api/v1/user', data).success((res) => {
                        console.log(res);
                    }).error((err) => {
                        console.log(err);
                    }).always(() => {
                        setTimeout(() => {
                            $.weui.hideLoading();
                            $.weui.toast('注册成功');
                        }, 800);
                    });
                }
            });
        });
    }
};