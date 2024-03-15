import { javascript } from '@codemirror/lang-javascript';
import { tokyoNightInit } from '@uiw/codemirror-theme-tokyo-night';
import CodeMirror from '@uiw/react-codemirror';
import React from 'react';
import { editorStyles } from './constants';

const CodeEditor = ({ size, editable = false }) => {
  const [value, setValue] = React.useState("");
  const onChange = React.useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);

  return (
    <div className={`${editorStyles[size]} border-1 border-divider text-[12px] w-full h-full bg-content1 rounded-lg p-2`}>
      <CodeMirror
        value={value}
        minHeight={size === "screen" ? '300px' : 'auto'}
        maxHeight={size === "screen" ? '80vh' : 'auto'}
        placeholder={"Paste your code here!"}
        onChange={onChange}
        extensions={[javascript({ jsx: true })]}
        theme={tokyoNightInit({
          settings: {
            background: '#100d1e',
            gutterBackground: '#100d1e',
            gutterForeground: '#bf97ff70',
            selection: '#7947c970'
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
