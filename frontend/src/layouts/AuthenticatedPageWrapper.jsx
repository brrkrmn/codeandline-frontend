import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const AuthenticatedPageWrapper = ({ children, background = false }) => {
  return (
    <>
      <Navbar />
      <div className={`${background && 'gradientBackground'} min-h-screen animate-gradient flex py-3 px-4 tablet:px-16 wide:px-40 mt-[120px] tablet:mt-24`}>
        {children}
      </div>
      <Footer />
    </>
  )
};

export default AuthenticatedPageWrapper;