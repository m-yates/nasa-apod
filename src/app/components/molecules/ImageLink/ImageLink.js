import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./ImageLink.scss";

const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export default function ImageLink({ path, url, title }) {
  return (
    <Link to={path}>
      <div className="image-link">
        <div className="image-link__photo">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={transition}
            style={{ backgroundImage: `url(${url})` }}
            className="image-link__photo__inner"
          ></motion.div>
        </div>
        <motion.p
          exit={{ opacity: 0 }}
          transition={transition}
          className="image-link__title"
        >
          {title}
        </motion.p>
      </div>
    </Link>
  );
}
