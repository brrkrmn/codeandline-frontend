import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const VideoPlayer = ({ src, enlargeOnView = false, className }) => {
  const videoRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0.7
  })

  useEffect(() => {
    let timeoutId;
    if (inView) {
      timeoutId = setTimeout(() => {
        videoRef.current.play();
      }, 100)
    } else if (!inView) {
      videoRef.current.pause();
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
