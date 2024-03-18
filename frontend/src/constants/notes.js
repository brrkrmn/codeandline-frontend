export const getRandomDate = () => {
  const startDate = new Date('2022-01-01');
  const endDate = new Date('2022-12-31');
  const timeDiff = endDate.getTime() - startDate.getTime();
  const randomTime = Math.random() * timeDiff;
  const randomDate = new Date(startDate.getTime() + randomTime);
  const last = randomDate.toLocaleDateString()
  return last;
}

export const folderList = [
  {
    date: getRandomDate(),
    title: "Parentfdfdfsdfgfdf Note2",
    description: "this is the description of the folder",
    public: true,
    notes: [
      {
        title: "Random title",
        description: "Here's a description of this first note.",
        date: getRandomDate(),
        public: false,
        folder: null,
      },
      {
        title: "okayokayokayokay okayokayokay",
        description: "",
        date: getRandomDate(),
        public: true,
        folder: null,
      },
    ],
  },
  {
    date: getRandomDate(),
    title: "Second folder",
    description: "",
    public: false,
    notes: [
      {
        title: "this one's a very very very very long titleeeeeeeeeeeeeee",
        description: "this should be okay",
        date: getRandomDate(),
        public: true,
        folder: null,
      },  {
        title: "heyo what up",
        description: "here's a longgggggggggggggggn description because it takes long to describe this note yeah",
        date: getRandomDate(),
        public: true,
        folder: null,
      },  {
        title: "Let's go with blabla",
        description: "Here's a description of the last note.",
        date: getRandomDate(),
        public: false,
        folder: null,
      },
    ]
  }
]

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

export const noteList = [
  {
    id: 'first',
    title: "Random title",
    description: "Here's a description of this first note.",
    date: getRandomDate(),
    public: false,
    folder: null,
    code: codeExample,
    notes: [
      {
        line: 2,
        note: 'This note is for line 2'
      },
      {
        line: 4,
        note: 'This is for line 4'
      }
    ]
  },
  {
    id: 'second',
    title: "okayokayokayokay okayokayokay",
    description: "",
    date: getRandomDate(),
    public: true,
    folder: "null",
  },  {
    id: 'third',
    title: "not so random",
    description: "this one description but not one title",
    date: getRandomDate(),
    public: false,
    folder: null,
  }, {
    id: 'fourth',
    title: "this one's a very very very very long titleeeeeeeeeeeeeee",
    description: "this should be okay",
    date: getRandomDate(),
    public: true,
    folder: "null",
  }, {
    id: 'fifth',
    title: "heyo what up",
    description: "here's a longgggggggggggggggn description because it takes long to describe this note yeah",
    date: getRandomDate(),
    public: true,
    folder: "null",
  }, {
    id: 'last',
    title: "Let's go with blabla",
    description: "Here's a description of the last note.",
    date: getRandomDate(),
    public: false,
    folder: "null",
  },
]