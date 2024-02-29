import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProfileBox from '../ProfileBox/ProfileBox';
import { pStyles } from '../Typography/constants';
import { linkProps, navLinks } from './constants';

const Nav = () => {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    if (location.pathname === linkProps.create.path) {
      setTab(linkProps.create.name)
    } else if (location.pathname === linkProps.explore.path) {
      setTab(linkProps.explore.name)
    } else {
      setTab(linkProps.home.name)
    }
  }, [location.pathname])

  return (
    <Navbar
      maxWidth='full'
      isBordered
      isBlurred
      className='border-border h-[88px]'
      classNames={{
        item: [
          pStyles.tiny,
          "text-primary-light",
          "rounded-full",
          "p-3",
          "data-[active=true]:bg-background",
          "data-[active=true]:shadow-medium",
        ],
      }}
    >
      <NavbarBrand>
        <p>{t('navBar.brand')}</p>
      </NavbarBrand>
      <NavbarContent
        justify='center'
        className='w-96 h-10 border-1 border-border rounded-full px-8 gap-12'
      >
        {navLinks.map(link => (
          <NavbarItem isActive={tab === linkProps[link].name && true}>
            <Link to={linkProps[link].path}>
              {tab === linkProps[link].name ? (
                linkProps[link].icon
              ) : (
                  linkProps[link].label
              )}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent
        justify='end'
      >
        <NavbarItem>
          <ProfileBox />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Nav;
