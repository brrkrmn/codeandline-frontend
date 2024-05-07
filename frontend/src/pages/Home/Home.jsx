import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import icons from '../../assets/icons';
import Video from '../../assets/videos/landing.mp4';
import CustomButton from '../../components/CustomButton';
import { H1, P } from '../../components/Typography';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import FolderSection from './FolderSection';
import ToolbarSection from './ToolbarSection';

const Home = () => {
  const navigate = useNavigate();
  const [ videoRef, videoInView ] = useInView({
    threshold: 0.7
  })

  return (
    <div
      className="w-full h-[100%] flex flex-col justify-center items-start"
    >
      <div className="z-30 pt-[15vh] min-h-[350px] h-[70vh] flex flex-col items-center gap-4">
        <H1 className="animate-slide text-7xl text-center text-transparent tracking-wide bg-clip-text bg-gradient-to-br from-foreground-dark to-[#F7F8F8]">
          Transform your Programming Notes with Code&Line
        </H1>
        <p className="animate-[slideInFromTop_1.5s_ease-in-out] text-xl font-medium text-foreground-dark">
          Effortless line-by-line note management.
        </p>
        <CustomButton
          onPress={() => navigate('/signup')}
          className="mt-4 animate-[slideInFromTop_1.5s_ease-in-out,gradient_5s_ease_infinite] transition *:hover:translate-x-4 min-h-10 border-primary-dark text-primary-light gradientBackground2"
        >
          Start Now {icons.chevronRight}
        </CustomButton>
      </div>
      <div
        ref={videoRef}
        className="z-30 flex flex-col items-center justify-center"
      >
        <VideoPlayer
          src={Video}
          enlargeOnView={true}
          className={`customPerspective self-center w-[80%] border-1 animate-[slideInFromTop_1.5s_ease-in-out] transition-all duration-1000 delay-300 border-primary-dark shadow-[0_-5px_70px_0_rgba(191,151,255,0.44)] rounded-lg *:rounded-lg flex items-center justify-center`}
        />
        <P
          variant="big"
          className={`transition delay-700 duration-1000 pt-10 -translate-y-20 opacity-0 ${videoInView && 'translate-y-0 opacity-100'}`}
        >
          Comprehensive and detailed code documentation
        </P>
      </div>
      <FolderSection />
      <ToolbarSection />
      <div className="h-screen"></div>
    </div>
  )
};

export default Home;
