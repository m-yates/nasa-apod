import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../organisms/Header";
import ImageLinkGrid from "../organisms/ImageLinkGrid";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../../constants/animations";

export default function Home({ images }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="min-h-screen bg-gray-800">
      <Header />
      {!images ? (
        <motion.h4
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeUpVariants}
          className="text-2xl text-white text-center uppercase font-orbitron"
        >
          Loading stories...
        </motion.h4>
      ) : (
        <ImageLinkGrid images={images} />
      )}
    </div>
  );
}
