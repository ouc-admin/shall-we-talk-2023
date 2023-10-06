import styled from "styled-components";
import {
  BoldRed,
  CardCommon,
  CardContatinerCommon,
  HeadingContainerCommon,
  Icon,
  MainHeadingCommon,
  Red,
  SubHeadingCommon,
} from "./commonStyledComp";
import Reveal from "./RevealAnimate";

const Section = styled.section`
  padding-block: 60px 20px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const FlowSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  @media (max-width: 768px) {
    gap: 20px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding-block: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ContainerExt = styled(Container)`
  flex-direction: row-reverse;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const PlanContainer = styled(ContainerExt)`
  align-items: center;
  justify-content: unset;
  padding-block: 0 30px;
`;
const Right = styled.div`
  flex-basis: 50%;
  @media (max-width: 768px) {
  }
`;
const Left = styled.div`
  flex-basis: 50%;
  @media (max-width: 768px) {
    // padding: 0 20px 10px 20px;
  }
`;
const PlanLeft = styled.div`
  flex-basis: 55%;
  background-color: #d2d2d2;
  padding: 50px 20px;
  margin-top: -50px;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;
const PlanRight = styled.div`
  flex-basis: 40%;
  padding-left: 70px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const IconExtended = styled.div`
  ${Icon}
  font-size: var(--font-size-xl);
  padding: 50px;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 768px) {
    gap: 20px;
  }
`;
const IconText = styled.div`
  max-width: 700px;
  text-align: center;
`;
const Button = styled.button`
  max-width: 600px;
  color: black;
  background-color: white;
  font-weight: bold;
  width: 100%;
  box-shadow: 0px 15px 6px #0000004d;
  border-radius: 18px;
  @media (max-width: 768px) {
    max-width: max(50%, 300px);
  }
`;
const Notification = styled.div`
  box-shadow: 0px 10px 6px #00000029;
  background-color: var(--cl-white);
  padding: 1em 2.5em;
  color: var(--cl-red);
  font-size: var(--font-size-xxl);
  font-weight: bold;
  max-width: fit-content;
  margin-block: 10px;
  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
    padding: 10px 20px;
  }
`;

const NotificationExt = styled(Notification)`
  margin-left: auto;
  margin-top: -120px;
  @media (max-width: 768px) {
    margin-top: unset;
  }
`;

const Card = styled.div`
  ${CardCommon}
  max-width: unset;
  @media (max-width: 768px) {
    background-color: var(--cl-grey);
    flex-direction: column-reverse;
  }
`;
const CardContatiner = styled(CardContatinerCommon)`
  justify-content: space-between;
  @media (max-width: 768px) {
    gap: 20px;
  }
`;
const CardText = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: var(--font-size-xxl);
`;
const CardTerms = styled.div`
  margin-left: auto;
  max-width: fit-content;
  padding-top: 10px;
  font-size: var(--font-size-xs);
`;

const ImgNormal = styled.img`
  max-height: 650px;
`;
const SimpleImg = styled.img`
  align-self: center;
  width: fit-content;
  @media (max-width: 1360px) {
    padding: 0 10%;
  }
`;
const ListContainer = styled.div`
  background-color: var(--cl-white1);
  align-self: center;
  box-shadow: 0 0 0 100vmax var(--cl-white1);
  clip-path: inset(0 -100vmax);
  @media (max-width: 768px) {
    padding: 2em 20px;
  }
`;
const SimpleText = styled.div`
  font-size: var(--font-size-xs);
  font-weight: bold;
  padding-block: 12px;
`;
const TextContainer = styled.div`
  font-size: var(--font-size-xxm);
  padding-inline: 2em;
`;

const TextContainerExt = styled(TextContainer)`
  font-size: var(--font-size-xm);
  padding-inline: 0;
`;
const TextSeparator = styled.div`
  padding-block: 30px;
  @media (max-width: 768px) {
    padding-block: 0.7em;
  }
`;
const BoldRedExt = styled(BoldRed)`
  font-size: var(--font-size-xxxm);
  display: block;
  text-align: center;
  padding-block: 10px;
`;
const Bold = styled(BoldRedExt)`
  font-size: var(--font-size-l);
  color: black;
  text-align: left;
`;
const HeadingContainer = styled(HeadingContainerCommon)`
  padding-left: 10%;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;
