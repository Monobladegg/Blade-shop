import s from "./index.module.scss";
import { useSelector } from "react-redux";
import { ICategory } from "src/types";
import { RootState } from "src/redux/store";
import { useAppDispatch } from "src/redux/store/hooks";
import { fetchAllProducts } from "src/redux/slices/data/allProductsSlice";
import { useState } from "react";

type Props = {
  active: number;
};

const Filter = ({ active }: Props) => {
  const dispatch = useAppDispatch();
  const categories: ICategory[] = useSelector((state: RootState) => state.categories.categories);

  const filterProducts = (filter: string) => {
    if (!asc) {
      filter = `-${filter}`;
    }
    dispatch(fetchAllProducts({ sort: filter, search: "" }));
    setAsc(prev => !prev);
  };

  const [asc, setAsc] = useState<boolean>(true);

  return (
    <div className={s.filter}>
      <h2>Фільтр</h2>
      <div className={s.buttons}>
        <button onClick={() => filterProducts("")}>
          <h3 className={active === 0 ? s.active : ""}>По айді</h3>
        </button>
        <button onClick={() => filterProducts("price")}>
          <h3 className={active === 1 ? s.active : ""}>По ціні</h3>
        </button>
        <button onClick={() => filterProducts("rating")}>
          <h3 className={active === 2 ? s.active : ""}>По рейтингу</h3>
        </button>
        <button onClick={() => filterProducts("popularity")}>
          <h3 className={active === 3 ? s.active : ""}>По популярності</h3>
        </button>
      </div>
    </div>
  );
};

export default Filter;
