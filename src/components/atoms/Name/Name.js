import styles from "./name.module.scss";

function Name(props) {
  return (
    <p className={styles.name}>{props.title}</p>
  );
}

export default Name;