import { Divider } from '@nextui-org/react';
import React from 'react';
import { Link } from 'react-router-dom';
import icons from '../../assets/icons';
import { P } from '../Typography';

const Footer = () => {
  return (
    <div className="pt-20 pb-4 px-4 tablet:px-40 wide:px-96 border-t-1 border-divider flex flex-col">
      <div className="flex gap-10 items-start">
        <div className="flex items-center gap-4 mr-auto">
          <Link to="/" className="border-1 border-primary-light shadow-medium rounded-md h-8 w-8 bg-background p-2 text-background hover:drop-shadow-md"></Link>
          <P variant="small" className="text-base font-medium text-foreground-primary">Code&Line</P>
        </div>
        <Link to={'https://github.com/brrkrmn/codeandline'}>{icons.github}</Link>
        {/* <Link>{icons.twitter}</Link> */}
        <Link>{icons.mail}</Link>
      </div>
      <Divider className="mt-16 mb-4" />
      <div className="flex items-start justify-center gap-4">
        <P variant="small" className="text-base text-foreground-dark">Code&Line. All rights reserved.</P>
      </div>
    </div>
  )
}

export default Footer;
