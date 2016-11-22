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
		$(this).addClass('active')
	
	});
	$(window).scroll(function() {
		var s_top=$(window).scrollTop();
  		$('section[id]').each(function(){
			if($(this).offset().top <= (s_top+($( window ).height()/2))){
				$('.navbar-nav li a.active').removeClass('active');
				$('a[href="#'+$(this).attr('id')+'"]').addClass('active')
			}
		});
	})

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
  		  	  	  	slidesToScroll: 4,
  		  	  	  	infinite: true,
  		  	  	  	dots: false
  		  	    }
  		  	},
  		  	{
  		  	  	breakpoint: 992,
  		  	  	settings: {
  		  	    	slidesToShow: 3,
  		  	    	slidesToScroll: 3,
  		  	    	dots: false
  		  	  	}
  		  	},
  		  	{
  		  	  	breakpoint: 320,
  		  	  	settings: {
  		  	    	slidesToShow: 3,
  		  	    	slidesToScroll: 3,
  		  	    	dots: true
  		  	  	}
  		  	}
  		  	// You can unslick at a given breakpoint now by adding:
  		  	// settings: "unslick"
  		  	// instead of a settings object
  		]
	});

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
  // можешь не давать ему от сюда
   for(i=ix+1;6>i;i++){
    $('#carousel_diagram .carousel-indicators > li:nth-child('+i+')').removeClass('passed');
  }
  //до сюда, типо как дз
  //класс passed должен иметь все тоже самое что и active
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

        $(".modal").on("show.bs.modal", function(){
            var $bodyWidth = $("body").width();
            $("body").css({'overflow-y': "hidden"}).css({'padding-right': ($("body").width()-$bodyWidth)});
        });
        
        $(".modal").on("hidden.bs.modal", function(){
            $("body").css({'padding-right': "0", 'overflow-y': "auto"});
        });

        //slick nav-bar and button 
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
    


});