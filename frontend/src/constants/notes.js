export const getRandomDate = () => {
  const startDate = new Date('2022-01-01');
  const endDate = new Date('2022-12-31');
  const timeDiff = endDate.getTime() - startDate.getTime();
  const randomTime = Math.random() * timeDiff;
  const randomDate = new Date(startDate.getTime() + randomTime);
  const last = randomDate.toLocaleDateString()
  return last;
}

export const codeExample = `import { javascript } from '@codemirror/lang-javascript';
import { classname } from '@uiw/codemirror-extensions-classname';
import { tokyoNightInit } from '@uiw/codemirror-theme-tokyo-night';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import React from 'react';
import { editorStyles } from './constants';

const CodeEditor = ({ size, editable = false }) => {
  const [value, setValue] = React.useState("");
  const onChange = React.useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);

  const themeDemo = EditorView.baseTheme({
    '&dark .highlighted': {
      backgroundColor: '#6d4da6',
      mixBlendMode: 'multiply',
    },
    });
`

export const folderList = [
  {
    date: getRandomDate(),
    title: "Parentfdfdfsdfgfdf Note2",
    description: "this is the description of the folder",
    public: true,
    notes: [
      {
        id: 'first',
        title: "Random title",
        description: "Here's a description of this first note.",
        date: getRandomDate(),
        public: false,
        folder: null,
        code: codeExample,
        entries: [
          {
            lineNumbers: [2, 3, 4],
            content: 'This note is for line 2,3,4'
          },
          {
            lineNumbers: [4, 9, 14],
            content: 'This is for line 4, 9, 14'
          }
        ]
      },
    ],
  },
]

export const noteList = [
  {
    id: 'first',
    title: "Random title",
    description: "Here's a description of this first note.",
    date: getRandomDate(),
    public: false,
    folder: null,
    code: codeExample,
    entries: [
      {
        lineNumbers: [2, 3, 4],
        content: 'This note is for line 2,3,4'
      },
      {
        lineNumbers: [4, 9, 14],
        content: 'This is for line 4, 9, 14'
      }
    ]
  },
]