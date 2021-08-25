import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../organisms/Header/Header";
import ImageLinkGrid from "../../organisms/ImageLinkGrid/ImageLinkGrid";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../../../constants/animations";
import NavBar from "../../organisms/NavBar/NavBar";

import "./Home.scss";

export default function Home({ images }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
