import { motion } from "framer-motion";
import { fadeUpVariants } from "../../../constants/animations";
import "./Header.scss";

export default function Header() {
  return (
    <motion.header
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeUpVariants}
      className="header"
    >
      <div className="header__circle"></div>
      <h1 className="header__title">
        Stories from space<span className="punctuation">.</span>
      </h1>
      <p className="header__intro">
        An image gallery, pulling from the NASA 'Astronomy Picture of the Day'
        API. Click on an image to view the story. Built with React, Framer
        Motion and SASS.
      </p>
    </motion.header>
  );
}
