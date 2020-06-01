 /** *************Init JS*********************
	
    TABLE OF CONTENTS
	---------------------------
	1.Ready function
	2.Load function
	3.Subscribe JS
	4.Full height function
	5.Resize function
	6.Porky function
	7.click function
	8.Placehoder ie9
	9.Photoswipe init
 ** ***************************************/
 
 "use strict"; 

/*****Ready function start*****/
$(document).ready(function(){
  porky();
  $('.la-anim-1').addClass('la-animate');
  $('body').niceScroll({cursorcolor:"#c39f76",cursorborder:"1px solid #c39f76"});
	
});
/*****Ready function end*****/

/*****Load function start*****/
$(window).load(function(){
	$(".preloader-it").delay(500).fadeOut("slow");
	setTimeout(function(){
		$(".social-icons.animated").addClass("fadeInUp");
		$("h1.animated").addClass("slideInUp");
	},300);
});
/*****Load function* end*****/

/***** Subscribe JS start *****/
$("#notifyMe").notifyMe(); 
/***** Subscribe JS end*****/

/***** Full height function start *****/
var setHeight = function () {
	var height = $(window).height();
	var width = $(window).width();
	$('.full-height').css('min-height', (height));
	if ( width < 1025 && width > 767 )
		$('.side').height(height);
		else
			$('.side').css('height', '100%');
};
/***** Full height function end *****/

/***** Resize function start *****/
$(window).on("resize", function () {
	setHeight();
	var width = $(window).width();
}).resize();
/***** Resize function end *****/

