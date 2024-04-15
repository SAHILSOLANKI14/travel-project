import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from "./NavbarElement";
// import { FaSearch } from 'react-icons'
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
      
      {/* <input
          type="search"
          placeholder="Search here...."
          aria-label="copy-button"
          style={{
            width: "50vh",
            height: "35px",
            marginTop: "15px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
            outline: "none",
            border: "none",
            padding:'8px',
          }}
        >
         
        </input> */}
      
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/Services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/Contact-US" activeStyle>
            Contact us
          </NavLink>
          <NavLink to="/Sign-Up" activeStyle>
            Sign Up
          </NavLink>
          <NavBtnLink to="/Signin">Sign in</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
            <NavBtnLink to ="/Signin">Sign in</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
