import React from "react";
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
  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      className="image-details"
      variants={fadeUpVariants}
    >
      <NavBar />
      <div className="image-details__content">
        <div className="image-details__content__text">
          <h2 className="image-details__content__title">{image.title}</h2>
          <p>{image.explanation}</p>
        </div>

        <div className="image-details__photo">
          <motion.div
            variants={scaleDownVariants}
            style={{ backgroundImage: `url(${image.url})` }}
            className="image-details__photo__inner"
          ></motion.div>
        </div>
      </div>
    </motion.section>
  );
}
