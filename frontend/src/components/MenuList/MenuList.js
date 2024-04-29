import { ScrollShadow } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import icons from "../../assets/icons";
import { H5 } from "../../components/Typography/Typography";
import { menuItemStyles, selectedItemStyle } from "./constants";

const MenuList = () => {
  const id = useParams().id
  const notes = useSelector((state) => state.notes)
  const folders = useSelector((state) => state.folders)

  const noteItem = (note) => {
    return (
      <Link
        to={`/note-overview/${note.id}`}
        className={`${menuItemStyles} ${note.id === id && selectedItemStyle}`}
      >
        {icons.arrowDownRight}
        <span className="truncate">{note.title}</span>
      </Link>
    )
  }

  const folderItem = (folder) => {
    return (
      <>
        <Link
          to={`/folder-overview/${folder.id}`}
          className={`${menuItemStyles} ${folder.id === id && selectedItemStyle}`}
        >
          {icons.folder}
          <span className="truncate">{folder.title}</span>
        </Link>
        <div className="flex flex-col gap-2 ml-6">
          {folder.notes?.map(note => noteItem(note))}
        </div>
      </>
    )
  }

  return (
    <ScrollShadow
      hideScrollBar
      className="tablet:fixed pl-6 tablet:pl-0 max-h-[600px] pb-14"
    >
      <H5 className="text-foreground-primary font-thin mb-4">My Notes</H5>
      <div className="flex flex-col gap-2 mb-4 w-[250px] text-foreground-dark">
        {notes
          .filter(note => note.folder === null)
          .map(note => noteItem(note))}
      </div>
      <div className="w-[250px] text-foreground-dark flex flex-col gap-2 border-t-1 border-divider pt-4">
        {folders.map(folder => folderItem(folder))}
      </div>
    </ScrollShadow>
  )
}

export default MenuList;
