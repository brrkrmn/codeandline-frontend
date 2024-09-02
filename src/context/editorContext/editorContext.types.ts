export type EditorContextValue = null | {
  editorValue: {
    editor: Editor,
    setEditor: (data: Editor) => void
  }
}

export type Editor = {
  content: string;
  selectableLines: boolean;
  selectedLines: number[]
}