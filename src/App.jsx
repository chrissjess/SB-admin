import React,{useState} from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Create from './components/Create'
import Edit from './components/Edit'
import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {
  let [data,setData] = useState([
    {
      name:"deepa",
      username:'dee123',
      email:'deepa@gmail.com',
      mobile: "1234567890",
      batch: 'B100'

    },
    {
      name:"sree",
      username:'sree423',
      email:'sree@gmail.com',
      mobile: "57684567890",
      batch: 'B200'

    }
  ])
  return <>
  <div id='wrapper'>
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard data={data} setData={setData}/>}/>
      <Route path='/create' element={<Create data={data} setData={setData}/>}/>
      <Route path='/edit' element={<Edit data={data} setData={setData}/>}/>
    </Routes>
    </BrowserRouter>
   

  </div>
  </>
}

export default App