import style from './style.module.scss';

let Status = ({alive}) => {
  if (alive === "НЕ ЖИВОЙ") {
    return (
      <div className={style.noAlive}>
        <p>{alive}</p>
      </div>
    );
  }

  return (
    <div className={style.alive}>
      <p>{alive}</p>
    </div>
  );
}

export default Status;