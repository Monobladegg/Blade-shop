import s from "./index.module.scss";
import { useSelector } from "react-redux";
import { ICategory } from "src/types";
import { RootState } from "src/redux/store";

type Props = {
  active: number;
};

const Filter = ({ active }: Props) => {

  const categories: ICategory[] = useSelector((state: RootState) => state.categories.categories);

  return (
    <div className={s.filter}>
      <h2>Фільтр</h2>
      <div className={s.buttons}>
        <button>
          <h3 className={active === 2 ? s.active : ""}>По айді</h3>
        </button>
        <button>
          <h3 className={active === 1 ? s.active : ""}>По ціні</h3>
        </button>
        <button>
          <h3 className={active === 0 ? s.active : ""}>По рейтингу</h3>
        </button>
        <button >
          <h3 className={active === 3 ? s.active : ""}>По популярності</h3>
        </button>
      </div>
    </div>
  );
};

export default Filter;
