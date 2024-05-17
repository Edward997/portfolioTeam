import React, { useState, useEffect } from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  const arrowSize = useBreakpointValue({ base: 'md', md: 'lg' });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(intervalId);
  }, [totalImages]);

  return (
    <Box position="relative">
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <IconButton
        aria-label="Previous Slide"
        icon={<FaArrowLeft />}
        size={arrowSize}
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        onClick={prevSlide}
      />
      <IconButton
        aria-label="Next Slide"
        icon={<FaArrowRight />}
        size={arrowSize}
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        onClick={nextSlide}
      />
    </Box>
  );
};

export default ImageCarousel;
