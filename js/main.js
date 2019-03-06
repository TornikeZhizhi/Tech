$(document).ready(function(){

	//Search
	
	var meF = 0;
	$(".header_search_box span").on("click",function(){
		$(".search_bar").toggleClass("active");
		if (meF == 0) {
			$(this).find("img").attr("src","images/close_icon.png");
			meF = 1;
		}
		else {
			$(this).find("img").attr("src","images/search_icon.png");
			meF = 0;
		}
	})


	// Language

	$('.language_box select').on('change', function(){
	 	 var id = $(this).find(":selected").attr("id");

	    if (id == "rus") {
	    	$(".flag_box img").attr("src","images/flag_ru.svg")
	    }else if (id == "geo"){
	    	$(".flag_box img").attr("src","images/flag-geo.png")
	    }
	    
	});




})




