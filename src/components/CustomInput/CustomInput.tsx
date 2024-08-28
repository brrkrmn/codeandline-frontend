import { Input } from '@nextui-org/react';
import React from 'react';
import icons from '../../assets/icons';
import useToggle from '../../hooks/useToggle';
import CustomButton from '../CustomButton/CustomButton';

type ComponentProps = {
  id: string;
  name: string;
  type: "password" | "text" | "email" | "username";
  label: string;
  onChange: (e: React.ChangeEvent) => void;
  onBlur: (e: React.FocusEvent) => void;
  value: string;
  errorMessage?: string;
  className?: string;
}

function CustomInput ({ id, name, type, label, onChange, onBlur, value, errorMessage, className }: ComponentProps) {
  const { isTrue, handleToggleTrue } = useToggle();

  return (
    <Input
      id={id}
      name={name}
      type={type === "password" ? (isTrue ? "text" : "password") : type}
      label={label}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      errorMessage={errorMessage}
      endContent={type === "password" &&
        <CustomButton
          isIconOnly
          onPress={handleToggleTrue}
          className="shadow-none border-none p-1 min-w-fit h-fit hover:shadow-none hover:border-none"
        >
          {isTrue ? icons.openEye : icons.closedEye}
        </CustomButton>
      }
      className={`rounded-lg text-foreground-dark bg-transparent ${className}`}
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
          'border-1',
          'border-border',
          'group-data-[hover=true]:border-primary-light',
          'group-data-[focus=true]:border-primary-light',
          '!cursor-text'
        ],
      }}
    />
  )
}

export default CustomInput;