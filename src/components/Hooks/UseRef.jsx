import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Button } from 'react-bootstrap'

function UseRef() {
    
    let count = useRef(0)
    let [name,setName] = useState(" ")

    let ref1 = useRef()
    let ref2 = useRef()
    let ref3 = useRef()
    let ref4 = useRef()


    useEffect(()=>{
     
      count.current += 1
    })

    useEffect(()=>{
      ref1.current.focus()
    },[])
 
    const handleSubmit = ()=>{
      const otp = `${ref1.current.value}${ref2.current.value}${ref3.current.value}${ref4.current.value}`
      if(otp.length===4)
          alert(`Entered OTP is ${otp}`)
      else
      {
          alert("Invalid OTP")
          ref1.current.value=""
          ref2.current.value=""
          ref3.current.value=""
          ref4.current.value=""
          ref1.current.focus()
      }
  }
  return <>
           <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">UseRef Example</h1>
    </div>
    <input type="text" name="" id=""  placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} /> <br />
    <br />
    <h5>Name is {name}</h5>
    <br />
    <h4>Component rendered {count.current} times</h4>
    <br />

    
    <div>
      <h1>OTP Rendering using Using useref</h1>
      <input type="text" name="" id="" ref={ref1} onKeyUp={(e)=>{
        (e.key==='Backspace'|| e.key==='Delete' && e.target.value.length===0)
        ? ref1.current.focus()  :    ref2.current.focus()  }}  style={{height:'30px' ,width:'30px'}}/>
     
      <input type="text" name="" id="" ref={ref2}

      onKeyUp={(e)=>{
        (e.key==='Backspace'|| e.key==='Delete' && e.target.value.length===0)
        ? ref1.current.focus()  :    ref3.current.focus()  }} style={{height:'30px' ,width:'30px'}}/>
     
      <input type="text" name="" id="" ref={ref3} 
        onKeyUp={(e)=>{
        (e.key==='Backspace'|| e.key==='Delete' && e.target.value.length===0) 
        ? ref2.current.focus() :  ref4.current.focus()    }} style={{height:'30px' ,width:'30px'}} />

      <input type="text" name="" id="" ref={ref4} 
        onKeyUp={(e)=>{
        (e.key==='Backspace'|| e.key==='Delete' && e.target.value.length===0)
         ? ref3.current.focus() : setTimeout(()=>handleSubmit(),1000)  }} style={{height:'30px' ,width:'30px'}} />

      <br />
      <br/>
      <Button variant="primary" onClick={()=>handleSubmit()}>Submit</Button> 
    </div>

    </div>

  </>
    
  
}

export default UseRef