import React from 'react';
import { Link } from 'react-router-dom';
import icons from "../../assets/icons";
import CodeEditor from '../CodeEditor/CodeEditor';
import { editorSize } from '../CodeEditor/constants';
import { P } from '../Typography';

const NoteCard = ({ note }) => {
  return (
    <Link to={`note/${note.id}`} className="flex flex-col p-2 grow-0 shrink-0 w-[240px] wide:w-[280px] h-[314px] rounded-xl border-1 border-border shadow-small transition hover:drop-shadow-sm">
      <div className="bg-primary-dark rounded-xl w-full h-[180px]">
        <CodeEditor size={editorSize.card} code={note.code} />
      </div>
      <div className="flex flex-col justify-start pl-2 pt-2">
        <P className="text-primary-light line-clamp-1">{note.title}</P>
        <P variant="small" className="line-clamp-2 text-[16px] font-light">{note.description}</P>
      </div>
      <div className="flex items-end justify-end mt-auto gap-2 pr-2">
        <P variant="tiny" className="font-medium text-foreground-dark">{note.date}</P>
        <span>{note.public ? icons.public : icons.private}</span>
      </div>
    </Link>
  )
}

export default NoteCard;
