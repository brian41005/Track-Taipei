$(document).ready(function() {
    init();

    function init() {
        initializeHeaderStatus();
        setImgMargin();
    }

    function initializeHeaderStatus() {
        $('.header-about p').addClass('header-info-item-hover');
        $('.header-music p').removeClass('header-info-item-hover');
    }

    $(window).resize(function() {
        setImgMargin();
    });

    function setImgMargin() {
        var height = $('.image-main-content').height();
        $('#firstImg').css('margin-top', height);
        console.log('height' + height);
    }


});