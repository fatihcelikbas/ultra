import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  useEffect(() => {
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener(resize, showButton);
  }, [setButton]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const links = [
    ['Home', '/'],
    ['Products', '/products'],
    ['Services', '/services'],
  ];

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }} f>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              ULTRA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              {links.map((link) => (
                <NavItem>
                  <NavLinks to={link[1]}>{link[0]}</NavLinks>
                </NavItem>
              ))}
              <NavItemBtn>
                <NavBtnLink to="/sign-up">
                  <Button fontBig={!button} primary>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
