import styles from './card.module.scss';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import Status from 'src/components/atoms/Status/Status';
import Name from 'src/components/atoms/Name/Name';
import Date from 'src/components/atoms/Date/Date';

function Card() {
  return (
    <div className={styles.card}>
      <Avatar />
      <div className={styles.wrapper}>
        <Status />
        <Name />
        <Date />
      </div>
    </div>
  );
}

export default Card;