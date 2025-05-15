import { useState, useEffect } from 'react';

const LazyImage = ({ src, alt, className, placeholderColor = '#f3f4f6' }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };
  }, [src]);

  return (
    <>
      {!imageLoaded && (
        <div 
          className={`${className} bg-gray-200 animate-pulse`}
          style={{ backgroundColor: placeholderColor }}
        />
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} ${!imageLoaded ? 'hidden' : ''}`}
          onLoad={() => setImageLoaded(true)}
        />
      )}
    </>
  );
};

export default LazyImage;
