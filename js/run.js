$(document).ready(function() {
    var scaleRationOfPlace = 100 / 768;
    var places = [];
    numberOfPlace = 5;

        pointsPosition = [{
            top1: '5',
            left1: '45',
            top2: '31',
            left2: '50',
            top3: '60',
            left3: '40',
        }, {
            top1: '10',
            left1: '53',
            top2: '35',
            left2: '35',
            top3: '60',
            left3: '52',
        }, {
            top1: '20',
            left1: '35',
            top2: '40',
            left2: '55',
            top3: '65',
            left3: '40',
        }, {
            top1: '15',
            left1: '42',
            top2: '45',
            left2: '50',
            top3: '60',
            left3: '36',
        }, {
            top1: '10',
            left1: '61',
            top2: '20',
            left2: '40',
            top3: '55',
            left3: '45',
        }];
    
    // add br

    data = [{
        mainPhoto: '/images/大稻埕.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197472029&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        titleIntro: '大稻埕是臺北市大同區西南部的一個傳統地域名稱，18世紀末，因淡水港的開放後成為商貿繁榮、人文薈萃之地。大稻埕擁有華麗的巴洛克式建築、傳統的閩南平房、明亮的紅磚洋樓，不論是古蹟建築、傳統民俗、茶行、布行、中藥材行、在地美食等，到處都有舊城的歷史軌跡。而如今因著擁有深厚歷史傳承的百年老舖與創意街區，打造出大稻埕新生活美學。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.468451959292!2d121.5164839646644!3d25.05210690266453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96cf2fee5ad%3A0x19d4a2f503dc959c!2zMTAz5Y-w5YyX5biC5aSn5ZCM5Y2A5aSq5Y6f6LevOTflt7c!5e0!3m2!1szh-TW!2stw!4v1518844031617',
        trackIntro: '時光荏苒無船的碼頭河川依然湧動街道裡乾貨與藥材香氣依舊穿梭於不同時間與空間我聽到新舊融合譜出的節奏',
        trackMapImg: 'images/大稻埕_track.svg', 
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197472029&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
    }, {
        mainPhoto: '/images/main1.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/405052437&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        titleIntro: '位於昔日台北火車站後站出口的太原路周邊，過去是北部地區各類五金雜貨、文具、時裝、飾品的批發市場，全盛時期曾高達數十家。而現在太原路上則充斥大量的塑膠製品，各式規格塑膠水桶、塑膠容器、塑膠布、塑膠捲，各式製品琳琅滿目，應有盡有。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.468451959292!2d121.5164839646644!3d25.05210690266453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96cf2fee5ad%3A0x19d4a2f503dc959c!2zMTAz5Y-w5YyX5biC5aSn5ZCM5Y2A5aSq5Y6f6LevOTflt7c!5e0!3m2!1szh-TW!2stw!4v1518844031617',
        trackIntro: '玻璃瓶罐互相碰撞，焊接擦出零星的火花，俯拾皆是生活的碎片',
        trackMapImg: 'images/0319 tablet  -17.svg', 
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/405052560&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/405052536&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/405052521&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    }, {
        mainPhoto: '/images/東門市場.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/404857155&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        titleIntro: '歷經清治時期、日治時期、戰後時期，興建於民國十七年的東門市場是個歷史悠久的傳統市場，充滿了許多老饕客的共同記憶和現代人的新穎口味。無論是彈牙的魚丸、酥脆的餡餅、鮮甜的米粉湯，蜿蜒的小巷弄內隱藏著道地的庶民小吃。在各地眷村紛紛拆遷的現代，東門市場的美食成了另類的臺北史紀錄。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.986160014005!2d121.52451861541354!3d25.03454374442266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a982bcb19f97%3A0x431fc1c5030a686!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A5L-h576p6Lev5LqM5q61ODHomZ8!5e0!3m2!1szh-TW!2stw!4v1519643520638',
        trackIntro: '菜車輪似乎偏了，轆轆聲中時不時混雜嘰呀的聲音緩緩地進入一片叫賣聲、殺價聲、談笑聲裡新的一天又要開始了',
        trackMapImg: 'images/東門市場_track.svg', 
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/457291410&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/404857203&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/404857191&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    }, {
        mainPhoto: '/images/龍山.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197472029&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        titleIntro: '艋岬，又名萬華，是台北市開發最早的地方。而「龍山寺」是當地居 民信仰、活動、集會和指揮的中心，保佑著過去渡海來台的先民平安順利，富有早期居民打拚、奮鬥的文化歷史。龍山寺平日香火鼎盛，其獨特的建築特色極具藝術價值，附近的懷舊氣氛更讓龍山寺成為台北著名的觀光景點。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.468451959292!2d121.5164839646644!3d25.05210690266453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96cf2fee5ad%3A0x19d4a2f503dc959c!2zMTAz5Y-w5YyX5biC5aSn5ZCM5Y2A5aSq5Y6f6LevOTflt7c!5e0!3m2!1szh-TW!2stw!4v1518844031617',
        trackIntro: '轉角後傳來陣陣誦經定時敲起的木魚、銅鈴耳邊的呢喃是心中的渴求亦是人們共同懷有的虔誠與執念',
        trackMapImg: 'images/龍山_track.svg', 
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197472029&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
    }, {
        mainPhoto: '/images/羅文化.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197472029&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        titleIntro: '溫羅汀是在台灣大學與師範大學中間，由溫州街、羅斯福路、汀州街一帶交織而成的區域。在這人文空間最密集的區域，大大小小的獨立書店、咖啡廳、live house聚集於此，成為可觀的人文風景。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.468451959292!2d121.5164839646644!3d25.05210690266453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96cf2fee5ad%3A0x19d4a2f503dc959c!2zMTAz5Y-w5YyX5biC5aSn5ZCM5Y2A5aSq5Y6f6LevOTflt7c!5e0!3m2!1szh-TW!2stw!4v1518844031617',
        trackIntro: '翻動書頁，細細交談字句在空氣中飄盪安靜在這裡似乎成為一種聲音',
        trackMapImg: 'images/羅文化_track.svg', 
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197472029&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/232886537&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        //trackIFrame4: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405573275&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true',
        //trackIFrame5: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247502140&amp;color=%232d0d15&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true'
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
        //if (index == 0 || index == 3 || index == 4)
        //    return;
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

        posModel = pointsPosition[index];
        replaceTrackContent(model, posModel);

    }

    function  replaceTrackContent(model, posModel) {
        replaceHideTrackContent(model, posModel);
    }

    function replaceHideTrackContent(model, posModel) {
        $('.intro-content p').html(model.titleIntro);
        $('#track-map').attr('src', model.trackMapImg);
        $('#track-iframe1').attr('src', model.trackIFrame1);
        $('#track-iframe2').attr('src', model.trackIFrame2);
        $('#track-iframe3').attr('src', model.trackIFrame3);
        
        $('.point1').css('top', posModel.top1 + '%');
        $('.point1').css('left', posModel.left1 + '%');
        $('.point2').css('top', posModel.top2 + '%');
        $('.point2').css('left', posModel.left2 + '%');
        $('.point3').css('top', posModel.top3 + '%');
        $('.point3').css('left', posModel.left3 + '%');
    }

    function replaceIntroContent(model) {
        replaceMainPhotoContent(model);
        replaceMainDisplayContent(model);
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
        var imgs = ['/images/road_mobile.svg', '/images/road_tablet.svg', '/images/road_tablet.svg', '/images/road_tablet.svg'];
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
