import styles from './mapper.module.scss';

let Mapper = () => {
  return (
    <div className={styles.mapper}>
      <p className={styles.title}>Отобразить карточек:</p>
      <div className={styles.buttons}>
        <button className={styles.active}>5</button>
        <button>10</button>
        <button>15</button>
        <button>20</button>
      </div>
    </div>
  )
}

export default Mapper;