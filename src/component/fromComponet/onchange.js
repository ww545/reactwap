import  React ,{Component} from 'react'


 const  HandleChanges=(Comp)=>{
     return  class WraperComp extends Component{
         constructor(props){
             super(props)
             this.state={}
         }
         handleChange=(key,val)=>{
             this.setState({
                 [key]:val
             })
         }

         render(){
             return <Comp handleChange={this.handleChange} state={this.state} {...this.props}></Comp>
         }
     }
 }

export  default HandleChanges