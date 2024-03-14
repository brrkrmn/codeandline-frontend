import { ScrollShadow } from '@nextui-org/react';
import React from 'react';
import { noteList } from '../../constants/notes';
import NoteCard from '../NoteCard';
import { H5 } from '../Typography/Typography';

const LatestNotes = () => {
  return (
    <div>
      <H5 className="text-foreground-primary font-thin mb-4">Latest</H5>
      <ScrollShadow
        orientation="horizontal"
        className="flex justify-start items-center gap-4"
      >
        {noteList.map(note => (
          <NoteCard note={note} />
        ))}
      </ScrollShadow>
    </div>
  )
}

export default LatestNotes;
