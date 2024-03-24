import { ScrollShadow } from "@nextui-org/react";
import { Link } from "react-router-dom";
import icons from "../../assets/icons";
import { H5 } from "../../components/Typography/Typography";
import { folderList } from "../../constants/notes";

const MenuList = ({ notes }) => {
  return (
    <ScrollShadow
      hideScrollBar
      className="tablet:fixed pl-6 tablet:pl-0 max-h-[600px] pb-14 tablet:overscroll-none"
    >
      <H5 className="text-foreground-primary font-thin mb-4">My Notes</H5>
      <div className="flex flex-col gap-2 mb-4 w-[250px] text-foreground-dark">
        {notes.filter(note => note.folder === null).map(note => (
          <Link to={`/notes/${note.id}`} className="flex items-center gap-2 *:hover:text-primary-light hover:text-primary-light">
            {icons.arrowDownRight}
            <span className="truncate">{note.title}</span>
          </Link>
        ))}
      </div>
      <div className="w-[250px] text-foreground-dark flex flex-col gap-2 border-t-2 border-divider pt-4">
        {folderList.map(folder => (
          <>
            <Link className="flex items-center gap-2 *:hover:text-primary-light hover:text-primary-light">
              {icons.dot}
              <span className="truncate">{folder.title}</span>
            </Link>
            <div className="flex flex-col gap-2">
              {folder.notes.map(note => (
                <Link to={`/notes/${note.id}`} className="ml-6 flex items-center gap-2 *:hover:text-primary-light hover:text-primary-light">
                  {icons.arrowDownRight}
                  <span className="truncate">{note.title}</span>
                </Link>
              ))}
            </div>
          </>
        ))}
      </div>
    </ScrollShadow>
  )
}

export default MenuList;
