import style from './style.module.scss';
import search from 'src/assets/img/search.svg';

let Search = () => {
  return (
    <label className={style.search}>
      <input type="text" />
      <button> <img src={search} alt=" " /> Найти</button>
    </label>
  )
}

export default Search;