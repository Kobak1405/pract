<template>
    <section id="filters" class="filters">

        <!-- CHOOSE COUNTRY FILTER -->
        <accordion>
            <h3 slot="header">{{ place }}</h3>
            <div class="filters__place">
                <ul>
                    <li v-for="country in allCountries" :key="country.index" class="check">
                        <label class="check__container">
                            {{ country }}
                            <input type="checkbox">
                            <span class="check__checkmark"></span>
                        </label>
                    </li>
                </ul>
                <ul>
                    <li v-for="city in allCities" :key="city.index" class="check">
                        <label class="check__container">
                            {{ city }}
                            <input type="checkbox">
                            <span class="check__checkmark"></span>
                        </label>
                    </li>
                </ul>
            </div>
        </accordion>

        <!-- DATE DEPARTURE FILTER -->
        <accordion :overflow="true">
            <h3 slot="header">{{ dateDeparture }}</h3>
            <div class="datepicker-trigger">
                <b-field class="input-wrapper">
                    <b-input
                        id="datepicker-trigger"
                        class="input-wrapper__item default-input"
                        :placeholder="datePlaceholder"
                        :value="formatDates(dateOne, dateTwo)"
                    ></b-input>
                </b-field>

                <AirbnbStyleDatepicker
                    :trigger-element-id="'datepicker-trigger'"
                    :mode="'range'"
                    :fullscreen-mobile="true"
                    :date-one="dateOne"
                    :date-two="dateTwo"
                    @date-one-selected="val => { dateOne = val }"
                    @date-two-selected="val => { dateTwo = val }"
                />
            </div>
        </accordion>


        <!-- DESTINATION FILTER -->
        <accordion>
            <h3 slot="header">{{ destination }}</h3>
            <div>
                <vue-slider ref="sliderdestination"
                    :real-time="true"
                    v-model="valueDestination"
                    v-bind="destinationOptions"
                >
                </vue-slider>
            </div>
        </accordion>

        <!-- PRICE FILTER -->
        <accordion :overflow="true" :opened="openedAccordion">
            <h3 slot="header">{{ price }}</h3>
            <div>
                <vue-slider ref="sliderprice"
                    :real-time="true"
                    v-model="valuePrice"
                    v-bind="priceOptions"
                >
                </vue-slider>
            </div>
        </accordion>

        <!-- TYPE OF TOUR FILTER -->
        <accordion>
            <h3 slot="header">{{ tourType }}</h3>
                <ul class="filters__type">

                    <li v-for="type in tourTypes" :key="type.index" class="radio">
                        <label class="radio__container">
                            {{ type }}
                            <input type="radio" name="radio" :checked="type.index == 0 ? 'checked' : ''">
                            <span class="radio__checkmark"></span>
                        </label>
                    </li>
                </ul>
        </accordion>

        <!-- CITY OF DEPARTURE FILTER -->
        <accordion>
            <h3 slot="header">{{ cityDeparture }}</h3>
            <ul>
                <li v-for="city in citiesDeparture" :key="city.index" class="check">
                    <label class="check__container">
                        {{ city }}
                        <input type="checkbox">
                        <span class="check__checkmark"></span>
                    </label>
                </li>
            </ul>
        </accordion>

    </section>
</template>

<script>
    import Header from '../../Shared/Header.vue';
    import Footer from '../../Shared/Footer.vue';
    import Breadcrumbs from '../../Shared/Breadcrumbs.vue';
    import Accordion from './Accordion.vue';
    import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker';
    import datepickerOptions from '../../../utils/datepickerOptions';
    import format from 'date-fns/format';
    import Vue from 'vue';
    import vueSlider from 'vue-slider-component';
    import {checkUpdates} from '../../../main.js';

    Vue.use(AirbnbStyleDatepicker, datepickerOptions);

    // import Datepicker from 'vuejs-datepicker';
    // <datepicker></datepicker>

    export default {
        data() {
            return {
                openedAccordion: false,
                place: 'Куда',
                destination: 'Длительность',
                price: 'Цена',
                tourType: 'Тип размещения',
                cityDeparture: 'Город выезда',
                allCountries: [
                    'Австрия', 'Венгрия',
                    'Германия', 'Италия',
                    'Польша', 'Украина'
                ],
                allCities: [
                    'Венгрия', 'Германия',
                    'Италия', 'Польша',
                    'Украина'
                ],
                dateDeparture: 'Дата выезда',
                dateFormat: 'D MMM',
                dateOne: '',
                dateTwo: '',
                chooseDate: 'День выезда',
                datePlaceholder: 'Выбрать дату',
                valuePrice: [50, 300],
                priceOptions: {
                    eventType: 'auto',
                    width: 'auto',
                    height: 4,
                    dotSize: 32,
                    min: 50,
                    max: 300,
                    interval: 1,
                    speed: 0.5,
                    tooltipDir: 'bottom',
                    formatter: '€ {value}',
                    enableCross: false
                },
                valueDestination: 0,
                destinationOptions: {
                    eventType: 'auto',
                    width: 'auto',
                    height: 4,
                    dotSize: 32,
                    max: 7,
                    interval: 1,
                    speed: 0.5,
                    formatter: '{value} дня',
                    tooltipDir: 'bottom'
                },
                tourTypes: [
                    'Смешанный',
                    'Ночи в автобусе',
                    'Ночи в отеле'
                ],
                citiesDeparture: [
                    'Киев',
                    'Львов',
                    'Ивано-Франковск'
                ]
            };
        },
        components: {
            Header,
            Footer,
            Breadcrumbs,
            Accordion,
            vueSlider
            // Datepicker
        },
        methods: {
            formatDates(dateOne, dateTwo) {
                let formattedDates = '';
                if (dateOne) {
                    formattedDates = format(dateOne, this.dateFormat);
                }
                if (dateTwo) {
                    formattedDates += ' - ' + format(dateTwo, this.dateFormat);
                }

                return formattedDates;
            }
        },
        created() {
            checkUpdates.$on('opened', () => {
                this.$nextTick(() => this.$refs.sliderprice.refresh());
                this.$nextTick(() => this.$refs.sliderdestination.refresh());
            })
        }
    }
</script>
