import React from 'react';
import { Button } from '../../globalStyles';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLink,
  FooterLinkTitle,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterLinksContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  SocialIcons,
  SocialIconLink,
  WebsiteRights,
} from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the news and trends.
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/sign-up">Testimonials</FooterLink>
            <FooterLink to="/sign-up">Careers</FooterLink>
            <FooterLink to="/sign-up">Investors</FooterLink>
            <FooterLink to="/sign-up">Terms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/sign-up">Testimonials</FooterLink>
            <FooterLink to="/sign-up">Careers</FooterLink>
            <FooterLink to="/sign-up">Investors</FooterLink>
            <FooterLink to="/sign-up">Terms of Service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/sign-up">Testimonials</FooterLink>
            <FooterLink to="/sign-up">Careers</FooterLink>
            <FooterLink to="/sign-up">Investors</FooterLink>
            <FooterLink to="/sign-up">Terms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/sign-up">Testimonials</FooterLink>
            <FooterLink to="/sign-up">Careers</FooterLink>
            <FooterLink to="/sign-up">Investors</FooterLink>
            <FooterLink to="/sign-up">Terms of Service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            ULTRA
          </SocialLogo>
          <WebsiteRights>ULTRA &#169; 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="" target="_blank" aria-label="Facebok">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
