import { ScrollShadow } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../context/appContext/appProvider';
import FolderCard from '../FolderCard';
import NoteCard from '../NoteCard';
import { H2 } from '../Typography';
import { cardSectionTitles, cardSectionTypes } from './constants';

type ComponentProps = {
  type: "notes" | "folders";
  noTitle?: boolean;
}
const CardSection = ({ type, noTitle = false }: ComponentProps) => {
  const { notesState, foldersState } = useAppContext();
  const [items, setItems] = useState([]);
  const notes = notesState
  const folders = foldersState

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
        {items.length > 0 ? items.map(item =>
          type === cardSectionTypes.NOTES ? (
            <NoteCard note={item} />
          ) : (
            <FolderCard folder={item} />
          )
        ) : type === cardSectionTypes.NOTES ? (
            <NoteCard empty={true} />
          ): (
            <FolderCard empty={true} />
        )
        }
      </ScrollShadow>
    </div>
  )
}

export default CardSection;
