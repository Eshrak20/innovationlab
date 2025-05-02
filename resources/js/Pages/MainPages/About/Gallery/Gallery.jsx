import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importing styles
import img1 from "../../../../../../public/reactAssets/images/Gallery/1.jpeg";
import img2 from "../../../../../../public/reactAssets/images/Gallery/2.jpeg";
import img3 from "../../../../../../public/reactAssets/images/Gallery/3.jpeg";
import img4 from "../../../../../../public/reactAssets/images/Gallery/4.jpeg";
import img5 from "../../../../../../public/reactAssets/images/Gallery/5.jpeg";

const Gallery = () => {
  // Array of images
  const images = [img1, img2, img3, img4, img5];
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  return (
    <div className="md:my-44 mx- md:mx-20 ">
      <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-20 text-success ">
        Gallery
      </h1>

      <Carousel
        autoPlay={true} // Automatically play images
        infiniteLoop={true} // Infinite loop of images
        showArrows={true} // Show navigation arrows
        showThumbs={false} // Hide thumbnails (optional)
        dynamicHeight={false} // Dynamically adjust height based on the image size
        emulateTouch={true} // Support touch swipe gestures on mobile devices
        swipeable={true} // Allow swiping
        interval={3000} // Time interval between slides (in ms)
        transitionTime={800} // Smooth transition time between slides
        stopOnHover={false} // Do not stop on hover
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={`${image}`}
              alt={`Gallery Image ${index + 1}`}
              className="h-[350px] md:h-[550px] 2xl:h-[750px] object-fill cursor-pointer" // Tailwind classes for fixed height and responsiveness
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
