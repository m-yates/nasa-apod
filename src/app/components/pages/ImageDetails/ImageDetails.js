import React from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import { motion } from "framer-motion";
import "./ImageDetails.scss";

export default function ImageDetails({ images, ...props }) {
  const id = props.match.params.id;
  const image = images.find((image) => {
    return image.id === id;
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <section className="image-details">
        <div>
          <h2 className="image-details__title">{image.title}</h2>
          <p>{image.explanation}</p>
        </div>
        <div
          style={{ backgroundImage: `url(${image.url})` }}
          className="image-details__image"
        ></div>
      </section>
    </motion.div>
  );
}
