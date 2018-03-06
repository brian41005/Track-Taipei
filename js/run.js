$(document).ready(function() {
    var scaleRationOfPlace = 125 / 768;
    var places = [];
    numberOfPlace = 5;

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
        roadPhoto: '/images/svg-18.svg',
        mainPhoto: '/images/main.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/405052437&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        titleIntro: '位於昔日台北火車站後站出口的太原路周邊，過去是北部地區各類五金雜貨、文具、時裝、飾品的批發市場，全盛時期曾高達數十家，其中，太原路上以嬰幼兒玩具、電動玩具最多，因此有玩具街之稱。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.468451959292!2d121.5164839646644!3d25.05210690266453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96cf2fee5ad%3A0x19d4a2f503dc959c!2zMTAz5Y-w5YyX5biC5aSn5ZCM5Y2A5aSq5Y6f6LevOTflt7c!5e0!3m2!1szh-TW!2stw!4v1518844031617',
        trackIntro: '看看是誰組成了太原路吧',
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/405052560&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/405052536&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/405052521&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame4: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/405052494&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame5: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/405052473&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
    }, {
        roadPhoto: '/images/022520.svg',
        mainPhoto: '/images/svg-17.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/404857155&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        titleIntro: '歷經清治時期、日治時期、戰後時期，興建於民國十七年的東門市場是個歷史悠久的傳統市場，充滿了許多老饕客的共同記憶和現代人的新穎口味。無論是彈牙的魚丸、酥脆的餡餅、鮮甜的米粉湯，蜿蜒的小巷弄內隱藏著道地的庶民小吃。在各地眷村紛紛拆遷的現代，東門市場的美食成了另類的臺北史紀錄。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.986160014005!2d121.52451861541354!3d25.03454374442266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a982bcb19f97%3A0x431fc1c5030a686!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A5L-h576p6Lev5LqM5q61ODHomZ8!5e0!3m2!1szh-TW!2stw!4v1519643520638',
        trackIntro: '看看是誰組成了東門市場吧',
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/457291410&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/404857203&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/404857191&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame4: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/404857188&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame5: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/404857173&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
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

    initializePageStatus(); 

    function initializePageStatus() {
        // active headerMusic's bottom border
        activeHeaderMusic();
        // fetch all places and insert into places array
        initailizePlaces();
        // bind click event to all points
        bindEventOfClickPlace();
        // dynamic setting the size of all points
        initializePlaceSize();
        // dynamic setting the photo of the device
        setMapImgByWidthOfDevice();
    }

    function activeHeaderMusic() {
        $('.header-music p').addClass('header-info-item-hover');
    }

    function initailizePlaces() {
        for (var i = 0; i < numberOfPlace; i++) {
            var placeName = 'place' + String(i + 1);
            var place = document.getElementsByClassName(placeName)[0];
            places.push(place);
        }
    }

    function bindEventOfClickPlace() {
        for (let i = 0; i < numberOfPlace; i++) {
            var eventStatus = 'click';
            places[i].addEventListener(eventStatus, function() {
                fetachIFrame(i);
            });
        }
    }

    function fetachIFrame(index) {
        // 未完成
        if (index == 0 || index == 3 || index == 4)
            return;
        replaceIntroContentByIndex(index);
        startSpinning();
        stopSpinningAfterTimeOut();
    }

    function stopSpinningAfterTimeOut() {
        setTimeout(function() {
            stopSpinning();
            showPlaceIntroDetail();
        }, 2500);
    }

    function stopSpinning() {
        $('.spinner-container').hide();
    }

    function showPlaceIntroDetail() {
        $('.hide-container').fadeIn();
    }
    
    function replaceIntroContentByIndex(index) {
        model = data[index];
        replaceIntroContent(model);
    }

    function replaceIntroContent(model) {
        replaceMainPhotoContent(model);
        replaceMainDisplayContent(model);
        replaceHideTrackContent(model);
    }

    function replaceMainPhotoContent(model) {
        $('.image-content .road-text-image').attr('src', model.roadPhoto);
        $('.image-content .main-image').attr('src', model.mainPhoto);
    }

    function replaceMainDisplayContent(model) {
        $('#titleIFrame').attr('src', model.titleIFrame);
        $('.functionailty-area p').html(model.trackIntro);
        $('#google-iframe').attr('src', model.googleMapSrc);
    }

    function replaceHideTrackContent(model) {
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

    function initializePlaceSize() {
        var windowWidth = $(window).width();
        scalePlaceSize(windowWidth * scaleRationOfPlace);
    }

    function scalePlaceSize(size) {
        for (let i = 0; i < numberOfPlace; i++) {
            var place = '.place' + String(i + 1);
            setPlaceHeightAndWidth(place, size);
        }
    }

    function setPlaceHeightAndWidth(place, size) {
        $(place).width(size);
        $(place).height(size);
    }

    $(window).resize(function() {
        var windowWidth = $(window).width();
        var size = windowWidth * scaleRationOfPlace;
        scalePlaceSize(size);
        setMapImgByWidthOfDevice();
    });

    function setMapImgByWidthOfDevice() {
        var windowWidth = $(window).width();
        var imgs = ['/images/0225svg-16.svg', '/images/map_工作區域 1.svg', '/images/map_工作區域 1.svg', '/images/map_工作區域 1.svg'];
        var imgSelectedIndex = Math.floor(windowWidth / 768);
        // if width > 768 index becomes to one else becomes to zero
        loadMapImageWidthUrl(imgs[imgSelectedIndex]);
    }

    function loadMapImageWidthUrl(url) {
        // when attr load completely then call scaleSpinnerHeight
        $('#map').attr('src', url).load(function() {
            // dynamic setting the height of the spinner
            // because the height of the image has changed
            scaleSpinnerHeight();
        });
    }

    function scaleSpinnerHeight() {
        var height = $('.map-content #map').height();
        $('.spinner-container').height(height);
    }
});
