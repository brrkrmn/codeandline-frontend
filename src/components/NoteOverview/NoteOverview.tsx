import { Spacer } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import icons from '../../assets/icons';
import noteService from '../../services/note/note';
import { Note } from '../../types';
import formatDate from '../../utils/formatDate';
import CodeEditor from '../CodeEditor';
import CustomButton from '../CustomButton';
import EntryList from '../EntryList/EntryList';
import NoteDropdown from '../NoteDropdown/NoteDropdown';
import { H1, P } from '../Typography';

const NoteOverview = () => {
  const [note, setNote] = useState<Note>();
  const id = useParams().id as string

  useEffect(() => {
    const fetchNote = async (id: string) => {
      try {
        const note = await noteService.getNote(id);
        setNote(note)
      } catch (error) {
        return error
      }
    }
    fetchNote(id);
  }, [id])

  if (note) {
    return (
      <div>
        <div className="flex justify-between gap-4">
          <H1 className="text-primary-light font-thin mb-4">{note.title}</H1>
          <Link to={`/notes/${note.id}`} className="ml-auto">
            <CustomButton
              className="px-2 mt-2 min-w-10 h-10 border-primary-dark">
              {icons.play}
            </CustomButton>
          </Link>
          <NoteDropdown />
        </div>
        <P
          className="my-4"
          variant="big"
        >
          {note.description}
        </P>
        <div className="mb-4 flex items-center justify-between mt-auto gap-2">
          {note.folder && (
            <Link
              to={`/folder-overview/${note.folder?.id}`}
              className="px-2 flex gap-2 flex-nowrap text-primary-light items-center mt-auto justify-center text-lg font-medium border-1 border-primary-dark rounded-lg h-8 shadow-small transition hover:drop-shadow-sm">
              {icons.folder}
              {note.folder?.title}
            </Link>
          )}
          <P variant="small" className="font-medium text-primary-light ml-auto">{formatDate(note.date)}</P>
          <span className="*:text-primary-light">{note.public ? icons.public : icons.private}</span>
        </div>
        <CodeEditor code={note.code} size="screen" />
        <Spacer y={10} />
        <EntryList entries={note.entries} code={note.code} />
      </div>
    )
  } else return null
}

export default NoteOverview;
