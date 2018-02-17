$(document).ready(function() {
    var points = [];
    number = 5;
    init();

    function init() {
        $('.header-runmusic p').addClass('headerHover');
        for (var i = 0; i < number; i++) {
            var point = document.getElementsByClassName('point' + String(i + 1))[0];
            points.push(point);
        }
        addEvent();
    }

    function fetachIFrame(index) {
        console.log(index);
        // window.location.href = "/";
        // $('.frame-content').show();
        // $('.hide-container').fadeIn();

    }

    $('.close-icon').click(function() {
        // $('.frame-content').hide('slow');
        // console.log('click');
    });

    function addEvent() {
        for (let i = 0; i < number; i++) {
            points[i].addEventListener('click', function() {
                fetachIFrame(i);
            }, false);
        }
    }
});