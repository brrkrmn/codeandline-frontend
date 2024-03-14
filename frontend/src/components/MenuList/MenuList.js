import { ScrollShadow } from "@nextui-org/react";
import { Link } from "react-router-dom";
import icons from "../../assets/icons";
import { H5 } from "../../components/Typography/Typography";

const MenuList = () => {
  const noteList = [
    {name: "Parent Note", child: [{ name: "child note" }]},
    {name: "Parentfdfdfsdfgfdf Note2", child: [{ name: "chiasdasddld note2"}]},
    {name: "asdasdasd", child: [{ name: "child nzzzote3"}]},
    {name: "Parentfsd Note4", child: [{ name: "childasdasdasd note4"}]},
    {name: "ParentadsasasdasdasdasdasdasdasddNote5", child: [{ name: "child note5"}, { name: "aasa"}]},
    { name: "Parentaaa Note6", child: [{ name: "aasa" }] },
    {name: "Parentadsasd Note5", child: [{ name: "child note5"}, { name: "aalalalallalalalalallalalalakdlklkajsdlkajsdklasdsa"}]},
    {name: "Parentadsasd Note5", child: [{ name: "child note5"}, { name: "aasa"}]},
    {name: "Parentadsasd Note5", child: [{ name: "child note5"}, { name: "aasa"}]},
    {name: "Parentadsasd Note5", child: [{ name: "child note5"}, { name: "aasa"}]},
    {name: "Parentadsasd Note5", child: [{ name: "child note5"}, { name: "aasa"}]},
    {name: "Parentadsasd Note5", child: [{ name: "child note5"}, { name: "aasa"}]},
    {name: "Parentadsaasdsdsd Nasdasdasdasdote5", child: [{ name: "child note5"}, { name: "aasa"}]},
    {name: "Parentadsasd Note5", child: [{ name: "child note5"}, { name: "aasa"}]},
    {name: "Parentadsasd Note5", child: [{ name: "child note5"}, { name: "aasa"}]},
    {name: "Parentadsasd Note5", child: [{ name: "child note5"}, { name: "aasa"}]},
    {name: "Parentadsasd Note5", child: [{ name: "child note5"}, { name: "aasa"}]},
    {name: "Parentadsasd Note5", child: [{ name: "child note5"}, { name: "aasa"}]},
  ]

  return (
    <ScrollShadow
      hideScrollBar
      className="fixed float-right max-h-[600px] pb-14 overscroll-none"
    >
      <H5 className="text-foreground-primaryß font-thin mb-4">My Notes</H5>
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
