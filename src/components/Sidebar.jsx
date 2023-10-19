import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return <>
    
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    {/* <!-- Sidebar - Brand --> */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider my-0"/>

    {/* <!-- Nav Item - Dashboard --> */}
    <li className="nav-item active">
        <div className="nav-link" href="index.html">
           <Link to={'/dashboard'}>
           <i className="fas fa-fw fa-tachometer-alt"></i>
            <span style={{color:'white'}}>Dashboard</span>
           </Link>
            </div>
    </li>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider"/>

    

    {/* <!-- Nav Item - Pages Collapse Menu --> */}
    <li className="nav-item">
        <div className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
          <Link to={'/create'}>
          <i className="fas fa-fw fa-cog"></i>
            <span style={{color:'white'}}>Create</span>
          </Link>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="buttons.html">Buttons</a>
                <a className="collapse-item" href="cards.html">Cards</a>
            </div>
        </div>
    </li>

    {/* <!-- Nav Item - Utilities Collapse Menu --> */}
    <li className="nav-item">
        <div className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
           <Link>
            <i className="fas fa-fw fa-wrench"></i>
            <span style={{color:'white'}}>Edit User</span>
           </Link>
        </div>
    </li>

   
  
</ul>





  </>
}

export default Sidebar