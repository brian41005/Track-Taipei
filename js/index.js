
$(document).ready(() => {
    
    initIFrame();
    var points = [];
    var ration = 100 / 768;
    var currentSound = 0;
    var temp = 0;
    var isClick = false;
    number = 5;
    init();

    function init() {
        for (var i = 0; i < number; i++) {
            var point = document.getElementsByClassName('point' + String(i + 1))[0];
            points.push(point);
        }
        addEvent();
        initialPointWidth();
    }

    function scalePointsSize(size) {
        for (let i = 0; i < number; i++) {
            $('.point' + String(i + 1)).width(size);
            $('.point' + String(i + 1)).height(size);
        }
        console.log('Dynamic setting the width of all points to: ' + String(size));
    }

    function initialPointWidth() {
        var initialWidth = $(window).width();
        scalePointsSize(initialWidth * ration);
    }

    $(window).resize(function() {
        var deltaWindowSize = $(window).width();
        var size = deltaWindowSize * ration;
        scalePointsSize(size);
    });

    function hideAllIFrame() {
        for (var i = 0; i < number; i++) {
            point = '.point' + String(i + 1);
            title = $(point).data('id');
            $('#' + title).hide();
            var widget = SC.Widget(document.getElementById(title));
            widget.pause();
            widget.seekTo(1);
        }
    }

    function showIFrameByName(title) {
        $(title).fadeIn();
    }

    function addEvent() {
        for (let i = 0; i < number; i++) {
            points[i].addEventListener('click', function() {
                currentSound = i;
                hideAllIFrame();
                showIFrameByName('#track-iframe' + String(i + 1));
            }, false);
        }
    }

    function initIFrame() {
        containerWidth = $('.container').width();
        $('#google-iframe').width(containerWidth);

        $('#intro').addClass('buttonHover');
        $('.header-music p').addClass('header-info-item-hover');
    }

    function stopTitleIFrame() {
        var widget = SC.Widget(document.getElementById('titleIFrame'));
        widget.pause();
        widget.seekTo(1);
    }

    $('#track').click(function() {
        stopTitleIFrame();
        // hide intro-content and show track 
        $('.functionailty-area p').show();
        $('.display-content').hide('slow');
        window.setTimeout(function() {
            $('.track-container').fadeIn();
        }, 1000);
        $(this).addClass('buttonHover');
        $('#intro').removeClass('buttonHover');
    });

    $('#intro').click(function() {
        hideAllIFrame();
        $('.functionailty-area p').hide('slow');
        // hide track and show intro-content
        $('.track-container').hide('slow');
        window.setTimeout(function() {
            $('.display-content').fadeIn('slow');
        }, 1000);
        $(this).addClass('buttonHover');
        $('#track').removeClass('buttonHover');
    });
});





/*
$('#post-btn').click(() => {
    var indexing = {
        key: 0,
    };
    $.ajax({
        type : 'POST',
        url : '/data',
        data : indexing,
        success : json => {
            console.log(json);
        }
    });
});


$('#change-iframe-btn').click(function() {
        var data = {
            name: 'Z-Xuan'
        };

        console.log(data.name);
        //document.getElementById('header-iframe').src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247502140&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true";
        //console.log('done');
        //$('.track-content img').attr('src', '/images/0131 sketch i8-16.png');
    })
*/