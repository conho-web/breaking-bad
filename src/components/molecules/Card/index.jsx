import style from './style.module.scss';
import Avatar from 'src/components/atoms/Avatar';
import Status from 'src/components/atoms/Status';
import Name from 'src/components/atoms/Name';
import Date from 'src/components/atoms/Date';

let Card = ({name, birthday, status, img}) => {
  return (
    <div className={style.card}>
      <Avatar img={img} />
      <div className={style.wrapper}>
        <Status status={status} />
        <Name name={name} />
        <Date birthday={birthday} />
      </div>
    </div>
  );
}

export default Card;