/***** Porky function start *****/
function porky(){
	/*click functions*/
	var $slideOut = $('#slide_out');
	var $slideIn = $('#slide_in');
	$(".notify-btn .btn").on('click', function(e){
		e.preventDefault();
		$slideOut.animate({
			opacity: 0,
			top:'-50px'
			}, 500, 'linear', function() {
				$(this).fadeOut();
		});
		setTimeout(function () {
			$slideIn.fadeIn().animate({
				opacity: 1,
				top:'0'
				}, 500);
		},950);
		return false;
	});
	
	$("#notify_close").on('click', function(e){
		e.preventDefault();
		$slideIn.animate({
			opacity: 0,
			top:'-50px'
			}, 500, 'linear', function() {
				$(this).fadeOut();
		});
		setTimeout(function () {
			$slideOut.fadeIn().animate({
				opacity: 1,
				top:'0'
				}, 500);
		},950);
		return false;
	});
	
	/*Partical JS*/
	particlesJS("particles_js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"polygon",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}});
	
	/*Counter JS*/
	$('#countdown').countdown({
		date: '1/1/2019',
	});
	
	/*Typed js*/
	$("#typed").typed({
		strings: [" Зул сарын ", " Мэнд Хүргэе!", " (*-*) "],
		typeSpeed: 100,
		backDelay: 900,
		loop: true,
		cursorChar: "|",
		contentType: 'html', // or text
		// defaults to false for infinite loop
		loopCount: false
	});
	
	/*Typed js for title tag*/
	$("#title").typed({
		strings: ["Сайн уу..!", "Тавтай морил..!", "(*-*)"],
		typeSpeed: 300,
		backDelay: 900,
		loop: true,
		cursorChar: "|",
		contentType: 'html', // or text
		// defaults to false for infinite loop
		loopCount: false
	});
	/*click functions*/
	var target = $('#splitlayout');
	$(".about div").on('click', function(){
		if ( target.hasClass('reset-layout') ) {
			target.removeClass('close-right');
			target.addClass('open-left');
			target.removeClass('close-left');
			$('.page-left .animated').addClass('fadeInLeft');
			target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', 
			function() {
				target.removeClass('reset-layout')
			}); 
		 }
		else if ( target.hasClass('open-left') ) {
			target.removeClass('reset-layout');
			target.removeClass('open-left');
			target.addClass('close-left');
			$('.page-left .animated').removeClass('fadeInLeft');
			target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', 
			function() {
				target.addClass('reset-layout')
			});
		}
		$('.side-left .call-to-action.about .goto-close').toggleClass('opacity-hide');
		$('.call-to-action .goto-next').toggleClass('opacity-hide');
		return false;
	});
	
	$(".contact div").on('click', function(){
		
		if ( target.hasClass('reset-layout') ) {
			target.addClass('open-right');
			target.removeClass('close-right');
			target.removeClass('close-left');
			$('.page-right .animated').addClass('fadeInRight');
			target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', 
			function() {
				target.removeClass('reset-layout')
			}); 
		 }
		else if ( target.hasClass('open-right') ) {
			target.removeClass('reset-layout');
			target.removeClass('open-right');
			target.addClass('close-right');
			$('.page-right .animated').removeClass('fadeInRight');
			target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', 
			function() {
				target.addClass('reset-layout')
			});
		}
		$('.call-to-action .goto-next').toggleClass('opacity-hide');
		$('.side-right .call-to-action .goto-close').toggleClass('opacity-hide');
		return false;
	});
	
	/* Map Initialization */
	if( $('#map_canvas').length > 0 ){	
		var settings = {
			zoom: 11,
			center: new google.maps.LatLng(40.6700, -73.9400),
			styles:[
				{
					"featureType": "administrative.locality",
					"elementType": "all",
					"stylers": [
						{
							"hue": "#2c2e33"
						},
						{
							"saturation": 7
						},
						{
							"lightness": 19
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"hue": "#ffffff"
						},
						{
							"saturation": -100
						},
						{
							"lightness": 100
						},
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"hue": "#ffffff"
						},
						{
							"saturation": -100
						},
						{
							"lightness": 100
						},
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
						{
							"hue": "#bbc0c4"
						},
						{
							"saturation": -93
						},
						{
							"lightness": 31
						},
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels",
					"stylers": [
						{
							"hue": "#bbc0c4"
						},
						{
							"saturation": -93
						},
						{
							"lightness": 31
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels",
					"stylers": [
						{
							"hue": "#bbc0c4"
						},
						{
							"saturation": -93
						},
						{
							"lightness": -2
						},
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
						{
							"hue": "#e9ebed"
						},
						{
							"saturation": -90
						},
						{
							"lightness": -8
						},
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"hue": "#e9ebed"
						},
						{
							"saturation": 10
						},
						{
							"lightness": 69
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"hue": "#e9ebed"
						},
						{
							"saturation": -78
						},
						{
							"lightness": 67
						},
						{
							"visibility": "simplified"
						}
					]
				}
			]};		
			var map = new google.maps.Map(document.getElementById("map_canvas"), settings);	
			google.maps.event.addDomListener(window, "resize", function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(center);
			});	
			var contentString = '<div id="content-map-marker" style="text-align:left; padding-top:10px; padding-left:10px">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h4 id="firstHeading" class="firstHeading" style="color:#000; margin-bottom:0px;"><strong>Hello Friend!</strong></h4>'+
				'<div id="bodyContent">'+
				'<p style="font-family:Verdana; color:#999; font-size:12px; margin-bottom:10px">Here we are. Come to drink a coffee!</p>'+
				'</div>'+
				'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});	
			var companyImage = new google.maps.MarkerImage('img/pin-dark.png',
				new google.maps.Size(58,63),<!-- Width and height of the marker -->
				new google.maps.Point(0,0),
				new google.maps.Point(35,20)<!-- Position of the marker -->
			);
			var companyPos = new google.maps.LatLng(40.6700, -73.9400);	
			var companyMarker = new google.maps.Marker({
				position: companyPos,
				map: map,
				icon: companyImage,               
				title:"Our Office",
				zIndex: 3});	
			google.maps.event.addListener(companyMarker, 'click', function() {
				infowindow.open(map,companyMarker);
			});	
		}
}
/***** Porky function end *****/

/***** Placehoder ie9 start*****/
$('input[type=text], textarea').placeholder();
/***** Placehoder ie9 end*****/	

