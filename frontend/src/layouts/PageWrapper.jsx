import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const PageWrapper = ({ children, background = false, footer = false, navbar = false }) => {
  return (
    <>
      {navbar && <Navbar />}
      <div className={`${background && 'gradientBackground'} animate-gradient px-4 tablet:px-40 wide:px-96 min-h-screen h-auto flex justify-center items-start py-3 ${navbar && 'mt-24'}`}>
        {children}
      </div>
      {footer && <Footer />}
    </>

  )
};

export default PageWrapper;