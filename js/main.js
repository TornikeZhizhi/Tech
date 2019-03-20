$(document).ready(function(){

	//Search
	
	var meF = 0;
	$(".header_search_box span").on("click",function(e){
		e.stopPropagation()
		$(".search_bar").toggleClass("active");
		if (meF == 0) {
			$(this).find("img").attr("src","images/close_icon.png");
			meF = 1;
		}
		else if (meF == 1) {
			$(".search_bar input").val(" ")
			$(this).find("img").attr("src","images/search_icon.png");
			meF = 0;
		}
	})
	$(".search_bar input").click(function(e){
		e.stopPropagation()
	
	})

	$(window).click(function(){
		$(".search_bar").removeClass("active");
		$(".header_search_box span").
		find("img").attr("src","images/search_icon.png");
		$(".search_bar input").val(" ")
		meF = 0;

	
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


// Company Slider

$('.company_slider').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    touchDrag:false,
    mouseDrag:false,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed: 500,
    responsive:{
        0:{
            items:3
        },
        690:{
            items:3
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
})
$('.internal_map_slider').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    autoplay:false,
    autoplayTimeout:5000,
    smartSpeed: 700,
    responsive:{
        0:{
            items:1
        },
        690:{
            items:1
        },
        992:{
            items:2
        },
        1200:{
            items:2
        }
    }
})



// Calendar 


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

   $(function () {
         $('#datetimepicker1').datetimepicker();
      });
   
   	$(".book_img").click(function(){
   		   $("#datetimepicker1").focus()
   	})
  


//F.A.Q

$(".faq_tittle h4").on("click",function(){
	$(this).parent().next().slideToggle();
	$(this).parent().prev().toggleClass("active");

});
$(".faq_right_line").on("click",function(){
	$(this).parent().find(".faq_answer").slideToggle()
	$(this).toggleClass("active");
})



	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
	  	var currentScrollPos = window.pageYOffset;
	  	if (prevScrollpos > currentScrollPos) {
	    	$('.header').addClass('header_show');
	  	} else {
	    	$('.header').removeClass('header_show');
	  	}
	  	prevScrollpos = currentScrollPos;
	};
	


})



	



