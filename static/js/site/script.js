// Плавный скролл страницы
$(document).bind( 'mousewheel', function (e) { 
  var nt = $(document.body).scrollTop()-(e.originalEvent.wheelDeltaY); 
  e.preventDefault(); 

  $(document.body).stop().animate( { 
    scrollTop : nt 
  } , 300 ); 
});
$(document).ready(function() {
  $("#slider").owlCarousel({
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true
  });

// Плавный скролл к якорю
  $(".angle-down").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
// Параллакс эффект
  var parallaxEffect = function(wrapper, ellement, way, factor) {
    $(window).scroll(function() {
      var $wrapper = $(wrapper),
          $ellement = $(ellement);
      if (way === 'top' && (window.pageYOffset > $wrapper.offset().top)) {
        $ellement[0].style.bottom = ((window.pageYOffset-$wrapper.offset().top)*factor)+ 'px';
      }
      if (way === 'bottom' && (window.pageYOffset > $wrapper.offset().top)) {
        $ellement[0].style.top = ((window.pageYOffset-$wrapper.offset().top)*factor)+ 'px';
      }

    });
  };
  parallaxEffect('#team','#granate','top', 2);
  parallaxEffect('#team','#granate-part','bottom', 2);
  parallaxEffect('#advantages','#olievs','top', 2);
  parallaxEffect('#carte','#tomato','top', 2);
  parallaxEffect('#carte','#papper','bottom', 2);
  parallaxEffect('#carte','#eggplant','top', 2);
  parallaxEffect('#contacts','#grapes','top', 2);
});