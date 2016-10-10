$(function(){
  smoothScroll(1000);
  workBelt();
  loadWork();
  clientStuff();
  $("header h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '72px' });
});

function clientStuff(){
  $('.client-unit').first().addClass('active-client');
  $('.client-logo').first().addClass('active-client');
  $('.clients-control-mob span').first().addClass('active-client');

    $('.client-logo, .clients-control-mob span').click(function(){
      var $this = $(this),
          $siblings = $this.parent().children(),
          position = $siblings.index($this);

      $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
      $siblings.removeClass('active-client');
      $this.addClass('active-client');
    });

    $('.client-control-next, .client-control-prev').click(function(){
      var $this = $(this),
          curActiveClient = $('.clients-belt').find('.active-client'),
          position = $('.clients-belt').children().index(curActiveClient),
          clientNum = $('.client-unit').length

          if($this.hasClass('client-control-next')){
            console.log('trre');
            if(position < clientNum -1){
              $('.active-client').removeClass('active-client').next().addClass('active-client');
              }else{
                $('.client-unit').removeClass('active-client').first().addClass('active-client');
                $('.client-logo').removeClass('active-client').first().addClass('active-client');
              }
            }else{
                $('.active-client').removeClass('active-client').prev().addClass('active-client');
                if(position == 0){
                  $('.client-unit').removeClass('active-client').last().addClass('active-client');
                  $('.client-logo').removeClass('active-client').last().addClass('active-client');
                }
            }


    });
}
function loadWork(){
  $('.thumb-unit').click(function(){

    var $this = $(this),
        newFolder = $this.data('folder'),
        newHtml = '../work/'+newFolder+'.html',
        newTitle = $this.find('strong').text();
    console.log(newFolder);
    $('.work-load').load(newHtml);
    $('.work-title').text(newTitle);
  });

}
function workBelt(){

  $('.thumb-unit').click(function(){
    $('.work-belt').css('left','-100%');
    $('.work-container').show();
  });

  $('.work-return').click(function(){
    $('.work-belt').css('left','0%');
    $('.work-container').hide(800);
  });
}
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

/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
