import Navbar from "../components/Navbar/Navbar";

const AuthenticatedPageWrapper = ({ children, background = false }) => {
  return (
    <>
      <Navbar />
      <div className={`${background && 'gradientBackground'} animate-gradient flex py-3 px-4 tablet:px-16 wide:px-40 mt-[60px] tablet:mt-8 overflow-hidden`}>
        {children}
      </div>
    </>
  )
};

export default AuthenticatedPageWrapper;