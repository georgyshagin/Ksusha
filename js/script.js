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

    $('.pagetop').click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });   

    // Валидация и маска формы

    // $('input[name=phone]').mask("+7 (999) 999-99-99");

    let inputsTel = $('input[name=phone]');

    Inputmask({
        "mask": "+7 (999) 999-99-99",
        showMaskOnHover: false
    }).mask(inputsTel);

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },                
                email: {
                    required: true,
                    email: true
                },
                phone: "required"
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите Ваше имя и фамилию",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                email: {
                    required: "Пожалуйста, введите Ваш e-mail",
                    email: "Неправильно введен e-mail"
                },
                phone: "Пожалуйста, введите Ваш контактный телефон"                
            }
        });
    }

    validateForms('#feedback__form');

    // Отправка формы

    $('#feedback__form').submit(function(e) {
        e.preventDefault();

        if(!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "phpmailer/send.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('#feedback__form').trigger('reset');
        });
        return false;
    });
    


    // <input name="name" required placeholder="Ваше имя и фамилия" type="text">
    // <input name="email" required placeholder="Ваш e-mail" type="email">
    // <input name="phone" required placeholder="Контактный телефон">
    // <textarea name="text" placeholder="Комментарий"></textarea>
});

