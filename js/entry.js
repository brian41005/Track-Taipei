$(document).ready(function() {

    $('#entry-btn').click(function() {
        var href = '/run';
        setWindowLocationHref(href);
    });

    function setWindowLocationHref(href) {
        window.location.href = href;
    }
});