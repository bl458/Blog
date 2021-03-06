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
        originalWidth={((windowDim.width - 36 * 2) / windowDim.width) * 100}
        changedWidth={
          ((windowDim.width - 300 - 36 * 2) / windowDim.width) * 100
        }
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
          <p style={{ marginRight: 36 }}>
            Studying Computer Science, I specialize in frontend web and mobile
            development. As someone who is passionate about learning new things,
            I am deeply interested in machine learning and deep learning,
            specifically natural language processing and image recognition.
            <br />
            <br />
            My hobbies are playing the piano and watching anime. I also follow
            international musical competitions such as the Chopin and
            Tchaikovsky competition and am currently learning japanese.
          </p>
        </SubContainer>

        <SubContainer>
          <TitleSub>Skills</TitleSub>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>React</li>
            <li>React Native</li>
            <li>NodeJS</li>
            <li>MySQL</li>
            <li>Typescript</li>
          </ul>
        </SubContainer>

        <SubContainer>
          <TitleSub>Projects</TitleSub>
          <ul>
            <li>MataMata (Website for Japanese learners)</li>
            <li>Cornell Electric</li>
          </ul>
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
