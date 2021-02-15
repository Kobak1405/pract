<template>
    <section class="footer space-container">
        <ul class="footer__wrapper">
            <li class="footer__wrapper-item">
                <a href="#" class="link__gray">{{ offerContract }}</a>
            </li>
            <li class="footer__wrapper-item">
                <ul class="footer__wrapper-inner">
                    <li><a href="#" class="footer__wrapper-inner-item link__blue">{{ teregram }}</a></li>
                    <li><a href="#" class="footer__wrapper-inner-item link__blue">{{ facebook }}</a></li>
                    <li><a href="#" class="footer__wrapper-inner-item link__blue">{{ viber }}</a></li>
                </ul>
            </li>
            <li class="footer__wrapper-item"><a href="#" class="link__gray">{{ faq }}</a></li>
        </ul>
    </section>
</template>

<script>

    export default {
        data() {
            return {
                offerContract: 'Договор оферты',
                teregram: 'Telegram',
                facebook: 'Facebook',
                viber: 'Viber',
                faq: 'Вопросы и ответы'
            }
        },
        methods: {
        },
    }
</script>

<style>

</style>
