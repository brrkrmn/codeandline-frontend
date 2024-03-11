import { NextUIProvider } from '@nextui-org/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Toast from './components/Toast/Toast';
import AuthenticatedPageWrapper from './layouts/AuthenticatedPageWrapper';
import PageWrapper from './layouts/PageWrapper';
import Auth from './pages/Auth/Auth';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home';
import { initializeLogin } from './reducers/userReducer';

function App () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeLogin())
  }, [])

  const currentUser = useSelector((state) => state.user)

  return (
    <NextUIProvider navigate={navigate}>
      <main className='dark text-foreground bg-background min-h-screen'>
        {!currentUser ? (
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/login" element={<PageWrapper background={true}><Auth /></PageWrapper>} />
            <Route path="/signup" element={<PageWrapper background={true}><Auth /></PageWrapper>} />
          </Routes>
        ): (
          <Routes>
            <Route path="/" element={<AuthenticatedPageWrapper><Dashboard /></AuthenticatedPageWrapper>}/>
            <Route path="/dashboard" element={<AuthenticatedPageWrapper><Dashboard /></AuthenticatedPageWrapper>}/>
            <Route path="/explore" element={<AuthenticatedPageWrapper>explore page</AuthenticatedPageWrapper>} />
            <Route path="/create" element={<AuthenticatedPageWrapper>create page</AuthenticatedPageWrapper>} />
            <Route path="/profile" element={<AuthenticatedPageWrapper>profile page</AuthenticatedPageWrapper>} />
            <Route path="/help" element={<AuthenticatedPageWrapper>help page</AuthenticatedPageWrapper>}/>
          </Routes>
        )}
        <Toast />
      </main>
    </NextUIProvider>
  );
}

export default App;
