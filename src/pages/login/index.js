import React,{Component,Fragment} from 'react'
import {Redirect}from 'react-router-dom'
import {List,InputItem , WhiteSpace  , Button ,WingBlank} from 'antd-mobile'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
import Log from '../../component/log/login'
import  FromHandle from '../../component/fromComponet/onchange'

@connect(
    state=>state.user,
    {login}
)
    @FromHandle
class Login extends Component{
    constructor(props){
        super(props)
    }

    PushReg=()=>{
        this.props.history.push('/register')
    }
    handleLogin=()=>{
        this.props.login(this.props.state)
    }
    render(){
        return(
            <Fragment>

                {this.props.redirectTo&&this.props.redirectTo!='/login'?<Redirect to={this.props.redirectTo} />:null}
                <Log></Log>
                <WingBlank>
                <List>
                {this.props.msg?<p className='errMsg'>{this.props.msg}</p>:null}
                <InputItem  onChange={v=>this.props.handleChange('user',v)}>用户名</InputItem>
                <WhiteSpace />
                <InputItem type='password' onChange={v=>this.props.handleChange('pwd',v)}>密码</InputItem>
                </List>

                <WhiteSpace />
                <Button type='primary' onClick={this.handleLogin}>登录</Button>
                <WhiteSpace />
                <Button type='primary' onClick={this.PushReg}>注册</Button>
                </WingBlank>
            </Fragment>
        )
    }
}
export default Login;