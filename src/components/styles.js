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
  width: ${(props) => (props.menuOpen ? props.changedWidth + "%" : "100%")};
  position: absolute;
  top: 36px;
  left: 36px;
  right: 36px;
`;

const SubContainer = styled.div`
  text-align: left;
`;

const Title = styled.h1`
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

export { Container, MainContainer, SubContainer, Title, SmallLink };
