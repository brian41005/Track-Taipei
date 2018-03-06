$(document).ready(function() {
    initializeHeaderStatus();
    
    function initializeHeaderStatus() {
        $('.header-about p').addClass('header-info-item-hover');
        $('.header-music p').removeClass('header-info-item-hover');
    }
});