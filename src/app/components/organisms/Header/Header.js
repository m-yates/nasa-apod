import Button from "../../atoms/Button/Button";
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
      <div className="circle"></div>
      <h1>Stories from space</h1>
      <p className="intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </p>
      <Button path="/" text={"Refresh"}></Button>
    </motion.header>
  );
}
