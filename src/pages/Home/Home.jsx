import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import icons from '../../assets/icons';
import Video from '../../assets/videos/landing.mp4';
import CustomButton from '../../components/CustomButton';
import { H1, H2 } from '../../components/Typography';
import { pStyles } from '../../components/Typography/constants';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import FolderSection from './FolderSection';
import ToolbarSection from './ToolbarSection';

const Home = () => {
  const videoRef = useRef();
  const lastSectionRef = useRef();
  const { scrollYProgress: videoScrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start center", "end start"]
  })

  const { scrollYProgress: lastSectionScrollYProgress } = useScroll({
    target: lastSectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(videoScrollYProgress, [0, 0.3, 0.8, 1], [0.6, 1, 1, 0])
  const shadow = useTransform(videoScrollYProgress, [0, 0.5, 1], ["0 0 70px 0 rgba(191,151,255,0.44)", "0 -5px 70px 0 rgba(191,151,255,0.44)", "0 0 100px 0 rgba(191,151,255,1)"])
  const background = useTransform(lastSectionScrollYProgress, [0, 0.5], [
    "radial-gradient(circle, rgba(3,0,20,1) 2%, rgba(191,151,255,0.14) 4%, rgba(3,0,20,1) 10%, rgba(191,151,255,0.14) 20%, rgba(3,0,20,1) 30%, rgba(191,151,255,0.14) 40%, rgba(3,0,20,1) 50%)",
    "radial-gradient(circle, rgba(3,0,20,1) 10%, rgba(191,151,255,0.14) 40%, rgba(3,0,20,1) 50%, rgba(191,151,255,0.14) 50%, rgba(3,0,20,1) 60%, rgba(191,151,255,0.14) 60%, rgba(3,0,20,1) 70%)"
  ])
  const sectionOpacity = useTransform(lastSectionScrollYProgress, [0, 0.5], [0, 1])

  return (
    <div
      className="w-full h-[100%] flex flex-col justify-center items-start"
    >
      <div className="z-30 pt-12 tablet:py-[15vh] min-h-[350px] h-fit flex flex-col items-center gap-4">
        <H1 className="animate-slide text-[40px] tablet:text-5xl laptop:text-7xl text-center text-transparent tracking-wide bg-clip-text bg-gradient-to-br from-foreground-dark to-[#F7F8F8] !leading-tight">
          Transform your Programming Notes with Code&Line
        </H1>
        <p className="animate-[slideInFromTop_1.5s_ease-in-out] text-lg tablet:text-2xl font-medium text-foreground-dark text-center">
          Effortless line-by-line note management.
        </p>
        <Link to="/signup">
          <CustomButton
            className="mt-4 animate-[slideInFromTop_1.5s_ease-in-out,gradient_5s_ease_infinite] transition *:hover:translate-x-4 min-h-10 border-primary-dark text-primary-light gradientBackground2"
          >
            Start Now {icons.chevronRight}
          </CustomButton>
        </Link>
      </div>
      <motion.div
        style={{ opacity }}
        ref={videoRef}
        className="z-30 flex flex-col items-center justify-center"
      >
        <motion.div
          style={{ boxShadow: shadow }}
          className="self-center w-full tablet:w-[80%] border-1 animate-[slideInFromTop_1.5s_ease-in-out] transition-all duration-1000 delay-300 border-primary-dark rounded-lg *:rounded-lg flex items-center justify-center"
        >
          <VideoPlayer
            src={Video}
            enlargeOnView={true}
            className="w-full h-full"
          />
        </motion.div>
        <motion.p
          className={`${pStyles.big} pt-10 text-center text-lg tablet:text-2xl`}
        >
          Comprehensive and detailed code documentation
        </motion.p>
      </motion.div>
      <FolderSection />
      <ToolbarSection />
      <motion.div
        ref={lastSectionRef}
        style={{ backgroundImage: background, opacity: sectionOpacity }}
        className="bg-contain h-[1200px] w-screen px-2 laptop:px-0 laptop:w-full self-center h-screen flex flex-col items-center justify-center gap-4"
      >
        <H2 className="text-2xl tablet:text-[50px] laptop:text-6xl text-center text-transparent tracking-wide bg-clip-text bg-gradient-to-br from-foreground-dark to-[#F7F8F8]">
          Line-by-line Clarity
        </H2>
        <p className="text-lg tablet:text-2xl text-center font-medium text-foreground-dark">
          Gain full understanding of your code
        </p>
        <Link to="/signup">
          <CustomButton
            className="mt-4 animate-[gradient_5s_ease_infinite] transition *:hover:translate-x-4 min-h-10 border-primary-dark text-primary-light gradientBackground2"
          >
            Sign up for free{icons.chevronRight}
          </CustomButton>
        </Link>
      </motion.div>
    </div>
  )
};

export default Home;
