
$(document).ready(function(){


    var lastScrollTop = 0;
    var delta = 5;
    var fixBox = $(".m_header");
    var fixBoxHeight = fixBox.offsetHeight;
    var didScroll;
    var body_wrap = $(".body_wrap");

//스크롤 이벤트 
window.onscroll = function(e) {
    didScroll = true;
};

//0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
setInterval(function(){
    if(didScroll){
        hasScrolled();
        didScroll = false;
    }
}, 250);

/*
function hasScrolled(){
    var nowScrollTop = window.scrollY;
    var scrollTop = $(window).scrollTop();
    if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
        return;
    }

    if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
        //스크롤 내림
        fixBox.addClass('down');  fixBox.removeClass('up'); 
       body_wrap.addClass('down'); body_wrap.removeClass('up');
       body_wrap.removeClass('top_header');

    }else{              
        if(scrollTop == 0){
            body_wrap.addClass("top_header");
            body_wrap.removeClass("up")
        }else if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
            //스크롤 올림           
           fixBox.addClass("up"); fixBox.removeClass("down"); 
           body_wrap.removeClass("down");   body_wrap.addClass("up");

        }
    }
    lastScrollTop = nowScrollTop;
}
*/
function hasScrolled(){
    var nowScrollTop = window.scrollY;
    var scrollTop = $(window).scrollTop();
    
    if(nowScrollTop > lastScrollTop){
        //스크롤 내림
        fixBox.addClass('down');  fixBox.removeClass('up'); 
        body_wrap.addClass('down'); body_wrap.removeClass('up');
        body_wrap.removeClass('top_header');
 

    }else{              
        if(scrollTop == 0){
            body_wrap.addClass("top_header");
            body_wrap.removeClass("up")
        }else if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
            //스크롤 올림
            fixBox.addClass("up"); fixBox.removeClass("down"); 
           body_wrap.removeClass("down");   body_wrap.addClass("up");
        }
    }
    lastScrollTop = nowScrollTop;
}


    //메뉴 내려오기
    var $header = $("#header");
    var $header_menu = $(".header_menu");
    var $submenu = $(".submenu");
    var $header_bottom = $(".header_bottom");

    $(function(){
        $header_menu.mouseover(function(){
            $("#header").addClass("sticky").find(".submenu").addClass("sticky");
    });
        $header.mouseleave(function(){
            $("#header").removeClass("sticky").find(".submenu").removeClass("sticky");
        });
    });


    // conside_wrap active 붙이기
    var $delivery =  $(".left_wrap .conwrap .a_delivery");
    var $pickup =  $(".left_wrap .conwrap .a_pickup");
    $(function(){
        $delivery.click(function(){
            $delivery.addClass("active"),
            $pickup.removeClass("active");
        });
        $pickup.click(function(){
            $pickup.addClass("active"),
            $delivery.removeClass("active");
        });
    });




 //con_aside aside_wrap 고정

 var $footer = $(".footer");
 var $body = $("body"); //본문 요소
 var footerHight = $footer.outerHeight(true); //footer높이
 var $aside = $(".con_aside .aside_wrap");

 const fixedBox = $(".aside_wrap"); // 고정될 박스 요소
 const topMargin = 1000; // 고정될 때의 상단, 하단 여백
 const breakpoint = 1200; // 반응형 디자인의 기준 너비
   


    // 고정 박스의 초기 상단 위치를 계산합니다.
    let initialTop = fixedBox.offset().top;

    const scrollTop = $(window).scrollTop(); // 현재 스크롤 위치
    const footerHeight = $footer.outerHeight(true); // footer의 높이
    const bodyHeight = $body.outerHeight(true); // body의 높이
    const availableHeight = 
        bodyHeight - footerHeight - fixedBox.outerHeight(true) - initialTop;




$(window).scroll(function(){    

    $aside.addClass("aside_scroll");

    $($aside).css("margin-top",Math.max(-130,0 - $(this).scrollTop()));

  //  $($aside).css("bottom",Math.max(130,0 - $(this).scrollTop()));
   
  //지금 스크롤이 2650보다 크다면
    if($(this).scrollTop() >= 2650) {     
        if (availableHeight + initialTop - topMargin > scrollTop) {
         fixedBox.css({ 'position': 'absolute', 'bottom': 100});
         fixedBox.css({ "top":'inherit'});
        } 
       
      //margin-top을 -270을 줘야함
      $($aside).css("margin-top",Math.max( -270, 0 - $(this).scrollTop()));
      
    }else {
        fixedBox.css({ 'position': 'fixed', 'top': 130 });
}

});


        //브랜드별 인기메뉴
        var $sub = $(".con_div.box5 .con_sub .con_submenu"); 
        var $menu = $(".brand_list");
        $menu.hide().eq(0).show();
        
        $sub.click(function(e){
            e.preventDefault();
            var $target = $(this);
            var $index = $target.index();

            $sub.removeClass("active");
            $target.addClass("active");

            $menu.css("display","none");

            $menu.eq($index).css("display","block");
        });
    

        //집으로 받는 잇츠MD
       var $mdsub =  $(".con_div.box6 .con_sub .con_submenu");
       var $box = $(".con_div.box6 .box_swiper");
       $box.hide().eq(0).show();

       $mdsub.click(function(e){
        e.preventDefault();
        var $mdtarget = $(this);
        var $mdindex = $mdtarget.index();

        $mdsub.removeClass("active");
        $mdtarget.addClass("active");

        $box.css("display","none");
        $box.eq($mdindex).css("display","block");

       });


       //맨위로 올라가기
       $(window).scroll(function(){

        if($(this).scrollTop() > 100){
            $(".up.goToUp").show();
            $(".up.goToUp").removeClass("hide").addClass("active");

        }else{
            $(".up.goToUp").fadeOut();
            $(".up.goToUp").removeClass("active").addClass("hide");
        }

       });
       $(".up").click(function(){
           // $('html, body').animate({scrollTop:0},'1000');        
         // $('html, body').scrollTop({behavior:'slow'});
         window.scrollTo({top:0, behavior:"smooth"});
       });



//첫번째 swiper
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".con_swiper .swiper-button-next",
        prevEl: ".con_swiper .swiper-button-prev",
      },        
});



