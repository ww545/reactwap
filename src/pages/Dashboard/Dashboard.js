import  React,{Component , Fragment} from 'react'
import {Switch,Route  ,Redirect} from 'react-router-dom'
import  {NavBar} from 'antd-mobile'
import {connect } from 'react-redux'

import  TabBars from '../../component/TabBar/index'
import Boss from '../boss/index'
import Staff from '../staff/index'
import User from '../me/index'
import Msg from '../msg/index'
import {getMsgList  ,recvMsg} from '../../redux/chat.redux'
import  './index.css'
@connect(
    state=>state,
    {getMsgList  ,recvMsg}
)
 class Dashboard extends Component{
    shouldComponentUpdate(nextProps,nextState){

        return true
    }
    componentDidMount(){
        if(!this.props.chat.chatmsg.length){
            this.props.getMsgList();
            this.props.recvMsg();
        }
    }
    render(){
        const {pathname} = this.props.location
        const user = this.props.user
        const  navLink = [
            {
                path:'/boss',
                text:'牛人',
                icon:'boss',
                title:'牛人列表',
                component:Boss,
                hide:user.type==='staff'
            },
            {
                path:'/staff',
                text:'boss',
                icon:'job',
                title:'Boss列表',
                component:Staff,
                hide:user.type==='boss'
            },
            {
                path:'/msg',
                text:'信息',
                icon:'msg',
                title:'消息列表',
                component:Msg
            },
            {
                path:'/me',
                text:'我',
                icon:'user',
                title:'个人中心',
                component:User
            }
        ]
        const navTitle= navLink.find(v=>v.path===pathname);
        console.log(this.props)
        console.log( navTitle)
        // const Red = <Redirect to="/me"/>;
        return navTitle===undefined ?<Redirect to="/login"/>:(
            <Fragment>
              <div className="homeTab">
                <div>
                    <NavBar mode="dard">
                        {
                            navTitle!==undefined?navTitle.title:null
                        }
                     </NavBar>
                </div>
               <div >
                   <Switch>
                       {navLink.map(v=>(
                           <Route key={v.path} path={v.path} component={v.component}></Route>
                       ))}
                   </Switch>
               </div>
                  <div className="fiex">
                     <TabBars data={navLink}></TabBars>
                  </div>
              </div>
            </Fragment>
        )
    }
 }

export default Dashboard


/*
*
*
*

 {
          "id":"0",
          "user_id":"0",
          "type":"0",
          "user_name":"admin",
          "mobile":"18322466208",
          "start_time": "2013-05-31 19:12:00",
          "end_time": "2017-09-01 22:52:59",
        }
*
*
* */