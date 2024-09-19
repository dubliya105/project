import React from "react";
import "../style/Sidebar.css";
import {Link} from 'react-router-dom'
function SideBar() {
  return (
    <div>
      <div>
      
          {/* Sidebar */}
          <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse"
          >
            <div className="position-sticky text-left" >
              <div className="list-group list-group-flush mx-3 mt-4">
              <Link
                  aria-current="false"
                  to="/home"
                  className="list-group-item list-group-item-action py-2 ripple"
                
                >
                  <i className="fas fa-home fa-fw me-3" />
                  <span>Home</span>
                </Link>
                <Link
                 aria-current="false"
                  to="/showEnquiry"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                
                  <i className="fas fa-search-plus fa-fw me-3" />
                  <span>Show Enquiry</span>
                </Link>
                <Link
                  to="/dashboard"
                  className="list-group-item list-group-item-action py-2 ripple "
                  aria-current="true"
                >
                  <i className="fas fa-tachometer-alt fa-fw me-3" />
                  <span>Main dashboard</span>
                </Link>
                <Link
                 aria-current="false"
                  to="#"
                  className="list-group-item list-group-item-action py-2 ripple "
                >
                  <i className="fas fa-chart-area fa-fw me-3" />
                  <span>Webiste traffic</span>
                </Link>
                
                <Link
                 aria-current="false"
                  to="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-chart-line fa-fw me-3" />
                  <span>Analytics</span>
                </Link>
                <Link
                 aria-current="false"
                  to="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-chart-pie fa-fw me-3" />
                  <span>SEO</span>
                </Link>
                
              </div>
            </div>
          </nav>
          {/* Sidebar */}
          
     
        {/*Main Navigation*/}
        {/*Main layout*/}
        <main style={{ marginTop: 58 }}>
          <div className="container pt-4" />
        </main>
      </div>
    </div>
  );
}

export default SideBar;
