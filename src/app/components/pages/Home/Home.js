import React from "react";
import Header from "../../organisms/Header/Header";
import ImageLinkGrid from "../../organisms/ImageLinkGrid/ImageLinkGrid";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../../../constants/animations";
import NavBar from "../../organisms/NavBar/NavBar";

import "./Home.scss";

export default function Home({ images }) {
  return (
    <>
      <NavBar />
      <Header />
      {!images ? (
        <motion.h4
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeUpVariants}
          className="loading"
        >
          Loading stories...
        </motion.h4>
      ) : (
        <ImageLinkGrid images={images} />
      )}
    </>
  );
}
