import React,{Component} from "react";
import "./css/calculator.css";


export default class Calculator extends Component{

    constructor(props){
        super(props);
        this.state={
            lastPressed:undefined,
            currentNum:"0",
            prevNum:undefined,
            operation:undefined,
            display_score:undefined
        }
    }
    handleClick=(e)=>{
        const{innerText}=e.target;
        const{lastPressed , currentNum , prevNum,operation,finalScore}=this.state;
        if(!Number.isNaN(Number(innerText))){
            if(currentNum==="0" ){
                this.setState({
                    currentNum:innerText
                })
            }else{
                this.setState({
                    currentNum:currentNum+innerText
                })
            }
        }
        switch(innerText){
            case "C":{
                this.setState({
                    currentNum:"0",
                    prevNum:undefined,
                    operation:undefined,
                    display_score:""
                });
                break;
            }
            case ".":{
                if(!currentNum.includes(".")){
                    this.setState({
                        currentNum:currentNum+innerText
                    })
                }
                break;
            }

            case "+-":{
                if(parseFloat(currentNum)<0){
                    const convert=parseFloat(currentNum)*2
                    const final=parseFloat(currentNum)-convert;
                    this.setState({
                        
                        currentNum:final
                    })
                    
                }else{
                    
                    const convert_1=parseFloat(currentNum)*2
                    const final_1=currentNum+"-"+convert_1.toString();
                    this.setState({
                        currentNum:eval(final_1)
                    })
                }
            }

            default:{
                if(Number.isNaN(Number(innerText)) && innerText!=="+-" && innerText!=="." && innerText!=="="){
                    this.setState({
                        operation:innerText,
                        prevNum:currentNum,
                        currentNum:"0"
                    })
                              
                }
                if(innerText==="="){
                   
                    const answer=prevNum+operation+currentNum
                    this.setState({
                        currentNum:eval(answer)
                    })
                }
                
            }
        }

        this.setState({
            lastPressed:innerText
        })
        
    }
    render(){
        return(
            <div className="Calculator" >
                <div className="display" >
                    <p className="equation" >
                        {this.state.display_score}
                    </p>
                    <p>
                        {this.state.currentNum}
                    </p>
                </div>
                <div className="button-container" >
                    <button onClick={this.handleClick} style={{backgroundColor:"orange"}} >C</button>
                    <button onClick={this.handleClick} style={{backgroundColor:"orange"}} >+</button>
                    <button onClick={this.handleClick} style={{backgroundColor:"orange"}} >-</button>
                    <button onClick={this.handleClick} style={{backgroundColor:"orange"}} >/</button>
                    <button onClick={this.handleClick} style={{backgroundColor:"gray"}} >1</button>
                    <button onClick={this.handleClick} style={{backgroundColor:"gray"}} >2</button>
                    <button onClick={this.handleClick} style={{backgroundColor:"gray"}} >3</button>
                    <button onClick={this.handleClick} style={{backgroundColor:"orange"}} >*</button>
                    <button onClick={this.handleClick} style={{backgroundColor:"gray"}} >4</button>
                    <button onClick={this.handleClick} style={{backgroundColor:"gray"}} >5</button>
                    <button onClick={this.handleClick} style={{backgroundColor:"gray"}} >6</button>
                    <button onClick={this.handleClick} style={{backgroundColor:"orange"}} >+-</button>
                    <button onClick={this.handleClick} style={{backgroundColor:"gray"}} >7</button>
                    <button onClick={this.handleClick} style={{backgroundColor:"gray"}} >8</button>
                    <button onClick={this.handleClick} style={{backgroundColor:"gray"}} >9</button>
                    <button onClick={this.handleClick} style={{backgroundColor:"orange"}} >.</button>
                    <button onClick={this.handleClick} style={{borderRadius:"5px",flex:"1 1 75%", backgroundColor:"gray"}} className="null" >0</button>
                    <button onClick={this.handleClick} style={{backgroundColor:"orange"}} className="equal" >=</button>
                </div>
            </div>
        );
    }
}