/***** Photoswipe init start*****/	
	var initPhotoSwipeFromDOM = function(gallerySelector) {

		// parse slide data (url, title, size ...) from DOM elements 
		// (children of gallerySelector)
		var parseThumbnailElements = function(el) {
			var thumbElements = el.childNodes,
				numNodes = thumbElements.length,
				items = [],
				figureEl,
				linkEl,
				size,
				item;

			for(var i = 0; i < numNodes; i++) {

				figureEl = thumbElements[i]; // <figure> element

				// include only element nodes 
				if(figureEl.nodeType !== 1) {
					continue;
				}

				linkEl = figureEl.children[0]; // <a> element

				size = linkEl.getAttribute('data-size').split('x');

				// create slide object
				item = {
					src: linkEl.getAttribute('href'),
					w: parseInt(size[0], 10),
					h: parseInt(size[1], 10)
				};



				if(figureEl.children.length > 1) {
					// <figcaption> content
					item.title = figureEl.children[1].innerHTML; 
				}

				if(linkEl.children.length > 0) {
					// <img> thumbnail element, retrieving thumbnail url
					item.msrc = linkEl.children[0].getAttribute('src');
				} 

				item.el = figureEl; // save link to element for getThumbBoundsFn
				items.push(item);
			}

			return items;
		};

		// find nearest parent element
		var closest = function closest(el, fn) {
			return el && ( fn(el) ? el : closest(el.parentNode, fn) );
		};

		// triggers when user clicks on thumbnail
		var onThumbnailsClick = function(e) {
			e = e || window.event;
			e.preventDefault ? e.preventDefault() : e.returnValue = false;

			var eTarget = e.target || e.srcElement;

			// find root element of slide
			var clickedListItem = closest(eTarget, function(el) {
				return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
			});

			if(!clickedListItem) {
				return;
			}

			// find index of clicked item by looping through all child nodes
			// alternatively, you may define index via data- attribute
			var clickedGallery = clickedListItem.parentNode,
				childNodes = clickedListItem.parentNode.childNodes,
				numChildNodes = childNodes.length,
				nodeIndex = 0,
				index;

			for (var i = 0; i < numChildNodes; i++) {
				if(childNodes[i].nodeType !== 1) { 
					continue; 
				}

				if(childNodes[i] === clickedListItem) {
					index = nodeIndex;
					break;
				}
				nodeIndex++;
			}



			if(index >= 0) {
				// open PhotoSwipe if valid index found
				openPhotoSwipe( index, clickedGallery );
			}
			return false;
		};

		// parse picture index and gallery index from URL (#&pid=1&gid=2)
		var photoswipeParseHash = function() {
			var hash = window.location.hash.substring(1),
			params = {};

			if(hash.length < 5) {
				return params;
			}

			var vars = hash.split('&');
			for (var i = 0; i < vars.length; i++) {
				if(!vars[i]) {
					continue;
				}
				var pair = vars[i].split('=');  
				if(pair.length < 2) {
					continue;
				}           
				params[pair[0]] = pair[1];
			}

			if(params.gid) {
				params.gid = parseInt(params.gid, 10);
			}

			return params;
		};

		var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
			var pswpElement = document.querySelectorAll('.pswp')[0],
				gallery,
				options,
				items;

			items = parseThumbnailElements(galleryElement);

			// define options (if needed)
			options = {

				// define gallery index (for URL)
				galleryUID: galleryElement.getAttribute('data-pswp-uid'),

				getThumbBoundsFn: function(index) {
					// See Options -> getThumbBoundsFn section of documentation for more info
					var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
						pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
						rect = thumbnail.getBoundingClientRect(); 

					return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
				}

			};

			// PhotoSwipe opened from URL
			if(fromURL) {
				if(options.galleryPIDs) {
					// parse real index when custom PIDs are used 
					// http://photoswipe.com/documentation/faq.html#custom-pid-in-url
					for(var j = 0; j < items.length; j++) {
						if(items[j].pid == index) {
							options.index = j;
							break;
						}
					}
				} else {
					// in URL indexes start from 1
					options.index = parseInt(index, 10) - 1;
				}
			} else {
				options.index = parseInt(index, 10);
			}

			// exit if index not found
			if( isNaN(options.index) ) {
				return;
			}

			if(disableAnimation) {
				options.showAnimationDuration = 0;
			}

			// Pass data to PhotoSwipe and initialize it
			gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
			gallery.init();
		};

		// loop through all gallery elements and bind events
		var galleryElements = document.querySelectorAll( gallerySelector );

		for(var i = 0, l = galleryElements.length; i < l; i++) {
			galleryElements[i].setAttribute('data-pswp-uid', i+1);
			galleryElements[i].onclick = onThumbnailsClick;
		}

		// Parse URL and open gallery if it contains #&pid=3&gid=1
		var hashData = photoswipeParseHash();
		if(hashData.pid && hashData.gid) {
			openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
		}
	};

	// execute above function
	initPhotoSwipeFromDOM('.project-gallery');
/***** Photoswipe init end*****/		
