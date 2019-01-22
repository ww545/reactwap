import  React,{Component , Fragment} from 'react'
import  {TabBar} from 'antd-mobile'
import  {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
@withRouter
@connect(
    state=>state.chat
)
class TabBars extends  Component{
    render(){
        const navlink = this.props.data.filter(v=>!v.hide)
        const {pathname} = this.props.location
        return(
            <Fragment>
                <TabBar>
                    {navlink.map(v=>(
                        <TabBar.Item
                            badge={v.path==='/msg'?this.props.unread:0}
                            key={v.path}
                            title={v.text}
                            icon={{uri:require(`./${v.icon}.png`)}}
                            selectedIcon={{uri:require(`./${v.icon}-active.png`)}}
                            selected={pathname===v.path}
                            onPress={()=>{
                                this.props.history.push(v.path)
                            }}
                          >
                        </TabBar.Item>
                    ))}
                </TabBar>
            </Fragment>
        )
    }
}
export default TabBars