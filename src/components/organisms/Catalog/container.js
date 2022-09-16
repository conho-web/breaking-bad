import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCards } from 'src/store/slices/cardsSlice';
import Catalog from './component';

let CatalogContainer = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards.cards);

  useEffect(() => {
    dispatch(getCards());
  }, []);

  return (
    <Catalog cards={cards} />
  )
}

export const container = CatalogContainer;