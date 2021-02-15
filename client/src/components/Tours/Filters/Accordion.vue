<template>
    <div class="accordion" :class="theme">
        <div class="accordion__header" @click="toggle">
            <slot name="header"></slot>
            <span class="fa fa-2x fa-angle-down accordion__header-icon" :class="{ rotate: show }">
                <img src="../../../assets/img/arrows/arrow-left.svg" alt="">
            </span>
        </div>
        <transition name="accordion"
            @before-enter="beforeEnter" @enter="enter"
            @before-leave="beforeLeave" @leave="leave">
            <div class="accordion__body" :class="{'overflow-visible' : overflow}" v-show="show">
                <div class="accordion__body-inner">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {checkUpdates} from '../../../main.js';

    export default {
        props: ['theme', 'overflow'],
        data() {
            return {
                show: false
            };
        },
        methods: {
            toggle: function() {
                this.show = !this.show;
                checkUpdates.$emit('opened', this.show);
            },
            // enter: function(el, done) {
            //   $(el).slideDown(150, done);
            // },
            // leave: function(el, done) {
            //   $(el).slideUp(150, done);
            // },
            beforeEnter: function(el) {
                el.style.height = '0';
            },
            enter: function(el) {
                el.style.height = el.scrollHeight + 'px';
            },
            beforeLeave: function(el) {
                el.style.height = el.scrollHeight + 'px';
            },
            leave: function(el) {
                el.style.height = '0';
            }
        }
    }
</script>