import styled from "styled-components";
import {
  BoldRed,
  BoldRedBig,
  HeadingContainerCommon,
  MainHeadingCommon,
  SubHeadingCommon,
} from "./commonStyledComp";

const Section = styled.section`
  padding: 90px 0 50px 70px;
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-block: 60px 20px;
    padding-inline: 20px;
  }
`;

const Right = styled.div`
  background-color: var(--cl-grey);
  margin-left: -200px;
  z-index: -1;
  padding: 0px 0px 200px 200px;
  @media (max-width: 768px) {
    margin-left: unset;
    z-index: 0;
    padding: 0px 0px 200px 0px;
  }
`;
const Left = styled.div`
  flex-basis: 70%;
`;
const HeadingContainer = styled(HeadingContainerCommon)``;
const MainHeading = styled(MainHeadingCommon)``;
const SubHeading = styled(SubHeadingCommon)``;

const Thoughts = styled.p`
  font-size: var(--font-size-xm);
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;
const BottomContainer = styled.div`
  font-size: var(--font-size-xl);
  position: absolute;
  bottom: 50px;
  max-width: 80%;
  margin-inline: auto;
  padding-left: 15%;
`;

const About: React.FC = () => {
  return (
    <Section>
      <Left>
        <HeadingContainer>
          <MainHeading>ABOUT</MainHeading>
          <SubHeading>
            <b>SWT</b>について
          </SubHeading>
        </HeadingContainer>
        <Thoughts>
          <b>Shall we</b> <BoldRed>talk</BoldRed>
          （シャルウィートーク）ではリアルコネクト会社によって
          運営されているオフィスサポートのWEBアプリケーションです。
          SWTは現実世界のオフィスをバーチャルスペースへとDX化し、
          オフィス内の「直接会話」をサポートすることで空間の活性化を
          目指すアプリケーションです。
          会話に溢れ、他者を助け合う社会の創成をビジョンとしています。
        </Thoughts>
      </Left>
      <Right>
        <Img src="./img/ld/ld-office-map.png" />
      </Right>
      <BottomContainer>
        実際のオフィスをDX化した
        <BoldRedBig>バーチャルスペース</BoldRedBig>と
        <BoldRedBig>一目でわかるトークステータス</BoldRedBig>
      </BottomContainer>
    </Section>
  );
};

export default About;
