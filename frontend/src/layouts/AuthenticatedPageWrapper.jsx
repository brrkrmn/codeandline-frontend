import Navbar from "../components/Navbar/Navbar";

const AuthenticatedPageWrapper = ({ children, background = false }) => {
  return (
    <>
      <Navbar />
      <div className={`${background && 'gradientBackground'} animate-gradient flex py-3 px-4 tablet:px-16 wide:px-40 mt-[120px] tablet:mt-24`}>
        {children}
      </div>
    </>
  )
};

export default AuthenticatedPageWrapper;