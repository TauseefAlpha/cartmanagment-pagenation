
import React from 'react'
import {Link } from 'react-router-dom'
import Modalloginsignup from '../Modalloginsignup'


function Navbar() {
  return (
    <>
        <nav className={`navbar navbar-expand-sm navbar-light sticky-top navbar-custom`}>
        <div className={`container-fluid navbar-custom`}> 
          <a href="/" class="navbar-brand"><img id="logo" src="./imgs/suit.png" alt='logo' style={{width:'40px',height:'40px'}}/></a>
          {/* <a className="navbar-brand" href="/" style={{color:'red', fontSize:'28'}}>NETFLIX</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" style={{color:'white'}}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto" id="topnav">
              <li className="nav-item topnav">
                <Link className="nav-link  text-light" to="/"> <i class="fa fa-home" style={{fontSize:'25px'}}></i>Home</Link>
              </li>
              <li className="nav-item topnav">
                <Link className="nav-link text-light" to="/slider"><i class="fa fa-sliders" style={{fontSize:'25px'}}></i>slider</Link>
              </li>
              <li className="nav-item topnav">
                <Link className="nav-link text-light" to="/showallproducts"><i class="fa fa-product-hunt" style={{fontSize:'25px'}}></i>Show Products</Link>
              </li>
              <li className="nav-item topnav">
                <Link className="nav-link text-light" to="/carts"><i class="fa fa-shopping-cart" style={{fontSize:'25px'}}></i>CartDetail</Link>
              </li>

            </ul>
            
            {/* <form className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Search"></input>
              <button className=" btn btn-outline-success" type="button">Search</button>
            </form> */}
            <Modalloginsignup/>
          </div>
        </div>
      </nav>
      
      
    </>
  )
}

export default Navbar
