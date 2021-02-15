<template>
    <section>
        <b-field :label="whereGo" class="input-wrapper">
            <b-autocomplete
                v-model="name"
                class="input-wrapper__item default-input"
                field="title"
                :data="filteredDataArray"
                :placeholder=placeholderVal
                :loading="isFetching"
                :open-on-focus="openOnFocus"
                @select="option => selected = option">

                <template slot="empty">{{ notFound }}</template>
            </b-autocomplete>
        </b-field>
     </section>
</template>

<script>
    // import _ from 'lodash';
    // import axios from 'axios';

    export default {
        props: ['countryList'],
        data() {
            return {
                notFound: 'Ничего не найдено',
                name: '',
                selected: null,
                isFetching: false,
                openOnFocus: true,
                placeholderVal: 'Например, Италия или Париж',
                whereGo: 'Куда едем?'
            }
        },
        computed: {
             filteredDataArray() {
                 return this.countryList.filter((option) => {
                     return option
                         .toString()
                         .toLowerCase()
                         .indexOf(this.name.toLowerCase()) >= 0
                 })
             }
        }
    }
</script>

<style>

</style>