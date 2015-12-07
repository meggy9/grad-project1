$(document).ready(function() {
	$(".site").hover(
		function() {
			$(this).children('.site-image-cover').css("visibility","visible");
			$(this).children('.site-image-cover').children('.site-image-cover-link').css("visibility","visible");
			$(this).children('.site-image-cover').children('.site-image-cover-link').animate({width:'100px', height: '22px', fontSize: "12pt"}, 300)},
			
		function() {
			$(this).children('.site-image-cover').css("visibility","hidden");
			$(this).children('.site-image-cover').children('.site-image-cover-link').css("visibility","hidden")
			$(this).children('.site-image-cover').children('.site-image-cover-link').css({"width":'0px', "height": '0px', "fontSize": "0pt"});})
			
});