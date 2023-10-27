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
import UseReducer from './components/UseReducer/UseReducer'
import UseContext,{ UserDataContext } from './components/Context/UseContext'
import DashboardContext,{ DashboardDataContext } from './components/Context/dashboardContext'




function App() {
  
  return <>
  <div id='wrapper'>
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/dashboard' element={<UseContext>
        <DashboardContext>
        <Dashboard />
        </DashboardContext>
      </UseContext>}/>
      <Route path='/create' element={<UseContext><Create /></UseContext>}/>
      <Route path='/edit/:id' element={<UseContext><Edit /></UseContext>}/>
      <Route path='/nestedexamples' element={<NestedExamples/>}>
        <Route path='accounts' element={<Accounts/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='receipts' element={<Receipts/>}/>
        <Route path='staff'    element={<Staff/>}/>
      </Route>
      <Route path='useref' element={<UseRef/>}/>
      <Route path='usereducer' element={<UseReducer/>}/>
      <Route path='/*' element={<Navigate to={'/dashboard'}/>}/>
      </Routes>
    </BrowserRouter>
   

  </div>
  </>
}

export default App