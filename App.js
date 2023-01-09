import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import NavScrollExample from './components/navbar';
import './App.css';
import { useState } from 'react';

function App() {
  const [input,setinput] = useState("");

  //to convert uppercase
  const Uppercase =(input)=>{
    setinput(input.toUpperCase());
    console.log(input);
  }
   //to convert uppercase
  const Lowercase = (input)=>{
    setinput(input.toLowerCase());
    console.log(input);
  }
  //to make clear page 
  const ClearAll = (input)=>{
    input=""
    setinput(input);
  }
  //to copy the text 
  const CopyText =()=>{
    var text = document.getElementById("textarea");
    text.select()
    navigator.clipboard.writeText(text.value);
  }
  //to select all text 
  const SelectAll =()=>{
    var text = document.getElementById("textarea");
    text.select()
  }
//to handle spaces in between words
const Spacesbtn=(input)=>{
    let newtext = input.split(/[ ]+/);
    setinput(newtext.join(" "));
}

  return <>
  <NavScrollExample />
  <hr className='hrline'/>
  <div id='container'>
     <h2>Add text here : </h2>
     <textarea id='textarea' onChange={(e)=>{
       setinput(e.target.value)
        console.log(e.target.innerHTML);
     }}
     value={input}></textarea>
     <Button variant="primary" onClick={()=>{Uppercase(input)}}>UpperCase</Button>{' '}
     <Button variant="primary" onClick={()=>{Lowercase(input)}}>LowerCase</Button>{' '}
     <Button variant="primary" onClick={()=>{Spacesbtn(input)}} >Space Between</Button>{' '}
     <Button variant="primary" onClick={()=>{ClearAll(input)}}>ClearAll</Button>{' '}
     <Button variant="primary" onClick={()=>{SelectAll(input)}}>SelectAll</Button>{' '}
     <Button variant="primary" onClick={()=>{CopyText(input)}}>Copy</Button>{' '}
     <div>
      <h2>Your Text summary is here </h2>
     <h4> {input.split(" ").length} Words and {input.length} Characters</h4>
     <h5> {input.split(" ").length*0.08} Minutes to Read</h5>
     </div>
  </div>
  </>
}
export default App;
