import React, { useState,useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

function NestedExamples() {
  let [page,setPage] = useState(0)
  let navigate = useNavigate()

  useEffect(()=>{
      navigate('accounts')
  },[])

  return <>
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Nested Examples</h1>
    </div>
       <div className="container-fluid">
        <ul className='pageButtons'>

           <li className={page===0 ? 'active' : " "} onClick={()=>{
            setPage(0)
            navigate('Accounts')
          }}>Accounts</li>
           <li className={page===1 ? 'active' : " "} onClick={()=>{
            setPage(1)
            navigate('Products')
          }}>Products</li>
           <li className={page===2 ? 'active' : " "} onClick={()=>{
            setPage(2)
            navigate('Receipts')
          }}>Receipts</li>
           <li className={page===3 ? 'active' : " "} onClick={()=>{
            setPage(3)
            navigate('Staff')
          }}>Staff</li>

        </ul>
       </div>
       <div className="container-fluid">
        <Outlet/>
       </div>
    </div>
  </>
  
  
}

export default NestedExamples