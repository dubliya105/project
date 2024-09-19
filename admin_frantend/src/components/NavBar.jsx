import React from 'react'
import '../style/Sidebar.css'
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie';
import { Collapse, Ripple, initMDB } from 'mdb-ui-kit'
function NavBar() {
  initMDB({Collapse, Ripple})
    const cookies =new Cookies()
  return (
    <div>
    {/* Navbar */}
    <nav
            id="main-navbar"
            className="navbar navbar-expand-lg navbar-light fixed-top bg-dark"
          >
            {/* Container wrapper */}
            <div className="container-fluid">
              {/* Toggle button */}
              <button
                data-mdb-button-init
                className="navbar-toggler"
                type="button"
                data-mdb-collapse-init
                data-mdb-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars" />
              </button>
              {/* Brand */}
              <a className="navbar-brand mx-5 h-75" href="#">
                <img
                  src="data:image/png;base64,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"
                  height={25}
                  alt="MDB Logo"
                  loading="lazy"
                />
              </a>
              {/* Search form */}
              <form className="d-none d-md-flex input-group w-auto my-auto">
                <input
                  autoComplete="off"
                  type="search"
                  className="form-control rounded"
                  placeholder='Search (ctrl + "/" to focus)'
                  style={{ minWidth: 225 }}
                />
                <span className="input-group-text border-0">
                  <i className="fas fa-search" />
                </span>
              </form>
              
              {/* Right links */}   
              <ul className="navbar-nav ms-auto d-flex flex-row">
                {/* Notification dropdown */}
                
              {cookies.get("admin")===undefined ? <li className="nav-item">
                      <Link className="nav-link me-3 mex-lg-0" to="/login">
                         <i className="fa fa-user mx-2" />
                        Login
                      </Link>
                </li>:' ' }
                <li className="nav-item">
                      <Link className="nav-link me-3 mex-lg-0" to="/enquiry">
                         <i className="fa fa-user mx-2" />
                        Add Enquiry
                      </Link>
                </li>
              
                {cookies.get('admin')!==undefined?<li className="nav-item dropdown">
                  <a
                    data-dropdown-init
                    className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="true"
                  > 
                    <i className="fas fa-bell" />
                    <span className="badge rounded-pill badge-notification bg-danger">
                      1
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Some news
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another news
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>:''}
                
               {
                cookies.get('admin')!==undefined?<li className="nav-item">
                  <a className="nav-link me-3 mex-lg-0" href="#">
                    <i className="fas fa-fill-drip" />
                  </a>
                </li>:''
               }
                {/* Icon */}
                {cookies.get('admin')!==undefined?<li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" href="#">
                    <i className="fab fa-github" />
                  </a>
                </li>:''}
                {/* Icon dropdown */}
               { cookies.get('admin')!==undefined?<li className="nav-item dropdown">
                  <a
                    data-mdb-dropdown-init
                    className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="flag-united-kingdom flag m-0" />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-united-kingdom flag" />
                        English
                        <i className="fa fa-check text-success ms-2" />
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-poland flag" />
                        Polski
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-china flag" />
                        中文
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-japan flag" />
                        日本語
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-germany flag" />
                        Deutsch
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-france flag" />
                        Français
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-spain flag" />
                        Español
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-russia flag" />
                        Русский
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-portugal flag" />
                        Português
                      </a>
                    </li>
                  </ul>
                </li>:''}
                {/* Avatar */}
               { 
                cookies.get('admin')!==undefined?<li className="nav-item dropdown">
                  <a
                    data-mdb-dropdown-init
                    className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                 
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                      className="rounded-circle"
                      height={22}
                      alt="Avatar"
                      loading="lazy"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        My profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <Link className="dropdown-item" to='/login' onClick={()=>cookies.remove('admin')}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
                :''}
              </ul>
            </div>
            {/* Container wrapper */}
          </nav>
          {/* Navbar */}
    </div>
  )
}

export default NavBar