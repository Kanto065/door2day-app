import { useState, useEffect } from 'react';

const LazyVideo = ({ src, className, placeholderColor = '#f3f4f6', objectFit = 'contain' }) => {
  const [videoSrc, setVideoSrc] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (src) {
      setVideoSrc(src);
    }
  }, [src]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <>
      {!videoLoaded && (
        <div
          className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}
          style={{ backgroundColor: placeholderColor }}
        >
          <span className="text-gray-500">Loading video...</span>
        </div>
      )}
      {videoSrc && (
        <div className={`${className} overflow-hidden flex items-center justify-center bg-black`}>
          <video
            src={videoSrc}
            className={`w-full h-auto max-h-full ${!videoLoaded ? 'hidden' : ''}`}
            style={{ objectFit }}
            controls
            onLoadedData={handleVideoLoaded}
            onCanPlay={handleVideoLoaded}
          />
        </div>
      )}
    </>
  );
};

export default LazyVideo;
