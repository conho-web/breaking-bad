import styles from './status.module.scss';

function Status() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>ЖИВОЙ</p>
    </div>
  );
}

export default Status;