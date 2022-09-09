import styles from './status.module.scss';

let Status = ({alive}) => {
  if (alive === "НЕ ЖИВОЙ") {
    return (
      <div className={styles.noAlive}>
        <p>{alive}</p>
      </div>
    );
  }

  return (
    <div className={styles.alive}>
      <p>{alive}</p>
    </div>
  );
}

export default Status;