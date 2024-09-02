import { Divider } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import icons from '../../assets/icons';
import folderService from '../../services/folder/folder';
import { Folder } from '../../types';
import formatDate from '../../utils/formatDate';
import FolderDropdown from '../FolderDropdown/FolderDropdown';
import NoteCard from '../NoteCard';
import { H1, H5, P } from '../Typography';

const FolderOverview = () => {
  const [folder, setFolder] = useState<Folder>();
  const id = useParams().id as string

  useEffect(() => {
    const fetchFolder = async (id: string) => {
      try {
        const folder = await folderService.getFolder(id);
        setFolder(folder)
      } catch (error) {
        return error
      }
    }
    fetchFolder(id);
  }, [id])

  if (folder) {
    return (
      <div>
        <div className="flex justify-between">
          <H1 className="text-primary-light font-thin">{folder.title}</H1>
          <FolderDropdown />
        </div>
        <P
          className="my-4"
          variant="big"
        >
          {folder.description}
        </P>
        <div className="flex items-center justify-between mt-auto gap-2">
          <P variant="small" className="*:text-primary-light flex text-primary-light items-center mt-auto justify-center text-lg font-medium border-1 border-primary-dark rounded-lg h-8 w-10 shadow-small">
          {folder.notes?.length}
          {icons.note}
          </P>
          <P variant="small" className="font-medium text-primary-light ml-auto">{formatDate(folder.date)}</P>
          <span className="*:text-primary-light">{folder.public ? icons.public : icons.private}</span>
        </div>
        <Divider className="mt-2 mb-6" />
        <div>
          <H5 className="font-thin mb-6 text-primary-light">Notes</H5>
          <div className="flex gap-4 flex-wrap">
            {folder.notes?.map(note => (
              <NoteCard note={note} />
            ))}
          </div>
        </div>
      </div>
    )
  } else return null
}

export default FolderOverview;

