/*! Preload !*/
(function($) {
  $(window).on('load', function() {
    setTimeout(function() {
      $("#preload").hide();
    }, 800);
  });
})( libFuncName );

$('footer p span:nth-child(2n+1)').css('border', '1px solid #ff9');