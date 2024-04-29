import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { pStyles } from '../Typography/constants';
import { linkProps, navLinks } from './constants';

const Navbar = () => {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    if (location.pathname.includes(linkProps.create.path)) {
      setTab(linkProps.create.name)
    } else if (location.pathname === linkProps.explore.path) {
      setTab(linkProps.explore.name)
    } else if (location.pathname === linkProps.home.path) {
      setTab(linkProps.home.name)
    }
  }, [location.pathname])

  return (
    <div className="fixed w-full z-20 top-0 h-[88px] px-6 tablet:px-8 backdrop-blur-lg border-b-1 border-border flex items-center justify-center">
      <Link to="/" className="mr-auto border-1 border-primary-light shadow-medium rounded-md h-10 w-10 bg-background p-2 text-background hover:drop-shadow-md">{'</>'}</Link>
      <div className="absolute top-20 tablet:top-auto bg-background border-1 border-border tablet:rounded-full w-full tablet:w-96 h-10 px-6 tablet:px-8 flex justify-center items-center">
        {navLinks.map(link => (
          <div className={`
            ${pStyles.tiny}
            ${tab === linkProps[link].name && "bg-background shadow-medium"}
            ${link === linkProps.create.name && "mr-auto"}
            ${link === linkProps.explore.name && "ml-auto"}
            ${link === linkProps.home.name && "absolute"}
            text-primary-light rounded-full p-3 transition hover:drop-shadow-md
          `}>
            <Link className={`${tab !== linkProps[link].name && "font-medium transition p-2 rounded-full hover:drop-shadow-lg"}`} to={linkProps[link].path}>
              {tab === linkProps[link].name ? (
                linkProps[link].icon
              ) : (
                linkProps[link].label
              )}
            </Link>
          </div>
        ))}
      </div>
      <ProfileMenu />
    </div>
  )
}

export default Navbar;
