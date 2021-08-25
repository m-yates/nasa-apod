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
      <h1>Stories from space</h1>
      <p className="header__intro">
        A collection of images, pulled from the NASA 'Astronomy Picture of the
        Day' API. Click on an image to learn more.
      </p>
    </motion.header>
  );
}
