import arrowLeft from 'src/assets/img/arrow-left.svg';
import arrowRight from 'src/assets/img/arrow-right.svg';
import styles from './pagination.module.scss';

function Pagination() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pagination}>
        <div className={styles.threeNumbers}>
          <a href='/' className={styles.active}>1</a>
          <a href='/'>2</a>
          <a href='/'>3</a>
        </div>
        <div className={styles.dots}>
          <a href='/'>...</a>
        </div>
        <div className={styles.lastPage}>
          <a href='/'>8</a>
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