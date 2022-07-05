$(function () {
  // 메뉴영역
  $('.ham').click(function () {
    $('nav').on('scroll touchmove mousewheel', function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    $(this).toggleClass('on')
    $('nav').toggleClass('on')
    $('.gnb').toggleClass('on')
    $('.lang').toggleClass('on')
  })

  $('.gnb>li>a').click(function (e) {
    e.preventDefault()
  })
  $('.gnb>li').click(function () {
    if ($(this).attr('class') !== 'on') {
      $('.sub').slideUp()
      $(this).find('.sub').slideToggle()
      $('.gnb>li').removeClass('on')
      $(this).addClass('on')
    } else {
      $(this).find('.sub').slideToggle()
      $('.gnb>li').removeClass('on')
    }
  })
  // 언어버튼
  $('.lang').on("click", function () {
    $('.lang_list').toggleClass('on')
  })

  // section 1 페이드인
  let num = 0;
  let nth = $('.img_slide').length - 1
  let fade = setInterval(function () {
    fadeIn()
  }, 5000)

  function fadeIn() {
    num++
    if (num > nth) {
      num = 0
    }
    $('.img_slide').removeClass('on')
    $('.img_slide').eq(num).addClass('on')
  }

  // section 2 슬라이드
  let intv = setInterval(function () {
    nextAni()
  }, 5000)

  $('.main_next').click(function () {
    clearInterval(intv)
    nextAni()
    intv = setInterval(function () {
      nextAni()
    }, 5000)
  })

  $('.main_prev').click(function () {
    clearInterval(intv)
    prevAni()
    intv = setInterval(function () {
      nextAni()
    }, 5000)

  })

  function nextAni() {
    if (matchMedia("screen and (max-width:899px)").matches) {
      $('.main_slideList').not(':animated').animate({
        marginLeft: -100 + '%'
      }, 700, function () {
        $('.main_slideList>li').eq(0).appendTo($('.main_slideList'))
        $('.main_slideList').css({
          marginLeft: 0
        })
      })
    } else(matchMedia("screen and (min-width:900px)").matches); {
      $('.main_slideList').not(':animated').animate({
        marginLeft: -100 + '%'
      }, 2000, function () {
        $('.main_slideList>li').eq(0).appendTo($('.main_slideList'))
        $('.main_slideList').css({
          marginLeft: 0
        })
      })
    }
  }

  function prevAni() {
    $('.main_slideList>li').eq(-1).prependTo($('.main_slideList'))
    $('.main_slideList').css({
      marginLeft: -100 + '%'
    })
    $('.main_slideList').not(':animated').animate({
      marginLeft: 0
    }, 700)
  }

  //section4 슬라이드_버튼 X
  if (matchMedia("screen and (max-width:899px)").matches) {
    let food = setInterval(function () {
      foodSlide()
    }, 4000)

    function foodSlide() {
      $('.food_slide').not(':animated').animate({
        marginLeft: -100 + '%'
      }, 700, function () {
        $('.food_slide>li').eq(0).appendTo($('.food_slide'))
        $('.food_slide').css({
          marginLeft: 0
        })
      })
    }
  } else {
    clearInterval()
  }

  // section5 슬라이드
  $(document).ready(function () {
    let spot = setInterval(function () {
      nextAni()
    }, 8000)

    $('.spot_next').click(function () {
      clearInterval(spot)
      nextAni()
      spot = setInterval(function () {
        nextAni()
      }, 8000)
    })

    $('.spot_prev').click(function () {
      clearInterval(spot)
      prevAni()
      spot = setInterval(function () {
        nextAni()
      }, 8000)
    })

    function nextAni() {
      $('.spot_slide').not(':animated').animate({
        marginLeft: -100 + '%'
      }, 700, function () {
        $('.spot_slide>li').eq(0).appendTo($('.spot_slide'))
        $('.spot_slide').css({
          marginLeft: 0
        })
      })
    }

    function prevAni() {
      $('.spot_slide>li').eq(-1).prependTo($('.spot_slide'))
      $('.spot_slide').css({
        marginLeft: -100 + '%'
      })
      $('.spot_slide').not(':animated').animate({
        marginLeft: 0
      }, 700)
    }
  })
})