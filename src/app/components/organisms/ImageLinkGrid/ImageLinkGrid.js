import ImageLink from "../../molecules/ImageLink/ImageLink";
import "./ImageLinkGrid.scss";

export default function ImageLinkGrid({ images }) {
  return (
    <section className="image-link-grid">
      {images.map((image) =>
        image.media_type === "image" ? (
          <ImageLink
            key={image.url}
            url={image.url}
            title={image.title}
            path={`/${image.id}`}
          />
        ) : (
          <ImageLink
            key={image.url}
            url={image.thumbnail_url}
            title={image.title}
            path={`/${image.id}`}
          />
        )
      )}
    </section>
  );
}
