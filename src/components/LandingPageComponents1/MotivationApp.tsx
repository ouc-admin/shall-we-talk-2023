import styled from "styled-components";
import { BoldRed, Icon } from "./commonStyledComp";

const Section = styled.section`
  padding-block: 60px 20px;
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 30px;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-inline: 0;
  }
`;
const Right = styled.div`
  @media (max-width: 768px) {
  }
`;
const Left = styled.div`
  background-color: var(--cl-grey);
  padding-top: 90px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const IconExtended = styled(Icon)`
  font-size: var(--font-size-xxl);
  padding: 40px;
  max-width: fit-content;
  margin-left: auto;
  margin-bottom: -30px;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const ImgContainer = styled.div`
  @media (max-width: 768px) {
  }
`;

const ImgNormal = styled.img`
  max-height: 450px;
  margin-left: -30px;
  margin-bottom: -30px;
  @media (max-width: 768px) {
    margin: unset;
    max-height: 300px;
  }
`;
const Img = styled.img`
  max-height: 350px;
  margin-bottom: -250px;
  @media (max-width: 768px) {
    max-height: 200px;
    margin-bottom: -50px;
    max-width: 80%;
    margin-inline: 10%;
  }
`;
const TextContainer = styled.div`
  background-color: var(--cl-grey);
  font-size: var(--font-size-xxxm);
  padding: 90px 60px 0;
  margin-left: 30px;
  @media (max-width: 768px) {
    padding: 90px 60px 30px;
    margin-inline: 0;
  }
`;

const BoldRedExt = styled(BoldRed)`
  font-size: var(--font-size-xxl);
`;
const MotivationApp: React.FC = () => {
  return (
    <Section>
      <IconExtended>直接会話に特化したメッセージ機能</IconExtended>
      <Container>
        <Left>
          <ImgNormal src="./img/ld/ld-motivation-1.jpg" />
        </Left>
        <Right>
          <ImgContainer>
            <Img src="./img/ld/ld-motivation-2.png" />
          </ImgContainer>
        </Right>
      </Container>
      <TextContainer>
        <div>SWTはあえてフルチャットシステムを導入しておりません。</div>
        <div>ユーザーは受信した特定のメッセージに対して返信ができないため</div>
        デスクを離れて
        <BoldRedExt>直接会話をするモチベーションアップに繋がります</BoldRedExt>
      </TextContainer>
    </Section>
  );
};

export default MotivationApp;
