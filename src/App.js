import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import { useEffect, useRef, useState } from 'react';
import Navbar from './components/NavBar';
function App() {
  let arr = [{name:"kuriakose",age:"22"},{name:"Rohan",age:"22"}]
  let [count,setcount] = useState(0);
  let [Num,setNum] = useState(1);
  let [Loading,setLoading] = useState(false);
  let numRef = useRef();
  useEffect(()=>{
    console.log("render");
  },[])


  if(Loading){
    return(<div>Loading.........</div>)
  }
  return (
    <>
    <Navbar/>
    <div className='container'>
      <h1>
        Home Page
      </h1>
      <div className='row pt-5'>
        <div className='col bg-primary me-5'> column 1</div>
        <div className='col bg-secondary mr-5' > column 2</div>
      </div>
      <br></br>
      <p>{count}</p>
      <button onClick={()=>{setcount(count+1)}}>increment</button>
      <br></br>
      <br></br>
      {arr.map((p,index)=>{
        <Card key={index} id={index} name={p.name} age = {p.age}/>
      })}
      <br></br>
      <br></br>
      <input ref={numRef} type='number' placeholder={Num}/>
      <button onClick={async()=>{
        setNum(numRef.current.value);
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
        }}>Click Me</button>
      <p>{Num}</p>
    </div>
    </>
    
  );
}

export default App;
