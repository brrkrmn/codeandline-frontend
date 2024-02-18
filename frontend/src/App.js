import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PageWrapper from './layouts/PageWrapper';
import Auth from './pages/Auth';
import Home from './pages/Home';
import loginService from "./services/login";

function App () {
  const navigate = useNavigate();
  React.useEffect(() => {
    loginService.login().then(response => {
      console.log(response)
    })
  })

  return (
    <NextUIProvider navigate={navigate}>
      <main className='dark text-foreground bg-background min-h-screen'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<PageWrapper background={true}><Auth /></PageWrapper>} />
          <Route path="/signup" element={<PageWrapper background={true}><Auth /></PageWrapper>} />
        </Routes>
      </main>
    </NextUIProvider>
  );
}

export default App;
