import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

type ComponentProps = {
  src: string;
  enlargeOnView?: boolean;
  className?: string;
}
const VideoPlayer = ({ src, enlargeOnView = false, className }: ComponentProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.7
  })

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (inView) {
      timeoutId = setTimeout(() => {
        if (videoRef.current) videoRef.current.play();
      }, 100)
    } else if (!inView) {
      if (videoRef.current) videoRef.current.pause();
    }

    return () => clearTimeout(timeoutId)
  }, [inView])

  return (
    <div
      ref={ref}
      className={`${enlargeOnView && (inView ? 'w-[90%]' : 'w-[80%]')} ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        width="100%"
        height="auto"
        autoPlay
        muted
        loop
      />
    </div>
  )
}

export default VideoPlayer;
