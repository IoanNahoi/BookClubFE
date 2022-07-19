import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements.js";
import { Avatar } from "@mui/material";
const NavBarLogged = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/MainPage" activeStyle>
            Home
          </NavLink>
          <NavLink to="/Addbook" activeStyle>
            Add book
          </NavLink>
          <NavLink to="/Borrrowbook" activeStyle>
            Borrow Book
          </NavLink>
          <NavLink to="/Availablebooks" activeStyle>
            Available Books
          </NavLink>
        </NavMenu>
        {/* <Avatar>H</Avatar> */}
      </Nav>
    </>
  );
};
export default NavBarLogged;
