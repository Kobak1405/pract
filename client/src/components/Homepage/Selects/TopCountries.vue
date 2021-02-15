<template>
    <section class="top-places">
        <div class="countries__wrapper">
            <h4 class="top-places__title">{{ countries }}</h4>

            <ul class="countries__list">
                <li class="countries__list-item"
                    v-for="(tours, country, index) in topCountries"
                    :key="index"
                >

                    <a href="#" class="countries__list-item-link">
                        <span class="countries__flag ukraine-flag"></span>
                        {{ country }}
                        <span class="tours-number">{{ tours }}</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="cities__wrapper">
            <h4 class="top-places__title">{{ cities }}</h4>

            <ul class="cities__list">
                <li class="cities__list-item"
                    v-for="(tours, city, index) in topCities"
                    :key="index"
                >
                    <a href="#" class="cities__list-item-link">
                        {{ city }}
                        <span class="tours-number">{{ tours }}</span>
                    </a>
                </li>
                <a href="#" class="top-places__tours link__blue">{{ allTours }}</a>
            </ul>
        </div>

    </section>
</template>

<script>
    export default {
        props: ['countryList'],
        data() {
            return {
                countries: 'Страны',
                cities: 'Города',
                allTours: 'Все туры',
                topCountries: {
                    Венгрия: '30 туров',
                    Польша: '29 туров',
                    Германия: '20 туров',
                    Турция: '16 туров',
                    Швеция: '12 туров',
                    Испания: '18 туров'
                },
                topCities: {
                    'Будапешт, Венгрия': '30 туров',
                    'Краков, Польша': '29 туров',
                    'Вена, Австрия': '20 туров',
                    'Прага, Чехия': '16 туров',
                    'Венеция, Италия': '12 туров'
                }
            }
        }
    }
</script>