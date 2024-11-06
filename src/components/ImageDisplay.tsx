import React, { useEffect, useState } from 'react';

interface ImageDisplayProps {
  type: 'input' | 'deteriorated' | 'restored';
  isLive?: boolean;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ type, isLive }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80",
  ];

  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isLive, images.length]);

  const getImageProps = () => {
    const baseImage = images[currentImageIndex];
    
    switch (type) {
      case 'input':
        return {
          src: baseImage,
          className: "w-full h-[300px] object-cover rounded-lg"
        };
      case 'deteriorated':
        return {
          src: baseImage,
          className: "w-full h-[300px] object-cover rounded-lg brightness-50 contrast-125"
        };
      case 'restored':
        return {
          src: baseImage,
          className: "w-full h-[400px] object-cover rounded-lg saturate-110"
        };
    }
  };

  const { src, className } = getImageProps();

  return (
    <div className="relative">
      <img 
        src={src} 
        alt={`${type} image`} 
        className={`${className} transition-opacity duration-500`} 
      />
      {isLive && (
        <div className="absolute top-2 right-2 bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
          Live
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;