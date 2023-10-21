import React,{useState} from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Create from './components/Create'
import Edit from './components/Edit'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import NestedExamples from './NestedExamples'
import Accounts from './NestedExamples/Accounts'
import Products from './NestedExamples/Products'
import Receipts from './NestedExamples/Receipts'
import Staff from './NestedExamples/Staff'
import UseRef from './components/Hooks/UseRef'




function App() {
  let [data,setData] = useState([
    {
      name:"deepa",
      username:'dee123',
      email:'deepa@gmail.com',
      mobile: "1234567890",
      batch: 'B100',

    },
    {
      name:"sree",
      username:'sree423',
      email:'sree@gmail.com',
      mobile: "57684567890",
      batch: 'B200',
    }
  ])
  return <>
  <div id='wrapper'>
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard data={data} setData={setData}/>}/>
      <Route path='/create' element={<Create data={data} setData={setData}/>}/>
      <Route path='/edit/:id' element={<Edit data={data} setData={setData}/>}/>
      <Route path='/nestedexamples' element={<NestedExamples/>}>
        <Route path='accounts' element={<Accounts/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='receipts' element={<Receipts/>}/>
        <Route path='staff'    element={<Staff/>}/>
      </Route>
      <Route path='useref' element={<UseRef/>}/>
      <Route path='/*' element={<Navigate to={'/dashboard'}/>}/>
    </Routes>
    </BrowserRouter>
   

  </div>
  </>
}

export default App