import React from "react";
import { bubble as Menu } from "react-burger-menu";

import "../styles.css";

const Blog = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Menu>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
      </div>
    </div>
  );
};

export default Blog;
