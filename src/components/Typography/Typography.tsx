import React from 'react';
import { pStyles } from './constants';

type ComponentProps = {
  children: React.ReactNode;
  className?: string;
}

type PProps = {
  variant?: "big" | "medium" | "small" | "tiny"
  children: React.ReactNode;
  className?: string;
}

const H1 = ({ children, className }: ComponentProps) => (
  <h1
    className={`font-primary text-foreground-primary text-5xl font-medium leading-tight ${className}`}
  >
    {children}
  </h1>
)

const H2 = ({ children, className }: ComponentProps) => (
  <h2
    className={`font-primary text-foreground-primary text-4xl font-medium leading-tight ${className}`}
  >
    {children}
  </h2>
)

const H5 = ({ children, className }: ComponentProps) => (
  <h5
    className={`font-primary text-foreground-primary text-3xl font-medium leading-tight ${className}`}
  >
    {children}
  </h5>
)

const P = ({ variant = "medium", children, className }: PProps) => (
  <p className={`${pStyles[variant]} ${className}`} >
    {children}
  </p>
)

export { H1, H2, H5, P };
