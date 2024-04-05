import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';
import upload from '../../assets/upload.png';
import more from '../../assets/more.png';
import notification from '../../assets/notification.png';
import user_profile from '../../assets/user_profile.jpg';
import { Link } from 'react-router-dom';

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white position-sticky top-0 z-index shadow">
      <div className="container-fluid">
        <img src={menu} onClick={()=>setSidebar(prev=>prev===false?true:false)} className="img-fluid menu-icon mx-3 d-sm-none d-lg-block" alt="" />
        <a className="navbar-brand me-auto" href="/"> 
          <img src={logo} className="img-fluid" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mx-auto mb-2 mb-lg-0">
            <div className="input-group my-sm-3 my-lg-0">
              <input type="text" className="form-control" id='input-field' placeholder="Search" />
              <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
            </div>
          </div>
          <div className='navbar-right-side-icons'>
            <img src={upload} className='img-fluid icons-img' alt="" />
            <img src={more} className='img-fluid icons-img' alt="" />
            <img src={notification} className='img-fluid icons-img' alt="" />
            <img src={user_profile} className='img-fluid icons-img me-0' alt="" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar