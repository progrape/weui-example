import $ from 'jquery';

/**
 * get scroll top
 * @returns {number|*}
 */
const getScrollTop = () => {
    return document.documentElement.scrollTop || document.body.scrollTop;
};

/**
 * set transition
 * @param $target
 * @param time
 */
const setTransition = ($target, time) => {
    return $target.css({
        '-webkit-transition': `all ${time}s`,
        'transition': `all ${time}s`
    });
};

/**
 * set translate
 */
const setTranslate = ($target, diff) => {
    return $target.css({
        '-webkit-transform': `translate3d(0, ${diff}px, 0)`,
        'transform': `translate3d(0, ${diff}px, 0)`
    });
};

$.fn.pull = function (options) {

    const defaults = $.extend({
        offset: 40,
        threshold: 100,
        onRefresh: (callback) => {
            callback(null);
        }
    }, options);

    let start;
    let end;
    $(this).on('touchstart', function (e) {
        if (getScrollTop() <= 0) {
            // 记录开始点
            start = e.originalEvent.touches[0].pageY;
            end = 0;
            // 消除 transition
            setTransition($(this), 0);
            $('.weui_pull_tips').find('span').text('下拉刷新').siblings('i').hide();
        }
    }).on('touchmove', function (e) {
        if (getScrollTop() <= 0) {
            end = e.originalEvent.touches[0].pageY;
            if (start < end) {
                e.preventDefault();
                setTransition($(this), 0);
                setTranslate($(this), (end - start - defaults.offset) * .6);
            }
        }
    }).on('touchend', function (e) {
        if (getScrollTop() <= 0) {
            // 如果下拉超过此距离, 才触发刷新, 否则直接弹回去
            if (end - start >= defaults.threshold) {
                setTransition($(this), .3);
                setTranslate($(this), 0);
                $('.weui_pull_tips').find('span').text('刷新中').siblings('i').show();
                typeof defaults.onRefresh === 'function' && defaults.onRefresh.call($(this), (err) => {
                    setTransition($(this), .3);
                    setTranslate($(this), 0 - defaults.offset);
                });
            }
            else {
                setTransition($(this), .3);
                setTranslate($(this), 0 - defaults.offset);
            }
        }
    });
};