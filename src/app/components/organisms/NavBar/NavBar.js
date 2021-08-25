import { useLocation } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../../../constants/animations";
import "./NavBar.scss";

export default function NavBar() {
  let location = useLocation();
  return (
    <motion.nav
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeUpVariants}
    >
      <div className="logo">
        <h3 className="logo__text">SFS</h3>
        <svg
          className="logo__icon"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 500 500"
        >
          <g>
            <path
              className="logo__icon__top"
              d="M250,0c0,0-58.1,35.8-91.9,121.6h183.7C308.1,35.8,250,0,250,0z"
            />
            <path
              className="logo__icon__body"
              d="M347.5,136.9h-195c-23.7,71-30,172.3,20,311.2H250h77.5C377.5,309.2,371.2,207.9,347.5,136.9z M250,344.7
		c-29.5,0-53.5-35.5-53.5-79.4S220.4,186,250,186s53.5,35.5,53.5,79.4S279.5,344.7,250,344.7z"
            />
            <path
              className="logo__icon__wing"
              d="M47.4,388.2v111.7l104.7-52C136.3,407.8,125.7,341,125.7,341L47.4,388.2z"
            />
            <path
              className="logo__icon__wing"
              d="M374.3,341.2c0,0-10.7,66.6-26.5,106.9l104.7,52V388.3L374.3,341.2z"
            />
            <polygon
              className="logo__icon__base"
              points="175.3,463 185.8,499.9 250,499.9 314.2,499.9 324.7,463 250,463 	"
            />
          </g>
        </svg>
      </div>

      {location.pathname === "/" ? (
        <a
          className="button button--outlined"
          href="https://github.com/mattyatesdev/stories-from-space"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      ) : (
        <Button path="/" text={"Back"}></Button>
      )}
    </motion.nav>
  );
}
