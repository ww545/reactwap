import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'

import {List,TextareaItem ,NavBar ,Grid ,Icon ,Badge} from 'antd-mobile'



import '../aaaa.css'

const  Item  = List.Item;
const Brief = Item.Brief;

@connect(
    state=>state
)
class MsgText extends Component{
    getLast=(arr)=>{
        return arr[arr.length-1]
    }
    render(){
        const chatmsg = this.props.chat.chatmsg;
        const userid = this.props.user._id;
        const userinfo = this.props.chat.users;

        const msgGroup = {};
        chatmsg.forEach(v=>{
            msgGroup[v.chatid] = msgGroup[v.chatid] || []
            msgGroup[v.chatid].push(v);
        })
        const chatList = Object.values(msgGroup).sort((a,b)=>{
            const a_last = this.getLast(a).create_time;
            const b_last = this.getLast(b).create_time;
            return b_last - a_last;
        })

        return (
            <Fragment>

                    {
                        chatList.map(v=> {
                            const lastItem = this.getLast(v)
                            const targetId = v[0].from===userid? v[0].to:v[0].from;
                            const unreadNum = v.filter(v=>!v.read && v.to===userid  ).length
                            if(!userinfo[targetId]){
                                return null
                            }
                            return (
                                <List  key={lastItem._id}>
                                <Item
                                    extra={<Badge  text={unreadNum} />}
                                    thumb={require(`../../component/img/${userinfo[targetId].avatar}.png`)}
                                    arrow="horizontal"
                                    onClick={()=>{
                                        this.props.history.push(`/chat/${targetId}`)
                                    }}
                                >
                                    {lastItem.content}
                                    <Brief> 用戶名：{userinfo[targetId].name}</Brief>
                                </Item>
                                </List>
                            )
                        })
                    }


            </Fragment>

        )
    }}

export default MsgText;