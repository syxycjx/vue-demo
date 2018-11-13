<template>
    <div class="app">
        <swiper :options="swiperOption">
            <swiper-slide>
                <div>
                    <img class="logo" src="../assets/images/logo.png" alt="">
                    <p>文字</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div>
                    <img class="logo" src="../assets/images/logo.png" alt="">
                    <p>文字</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div>
                    <img class="logo" src="../assets/images/logo.png" alt="">
                    <p>文字</p>
                </div>
            </swiper-slide>
        </swiper>
        <!-- 弹窗组件 -->
        <v-modal :show="modalShow">
            <!-- 插槽分发 -->
            <slot>
            </slot>
        </v-modal>
    </div>
</template>

<script>
    // 引入接口地址路径和请求方法
    import {
        path,
        axios
    } from '@/libs/ajax'
    // 引入组件
    import vModal from '@/components/modal/vModal'
    export default {
        components: {
            vModal
        },
        mounted() {
            
        },
        data() {
            return {
                info: '', // 接口信息
                loading: false, // loading页面开关
                modalShow: false, // modal弹窗开关
                swiperOption: {
                    speed: 500,
                    autoplay: true,
                    spaceBetween: 0,
                    slidesPerView: 1.5,
                    centeredSlides: true,
                }
            }
        },
        created() {
            // 请求示例
            // let data = {
            //     init: 'init'
            // }
            // axios.post(path.initUrl, data).then(res => {
            //     console.log(res)
            //     this.info = res.data.info
            // })
        },
        methods: {
            alert() {
                console.log('x')
            }
        }
    }
</script>

<style lang="scss" scoped>
.swiper-container {
    .swiper-slide {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: center;
        height: 600px;
        >div {
            width: 80%;
            height: 400px;
            background: #a2a2a2;
            transition: all 1s;
            border-radius: 15px;
            margin: 0 auto;
            >.logo {
                width: 50%;
            }
        }
    }
    .swiper-slide-active {
        >div{
            width: 100%;
            height: 500px;
            background: #f2f2f2;
            transition: all 1s;
        }
    }

}
</style>
