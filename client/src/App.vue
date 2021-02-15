<template>
    <section class="app-wrapper">
        <!-- <Homepage />
        <Tours /> -->
        <!-- <Header /> -->
         <router-view class="view"></router-view>
    </section>
</template>

<script>
    import './scss/global.scss';
    import Homepage from './components/Homepage/Homepage.vue';
    import Tours from './components/Tours/Tours.vue'

    import Header from './components/Shared/Header.vue'


    export default {
        name: 'App',
        components: {
            Homepage,
            Tours,
            Header
        },
        data () {
            return {
            //
            }
        }
    }
</script>
