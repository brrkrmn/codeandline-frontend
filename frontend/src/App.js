import { NextUIProvider } from '@nextui-org/react';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Toast from './components/Toast/Toast';
import AuthenticatedPageWrapper from './layouts/AuthenticatedPageWrapper';
import PageWrapper from './layouts/PageWrapper';
import Auth from './pages/Auth/Auth';
import Create from './pages/Create/Create';
import CreateFolder from './pages/Create/CreateFolder';
import CreateNote from './pages/Create/CreateNote';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Note from './pages/Note/Note';
import Profile from './pages/Profile/Profile';
import { initializeLogin } from './reducers/userReducer';
import EditorContext from './utils/EditorContext';

function App () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editor, setEditor] = useState({
    content: '',
    selectableLines: false,
    selectedLines: []
  })

  const editorValue = useMemo(() => {
    return { editor, setEditor };
  }, [editor])

  useEffect(() => {
    dispatch(initializeLogin())
  }, [])

  const currentUser = useSelector((state) => state.user)

  return (
    <NextUIProvider navigate={navigate}>
      <EditorContext.Provider value={editorValue}>
        <main className='dark text-foreground bg-background min-h-screen'>
          <Routes>
            {!currentUser ? (
              <>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/login" element={<PageWrapper background={true}><Auth /></PageWrapper>} />
                <Route path="/signup" element={<PageWrapper background={true}><Auth /></PageWrapper>} />
              </>
            ) : (
                <>
                  <Route path="/login" element={<Navigate to="/" />} />
                  <Route path="/signup" element={<Navigate to="/" />} />

                  <Route path="/" element={<AuthenticatedPageWrapper><Dashboard /></AuthenticatedPageWrapper>}/>
                  <Route path="/dashboard" element={<AuthenticatedPageWrapper><Dashboard /></AuthenticatedPageWrapper>}/>
                  <Route path="/notes/:id" element={<AuthenticatedPageWrapper><Note /></AuthenticatedPageWrapper>} />
                  <Route path="/folder-overview/:id" element={<AuthenticatedPageWrapper><Dashboard /> </AuthenticatedPageWrapper>} />
                  <Route path="/note-overview/:id" element={<AuthenticatedPageWrapper><Dashboard /> </AuthenticatedPageWrapper>} />

                  <Route path="/create" element={<AuthenticatedPageWrapper><Create /></AuthenticatedPageWrapper>} />
                  <Route path="/create/note" element={<AuthenticatedPageWrapper><CreateNote /></AuthenticatedPageWrapper>} />
                  <Route path="/create/folder" element={<AuthenticatedPageWrapper><CreateFolder /></AuthenticatedPageWrapper>} />

                  <Route path="/edit-note/:id" element={<AuthenticatedPageWrapper><CreateNote /></AuthenticatedPageWrapper>} />
                  <Route path="/edit-folder/:id" element={<AuthenticatedPageWrapper><CreateFolder /></AuthenticatedPageWrapper>} />

                  <Route path="/explore" element={<AuthenticatedPageWrapper>explore page</AuthenticatedPageWrapper>} />
                  <Route path="/profile" element={<AuthenticatedPageWrapper><Profile /></AuthenticatedPageWrapper>} />
                  <Route path="/help" element={<AuthenticatedPageWrapper>help page</AuthenticatedPageWrapper>} />
                </>
            )}
          </Routes>
          <Toast />
        </main>
      </EditorContext.Provider>
    </NextUIProvider>
  );
}

export default App;
