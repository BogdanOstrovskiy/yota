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
  		  	  	breakpoint: 1024,
  		  	  	settings: {
  		  	  	  	slidesToShow: 4,
  		  	  	  	slidesToScroll: 4,
  		  	  	  	infinite: true,
  		  	  	  	dots: true
  		  	    }
  		  	},
  		  	{
  		  	  	breakpoint: 600,
  		  	  	settings: {
  		  	    	slidesToShow: 3,
  		  	    	slidesToScroll: 3,
  		  	    	dots: true
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

});