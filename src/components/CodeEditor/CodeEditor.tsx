import { javascript } from '@codemirror/lang-javascript';
import { classname } from '@uiw/codemirror-extensions-classname';
import * as events from '@uiw/codemirror-extensions-events';
import { tokyoNightInit } from '@uiw/codemirror-theme-tokyo-night';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useEditorContext } from '../../context/editorContext/editorProvider';
import { editorSize, editorStyles } from './constants';

type ComponentProps = {
  size: "card" | "screen";
  code: string;
  highlightedLine?: number[]
}

interface CMHTMLElement extends HTMLElement {
  cmView?: {
    parent: {
      dom: HTMLElement;
    }
  }
}

const CodeEditor = ({ size, code, highlightedLine }: ComponentProps) => {
  const [value, setValue] = React.useState(code);
  const { editor, setEditor } = useEditorContext().editorValue;
  const [isEditable, setIsEditable] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    setEditor({
      content: '',
      selectableLines: false,
      selectedLines: [],
    })
  }, [location])

  useEffect(() => {
    setValue(code)
  }, [code])

  useEffect(() => {
    if (location.pathname === '/create/note' || location.pathname.split('/')[1] === 'edit-note') {
      if (editor.selectableLines) {
        setIsEditable(false)
      } else {
        setIsEditable(true)
      }
    } else {
      setIsEditable(false)
    }
  }, [editor.selectableLines])

  const onChange = React.useCallback((value: string) => {
    setValue(value);
    setEditor({
      ...editor,
      content: value,
    })
  }, []);

  const themeExt = EditorView.baseTheme({
    '&dark .cm-line': {
      borderRadius: '8px',
      transition: 'all 300ms ease'
    },
    '&dark .highlighted': {
      backgroundColor: '#6d4da6',
      mixBlendMode: 'multiply',
      cursor: 'pointer',
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
    });

  const classNameExt = classname({
    add: (lineNumber) => {
      const numberClass = `lineNumber-${lineNumber}`
      if (editor.selectableLines && highlightedLine?.includes(lineNumber)) {
        return `${numberClass} selectableLine highlighted`;
      }
      if (highlightedLine?.includes(lineNumber)) {
        return `${numberClass} highlighted`;
      }
      if (editor.selectableLines) {
        return `${numberClass} selectableLine`;
      }
    }
  })

  const eventExt = events.dom({
    click: (evn: MouseEvent) => {
      if ((location.pathname === '/create/note' && editor.selectableLines) || (location.pathname.split('/')[1] === 'edit-note' && editor.selectableLines)) {
        let clickedLine
        const target = evn.target as CMHTMLElement
        if (target.classList.contains('selectableLine')) {
          clickedLine = target
        }
        else if (target.cmView?.parent.dom.classList.contains('selectableLine')) {
          clickedLine = target.cmView.parent.dom
        }

        const clickedLineNumber = Number(clickedLine?.classList[0].split('-')[1])

        if (clickedLineNumber) {
          if (editor.selectedLines.includes(clickedLineNumber)) {
            const numbers = editor.selectedLines.filter(line => line !== clickedLineNumber)
            setEditor({
              ...editor,
              selectedLines: numbers
            })
          } else {
            setEditor({
              ...editor,
              selectedLines: [...editor.selectedLines, clickedLineNumber]
            })
          }
        }
      }
    },
  });

  return (
    <div className={`${editorStyles[size]} border-1 border-divider text-[12px] w-full h-full bg-content1 rounded-lg p-2`}>
      <CodeMirror
        data-testid="code-editor"
        value={value}
        minHeight={size === editorSize.screen ? '300px' : 'auto'}
        maxHeight={size === editorSize.screen ? '80vh' : 'auto'}
        placeholder={"Paste your code here! \n"}
        onChange={onChange}
        extensions={[
          javascript({ jsx: true }),
          classNameExt,
          themeExt,
          eventExt,
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
