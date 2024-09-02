import { ScrollShadow } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../context/appContext/appProvider';
import { Folder, Note } from '../../types';
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
  const [items, setItems] = useState<Note[] | Folder[]>([]);

  useEffect(() => {
    if (type === cardSectionTypes.NOTES) {
      setItems(notesState.toReversed())
    } else if (type === cardSectionTypes.FOLDERS) {
      setItems(foldersState.toReversed())
    }
  }, [type, foldersState, notesState])

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
            <NoteCard note={item as Note} />
          ) : (
            <FolderCard folder={item as Folder} />
          )
        ) : type === cardSectionTypes.NOTES ? (
            <NoteCard />
          ): (
            <FolderCard />
        )
        }
      </ScrollShadow>
    </div>
  )
}

export default CardSection;
