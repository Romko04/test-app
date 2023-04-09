import React from 'react';
import logo from '../../assets/img/logo.svg'
import profile from '../../assets/img/profile.svg'
import nav1 from '../../assets/img/nav1.svg'
import nav2 from '../../assets/img/nav2.svg'
import nav3 from '../../assets/img/nav3.svg'
import nav4 from '../../assets/img/nav4.svg'
import nav5 from '../../assets/img/nav5.svg'
import nav6 from '../../assets/img/nav6.svg'

const SideBar:React.FC = () =>{
    return (
        <aside className="sidebar">
        <a className="sidebar__logo" href="#">
          <img className='sidebar__logo-img' src={logo} alt="logo" />
          <h1 className="sidebar__logo-title">Dashboard</h1>
        </a>
        <nav className="sidebar__nav">
          <ul className="sidebar__menu">
            <li className="sidebar__menu-item">
              <img className="sidebar__menu-item-img" src={nav1} alt="" />
              <a className='sidebar__menu-item-link' href="#section1">Dashboard</a>
            </li>
            <li className="sidebar__menu-item">
              <img className="sidebar__menu-item-img" src={nav2} alt="" />
              <a className='sidebar__menu-item-link' href="#section2">Product</a>
            </li>
            <li className="sidebar__menu-item sidebar__menu-item--active">
              <img className="sidebar__menu-item-img" src={nav3} alt="" />
              <a className='sidebar__menu-item-link' href="#section3">Customers</a>
            </li>
            <li className="sidebar__menu-item">
              <img className="sidebar__menu-item-img" src={nav4} alt="" />
              <a className='sidebar__menu-item-link' href="#section3">Income</a>
            </li>
            <li className="sidebar__menu-item">
              <img className="sidebar__menu-item-img" src={nav5} alt="" />
              <a className='sidebar__menu-item-link' href="#section3">Promote</a>
            </li>
            <li className="sidebar__menu-item">
              <img className="sidebar__menu-item-img" src={nav6} alt="" />
              <a className='sidebar__menu-item-link' href="#section3">Help</a>
            </li>
          </ul>
        </nav>
        <div className="sidebar__nav-profile">
          <img src={profile} alt="" className="sidebar__nav-profile--img" />
          <div className="sidebar__nav-profile-content">
            <span className="sidebar__nav-profile-name">Evano</span>
            <span className="sidebar__nav-profile-post">Project Manager</span>
          </div>
        </div>
      </aside>
    )
}
export default SideBar