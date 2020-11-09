
(function () {
    function carouselInit () {
        $(document).ready(function() {
            $('.courusel').slick(
                {
                    arrows: true,
                    dots: false,
                    infinite: true,
                    speed: 1000,
                    slidesToScroll: 1,
                    centerMode: false,
                    slidesToShow: 3,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: false
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                                infinite: true,
                                centerMode: true,
                                centerPadding: '40px',
                                slidesToShow: 1
                            }
                        }
                    ]
                }
            );
        });
    }

    function scroll(target) {
        scrollTo({
            top: target.top,
            left: target.left,
            behavior: 'smooth'
        });
        return target;
    }
    function scrollToAbout () {
        $(document).ready(function() {
            let target = $('#about').offset();
            scroll(target);
        })
    }
    function scrollToSkills () {
        $(document).ready(function() {
            let target = $('#skills').offset();
            scroll(target);
        })
    }
    function scrollToExamples() {
        $(document).ready(function() {
            let target = $('#examples').offset();
            scroll(target);
        })
    }

    function buttonInit() {
        const header = document.getElementById('header');
        header.addEventListener('click', (event) => {
            let el = event.target;
            if (el.classList.contains("toAbout")) {
                scrollToAbout();
            }
            else if (el.classList.contains('toSkills')) {
                scrollToSkills();
            }
            else if (el.classList.contains('toExamples')) {
                scrollToExamples();
            }
        })
    }
    
    $('document').ready(function() {
        $('#uptotop').click(function(){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    })
        
    $(window).scroll(function(){
        if(window.pageYOffset > 300) {
            $('#uptotop').show();
        } else {
            $('#uptotop').hide();
        }
    })
    
    /* window.onload = function() {
		setTimeout(function() {
			document.getElementById("preloader").style.display = "none";
		}, 4000);
	}; */

    carouselInit();
    buttonInit();

}());
