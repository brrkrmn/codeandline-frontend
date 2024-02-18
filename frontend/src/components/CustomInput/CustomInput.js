import { Input } from '@nextui-org/react';
import React from 'react';

function CustomInput ({ type, label, className }) {
  return (
    <Input
      className={`rounded-lg text-foreground-dark border border-divider bg-transparent ${className}`}
      type={type}
      label={label}
      variant='bordered'
      classNames={{
        label: [
          'text-foreground-dark',
          'group-data-[filled-within=true]:text-primary-light',
          'group-data-[filled-within=true]:text-md',
        ],
        input: [
          'bg-transparent',
          'text-foreground-dark',
          'placeholder:text-foreground-dark',
        ],
        inputWrapper: [
          'rounded-lg',
          'border-2',
          'border-border',
          'group-data-[hover=true]:border-primary-dark',
          'group-data-[focus=true]:border-primary-dark',
          '!cursor-text'
        ],
      }}
    />
  )
}

export default CustomInput;