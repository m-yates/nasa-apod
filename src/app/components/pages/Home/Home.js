import React from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import ImageLinkGrid from "../../organisms/ImageLinkGrid/ImageLinkGrid";
import { motion } from "framer-motion";
import "./Home.scss";

export default function Home({ images }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      {!images ? (
        <h3 className="loading">Images loading...</h3>
      ) : (
        <ImageLinkGrid images={images} />
      )}
    </motion.div>
  );
}
