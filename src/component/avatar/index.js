import React,{Component,Fragment} from 'react'
import {Grid,List} from 'antd-mobile'

class Avatar extends Component{
constructor(props){
    super(props)
    this.state={}
}
    render(){
        const avatar = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'
            .split(',')
            .map(v=>({
                icon:require(`../img/${v}.png`),
                text:v
            }))
        const gridHead = this.state.text?
                            (<div>
                                <span>已选择头像</span>
                                <img style={{width:20}} src={this.state.icon}  alt={''}/>
                            </div>)
                            :'请选择头像'
        return(
            <Fragment>
                <List renderHeader={()=>gridHead}>
                    <Grid
                        data={avatar}
                        columnNum={5}
                        onClick={elm=>{
                            this.setState(elm)
                            this.props.AvatarSelector(elm.text)
                        }}
                    />
                </List>
            </Fragment>
        )
    }
}
export default Avatar;