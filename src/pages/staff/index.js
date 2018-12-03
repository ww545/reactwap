import React,{Component,Fragment} from 'react'
import {Card ,WhiteSpace,WingBlank } from 'antd-mobile'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chartUser.redux'
import UserCard from '../../component/userCard/index'
@connect(
    state=>state.chartUser,
    {getUserList}
)
class Staff extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getUserList('boss')
    }

    render(){

        return(
            <Fragment>

                    <UserCard
                        userList={this.props.userList}
                    />

            </Fragment>
        )
    }
}
export default Staff;