import { Input } from '@nextui-org/react';
import { inputProps } from './constants';

type ComponentProps = {
  type: "title" | "noteDescription" | "folderDescription";
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent) => void;
  onBlur: (e: React.FocusEvent) => void;
  value?: string;
  className?: string;
}

function TextInput ({ type, id, name, onChange, onBlur, value, className }: ComponentProps) {
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
          'h-fit',
          'border-none',
          '!cursor-text'
        ],
      }}

    />
  )
}

export default TextInput;
