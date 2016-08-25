$(document).ready(function() {
  
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navHeight = $('#menu-bar').outerHeight();

  $(window).scroll(function(event){
    didScroll = true;
  });

  setInterval(function(){
    if(didScroll){
      hasScrolled();
      didScroll = false;
    }

  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta){
      return;
    }

    if(st > lastScrollTop && st > navHeight){
      $('#menu-bar').removeClass('nav-down').addClass('nav-up');
    }
    else {
      //scroll up
      if(st + $(window).height() > $(document).height()){
        $('#menu-bar').removeClass('nav-up').addClass('nav-down');
      }
    }
    lastScrollTop = st;
  }


})
