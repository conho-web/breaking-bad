import style from './style.module.scss';
import Search from 'src/components/molecules/Search';
import RadioButons from 'src/components/molecules/RadioButtons';
import Card from 'src/components/molecules/Card';
import Pagination from 'src/components/molecules/Pagination';
import Mapper from 'src/components/molecules/Mapper';
import Loading from 'src/components/atoms/Loading/index';

let Catalog = ({cards}) => {
  let listItems = cards.map(({char_id, name, birthday, status, img}) => <Card key={char_id} name={name} birthday={birthday} status={status} img={img} /> );
  
  return (
    <div className={style.catalog}>
      <Search />
      <div className={style.wrapper}>
        <div className={style.title}>
          <h2>Каталог</h2>
          <RadioButons />
        </div>  
        <Loading />
        <div className={style.cards}>
          {listItems}
        </div>
        <div className={style.navigation}>
          <Pagination />
          <Mapper />
        </div>
      </div>
    </div>
  )
}

export default Catalog;