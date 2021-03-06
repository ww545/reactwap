import React,{Component,Fragment} from 'react'
import {Card , WingBlank ,WhiteSpace } from 'antd-mobile'
import {withRouter} from 'react-router-dom'

@withRouter
class UserCard extends Component{
    handleClick = (v)=>{
        this.props.history.push(`/chat/${v._id}`)
    }
    render(){
        const Header = Card.Header;
        const Body = Card.Body

        return(
            <Fragment>
                <WingBlank>
                    <WhiteSpace></WhiteSpace>
                {this.props.userList.map(v=>(
                    v.avatar?(
                        <Card key={v._id}  onClick={()=>this.handleClick(v)}>
                            <Header
                                title={v.user}
                                thumb={require(`../../component/img/${v.avatar}.png`)}
                                extra={<span>{v.title}</span>}
                            />
                            <Body>
                            {v.type==='boss'?
                                <div>
                                    公司:{v.company}
                                </div>
                                :null}
                            {v.desc.split('\n').map(j=>(
                                <div key={j}>{j}</div>
                            ))}
                            {v.type==='boss'?
                                <div>
                                    薪资:{v.money}
                                </div>
                                :null}
                            </Body>

                        </Card>
                    ):null
                ))}
                </WingBlank>
            </Fragment>
        )

    }
}
export  default UserCard;