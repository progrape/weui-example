import $ from 'jquery';

$.fn.pull = function (options) {
    let start;
    $(this).on('touchstart', function (e) {
        start = e.originalEvent.touches[0].pageY;
        $('.weui_pull_tips').find('span').text('下拉刷新').siblings('i').hide();
    }).on('touchmove', function (e) {
        const move = e.originalEvent.touches[0].pageY;
        const diff = move - start - 50;
        $(this).css('transition', 'none').css('transform', 'translateY(' + diff + 'px)');
    }).on('touchend', function (e) {
        $(this).css('transition', 'all ease .3s').css('transform', 'translateY(0)');
        $('.weui_pull_tips').find('span').text('刷新中').siblings('i').show();
        setTimeout(() => {
            $(this).css('transition', 'all ease .3s').css('transform', 'translateY(-50px)');
        }, 1000);
    });
};