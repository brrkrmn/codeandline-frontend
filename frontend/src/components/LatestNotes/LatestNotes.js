import React from 'react';
import { noteList } from '../../constants/notes';
import NoteCard from '../NoteCard';
import { H5 } from '../Typography/Typography';

const LatestNotes = () => {
  return (
    <div className="w-full">
      <H5 className="text-foreground-primary font-thin mb-4">Latest Notes</H5>
      <div className="flex flex-wrap flex-col justify-start items-center laptop:flex-row">
        {noteList.map(note => (
          <NoteCard note={note} />
        ))}
      </div>
    </div>
  )
}

export default LatestNotes;
