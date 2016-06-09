import 'weui.js';
import * as uploader from '../lib/uploader';
import tpl from 'raw!./uploader.html';
import styles from './uploader.less';

export default {
    url: '/uploader',
    className: 'uploader',
    render: function () {
        return tpl;
    },
    bind: function () {
        const files = [];
        $(this).on('change', '#file', (e) => {
            const file = event.target.files[0];

            if (!file) {
                return;
            }

            $.weui.loading('压缩中...');
            uploader.compress(file, 400, (err, file) => {
                $.weui.hideLoading();
                if (err) {
                    $.weui.alert('压缩图片发生异常');
                    console.log(err);
                }
                else {
                    $(this).find('.weui_uploader_files').append($(`<li class="weui_uploader_file" style="background-image:url(${URL.createObjectURL(file.blob)})"></li>`));
                    files.push(file);
                    $('#uploadCounter').text(files.length);

                    if (files.length >= 4) {
                        $(this).find('.weui_uploader_input_wrp').hide();
                    }

                }
            });

        }).on('click', '.weui_uploader_file', function () {
            const index = $(this).index();
            $.weui.confirm('是否要删除这张图片?', () => {
                files.splice(index, 1);
                $(this).remove();
                $('#uploadCounter').text(files.length);
                $('.weui_uploader_input_wrp').show();
            });
        }).on('click', '#uploadBtn', () => {
            function upload(file, index) {
                const fd = new FormData();
                fd.append('file', file.blob, file.name);
                $.ajax({
                    type: 'POST',
                    url: '/api/upload',
                    data: fd,
                    processData: false,
                    contentType: false
                }).success((res) => {
                }).error((err) => {
                }).always(() => {
                    $('.weui_uploader_file').eq(index).addClass('weui_uploader_status').html(`<div class="weui_uploader_status_content"> <i class="weui_icon_warn"></i> </div>`);
                });
            }

            files.map(upload);
        });
    }
};