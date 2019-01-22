const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const model = require('./model')
const Chat = model.getModel('chat')
const app = express()
// Chat.remove({},(err,doc)=>{
//     console.log(doc)
// })
const server = require('http').Server(app)
const io = require('socket.io')(server)
io.on('connection',function(socket){
    socket.on('sendmsg',function(data){
        const { from, to, msg } = data.from;
        const chatid = [from,to].sort().join('_');

        Chat.create({chatid,from,to,content:msg},function(err,doc){
            console.log(doc)
            io.emit('recvmsg',Object.assign({},doc))
        })
    })
})

const userRouter = require('./user')

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)
// Chat.find({},function(err,doc){
//     console.log(doc)
// })
// Chat.remove({},function(e,d){
//     console.log(d)
// })
server.listen(9093,function(){
    console.log('Node app start at port 9093')
})



