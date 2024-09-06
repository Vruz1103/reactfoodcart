import styles from "../assets/css/AddButton.module.css";

export default function AddButton({ onClick }) {
  return (
    <button className={styles.addButton} onClick={onClick}>
      + Add
    </button>
  );
}