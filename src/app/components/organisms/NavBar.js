import Button from "../atoms/Button";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../../constants/animations";

export default function NavBar() {
  return (
    <motion.nav
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeUpVariants}
      className="flex content-center justify-between pt-20 px-20"
    >
      <h3 className="text-2xl text-white uppercase font-orbitron">
        Stories from space<span className="text-yellow-500">.</span>
      </h3>
      <Button path="/" text={"Back"}></Button>
    </motion.nav>
  );
}
