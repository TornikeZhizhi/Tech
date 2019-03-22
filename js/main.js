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
    responsiveClass:true,
    // touchDrag:false,
    // mouseDrag:false,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed: 500,
    loop:true,
    autoWidth:true,
    items:4,
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
   

//F.A.Q

$(".faq_tittle h4").on("click",function(){
  // $(".faq_tittle").removeClass("active");
  $(this).parent().next().slideToggle();
	$(this).parent().toggleClass("active");
	$(this).parent().prev().toggleClass("active");

});
$(".faq_right_line").on("click",function(){
  // $(".faq_tittle").removeClass("active");
  $(this).parent().find(".faq_answer").slideToggle()
	$(this).next().toggleClass("active");
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


 // svg 

 

 function svg(k) {
  for (var i = 0; i < k ; i++) {
    $(".star_box svg polygon").eq(i).attr("class","svg1");
  }
 }
  var starPoint = Math.round(2.8);
  svg(starPoint)



})



var map;
 
 $(".city").on("click", function(){
     
     var lat = this.dataset.lat;
     var lng = this.dataset.lng;

    map.setZoom(18);
    map.panTo(new google.maps.LatLng(lat,lng));
     
 })
 
 
 var style =  [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]

    

    function initMap() {
        
        var gg = [
            
            
            ]
        
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 41.845446, lng: 44.6021288},
          zoom: 9
        
        });
         map.setOptions({styles: style});
         
         var labels = '';
        const imagePath = "http://test.dostoevsky.ge/icons8-marker-20.png";
         var locations = [
            {lat: 41.726977, lng: 44.758893},
            {lat: 41.7505208, lng: 44.6394107},
            {lat: 41.7805208, lng: 44.6494107}
          ]
          
          var infowindow = new google.maps.InfoWindow();

         var bounds = new google.maps.LatLngBounds();
    
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
                map: map,
                icon: imagePath
            });
    
            bounds.extend(marker.position);
            
             marker.addListener("click", function (e) {
    
                //LAT AND LNG
                lat = e.latLng.lat();
                lng = e.latLng.lng();
                
                console.log(lat, lng);
                map.setZoom(18);
                map.panTo(this.position);
                
                let link = `https://www.google.com/maps/dir//${lat},${lng}/@${lat},${lng},15z`;
                let win  = window.open(link, "_blank");
                win.focus();
                
                   
                
            });
        }
        
          map.fitBounds(bounds);

            var listener = google.maps.event.addListener(map, "idle", function () {
                map.setZoom(9);
                google.maps.event.removeListener(listener);
            });
            
            
            var latlng = [];
            
         
    }
      
    
    function loadScript() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDJOK0oM_e72yW4GTQxDE0UjEisr9ay_kA&v=3.exp&sensor=false&callback=initMap';
        document.body.appendChild(script);
    }
    
    window.onload = loadScript;
 
 



