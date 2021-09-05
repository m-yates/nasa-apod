import { motion } from "framer-motion";
import { fadeUpVariants } from "../../constants/animations";

export default function Header() {
  return (
    <motion.header
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeUpVariants}
      className="relative flex items-center justify-around text-center py-24"
    >
      <div className="relative z-0 w-96 h-96 border-4 border-yellow-500 border-solid rounded-full"></div>

      <h1 className="absolute z-2 text-5xl text-center w-full text-white uppercase font-orbitron">
        Stories from space
        <span className="text-yellow-500">.</span>
      </h1>
    </motion.header>
  );
}
