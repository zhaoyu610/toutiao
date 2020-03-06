import Component from './component'
export default class MultiplePic extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {data} = this.props
        let imageList = data.imageList.map(item => {
            return `<img src=${item}></img>`
        }).join('')
        return `<div class="item multiple-image" on:click="aa">
                <h3>
                    ${data.title}
                </h3>
                <div class="image-list">
                    ${imageList}
                </div>
            </div>`
    }
}