
// import { Component } from 'react';
import { PureComponent } from 'react'

export default class PureCompo extends PureComponent {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Pure Component</h1>
      <h3 style={{color:"red"}}>it is use to stop the Rerendring if value is same  </h3>
      <h4 >just like value is 10 then no need to update it case of 10</h4>
       <h2>value is :{this.state.count}</h2>
       <button onClick={()=>this.setState({count:10})}>Update Value with 10</button>
      
      </div>
    )
  }
}
