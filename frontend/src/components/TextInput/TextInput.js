import { Input } from '@nextui-org/react';
import React from 'react';
import { inputProps } from './constants';

function TextInput ({ type, id, name, onChange, onBlur, value, errorMessage, className }) {
  return (
    <Input
      id={id}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      type='text'
      variant='bordered'
      placeholder={inputProps[type].placeholder}
      className={className}
      classNames={{
        input: [
          `${inputProps[type].styles}`,
          'bg-transparent',
          'text-foreground-primary',
          'placeholder:text-foreground-placeholder',
        ],
        inputWrapper: [
          'border-none',
          '!cursor-text'
        ],
      }}

    />
  )
}

export default TextInput;
