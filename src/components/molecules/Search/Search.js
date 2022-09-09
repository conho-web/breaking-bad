import search from 'src/assets/img/search.svg';
import styles from './search.module.scss';

let Search = () => {
  return (
    <label className={styles.search}>
      <input type="text" />
      <button> <img src={search} /> Найти</button>
    </label>
  )
}

export default Search;