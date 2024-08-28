import { NextUIProvider } from '@nextui-org/react';
import React, { useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Toast from './components/Toast/Toast';
import { useAppContext } from './context/appProvider';
import AuthenticatedPageWrapper from './layouts/AuthenticatedPageWrapper';
import PageWrapper from './layouts/PageWrapper';
import Auth from './pages/Auth/Auth';
import Create from './pages/Create/Create';
import CreateFolder from './pages/Create/CreateFolder';
import CreateNote from './pages/Create/CreateNote';
import Dashboard from './pages/Dashboard/Dashboard';
import Explore from './pages/Explore/Explore';
import Home from './pages/Home/Home';
import Note from './pages/Note/Note';
import Profile from './pages/Profile/Profile';
import EditorContext from './utils/EditorContext';

function App () {
  const { initializeLogin, userState } = useAppContext()
  const navigate = useNavigate();
  const [editor, setEditor] = useState({
    content: '',
    selectableLines: false,
    selectedLines: []
  })

  const editorValue = useMemo(() => {
    return { editor, setEditor };
  }, [editor])

  useEffect(() => {
    initializeLogin()
  }, [])

  const currentUser = userState

  return (
    <NextUIProvider navigate={navigate}>
      <EditorContext.Provider value={editorValue}>
        <main className='dark text-foreground bg-background min-h-screen'>
          <Routes>
            {!currentUser ? (
              <>
                <Route path="/" element={<PageWrapper footer={true} navbar={true}><Home /></PageWrapper>} />
                <Route path="/login" element={<PageWrapper background={true}><Auth /></PageWrapper>} />
                <Route path="/signup" element={<PageWrapper background={true}><Auth /></PageWrapper>} />
              </>
            ) : (
                <>
                  <Route path="/login" element={<Navigate to="/" />} />
                  <Route path="/signup" element={<Navigate to="/" />} />

                  <Route path="/" element={<AuthenticatedPageWrapper><Dashboard key={window.location.pathname} /></AuthenticatedPageWrapper>}/>
                  <Route path="/dashboard" element={<AuthenticatedPageWrapper><Dashboard key={window.location.pathname} /></AuthenticatedPageWrapper>}/>
                  <Route path="/notes/:id" element={<AuthenticatedPageWrapper><Note /></AuthenticatedPageWrapper>} />
                  <Route path="/folder-overview/:id" element={<AuthenticatedPageWrapper><Dashboard key={window.location.pathname} /> </AuthenticatedPageWrapper>} />
                  <Route path="/note-overview/:id" element={<AuthenticatedPageWrapper><Dashboard key={window.location.pathname} /> </AuthenticatedPageWrapper>} />

                  <Route path="/create" element={<AuthenticatedPageWrapper><Create /></AuthenticatedPageWrapper>} />
                  <Route path="/create/note" element={<AuthenticatedPageWrapper><CreateNote /></AuthenticatedPageWrapper>} />
                  <Route path="/create/folder" element={<AuthenticatedPageWrapper><CreateFolder /></AuthenticatedPageWrapper>} />

                  <Route path="/edit-note/:id" element={<AuthenticatedPageWrapper><CreateNote /></AuthenticatedPageWrapper>} />
                  <Route path="/edit-folder/:id" element={<AuthenticatedPageWrapper><CreateFolder /></AuthenticatedPageWrapper>} />

                  <Route path="/explore" element={<AuthenticatedPageWrapper><Explore /></AuthenticatedPageWrapper>} />
                  <Route path="/profile" element={<AuthenticatedPageWrapper><Profile /></AuthenticatedPageWrapper>} />
                  <Route path="/help" element={<AuthenticatedPageWrapper></AuthenticatedPageWrapper>} />
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
