import {request,createThrottle} from './util.js'
import components from './items'
class Manager{
    constructor($container){
        this.$container = $container
        this.throttle = createThrottle(1000)
    }
    init(){
        
        this.initData()
        this.updata(() => {
            this.initData() 
        })
        
    }
    initData(){
        request().then(res => {
            const items = res.data
            items.forEach(item => {
                const componentName = item.type.replace(/^\w/,w => w.toUpperCase())
                const componet = new components[componentName](item)
                const componentElement = componet.constructorElement()
                this.$container.appendChild(componentElement)
            })
            
        })
    }
    updata(cb = () => {}){
        window.onscroll = (e) => {
            let offestHeight = document.documentElement.offsetHeight
            let sceenHeight = window.screen.height
            let scrollY = window.scrollY
            let top = offestHeight - sceenHeight - scrollY
            if( top< 50){
                // cb && cb()
                //节流函数
                this.throttle(cb)
            }

        }
    }
    static getInstance($container){
        return new Manager($container)
    }
}
var $container = document.getElementById('container')
let manager = Manager.getInstance($container)
manager.init()