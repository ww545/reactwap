import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chartUser.redux'
import UserCard from '../../component/userCard/index'
@connect(
    state=>state.chartUser,
    {getUserList}
)
class Boss extends Component{

    componentDidMount(){
      this.props.getUserList('staff')
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
export default Boss;