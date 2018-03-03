
$(document).ready(() => {
    $('.header-music p').click(function() {
        var href = '/run';
        setWindowLocationHref(href);
    });

    $('.header-about p').click(function() {
        var href = '/about';
        setWindowLocationHref(href);
    });

    $('.header-title img').click(function() {
        var href = '/entry'
        setWindowLocationHref(href);
    });

    function setWindowLocationHref(href) {
        window.location.href = href;
    }
});