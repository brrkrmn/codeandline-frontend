import { createContext, useContext, useMemo, useState } from "react";
import { Editor, EditorContextValue } from "./editorContext.types";

export const EditorContext = createContext<EditorContextValue>(null);

export const useEditorContext = () => {
  const context = useContext(EditorContext);
  if (context === null) {
    throw new Error("You can only call this hook inside EditorProvider");
  }
  return context;
}

const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [editor, setEditor] = useState<Editor>({
    content: '',
    selectableLines: false,
    selectedLines: []
  })

  const editorValue = useMemo(() => {
    return { editor, setEditor };
  }, [editor])

  return (
    <EditorContext.Provider
      value={{
        editorValue
      }}
    >
      {children}
    </EditorContext.Provider>
  )
}

export default EditorProvider;