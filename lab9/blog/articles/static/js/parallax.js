$(document).ready(function () {
    var yPosition;
    var scrolled = 0;
    var $parallaxElements = $('.icons-for-parallax img');
    var $logoElements = $('.logo img');
    var $header = $('.header')
    var initHeight = $header.height()

    $(window).scroll(function () {
        scrolled = $(window).scrollTop();
        for (var i = 0; i < $parallaxElements.length; i++) {
            yPosition = (scrolled * 0.15 * (i + 1));
            $parallaxElements.eq(i).css({top: yPosition});
        }

        for (var i = 0; i < $logoElements.length; i++) {
            yPosition = (scrolled * 0.15 * ($logoElements.length - (i * 5 + 1)));
            $logoElements.eq(i).css({top: yPosition});
        }

        $('.logo').css({marginTop: Math.min(scrolled, 30)})

        $header.height(initHeight + scrolled * 0.32)
    });
});
