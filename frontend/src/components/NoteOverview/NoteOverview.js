import { Spacer } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import icons from '../../assets/icons';
import noteService from '../../services/note';
import formatDate from '../../utils/formatDate';
import CodeEditor from '../CodeEditor';
import EntryList from '../EntryList/EntryList';
import { H1, P } from '../Typography';

const NoteOverview = () => {
  const [note, setNote] = useState(null);
  const id = useParams().id

  useEffect(() => {
    const fetchNote = async (id) => {
      try {
        const note = await noteService.getNote(id);
        setNote(note)
      } catch (error) {
        return error
      }
    }
    fetchNote(id);
  }, [id])
  console.log(note?.code.split('\n')[0])
  if (note) {
    return (
      <div>
        <H1 className="text-primary-light font-thin mb-4">{note.title}</H1>
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
  }
}

export default NoteOverview;
