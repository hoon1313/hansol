$(document).ready(function () { // 문서준비 이벤트 시작
    /* aos */
    AOS.init();

    var mb = new Swiper(".mb", {
        direction: "vertical",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // autoplay : {
        //     delay : 3000,  // 슬라이드가 머무르는 시간, 5000=5초
        //     disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        //   },
          loop:true,
          speed : 1000,
    });
    var mv = new Swiper(".movie", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          loop : true,
   });

}); // 문서준비 이벤트 끝