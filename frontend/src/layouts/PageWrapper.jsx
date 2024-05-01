import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const PageWrapper = ({ children, background = false, footer = false, navbar = false }) => {
  return (
    <>
      {navbar && <Navbar />}
      <div className={`${background && 'gradientBackground'} animate-gradient px-4 tablet:px-40 wide:px-96 h-screen flex justify-center items-center py-3 ${navbar && 'mt-24'} px-4 tablet:px-8`}>
        {children}
      </div>
      {footer && <Footer />}
    </>

  )
};

export default PageWrapper;