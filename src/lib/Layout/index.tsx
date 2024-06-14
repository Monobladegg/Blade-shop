import Nav from "src/components/Nav";
import Header from "src/components/Header";
import Billboard from "src/components/Billboard";
import { useAppDispatch } from "src/redux/store/hooks";
import { useEffect } from "react";
import { fetchCategories } from "src/redux/slices/data/categoriesSlice";
import { fetchAllProducts } from "src/redux/slices/data/allProductsSlice";
import Filter from "src/components/Filter";

type Props = {
  children: React.ReactNode;
  active?: number;
  nav?: boolean;
  header?: boolean;
  billboard?: boolean;
  filter?: boolean;
};

const Layout = ({ children, active = 0, nav = true, header = true, billboard = true, filter = true }: Props) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="layout">
      {header && <Header />}
      <div className="main">
        <div className="sidebar">
        {nav && <Nav active={active+1} />}
        {filter && <Filter />}
        </div>
        <div className="content">
          {billboard && <Billboard category={active} />}
          {children}
          </div>
      </div>
    </div>
  );
};

export default Layout;
