import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
`;

const MainContainer = styled.div`
  text-align: center;
  width: ${(props) =>
    props.menuOpen ? props.changedWidth + "%" : props.originalWidth + "%"};
  position: absolute;
  margin-top: 36px;
  padding-left: 36px;
  padding-right: 36px;
`;

const SubContainer = styled.div`
  text-align: left;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  margin-top: 0;
`;

const TitleSub = styled.h2`
  margin-top: 0;
`;

const SmallLink = styled.a`
  &:link,
  &:visited,
  &:active {
    text-decoration: none;
    color: rgb(68, 121, 178);
  }
  &:hover {
    color: burlywood;
  }
`;

export { Container, MainContainer, SubContainer, Title, TitleSub, SmallLink };
