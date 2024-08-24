import React from "react";
import styled from "styled-components";
import addImage from "../Asset/image/IMG_0642.jpeg";
import Weather from "../Cards/Weather";
import { useLocation } from "react-router-dom";

const RightSidebarWrapper = styled.div`
  margin-left: auto;
  top: 65px;
  width: 200px;
  min-height: 100vh;
  background-color: #ffff;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const ImageContainer = styled.div`
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 175px;
  margin: 20px;
  border-radius: 16px;
`;

const RightSlidebar = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  return (
    <RightSidebarWrapper>
      <ImageContainer>
        {currentUrl === "/" ? (
          <Image src={addImage} alt="Destination 1" />
        ) : (
          <Weather />
        )}
        {currentUrl === "/" ? <Image src={addImage} alt="Destination 1" /> : ""}
      </ImageContainer>
    </RightSidebarWrapper>
  );
};

export default RightSlidebar;
