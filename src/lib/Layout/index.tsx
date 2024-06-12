import Nav from "src/components/Nav";
import { ICategory } from "@/types/db";
import Header from "src/components/Header";
import Billboard from "src/components/Billboard";

type Props = {
  children: React.ReactNode;
  active?: number;
  nav?: boolean;
  header?: boolean;
  billboard?: boolean;
};

const Layout = ({ children, active = 0, nav = true, header = true, billboard = false }: Props) => {

  return (
    <div className="layout">
      {header && <Header />}
      <div className="main">
        {nav && <Nav active={active+1} />}
        <div className="content">
          {billboard && <Billboard category={active} />}
          {children}
          </div>
      </div>
    </div>
  );
};

export default Layout;
