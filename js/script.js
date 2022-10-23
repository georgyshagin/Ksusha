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

    // Скрытие меню после клика

    $('.hamburger').click(function() {        
        $(this).toggleClass('active');
        $('.header').toggleClass('active');
    });

    $('.header a').click(function() {
        $('.hamburger').toggleClass('active');
        $('.header').toggleClass('active');
    });

    // Плавный скролл

    $('.header a').on('click', function() {

        let href = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 800,   // по умолчанию «400» 
            easing: "linear" // по умолчанию «swing» 
        });
    
        return false;
    });

    // Прокрутка вверх

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1100) {
            $('.pagetop').fadeIn();
        } else {
            $('.pagetop').fadeOut();
        }
    });

    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    

});

