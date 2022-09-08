import styles from './catalog.module.scss';
import Search from 'src/components/molecules/Search/Search';
import RadioButons from 'src/components/molecules/RadioButtons/RadioButtons';
import Card from 'src/components/molecules/Card/Card';
import Pagination from 'src/components/molecules/Pagination/Pagination';
import Mapper from 'src/components/molecules/Mapper/Mapper';

function Catalog() {
  let cards = [
    {
      id: 1,
      title: "Андрей Новик",
      date: "12.04.2002",
      alive: false,
    },
    {
      id: 2,
      title: "Максим Новик",
      date: "02.02.2000",
      alive: true,
    },
    {
      id: 3,
      title: "Антон Никончук",
      date: "06.01.2004",
      alive: true,
    },
    {
      id: 4,
      title: "Василий Новик",
      date: "24.05.2003",
      alive: true,
    },
    {
      id: 5,
      title: "Иван Туз",
      date: "13.05.2003",
      alive: false,
    }
  ];

  let listItems = cards.map((card) => <Card key={card.id} title={card.title} date={card.date} alive={card.alive} /> );

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