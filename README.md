<h1 align="center">
  <br>
  <img src="https://github.com/brrkrmn/codeandline-frontend/assets/92817363/8f78f2bc-25e8-49eb-a614-b8232cf76bd4" alt="Code and line logo" width="80">
  <br>
  Code&Line
  <br>
</h1>

<p align="center">
  <a href="https://github.com/brrkrmn/codeandline-frontend/stargazers">
    <img src="https://img.shields.io/github/stars/brrkrmn/codeandline-frontend" alt="Code and line's github stars />
  </a>
  <a href="https://buymeacoffee.com/berrakaraman">
    <img src="https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee" alt="Berra Karaman's Buymeacoffee link" />
  </a>
  <a>
    <img src="https://vercelbadge.vercel.app/api/brrkrmn/codeandline-frontend?style=plastic" />
  </a>
</p>

Code&Line is a note-taking app designed for developers to provide a more detailed understanding of their code. Its core feature allows users to target specific code lines with each note, aiming for a line-by-line explanation of the snippet.

<div align="center">
  <img width="200" src="https://github.com/brrkrmn/codeandline-frontend/assets/92817363/a6b0fbee-ec57-4af5-93be-ce10a2f07eb9"/>
  <img width="200" src="https://github.com/brrkrmn/codeandline-frontend/assets/92817363/6ec46148-ce1d-4454-a67d-6fa8a24c9e2d"/>
  <img width="200" src="https://github.com/brrkrmn/codeandline-frontend/assets/92817363/976c5909-f5d7-4d53-b6d2-b20fc197321d"/>
</div>
<br>

<p align="center">
  <a href="https://www.producthunt.com/posts/code-line?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-code&#0045;line" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=458788&theme=light" alt="Code&#0038;Line - Note&#0045;taking&#0032;app&#0032;for&#0032;developers | Product Hunt" width="200" /></a>
</p>

<br>

## Table of Contents
- [Development Setup](#development-setup)
- [Contributing](#contributing)
- [Ideas for Improvement](#ideas-for-improvement)
- [Resources](#resources)
- [License](#license)

<br>

## Development Setup

To clone and run this project, you'll need Git and Node.js (which comes with npm) installed on your computer.

<br>

### Setting up Frontend

1. **Clone frontend repo**
```bash
git clone https://github.com/brrkrmn/codeandline-frontend.git
```
2. **Go into the repo**
```bash
cd codeandline-frontend
```
3. **Install dependencies**
```bash
npm install
```
4. **Run the app**
```bash
npm start
```

<br>

### Setting up Backend

1. **Clone the repo**
```bash
git clone https://github.com/brrkrmn/codeandline-backend.git
```
2. **Go into the repo**
```bash
cd codeandline-backend
```
3. **Install dependencies**
```bash
npm install
```
4. **Set up environment variables**
   * Create `.env` file in the root of the project
   * Include the following variables in your `.env`
    ```bash
    PORT = 3001
    MONGODB_URI = <your mongodb uri>
    TEST_MONGODB_URI = <your test database uri>
    SECRET = <your secret>
    ``` 
5. **Run the server**
```bash
npm run dev
```

<br>

## Contributing

Code&Line is an open-source project, and your help is always welcome! I encourage you to go through the [Contribution Guidelines](CONTRIBUTING.md) and check out the [Ideas for Improvement](#ideas-for-improvement) section.

<br>

## Ideas for Improvement
- Display verification modal on delete (folders and notes)
- Password reset
- Profile page
- Add other authentication
- Add Light theme
- Add tests
- Auto save (folders and notes)
- Public notes and folders
  - upvoting
  - explore page

<br>

## Resources

* **Landing Page Animations**
  - [Framer Motion - useTransform docs](https://www.framer.com/motion/use-transform/)
  - [Framer Motion - useScroll docs](https://www.framer.com/motion/use-scroll/)
* **Code Editor Styling and Events**
  - [Code Mirror ClassName Extension](https://uiwjs.github.io/react-codemirror/#/extensions/classname)
  - [Code Mirror Events Extension](https://uiwjs.github.io/react-codemirror/#/extensions/classname)
  - [Code Mirror styling docs](https://codemirror.net/examples/styling/)
  - [Code Mirror custom gutter](https://codemirror.net/examples/gutter/)
* **Text Editor**
  - [React Quill docs](https://quilljs.com/docs/quickstart)

<br>

## License

Licensed under the MIT License.
