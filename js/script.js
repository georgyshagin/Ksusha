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
                breakpoint: 767,                
                settings: {                                       
                    dots: true,
                    arrows: false                    
                }
            }            
        ]
    });

    $('.review__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
        arrows: false,
        dots: true               
	});

});

