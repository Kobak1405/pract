export default {
    dots: true,
    fade: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnHover: false,
    customPaging : function(slider, i) {
        var title = $($('.slider-item')[i]).data('title');
        return '<span class="progressbar__title">' + title + '</span><a class="pager__item"><span class="progressBar" data-slick-index="' + i + '"></span></a>';
    },
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            dots: false,
            }
        }
    ]
};