// function closeItem() {
//
//   let body = document.querySelectorAll('.services-menu-item');
//
//   for (let elemBody of body) {
//     elemBody.addEventListener('click', func);
//
//     function func(event) {
//       // elemBody.lastElementChild.style.transition = 2000;
//
//       if (elemBody.lastElementChild.style.display == 'flex') {
//         elemBody.lastElementChild.style.display = 'none'
//
//       } else {
//         elemBody.lastElementChild.style.display = 'flex';;
//       }
//     }
//   }
// };
//
// closeItem();




$(function() {

  // $('a').on('click touchstart', function (e) {
  //   e.preventDefault(); // этот код предотвращает стандартное поведение браузера по клику
  // });


  $('.wraper__burger').on('click touchend', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('.wraper__menu').slideToggle(300);
  });




  $('.services-menu-item__header').on('click touchend', function(e) {
    e.stopPropagation();
    e.preventDefault();
    //$(this).next().slideToggle(300);
    $(e.currentTarget).next().slideToggle(500);
  });



  $('.sign-up').on('touchstart click', function(e) {
    e.stopPropagation();
    $('.formLogin').css('display', 'flex')
    //  e.preventDefault();
    //$('.sign-up').animate({transform: 'scale(0.7)'});
  });

  $('.formLogin__exit').on('touchstart click', function(e) {
    e.stopPropagation();
    $('.formLogin').css('display', 'none')
    //  e.preventDefault();
    //$('.sign-up').animate({transform: 'scale(0.7)'});
  });

  $('.button').on('touchstart', function(e) {
    e.stopPropagation();
    //e.preventDefault();
    //$('.button').animate({boxShadow: 'none'});
  });

  $('.wraper__menu .menu__link').on('touchstart', function(e) {
    e.stopPropagation();
    //e.preventDefault();
    //$(this).css("color","red");
  });

  $('.wraper__video-button').on('touchstart', function(e) {
    e.stopPropagation();
    //e.preventDefault();
    //$(this).css("color","red");
  });

  $('.wraper__footer-bottom-menu').on('touchstart', function(e) {
    e.stopPropagation();
    //e.preventDefault();
    //$(this).css("color","red");
  });

  $('.wraper__feedback-people-container').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    // centerMode: true,
    // centerPadding: 50,
    prevArrow: '.wraper__feedback-people-topArrow',
    nextArrow: '.wraper__feedback-people-bottomArrow',
    responsive: [{
        breakpoint: 1100, // максимальная ширина экрана
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //centerMode: true,
          mobileFirst: true,
        }
      },
      {
        breakpoint: 376, // максимальная ширина экрана
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
          // mobileFirst: true,
          // centerPadding: 20,
          // adaptiveHeight: true,
        }
      }
    ],
    //adaptiveHeight: true,
  });


  $(window).on('resize orientationchange', function() {
    $('.wraper__feedback-people-container').slick('resize');
    $('.wraper__feedback-people-container').slick('setPosition');
    $('.wraper__feedback-people-container').slick('init');
  });

  // $(window).on("orientationchange",function(){
  //   alert("Ориентация изменилась!");
  // });

  //   $(window).on('orientationchange', function() {
  //   $('.wraper__feedback-people-container').slick('resize');
  // });
  //
  // $(window).on('orientationchange', function() {
  // $('.wraper__feedback-people-container').slick('setPosition');
  // });




  $('.wraper__team-body').slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 30,
    focusOnSelect: true,
    arrows: false,
    speed: 800,
    easing: 'ease',
    // waitForAnimate: false,

    arrows: false,
    responsive: [{
        breakpoint: 530, // максимальная ширина экрана
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      },
    ],

  });


  //$('.wraper__feedback-people-container').slick('setPosition');

});
