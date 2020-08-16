import React from "react";
import { push as Menu } from "react-burger-menu";

import "../styles.css";

const Blog = () => {
  return (
    <div className="container">
      <Menu
        noOverlay
        isOpen
        pageWrapId={"page-wrap"}
        outerContainerId={"container"}
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

      <div id="page-wrap" className="main">
        <div className="header"></div>
        <h1 className="title">Title</h1>
      </div>
    </div>
  );
};

export default Blog;
