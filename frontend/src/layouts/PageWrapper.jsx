const PageWrapper = ({ children, background = false }) => {
  return (
    <div className={`${background && 'gradientBackground'} animate-gradient h-screen flex justify-center items-center py-3 px-4 tablet:px-8`}>
      {children}
    </div>
  )
};

export default PageWrapper;