import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { push as Menu } from "react-burger-menu";

import "../styles.css";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
`;

const MainContainer = styled.div`
  text-align: center;
  align-self: flex-end;
  width: ${(props) => (props.menuOpen ? props.changedWidth + "%" : "100%")};
  position: absolute;
  top: 36px;
`;

const Title = styled.h1`
  margin-top: 0;
`;

function getWindowDim() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const Blog = () => {
  const [windowDim, setWindowDim] = useState(getWindowDim());
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuChange = (state) => setMenuOpen(state.isOpen);

  useEffect(() => {
    const handleResize = () => {
      setWindowDim(getWindowDim());
    };

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

      <MainContainer
        id="page-wrap"
        menuOpen={menuOpen}
        changedWidth={((windowDim.width - 300) / windowDim.width) * 100}
      >
        <Title>Byungchan Lim</Title>
      </MainContainer>
    </Container>
  );
};

export default Blog;
