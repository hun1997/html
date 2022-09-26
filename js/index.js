$(function(){
    $('header a').click(function(e){ 
        e.preventDefault(); //a 링크 방지
    });
    let buttonRotate = ['rotate(0turn)', 'rotate(-1turn)', 'rotate(-2turn)', 'rotate(-3turn)'];//배열
    let i = 0;
    $('.a1').click(function(){
        i++;
        if(i >= buttonRotate.length) {
            i = 0;
        }
        $('.a1').css({
            'transform': buttonRotate[i],
        });
    });
    // let spin = ['origin(50% 150px)'];//배열
    // let e = 0;
    // $('.a1').click(function(){
    //     e++;
    //     if(e >= spin.length) {
    //         e = 0;
    //     }
    //     $('.a1').css({
    //         'transform': buttonOrigin[e],
    //     });
    // });
    //영상편집
    var swiper = new Swiper(".mySwiper", {
        pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });
    //영상편집 탭 메뉴
    $('.motion_menu ul li').click(function(){
        $('.motion_menu ul li').removeClass('on')
        $(this).addClass('on');
        
        $('.bar').css({
            'transform':'translateX(120px)'
        });

        $('.mySwiper').removeClass('on')
        $('.mySwiper').eq($(this).index()).addClass('on');
    });
    $('#bar1').click(function(){
        $('.bar').css({
            'transform':'translateX(0)'
        });
    });
    $('#bar2').click(function(){
        $('.bar').css({
            'transform':'translateX(120px)'
        });
    });
    $('#bar3').click(function(){
        $('.bar').css({
            'transform':'translateX(240px)'
        });
    });
    $('#bar4').click(function(){
        $('.bar').css({
            'transform':'translateX(360px)'
        });
    });
    $('#bar5').click(function(){
        $('.bar').css({
            'transform':'translateX(480px)'
        });
    });
    $('.sona').click(function(){
        $('.sona').css({
            'opacity':'0',
            'transition':'.5s'
        });
        $('footer').css({
            'bottom' : '0',
            'transition':'1s'
        });
    });
    $('.sona2').click(function(){
    $('.sona').css({
        'opacity':'1',
        'transition':'.5s'
    });
    $('footer').css({
        'bottom':'-100%',
        'transition':'1s'
        });
    });
    // $('#whell').mousewhell
});