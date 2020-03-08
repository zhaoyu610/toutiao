/*
 * @author zhaoyu
 * 
*/
import data from './mock'

/*
 * @desc 网络请求封装，项目内请走这个封装
    @param {Object} [params] 发请求用的参数
    @return {Promise} 请求的Promise任务对象
 * 
*/
export const request = params => {
    // let requestParams = {
    //     ...params,
    //     method:(params.method && params.method.toUpperCase()) || 'GET'

    // }
    // return fetch(
    //     requestParams.url,
    //     requestParams.method,
    //     )
    //     .then(res => {
    //         return res
    //     })
    return new Promise((resolve,reject) => {
        resolve(data)
    })
}
//节流函数
export const createThrottle = (delay)=>{
    let status = 'start'
    return function throttle(fn){
        if(status === 'wating'){
            return
        }
        status = 'wating'
        setTimeout(() => {
            fn && fn()
            status = 'start'
        },delay)
    }
}