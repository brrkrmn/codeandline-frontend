import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TextEditor from '../../components/TextEditor/TextEditor';
import { H2 } from '../../components/Typography';

const ToolbarSection = () => {
  const sectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 1, 0]);
  const textEditorOpacity = useTransform(scrollYProgress, [0.5, 0.8], ["1", "0"])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.1]);
  const yDown = useTransform(scrollYProgress, [0, 0.5], ["0%", "150%"]);
  const yDown2 = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"])
  const shadow = useTransform(scrollYProgress, [0, 0.5], ["0 0 1px #bf97ff70", "0 2px 20px #bf97ff"])
  const transform = useTransform(scrollYProgress, [0, 0.5, 1], ["translateY(10%)", "translateY(0%)", "translateY(-90%)"])

  return (
    <motion.div
      style={{ opacity }}
      ref={sectionRef}
      className="w-full mt-[30vh] h-[90vh] flex flex-col items-center justify-start gap-8 sticky"
    >
      <motion.div
        style={{ scale, y: yDown2 }}
        className="flex flex-col items-center gap-4"
      >
        <H2 className={`transition duration-[2000ms] text-6xl text-center text-transparent tracking-wide bg-clip-text bg-gradient-to-b from-[#F7F8F8] to-foreground-placeholder to-80%`}>
          Rich Formatting
        </H2>
        <p className="text-2xl tracking-wide text-foreground-secondary">
          Customize your notes with Quill's toolbar
        </p>
      </motion.div>
      <motion.div
        style={{ scale: scale2, y: yDown, boxShadow: shadow }}
        className="w-[700px] rounded-xl"
      >
        <TextEditor
          className="z-40 w-full customQuill"
          snow={true}
          readOnly
          value="Customize your notes with Quill's toolbar"
        />
      </motion.div>
      <motion.div
        style={{ opacity: textEditorOpacity, transform }}
        className="w-[900px] h-full mt-40 flex items-center justify-start"
      >
        <TextEditor
          readOnly
          className="px-8 w-full py-4 scale-[.80] border-1 border-divider rounded-xl bg-gradient-to-b from-background to-divider bg-clip-padding"
          value={`<h1><span style="color: rgb(194, 133, 255);">Scroll Animations</span> with Framer Motion</h1><p><br></p><p>The code utilizes several features from <strong style="color: rgb(255, 225, 0); background-color: rgba(243, 238, 255, 0.06);">Framer Motion</strong> to create dynamic animations based on the user's scroll behavior.</p><p><br></p><blockquote><span style="background-color: rgb(68, 68, 68); color: rgb(255, 255, 255);">useScroll</span> is used to create scroll-linked animations, like progress indicators and parallax effects.</blockquote><p><br></p><p>Firstly, it employs the <span style="background-color: rgb(68, 68, 68); color: rgb(255, 255, 255);">useScroll</span> hook to track the scroll position of a specific reference element, sectionRef. This hook returns a <span style="color: rgb(255, 255, 255); background-color: rgb(68, 68, 68);">scrollYProgress</span> value, indicating the progress of scrolling from <u>0 to 1</u>. </p><p><br></p><p>Next, the useTransform hook is used to map the scrollYProgress value to various output ranges, enabling animations based on the scroll position. It alters </p><ul><li>opacity, </li><li>scale,</li><li>translate (xRight, xRight2, xLeft)</li><li><span style="color: rgba(239, 237, 253, 0.7);">backgroundColor</span></li></ul><p><br></p><p><br></p>`}
        />
      </motion.div>
    </motion.div>
  )
}

export default ToolbarSection;