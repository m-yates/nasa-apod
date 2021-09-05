import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../organisms/NavBar";
import { motion } from "framer-motion";
import { fadeUpVariants, scaleDownVariants } from "../../constants/animations";

export default function ImageDetails({ images, ...props }) {
  const id = props.match.params.id;
  const image = images.find((image) => {
    return image.id === id;
  });
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="min-h-screen bg-gray-800 pb-20">
      <NavBar />
      <motion.section
        initial="initial"
        animate="animate"
        exit="exit"
        className="px-20"
        variants={fadeUpVariants}
      >
        <h2 className="text-center p-24 text-4xl text-white uppercase font-orbitron">
          {image.title}
          <span className="text-yellow-500">.</span>
        </h2>
        <div className="grid grid-cols-2 gap-28">
          <p className="text-white text-lg font-light font-openSans break-words">
            {image.explanation}
          </p>
          <div className="relative overflow-hidden">
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
