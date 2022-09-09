import logo from 'src/assets/img/logo.png';
import burger from 'src/assets/img/burger.svg';
import styles from './header.module.scss';

let Header = () => {
  return (
    <header className={styles.header}>
      <a href="/"><img src={logo} alt=" " /></a>
      <button className={styles.burgerButton}> <img src={burger} className={styles.burgerImg}/>Каталог</button>
    </header>
  )
}

export default Header;