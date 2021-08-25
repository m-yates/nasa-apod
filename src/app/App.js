import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { paramCase } from "change-case";
import Home from "./components/pages/Home/Home";
import ImageDetails from "./components/pages/ImageDetails/ImageDetails";
import { AnimatePresence } from "framer-motion";
import "./App.scss";

const apiKey = process.env.REACT_APP_NASA_KEY;

function App() {
  const [images, setImages] = useState(null);
  useEffect(() => {
    getImages();
    async function getImages() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=12&thumbs=true`
      );
      const imageData = await res.json();
      const imageDataWithIds = imageData.map((image) => {
        return {
          ...image,
          id: paramCase(image.title),
        };
      });
      setImages(imageDataWithIds);
    }
  }, []);

  return (
    <>
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path="/"
                  render={(props) => <Home {...props} images={images} />}
                />
                <Route
                  exact
                  path="/story/:id"
                  render={(props) => (
                    <ImageDetails {...props} images={images} />
                  )}
                />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </>
  );
}

export default App;
