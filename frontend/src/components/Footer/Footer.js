import React from 'react';
import { Link } from 'react-router-dom';
import icons from '../../assets/icons';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <div className="py-20 px-4 tablet:px-40 wide:px-96 border-t-1 border-divider flex gap-8">
      <Logo className="mr-auto" />
      <Link to={'https://github.com/brrkrmn/codeandline'}>{icons.github}</Link>
      <Link>{icons.mail}</Link>
    </div>
  )
}

export default Footer;
