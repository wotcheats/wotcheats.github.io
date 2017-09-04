$(document).ready(function() {

	  
	//************************ Parallax Background *****************************//  
    $(window).on('load', function() {
        $('.parallax-bg').each(function() {
            $(this).parallax('center', 0.5, true);
        });
    });
	
	//************************ FitVids *****************************// 
	$(".trailer-wrapper").fitVids();

	$(function(){
      $(".bgplayer").YTPlayer();
    });

    $('.open-popup-button').magnificPopup({
		type:'inline',		
		midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		mainClass: 'mfp-fade'
	});	
});