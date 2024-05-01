import { Button } from '@nextui-org/react';
import React from 'react';
import { buttonStyles } from './constants';

function CustomButton({ children, type, onPress, className, disabled = false, disableRipple = false }) {
  return (
    <Button
      isDisabled={disabled}
      type={type}
      onPress={onPress}
      size='lg'
      disableRipple={disableRipple}
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
