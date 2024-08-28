import { Link } from 'react-router-dom';
import icons from "../../assets/icons";
import { Note } from '../../context/appContext/appContext.types';
import CodeEditor from '../CodeEditor/CodeEditor';
import { P } from '../Typography';

type ComponentProps = {
  note?: Note;
  empty?: boolean;
}

const NoteCard = ({ note, empty }: ComponentProps) => {
  if (empty) {
    return (
      <Link to='/create/note' className="flex flex-col p-4 grow-0 shrink-0 w-[240px] wide:w-[280px] h-[314px] rounded-xl border-1 border-border shadow-small transition hover:drop-shadow-sm">
        <div className="border-2 border-dashed border-primary-dark h-full rounded-xl bg-content1 flex flex-col items-center justify-center *:text-5xl *:text-primary-light">
          {icons.create}
          <p className="!text-2xl">
            Create a Note
          </p>
        </div>
      </Link>
    )
  } else {
    return (
      <Link to={`/note-overview/${note?.id}`} className="flex flex-col p-2 grow-0 shrink-0 w-[240px] wide:w-[280px] h-[314px] rounded-xl border-1 border-border shadow-small transition hover:drop-shadow-sm">
        <div className="bg-primary-dark rounded-xl w-full h-[180px]">
          <CodeEditor size="card" code={note?.code} />
        </div>
        <div className="flex flex-col justify-start pl-2 pt-2">
          <P className="text-primary-light line-clamp-1">{note?.title}</P>
          <P variant="small" className="line-clamp-2 text-[16px] font-light">{note?.description}</P>
        </div>
        <div className="flex items-end justify-end mt-auto gap-2 pr-2">
          <P variant="small" className="font-normal text-primary-light">{note?.date}</P>
          <span>{note?.public ? icons.public : icons.private}</span>
        </div>
      </Link>
    )
  }
}

export default NoteCard;
