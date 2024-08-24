import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterWrapper = styled.footer`
  background-color: black;
  color: white;
  padding: 20px;
  width: 100%;
  max-height: 432px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  h3 {
    margin-bottom: 10px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 5px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Safety information</li>
            <li>Cancellation options</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>Privacy policy</li>
            <li>Community Blog</li>
            <li>Terms of service</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Contact</h3>
          <ul>
            <li>FAQ</li>
            <li>Get in touch</li>
            <li>Partnerships</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Social</h3>
          <SocialIcons>
            <i class="fa fa-facebook-official" aria-hidden="true"></i>

            {/* <FontAwesomeIcon icon={faFacebo} />
            <FontAwesomeIcon icon={faTiktok} />
            <FontAwesomeIcon icon={faYoutube} /> */}
          </SocialIcons>
        </FooterSection>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
