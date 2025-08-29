//메인 스와이퍼 ***********************************************

let hswiper = new Swiper(".mainslide", {
    loop: true,
    navigation: {
        nextEl: "main .navigation .next",
        prevEl: "main .navigation .prev",
    },
    autoplay:{
        delay: 3000,
        disableOnInteraction: false, 
        loop:true,
    },
    pagination : {   
        el : '.swiper-pagination',  // 페이저 버튼을 담을 태그 설정
        clickable : true,  // 버튼 클릭 여부
        type : 'bullets', // 버튼 모양 결정 "bullets", "fraction" 
    },
});

let msw = $(".menu-slide-wrap");
let ml = $(".menu-li");
ml.click(function () {
    $(this).addClass("act");
    $(this).siblings().removeClass("act");
    msw.eq($(this).index()).addClass("act");
    msw.eq($(this).index()).siblings().removeClass("act");
});



//베스트아이템 클릭 ***********************************************

$(".himg").on("click",function(){
    let a = $(this).attr("src");
    if(a==="./img/200-1.png") {
        $(this).attr("src","./img/200-2.png");
    } else{
        $(this).attr("src","./img/200-1.png");
    }
});
$(".jimg").on("click",function(){
    let a = $(this).attr("src");
    if(a==="./img/100-1.png") {
        $(this).attr("src","./img/100-2.png");
    } else{
        $(this).attr("src","./img/100-1.png");
    }
});



//리뷰 스와이퍼 ***********************************************

let swiper = new Swiper(".review .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 100,
    loop: true,
    speed: 5000, // 이동 속도 (느릴수록 부드러움)
    autoplay: {
        delay: 0, // 멈춤 없이 바로 다음 슬라이드
        disableOnInteraction: false,
    },
});



//탑버튼 스크롤 ***********************************************

$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >= 1000){
            $(".top").addClass("act");
        }
    });
    $(".top").click(function(){
        $(window).scrollTop(0);
    });
});


