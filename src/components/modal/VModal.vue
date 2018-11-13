<template>
    <transition name="fade">
        <div class="view" v-show="show">
            <div class="modal-box">
                <!-- 插槽 -->
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            show: {
                default: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .view {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: 0 auto;
        background-color: rgba(000, 000, 000, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        >.modal-box {
            width: 70%;
            padding: 30px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px #333;
        }
    }
    // active定义过渡时间，延迟和曲线
    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.5s;
    }
    .fade-enter,
    .fade-leave-to
    {
        opacity: 0;
    }
</style>

