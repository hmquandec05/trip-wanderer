import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import logo from "./Asset/Icon.png";
import { icon } from "@fortawesome/fontawesome-svg-core";

const Container = styled.div`
  height: 100vh;
`;

const ImageSide = styled.div`
  height: 100%;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tripwanderer-f58d6.appspot.com/o/Login.png?alt=media&token=7201ff6e-1450-4b70-b3a2-a6dd3664b368");
  background-size: cover;
  background-position: center;
`;

const FormSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f8f9fa;
`;

const LoginContainer = styled.div`
  width: 80%;
  max-width: 400px;
`;

const LoginLogo = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  img {
    max-width: 150px;
  }
`;

const StyledButton = styled.button`
  width: 100%;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1rem 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ced4da;
  }

  span {
    padding: 0 0.5rem;
  }
`;

const LoginPage = () => {
  return (
    <Container className="container-fluid">
      <div className="row h-100">
        <ImageSide className="col-md-6 d-none d-md-block" />
        <FormSide className="col-md-6">
          <LoginContainer>
            <LoginLogo>
              <img src={logo} alt="Logo" className="img-fluid" />
            </LoginLogo>

            <h4 className="text-center mb-4" id="đăng-nhập">
              Đăng nhập
            </h4>

            <form>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>

              <StyledButton type="submit" className="btn btn-primary">
                Đăng nhập
              </StyledButton>
            </form>

            <Divider>
              <span>Hoặc đăng nhập với</span>
            </Divider>

            <StyledButton className="btn btn-outline-secondary">
              <FontAwesomeIcon
                icon={<i class="fa fa-google" aria-hidden="true"></i>}
                className="me-2"
              />{" "}
              Google
            </StyledButton>

            <p className="mt-3 text-center">
              Lần đầu bạn đến với Trip Wanderer?{" "}
              <a href="/" className="text-decoration-none">
                Đăng ký
              </a>
            </p>
          </LoginContainer>
        </FormSide>
      </div>
    </Container>
  );
};

export default LoginPage;
