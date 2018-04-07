$(document).ready(function() {
    var firstImgState = 0;
    var secondState = 0;
    var selectedIndex = 0;
    // 0 mobile, 1 tablet
    var data = [
        [
            // why
            ['/images/0401 mobile i6 -09.svg', '/images/0401 mobile i6 -12.svg'],
            // how
            ['/images/0401 mobile i6 -11.svg', '/images/0401 mobile i6 -10.svg']
        ],
        [
            ['/images/0319 tablet  -04.svg', '/images/0319 tablet  -04.svg'],
            ['/images/0401 tablet  -07.svg', '/images/0401 tablet  -07.svg']
        ]
    ];

    init();

    function init() {
        initializeHeaderStatus();
        setTimeout(() => {
            initializeMarginByWidth();
        }, 1000);
        setSelectedIndex();
        initializePhotoByWidth();
    }

    function initializeHeaderStatus() {
        $('.header-about p').addClass('header-info-item-hover');
        $('.header-music p').removeClass('header-info-item-hover');
    }

    function initializeMarginByWidth() {
        var height = $('.image-main-content img').height();
        $('#firstImg').css('margin-top', height);
    }

    function initializePhotoByWidth() {
        changePhotoByWidth('#firstImg', [firstImgState, 0]);
        changePhotoByWidth('#secondImg', [secondState, 1]);
    }

    function changePhotoByWidth(target, state) {
        state[0]++;
        var index = state[1];
        setSelectedIndex();
        changeImgUrl(target, state[0], data[selectedIndex][index]);
    }

    function changeImgUrl(target, state, photo) {
        var index = state % 2;
        $(target).attr('src', photo[index]);
    }

    $('#firstImg').click(function() {
        firstImgState++;
        changePhotoByWidth('#firstImg', [firstImgState, 0]);
    });

    $('#secondImg').click(function() {
        secondState++;
        changePhotoByWidth('#secondImg', [secondState, 1]);
    });

    function setSelectedIndex() {
        var width = $(window).width();
        selectedIndex = Math.floor(width / 766);
    }

    $(window).resize(function() {
        initializeMarginByWidth();
        initializePhotoByWidth();
    });

});