import React from "react";
import Hero from "./LandingPageComponents1/Hero";
import styled from "styled-components";
import "./LandingPageComponents1/landing-page.scss";
import Navbar from "./LandingPageComponents1/Navbar";
import TalkOrNot from "./LandingPageComponents1/TalkOrNot";
import ShallWeTalkMap from "./LandingPageComponents1/ShallWeTalkMap";
import About from "./LandingPageComponents1/About";
import TalkStatus from "./LandingPageComponents1/TalkStatus";
import MotivationApp from "./LandingPageComponents1/MotivationApp";
import Flow from "./LandingPageComponents1/Flow";
import Footer from "./LandingPageComponents1/Footer";

const Container = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const LandingPage: React.FC = () => {
  return (
    <Container className={"landing-page-main"}>
      <Navbar />
      <Hero />
      <TalkOrNot />
      <ShallWeTalkMap />
      <About />
      <TalkStatus />
      <MotivationApp />
      <Flow />
      <Footer />
    </Container>
  );
};

export default LandingPage;
