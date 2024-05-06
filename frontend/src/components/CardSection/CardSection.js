import { ScrollShadow } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FolderCard from '../FolderCard';
import NoteCard from '../NoteCard';
import { H2 } from '../Typography';
import { cardSectionTitles, cardSectionTypes } from './constants';

const CardSection = ({ type, noTitle = false }) => {
  const [items, setItems] = useState([]);
  const notes = useSelector((state) => state.notes)
  const folders = useSelector((state) => state.folders)

  useEffect(() => {
    if (type === cardSectionTypes.NOTES) {
      setItems(notes.toReversed())
    } else if (type === cardSectionTypes.FOLDERS) {
      setItems(folders.toReversed())
    }
  }, [type, folders, notes])

  return (
    <div>
      {!noTitle && (
        <H2 className="text-foreground-primary font-thin mb-4">
          {cardSectionTitles[type]}
        </H2>
      )}
      <ScrollShadow
        orientation='horizontal'
        className="flex justify-start items-center gap-4 hidden-scrollbar"
      >
        {items.map(item =>
          type === cardSectionTypes.NOTES ? (
            <NoteCard note={item} />
          ) : (
            <FolderCard folder={item} />
          )
        )}
      </ScrollShadow>
    </div>
  )
}

export default CardSection;
