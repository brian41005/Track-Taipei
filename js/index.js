
$(document).ready(() => {

    function play(target) {
        var audio = document.getElementById(target);
        audio.play();
    }

    
    
    $("#play-list").on('click','li',function (){
        var name = $(this).data("id");

        play(name);
    });
    
    $('.ccc').click(() => {
        var data = {
            email: '123',
            password: '12212'
        }

        $.ajax({
            type : 'POST',
            url : '/',
            data : {
                email: '123123',
                password: '1212212'
            },
            success : suc => {
                console.log(suc);
            }
        });
    });
});