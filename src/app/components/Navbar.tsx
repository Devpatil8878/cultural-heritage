import React from 'react'
import "../globals.css"

const Navbar = () => {
  return (
    <>
     <header>
    <nav className="nav">
        <span className="hamburger-btn material-symbols-rounded">menu</span>
        <a href="#" className="logo">
            <img src="https://tse1.mm.bing.net/th?id=OIP.i0NNFL9cRqSZ8z2_aO9nPwAAAA&pid=Api&P=0&h=180" alt="logo"/>
            <h2>BHARAT DARSHAN</h2>
        </a>
        <ul className="links">
            <span className="close-btn material-symbols-rounded">close</span>
            <li><a href="index.html">Home</a></li>
            <li><a href="Maps.html">Map</a></li>
            <li><a href="#">Info</a></li> 
            <li><a href="About Us.html">About us</a></li>
            <li><a href="contactus.html">Contact us</a></li>
        </ul>
        <a href="/login" className="login-btn">LOG IN</a>
    </nav>
</header>
    </>
  )
}

export default Navbar