const HeadingContainer2 = styled(HeadingContainer)`
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;
const MainHeading = styled(MainHeadingCommon)``;
const SubHeading = styled(SubHeadingCommon)`
  margin-left: -8%;
  font-size: calc(var(--font-size-xxxl) - 10px);
  font-weight: bold;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Flow: React.FC = () => {
  return (
    <>
      <Section>
        <Reveal>
          <IconExtended>
            <IconText>バーチャル空間で 会話を増やしませんか？？</IconText>
            <Button>SWTに登録する</Button>
          </IconExtended>
        </Reveal>
        <Reveal>
          <Notification>企業ごとのメリットをご紹介</Notification>
        </Reveal>
        <Container>
          <Left>
            <ImgNormal src="./img/ld/flow-1.jpg" />
          </Left>
          <Right>
            <Reveal>
              <TextContainer>
                <Bold>中小企業</Bold>
                社員同士のコミュニケーションの向上からの職場の雰囲気向上、簡単な業務的指示や質疑などのサポートします。
                <Bold>シェアオフェス</Bold>
                入居企業のコミュニケーション増加、新たなビジネスチャンスの可能性や、他のオフィスとの差別化を図れます。
                <BoldRedExt>
                  シェアオフェスの入居特典として SWTを提供可能！！
                </BoldRedExt>
              </TextContainer>
            </Reveal>
          </Right>
        </Container>
        <ContainerExt>
          <Left>
            <ImgNormal src="./img/ld/flow-2.jpg" />
          </Left>
          <Right>
            <Reveal>
              <TextContainer>
                <Bold>レストラン企業（飲食店）</Bold>
                常に臨機応変に対応しなければいけない職場で、
                アルバイトなどが質疑しやすいような環境作り、
                グループ席から顧客が、他者との会話を弾ませる
                自由席への変革に繋げます。
                <Bold>カフェ企業</Bold>
                顧客との交流がメインとなる企業において、
                コミュニケーションツールとして使用可能。
                大学のキャンパス内カフェなどにおいて学
                生間の交流を深めることもできます。
              </TextContainer>
            </Reveal>
          </Right>
        </ContainerExt>
        <Reveal>
          <NotificationExt>イベント企画にも！！</NotificationExt>
        </Reveal>
      </Section>
      <Section>
        <Reveal>
          <CardContatiner>
            <Card>
              <CardText>お見合い</CardText>
              <img src="./img/ld/flow-3.jpg" />
            </Card>
            <Card>
              <CardText>トークイベント</CardText>
              <img src="./img/ld/flow-4.jpg" />
            </Card>
            <Card>
              <CardText>同窓会</CardText>
              <img src="./img/ld/flow-5.jpg" />
            </Card>
          </CardContatiner>
        </Reveal>
        <CardTerms>
          ※イベント企画用にSWTをご導入頂く場合、価格はスペースの運用期間により異なるご料金をご案内させていただいております。
        </CardTerms>
      </Section>
      <FlowSection>
        <HeadingContainer>
          <MainHeading>Flow</MainHeading>
          <SubHeading>導入フロー</SubHeading>
        </HeadingContainer>
        <SimpleImg src="./img/ld/flow-6.png" />
        <ListContainer>
          <SimpleText>
            ①ご利用目的・ご予算・スペースの規模等を伺った上で最適なご提案をさせていただきます。
          </SimpleText>
          <SimpleText>
            ②正式なお見積り書を提出します。発注を頂きましたらSWT導入に必要な情報をご提出頂きます。
          </SimpleText>
          <SimpleText>
            ③頂いた情報からお客様のSWTスペースを作成し、SWTスペースのアクセスキーを納品させていただきます。
          </SimpleText>
          <SimpleText>
            ④バーチャルスペースの画像を変更したい場合の対応や、バグ修正、質問対応等のサポートに加え、今後も新機能をアップデートしていく予定です。
          </SimpleText>
        </ListContainer>
      </FlowSection>
      <Section>
        <HeadingContainer2>
          <MainHeading>Plan</MainHeading>
          <SubHeading>構想の紹介</SubHeading>
        </HeadingContainer2>
        <PlanContainer>
          <PlanLeft>
            <ImgNormal src="./img/ld/flow-7.png" />
          </PlanLeft>
          <PlanRight>
            <Reveal>
              <TextContainerExt>
                <Bold>新機能メリットのご紹介</Bold>
                <TextSeparator>
                  <div>お客様管理画面では、</div>
                  <Red>統計情報の確認やスペースの管理</Red>
                  が可能に！
                </TextSeparator>
                <TextSeparator>
                  複数のスペースの作成・編集・削除で複数 の
                  <Red>シェアオフェスを包括的に可視化！</Red>
                </TextSeparator>
                <TextSeparator>
                  投票機能で<Red>スペース内全員が参加可能な</Red>イ
                  ベント機能に！
                </TextSeparator>
              </TextContainerExt>
            </Reveal>
          </PlanRight>
        </PlanContainer>
      </Section>
    </>
  );
};

export default Flow;
