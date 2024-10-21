import { Hex } from "../../constants/mapConstants";
import styles from "./Colorbox.module.css";

type ColorboxProps = {
  label: string;
  color?: Hex;
  fontSize?: string;
}

/**
 * Colorbox component to display the color and label of clusters.
 */
export default function Colorbox({ label, color, fontSize }: ColorboxProps) {
  return (
    <div className={styles.container}>
      <div className={styles.colorbox} style={color && {backgroundColor:color}}></div>
      <p className={styles.text} style={{fontSize}}>{label}</p>
    </div>
  )
}