
// import { useState } from 'react';
import './App.css';
import PureCompo from './PureCompo';
import { useState } from 'react'
function App() {
  // const [count,setcount]=useState(10);
  return (
    <div className="App" >
      <div className='left'>
      <PureCompo></PureCompo>
      </div>
      <div className='right'>
      <h1>High Order Component</h1>
      <h3 style={{color:"red"}}>it component as argument and always return a new component it means
       take input as component and give component as output
       </h3>
       <HocRed compo={Counter} />
       <HocGreen compo={Counter} />
  
</div>
 
    </div>
  );
}
 function HocRed(props){
   return <h2 style={{backgroundColor:"red",width:"180px" }}> <props.compo/></h2>
 }
 function HocGreen(props){
  return <h2 style={{backgroundColor:"green",width:"180px" }}> <props.compo/></h2>
}

function Counter(){
  const[count,setcount]=useState(0);
  return <div>
      <h3>{count}</h3>
      <button  onClick={()=>setcount(count+1)}>Increase value</button>
  </div>
}

export default App;
