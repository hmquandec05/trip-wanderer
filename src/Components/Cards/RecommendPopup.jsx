import React, { useState } from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

function RecommendPopup({ isVisible, onClose }) {
  return (
    <PopupContainer isVisible={isVisible}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <h3>Lựa chọn tiêu chí Recommend</h3>
      {/* Các lựa chọn filter sẽ được thêm vào đây */}
    </PopupContainer>
  );
}

export default RecommendPopup;
