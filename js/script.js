// $(function() {
// 	$('.popup-link').magnificPopup({
// 		delegate: 'a',
//         type: 'image',
//         gallery: {
//            enabled: true,
//         },
//         zoom: {
// 	        enabled: true,
// 	        duration: 300
// 		}
// 	});
// });


// Type Image - картинка без анимации

$(document).ready(function(){
    $('.diploma__link').magnificPopup({
		type: 'image'
	});

	$('.diploma__slider').slick({
        speed: 1000,        
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.svg"></button>',        
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 3,              
        responsive: [        
            {
                breakpoint: 992,
                settings: {
                //   arrows: false,
                //   centerMode: true,
                //   centerPadding: '40px',
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,                
                settings: {                                       
                    dots: true,
                    arrows: false,
                    slidesToShow: 1                 
                }
            }            
        ]
    });

    $('.review__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
        arrows: false,
        dots: true,        
        responsive: [
            {
              breakpoint: 1221,
              settings: {
                adaptiveHeight: true
              }
            }
        ]               
	});
   
    $('.hamburger').click(function() {        
        $(this).toggleClass('active');
        $('.header').toggleClass('active');
    });

    // $("a.scroll-to").on("click", function(e){
    //     e.preventDefault();
    //     var anchor = $(this).attr('href');
    //     $('html, body').stop().animate({
    //         scrollTop: $(anchor).offset().top - 60
    //     }, 800);
    // });
    

});

