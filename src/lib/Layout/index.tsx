import Nav from "src/components/Nav";
import { ICategory } from "@/types/db";
import Header from "src/components/Header";

type Props = {
  children: React.ReactNode;
  active: number;
  db: ICategory[];
};

const Layout = ({ children, active, db }: Props) => {
  return (
    <>
      <Header db={db} />
      <div className="main">
        <Nav db={db} active={active} />
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default Layout;
