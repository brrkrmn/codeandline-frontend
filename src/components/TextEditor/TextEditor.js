import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ name, value, onChange, readOnly = false, className, snow = false }) => {
  return (
    <ReactQuill
      theme={snow ? 'snow' : 'bubble'}
      name={name}
      value={value}
      onChange={onChange}
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
