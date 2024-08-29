import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

type ComponentProps = {
  children: React.ReactNode;
  background?: boolean;
  footer?: boolean;
  navbar?: boolean;
}

const PageWrapper = ({ children, background = false, footer = false, navbar = false }: ComponentProps) => {
  return (
    <>
      {navbar && <Navbar />}
      <div className={`${background && 'gradientBackground'} min-h-screen animate-gradient flex justify-center py-3 px-4 tablet:px-40 wide:px-96 h-auto ${navbar && 'mt-24'} overflow-hidden`}>
        {children}
      </div>
      {footer && <Footer />}
    </>

  )
};

export default PageWrapper;