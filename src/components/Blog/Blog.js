import React, { useState, useEffect } from "react";
import { push as Menu } from "react-burger-menu";

import "../styles.css";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
`;

const MainContainer = styled.div`
  text-align: center;
  align-self: flex-end;
  width: ${(props) => (props.menuOpen ? "calc((100vw-)/100vw*100)" : "100%")};
  background-color: red;
`;

const Title = styled.h1`
  margin-top: 0;
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const Blog = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuChange = (state) => setMenuOpen(state.isOpen);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Menu
        noOverlay
        isOpen
        pageWrapId={"page-wrap"}
        onStateChange={handleMenuChange}
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

      <MainContainer id="page-wrap" menuOpen={menuOpen}>
        <Title>Title</Title>
      </MainContainer>
    </Container>
  );
};

export default Blog;
