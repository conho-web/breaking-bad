import arrowLeft from 'src/assets/img/arrow-left.svg';
import arrowRight from 'src/assets/img/arrow-right.svg';
import styles from './pagination.module.scss';

let Pagination = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pagination}>
        <div className={styles.threeNumbers}>
          <button className={styles.active}>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div className={styles.dots}>
          <button>...</button>
        </div>
        <div className={styles.lastPage}>
          <button>8</button>
        </div>
      </div>
      <div className={styles.arrows}>
        <button> <img src={arrowLeft} alt=" " /> </button>
        <button> <img src={arrowRight} alt=" " /> </button>
      </div>
    </div>
  )
}

export default Pagination;