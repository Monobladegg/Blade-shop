import s from "./index.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ICategory } from "src/types";
import { RootState } from "src/redux/store";

type Props = {
  active: number;
};

const Navigation = ({ active }: Props) => {

  const categories: ICategory[] = useSelector((state: RootState) => state.categories.categories);

  return (
    <div className={s.nav}>
      <Link to="/">
        <h2 className={s.title}>Blade-shop!<br />Магазин приколов!</h2>
      </Link>
      <div className={s.buttons}>
        {categories.map((item: ICategory) => (
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

export default Navigation;
