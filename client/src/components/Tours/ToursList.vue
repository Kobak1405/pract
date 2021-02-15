<template>
    <ul id="tours-list" class="grid-y tours-list">
        <li class="tours-list__item grid-x">
            <div class="cell medium-4 tours-list__item-image">
                <img src="" alt="">
            </div>
            <div class="cell medium-5 tours-list__item-content">
                <h1 class="content__title">Новогодний тур в Австрию</h1>
                <div class="content__period">
                    <div class="content__period-days">
                        <span>13 октября</span>
                        -
                        <span>16 октября</span>
                    </div>
                    <span class="divider-circle">&#x25CF;</span>
                    <div class="content__period-details">
                        <span>3 дня</span>и
                        <span>3 ночи</span>
                    </div>
                </div>

                <ul class="content__country-wrapper">
                    <li class="content__country-item" v-for="coutry in coutryIncluded" :key="coutry.index">
                        <!-- <span class="countries__flag ukraine-flag"></span> -->
                        {{ coutry }}
                    </li>
                </ul>

                <div class="content__details">
                    <div class="content__details-element">
                        <span class="content__details-circle"></span>
                        Выезд из Киева
                    </div>
                    <div class="content__details-element">
                        <span class="content__details-circle"></span>
                        Ночи в отелях
                    </div>
                </div>
            </div>
            <div class="cell medium-3 tours-list__item-buttons">
                <span class="buttons__price">
                    €100
                </span>

                <router-link to="/" class="button__main">
                    Забронировать
                </router-link>

                <router-link to="/" class="link__blue show-for-medium">
                    Узнать больше
                </router-link>
            </div>
        </li>
    </ul>
</template>

<script>

    export default {
        data() {
            return {
                coutryIncluded: [
                    'Австрия', 'Вена',
                    'Грац', 'Зальцбург'
                ]
            };
        },
        components: {

        }
    }
</script>

<style>

</style>
