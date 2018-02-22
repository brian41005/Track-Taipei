
$(document).ready(() => {
    
    initIFrame();
    var points = [];
    var ration = 100 / 768;
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

    function initialPointWidth() { // initialize the width of all points by the width of the window
        var initialWidth = $(window).width();
        scalePointsSize(initialWidth * ration);
    }

    function scalePointsSize(size) {
        for (let i = 0; i < number; i++) {
            var point = '.point' + String(i + 1);
            $(point).width(size);
            $(point).height(size);
        }
        console.log('Dynamic setting the width of all points to: ' + String(size));
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
            titleID = '#' + title;
            $(titleID).hide();
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
                hideAllIFrame();
                showIFrameByName('#track-iframe' + String(i + 1));
            });
        }
    }

    function initIFrame() {
        $('#intro').addClass('buttonHover');
        $('.header-music p').addClass('header-info-item-hover');
    }

    function stopTitleIFrame() {
        var widget = SC.Widget(document.getElementById('titleIFrame'));
        widget.pause();
        widget.seekTo(1);
    }

    $('#track').on('click', function() {
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

    function setIntroContent() {
        hideAllIFrame();
        $('.functionailty-area p').hide('slow');
        // hide track and show intro-content
        $('.track-container').hide('slow');
        window.setTimeout(function() {
            $('.display-content').fadeIn('slow');
        }, 1000);
        $('#intro').addClass('buttonHover');
        $('#track').removeClass('buttonHover');
    }

    $('#intro').on('click', function() {
        setIntroContent();
    });

    $('#close').click(function() {
        setIntroContent();
        $('.hide-container').fadeOut();
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