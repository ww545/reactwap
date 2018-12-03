import  React,{Component , Fragment} from 'react'
import  {TabBar} from 'antd-mobile'
import  {withRouter} from 'react-router-dom'

@withRouter
class TabBars extends  Component{
    constructor(props){
        super(props)
    }

    render(){

        const navlink = this.props.data.filter(v=>!v.hide)
        const {pathname} = this.props.location
        return(
            <Fragment>
                <TabBar>
                    {navlink.map(v=>(
                        <TabBar.Item
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