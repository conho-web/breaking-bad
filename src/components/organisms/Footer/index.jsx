import style from './style.module.scss';
import getCurrentDate from 'src/assets/utils/date/getCurrentDate';

let Footer = () => {
  return (
    <footer className={style.footer}>
      <p>{ getCurrentDate() }</p>
      <p>@conho</p>
    </footer>
  )
}

export default Footer;