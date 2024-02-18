import React from 'react';
import { pStyles, pVariants } from './constants';

const H1 = ({ children, className }) => (
  <h1
    className={`font-primary text-foreground-primary text-5xl font-medium leading-tight ${className}`}
  >
    {children}
  </h1>
)

const H2 = ({ children, className }) => (
  <h2
    className={`font-primary text-foreground-primary text-4xl font-medium leading-tight ${className}`}
  >
    {children}
  </h2>
)

const H5 = ({ children, className }) => (
  <h5
    className={`font-primary text-foreground-primary text-3xl font-medium leading-tight ${className}`}
  >
    {children}
  </h5>
)

const P = ({ variant = pVariants.medium, children, className }) => (
  <p className={`${pStyles[variant]} ${className}`} >
    {children}
  </p>
)

export { H1, H2, H5, P };
