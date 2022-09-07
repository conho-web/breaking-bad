import list from 'src/assets/img/list.svg';
import columns from 'src/assets/img/columns.svg';
import styles from './radioButtons.module.scss';

function RadioButons() {
  return (
    <div className={styles.radioButtons}>
      <button className={styles.radioButton}> <img src={list} alt=" " /> </button>
      <button className={styles.radioButton}> <img src={columns} alt=" " /> </button>
    </div>
  )
}

export default RadioButons;