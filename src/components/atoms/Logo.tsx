import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "../../assets/images/site_teller_white_logo.png";

type LogoProps = {
  width?: string;
  color?: "white" | "black" | "blue";
};

/**
 * Logo component to display the site teller brand image.
 * 
 */
export default function Logo({ width }: LogoProps) {
  return (
    <Link to="/" draggable={false}>
      <img
        src={logo}
        alt="logo_image"
        className={styles.logo}
        style={{ width: width }}
      />
    </Link>
  );
}