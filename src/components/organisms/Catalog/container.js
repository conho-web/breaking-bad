import {useSelector} from 'react-redux';
import Catalog from './component';

let CatalogContainer = () => {
  const cards = useSelector(state => state.cards.cards);

  return (
    <Catalog cards={cards}/>
  )
}

export const container = CatalogContainer;