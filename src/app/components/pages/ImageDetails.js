import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../organisms/NavBar";
import { motion } from "framer-motion";
import { fadeUpVariants, scaleDownVariants } from "../../constants/animations";

export default function ImageDetails({ images, ...props }) {
  // Get the ID of the image that was passed in
  const id = props.match.params.id;
  // Find this image ID in the array of image objects, and return this image
  const image = images.find((image) => {
    return image.id === id;
  });
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="min-h-screen bg-gray-800 pb-6 md:pb-20">
      <NavBar />
      <motion.section
        initial="initial"
        animate="animate"
        exit="exit"
        className="px-6 md:px-20"
        variants={fadeUpVariants}
      >
        <h2 className="text-center px-6 py-10 md:py-24 text-3xl md:text-4xl text-white uppercase font-orbitron">
          {image.title}
          <span className="text-yellow-500">.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-28 ">
          <p className="text-white text-lg font-light font-openSans break-words">
            {image.explanation}
          </p>
          <div className="relative overflow-hidden h-64 md:h-96">
            <motion.div
              variants={scaleDownVariants}
              style={{ backgroundImage: `url(${image.url})` }}
              className="absolute inset-0 bg-center bg-repeat bg-cover"
            ></motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
