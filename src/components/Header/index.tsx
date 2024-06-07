import s from "./index.module.scss";
import Search from "src/components/Search";
import { ICategory } from "src/types/db";

import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";

type Props = {
  db: ICategory[];
};

const Header = ({ db }: Props) => {
  return (
    <div className={s.header}>
      <div className={s.left}>
        <h1>Blade-shop</h1>
      </div>
      <div className={s.center}>
        <Search db={db} />
      </div>
      <div className={s.right}>
        <div className={s.element}>
          <FaRegUserCircle size={37} />
        </div>
        <div className={s.element}>
          <FaShoppingCart size={37} />
        </div>
        <div className={s.element}>
          <TiDocumentText size={37} />
        </div>
      </div>
    </div>
  );
};

export default Header;
