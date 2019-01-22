import React,{Component,Fragment} from 'react'
import {Switch,Route} from 'react-router-dom'
import Login from './pages/login/index'
import Reg from './pages/register/index'
import Auth from './pages/auth/index'
import BossInfo from './pages/bossinfo'
import StaffInfo from './pages/staffinfo'
import Dashboard from './pages/Dashboard/Dashboard'
import Chat from './pages/chat/index'

class RouterHome extends Component{
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }
    componentDidCatch(err,info){
        this.setState({
            hasError:true
        })
    }

    render(){
        return (
            <Fragment>
                <Auth />
                <Switch>
                    <Route path='/login'  component={Login}/>
                    <Route path='/register' component={Reg}/>
                    <Route path='/bossinfo'  component={BossInfo}/>
                    <Route path='/staffinfo'  component={StaffInfo}/>
                    <Route path='/chat/:user'  component={Chat}/>
                    <Route path='/' component={Dashboard}/>
                </Switch>
            </Fragment>
        )
    }
}
export default  RouterHome;