'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './styles.css';
import { items } from '@/app/shared/modules/global';
import { renderMenu } from './section/LeftMenu';

const Navbar = ({ isHome = true }: { isHome?: boolean }) => {
  const [navBgColor, setNavBgColor] = useState('transparent');

  const listenScrollEvent = () => {
    window.scrollY > 50 ? setNavBgColor('main-bg') : setNavBgColor('');
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);
  // If you do not want to auto-close the mobile drawer when a path is selected
  // Delete or comment out the code block below
  // From here

  // Upto here
  const onClick = (className: string) => () => {
    document.body.classList.toggle(className);
  };
  return (
    <nav className={`navbar ${navBgColor} ${!isHome ? 'main-bg' : ''}`}>
      <div className="logo">
        <Link href={'/'}>
          <img src="/assets/images/KTBL-logo2.svg" alt="" />
        </Link>
      </div>
      <div className="push-left">
        <button id="menu-toggler" onClick={onClick('menu-active')} data-classname="menu-active" className="hamburger">
          <span className="hamburger-line hamburger-line-top"></span>
          <span className="hamburger-line hamburger-line-middle"></span>
          <span className="hamburger-line hamburger-line-bottom"></span>
        </button>

        {renderMenu({ menus: items })}
      </div>
    </nav>
  );
};

export default Navbar;
