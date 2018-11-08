<template>
    <div class="app">
        <div class="index">首页</div>
        <button @click="modalShow = !modalShow">打开或关闭</button>
        <!-- 弹窗组件 -->
        <v-modal :show="modalShow">
            <!-- 插槽分发 -->
            <slot>
                <button @click="modalShow = !modalShow">打开或关闭</button>
            </slot>
        </v-modal>
    </div>
</template>

<script>
    // 引入接口地址路径和请求方法
    import {
        path,
        ajaxData
    } from '@/libs/ajax'
    // 引入组件
    import vModal from '@/components/modal/vModal'
    export default {
        components: {
            vModal
        },
        data() {
            return {
                info: '', // 接口信息
                loading: false, // loading页面开关
                modalShow: false, // modal弹窗开关
            }
        },
        created() {
            // 请求示例
            // let data = {
            //     init: 'init'
            // }
            // ajaxData.post(path.initUrl, data).then(res => {
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

</style>
