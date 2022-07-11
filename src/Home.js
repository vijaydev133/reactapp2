import React, { Component } from 'react'

export  class Home extends React.Component{
    render(){
        return(
            <div> Home {this.props.name}</div>
        )
    }
}

export function Rem(props){
    return(
        <div>some of that {props.someProp}
        <button onClick={()=>{props.getName()}}>click me</button>
        </div>
    )
}