import { useLocation } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../../../constants/animations";
import "./NavBar.scss";

export default function NavBar() {
  let location = useLocation();
  return (
    <motion.nav
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeUpVariants}
    >
      <h3>Stories from space</h3>
      {location.pathname === "/" ? (
        <a
          className="button button--outlined"
          href="https://github.com/mattyatesdev/stories-from-space"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      ) : (
        <Button path="/" text={"Back"}></Button>
      )}
    </motion.nav>
  );
}
