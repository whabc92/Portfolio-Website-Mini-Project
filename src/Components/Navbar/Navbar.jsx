import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import nav_underline from '../../assets/nav_underline.svg'
import { Link } from "react-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right = "0"
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }

  return (
    <div className='navbar'>
      <img src={logo} alt=""/>
      <img src={menu_open} alt="" onClick={openMenu} className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} alt="" onClick={closeMenu} className='nav-mob-close'/>
        <li>
          <Link to="home" smooth={true} duration={500}><p onClick={()=>setMenu("home")}>Home</p></Link>
          {menu==="home" && <img src={nav_underline} alt="" />}
        </li>
        <li>
          <Link to="about" smooth={true} offset={-50} duration={500}><p onClick={()=>setMenu("about")}>About Me</p></Link>
          {menu==="about" && <img src={nav_underline} alt="" />}
        </li>
        <li>
          <Link to="services" smooth={true} offset={-50} duration={500}><p onClick={()=>setMenu("services")}>Services</p></Link>
          {menu==="services" && <img src={nav_underline} alt="" />}
        </li>
        <li>
          <Link to="myworks" smooth={true} offset={-50} duration={500}><p onClick={()=>setMenu("portfolio")}>Portfolio</p></Link>
          {menu==="portfolio" && <img src={nav_underline} alt="" />}
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-50} duration={500}><p onClick={()=>setMenu("contact")}>Contact</p></Link>
          {menu==="contact" && <img src={nav_underline} alt="" />}
        </li>
      </ul>

      <div className='nav-connect'><Link to="contact" smooth={true} offset={-50} duration={500}>Connect With Me</Link></div>
    </div>
  )
}

export default Navbar;