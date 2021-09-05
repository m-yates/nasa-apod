import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { scaleTransition } from "../../constants/animations";

export default function ImageLink({ path, url, title }) {
  return (
    <Link to={path}>
      <div className="flex items-end overflow-hidden relative h-72 cursor-pointer">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={scaleTransition}
          style={{ backgroundImage: `url(${url})` }}
          className="absolute inset-0 z-0 bg-yellow-500 bg-center bg-repeat bg-cover"
        ></motion.div>
        <p className="text-white bg-gray-800 px-4 py-2 relative z-1 font-normal  font-openSans">
          {title}
        </p>
      </div>
    </Link>
  );
}
