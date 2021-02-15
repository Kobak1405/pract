<template>
    <section class="homepage__filters grid-x">
        <div class="cell large-5">
            <PickCountry :countryList="countries" />
        </div>
        <div class="cell large-5">
            <Calender />
        </div>
        <div class="cell large-2">
            <button class="button__main">
                {{ findTours }}
            </button>
        </div>
    </section>
</template>

<script>
    import Calender from './Selects/Calender.vue';
    import PickCountry from './Selects/PickCountry.vue';

    export default {
        components: {
            PickCountry,
            Calender
        },
        data() {
            return {
                findTours: 'Найти туры',
                countries: [
                    'Венгрия', 'Австрия', 'Чехия',
                    'Польша', 'Германия', 'Словакия', 'Румыния',
                    'Латвия', 'Швеция', 'Италия',
                    'Болгария', 'Турция', 'Словения', 'Сербия', 'Нидерланды',
                    'Литва', 'Эстония', 'Франция', 'Испания', 'Бельгия',
                    'Люксембург', 'Сан-Марино', 'Хорватия', 'Черногория',
                    'Македония', 'Албания', 'Босния и Герцеговина', 'Греция',
                    'Швейцария'
                ]
            }
        }
    }
</script>

<style>

</style>
