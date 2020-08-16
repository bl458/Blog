import React, { useState, useEffect } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";

import {
  Container,
  SubContainer,
  MainContainer,
  Title,
  TitleSub,
  SmallLink,
} from "../styles";
import { getWindowDim } from "../../helper/general";
import Navbar from "./Navbar/Navbar";

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
      <Navbar handleMenuChange={handleMenuChange} />

      <MainContainer
        id="page-wrap"
        menuOpen={menuOpen}
        changedWidth={((windowDim.width - 300) / windowDim.width) * 100}
      >
        <Title>Byungchan Lim</Title>
        <p>
          contact:{" "}
          <SmallLink href="mailto: b458@cornell.edu">
            bl458@cornell.edu
          </SmallLink>{" "}
          | github: <SmallLink href="/git">github.com/bl458</SmallLink>
        </p>

        <SubContainer>
          <TitleSub>About</TitleSub>
          <p>
            Studying Computer Science, I am mainly interested in frontend web
            and mobile development.
          </p>
        </SubContainer>
      </MainContainer>

      <Routes>
        <Route
          path="/git"
          component={() => (window.location = "https://github.com/bl458/")}
        />
      </Routes>
    </Container>
  );
};

export default Blog;
