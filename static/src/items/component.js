export default class Component{
    constructor(props){
        this.props = props
    }
    render(){
        return '<div>我是基类</div>'
    }
    constructorElement(){
        const html = this.render()
        const content = document.createElement('div')
        content.innerHTML = html
        this.el = content
        return this.el
    }
}