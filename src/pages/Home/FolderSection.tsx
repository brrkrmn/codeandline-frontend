import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FolderCard from '../../components/FolderCard';
import FoldersSelect from '../../components/FoldersSelect/FoldersSelect';
import MenuList from '../../components/MenuList/MenuList';
import { H2 } from '../../components/Typography';
import { folderCardData, foldersSelectData, menuListData } from './constants';

const FolderSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const xRight = useTransform(scrollYProgress, [0, 0.4], ["200%", "0%"]);
  const xRight2 = useTransform(scrollYProgress, [0, 0.45], ["200%", "0%"]);
  const xLeft = useTransform(scrollYProgress, [0, 0.4], ["-200%", "0%"]);
  const backgroundColor = useTransform(scrollYProgress, [0, 0.6], ["radial-gradient(circle, rgba(3,0,20,1) 40%, rgba(191,151,255,0.24) 50%, rgba(3,0,20,1) 60%)", "radial-gradient(circle, rgba(3,0,20,1) 10%, rgba(191,151,255,0.14) 20%, rgba(3,0,20,1) 30%)"]);

  return (
    <motion.div
      style={{ opacity, backgroundImage: backgroundColor }}
      ref={sectionRef}
      className="z-30 w-full mt-[30vh] h-full tablet:h-[90vh] flex flex-col items-center justify-center tablet:gap-8">
      <motion.div
        style={{ scale }}
        className="flex flex-col items-center gap-4"
      >
        <H2 className={`transition duration-[2000ms] text-2xl tablet:text-[50px] laptop:text-6xl text-center text-transparent tracking-wide bg-clip-text bg-gradient-to-b from-[#F7F8F8] to-foreground-placeholder to-80%`}>
          Stay Organized
        </H2>
        <p className="text-lg tablet:text-2xl tracking-wide text-foreground-secondary">Link your notes to folders</p>
      </motion.div>
      <div className="scale-[0.4] tablet:scale-[0.8] laptop:scale-[1] w-full flex items-center justify-center gap-8">
        <motion.div
          style={{ x: xLeft }}
          className="transition hover:!scale-[1.05] w-fit border-1 border-divider rounded-xl px-4 py-4 flex flex-col items-center justify-center gap-4 *:bg-background bg-gradient-to-b from-background to-border hover:to-divider bg-clip-padding"
        >
          {folderCardData.map(folder => (
            <FolderCard key={folder.id} folder={folder} />
          ))}
        </motion.div>
        <div className="w-fit flex flex-col items-center justify-center gap-8">
          <motion.div
            style={{ x: xRight2 }}
            className="transition hover:!scale-[1.08] w-full *:w-full *:m-0 border-1 border-divider rounded-xl flex items-center justify-center px-4 py-4 bg-gradient-to-b from-background to-border hover:to-divider bg-clip-padding"
          >
            <FoldersSelect data={foldersSelectData} />
          </motion.div>
          <motion.div
            style={{ x: xRight }}
            className="transition hover:!scale-[1.05] w-full border-1 border-divider rounded-xl flex items-center justify-center px-8 py-4 bg-gradient-to-b from-background to-border hover:to-divider bg-clip-padding"
          >
            <MenuList data={menuListData} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default FolderSection;