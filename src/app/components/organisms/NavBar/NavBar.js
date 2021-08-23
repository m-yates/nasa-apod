import Button from "../../atoms/Button/Button";
import { useLocation } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  let location = useLocation();
  console.log(location);
  return (
    <nav>
      <h1>NASA APOD APP</h1>
      {location.pathname !== "/" && <Button path="/" text={"Back"}></Button>}
    </nav>
  );
}
