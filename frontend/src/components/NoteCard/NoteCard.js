import React from 'react';

const NoteCard = ({ note }) => {
  return (
    <div className="border-1 border-primary-light w-full laptop:basis-1/2 wide:basis-1/3 aspect-[5/3]">
      {note.name}
    </div>
  )
}

export default NoteCard;
