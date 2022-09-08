import styles from './status.module.scss';

function Status(props) {
  if (props.alive) {
    return (
      <div className={styles.alive}>
        <p>ЖИВОЙ</p>
      </div>
    );
  }

  return (
    <div className={styles.noAlive}>
      <p>НЕ ЖИВОЙ</p>
    </div>
  );
}

export default Status;