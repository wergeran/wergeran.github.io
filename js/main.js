$(document).ready(function($) {
  $('.container').find('h5').click(function(){
    $(this).toggleClass('selected-title').next().slideToggle('fast');
    $('h5').not($(this)).removeClass('selected-title');
    $('.accordion-content').not($(this).next()).slideUp('fast');
  });
});