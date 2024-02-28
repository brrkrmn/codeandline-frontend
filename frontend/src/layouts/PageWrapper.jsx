import Nav from "../components/Nav/Nav";

const PageWrapper = ({ children, background = false }) => {
  return (
    <>
      <Nav />
      <div className={`${background && 'gradientBackground'} animate-gradient h-screen flex justify-center items-center py-3 px-4 tablet:px-8`}>
        {children}
      </div>
    </>

  )
};

export default PageWrapper;