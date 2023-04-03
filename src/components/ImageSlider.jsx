import { Image, Button, Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const ImageSlider = ({ slides }) => {
  return (
    <Carousel 
      infiniteLoop 
      autoPlay
      interval={3000} 
      showThumbs={false} 
      renderThumbs={(thumbs) =>
        thumbs.map((image, index) => (
          <img src={image}key={index} 
            onClick={() => Carousel.current.slideTo(index)}
            style={{ height: "50px", margin: "0 5px" }}
        />
   
      ))
    }
  >
    {slides.map((slide) => (
      <Link height="30" to={`item/${slide.id}`} key={slide.id}>
        <Box> <Image src={slide.image} height="auto" width="800px" /> </Box>
      </Link>

    ))}
  </Carousel>
  );
};

export default ImageSlider;
