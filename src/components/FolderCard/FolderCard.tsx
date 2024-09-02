import { Divider } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import icons from "../../assets/icons";
import { Folder, MockFolder } from '../../types';
import { P } from '../Typography';

type ComponentProps = {
  folder?: Folder | MockFolder;
}

const FolderCard = ({ folder }: ComponentProps) => {
  if (!folder) {
    return (
      <Link to='/create/folder' className="flex flex-col w-[350px] h-[180px] p-4 grow-0 shrink-0 rounded-xl border-1 border-border shadow-small transition hover:drop-shadow-sm">
        <div className="border-2 border-dashed border-primary-dark h-full rounded-xl bg-content1 flex flex-col items-center justify-center *:text-5xl *:text-primary-light">
          {icons.create}
          <p className="!text-2xl">
            Create a Folder
          </p>
        </div>
      </Link>
    )
  } else {
    return (
      <Link to={folder.mock ? "#" : `/folder-overview/${folder.id}`} className="flex flex-col w-[350px] h-[140px] p-4 grow-0 shrink-0 rounded-xl border-1 border-border shadow-small transition hover:drop-shadow-sm">
        <P className="text-primary-light line-clamp-1">{folder.title}</P>
        <Divider className="my-1" />
        <P variant="small" className="line-clamp-1 text-[16px] font-thin">{folder.description}</P>
        <div className="flex items-end justify-between mt-auto gap-2">
          <P variant="tiny" className="text-primary-light flex items-center gap-1 px-2 mt-auto justify-center text-lg font-medium border-1 border-divider rounded-lg h-8 shadow-small">
            {folder.notes?.length}
            {icons.note}
          </P>
          <P variant="tiny" className="font-normal text-primary-light ml-auto">{folder.date}</P>
          <span>{folder.public ? icons.public : icons.private}</span>
        </div>
      </Link>
    )
  }
}

export default FolderCard;
