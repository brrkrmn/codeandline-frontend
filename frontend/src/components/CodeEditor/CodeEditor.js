import { javascript } from '@codemirror/lang-javascript';
import { classname } from '@uiw/codemirror-extensions-classname';
import { tokyoNightInit } from '@uiw/codemirror-theme-tokyo-night';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import React, { useContext, useEffect } from 'react';
import EditorContext from '../../utils/EditorContext';
import { editorStyles } from './constants';

const CodeEditor = ({ size, code, highlightedLine, editable = false }) => {
  const [value, setValue] = React.useState(code);
  const { editor, setEditor } = useContext(EditorContext);
  const [isEditable, setIsEditable] = React.useState(editable)

  useEffect(() => {
    setValue(code)
  }, [code])

  useEffect(() => {
    if (editor.selectableLines) {
      setIsEditable(false)
    } else {
      setIsEditable(true)
    }
  }, [editor.selectableLines])

  const onChange = React.useCallback((value, viewUpdate) => {
    setValue(value);
    setEditor({
      lineNumber: viewUpdate.state.doc.lines,
      content: value,
    })
  }, []);

  const themeDemo = EditorView.baseTheme({
    '&dark .cm-line': {
      borderRadius: '8px'
    },
    '&dark .highlighted': {
      backgroundColor: '#6d4da6',
      mixBlendMode: 'multiply',
    },
    '&dark .cm-activeLineGutter': {
      color: '#030014',
    },
    '&dark .cm-lineSelectGutter': {
      paddingLeft: '10px',
    },
    '&dark .cm-gutters': {
      display: 'flex',
      flexDirection: 'row-reverse',
      paddingRight: '10px'
    },
    '&dark .selectableLine:hover': {
      backgroundColor: '#6d4da6',
      cursor: 'pointer',
    },
    '&dark .selectedLine': {
      backgroundColor: '#6d4da6',
      cursor: 'pointer',
    }
    });

  const classNameExt = classname({
    add: (lineNumber) => {
      if (highlightedLine?.includes(lineNumber)) {
        return 'highlighted';
      }
      if (editor.selectableLines) {
        return 'selectableLine';
      }
    }
  })

  const onStatistics = (data) => {
    if (editor.selectableLines) {
      console.log(data.line.number)

    }
  }

  return (
    <div className={`${editorStyles[size]} border-1 border-divider text-[12px] w-full h-full bg-content1 rounded-lg p-2`}>
      <CodeMirror
        value={value}
        minHeight={size === "screen" ? '300px' : 'auto'}
        maxHeight={size === "screen" ? '80vh' : 'auto'}
        placeholder={"Paste your code here!"}
        onChange={onChange}
        onStatistics={onStatistics}
        extensions={[
          javascript({ jsx: true }),
          classNameExt,
          themeDemo
        ]}
        theme={tokyoNightInit({
          settings: {
            background: '#100d1e',
            gutterBackground: '#100d1e',
            gutterForeground: '#bf97ff70',
            selection: '#ffffff1a',
            selectionMatch: '#ffffff1a',
            lineHighlight: '#6d4da6'
          },
        })}
        editable={isEditable}
        basicSetup={{
          drawSelection: false,
          highlightActiveLine: false,
          highlightActiveLineGutter: false,
          foldGutter: false,
        }}
      />
    </div>
  )
}

export default CodeEditor;
