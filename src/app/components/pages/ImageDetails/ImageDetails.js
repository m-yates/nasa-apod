import React from "react";
import { motion } from "framer-motion";
import "./ImageDetails.scss";

const transition = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const text = {
  animate: {
    transition: {
      delayChildren: 0.6,
      stagger: 0.5,
    },
  },
};

const textElement = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ...transition,
    },
  },
};
export default function ImageDetails({ images, ...props }) {
  const id = props.match.params.id;
  const image = images.find((image) => {
    return image.id === id;
  });
  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      <section className="image-details">
        <motion.div variants={text}>
          <motion.h2 variants={textElement} className="image-details__title">
            {image.title}
          </motion.h2>
          <motion.p variants={textElement}>{image.explanation}</motion.p>
        </motion.div>
        <div className="image-details__photo">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.2, ...transition },
            }}
            exit={{ opacity: 0, y: 10 }}
            style={{ backgroundImage: `url(${image.url})` }}
            className="image-details__photo__inner"
          ></motion.div>
        </div>
      </section>
    </motion.div>
  );
}
