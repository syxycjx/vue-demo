import qs from 'qs'
import axios from 'axios';

// 接口封装文件

// 环境接口判断
if(window.location.host == 'www.baidu.com') {
    // 正式
    var URL = 'http://api.com'
}else {
    // 测试
    var URL = 'http://api/dev.com'
}


// 接口地址模块     //最佳实践  所有地址必须加Url后缀 方便全局查找
const path = {
    initUrl:       '/init',
    loginUrl:      '/login',
    userIdUrl:     '/user/id',
    userInfoUrl:   '/user/Info',
    payUrl:        '/pay'
}



// 客户端使用用户名跟密码请求登录
// 服务端收到请求，去验证用户名与密码
// 验证成功后，服务端会签发一个 Token，再把这个 Token 发送给客户端
// 客户端收到 Token 以后可以把它存储起来，比如放在 Cookie 里或者 Local Storage 里
// 客户端每次向服务端请求资源的时候需要带着服务端签发的 Token
// 服务端收到请求，然后去验证客户端请求里面带着的 Token，如果验证成功，就向客户端返回请求的数据

// 某个验证方案
// 发起请求时 查询本地是否有token和session数据



// http request 拦截器
axios.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
    }
)
  
// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error.response.data)
    }
)


// 接口请求方法
const ajaxData = {
    // 默认参数示例
    defaultData: {
        scoure: 'h5',       // 来源 可以是h5或者是微信或者是app等
        token: '',          // 身份令牌
        session: '',        // session 身份验证
        is_login: ''        // 是否登录
    },
    // 范例
    // 封装post方法  三个参数 地址 数据 默认对象数据
    post: function (url, data = {}, defaultData = this.defaultData) { // 必要时可以传第三个参数重写默认参数
        return new Promise((resolve, reject) => {
            // 合并默认参数和传入的参数对象
            let obj = Object.assign(defaultData, data)
            // 执行post请求
            axios.post(
                URL + url,  // 请求地址合并
                qs.stringify(obj))// 格式化数据
                .then(res => {  // 正确执行回调
                    // 这里可以处理全局业务逻辑，通过后执行resolve
                    resolve(res.data.data)
                })
                .catch(e => {   //  抛出错误
                    // alert('ajax错误')
                    console.log(e)
                })
                .finally (
                    // this.loading = false
                    // 这里确保不论接口如何loading一定被关闭
                )
        })
    },
    // 获得默认数据
    getDefaultData () {
        // 判断本地有没有数据 没有请求初始化接口
        this.defaultData.token      = this.getStorage('token')
        this.defaultData.session    = this.getStorage('session')
        this.defaultData.is_login   = this.getDefaultData('is_login')
        return new Promise((resolve, reject) => {
            // 如果token和session都存在 则返回默认对象数据
            if(this.defaultData.token && this.defaultData.session != false) {
                // 返回默认数据对象
                resolve(this.defaultData)
            }else { //  如果没有请求初始化接口
                let data = {}
                // 假设请求某接口范例
                axios.post(URL + '/init', data).then(res => {
                    if (res.data.error == 0) {  // 如果接口返回正确
                        let {token, session} = res.data.data    // 解构赋值对象
                        // 保存到本地默认数据
                        localStorage.setItem('token', token)
                        localStorage.setItem('session', session)
                        // 重新从本地获得数据
                        this.defaultData.token      = this.getStorage('token')
                        this.defaultData.session    = this.getStorage('session')
                        // 返回默认数据对象
                        resolve(this.defaultData)
                    } else {
                        alert('getDefaultData返回错误')
                    }
                }).catch(e => {
                    alert('getDefaultData系统错误')
                })
            }
        })
    }
}


// 输出ajax方法模块
export {path, ajaxData}


// axios示例
// 执行多个并发请求
// function getUserAccount() {
//     return axios.get('/user/12345');
// }

// function getUserPermissions() {
//     return axios.get('/user/12345/permissions');
// }
  
// axios.all([getUserAccount(), getUserPermissions()])
// .then(axios.spread(function (acct, perms) {
//      两个请求现在都执行完成
// }));




