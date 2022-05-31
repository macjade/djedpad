/*----------------------------------------------

[ALL CONTENTS]

1. Preloader
2. Responsive Menu
3. Navigation 
4. Slides
5. Load More
6. Shuffle
7. Contact Form

/*----------------------------------------------
1. Preloader
----------------------------------------------*/
(function ($) {
    'use strict';

    $(window).on('load', function() {
        $('#djedpad-preloader').addClass('loaded');
        $('.djedpad__header').addClass('active');
        AOS.init();
    })

}(jQuery));

/*----------------------------------------------
2. Responsive Menu
----------------------------------------------*/
(function ($) {

    'use strict';

    function navResponsive() {

        let navbar = $('.navbar .items');
        let menu = $('#menu .items');

        menu.html('');
        navbar.clone().appendTo(menu);

        $('.menu .icon-arrow-right').removeClass('icon-arrow-right').addClass('icon-arrow-down');
    }

    navResponsive();

    $(window).on('resize', function () {
        navResponsive();
    })

    $('.menu .dropdown-menu').each(function() {

        var children = $(this).children('.dropdown').length;
        $(this).addClass('children-'+children);
    })

    
    $('.menu .nav-item.dropdown').each(function() {

        var children = $(this).children('.nav-link');
        children.addClass('prevent');
    })

    $(document).on('click', '#menu .nav-item .nav-link', function (event) {

        if($(this).hasClass('prevent')) {
            event.preventDefault();
        }

        var nav_link = $(this);

        nav_link.next().toggleClass('show');

        if(nav_link.hasClass('smooth-anchor')) {
            $('#menu').modal('hide');
        }
    })
}(jQuery));

/*----------------------------------------------
3. Navigation
----------------------------------------------*/
(function ($) {

    'use strict';

    var position = $(window).scrollTop();
    var navbar   = $('.navbar');

    $(document).ready(function() {
        if (position > 0) {
            navbar.hide();
        }
    })

    $(window).scroll(function () {

        let scroll = $(window).scrollTop();
        let navbar = $('.navbar');

        if (!navbar.hasClass('relative')) {

            if (scroll > position) {

                if (window.screen.width >= 767) {

                    navbar.fadeOut('fast');

                } else {

                    navbar.addClass('navbar-sticky');
                }

            } else {

                if (position < 76) {

                    navbar.slideDown('fast').removeClass('navbar-sticky');

                } else {

                    navbar.slideDown('fast').addClass('navbar-sticky');
                }

            }

            position = scroll;

        }
    })

    $('.nav-link').each(function() {
        let href = $(this).attr('href');
        if (href.length > 1 && href.indexOf('#') != -1) {
            $(this).addClass('smooth-anchor');
        }
    })

    $(document).on('click', '.smooth-anchor', function (event) {

        event.preventDefault();

        $('html, body').animate({

            scrollTop: $($.attr(this, 'href')).offset().top

        }, 500);
    })

    $(document).on('click', 'a[href="#"]', function (event) {
        event.preventDefault();
    })

    $('.dropdown-menu').each(function () {

        let dropdown = $(this);

        dropdown.hover(function () {

            dropdown.parent().find('.nav-link').first().addClass('active');

        }, function () {

            dropdown.parent().find('.nav-link').first().removeClass('active');

        })
    })
}(jQuery));