//두번째 swiper

      var swiper = new Swiper(".secondSwiper", {
        slidesPerView: 'auto',
        spaceBetween: 10, //슬라이드 사이 여백
        freeMode: true,
        slidesOffsetAfter : 0,
        navigation: {
            nextEl: ".right_swiper .swiper-button-next.second",
            prevEl: ".right_swiper .swiper-button-prev.second",
          },
                
      });

/* con_box1 */

    var swiper = new Swiper(".box1_Swiper", {
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
            nextEl: ".box1_Swiper .swiper-button-next.box1",
            prevEl: ".box1_Swiper .swiper-button-prev.box1",
      },
    });


 /* con_box2 */

    var swiper = new Swiper(".box2_Swiper", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: ".couppon_box .swiper-button-next.box2",
        prevEl: ".couppon_box .swiper-button-prev.box2",
      },
    });

/* con_box3 */

    var swiper = new Swiper(".box3_Swiper", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    navigation: {
        nextEl: ".box_swiper .swiper-button-next.box3",
        prevEl: ".box_swiper .swiper-button-prev.box3",
        },
    });


 /* con_box5 */

    var swiper = new Swiper(".box5-1_Swiper", {
      slidesPerView: 'auto',
      spaceBetween: 10,
      freeMode: true,  
      navigation: {
        nextEl: ".box_swiper.krispy .swiper-button-next.krispybox6",
        prevEl: ".box_swiper.krispy .swiper-button-prev.krispybox6",
        },
    });
 
    var swiper = new Swiper(".box5-2_Swiper", {
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
          nextEl: ".box_swiper.anglinus .swiper-button-next.anglinusbox6",
          prevEl: ".box_swiper.anglinus .swiper-button-prev.anglinusbox6",
          },
      });

    var swiper = new Swiper(".box5-3_Swiper", {
        slidesPerView: 'auto',
        spaceBetween: 10, 
        navigation: {
          nextEl: ".box_swiper.rotteria .swiper-button-next.rotteriabox6",
          prevEl: ".box_swiper.rotteria .swiper-button-prev.rotteriabox6",
          },
      });



    var swiper = new Swiper(".box7_Swiper", {
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
          nextEl: ".box_swiper .swiper-button-next.box7",
          prevEl: ".box_swiper .swiper-button-prev.box7",
          },
      });


/* box8 */
    var swiper = new Swiper(".box8_Swiper", {
      slidesPerView: 'auto',
      spaceBetween:10,
      pagination: {
        el: ".tv_swiper .swiper-pagination.pgbox8",
        type: "fraction",
      },
      navigation: {
        nextEl: ".tv_swiper .swiper-button-next.box8",
        prevEl: ".tv_swiper .swiper-button-prev.box8",
        },
      
    });


    
}); //document.ready(function)