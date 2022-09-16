import style from './style.module.scss';
import logo from 'src/assets/img/logo.png';
import burger from 'src/assets/img/burger.svg';

let Header = () => {
  return (
    <header className={style.header}>
      <a href="/"><img src={logo} alt=" " /></a>
      <button className={style.burgerButton}> <img src={burger} className={style.burgerImg} alt=" "/>Каталог</button>
    </header>
  )
}

export default Header;