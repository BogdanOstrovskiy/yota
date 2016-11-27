$(document).ready(function() {

	$('.visual').each(function() {
		if ($(this).children('img').length) {
			$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
		}
	});

	//.blog-list .img, .banner, .slider .slide, .categories-list li .img

	//navmenu-scroll
	$('.navbar-nav li a').click(function(e){
		e.preventDefault();
		var x=$($(this).attr('href'))
			  .offset().top;
		$('html, body').animate({'scrollTop':x},400)
		$('.navbar-nav li a.active').removeClass('active');
		$(this).addClass('active');
		$('#navbarCollapse').slideUp(400, function() {
			$(this).removeClass('in').removeAttr('style');
			$('.navbar-toggle').addClass('collapsed').attr({"aria-expanded":"false"})

		});
	});
	$(window).scroll(function() {
		var s_top=$(window).scrollTop();
  		$('section[id]').each(function(){
			if($(this).offset().top <= (s_top+($( window ).height()/2))){
				$('.navbar-nav li a.active').removeClass('active');
				$('a[href="#'+$(this).attr('id')+'"]').addClass('active')
			}
		});
	});
	//carousel touch swipe
	var hammer = new Hammer(document.querySelector('.carousel_swipe'));
        var $carousel = $(".carousel_swipe").carousel({"interval":0});
        var hammer_2 = new Hammer(document.querySelector('.carousel_swipe_2'));
        var $carousel_2 = $(".carousel_swipe_2").carousel({"interval":0});
        var hammer_3 = new Hammer(document.querySelector('.carousel_swipe_3'));
        var $carousel_3 = $(".carousel_swipe_3").carousel({"interval":0});

        console.log(hammer);
        hammer.get("swipe");
        hammer.on("swipeleft", function(){
            $carousel.carousel("next");
        });

        hammer.on("swiperight", function(){
            $carousel.carousel("prev");
        });

        hammer_2.get("swipe");
        hammer_2.on("swipeleft", function(){
            $carousel_2.carousel("next");
        });

        hammer_2.on("swiperight", function(){
            $carousel_2.carousel("prev");
        });

        hammer_3.get("swipe");
        hammer_3.on("swipeleft", function(){
            $carousel_3.carousel("next");
        });

        hammer_3.on("swiperight", function(){
            $carousel_3.carousel("prev");
        });

	//slick slider
	$('.responsive-carousel').slick({
  		dots: false,
  		infinite: false,
  		speed: 300,
  		arrows: true,
  		slidesToShow: 5,
  		slidesToScroll: 1,
  		responsive: [
  		  	{
  		  	  	breakpoint: 1170,
  		  	  	settings: {
  		  	  	  	slidesToShow: 4,
  		  	  	  	slidesToScroll: 1,
  		  	  	  	infinite: true,
  		  	  	  	dots: false
  		  	    }
  		  	},
  		  	{
  		  	  	breakpoint: 992,
  		  	  	settings: {
  		  	    	slidesToShow: 3,
  		  	    	slidesToScroll: 1,
  		  	    	dots: false
  		  	  	}
  		  	},
  		  	{
  		  	  	breakpoint: 767,
  		  	  	settings: {
  		  	    	slidesToShow: 3,
  		  	    	slidesToScroll: 3,
  		  	    	arrows: false,
  		  	    	dots: true
  		  	  	}
  		  	}
  		  	// You can unslick at a given breakpoint now by adding:
  		  	// settings: "unslick"
  		  	// instead of a settings object
  		]
	});
	//check of conditions for a slider-2

	if ($(this).width() <= 767) {
		
		$('.mobile-carousel').slick({
  			dots: true,
  			infinite: false,
  			speed: 300,
  			arrows: false,
  			slidesToShow: 1,
  			slidesToScroll: 1,
  		});
	}
	//bootstrap-select

	$(document).ready(function () {
	    var mySelect = $('#first-disabled2');
	
	  	$('#special').on('click', function () {
	  	    mySelect.find('option:selected').prop('disabled', true);
	  	    mySelect.selectpicker('refresh');
	  	});
	
	  	$('#special2').on('click', function () {
	  	    mySelect.find('option:disabled').prop('disabled', false);
	  	    mySelect.selectpicker('refresh');
	  	});
	
  	  	$('#basic2').selectpicker({
  	    	liveSearch: true,
  	    	maxOptions: 1
  	  	});
  	});

	//---------------
	$('#carousel_diagram').on('slide.bs.carousel',function(e){

		  var ix = $(e.relatedTarget).index()+1;
		  for(i=ix;0<i;i--){
		    $('#carousel_diagram .carousel-indicators > li:nth-child('+i+')').addClass('passed');
		  }
		   for(i=ix+1;6>i;i++){
		    $('#carousel_diagram .carousel-indicators > li:nth-child('+i+')').removeClass('passed');
		  }
		});


        $('#carousel_main').carousel({
            interval: 6000,
            pause: 'hover',
            wrap: true
        });
        $("#carousel_diagram").carousel({
            interval: false,
            pause: 'hover',
            wrap: false
        }); 
        $("#carousel_reviews").carousel({
            interval: false,
            pause: 'hover',
            wrap: true
        });

//         $(".modal").on("show.bs.modal", function(){
//             var $bodyWidth = $("body").width();
//             $("body").css({'overflow-y': "hidden"}).css({'padding-right': ($("body").width()-$bodyWidth)});
//         });
        
//         $(".modal").on("hidden.bs.modal", function(){
//             $("body").css({'padding-right': "0", 'overflow-y': "auto"});
//         });

        //slick nav-bar and button 
        
    if (!($(window).width() <= 767)) {
        
        $(function(){
            var pos = $("nav.navbar").offset().top;

            $(window).scroll(function() {
                if($(this).scrollTop() >= (pos + 50)) {
                    $('nav.navbar').addClass('stickytop');
                    $('.button_hide').fadeIn().css({'display':'block'});
                }
                else{
                    $('nav.navbar').removeClass('stickytop');
                    $('.button_hide').fadeOut();
                }
            });
        });
    
	};

});
