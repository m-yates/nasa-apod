import React from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import "./ImageDetails.scss";

export default function ImageDetails({ images, ...props }) {
  const id = props.match.params.id;
  const image = images.find((image) => {
    return image.id === id;
  });
  return (
    <>
      <NavBar />
      <section className="image-details">
        <div>
          <h2 className="image-details__title">{image.title}</h2>
          <p>{image.explanation}</p>
        </div>
        <div
          style={{ backgroundImage: `url(${image.url})` }}
          className="image-details__image"
        ></div>
      </section>
    </>
  );
}
