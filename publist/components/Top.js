// Top of page which includes navbar
import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const navStyle = {
  fontSize: "2rem",
  width: "100%",
  textAlign: "center",
  fontFamily: "Titillium Web",
  fontWeight: "bold"
};

// Top of Page
const Top = () => (
  <div>
    <Navbar color="light">
      <NavbarBrand style={navStyle}>Publist</NavbarBrand>
    </Navbar>
  </div>
);

export default Top;
