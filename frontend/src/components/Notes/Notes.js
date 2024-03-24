import { ScrollShadow } from '@nextui-org/react';
import React from 'react';
import NoteCard from '../NoteCard';
import { H2 } from '../Typography/Typography';

const Notes = ({ notes, title = "Notes" }) => {
  return (
    <div>
      <H2 className="text-foreground-primary font-thin mb-4">{title}</H2>
      <ScrollShadow
        orientation="horizontal"
        className="flex justify-start items-center gap-4"
      >
        {notes.map(note => (
          <NoteCard note={note} />
        ))}
      </ScrollShadow>
    </div>
  )
}

export default Notes;
