import { BreadcrumbItem, Breadcrumbs, ScrollShadow } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import { editorSize } from "../../components/CodeEditor/constants";
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
      <div className="w-full flex flex-col laptop:flex-row justify-center items-start gap-4 max-h-[88vh]">
        <div className="w-full overflow-hidden basis-1/2">
          <Breadcrumbs
            underline="hover"
            size="lg"
            className="mb-2"
            itemClasses={{
              item: "data-[current=true]:text-primary-light"
            }}
          >
            <BreadcrumbItem href="/">{note.folder ? 'Folders' : 'Notes'}</BreadcrumbItem>
            {note.folder && (
              <BreadcrumbItem href={`/folder-overview/${note.folder.id}`}>{note.folder.title}</BreadcrumbItem>
            )}
            <BreadcrumbItem>{note.title}</BreadcrumbItem>
          </Breadcrumbs>
          <CodeEditor
            size={editorSize.screen}
            code={note.code}
            highlightedLine={note.entries[currentNote]?.lineNumbers} />
        </div>
        <ScrollShadow
          size={80}
          className="basis-1/2 mt-8 pb-[50vh] px-4 w-full max-h-[80vh] flex flex-col gap-[50vh] overscroll-none snap-y snap-mandatory"
        >
          {note.entries.map((entry, index) => (
            <TextEditor
              key={entry.id}
              readOnly={true}
              value={entry.content}
              className="h-full pb-20 snap-always snap-center"
              // className={`${currentNote !== index && 'blur'}`}
            />
          ))}
        </ScrollShadow>
      </div>
    )
  }
}

export default Note;