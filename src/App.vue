<template>
    <div id="app">
        <transition name="slide">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>



<style lang='scss'>
    @import './assets/scss/basics.scss';
    html,
    body {
        height: 100%;
        margin: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
    }
    .app {
        height: 100%;
    }
    // 全局路由的过渡效果
    .slide-enter-active,
    .slide-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-enter,
    .slide-leave-to {
        opacity: 0;
        transform: translate(300px);
    }
</style>



// 在书写router-link to 浏览器会默认渲染成a标签  可以使用tag="div"来解决