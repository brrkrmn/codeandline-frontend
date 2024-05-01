import { useNavigate } from 'react-router-dom';
import icons from '../../assets/icons';
import CustomButton from '../../components/CustomButton';
import { H1 } from '../../components/Typography';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="pw-full h-full flex flex-col items-start">
      <div className="py-40 flex flex-col items-center gap-4">
        <H1 className="animate-slide text-7xl text-center text-transparent tracking-wide bg-clip-text bg-gradient-to-br from-foreground-dark to-[#F7F8F8]">Transform your Programming Notes with Code&Line</H1>
        <p variant="medium" className="animate-[slideInFromTop_1.5s_ease-in-out] text-xl font-medium text-foreground-dark">Effortless line-by-line note management.</p>
        <CustomButton
          onPress={() => navigate('/signup')}
          className="mt-4 animate-[slideInFromTop_2s_ease-in-out,gradient_10s_ease_infinite] transition *:hover:translate-x-4 h-10 border-primary-dark text-primary-light gradientBackground2"
        >
          Start Now {icons.chevronRight}
        </CustomButton>
      </div>
    </div>
  )
};

export default Home;
