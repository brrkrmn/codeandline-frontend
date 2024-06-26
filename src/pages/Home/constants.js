export const menuListData = {
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
          title: 'NextUI ScrollShadow'
        },
        {
          id: 'n3',
          title: 'CodeMirror custom lines'
        },
      ]
    },
    {
      id: 'f2',
      title: 'Full Stack Open',
      notes: [
        {
          id: 'n5',
          title: 'REST'
        }
      ]
    }
  ]
}

export const foldersSelectData = [
  {
    id: 'f1',
    title: 'UI',
  },
  {
    id: 'f2',
    title: 'Full Stack Open'
  }
]

export const folderCardData = [
  {
    id: 'f2',
    title: 'UI',
    description: 'Styling components',
    notes: ['1', '2'],
    public: false,
    mock: true,
    date: 'May 2'
  },
  {
    id: 'f1',
    title: 'Full Stack Open',
    description: 'Working with backend',
    notes: ['1'],
    public: false,
    mock: true,
    date: 'March 24'
  },
]