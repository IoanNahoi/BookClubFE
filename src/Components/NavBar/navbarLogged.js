import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements.js";
import { Avatar } from "@mui/material";
const NavBarLogged = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/MainPage">Home</NavLink>
          <NavLink to="/Addbook">Add book</NavLink>
          <NavLink to="/Borrrowbook">Borrow Book</NavLink>
          <NavLink to="/Availablebooks">Available Books</NavLink>
        </NavMenu>
        {/* <Avatar>H</Avatar> */}
      </Nav>
    </>
  );
};
export default NavBarLogged;
