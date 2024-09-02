import { BreadcrumbItem, Breadcrumbs, Progress, ScrollShadow } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { useParams } from "react-router-dom";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import TextEditor from '../../components/TextEditor';
import noteService from "../../services/note/note";
import { Note as NoteType } from "../../types";

const Note = () => {
  const [note, setNote] = useState<NoteType>();
  const [currentNote, setCurrentNote] = useState(0);
  const id = useParams().id as string

  useEffect(() => {
    const fetchNote = async (id: string) => {
      try {
        const note = await noteService.getNote(id);
        setNote(note)
      } catch (error) {
        return error
      }
    }
    fetchNote(id);
  }, [id])

  const handleOnViewChange = (inView: boolean, entry: IntersectionObserverEntry) => {
    if (inView) {
      const index = note?.entries.findIndex(ent => ent._id === entry.target.id)
      if (index) {
        setCurrentNote(index)
      }
    }
  }

  if (note) {
    return (
      <div className="w-full flex flex-col laptop:flex-row justify-center items-start gap-4 max-h-[88vh]">
        <Progress
          aria-label="Scroll progress"
          value={((currentNote + 1)/ note.entries?.length) * 100}
          size="sm"
          radius="none"
          className="fixed top-[88px] z-30"
          classNames={{
            indicator: "bg-gradient-to-r from-background to-[#6d4da6] to-[40%] rounded-xl"
          }}
        />
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
            size="screen"
            code={note.code}
            highlightedLine={note.entries[currentNote]?.lineNumbers} />
        </div>
        <ScrollShadow
          size={80}
          className="basis-1/2 mt-8 px-4 w-full max-h-[80vh] flex flex-col overscroll-none snap-y snap-mandatory hidden-scrollbar"
        >
          {note.entries.map((entry, index) => (
            <InView
              className="h-full mb-[70vh] py-10 snap-always snap-start"
              key={index}
              id={entry._id}
              onChange={handleOnViewChange}
            >
              <TextEditor
                readOnly={true}
                value={entry.content}
              />
            </InView>
          ))}
        </ScrollShadow>
      </div>
    )
  } else return null
}

export default Note;