import { ScrollShadow } from "@nextui-org/react";
import { Link, useParams } from "react-router-dom";
import icons from "../../assets/icons";
import { useAppContext } from '../../context/appContext/appProvider';
import { Folder, MockMenuFolder, MockMenuList, MockMenuNote, Note } from "../../types";
import { menuItemStyles, selectedItemStyle } from "./constants";

type ComponentProps = {
  data?: MockMenuList;
}

const MenuList = ({ data }: ComponentProps) => {
  const { notesState, foldersState } = useAppContext();
  const id = useParams().id
  const notes = notesState
  const folders = foldersState

  const noteItem = (note: Note | MockMenuNote) => {
    return (
      <Link
        key={note.id}
        to={data ? "#" : `/note-overview/${note.id}`}
        className={`${menuItemStyles} ${note.id === id && selectedItemStyle}`}
      >
        {icons.arrowDownRight}
        <span className="truncate">{note.title}</span>
      </Link>
    )
  }

  const folderItem = (folder: Folder | MockMenuFolder) => {
    return (
      <div key={folder.id}>
        <Link
          to={data ? "#" : `/folder-overview/${folder.id}`}
          className={`${menuItemStyles} ${folder.id === id && selectedItemStyle} mb-2`}
        >
          {icons.folder}
          <span className="truncate">{folder.title}</span>
        </Link>
        <div className="flex flex-col gap-2 ml-6">
          {folder.notes?.map(note => noteItem(note))}
        </div>
      </div>
    )
  }

  if (!data && notes.length === 0 && folders.length === 0) {
    return null
  } else {
    return (
      <ScrollShadow
        hideScrollBar
        className={`${data ? 'text-sm w-fit h-[300px]' : 'tablet:fixed pl-6 tablet:pl-0 max-h-[600px] pb-14'}`}
      >
        <p className="text-md text-foreground-dark mb-4 pt-4">Notes</p>
        <div className={`flex flex-col gap-2 mb-4 ${data ? 'w-fit' : 'w-[250px]'} text-foreground-dark`}>
          {data ? data.notes
            .filter(note => note.folder === null)
            .map(note => noteItem(note))
            : notes
              .filter(note => note.folder === null)
              .map(note => noteItem(note))}
        </div>
        <p className="text-md text-foreground-dark mb-4 pt-4">Folders</p>
        <div className={`${data ? 'w-fit' : 'w-[250px]'} text-foreground-dark flex flex-col gap-2`}>
          {data ? data.folders.map(folder => folderItem(folder))
            : folders
              .map(folder => folderItem(folder))}
        </div>
      </ScrollShadow>
    )
  }
}

export default MenuList;