/*----------------------------------------------
4. Slides
----------------------------------------------*/
(function ($) {

    'use strict';

    setTimeout(function() {

        $('.no-slider .left').addClass('init');

    }, 1200)

    var animation = function(slider) {

        let image = $(slider + ' .swiper-slide-active img');
        let title = $(slider + ' .title');
        let description = $(slider + ' .description');
        let btn = $(slider + ' .btn');
        let nav = $(slider + ' nav');

        image.toggleClass('aos-animate');
        title.toggleClass('aos-animate');
        description.toggleClass('aos-animate');
        btn.toggleClass('aos-animate');
        nav.toggleClass('aos-animate');

        setTimeout(function() {

            image.toggleClass('aos-animate');
            title.toggleClass('aos-animate');
            description.toggleClass('aos-animate');
            btn.toggleClass('aos-animate');
            nav.toggleClass('aos-animate');

            AOS.refresh();

        }, 100)

        if ($('.full-slider').hasClass('animation')) {

            $('.full-slider .left').addClass('off');
            $('.full-slider .left').removeClass('init');

            setTimeout(function() {

                $('.full-slider .left').removeClass('off');

            }, 200)

            setTimeout(function() {

                $('.full-slider .left').addClass('init');

            }, 1000)

        } else {

            $('.full-slider .left').addClass('init');
        }
    }

    // var fullSlider = new Swiper('.full-slider', {

    //     autoplay: {
    //         delay: 10000,
    //     },
    //     loop: true,
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //     pagination: {
    //         el: '.swiper-pagination'
    //     },
    //     navigation: false,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true
    //     },
    //     keyboard: {
    //         enabled: true,
    //         onlyInViewport: false
    //     },
    //     on: {
    //         init: function() {

    //             animation('.full-slider')

    //             let pagination = $('.full-slider .swiper-pagination');

    //             pagination.hide();

    //             setTimeout(function() {

    //                 pagination.show();

    //             }, 2000)

    //         },
    //         slideChange: function() {

    //             animation('.full-slider')
    //         }
    //     }
    // })

    var midSlider = new Swiper('.slider-mid', {

        autoplay: false,
        loop: false,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1023: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })

    var minSlider = new Swiper('.slider-min', {

        autoplay: false,
        loop: false,
        slidesPerView: 1,
        spaceBetween: 30,
        centered: true,
        breakpoints: {
            424: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1023: {
                slidesPerView: 4,
                spaceBetween: 30
            },
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })

    // var sliderDisabled = new Swiper('.no-slider', {

    //     autoplay: false,
    //     loop: false,
    //     keyboard: false,
    //     grabCursor: false,
    //     allowTouchMove: false,
    //     on: {
    //         init: function() {
    //             animation('.no-slider')
    //         }
    //     }
    // })
}(jQuery));

/*----------------------------------------------
5. Load More
----------------------------------------------*/
(function ($) {

    'use strict';

    $(".load-more .item").slice(0, 4).show();
    $(".blog-area.load-more .item").slice(0, 6).show();

    $("#load-btn").on('click', function (e) {

        e.preventDefault();

        $(".load-more .item:hidden").slice(0, 4).slideDown();
        $(".blog-area.load-more .item:hidden").slice(0, 6).slideDown();

        if ($(".load-more .item:hidden").length == 0) {
            $("#load-btn").fadeOut('slow');
        }

    });
}(jQuery));

/*----------------------------------------------
6. Shuffle
----------------------------------------------*/
(function ($) {

    'use strict';

    if ( $('.explore-items').length ) {

        $('.explore-area').each(function(index) {

            var count = index + 1;
    
            $(this).find('.explore-items').removeClass('explore-items').addClass('explore-items-'+count);
            $(this).find('.explore-item').removeClass('explore-item').addClass('explore-item-'+count);
            $(this).find('.explore-btn').removeClass('explore-btn').addClass('explore-btn-'+count);
            
            var Shuffle = window.Shuffle;
            var Filter  = new Shuffle(document.querySelector('.explore-items-'+count), {
                itemSelector: '.explore-item-'+count,
                buffer: 1,
            })
    
            $('.explore-btn-'+count).on('change', function (e) {
    
                var input = e.currentTarget;
                
                if (input.checked) {
                    Filter.filter(input.value);
                }
            })
        });

    }

}(jQuery));

/*----------------------------------------------
7. Contact Form
----------------------------------------------*/
(function ($) {

    'use strict';

    var form = $('#contact-form');

    var formMessages = $('.form-message');

    $(form).submit(function (e) {

        e.preventDefault();

        var formData = $(form).serialize();

        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function (response) {

            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            $(formMessages).text(response);

            $('#contact-form input,#contact-form textarea').val('');
        })
        .fail(function (data) {

            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });

}(jQuery));

am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(am5percent.PieChart.new(root, {
      layout: root.verticalLayout,
      innerRadius: am5.percent(50)
    }));
    
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var series = chart.series.push(am5percent.PieSeries.new(root, {
      valueField: "value",
      categoryField: "category",
      alignLabels: true,
      legendLabelText: "[{fill}]{category}[/]",
        legendValueText: "[bold {fill}]{value}%[/]"
    }));
    
    series.labels.template.setAll({
      textType: "circular",
      fill: am5.color(0xb5047f),
        text: "{category} {value}%",
      centerX: 0,
      centerY: 0
    });
    
    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([
      { value: 21, category: "Team" },
      { value: 25, category: "Pre-Sale" },
      { value: 20, category: "Public-Sale" },
      { value: 8, category: "DAO" },
      { value: 4, category: "Marketing" },
      { value: 2, category: "Community Reward" },
      { value: 20, category: "Staking" },
    ]);
    
    
    // Create legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.percent(50),
      x: am5.percent(50),
      marginTop: 15,
      marginBottom: 15,
    }));
    
    legend.data.setAll(series.dataItems);
    
    
    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);
    
}); // end am5.ready()

(function ($) {

    $('a.project_on').click(function (e) {
        toastr.info('Coming Soon!!!', {
            positionClass: 'toast-bottom-center',
            progressBar: true
        });
    });

    $('a.wallet_on').click(function (e) {
        if (!$('#exampleCheck1').is(':checked')) {
            toastr.info('Kindly check terms and conditions');
        }else {

            toastr.info('Wallet connection coming soon.');
        }
    });

    toastr.options = {
        "closeButton": true,
        "progressBar": true,
        "positionClass": "toast-bottom-center",
      }

}(jQuery))