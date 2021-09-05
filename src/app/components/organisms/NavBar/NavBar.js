import Button from "../../atoms/Button/Button";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../../../constants/animations";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <motion.nav
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeUpVariants}
    >
      <h3 class="nav__title">
        Stories from space<span className="punctuation">.</span>
      </h3>
      <Button path="/" text={"Back"}></Button>
    </motion.nav>
  );
}
