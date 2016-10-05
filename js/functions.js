$(function(){
  smoothScroll(1000);
  workBelt();
  loadWork();
  clientStuff();
});

function clientStuff(){
  $('.client-unit').first().addClass('active-client');
  $('.client-logo').first().addClass('active-client');

    $('.client-logo').click(function(){
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
