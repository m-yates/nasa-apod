import { motion } from "framer-motion";
import { fadeUpVariants } from "../../constants/animations";

export default function Header() {
  return (
    <motion.header
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeUpVariants}
      className="relative flex items-center justify-around text-center py-10 md:py-24"
    >
      <div className="relative z-0 w-72 h-72 md:w-96 md:h-96 border-4 border-yellow-500 border-solid rounded-full"></div>

      <h1 className="absolute z-2 px-6 text-4xl md:text-5xl text-center w-full text-white uppercase font-orbitron">
        Stories from space
        <span className="text-yellow-500">.</span>
      </h1>
    </motion.header>
  );
}
