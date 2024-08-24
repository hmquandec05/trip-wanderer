import React from "react";
import styled from "styled-components";
import LeftSildeBar from "./LeftSildeBar";
import RightSlidebar from "./RightSlideBar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #dddd;
`;

const MainContent = styled.main`
  flex: 1;
`;

const FooterWrapper = styled.div`
  flex-shrink: 0;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <LeftSildeBar />
      <MainContainer>
        <ContentWrapper>
          <Content>
            <MainContent>{children}</MainContent>
          </Content>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </ContentWrapper>
        <RightSlidebar />
      </MainContainer>
    </LayoutContainer>
  );
};

export default Layout;
