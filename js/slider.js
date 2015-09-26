$(document).ready(function(){
 function MySlider(){

	var timer = setInterval(autoplay, 3500);
  var slideWrap = $('.slide-wrap');
  var playLink = $('.auto');
  var is_animate = false;
  var slideWidth = $('.slide-item').innerWidth();
  var scrollSlider = slideWrap.position().left - slideWidth;
		
  function autoplay(){
   if(!is_animate){
    is_animate = true;
    slideWrap.animate({left: scrollSlider}, 3500, function(){
     slideWrap
      .find('.slide-item:first')
      .appendTo(slideWrap)
      .parent()
      .css({'left': 0});
     is_animate = false;
    });
   }
  }
 }
 
MySlider();
});