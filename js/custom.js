
new WOW().init();

////////////////////////////////////////// Menu Scroll

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".nav-normal");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 20) {
            header.removeClass('nav-normal').addClass("darkHeader");
        } else {
            header.removeClass("darkHeader").addClass('nav-normal');
        }
    });
});


$(document).ready(function() {
		  $("#owl-demo").owlCarousel({
		 	  autoPlay:true,
			  navigation : false, // Show next and prev buttons
			  slideSpeed : 300,
			  paginationSpeed : 400,
			  singleItem:true
		 
			  // "singleItem:true" is a shortcut for:
			  // items : 1, 
			  // itemsDesktop : false,
			  // itemsDesktopSmall : false,
			  // itemsTablet: false,
			  // itemsMobile : false
		 
		  });
});
/////////////////-----------------------------------/////////-------------------------/////------------//
$(document).ready(function(){
	$(".spider").click(function(){
		$(".qq").toggleClass('show-qq');
		})
});

$(document).ready(function(){
	$(".spider2").click(function(){
		$(".qq").addClass('show-qq');
	})
});

$(document).ready(function(){
	$(".qqclose").click(function(){
		$(".qq").toggleClass('show-qq');
	})
});

/////////////////-----------------------------------/////////-------------------------/////------------//
$('.qq-submit').click(function() {
  $(this).toggleClass('clicked');
  $('.qq-submit p').text(function(i, text) {
    return text === "Sent!" ? "SEND NOW!" : "Sent!";
  });
});
/////////////////-----------------------------------/////////-------------------------/////------------//

$(window).scroll(function(){
	var scrol = $(window).scrollTop();
	
	if(scrol>=400){
		$('.spcl-offer').addClass('showhit');
	}else{
		$('.spcl-offer').removeClass('showhit');
		
	};
});

$(function(){
	$('.img_sh').click(function(){
		$('.spcl-box').toggleClass('showBox');
	});
	$('.close-box').click(function(){
		$('.spcl-box').toggleClass('showBox');
	});
});
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// Sudipta Biswas //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {	
		var id = '#dialog';
		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		//transition effect		
		$('#mask').fadeIn(500);	
		$('#mask').fadeTo("slow",0.3);	
		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
		//transition effect
		$(id).fadeIn(2000); 	
	//if close button is clicked
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		$('#mask').hide();
		$('.window').hide();
	});		
});












              