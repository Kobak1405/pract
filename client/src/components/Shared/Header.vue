<template>
    <section class="header">
        <div class="header_logo space-container">
            <router-link to="/">
                <img src="../../assets/logo.svg" alt="tourhub">
            </router-link>
        </div>
        <div class="header-menu">
            <div class="mobile-menu hide-for-large">
                <a role="button"
                    :class="[{'is-active': menuOpened }, 'navbar-burger']"
                    data-target="navMenu"
                    aria-label="menu"
                    aria-expanded="false"
                    @click='toggleBurger'
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

                <div id="navMenu" :class="[{'is-active': menuOpened }, 'navbar-menu']">

                    <ul class="menu-item__wrapper">
                        <TopCountries />

                        <li class="menu-item__item">{{ comments }}</li>
                        <li class="menu-item__item">{{ contacs }}</li>
                    </ul>
                </div>
            </div>

            <div class="desktop-menu show-for-large">
                <ul class="menu-item__wrapper">
                    <li class="menu-item__item"
                        @mouseenter="hideTop = false"
                        @mouseleave="hideTop = true">
                        <router-link to="/tours"
                            class="menu-item__item-link"

                        >
                            {{ ways }}
                            <span class="menu-item__item-arrow">
                                <img src="../../assets/img/arrows/arrow-left.svg" alt="">
                            </span>
                        </router-link>

                        <div :class="[{hide: hideTop}, 'top-countries-large']">
                            <TopCountries />
                        </div>
                    </li>

                    <li class="menu-item__item">
                        <a href="" class="menu-item__item-link">
                            {{ comments }}
                        </a>
                    </li>
                    <li class="menu-item__item">
                        <a href="#" class="menu-item__item-link">
                            {{ contacs }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>

    import TopCountries from '../Homepage/Selects/TopCountries'

    export default {
        components: {
            TopCountries
        },
        data() {
            return {
                menuOpened: false,
                hideTop: true,
                comments: 'Отзывы клиентов',
                contacs: 'Контакты',
                ways: 'Направления'
            }
        },
        methods: {
            toggleBurger: function() {
                this.menuOpened = !this.menuOpened;
            }
        },
    }
</script>

<style>

</style>
