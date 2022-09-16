import style from './style.module.scss';

let Status = ({status}) => {
  if (status === "НЕ ЖИВОЙ") {
    return (
      <div className={style.noAlive}>
        <p>{status}</p>
      </div>
    );
  }

  return (
    <div className={style.alive}>
      <p>{status}</p>
    </div>
  );
}

export default Status;