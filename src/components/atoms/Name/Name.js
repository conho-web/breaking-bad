import styles from "./name.module.scss";

let Name = ({title}) => {
  return (
    <p className={styles.name}>{title}</p>
  );
}

export default Name;