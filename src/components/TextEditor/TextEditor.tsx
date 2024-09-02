import { debounce } from 'lodash';
import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.snow.css';

type ComponentProps = {
  value: string;
  onChange?: (e: React.ChangeEvent) => void;
  readOnly?: boolean;
  className?: string;
  snow?: boolean;
}

const TextEditor = ({ value, onChange = () => {}, readOnly = false, className, snow = false }: ComponentProps) => {
  const quillRef = useRef<ReactQuill>(null);

  const saveCursorPosition = () => {
    const quill = quillRef.current?.getEditor();
    const selection = quill?.getSelection();
    return selection ? selection.index : null;
  }

  const restoreCursorPosition = (position: number | null) => {
    if (position !== null) {
      const quill = quillRef.current?.getEditor();
      quill?.setSelection(position)
    }
  }

  const handleTextChange = debounce((value) => {
    const position = saveCursorPosition();
    onChange(value);
    restoreCursorPosition(position);
  }, 300)

  return (
    <ReactQuill
      ref={quillRef}
      theme={snow ? 'snow' : 'bubble'}
      value={value}
      onChange={handleTextChange}
      readOnly={readOnly}
      placeholder='Write something ... Select text to access to the toolbar.'
      className={`rounded-lg ${className}`}
      modules={{
        toolbar: [
          { 'header': 1 },
          { 'header': 2 },

          'bold', 'italic', 'underline', 'strike',
          'blockquote', 'code-block',
          'link',
          { 'list': 'ordered' },
          { 'list': 'bullet' },
          { 'list': 'check' },

          { 'color': [] },
          { 'background': [] },
        ]
      }}
    />
  )
}

export default TextEditor;
