import styled from "styled-components";
import { BoldRed, Icon } from "./commonStyledComp";

const Section = styled.section`
  padding-block: 60px 20px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Right = styled.div`
  background-color: var(--cl-grey);
  flex-basis: 60%;
  padding: 50px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const Left = styled.div`
  padding-left: 50px;
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;
const IconExtended = styled(Icon)`
  font-size: var(--font-size-xxl);
  padding: 40px;
  max-width: fit-content;
`;

const ImgContainer = styled.div`
  position: relative;
  margin-left: -100px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ImgNormal = styled.img`
  max-height: 400px;

  @media (max-width: 1440px) {
    max-height: 350px;
  }
  @media (max-width: 1360px) {
    max-height: 300px;
  }
`;
const TextImg = styled.img`
  @media (max-width: 425px) {
    max-height: 50px;
  }
`;

const Img = styled(ImgNormal)`
  position: absolute;
  top: -250px;
  right: 50px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const TextContainer = styled.div`
  font-size: var(--font-size-xxxm);
  padding: 25px 25px 0;
`;
const Text = styled.div`
  font-size: var(--font-size-xm);
  padding: 10px;
`;
const BoldRedExt = styled(BoldRed)`
  display: block;
`;
const TalkStatus: React.FC = () => {
  return (
    <Section>
      <IconExtended>トークステータスを変更しよう！</IconExtended>
      <Container>
        <Left>
          <TextImg src="./img/ld/ld-talk-status-3.png" />
          <Text>
            <b>SWTを利用して</b>
            <BoldRedExt>話し相手を探している最中</BoldRedExt>
          </Text>
          <TextImg src="./img/ld/ld-talk-status-4.png" />
          <Text>
            <b>ただいま作業中 </b>
            <BoldRedExt>会話はできません</BoldRedExt>
          </Text>
          <TextImg src="./img/ld/ld-talk-status-5.png" />
          <Text>
            <b>作業中ですが会話は可能</b>
            <BoldRedExt> 気軽にお声がけください</BoldRedExt>
          </Text>
        </Left>
        <Right>
          <ImgContainer>
            <ImgNormal src="./img/ld/ld-talk-status-2.png" />
            <Img src="./img/ld/ld-talk-status-1.png" />
          </ImgContainer>
          <TextContainer>
            状況に合わせてトークステータスを変更することで
            会話の意思表示ができます。 一目見れば、話しかけていいのかわかるので
            話しかけていいかな？？の不安が消えますね！
          </TextContainer>
        </Right>
      </Container>
    </Section>
  );
};

export default TalkStatus;
