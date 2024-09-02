import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/appContext/appProvider';
import CustomButton from '../CustomButton';
import Logo from '../Logo/Logo';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { pStyles } from '../Typography/constants';
import { linkProps, navLinks } from './constants';

export type LinkPropType = "create" | "home" | "explore"

const Navbar = () => {
  const { userState } = useAppContext();
  const location = useLocation();
  const [tab, setTab] = useState<LinkPropType>();
  const currentUser = userState

  useEffect(() => {
    if (currentUser) {
      if (location.pathname.includes(linkProps.create.path)) {
        setTab("create")
      } else if (location.pathname === linkProps.explore.path) {
        setTab("explore")
      } else if (location.pathname === linkProps.home.path) {
        setTab("home")
      }
    }
  }, [location.pathname])

  return (
    <div className="fixed w-full px-4 tablet:px-16 wide:px-60 z-[100] top-0 h-[88px] backdrop-blur-lg border-b-1 border-border flex items-center justify-center">
      <Logo />
      {currentUser ? (
        <>
          <div className="absolute top-20 tablet:top-auto bg-background border-1 border-border tablet:rounded-full w-full tablet:w-96 h-10 px-6 tablet:px-8 flex justify-center items-center">
            {navLinks.map((link, index) => (
              <div key={index} className={`
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
            <Link to="/login">
              <CustomButton
                className="px-2 h-10 min-w-fit border-0 shadow-none hover:shadow-none"
                disableRipple={true}
              >
                Login
              </CustomButton>
            </Link>
            <Link to="/signup">
              <CustomButton
                className="p-0 h-10 border-primary-dark text-primary-light gradientBackground2 animate-gradient mix-blend-multiply"
              >
                Sign up
              </CustomButton>
            </Link>
          </div>
      )}
    </div>
  )
}

export default Navbar;
