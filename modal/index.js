$(document).ready(function(){


  $(".btn").click(function(){
	$(".popup").fadeIn('slow');
	  });


      $("a:first-child").click(function(){
		     alert("thanks for confirming, we will contact you for this");
	   });


      $("a:last-child").click(function(){
		     $(".popup").fadeOut('slow');
	   });
	
	  

      $("#close").click(function(){
		     $(".popup").fadeOut('slow');
	   });

 });


