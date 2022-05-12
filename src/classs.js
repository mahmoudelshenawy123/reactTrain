import React ,{Component} from "react";
class ClassComp extends Component{
    constructor(){
        super()
        this.state ={
            user:'dasadsdsa'
        }
    }
    changeMessage(){
        console.log(Math.random()*10)
        this.setState({
            user:Math.random()*10
        })
    }
    render(){
        return(
            <div>
                <h1>Class COmp {this.state.user}</h1>
                <button onClick={()=>this.changeMessage()}>
                    change
                </button>
            </div>
        )
    }
}
export default ClassComp