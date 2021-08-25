import { motion } from "framer-motion";
import ImageLink from "../../molecules/ImageLink/ImageLink";
import { fadeUpVariants } from "../../../constants/animations";
import "./ImageLinkGrid.scss";

export default function ImageLinkGrid({ images }) {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeUpVariants}
      className="image-link-grid"
    >
      {images.map((image) =>
        image.media_type === "image" ? (
          <ImageLink
            key={image.url}
            url={image.url}
            title={image.title}
            path={`story/${image.id}`}
          />
        ) : (
          <ImageLink
            key={image.url}
            url={image.thumbnail_url}
            title={image.title}
            path={`story/${image.id}`}
          />
        )
      )}
    </motion.section>
  );
}
