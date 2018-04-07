
$(document).ready(() => {
    var points = [];
    var scaleRationOfPoint = 70 / 768;
    numberOfPoint = 3;

    initializePageStatus();

    function initializePageStatus() {
        // active introButton status
        activeIntroButton();
        // fetch all points and insert into array 
        initailizePoints();
        bindEventOfClickPoint();
        // initailize the size of the points
        initialPointSize();
    }

    function initailizePoints() {
        for (var i = 0; i < numberOfPoint; i++) {
            var point = document.getElementsByClassName('point' + String(i + 1))[0];
            points.push(point);
        }
    }

    function bindEventOfClickPoint() {
        for (let i = 0; i < numberOfPoint; i++) {
            var eventStatus = 'click';
            points[i].addEventListener(eventStatus, function() {
                hideAllIFrame();
                hideTrackIntro();
                showIFrameByName('#track-iframe' + String(i + 1));
            });
        }
    }

    function hideTrackIntro() {
        $('.functionailty-area p').hide('slow');
    }

    function hideAllIFrame() {
        for (var i = 0; i < numberOfPoint; i++) {
            hideIFrameByIndex(i);
            pauseSoundCloudWidgetByIndex(i);
        }
    }

    function hideIFrameByIndex(index) {
        title = '#track-iframe' + String(index + 1);
        $(title).hide();
    }

    function pauseSoundCloudWidgetByIndex(index) {
        titleID = 'track-iframe' + String(index + 1);
        var widget = SC.Widget(document.getElementById(titleID));
        // widget.seekTo(1);
        widget.pause();
    }

    function showIFrameByName(title) {
        $(title).fadeIn();
    }

    function initialPointSize() { // initialize the width of all points by the width of the window
        var windowWidth = $(window).width();
        scalePointSize(windowWidth * scaleRationOfPoint);
    }

    $(window).resize(function() {
        var windowWidth = $(window).width();
        var size = windowWidth * scaleRationOfPoint;
        scalePointSize(size);
    });

    function scalePointSize(size) {
        for (let i = 0; i < numberOfPoint; i++) {
            var point = '.point' + String(i + 1);
            setPointHeightAndWidth(point, size);
        }
        console.log('Dynamic setting the size of all track points to: ' + String(size));
    }

    function setPointHeightAndWidth(point, size) {
        $(point).width(size);
        $(point).height(size);
    }

    $('#close').click(function() {
        setIntroContent();
        closeAllIFrame();
        hidePlaceIntroDetail();
    });

    function closeAllIFrame() {
        hideAllIFrame();
        stopTitleIFrame();
    }

    function hidePlaceIntroDetail() {
        $('.hide-container').fadeOut();
    }

    function stopTitleIFrame() {
        var widget = SC.Widget(document.getElementById('titleIFrame'));
        // widget.seekTo(1);
        widget.pause();
    }

    function showTrackDetail() {
        activeTrackButton();
        unActiveIntroButton();
        stopTitleIFrame();
        $('.functionailty-area p').show();
        $('.display-content').hide('slow');
        showTargetAfterTimeOut('.track-container');
    }

    $('#track').on('click', function() {
        showTrackDetail();
    });

    $('#intro').on('click', function() {
        setIntroContent();
    });

    function setIntroContent() {
        activeIntroButton();
        unActiveTrackButton();
        hideAllIFrame();
        $('.functionailty-area p').hide('slow');
        // hide track and show intro-content
        $('.track-container').hide('slow');
        showTargetAfterTimeOut('.display-content');
    }

    function activeTrackButton() {
        $('#track').addClass('buttonHover');
    }

    function activeIntroButton() {
        $('#intro').addClass('buttonHover');
    }

    function unActiveTrackButton() {
        $('#track').removeClass('buttonHover');
    }

    function unActiveIntroButton() {
        $('#intro').removeClass('buttonHover');
    }

    function showTargetAfterTimeOut(target) {
        window.setTimeout(function() {
            $(target).fadeIn('slow');
        }, 1000);
    }
});