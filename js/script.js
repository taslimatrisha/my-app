
    $(".ss-carousel").owlCarousel({
        margin: 30,
        loop: true,
        autoplay:true,
        autoplayTimeout: 4000,
        autoplaySpeed: 800,
        autoplayHoverPause: false,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $(".feedback-carousel").owlCarousel({
        items: 2,
        margin: 50,
        loop: true,
        autoplay:true,
        autoplayTimeout: 4000,
        autoplaySpeed: 800,
        autoplayHoverPause: false,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            }   
        }
    });

    $(".logo-carousel").owlCarousel({
        margin: 100,
        loop: true,
        dots: false,
        autoplay:true,
        autoplayTimeout: 4000,
        autoplaySpeed: 800,
        autoplayHoverPause: false,
        responsive:{
            0:{
                items:2
            },
            500:{
                items:3
            },
            800:{
                items:4
            },
            1000:{
                items:5
            },  
        }
    });