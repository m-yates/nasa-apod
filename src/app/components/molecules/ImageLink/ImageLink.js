import { Link } from "react-router-dom";
import "./ImageLink.scss";

export default function ImageLink({ path, url, title }) {
  return (
    <Link to={path}>
      <div style={{ backgroundImage: `url(${url})` }} className="image-link">
        <p className="image-link__title">{title}</p>
      </div>
    </Link>
  );
}
