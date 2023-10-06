import styled from "styled-components";
import {
  CardCommon,
  CardContatinerCommon,
  Icon,
  Img,
  Thoughts,
} from "./commonStyledComp";

const Section = styled.section`
  padding-block: 120px 70px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    padding-block: 60px 20px;
  }
`;
const CardContatiner = styled(CardContatinerCommon)`
  justify-content: center;
  @media (max-width: 768px) {
    gap: 20px;
  }
`;
const Card = styled(CardCommon)`
  background-color: var(--cl-grey);
`;
const BottomContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: -5%;
  gap: 10%;
  padding-left: 70px;
  position: relative;
  @media (max-width: 768px) {
    padding-left: 0;
    flex-direction: column;
  }
`;
const Question = styled.span`
  font-size: var(--font-size-xxxl);
  font-weight: bold;
  color: var(--cl-red);
  rotate: -40deg;
  position: absolute;
  top: -30px;
  left: 0;
`;
const ImgNormal = styled.img`
  max-height: 350px;
  @media (max-width: 768px) {
    max-height: 200px;
    margin-right: auto;
  }
`;

const IconExt = styled(Icon)`
  font-size: 90px;
  justify-content: flex-start;
  padding: 0.5em 1em;
  width: 100%;
  word-break: unset;
  margin-bottom: -2%;
  @media (max-width: 1600px) {
    font-size: 60px;
  }
  @media (max-width: 768px) {
    font-size: 45px;
  }
  @media (max-width: 425px) {
    font-size: 30px;
  }
`;
const TalkOrNot: React.FC = () => {
  return (
    <Section>
      <CardContatiner>
        <Card>
          <Thoughts>今、話かけていいのか わからない</Thoughts>
          <Img src="./img/ld/woman.png" />
        </Card>
        <Card>
          <Thoughts>話してみたいけど 独りを 楽しんでいるのかも…</Thoughts>
          <Img src="./img/ld/man1.png" />
        </Card>
        <Card>
          <Img src="./img/ld/woman1.png" />
          <Thoughts>いつも忙しそうで 話かけるタイミングが わからない</Thoughts>
        </Card>
      </CardContatiner>
      <BottomContainer>
        <Question>???</Question>
        <ImgNormal src="./img/ld/man2.png" />
        <IconExt>こんなお悩みに・・・</IconExt>
      </BottomContainer>
    </Section>
  );
};

export default TalkOrNot;
