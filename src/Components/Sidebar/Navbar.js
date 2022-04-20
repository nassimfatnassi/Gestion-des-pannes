import React from 'react';
import { useState } from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <div>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <i class="bi bi-list" onClick={showSidebar}></i>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="nenu-bars"> 
            <i class="bi bi-x-lg"></i>
            </Link>
          </li>
          {SidebarData.map((val, key) => {
            return (
              <li
                className="row nav-text"
                id={window.location.pathname == val.link ? "active" : ""}
                key={key}
                onClick={() => (window.location.pathname = val.link)}
              >
                <span id="title">{val.title}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  )
}
