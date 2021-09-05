import { motion } from "framer-motion";
import { fadeUpVariants } from "../../../constants/animations";
import "./Header.scss";
import Button from "../../atoms/Button/Button";

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
      <Button path="/" text={"Back"}></Button>
    </motion.header>
  );
}
