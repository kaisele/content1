'use strict';

$(function() {
  new Vivus('home-svg', { //ここにsvgタグにつけたIDを書き込む
    type: 'delayed',
    start: 'inViewport',
    duration: 200,
    forceRender: false,
    animTimingFunction: Vivus.LINEAR,
  });
  new Vivus('page-svg', { //ここにsvgタグにつけたIDを書き込む
    type: 'delayed',
    start: 'inViewport',
    duration: 200,
    forceRender: false,
    animTimingFunction: Vivus.LINEAR,
  });

  setTimeout(function() {
    $(".letter").addClass("fill_color");
  },3500);


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    $("#gear1").css({transform: 'rotate(' + String(scroll / 15) + 'deg)'});
    $("#gear2").css({transform: 'rotate(' + String(scroll / 15) + 'deg)'});
  });
  
  function slideAnime(){
    $('.downAnime').each(function(){
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass("slideAnimeDownUp");
        $(this).children(".downAnimeInner").addClass("slideAnimeUpDown");
      } else {
        $(this).removeClass("slideAnimeDownUp");
        $(this).children(".downAnimeInner").removeClass("slideAnimeUpDown");
      }
    });
  }
  $(window).scroll(function (){
    slideAnime();
  });

  slideAnime();/* アニメーション用の関数を呼ぶ*/
});
