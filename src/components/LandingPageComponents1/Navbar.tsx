import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "@chakra-ui/react";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 20px 0 10px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  margin-left: auto;
  flex: 1 1 60%;
  @media (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    width: 70%;
    height: 100vh;
    top: 0px;
    right: 0;
    background: white;
    z-index: 1;
  }
`;

const Links = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 70px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    padding: 25px;
    justify-content: flex-start;
  }
`;

const Logo = styled.img`
  height: 90px;
  @media (max-width: 768px) {
    height: 45px;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: -1;
`;

const LogoImg = styled.img`
  height: 110px;
  margin-left: -55px;
  margin-top: -20px;
  @media (max-width: 768px) {
    height: 55px;
    margin-left: -28px;
    margin-top: -9px;
  }
`;

const List = styled.div`
  display: flex;
  gap: 3em;
  cursor: pointer;
  font-size: var(--font-size-m);
  @media (max-width: 1360px) {
    gap: 1em;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ListExtended = styled(List)`
  width: 100%;
  max-width: 670px;
  @media (max-width: 1360px) {
    max-width: 50%;
  }
`;
const LinkTags = styled.a``;

const Icon = styled.a`
  color: white;
  font-weight: 600;
  font-size: var(--font-size-m);
  background-color: var(--cl-red);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.65em;
`;

const Navbar: React.FC = () => {
  const [isLessThan768] = useMediaQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <a href="#hero" style={{ display: "flex" }}>
        <Logo src="./img/parrot.png" />
        <LogoImg src="./img/ld/swt.png" />
      </a>
      {isLessThan768 || isOpen ? (
        <LinksContainer>
          {isOpen && <Background onClick={handleClose}></Background>}
          <Links>
            <List>
              <LinkTags href="#about">SWTについて</LinkTags>
              <LinkTags href="#flow">導入フロー</LinkTags>
              <LinkTags href="#plan">Plan</LinkTags>
            </List>
            <ListExtended>
              <Icon href="#login">
                <span>ログイン</span>
              </Icon>
              <Icon href="#regiter">
                <span>登録</span>
              </Icon>
            </ListExtended>
          </Links>
        </LinksContainer>
      ) : (
        <div onClick={() => setIsOpen(true)}>Button</div>
      )}
    </Container>
  );
};

export default Navbar;
