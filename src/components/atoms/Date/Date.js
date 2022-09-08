import styles from './date.module.scss';

function Date(props) {
  return (
    <p className={styles.date}>{props.date}</p>
  );
}

export default Date;