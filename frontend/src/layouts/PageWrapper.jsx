const PageWrapper = ({ children }) => {
  return (
    <div className="h-screen flex justify-center items-center py-3 px-4 md:px-8">
      {children}
    </div>
  )
};

export default PageWrapper;