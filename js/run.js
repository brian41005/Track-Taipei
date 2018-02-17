$(document).ready(function() {
    var ration = 125 / 768;
    var points = [];
    number = 5;
    init(); 
    // console.log(initialWidth) ;
    function init() {
        $('.header-music p').addClass('header-info-item-hover');
        for (var i = 0; i < number; i++) {
            var point = document.getElementsByClassName('point' + String(i + 1))[0];
            points.push(point);
        }
        // add click event to all points
        addEvent();
        // dynamic setting the width of all points
        initialPointWidth();
    }

    function initialPointWidth() {
        var initialWidth = $(window).width();
        scalePointsSize(initialWidth * ration);
    }

    function fetachIFrame(index) {
        console.log(index);
        window.location.href = "/0";
        // $('.frame-content').show();
        // $('.hide-container').fadeIn();
    }
    
    function addEvent() {
        for (let i = 0; i < number; i++) {
            points[i].addEventListener('click', function() {
                fetachIFrame(i);
            }, false);
        }
    }

    function scalePointsSize(size) {
        for (let i = 0; i < number; i++) {
            $('.point' + String(i + 1)).width(size);
            $('.point' + String(i + 1)).height(size);
        }
        console.log('Dynamic setting the width of all points to: ' + String(size));
    }

    $(window).resize(function() {
        var deltaWindowSize = $(window).width();
        var size = deltaWindowSize * ration;
        scalePointsSize(size);
    });
});
/*

$('.close-icon').click(function() {
    // $('.frame-content').hide('slow');
    // console.log('click');
});
*/