import { Link } from "react-router-dom";

export default function Button({ text, path }) {
  return (
    <Link
      to={path}
      className="inline-block text-lg text-white bg-yellow-500 cursor-pointer uppercase px-4 py-2 no-underline font-orbitron"
    >
      {text}
    </Link>
  );
}
