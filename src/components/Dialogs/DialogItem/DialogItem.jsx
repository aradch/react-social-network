import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <img
        className={s.avatar}
        src="https://w-dog.ru/wallpapers/4/18/418634948604268/dzhared-leto-muzykant-shhetina-ochki-kapyushon-palto.jpg"
      />
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
