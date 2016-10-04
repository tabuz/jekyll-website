$(function(){
  smoothScroll(1000);
});

function smoothScroll (duration){
  $('a[href^="#"]').on('click', function(event){

    var target = $( $(this).attr('href') );
    console.log(target);

    if( target.length )
    {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}
