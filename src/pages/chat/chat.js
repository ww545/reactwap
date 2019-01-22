// import axios from 'axios'
// import io from 'socket.io-client'
//
// const socket = io('ws://localhost:9093');
// export function readMsg(from){
//     return (dispatch,getState)=>{
//         axios.post("/user/readmsg",{from}).then(res=>{
//             const userid = getState().user._id;
//             if(res.status===200 && res.data.code===0){
//                 dispatch(msgRead( {from,userid,num:res.data.num}));
//             }
//         })
//     }
// }
// export function recvMsg(){
//     return (dispatch,getState)=>{
//         socket.on('recvmsg',function(data){
//             const userid = getState().user._id;
//             dispatch(msgRecv(data,userid))
//         })
//     }
// }
// export async   function sendMsg(from,to,msg){
//     const objs = {from,to,msg};
//     await socket.emit('sendmsg',objs)
// }
// export async function getMsgList(){
//     await const res =   axios.get('/user/getmsglist')
//     if(res.status===200 && res.data.code === 0){
//         const userid = getState().user._id;
//         msgList({msga:res.data.msgs,users:res.data.users,userid})
//     }
// }
//
// export function getChatId(userId , targetId){
//   return [userId,targetId].sort().join('_')
// }