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
        An image gallery, pulling from the NASA 'Astronomy Picture of the Day'
        API. Built with React, Framer Motion and SASS.
      </p>
      <a
        href="https://github.com/mattyatesdev/stories-from-space"
        target="_blank"
        rel="noopener"
        className="button button--outlined"
      >
        Github
      </a>
    </motion.header>
  );
}
