$( document ).ready(function() {
    $(window).scroll(function(){
      var sticky = $('header'),
      scroll = $(window).scrollTop();
      if (scroll >= 200) sticky.addClass('nofixed');
      else sticky.removeClass('nofixed');
      if (scroll >= 400) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });
});