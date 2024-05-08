import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CustomButton from '../CustomButton';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { P } from '../Typography';
import { pStyles } from '../Typography/constants';
import { linkProps, navLinks } from './constants';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState('');
  const currentUser = useSelector((state) => state.user)

  useEffect(() => {
    if (currentUser) {
      if (location.pathname.includes(linkProps.create.path)) {
        setTab(linkProps.create.name)
      } else if (location.pathname === linkProps.explore.path) {
        setTab(linkProps.explore.name)
      } else if (location.pathname === linkProps.home.path) {
        setTab(linkProps.home.name)
      }
    }
  }, [location.pathname])

  return (
    <div className="fixed w-full px-4 tablet:px-16 wide:px-60 z-[100] top-0 h-[88px] backdrop-blur-lg border-b-1 border-border flex items-center justify-center">
      <div className="flex items-center gap-4">
        <Link to="/" className="mr-auto border-1 border-primary-light shadow-medium rounded-md h-8 w-8 bg-background p-2 text-background hover:drop-shadow-md"></Link>
        <P variant="small" className="hidden laptop:block text-base font-medium text-foreground-primary">Code&Line</P>
      </div>
      {currentUser ? (
        <>
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
        </>
      ) : (
          <div className="ml-auto flex items-center gap-8">
            <CustomButton
              onPress={() => navigate('/login')}
              className="px-2 h-10 min-w-fit border-0 shadow-none hover:shadow-none"
              disableRipple={true}
            >
              Login
            </CustomButton>
            <CustomButton
              onPress={() => navigate('/signup')}
              className="p-0 h-10 border-primary-dark text-primary-light gradientBackground2 animate-gradient mix-blend-multiply"
            >
              Sign up
            </CustomButton>
          </div>
      )}
    </div>
  )
}

export default Navbar;
