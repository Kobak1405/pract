<template>
    <section class="breadcrumbs space-container">
        <ul class="breadcrumbs__wrapper">
            <li class="breadcrumbs__item">
                <router-link to="/" class="link__gray">Homepage</router-link>
            </li>
            <span class="breadcrumbs__arrow">></span>
            <li class="breadcrumbs__item">
                <router-link to="/tours" class="link__gray">Tours</router-link>
            </li>
        </ul>
    </section>
</template>

<script>

    export default {
        data() {
            return {
            }
        },
        methods: {
        },
    }
</script>

<style>

</style>
