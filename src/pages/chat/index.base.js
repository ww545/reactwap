// import React ,{Component,Fragment} from 'react'
// import {connect} from 'react-redux'
// import {getMsgList ,sendMsg ,recvMsg ,readMsg ,getChatId } from '../../redux/chat.redux'
// import {List,InputItem ,NavBar ,Grid ,Icon ,TextareaItem} from 'antd-mobile'
// import '../aaaa.css'
// // import {getChatId} from "../../utils/Redirect";
//
//
//
// const Item = List.Item;
// @connect(
//     state=>state,
//     {getMsgList,sendMsg ,recvMsg,readMsg , getChatId}
// )
// class Chat extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             showEmoj:false,
//             text:'',
//             msg:[]
//         }
//     }
//     componentDidMount(){
//        if(!this.props.chat.chatmsg.length){
//            this.props.getMsgList();
//            this.props.recvMsg();
//        }
//     }
//     componentWillUnmount(){
//         const to = this.props.match.params.user;
//         this.props.readMsg(to)
//     }
//     onKeyup=(e)=>{
//         if(e.keyCode===13){ // 按 Esc
//            this.handleSubmit()
//       
//         }
//     }
//     handleSubmit=()=>{
//         const from  = this.props.user._id;
//         const to = this.props.match.params.user
//         const msg = this.state.text
//         this.props.sendMsg({from,to,msg})
//         this.setState({text:''})
//     }
//
//     render(){
//         const userid = this.props.match.params.user
//         const users = this.props.chat.users;
//         if(!users[userid]){
//             return null
//         }
//         const chatid = this.props.getChatId(userid, this.props.user._id);
//         const chatmsgA = this.props.chat.chatmsg.filter(v=>console.log(v));
//         console.log( this.props.chat.chatmsg.chatid==chatid)
//         return(
//             <Fragment>
//                 <div>
//                 <NavBar mode={'dark'}
//                         icon={<Icon type={"left"}/>}
//                         onLeftClick={()=>{
//                             this.props.history.goBack()
//                         }}
//                         style={{position:"fixed",top:0,width:"100%",zIndex:1000}}>{users[userid].name}</NavBar>
//               <div style={{margin:"45px 0 65px 0"}}>
//                      {chatmsgA.map(v=>{
//                          const avatar = require(`../../component/img/${users[v.from].avatar}.png`)
//                          return v.from === userid?(
//                              <List  key={v._id}>
//                                  <Item
//                                      thumb={avatar}
//                                  >
//                                      {v.content}
//                                  </Item>
//                              </List>
//                          ):(
//                              <List  key={v._id}>
//                                  <Item
//                                      extra={<img src={avatar} alt=""/>}
//                                      className={"chat-me"}
//                                  >
//                                      {v.content}
//                                  </Item>
//                              </List>
//                          )
//                      })}
//
//                   <div  className={"send-msg"}>
//                       <List>
//                           <InputItem
//                               value={this.state.text}
//                               onChange={v=>{
//                                   this.setState({text:v})
//                               }}
//                               onKeyUp={this.onKeyup}
//                               extra={ <span  onClick={()=>{this.handleSubmit()}} >发送</span>}
//                           />
//                       </List>
//                   </div>
//               </div>
//                 </div>
//             </Fragment>
//         )
//     }
//
// }
// export default Chat;