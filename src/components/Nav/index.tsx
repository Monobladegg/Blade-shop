import React from "react";
import s from "./index.module.scss";
import { Link } from "react-router-dom";

type Props = {
  db: any;
  active: number;
};

const Header = ({ db, active }: Props) => {
  return (
    <div className={s.nav}>
      <Link to="/">
        <button className={active === 0 ? s.active : ""}>Home</button>
      </Link>
      {db.map((item: any) => (
        <Link to={"/" + item.title.toLowerCase()} key={item.id}>
          <button className={active === item.id ? s.active : ""}>
            {item.title}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Header;
