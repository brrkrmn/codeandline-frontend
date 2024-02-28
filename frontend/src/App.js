import { NextUIProvider } from '@nextui-org/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Toast from './components/Toast/Toast';
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

  useEffect(() => {
    currentUser && navigate('/')
  }, [])

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
            <Route path="/" element={<PageWrapper><Dashboard /></PageWrapper>}/>
            <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>}/>
            <Route path="/explore" element={<PageWrapper>s</PageWrapper>} />
            <Route path="/create" element={<PageWrapper>sk</PageWrapper>}/>
          </Routes>
        )}
        <Toast />
      </main>
    </NextUIProvider>
  );
}

export default App;
