import { FC } from "react";
import s from "./index.module.scss";
import { useAppDispatch } from "src/redux/store/hooks";
import { fetchAllProducts } from "src/redux/slices/data/allProductsSlice";

const Search: FC = () => {
  const dispatch = useAppDispatch();

  const changeSearch = (value: string) => {
    dispatch(fetchAllProducts({ search: value }));
  };

  return (
    <input
      onChange={(e) => changeSearch(e.target.value)}
      className={s.input}
      type="text"
      placeholder="Поиск..."
    />
  );
};

export default Search;
