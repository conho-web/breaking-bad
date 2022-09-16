import style from './style.module.scss';

let Mapper = () => {
  return (
    <div className={style.mapper}>
      <p className={style.title}>Отобразить карточек:</p>
      <div className={style.buttons}>
        <button className={style.active}>5</button>
        <button>10</button>
        <button>15</button>
        <button>20</button>
      </div>
    </div>
  )
}

export default Mapper;