import React from "react";
import img_background from "./img_background.jpg";
import Icon_Logo from "./Icon_Logo.jpg";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const StyledLeftLayout = styled.div`
  width: 60%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledRightLayout = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLogo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const StyledForm = styled.div`
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 300px;
  }

  input {
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 12px;
    margin-left: 10px;
    background-color: #046cb8;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
  }

  a {
    color: blue;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const ConfirmUser = () => {
  return (
    <StyledContainer>
      <StyledLeftLayout>
        <img src={img_background} alt="Background" />
      </StyledLeftLayout>

      <StyledRightLayout>
        <StyledLogo>
          <img src={Icon_Logo} alt="Logo" />
          <h1>Đăng Nhập</h1>
        </StyledLogo>

        <StyledForm>
          <form>
            <input type="text" placeholder="Mã OTP" />
            <div>
              <a href="#">Quay lại?</a>
              <button type="submit">Xác nhận</button>
            </div>
          </form>
        </StyledForm>
      </StyledRightLayout>
    </StyledContainer>
  );
};

export default ConfirmUser;
