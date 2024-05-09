import React from 'react';
import { Link } from 'react-router-dom';
import { P } from '../Typography';

const Logo = ({ className }) => {
  return (
    <Link
      to="/"
      className={`group flex items-center gap-4 ${className}`}
    >
      <span
        className="logo absolute transition-all mr-auto border-1 border-primary-dark rounded-full h-8 w-8 group-hover:w-10 group-hover:h-10 group-hover:drop-shadow-md">
      </span>
      <P variant="small" className="transition-all group-hover:translate-x-2 group-hover:text-primary-light pl-10 hidden laptop:block text-base font-normal text-foreground-primary">Code&Line</P>
  </Link>
)
}

export default Logo;
