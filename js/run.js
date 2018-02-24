$(document).ready(function() {
    var ration = 125 / 768;
    var places = [];
    number = 5;

    data = [{
        roadPhoto: '/images/main_text.svg',
        mainPhoto: '/images/main.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197472029&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        titleIntro: '位於昔日台北火車站後站出口的太原路周邊，過去是北部地區各類五金雜貨、文具、時裝、飾品的批發市場，全盛時期曾高達數十家，其中，太原路上以嬰幼兒玩具、電動玩具最多，因此有玩具街之稱。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.468451959292!2d121.5164839646644!3d25.05210690266453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96cf2fee5ad%3A0x19d4a2f503dc959c!2zMTAz5Y-w5YyX5biC5aSn5ZCM5Y2A5aSq5Y6f6LevOTflt7c!5e0!3m2!1szh-TW!2stw!4v1518844031617',
        trackIntro: '看看是誰組成了太原路吧',
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197472029&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        trackIFrame4: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        trackIFrame5: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247502140&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true'
    }, {
        roadPhoto: '/images/main_text.svg',
        mainPhoto: '/images/main.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197472029&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        titleIntro: '位於昔日台北火車站後站出口的太原路周邊，過去是北部地區各類五金雜貨、文具、時裝、飾品的批發市場，全盛時期曾高達數十家，其中，太原路上以嬰幼兒玩具、電動玩具最多，因此有玩具街之稱。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.468451959292!2d121.5164839646644!3d25.05210690266453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96cf2fee5ad%3A0x19d4a2f503dc959c!2zMTAz5Y-w5YyX5biC5aSn5ZCM5Y2A5aSq5Y6f6LevOTflt7c!5e0!3m2!1szh-TW!2stw!4v1518844031617',
        trackIntro: '看看是誰組成了太原路吧',
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197472029&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        trackIFrame4: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        trackIFrame5: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247502140&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true'
    }, {
        roadPhoto: '/images/main_text.svg',
        mainPhoto: '/images/main.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197472029&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        titleIntro: '位於昔日台北火車站後站出口的太原路周邊，過去是北部地區各類五金雜貨、文具、時裝、adidas的批發市場，全盛時期曾高達數十家，balenciaga，太原路上以嬰幼兒、電動最多，因此有最強市集之稱。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.468451959292!2d121.5164839646644!3d25.05210690266453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96cf2fee5ad%3A0x19d4a2f503dc959c!2zMTAz5Y-w5YyX5biC5aSn5ZCM5Y2A5aSq5Y6f6LevOTflt7c!5e0!3m2!1szh-TW!2stw!4v1518844031617',
        trackIntro: '看看是誰？皮卡啾',
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197472029&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        trackIFrame4: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        trackIFrame5: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247502140&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true'
    }, {
        roadPhoto: '/images/main_text.svg',
        mainPhoto: '/images/main.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197472029&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        titleIntro: '位於昔日台北火車站後站出口的太原路周邊，過去是北部地區各類五金雜貨、文具、時裝、adidas的批發市場，全盛時期曾高達數十家，balenciaga，太原路上以嬰幼、電動最多，因此有孤獨的浪子之稱。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.468451959292!2d121.5164839646644!3d25.05210690266453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96cf2fee5ad%3A0x19d4a2f503dc959c!2zMTAz5Y-w5YyX5biC5aSn5ZCM5Y2A5aSq5Y6f6LevOTflt7c!5e0!3m2!1szh-TW!2stw!4v1518844031617',
        trackIntro: '不要談什麼分離，我不會因為這樣而哭泣，那只是一場遊戲一場夢',
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197472029&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        trackIFrame4: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        trackIFrame5: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247502140&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true'
    }, {
        roadPhoto: '/images/main_text.svg',
        mainPhoto: '/images/main.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197472029&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        titleIntro: '位於昔日台北火車站後站出口的太原路周邊，過去是北部地區各類五金雜貨、文具、時裝、adidas的批發市場，全盛時期曾高達數十家，balenciaga，太原路上以嬰幼、電動最多，因此有旺角卡門之稱。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.468451959292!2d121.5164839646644!3d25.05210690266453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96cf2fee5ad%3A0x19d4a2f503dc959c!2zMTAz5Y-w5YyX5biC5aSn5ZCM5Y2A5aSq5Y6f6LevOTflt7c!5e0!3m2!1szh-TW!2stw!4v1518844031617',
        trackIntro: '當你說要走，我不想回首的時候....',
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197472029&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/232886537&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        trackIFrame4: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        trackIFrame5: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247502140&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true'
    }];  
    init(); 

    function init() {
        $('.header-music p').addClass('header-info-item-hover');
        for (var i = 0; i < number; i++) {
            var place = document.getElementsByClassName('place' + String(i + 1))[0];
            places.push(place);
        }
        // add click event to all points
        addEvent();
        // dynamic setting the width of all points
        initialPlaceWidth();
        // dynamic setting the height of the spinner
        scaleSpinnerHeight();
    }

    function initialPlaceWidth() {
        var initialWidth = $(window).width();
        scalePlaceSize(initialWidth * ration);
    }

    function replaceContentWithModel(index) {
        model = data[index];
        $('.image-content .road-text-image').attr('src', model.roadPhoto);
        $('.image-content .main-image').attr('src', model.mainPhoto);
        $('#titleIFrame').attr('src', model.titleIFrame);
        $('.functionailty-area p').html(model.trackIntro);
        $('#google-iframe').attr('src', model.googleMapSrc);
        $('.intro-content p').html(model.titleIntro);
        $('#track-iframe1').attr('src', model.trackIFrame1);
        $('#track-iframe2').attr('src', model.trackIFrame2);
        $('#track-iframe3').attr('src', model.trackIFrame3);
        $('#track-iframe4').attr('src', model.trackIFrame4);
        $('#track-iframe5').attr('src', model.trackIFrame5);
    }
      
    function startSpinning() {
        $('.spinner-container').show();
    }

    function stopSpinning() {
        $('.spinner-container').hide();
    }

    function fetachIFrame(index) {
        // 未完成
        if (index == 0 || index == 3 || index == 4)
            return;
        replaceContentWithModel(index);
        startSpinning();
        setTimeout(function() {
            stopSpinning();
            $('.hide-container').fadeIn();
        }, 2500);
    }
    
    function addEvent() {
        for (let i = 0; i < number; i++) {
            places[i].addEventListener('click', function() {
                fetachIFrame(i);
            }, false);
        }
    }

    function scalePlaceSize(size) {
        for (let i = 0; i < number; i++) {
            $('.place' + String(i + 1)).width(size);
            $('.place' + String(i + 1)).height(size);
        }
        console.log('Dynamic setting the width of all points to: ' + String(size));
    }

    function scaleSpinnerHeight() {
        var height = $( window ).height();
        var newHeight = height - 60;
        $('.spinner-container').height(newHeight);
        console.log('height: ' + height);
    }

    $(window).resize(function() {
        scaleSpinnerHeight();
        var deltaWindowSize = $(window).width();
        var size = deltaWindowSize * ration;
        scalePlaceSize(size);
    });

});
