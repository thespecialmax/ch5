(function ($) {
    $(function () {
        var jcarousel = $('.jcarousel_responsive_col_4 .jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                resize($(this));
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel_responsive_col_4 ul.nav-tabs li a').bind('click', function (e) {
            // Tab clicked
            $('.jcarousel').each(function () {
                var itm = $(this);
                console.log('-');
                setTimeout(function () {
                    resize(itm);
                }, 1);
            });

        });


        $('.jcarousel_responsive_col_4 .jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel_responsive_col_4 .jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel_responsive_col_4 .jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function () {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function () {
                $(this).removeClass('active');
            })
            .on('click', function (e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 4,
                item: function (page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });

        function resize(jcarousel) {
            if (jcarousel.is(':visible')) {
                //Not calculate slider in hidden tab
                var width = $(jcarousel).innerWidth();

                if (width >= 600) {
                    width = width / 4;
                } else if (width >= 350) {
                    width = width / 2;
                }

                $('.jcarousel_responsive_col_4 div.jcarousel ul li').css('width', width + 'px');
                //$(jcarousel).jcarousel('items').css('width', width + 'px');
            }
        }
    });
})(jQuery);