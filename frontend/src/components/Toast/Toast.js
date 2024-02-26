import React from 'react';
import { Toaster } from 'react-hot-toast';

const Toast = () => {
  return (
    <Toaster
      position='top-center'
      toastOptions={{
        duration: 4000,
        error: {
          iconTheme: {
            primary: '#751111',
            secondary: '#030014'
          },
          className: "py-4 px-4 rounded-full border-1 border-danger shadow-large bg-background text-primary-dark text-sm"
        }
      }}
    />
  )
}

export default Toast;
