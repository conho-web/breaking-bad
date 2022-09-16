import style from './style.module.scss';

let Avatar = ({img}) => {
  return (
    <div className={style.wrapper} style={{backgroundImage: 'url('+img+')'}}></div>
  );
}

export default Avatar;