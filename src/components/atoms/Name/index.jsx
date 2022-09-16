import style from "./style.module.scss";

let Name = ({title}) => {
  return (
    <p className={style.name}>{title}</p>
  );
}

export default Name;