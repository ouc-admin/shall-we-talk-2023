import styled from "styled-components";

const Section = styled.section`
  background-color: var(--cl-grey);
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: unset;
  }
`;
const TopContainer = styled(Container)`
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  background-color: var(--cl-grey);
  padding: 6% 7% 0 0;
  flex-basis: 60%;
`;
const TopImgContainer = styled(ImgContainer)`
  padding: 0;
  @media (max-width: 768px) {
    padding: 0 0 6% 7%;
  }
`;
const ImgNormal = styled.img`
  max-height: 700px;

  @media (max-width: 1700px) {
    max-height: 600px;
  }
  @media (max-width: 1440px) {
    max-height: 500px;
  }
  @media (max-width: 1024px) {
    max-height: 400px;
  }
  @media (max-width: 425px) {
    max-height: unset;
  }
`;
const TopImgNormal = styled(ImgNormal)`
  position: absolute;
  top: 0;
  right: 0;
  @media (max-width: 768px) {
    position: unset;
  }
`;
const TextContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  padding-block: 100px 50px;
  flex-basis: 40%;
  @media (max-width: 768px) {
    flex-basis: unset;
    padding-block: 20px;
  }
`;
const TopTextContainer = styled(TextContainer)`
  padding-block: 50px 0;
  flex-basis: 38%;
  @media (max-width: 768px) {
    flex-basis: unset;
    padding-block: 20px;
  }
`;
const Thoughts = styled.p`
  font-size: var(--font-size-xxxm);
  font-weight: bold;
  word-break: keep-all;
`;
const TopThoughts = styled(Thoughts)`
  max-width: 55%;
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const Red = styled.span`
  color: var(--cl-red);
`;
const SuperBig = styled(Red)`
  font-size: var(--font-size-xxxl);
  @media (max-width: 768px) {
    font-size: var(--font-size-xxl);
  }
`;
const Big = styled.span`
  font-size: var(--font-size-xxl);
  word-break: keep-all;
  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
  }
`;

const ShallWeTalkMap: React.FC = () => {
  return (
    <Section>
      <TopContainer>
        <TopTextContainer>
          <TopThoughts>
            Shall We <Red>Talk</Red>は 空間を
            <Big>バーチャル化</Big>し
          </TopThoughts>
        </TopTextContainer>
        <TopImgContainer>
          <TopImgNormal src="./img/ld/ld-page-sec-3-2.jpg" />
        </TopImgContainer>
      </TopContainer>
      <Container>
        <ImgContainer>
          <ImgNormal src="./img/ld/ld-page-sec-3-1.png" />
        </ImgContainer>
        <TextContainer>
          <Thoughts>
            <SuperBig>直接会話</SuperBig>
            <Big>に繋げます。</Big>
          </Thoughts>
        </TextContainer>
      </Container>
    </Section>
  );
};

export default ShallWeTalkMap;
