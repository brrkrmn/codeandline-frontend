import { ScrollShadow } from "@nextui-org/react";
import { Link } from "react-router-dom";
import icons from "../../assets/icons";
import { H5 } from "../../components/Typography/Typography";
import { noteList } from "../../constants/notes";

const MenuList = () => {
  return (
    <ScrollShadow
      hideScrollBar
      className="tablet:fixed pl-6 tablet:pl-0 max-h-[600px] pb-14 tablet:overscroll-none"
    >
      <H5 className="text-foreground-primary font-thin mb-4">My Notes</H5>
      <div className="w-[250px] text-foreground-dark flex flex-col gap-2">
        {noteList.map(note => (
          <>
            <Link className="flex items-center gap-2 *:hover:text-primary-light hover:text-primary-light">
              {icons.dot}
              <span className="truncate">{note.name}</span>
            </Link>
            <div className="flex flex-col gap-2">
              {note.child.map(sub => (
                <Link className="ml-6 flex items-center gap-2 *:hover:text-primary-light hover:text-primary-light">
                  {icons.arrowDownRight}
                  <span className="truncate">{sub.name}</span>
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
