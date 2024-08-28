import { Button } from '@nextui-org/react';
import React from 'react';
import { buttonStyles } from './constants';

type ComponentProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onPress?: () => void;
  className?: string;
  disabled?: boolean;
  disableRipple?: boolean;
  isIconOnly?: boolean;
}

function CustomButton({ children, type, onPress, className, disabled = false, disableRipple = false, isIconOnly }: ComponentProps) {
  return (
    <Button
      isDisabled={disabled}
      type={type}
      onPress={onPress}
      size='lg'
      disableRipple={disableRipple}
      isIconOnly
      className={`
        ${buttonStyles}
        ${className}`
      }
    >
      {children}
    </Button>
  )
}

export default CustomButton;
