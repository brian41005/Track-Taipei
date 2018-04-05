$(document).ready(function() {
    init();
    var firstImgState = 0;
    var secondState = 0;
    
    function init() {
        initializeHeaderStatus();
        setTimeout(() => {
            setImgMargin();
        }, 1000);
    }

    function initializeHeaderStatus() {
        $('.header-about p').addClass('header-info-item-hover');
        $('.header-music p').removeClass('header-info-item-hover');
    }

    $(window).resize(function() {
        setImgMargin();
    });

    function setImgMargin() {
        var height = $('.image-main-content img').height();
        $('#firstImg').css('margin-top', height);
        console.log('height' + height);
    }

    function changeImgUrl(target, urls, state) {
        var index = state % 2;
        $(target).attr('src', urls[index]);
    }

    $('#firstImg').click(function() {
        var urls = ['/images/0401 mobile i6 -11.svg', '/images/0401 mobile i6 -10.svg'];
        firstImgState++;
        changeImgUrl('#firstImg', urls, firstImgState);
    });

    $('#secondImg').click(function() {
        var urls = ['/images/0401 mobile i6 -09.svg', '/images/0401 mobile i6 -12.svg'];
        secondState++;
        changeImgUrl('#secondImg', urls, secondState);
    });
});