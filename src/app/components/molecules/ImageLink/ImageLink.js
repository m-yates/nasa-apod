import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { scaleTransition } from "../../../constants/animations";
import "./ImageLink.scss";

export default function ImageLink({ path, url, title }) {
  return (
    <Link to={path}>
      <div className="image-link">
        <div className="image-link__photo">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={scaleTransition}
            style={{ backgroundImage: `url(${url})` }}
            className="image-link__photo__inner"
          ></motion.div>
          <p className="image-link__title">{title}</p>
        </div>
      </div>
    </Link>
  );
}
