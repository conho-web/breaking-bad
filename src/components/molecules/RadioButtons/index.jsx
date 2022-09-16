import style from './style.module.scss';
import list from 'src/assets/img/list.svg';
import columns from 'src/assets/img/columns.svg';

let RadioButons = () => {
  return (
    <div className={style.radioButtons}>
      <button className={style.radioButton}> <img src={list} alt=" " /> </button>
      <button className={style.radioButton}> <img src={columns} alt=" " /> </button>
    </div>
  )
}

export default RadioButons;