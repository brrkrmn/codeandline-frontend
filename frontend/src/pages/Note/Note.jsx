import { BreadcrumbItem, Breadcrumbs, ScrollShadow } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import icons from "../../assets/icons";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import { editorSize } from "../../components/CodeEditor/constants";
import CustomButton from "../../components/CustomButton";
import { P } from "../../components/Typography/Typography";
import { noteList } from "../../constants/notes";
import useNoteTracker from "../../hooks/useNoteTracker";

const Note = () => {
  const id = useParams().id;
  const notes = noteList;
  const note = notes.find(n => n.id === id)
  const { currentNote, handleNextNote, handlePrevNote } = useNoteTracker(note.entries?.length - 1);

  return (
    <div className="w-full flex flex-col laptop:flex-row justify-center items-center gap-4">
      <Breadcrumbs
        underline="hover"
        size="lg"
        className="absolute top-[128px] tablet:top-[100px] left-4 tablet:left-16 wide:left-40"
        itemClasses={{
          item: "data-[current=true]:text-primary-light"
        }}
      >
        <BreadcrumbItem>Notes</BreadcrumbItem>
        <BreadcrumbItem>Data Structures</BreadcrumbItem>
      </Breadcrumbs>
      <div className="w-full overflow-hidden basis-1/2">
        <CodeEditor size={editorSize.screen} code={note.code} highlightedLine={note.entries[currentNote].lineNumbers} />
      </div>
      <div className="basis-1/2 px-4 w-full flex flex-col h-[600px] justify-between items-center gap-4">
        <CustomButton
          disabled={currentNote === 0 ? true : false}
          onPress={handlePrevNote}
          className="max-h-10"
        >
          {icons.arrowUp}
        </CustomButton>
        <ScrollShadow size={80} >
          <P variant="big" className="max-h-[600px] mb-2 text-lg tablet:text-2xl">
            {note.entries[currentNote]?.content}
          </P>
        </ScrollShadow>
        <CustomButton
          disabled={currentNote === note.entries.length -1 ? true : false}
          onPress={handleNextNote}
          className="max-h-10"
        >
          {icons.arrowDown}
        </CustomButton>
      </div>
    </div>
  )
}

export default Note;