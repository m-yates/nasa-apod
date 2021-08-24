import React from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import ImageLinkGrid from "../../organisms/ImageLinkGrid/ImageLinkGrid";
import "./Home.scss";

export default function Home({ images }) {
  return (
    <div>
      {!images ? (
        <h3 className="loading">Images loading...</h3>
      ) : (
        <ImageLinkGrid images={images} />
      )}
    </div>
  );
}
