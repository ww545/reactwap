import React,{Component,Fragment} from 'react'
import {Card , WingBlank ,WhiteSpace } from 'antd-mobile'


class UserCard extends Component{
    constructor(props){
        super(props)
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
                        <Card key={v._id}>
                            <Header
                                title={v.user}
                                thumb={require(`../../component/img/${v.avatar}.png`)}
                                extra={<span>{v.title}</span>}
                            />
                            <Body>
                            {v.type=='boss'?
                                <div>
                                    公司:{v.company}
                                </div>
                                :null}
                            {v.desc.split('\n').map(j=>(
                                <div key={j}>{j}</div>
                            ))}
                            {v.type=='boss'?
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