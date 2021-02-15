<template>
    <ul class="hp-slider">
        <li class="slider-item" data-title="Санторини, Греция Хочу туда!">
            <a href="#">
                <img src="../../assets/img/hp_slider/slide-1.jpg" alt="">
                <span class="hp-slider_gradient"></span>
            </a>
        </li>
        <li class="slider-item" data-title="Санторини, Греция Хочу туда!">
            <a href="#">
                <img src="../../assets/img/hp_slider/slide-2.jpg" alt="">
                <span class="hp-slider_gradient"></span>
            </a>
        </li>
        <li class="slider-item" data-title="Санторини, Греция Хочу туда!">
            <a href="#">
                <img src="../../assets/img/hp_slider/slide-1.jpg" alt="">
                <span class="hp-slider_gradient"></span>
            </a>
        </li>

        <li class="slider-item" data-title="Санторини, Греция Хочу туда!">
            <a href="#">
                <img src="../../assets/img/hp_slider/slide-2.jpg" alt="">
                <span class="hp-slider_gradient"></span>
            </a>
        </li>
    </ul>
</template>

<script>
    /* eslint-disable */
    import $ from 'jquery';
    window.$ = $;
    import slick from 'slick-carousel';
    import hpSliderOptions from '../../utils/hpSliderOptions.js';

    // JS has to be refactored
    var percentTime;
    var tick;
    var $slider = $('.hp-slider');
    var slides = $('.hp-slider .slick-dots li').length;
    var sliderTime = 6000;
    var time = (sliderTime / 1000) + 0.6; //duration of autoplaySpeed in seconds
    var progressBarIndex = 0;
    var isPause;
    var $progress = '';

    export default {
        data() {
            return {
                listImg: [
                    '../../assets/img/hp_slider/slide-1.jpg',
                    '../../assets/img/hp_slider/slide-2.jpg',
                    '../../assets/img/hp_slider/slide-1.jpg',
                    '../../assets/img/hp_slider/slide-2.jpg'
                ]

            };
        },

        methods: {
            progressBar: function() {
                var percentTime;
                var tick;
                var $slider = $('.hp-slider');
                var slides = $('.hp-slider .slick-dots li').length;
                var sliderTime = 6000;
                var time = (sliderTime / 1000) + 0.6; //duration of autoplaySpeed in seconds
                var progressBarIndex = 0;
                var isPause;

                $slider.find('.slick-slide').on({
                    mouseenter: function() {
                        isPause = true;
                    },
                    mouseleave: function() {
                        isPause = false;
                    }
                });

                $('.progressBar').each(function(index) {
                    $progress = "<div class='inProgress inProgress" + index + "'></div>";
                    $(this).html($progress);
                });

                function startProgressbar() {
                    resetProgressbar();
                    percentTime = 0;
                    isPause = false;
                    tick = setInterval(interval, 10);
                }

                function interval() {
                    if (($('.hp-slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
                        progressBarIndex = $('.hp-slider .slick-track div[aria-hidden="false"]').data("slickIndex");
                        startProgressbar();
                    } else {
                        if (isPause === false) {
                            percentTime += 1 / (time);
                            $('.inProgress' + progressBarIndex).css({
                                width: percentTime + "%"
                            });

                            if (percentTime >= 100) {
                                progressBarIndex++;
                                if (progressBarIndex >= slides) {
                                    progressBarIndex = 0;
                                }
                                startProgressbar();
                                $slider.slick('slickNext');
                            }
                        }
                    }
                }

                function resetProgressbar() {
                    $('.inProgress').css({
                        width: 0 + '%'
                    });
                    clearInterval(tick);
                }
                startProgressbar();

                $('.pager__item').click(function () {
                    clearInterval(tick);
                    startProgressbar();
                });
            }
        },
        mounted: function () {
            $('.hp-slider').slick(hpSliderOptions);
            this.progressBar();
        },
        destroyed: function() {
            $('.hp-slider').slick('destroy');
        }
    }
</script>