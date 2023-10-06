import styled from "styled-components";

const Icon = styled.div`
  color: white;
  font-weight: 600;
  font-size: var(--font-size-xxxm);
  background-color: var(--cl-red);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  word-break: keep-all;
  @media (max-width: 768px) {
    word-break: unset;
  }
`;
const Red = styled.span`
  color: var(--cl-red);
`;
const BoldRed = styled(Red)`
  font-weight: bold;
`;
const BoldRedBig = styled(BoldRed)`
  font-size: var(--font-size-xxl);
`;
const CardContatinerCommon = styled.div`
  width: 100%;
  display: flex;
  gap: 5%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const CardCommon = styled.div`
  display: flex;
  max-width: 450px;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px 0;
`;
const Thoughts = styled.p`
  font-size: var(--font-size-xxxm);
  font-weight: bold;
  text-align: center;
`;
const Img = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
  max-height: 350px;
  @media (max-width: 425px) {
    max-height: 250px;
  }
`;
const HeadingContainerCommon = styled.div`
  font-family: var(--ff-sec);
  display: flex;
  align-items: flex-end;
  @media (max-width: 768px) {
    align-items: unset;
    flex-direction: column;
  }
`;
const MainHeadingCommon = styled.h1`
  font-size: 200px;
  color: var(--cl-grey);
  font-weight: 600;
  letter-spacing: 5px;
  line-height: 1.2;
  @media (max-width: 1700px) {
    font-size: 150px;
  }
  @media (max-width: 1440px) {
    font-size: 100px;
  }
  @media (max-width: 1024px) {
    font-size: 90px;
  }
  @media (max-width: 768px) {
    font-size: 80px;
  }
  @media (max-width: 425px) {
    font-size: 50px;
  }
`;
const SubHeadingCommon = styled.h2`
  color: var(--cl-red);
  font-size: var(--font-size-xxxl);
  margin-left: -30px;
  letter-spacing: 5px;
  word-break: keep-all;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
export {
  Icon,
  Red,
  BoldRed,
  BoldRedBig,
  CardContatinerCommon,
  CardCommon,
  Thoughts,
  Img,
  HeadingContainerCommon,
  MainHeadingCommon,
  SubHeadingCommon,
};
