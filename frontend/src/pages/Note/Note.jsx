import { BreadcrumbItem, Breadcrumbs, ScrollShadow } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import icons from "../../assets/icons";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import { editorSize } from "../../components/CodeEditor/constants";
import CustomButton from "../../components/CustomButton";
import TextEditor from '../../components/TextEditor';
import useNoteTracker from "../../hooks/useNoteTracker";
import noteService from "../../services/note";

const Note = () => {
  const [note, setNote] = useState(null);
  const id = useParams().id;

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

  const { currentNote, handleNextNote, handlePrevNote } = useNoteTracker(note?.entries.length - 1);

  if (note) {
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
          <BreadcrumbItem href="/">Notes</BreadcrumbItem>
          <BreadcrumbItem>{note.title}</BreadcrumbItem>
        </Breadcrumbs>
        <div className="w-full overflow-hidden basis-1/2">
          <CodeEditor
            size={editorSize.screen}
            code={note.code}
            highlightedLine={note.entries[currentNote]?.lineNumbers} />
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
            <TextEditor readOnly={true} value={note.entries[currentNote]?.content} />
          </ScrollShadow>
          <CustomButton
            disabled={currentNote === note.entries.length - 1 ? true : false}
            onPress={handleNextNote}
            className="max-h-10"
          >
            {icons.arrowDown}
          </CustomButton>
        </div>
      </div>
    )
  }
}

export default Note;