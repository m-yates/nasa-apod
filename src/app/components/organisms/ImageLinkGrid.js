import { motion } from "framer-motion";
import ImageLink from "../molecules/ImageLink";
import { fadeUpVariants } from "../../constants/animations";

export default function ImageLinkGrid({ images }) {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeUpVariants}
      className="grid grid-cols-3 gap-6 px-20 pb-20"
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
