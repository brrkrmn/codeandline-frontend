import { javascript } from '@codemirror/lang-javascript';
import { tokyoNightInit } from '@uiw/codemirror-theme-tokyo-night';
import CodeMirror from '@uiw/react-codemirror';
import React from 'react';

const CodeEditor = () => {
  const [value, setValue] = React.useState("");
  const onChange = React.useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);

  return (
    <div className="border-1 text-[12px] tablet:text-[16px] w-full laptop:w-[600px] overflow-hidden wide:w-[760px] border-divider bg-content1 rounded-lg p-2 transition hover:shadow-small hover:drop-shadow-sm">
      <CodeMirror
        value={value}
        placeholder={"Paste your code here!"}
        height="auto"
        minWidth='630px'
        maxWidth='760px'
        maxHeight='600px'
        minHeight='300px'
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
        // editable={false}
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
