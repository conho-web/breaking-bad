import style from './style.module.scss';

let Date = ({birthday}) => {
  return (
    <p className={style.date}>{birthday}</p>
  );
}

export default Date;