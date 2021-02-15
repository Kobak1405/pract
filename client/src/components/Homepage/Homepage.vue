<template>
    <section id="homepage">
        <div class="grid-x homepage">
            <div class="cell large-8 homepage__wrapper">
                <Header />

                <div class="homepage__info space-container">
                    <h1 class="main-title">
                        {{ mainTitle }}
                    </h1>

                    <h3 class="main-descr">
                        {{ mainDescr }}
                    </h3>

                    <Filters />
                </div>

                <div class="show-for-large">
                    <Footer />
                </div>
            </div>

            <div class="cell large-4 homepage__slider-wrapper">
                <Slider />
            </div>

            <div class="hide-for-large small-12">
                <Footer />
            </div>
        </div>
    </section>
</template>

<script>
    import Filters from './Filters.vue';
    import Header from '../Shared/Header.vue';
    import Footer from '../Shared/Footer.vue';
    import Slider from './Slider.vue';

    export default {
        data() {
            return {
                mainTitle: 'Поиск автобусных туров без турагентств',
                mainDescr: 'Ищите автобусные туры онлайн и вперед к приключениям!'
            };
        },
        components: {
            Filters,
            Header,
            Footer,
            Slider
        }
    }
</script>

<style>

</style>
