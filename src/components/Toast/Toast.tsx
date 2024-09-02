import { Toaster } from 'react-hot-toast';

const Toast = () => {
  return (
    <Toaster
      position='bottom-left'
      toastOptions={{
        duration: 4000,
        success: {
          iconTheme: {
            primary: '#69ad3e',
            secondary: '#030014'
          },
          className: "py-4 px-4 rounded-lg border-1 border-primary-background bg-content1 text-primary-light font-light"
        },
        error: {
          iconTheme: {
            primary: '#f31260',
            secondary: '#030014'
          },
          className: "py-4 px-4 rounded-lg border-1 border-primary-background bg-content1 text-primary-light font-light"
        }
      }}
    />
  )
}

export default Toast;
