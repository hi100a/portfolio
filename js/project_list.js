(function(){  
	$('.flex-container').waitForImages(function() {  
		 $('.spinner').fadeOut();  
	}, $.noop, true);  

	$(".flex-slide").each(function(){  
		 $(this).hover(function(){  
			  $(this).find('.flex-title').css({ 
				   transform: 'rotate(0deg)',  
				   top: '10%'  
			  });  
			  $(this).find('.flex-about').css({  
				   opacity: '1'  
			  });  
		 }, function(){  
			  $(this).find('.flex-title').css({  
				   transform: 'rotate(90deg)',  
				   top: '15%'  
			  });  
			  $(this).find('.flex-about').css({  
				   opacity: '0'  
			  });  
		 })  
	});  


});  



// 새로 만들기
(function(){  
	$("#projects .flex-slide").each(function(){  
		$(this).hover(function(){
			$(".flex-title").css("color", "rgb(0, 0, 0)");
		})
	});
});