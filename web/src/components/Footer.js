import React from 'react';
import { Link } from 'gatsby';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
          veniam.
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          @TechHub {new Date().getFullYear()}. All rights reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
