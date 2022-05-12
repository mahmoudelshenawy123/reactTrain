import React ,{ Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state= {
            counter:0
        }
    }

    increaseCounter(){
        this.setState(prevstae=>(
            {
                counter:prevstae.counter +1
            }
        ))
    }
    increaseFive(){
        this.increaseCounter()
        this.increaseCounter()
        this.increaseCounter()
        this.increaseCounter()
        this.increaseCounter()
    }
    render(){
        return(
            <div>
                <h1>Counter</h1>
                Count : <span>{this.state.counter}</span>
                <button onClick={()=>{this.increaseCounter()}}>
                    increase
                </button>
                <button onClick={()=>{this.increaseFive()}}>
                    increase 5
                </button>
            </div>
        )
    }
}
export default Counter;