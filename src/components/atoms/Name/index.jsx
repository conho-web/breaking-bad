import style from "./style.module.scss";

let Name = ({name}) => {
  return (
    <p className={style.name}>{name}</p>
  );
}

export default Name;