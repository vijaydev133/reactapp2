import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import products from "./product.json"
import App1 from "./App1"
import {Home} from "./Home"
import {Rem} from "./Home"
// import products from "./product.json"

function Nav(props){
  return(
    <div>from nav {props.name}</div>
  )
}

// import React, { Component } from 'react'

 class MyClass extends React.Component {
   getName(){
      console.log();
  }
  render() {
    return (
      <div>index
        <Home fname={"some"}/>
        <Rem someProp = {"prop to rem"} getName = {getName}/>
      </div>
    )
  }
    
  }




ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    
    <Nav name = {"vijay"}/>
    <MyClass/>
    {/* {
      products.map((product)=>{
      return (<h1 key={product.id}>{product.fName}</h1>)})
    } */}
  </div>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
