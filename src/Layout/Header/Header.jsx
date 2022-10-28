import React, { useState } from 'react'
import './Header.css'
import HeaderLogo from '../../../src/Assets/Images/Header-logo.png'
import Button from '../../Componets/Button/Button'
import CV from "./tayyabiqbal.pdf"
import Hamburger from '../../Assets/Images/Icons/hamburger.png'

const Header = () => {
    const [hamburgerActive, sethamburgerActive] = useState(false)
    const [Head, setHead] = useState(false)
    window.onscroll = () => {
        if(window.scrollY > 10){
            setHead(true)
            sethamburgerActive(false)
        } else{
            setHead(false)
        }
    }
   
  return (
   <div className="header"   >
    <div className= { Head?  "navbar-alternate" :"navbar-container"  }>

   
    <div className="navbar">
    <a className="links" href='#hero' >
    <div className="nav-logo-container">
            <div className="nav-logo">

           <img src={HeaderLogo} alt="headerLogo" height="100%" width="auto" />
            </div>
           <p className="logo-title">
            Iqbal
           </p>
        </div>
    </a>
       
        <div className="navlinks">
        
            <a className="links" href='#services' ><p >Services</p></a>
            <a className="links" href='#tools' ><p >Tools</p></a>
            <a className="links" href='#reviews' ><p >Reviews</p></a>
            <a className="links" href='#Contact' ><p >Contact</p></a>
            
            
            
            
        </div>
        <div className="navbtn">
            <a href={CV} download="tayyabiqbal(c.v).pdf">
            <Button Title="Download C.V" />
            </a>
        </div>
        <div className="hamburger-menu" onClick={()=>{
            !hamburgerActive? sethamburgerActive(true) : sethamburgerActive(false)
            console.log(hamburgerActive)
        }}>
            <img src={Hamburger} alt="Hamburger icon" />
        </div>
    </div>
    <div className={ hamburgerActive? "hamburger-links" : "hamburger-links-inactive" }>
    
    <a className="h-links" href='#tools' ><p >Tools</p></a>
            <a className="h-links" href='#reviews' ><p >Reviews</p></a>
            <a className="h-links" href='#Contact' ><p >Contact</p></a>
            <a className="h-links" href='#services' ><p >Services</p></a>
            <a className="h-links" href={CV} download="tayyabiqbal(c.v).pdf">
            <Button Title="Download C.V" />
            </a>
    </div>
    </div>
   </div>
  )
}

export default Header