import { useSelector } from 'react-redux';
import loadingImg from 'src/assets/img/loading.gif';
import style from './style.module.scss';

let Loading = () => {
  const loading = useSelector(state => state.cards.loading);
  
  let checkLoading;
  if (loading) {
    checkLoading = <img src={ loadingImg }/>;
  }

  return (
    <div className={style.loading}>{ checkLoading }</div>
  )
}

export default Loading;