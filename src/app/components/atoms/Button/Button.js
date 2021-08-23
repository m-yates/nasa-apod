import { Link } from "react-router-dom";
import "./Button.scss";

export default function Button({ text, path, classNames }) {
  return (
    <Link to={path} className={`button ${classNames}`}>
      {text}
    </Link>
  );
}
