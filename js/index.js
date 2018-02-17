
$(document).ready(() => {
    initIFrame();
    var points = [];
    number = 5;
    init();

    function init() {
        for (var i = 0; i < number; i++) {
            var point = document.getElementsByClassName('point' + String(i + 1))[0];
            points.push(point);
        }
        addEvent();
    }

    function hideAllIFrame() {
        for (var i = 0; i < number; i++) {
            point = '.point' + String(i + 1);
            title = $(point).data('id');
            $('#' + title).hide();
            $('#' + title)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
            // still need to initialization ....

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
            }, false);
        }
    }


    $('#change-iframe-btn').click(function() {
        var data = {
            name: 'Z-Xuan'
        };

        console.log(data.name);
        //document.getElementById('header-iframe').src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247502140&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true";
        //console.log('done');
        //$('.track-content img').attr('src', '/images/0131 sketch i8-16.png');
    })

    function initIFrame() {
        containerWidth = $('.container').width();
        $('#google-iframe').width(containerWidth);
        $('#intro').addClass('buttonHover');
        $('.header-music p').addClass('header-info-item-hover');
    }

    $('#track').click(function() {
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
*/