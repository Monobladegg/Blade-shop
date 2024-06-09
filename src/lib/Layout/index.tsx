import Nav from "src/components/Nav";
import { ICategory } from "@/types/db";
import Header from "src/components/Header";
import Billboard from "src/components/Billboard";

type Props = {
  children: React.ReactNode;
  db: ICategory[];
  active?: number;
  nav?: boolean;
  header?: boolean;
  billboard?: boolean;
};

const Layout = ({ children, active = 0, db, nav = true, header = true, billboard = false }: Props) => {
  return (
    <div className="layout">
      {header && <Header db={db} />}
      <div className="main">
        {nav && <Nav db={db} active={active} />}
        <div className="content">
          {billboard && <Billboard typeProducts={active} db={db} />}
          {children}
          </div>
      </div>
    </div>
  );
};

export default Layout;
