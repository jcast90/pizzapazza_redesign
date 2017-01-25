 $(document).ready(function () { 
 	"use strict";
	$('#navigation').meanmenu();

 	$(function () {
 		$('#arrow_down').click(function () {
 			$('html,body').animate({
 				scrollTop: $(".section").offset().top
 			}, 'slow');
 		});
	});
	});