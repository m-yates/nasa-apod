import React from "react";
import Header from "../../organisms/Header/Header";
import ImageLinkGrid from "../../organisms/ImageLinkGrid/ImageLinkGrid";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../../../constants/animations";

import "./Home.scss";

export default function Home({ images }) {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeUpVariants}
      >
        <Header />
        {!images ? (
          <motion.h3 className="loading">Loading stories...</motion.h3>
        ) : (
          <ImageLinkGrid images={images} />
        )}
      </motion.div>
    </>
  );
}
