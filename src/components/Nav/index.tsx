import { useContext } from "react";
import s from "./index.module.scss";
import { Link } from "react-router-dom";
import { AppContext } from "src/App";

type Props = {
  active: number;
};

const Header = ({ active }: Props) => {

  const { categories } = useContext(AppContext);

  return (
    <div className={s.nav}>
      <Link to="/">
        <h2 className={s.title}>Blade-shop!<br/>Магазин приколов!</h2>
      </Link>
      <div className={s.buttons}>
      {categories.map((item) => (
        <Link to={"/" + item.title.toLowerCase()} key={item.id}>
          <button className={active === item.id ? s.active : ""}>
            {item.title}
          </button>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default Header;
