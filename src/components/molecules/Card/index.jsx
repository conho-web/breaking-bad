import style from './style.module.scss';
import Avatar from 'src/components/atoms/Avatar';
import Status from 'src/components/atoms/Status';
import Name from 'src/components/atoms/Name';
import Date from 'src/components/atoms/Date';

let Card = ({title, date, alive}) => {
  return (
    <div className={style.card}>
      <Avatar />
      <div className={style.wrapper}>
        <Status alive={alive} />
        <Name title={title} />
        <Date date={date} />
      </div>
    </div>
  );
}

export default Card;