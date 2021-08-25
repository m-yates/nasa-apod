import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../organisms/NavBar/NavBar";
import { motion } from "framer-motion";
import {
  fadeUpVariants,
  scaleDownVariants,
} from "../../../constants/animations";
import "./ImageDetails.scss";

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
    <>
      <NavBar />
      <motion.section
        initial="initial"
        animate="animate"
        exit="exit"
        className="image-details"
        variants={fadeUpVariants}
      >
        <h2 className="image-details__title">{image.title}</h2>
        <div className="image-details__content">
          <p className="image-details__desc">{image.explanation}</p>
          <div className="image-details__photo">
            <motion.div
              variants={scaleDownVariants}
              style={{ backgroundImage: `url(${image.url})` }}
              className="image-details__photo__inner"
            ></motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
