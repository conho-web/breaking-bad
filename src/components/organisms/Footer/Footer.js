import styles from './footer.module.scss';
import getCurrentDate from 'src/assets/utils/date/getCurrentDate';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>{ getCurrentDate() }</p>
      <p>@conho</p>
    </footer>
  )
}

export default Footer;