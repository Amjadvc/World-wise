import styles from "./Flag.module.css";
function Flag({ emoji, type }) {
  if (!emoji) return null;
  return (
    <span className={`${styles.flag} ${styles[type]}`}>
      <img
        src={`https://flagcdn.com/48x36/${emoji.toLowerCase()}.png`}
        alt={emoji}
      />
    </span>
  );
}

export default Flag;
