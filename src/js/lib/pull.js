import $ from 'jquery';

$.fn.pull = function (options) {

    const defaults = $.extend({
        onRefresh: (callback) => {
            callback(null);
        }
    }, options);

    let start;
    let diff;
    $(this).on('touchstart', function (e) {
        start = e.originalEvent.touches[0].pageY;
        $('.weui_pull_tips').find('span').text('下拉刷新').siblings('i').hide();
    }).on('touchmove', function (e) {
        const move = e.originalEvent.touches[0].pageY;
        diff = move - start - 40;
        console.log($(this).scrollTop());
        if (diff + 40 > 0) {
            $(this).css('-webkit-transition', 'none')
                .css('transition', 'none')
                .css('-webkit-transform', 'translateY(' + diff + 'px)')
                .css('transform', 'translateY(' + diff + 'px)');
        }
    }).on('touchend', function (e) {
        if (diff + 40 > 0) {
            $(this)
                .css('-webkit-transition', 'all ease .3s')
                .css('transition', 'all ease .3s')
                .css('-webkit-transform', 'translateY(0)')
                .css('transform', 'translateY(0)');
            $('.weui_pull_tips').find('span').text('刷新中').siblings('i').show();
            defaults.onRefresh((err) => {
                $(this)
                    .css('-webkit-transition', 'all ease .3s')
                    .css('transition', 'all ease .3s')
                    .css('-webkit-transform', 'translateY(-40px)')
                    .css('transform', 'translateY(-40px)');
            });
        }
    });
};