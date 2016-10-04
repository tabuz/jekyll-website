$(function(){
  smoothScroll(1000);
  workBelt();
  loadWork();
});

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
