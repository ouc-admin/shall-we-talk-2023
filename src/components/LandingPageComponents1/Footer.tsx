import { Icon, Text } from "@chakra-ui/react";
import * as React from "react";
import { FaLinkedin } from "react-icons/fa";

import "../footer.css";
import styled from "styled-components";

const Footer: React.FC = () => {
  const FooterContainer = styled.footer`
    background-color: var(--cl-red);
    font-size: var(--font-size-xm);
  `;
  const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    max-width: 75%;
    margin-inline: auto;
    padding-top: 40px;
  `;
  const FooterHeading = styled.h3`
    font-size: var(--font-size-xxl);
    font-weight: 700;
    color: white;
    font-family: var(--ff-sec);
    letter-spacing: 1px;
  `;
  const FooterTextContainer = styled.div`
    color: white;
  `;
  const Link = styled.a`
    font-size: 40px;
  `;
  const Para = styled.p`
    text-align: center;
  `;
  const FooterBottom = styled.div`
    text-align: center;
    font-weight: 700;
    color: white;
    font-family: var(--ff-sec);
    letter-spacing: 0.5px;
    background: black;
    padding-block: 25px;
  `;
  const Copyright = styled.span`
    font-weight: 400;
  `;
  return (
    <FooterContainer>
      <FooterContent>
        <FooterHeading>Shall We Talk</FooterHeading>
        <FooterTextContainer>
          Shall We Talk はリアルコネクト株式会社によって運営されています。
        </FooterTextContainer>
        <Para>
          We are an online platform which gives you a hesitation free
          environment to talk to strangers in your co-working space.
        </Para>
        <Link
          href="https://www.linkedin.com/company/78436150/admin/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon cursor={"pointer"} as={FaLinkedin} />
        </Link>
      </FooterContent>
      <FooterBottom>
        Copyright &copy;2023 SWT 1.1
        <Copyright style={{ paddingLeft: "15px" }}> 利用規約 </Copyright> &
        <Copyright> プライバシーポリシー </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
