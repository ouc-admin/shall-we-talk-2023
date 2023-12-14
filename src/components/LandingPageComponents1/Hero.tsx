import styled from "styled-components";
import { Icon } from "../LandingPageComponents1/commonStyledComp";
import Reveal from "./RevealAnimate";

const Section = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
  @media (max-width: 768px) {
    height: unset;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  padding-left: 2.5em;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-inline: 20px;
    padding-top: 60px;
  }
`;

const Left = styled.div`
  flex: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 20px;
  }
`;

const Right = styled.div`
  flex: 1 1 55%;
  background: var(--cl-grey);
  z-index: -1;
`;

const Title = styled.h1`
  color: var(--cl-black);
  font-size: var(--font-size-xxxl);
  margin-right: -20%;
  line-height: 1.5;
  font-weight: bold;
  @media (max-width: 768px) {
    margin-inline: auto;
    font-size: calc(var(--font-size-xxl) + 10px);
  }
`;

const Img = styled.img`
  object-fit: cover;
  padding: 80px 0 0 70px;
  @media (max-width: 768px) {
    padding: unset;
  }
`;

const Position = styled.div`
  width: 110%;
  position: absolute;
  bottom: 0;
  left: 70%;
  @media (max-width: 768px) {
    width: unset;
    left: unset;
    position: unset;
  }
`;

const IconExtended = styled(Icon)`
  font-size: var(--font-size-xxl);
  width: 150%;
  justify-content: flex-end;
  @media (max-width: 768px) {
    width: unset;
    font-size: var(--font-size-xl);
  }
`;

const Hero: React.FC = () => {
  return (
    <Section id="hero">
      <Container>
        <Left>
          <Title>会話に溢れた オフィスに しませんか？</Title>
          <Position>
            <Icon>なんだか忙しそうだし・・ </Icon>
            <Icon>話しかけても大丈夫かな？</Icon>
            <IconExtended>そんな時、ありませんか？</IconExtended>
          </Position>
        </Left>
        <Right>
          <Img src="./img/ld/landing-page-hero-img.jpg" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
