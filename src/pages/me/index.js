import React,{Component,Fragment} from 'react'
import { connect }  from 'react-redux'
import { Result , List , Brief ,WhiteSpace , Modal} from 'antd-mobile'

import browserCookies from 'browser-cookies'
import  { Redirect } from 'react-router-dom'
import  {logoutSubmit} from '../../redux/user.redux'


@connect(
    state=>state.user,
    {logoutSubmit}
)
class Me extends Component{
    constructor(props){
        super(props)
    }
    Logout=()=>{
        const alert = Modal.alert;
        alert('注销', '确认退出吗', [
            { text: '取消', onPress: () => console.log('取消了') },
            { text: '确认', onPress: () => {
                    browserCookies.erase('userid')
                    this.props.logoutSubmit()
                }},
        ])
    }

    render(){
        const Item = List.Item;
        const Brief  = Item.Brief
        const props = this.props
        return props.user?(
            <div>
                <Result
                    img={<img src={require(`../../component/img/${props.avatar}.png`)} style={{width:50}} alt="" />}
                    title={props.user}
                    message={props.type=='boss'?props.company:null}
                />

                <List renderHeader={()=>'简介'}>
                    <Item
                        multipleLine
                    >
                        {props.title}
                        {props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
                        {props.money?<Brief>薪资:{props.money}</Brief>:null}
                    </Item>

                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <Item onClick={this.Logout}>
                        退出登录
                    </Item>
                </List>
            </div>
        ):<Redirect to={props.redirectTo} />
    }
}
export default Me;