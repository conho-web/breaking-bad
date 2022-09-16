import style from './style.module.scss';

let Date = ({date}) => {
  return (
    <p className={style.date}>{date}</p>
  );
}

export default Date;