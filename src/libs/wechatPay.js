// 微信支付实例

// 首先请求接口获得支付json数据，注意这里需要是json格式，在IOS中时间戳需要单独进行转字符串处理。
// 跳转授权的支付页面地址需要使用原生地址跳转 不能使用路由 因为IOS会出现地址不改变的问题

// 顺序

function onBridgeReady(){
    WeixinJSBridge.invoke(
       'getBrandWCPayRequest', {
          "appId":"wx2421b1c4370ec43b",     //公众号名称，由商户传入     
          "timeStamp":"1395712654",         //时间戳，自1970年以来的秒数     
          "nonceStr":"e61463f8efa94090b1f366cccfbbb444", //随机串     
          "package":"prepay_id=u802345jgfjsdfgsdg888",     
          "signType":"MD5",         //微信签名方式：     
          "paySign":"70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名 
       }, // 此处可代替为后端传入的json字符串数据
       function(res){
       if(res.err_msg == "get_brand_wcpay_request:ok" ){
       // 使用以上方式判断前端返回,微信团队郑重提示：
             //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
            //  这里执行回调逻辑
       } else {
           console.log('支付失败')
       }
    }); 
}

// 调起支付
if (typeof WeixinJSBridge == "undefined"){
    if( document.addEventListener ){
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    }else if (document.attachEvent){
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
} else {
    onBridgeReady();
}