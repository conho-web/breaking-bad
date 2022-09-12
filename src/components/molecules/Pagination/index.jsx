import style from './style.module.scss';
import arrowLeft from 'src/assets/img/arrow-left.svg';
import arrowRight from 'src/assets/img/arrow-right.svg';

let Pagination = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.pagination}>
        <div className={style.threeNumbers}>
          <button className={style.active}>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div className={style.dots}>
          <button>...</button>
        </div>
        <div className={style.lastPage}>
          <button>8</button>
        </div>
      </div>
      <div className={style.arrows}>
        <button> <img src={arrowLeft} alt=" " /> </button>
        <button> <img src={arrowRight} alt=" " /> </button>
      </div>
    </div>
  )
}

export default Pagination;