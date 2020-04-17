function closeItem() {

  let body = document.querySelectorAll('.services-menu-item');

  for (let elemBody of body) {
    elemBody.addEventListener('click', func);

    function func(event) {
      // elemBody.lastElementChild.style.transition = 2000;

      if (elemBody.lastElementChild.style.display == 'flex') {
        elemBody.lastElementChild.style.display = 'none'

      } else {
        elemBody.lastElementChild.style.display = 'flex';;
      }
    }
  }
};

closeItem();




$(function() {

  // $('a').on('click touchstart', function (e) {
  //   e.preventDefault(); // этот код предотвращает стандартное поведение браузера по клику
  // });

  $('.wraper__burger').on('click touchend', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('.wraper__menu').slideToggle(300);
  });

  $('.sign-up').on('touchstart', function(e) {
    e.stopPropagation();
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

  $('.wraper__footer-bottom-menu .menu__link').on('touchstart', function(e) {
    e.stopPropagation();
    //e.preventDefault();
    //$(this).css("color","red");
  });

  $('.wraper__feedback-people-container').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
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
    }],
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
    focusOnSelect: true,

    speed: 800,
    easing: 'ease',
    waitForAnimate: false,

    arrows: false,
    responsive: [{
        breakpoint: 530, // максимальная ширина экрана
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 2600, // максимальная ширина экрана
        settings: {
          // nextArrow: '.wraper__team-body .slick-active',
          // prevArrow: '.wraper__team-body .slick-active',
        }
      }
    ],

  });


  //$('.wraper__feedback-people-container').slick('setPosition');

});
