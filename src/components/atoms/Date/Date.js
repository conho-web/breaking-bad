import styles from './date.module.scss';

let Date = ({date}) => {
  return (
    <p className={styles.date}>{date}</p>
  );
}

export default Date;