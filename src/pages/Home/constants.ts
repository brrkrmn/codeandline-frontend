import { MockFolder, MockFoldersSelectItem, MockMenuList } from "../../types"

export const menuListData: MockMenuList = {
  notes: [
    {
      id: 'n1',
      title: 'Side Effects',
      folder: null
    },
    {
      id: 'n2',
      title: 'Async Await',
      folder: null,
    },
    {
      id: 'n3',
      title: 'CodeMirror custom lines',
      folder: 'f1'
    },
    {
      id: 'n4',
      title: 'NextUI ScrollShadow',
      folder: 'f1'
    },
    {
      id: 'n5',
      title: 'REST',
      folder: 'f2'
    }
  ],
  folders: [
    {
      id: 'f1',
      title: 'UI',
      notes: [
        {
          id: 'n4',
          title: 'NextUI ScrollShadow',
          folder: ""
        },
        {
          id: 'n3',
          title: 'CodeMirror custom lines',
          folder: ""
        },
      ]
    },
    {
      id: 'f2',
      title: 'Full Stack Open',
      notes: [
        {
          id: 'n5',
          title: 'REST',
          folder: ""
        }
      ]
    }
  ]
}

export const foldersSelectData: MockFoldersSelectItem[] = [
  {
    id: 'f1',
    title: 'UI',
  },
  {
    id: 'f2',
    title: 'Full Stack Open'
  }
]

export const folderCardData: MockFolder[] = [
  {
    id: 'f2',
    title: 'UI',
    description: 'Styling components',
    date: 'May 2',
    public: false,
    notes: ['1', '2'],
    mock: true,
  },
  {
    id: 'f1',
    title: 'Full Stack Open',
    description: 'Working with backend',
    date: 'March 24',
    public: false,
    notes: ['1'],
    mock: true,
  },
]