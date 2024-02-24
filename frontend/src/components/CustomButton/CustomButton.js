import { Button } from '@nextui-org/react';
import React from 'react';

function CustomButton({ children, type, onPress, className }) {
  return (
    <Button
      type={type}
      onPress={onPress}
      size='lg'
      className={`
        rounded-lg
        border-2
        bg-transparent
        text-foreground-dark
        border-border
        shadow-small
        hover:text-primary-light
        hover:border-primary-dark
        hover:shadow-medium
        data-[focus-visible=true]:outline-primary-dark
        ${className}`
      }
    >
      {children}
    </Button>
  )
}

export default CustomButton;
