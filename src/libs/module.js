// module语法


let a = 10

export let year = 2018

// 输出方法
export function log (x) {
    console.log(a)
    // 输出10 说明输出可以访问当前文件作用域的变量
}

// 普通输出
export let v1 = 1
export let v2 = 2
export let v3 = 3

// 重命名输出
// export {
//     v1 as v1,
//     v2 as V2,
//     v3 as V3
// }


// 默认输出 每个文件只能有一个
// 同样地，因为export default命令的本质是将后面的值，赋给default变量，所以可以直接将一个值写在export default之后。
// 正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
export default {}
// 使用括号名字引入时可以规避默认对象而引用同名变量


// 不使用export default输出时 import需要大括号
// import {year, log} from 'module'
// 使用整体加载某文件  输出所有值在all对象上
// import * as all from 'module'


// 函数调用方式和this指向:
//   （1）直接调用：函数内部this指向全局window
//   （2） 通过对象使用点来调用：函数内部this指向调用对象
//   （3） 触发事件调用函数：函数内部this指向调用触发事件的对象
//   （4） 以new的方式来调用：函数内部this指向本次函数执行时对应的一个匿名对象。
//   （5） 通过call的方法来间接调用方法：函数内部this指向call方法的第一个参数（自己指定this）。
