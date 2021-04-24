
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div className="content  ">    
      
         <nav className="d-flex justify-content-end">
             <a href="/home">Home</a>
             <a href="/course">Course</a>
             <a href="/cart">Cart</a>
         </nav>
         <div className="text">
             <h2 className="header">Give Your Workout<br></br>
              A New Style! </h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing.<br></br>
              porroesse corporis aperiam repellat labore maiores .</p>
             </div>
        </div>
    );
};

export default Header;