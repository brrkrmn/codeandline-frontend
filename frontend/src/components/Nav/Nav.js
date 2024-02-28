import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icons from '../../assets/icons';
import { pStyles } from '../Typography/constants';

const Nav = () => {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    if (location.pathname === '/create') {
      setTab('create')
    } else if (location.pathname === '/explore') {
      setTab('explore')
    } else {
      setTab('home')
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
        <p>Code&Line</p>
      </NavbarBrand>
      <NavbarContent
        justify='center'
        className='w-96 h-10 border-1 border-border rounded-full px-8 gap-12'
      >
        <NavbarItem isActive={tab === 'create' && true}>
          <Link to="/create">
            {tab === "create" ? (
              icons.create
            ) : (
                'Create'
            )}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={tab === 'home' && true}>
          <Link to="/">
            {tab === "home" ? (
              icons.home
            ) : (
                'Home'
            )}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={tab === 'explore' && true}>
          <Link to="/explore">
            {tab === "explore" ? (
              icons.explore
            ) : (
                'Explore'
            )}
          </Link>
        </NavbarItem>

      </NavbarContent>
      <NavbarContent
        justify='end'
      >
        <NavbarItem>
          <button>Start Here!</button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Nav;
