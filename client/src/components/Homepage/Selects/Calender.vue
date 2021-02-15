<template>
    <div>
        <div class="datepicker-trigger">
            <b-field :label="chooseDate" class="input-wrapper">
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
    </div>
</template>

<script>
    import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker';
    import datepickerOptions from '../../../utils/datepickerOptions';
    import format from 'date-fns/format';
    // import _ from 'lodash';

    import Vue from 'vue';
    Vue.use(AirbnbStyleDatepicker, datepickerOptions);


    export default {
        data: () => ({
            dateFormat: 'D MMM',
            dateOne: '',
            dateTwo: '',
            chooseDate: 'День выезда',
            datePlaceholder: 'Выбрать дату'
        }),
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
        }
    }
</script>

<style lang="scss" scoped>
</style>
