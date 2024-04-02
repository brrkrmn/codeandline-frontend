import { Checkbox, CheckboxGroup } from '@nextui-org/react';
import React from 'react';

const AddNoteInput = ({ items }) => {
  return (
    <>
      <CheckboxGroup
        label="Select lines"
      >
        {items?.map(item => (
          <Checkbox value={item.number}>{item.number}</Checkbox>
        ))}
      </CheckboxGroup>
    </>
  )
}

export default AddNoteInput;
