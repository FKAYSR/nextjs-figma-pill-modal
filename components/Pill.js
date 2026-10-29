import styles from "./Pill.module.css";

// Figma: the component set "Pill" with the variants Type and State.
// Pass children to change the label and onClick to handle activation.
export default function Pill({ children, type = "Primary", onClick }) {
  // Type maps to the Primary or Secondary visual variant.
  const variant = type === "Secondary" ? styles.secondary : styles.primary;

  return (
    <button
      type="button"
      className={`${styles.pill} ${variant}`}
      onClick={onClick}
    >
      {children ?? type}
    </button>
  );
}
