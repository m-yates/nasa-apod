import Button from "../../atoms/Button/Button";
import { useLocation } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  let location = useLocation();
  console.log(location);
  return (
    <header>
      <h1>Stories from space</h1>
      <p className="intro">
        A gallery of random images, pulled from the NASA Astronomy Picture of
        the Day API. Select an item from the grid to read the story behind the
        image. Hit the 'rfresh' button to refresh
      </p>
      <Button path="/" text={"Refresh"}></Button>
      {location.pathname !== "/" && <Button path="/" text={"Back"}></Button>}
    </header>
  );
}
