import React,{Component,Fragment} from 'react'
import {List,InputItem , WhiteSpace , Radio , Button ,WingBlank } from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect}from 'react-router-dom'
import Log from '../../component/log/login'
import {register} from "../../redux/user.redux";

const  RadioItem = Radio.RadioItem;
@connect(
    state=>state.user,
    {register}
)
class Register extends Component{
    constructor(props){
        super(props)
        this.state ={
            type:'staff',
            user:'',
            pwd:'',
            reppwd:'',
            disabled:false
        }
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
        this.setState({
            disabled:false
        })
    }
    handleSubmit=()=>{
        this.setState({
            disabled:true
        })
        this.props.register(this.state)
    }
    render(){
        console.log(this.state)
        return(
            <Fragment>
               {this.props.redirectTo&&this.props.redirectTo!=='/login'?<Redirect to={this.props.redirectTo} />:null}
                <Log></Log>
                <WingBlank>
                <List>
                    {this.props.msg?<p className='errMsg'>{this.props.msg}</p>:null}
                <InputItem onChange={v=>this.handleChange('user',v)} >用户名</InputItem>
                <WhiteSpace />
                <InputItem type='password' onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
                <WhiteSpace />
                <InputItem type='password' onChange={v=>this.handleChange('reppwd',v)}>确认密码</InputItem>
                <WhiteSpace />
                <RadioItem
                    checked={this.state.type==='staff'}
                    onChange={()=>this.handleChange('type','staff')}
                    >
                    牛人
                </RadioItem>
                <RadioItem
                    checked={this.state.type==='boss'}
                    onChange={()=>this.handleChange('type','boss')}
                  >
                    Boss
                </RadioItem>
                </List>
                <WhiteSpace />
                <Button type='primary'  disabled={this.state.disabled}   onClick={this.handleSubmit}>注册</Button>
                </WingBlank>
            </Fragment>
        )
    }
}
export default Register;