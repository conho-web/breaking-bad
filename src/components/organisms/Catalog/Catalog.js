import styles from './catalog.module.scss';
import Search from 'src/components/molecules/Search/Search';
import RadioButons from 'src/components/molecules/RadioButtons/RadioButtons';
import Card from 'src/components/molecules/Card/Card';
import Pagination from 'src/components/molecules/Pagination/Pagination';
import Mapper from 'src/components/molecules/Mapper/Mapper';
import {useSelector} from 'react-redux';

let Catalog = () => {
  const cards = useSelector(state => state.cards.cards);
  let listItems = cards.map(({id, title, date, alive}) => <Card key={id} title={title} date={date} alive={alive} /> );

  return (
    <div className={styles.catalog}>
      <Search />
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>Каталог</h2>
          <RadioButons />
        </div>  
        <div className={styles.cards}>
          {listItems}
        </div>
        <div className={styles.navigation}>
          <Pagination />
          <Mapper />
        </div>
      </div>
    </div>
  )
}

export default Catalog;