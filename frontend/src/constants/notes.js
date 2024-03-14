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

export const noteList = [
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
    folder: "null",
  },  {
    title: "not so random",
    description: "this one description but not one title",
    date: getRandomDate(),
    public: false,
    folder: null,
  },  {
    title: "this one's a very very very very long titleeeeeeeeeeeeeee",
    description: "this should be okay",
    date: getRandomDate(),
    public: true,
    folder: "null",
  },  {
    title: "heyo what up",
    description: "here's a longgggggggggggggggn description because it takes long to describe this note yeah",
    date: getRandomDate(),
    public: true,
    folder: "null",
  },  {
    title: "Let's go with blabla",
    description: "Here's a description of the last note.",
    date: getRandomDate(),
    public: false,
    folder: "null",
  },
]