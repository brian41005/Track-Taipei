
$(document).ready(() => {
    $('.header-music p').click(function() {
        window.location.href = '/run';
    });

    $('.header-about p').click(function() {
        window.location.href = '/about';
    });

    $('.header-title img').click(function() {
        window.location.href = '/entry';
    });
});