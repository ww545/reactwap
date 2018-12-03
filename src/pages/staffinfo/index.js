import React,{Component,Fragment} from 'react'
import {List,NavBar,InputItem,TextareaItem,WhiteSpace,Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar/index'
import {connect} from 'react-redux'
import {Redirect}from 'react-router-dom'
import {updates} from  '../../redux/user.redux'

@connect(
    state=>state.user,
    {updates}
)
class Staffinfo extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            desc:''
        }
    }
    onchange=(type,val)=>{
        this.setState({
            [type]:val
        })
    }

    render(){
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return(
            <Fragment>
                {redirect&&redirect!==path?<Redirect to={this.props.redirectTo} />:null}
                <List>
                    <NavBar mode='dark' >牛人完善信息页</NavBar>
                    <WhiteSpace />
                    <AvatarSelector
                        AvatarSelector={(imgname)=>{
                            this.setState({
                                avatar:imgname
                            })
                        }}
                    />
                    <WhiteSpace />
                    <InputItem onChange={v=>this.onchange('title',v)}>
                        面试职位:
                    </InputItem>
                    <TextareaItem
                        row={3}
                        autoHeight
                        title="个人简介:"
                        onChange={v=>this.onchange('desc',v)}/>
                    <WhiteSpace />
                    <Button type="primary"
                            onClick={()=>{
                                this.props.updates(this.state)
                            }}
                    >保存</Button>
                </List>
            </Fragment>
        )
    }
}
export default Staffinfo;