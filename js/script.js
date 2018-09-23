$(document).ready(function(){
	//show nav bar when click on icon
	$(".bar-icon").click(function(){
		$(".nav-list").slideToggle();
	})
	$(window).scroll(function(){
		var src = $(this).scrollTop();
		if(src > 200){//show sticky navbar
			$("header").addClass("sticky");
		}
		else{
			$("header").removeClass("sticky");
		}
		if(src >1895)
		{
			$('.timer').countTo();
			$(window).off("scroll");
		}
		if(src>500){
			$('.scrolltop').fadeIn();
		}
			else{
			$('.scrolltop').fadeOut();
		}
			
	});
	
	//portfolio buttons change
	$('.buttons button').click(function(){
		$(this).addClass('active-btn').siblings().removeClass('active-btn');
		var cssfilter = $(this).attr('id');

		if(cssfilter === 'all'){
			$('.images > div ').fadeIn();
		}
		else{
			$('.images > div ').fadeOut();
			$('.images').contents().filter('.' + cssfilter).fadeIn();
		}
	});
	//out team slider
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
	})
	//choose
	 $('.c-pannel li').click(function(){
		 $(this).addClass('active-btn').siblings().removeClass('active-btn');
		 var p = $(this).data('role');
		 $('.content > div').hide(); 
		 $('.content').contents().filter('#' + p).fadeIn();
	 })
	 //pop up video in choose section
	 $('.pop').magnificPopup({
		type: 'iframe'
	  });
	  //pleasure section slick slider
	  $('.slick').slick({
		  nextArrow : false,
		  prevArrow : false,
		  autoplay:true,
	  });
	  //scroll to top
	  $('.scrolltop').click(function(){
		  $('html , body').animate({
			  scrollTop:0
		  },500)
	  })
	  //smooth scroll
	  $('.list a').click (function(){
		  $('body , html').animate({
			  scrollTop : $ ($(this).attr('href')).offset().top-100
		  })
	  })

});