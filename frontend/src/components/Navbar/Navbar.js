import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icons from '../../assets/icons';
import CustomButton from '../CustomButton';
import { pStyles } from '../Typography/constants';
import { linkProps, navLinks } from './constants';

const Navbar = () => {
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
    <div className="sticky top-0 h-[88px] px-6 tablet:px-8 backdrop-blur-lg border-b-1 border-border flex items-center justify-center">
      <p className="mr-auto">{t('navBar.brand')}</p>
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
            <Link className={`${tab !== linkProps[link].name && "transition p-2 rounded-full hover:drop-shadow-lg"}`} to={linkProps[link].path}>
              {tab === linkProps[link].name ? (
                linkProps[link].icon
              ) : (
                linkProps[link].label
              )}
            </Link>
          </div>
        ))}
      </div>
      <CustomButton className="ml-auto px-0 min-w-12 min-h-12 border-1 border-divider hover:border-primary-light">
        {icons.user}
      </CustomButton>
    </div>
  )
}

export default Navbar;
