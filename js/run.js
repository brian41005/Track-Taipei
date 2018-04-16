$(document).ready(function() {
    var scaleRationOfPlace = 100 / 768;
    var places = [];
    numberOfPlace = 5;
    tabletPosition = [{
        top1: '7',
        left1: '48',
        top2: '34',
        left2: '50',
        top3: '66',
        left3: '46',
    }, {
        top1: '17',
        left1: '53',
        top2: '37',
        left2: '44',
        top3: '60',
        left3: '52',
    }, {
        top1: '23',
        left1: '43',
        top2: '45',
        left2: '55',
        top3: '67',
        left3: '47',
    }, {
        top1: '20',
        left1: '47',
        top2: '49',
        left2: '52',
        top3: '65',
        left3: '44',
    }, {
        top1: '14',
        left1: '58',
        top2: '29',
        left2: '47',
        top3: '60',
        left3: '49',
    }];

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
        top1: '23',
        left1: '40',
        top2: '40',
        left2: '57',
        top3: '65',
        left3: '43',
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

    positions = [pointsPosition, tabletPosition];


    data = [{
        // still need to change IFrame URL
        // titleIFrame, trackIFrame1, trackIFrame2, trackIFrame3
        mainPhoto: '/images/大稻埕.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423561195&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        titleIntro: '大稻埕是臺北市大同區西南部的一個傳統地域名稱，18世紀末，因淡水港的開放後成為商貿繁榮、人文薈萃之地。大稻埕擁有華麗的巴洛克式建築、傳統的閩南平房、明亮的紅磚洋樓，不論是古蹟建築、傳統民俗、茶行、布行、中藥材行、在地美食等，到處都有舊城的歷史軌跡。而如今因著擁有深厚歷史傳承的百年老舖與創意街區，打造出大稻埕新生活美學。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.279882060915!2d121.50741011509105!3d25.058501243462604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a915c7d73db9%3A0xb031aa4cebcf6cea!2zMTAz5Y-w5YyX5biC5aSn5ZCM5Y2A6L-q5YyW6KGX5LiA5q61!5e0!3m2!1szh-TW!2stw!4v1523884654831',
        trackIntro: '時光荏苒<br>無船的碼頭河川依然湧動<br>街道裡乾貨與藥材香氣依舊<br>穿梭於不同時間與空間<br>我聽到新舊融合譜出的節奏',
        trackMapImg: 'images/大稻埕_track.svg',
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423561183&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423561174&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423561171&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    }, {
        // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4380170403642!2d121.51378491509108!3d25.053139043677866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96c997b2e3f%3A0x6cab14efb813bd7!2zMTAz5Y-w5YyX5biC5aSn5ZCM5Y2A5aSq5Y6f6Lev!5e0!3m2!1szh-TW!2stw!4v1523884576532" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        mainPhoto: '/images/main1.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423561195&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        titleIntro: '位於昔日台北火車站後站出口的太原路周邊，過去是北部地區各類五金雜貨、文具、時裝、飾品的批發市場，全盛時期曾高達數十家。而現在太原路上則充斥大量的塑膠製品，各式規格塑膠水桶、塑膠容器、塑膠布、塑膠捲，各式製品琳琅滿目，應有盡有。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4380170403642!2d121.51378491509108!3d25.053139043677866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96c997b2e3f%3A0x6cab14efb813bd7!2zMTAz5Y-w5YyX5biC5aSn5ZCM5Y2A5aSq5Y6f6Lev!5e0!3m2!1szh-TW!2stw!4v1523884576532',
        trackIntro: '玻璃瓶罐互相碰撞<br>焊接擦出零星的火花<br>俯拾皆是生活的碎片',
        trackMapImg: 'images/0319 tablet  -17.svg',
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423561183&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423561174&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423561171&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    }, {
        mainPhoto: '/images/東門市場.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423564201&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        titleIntro: '歷經清治時期、日治時期、戰後時期，興建於民國十七年的東門市場是個歷史悠久的傳統市場，充滿了許多老饕客的共同記憶和現代人的新穎口味。無論是彈牙的魚丸、酥脆的餡餅、鮮甜的米粉湯，蜿蜒的小巷弄內隱藏著道地的庶民小吃。在各地眷村紛紛拆遷的現代，東門市場的美食成了另類的臺北史紀錄。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.9861600139798!2d121.5245186150908!3d25.03454374442349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a982bcb19f97%3A0x431fc1c5030a686!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A5L-h576p6Lev5LqM5q61ODHomZ8!5e0!3m2!1szh-TW!2stw!4v1523884421783',
        trackIntro: '菜車輪似乎偏了，轆轆聲中時不時混雜嘰呀的聲音<br>緩緩地進入一片叫賣聲、殺價聲、談笑聲裡<br>新的一天又要開始了',
        trackMapImg: 'images/東門市場_track.svg',
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423564177&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423564165&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423564150&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    }, {
        mainPhoto: '/images/龍山.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/427225557&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        titleIntro: '艋岬，又名萬華，是台北市開發最早的地方。而「龍山寺」是當地居 民信仰、活動、集會和指揮的中心，保佑著過去渡海來台的先民平安順利，富有早期居民打拚、奮鬥的文化歷史。龍山寺平日香火鼎盛，其獨特的建築特色極具藝術價值，附近的懷舊氣氛更讓龍山寺成為台北著名的觀光景點。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.919664331485!2d121.49774191509087!3d25.036800244332902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9a8d871dd61%3A0x458407a147737730!2zMTA45Y-w5YyX5biC6JCs6I-v5Y2A5buj5bee6KGXMjEx6Jmf!5e0!3m2!1szh-TW!2stw!4v1523884728447',
        trackIntro: '轉角後傳來陣陣誦經<br>定時敲起的木魚、銅鈴<br>耳邊的呢喃是心中的渴求<br>亦是人們共同懷有的虔誠與執念',
        trackMapImg: 'images/龍山_track.svg',
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/427225521&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/427225494&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/427225347&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    }, {
        // still need to change IFrame URL
        // titleIFrame, trackIFrame1, trackIFrame2, trackIFrame3
        mainPhoto: '/images/羅文化.svg',
        titleIFrame: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423564201&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        titleIntro: '溫羅汀是在台灣大學與師範大學中間，由溫州街、羅斯福路、汀州街一帶交織而成的區域。在這人文空間最密集的區域，大大小小的獨立書店、咖啡廳、live house聚集於此，成為可觀的人文風景。',
        googleMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.3377409671516!2d121.53104391509052!3d25.02260984490175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9889a450a73%3A0xaffa2ef96fa39ee5!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5rqr5bee6KGX!5e0!3m2!1szh-TW!2stw!4v1523884692976',
        trackIntro: '翻動書頁，細細交談<br>字句在空氣中飄盪<br>安靜在這裡似乎成為一種聲音',
        trackMapImg: 'images/羅文化_track.svg',
        trackIFrame1: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423561183&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame2: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423561174&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        trackIFrame3: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423561171&color=%232d0d15&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
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

    function getDeviceWidth() {
        var windowWidth = $(window).width();
        return windowWidth;
    }

    function replaceIntroContentByIndex(index) {
        model = data[index];
        var title = ['看看是誰組成大稻埕吧', '看看是誰組成太原路吧', '看看是誰組成東門市場吧', '看看是誰組成龍山寺吧', '看看是誰組成溫羅玎文化圈吧！'];
        replaceMainPhotoContent(model);
        replaceMainDisplayContent(model, title[index]);

        console.log(getDeviceWidth());
        console.log(positions[0]);

        posModel = positions[Math.floor(getDeviceWidth() / 760)][index];
        //posModel = pointsPosition[index];
        replaceTrackContent(model, posModel);

    }


    function replaceMainDisplayContent(model, title) {
        $('#titleIFrame').attr('src', model.titleIFrame);
        if ($(window).width() > 760)
            $('.functionailty-area p').html(model.trackIntro);
        else
            $('.functionailty-area p').html(title);
        $('#google-iframe').attr('src', model.googleMapSrc);
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


    function replaceMainPhotoContent(model) {
        // $('.image-content .road-text-image').attr('src', model.roadPhoto);
        $('.image-content .main-image').attr('src', model.mainPhoto);
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
