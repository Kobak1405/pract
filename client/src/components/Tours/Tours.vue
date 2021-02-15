<template>
    <section id="product-list" class="grid-x tours">
        <div class="cell large-12">
            <Header />
            <Breadcrumbs />

            <div class="tours__wrapper space-container">
                <h1 class="tours__title">
                    Автобусные туры в <span>Италию</span>
                </h1>

                <div class="tours__filters">
                    <span>
                        <img src="../../assets/img/filters/Union.svg" alt="">
                        <span class="tours__filters-element">{{ filters }}</span>
                    </span>

                    <span>
                        <img src="../../assets/img/filters/Vector.svg" alt="">
                        <span class="tours__filters-element">{{ sort }}</span>
                    </span>
                </div>

                <div class="grid-x">
                    <div class="cell large-4 tours__filters-popup">
                        <FiltersAll />
                    </div>

                    <div class="cell large-8">
                        <ToursList />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    </section>
</template>

<script>
    import Header from '../Shared/Header.vue';
    import Footer from '../Shared/Footer.vue';
    import Breadcrumbs from '../Shared/Breadcrumbs.vue';
    import FiltersAll from '../Tours/Filters/FiltersAll.vue';
    import ToursList from '../Tours/ToursList.vue';

    export default {
        data() {
            return {
                filters: 'Фильтры',
                sort: 'Сортировка'
            };
        },
        components: {
            Header,
            Footer,
            Breadcrumbs,
            FiltersAll,
            ToursList
        }
    }
</script>