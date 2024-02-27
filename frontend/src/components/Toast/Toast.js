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
            primary: '#ff5530',
            secondary: '#030014'
          },
          className: "py-4 px-4 rounded-lg border-1 border-primary-background bg-content1 text-primary-light font-light"
        }
      }}
    />
  )
}

export default Toast;
