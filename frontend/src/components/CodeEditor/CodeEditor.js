import { javascript } from '@codemirror/lang-javascript';
import { classname } from '@uiw/codemirror-extensions-classname';
import { tokyoNightInit } from '@uiw/codemirror-theme-tokyo-night';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import React from 'react';
import { editorStyles } from './constants';

const CodeEditor = ({ size, code, highlightedLine, editable = false }) => {
  const [value, setValue] = React.useState(code);
  const onChange = React.useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);

  const themeDemo = EditorView.baseTheme({
    '&dark .highlighted': {
      backgroundColor: '#6d4da6',
      mixBlendMode: 'multiply',
    },
    });

  const classNameExt = classname({
    add: (lineNumber) => {
      if (lineNumber === highlightedLine) {
        return 'highlighted';
      }
    }
  })

  return (
    <div className={`${editorStyles[size]} border-1 border-divider text-[12px] w-full h-full bg-content1 rounded-lg p-2`}>
      <CodeMirror
        value={value}
        minHeight={size === "screen" ? '300px' : 'auto'}
        maxHeight={size === "screen" ? '80vh' : 'auto'}
        placeholder={"Paste your code here!"}
        onChange={onChange}
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
            selectionMatch: '#ffffff1a'
          },
        })}
        editable={editable}
        basicSetup={{
          drawSelection: false,
          highlightActiveLine: false,
          foldGutter: false,
        }}
      />
    </div>
  )
}

export default CodeEditor;
