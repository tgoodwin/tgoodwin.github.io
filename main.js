$(document).ready(function() {

  navHover();
  blockHover();
  var didScroll;
  var isDown;
  var lastScrollTop = 0;
  var delta = 5;
  var nh = 100;
  var trigger = $(window).height();
  console.log(trigger);

  $('.nav-link').hide();

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

    if(st > trigger){
      $('.nav-link').fadeIn(100);
      isDown = true;
    }

    if(st < trigger){
      $('.nav-link').fadeOut(100);
      isDown = false;
    }

    lastScrollTop = st;
  }

  function navHover(){
    $('.nav-link').click(function(){
      $('.back').animate({right:"185px"}, 200);
      $('.nav-link').animate({right:"195px"},200);
    })
    $('.nav-bar').mouseleave(function(){
      $('.back').animate({right:"0px"},200);
      $('.nav-link').animate({right:"10px"},200);
    })
  }

  function blockHover(){
    $('[class="thing-list"] li').mouseenter(function(){
    //$(this).addClass('thing-highlight');
    })
    $('[class="thing-list"] li').mouseleave(function(){
    //  $(this).removeClass('thing-highlight');
    })
  }
})
