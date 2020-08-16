import React from "react";
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
  width: 100vw-300;
  align-self: flex-end;
`;

const Title = styled.h1`
  margin-top: 0;
`;

const Blog = () => {
  return (
    <Container>
      <Menu noOverlay isOpen pageWrapId={"page-wrap"}>
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

      <MainContainer id="page-wrap">
        <Title>Title</Title>
      </MainContainer>
    </Container>
  );
};

export default Blog;
