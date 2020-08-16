import React from "react";
import { push as Menu } from "react-burger-menu";

import "./Navbar.css";

const Navbar = ({ handleMenuChange }) => (
  <Menu
    noOverlay
    isOpen
    pageWrapId={"page-wrap"}
    onStateChange={handleMenuChange}
    width={300}
  >
    <a id="home" href="/">
      Home
    </a>
    <a id="about" href="/about">
      About
    </a>
    <a id="contact" href="/contact">
      Projects
    </a>
  </Menu>
);

export default Navbar;
