import styles from './card.module.scss';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import Status from 'src/components/atoms/Status/Status';
import Name from 'src/components/atoms/Name/Name';
import Date from 'src/components/atoms/Date/Date';

let Card = ({title, date, alive}) => {
  return (
    <div className={styles.card}>
      <Avatar />
      <div className={styles.wrapper}>
        <Status alive={alive} />
        <Name title={title} />
        <Date date={date} />
      </div>
    </div>
  );
}

export default Card;