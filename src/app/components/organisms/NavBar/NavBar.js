import Button from "../../atoms/Button/Button";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav>
      <h3>Stories from space</h3>
      <Button path="/" text={"Back"}></Button>
    </nav>
  );
}
