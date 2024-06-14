import { useEffect, useState } from "react";
import s from "./index.module.scss";
import { FaCircle } from "react-icons/fa";
import { useAppSelector } from "src/redux/store/hooks";
import { RootState } from "src/redux/store";
import { ICategory } from "src/types";
import { Link } from "react-router-dom";

interface Props {
  category: number;
}

const Billboard = ({ category }: Props) => {
  const categories: ICategory[] = useAppSelector((state: RootState) => state.categories.categories);

  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!categories[category] || !categories[category].products) {
    return <div>Error: Invalid typeProducts index or no products available.</div>;
  }

  return (
    <div className={s.billboard}>
        <Link to={`/${categories[category].products[active].id}`}>
      <div className={s.main}>
        <img
          className={s.img}
          src={categories[category].products[active].image}
          alt="billboard"
          title={categories[category].products[active].title}
          />
      </div>
          </Link>
      <div className={s.description}>
        <FaCircle
          size={20}
          className={`${s.circle} ${active === 0 && s.circleActive}`}
          onClick={() => setActive(0)}
        />
        <FaCircle
          size={20}
          className={`${s.circle} ${active === 1 && s.circleActive}`}
          onClick={() => setActive(1)}
        />
        <FaCircle
          size={20}
          className={`${s.circle} ${active === 2 && s.circleActive}`}
          onClick={() => setActive(2)}
        />
      </div>
    </div>
  );
};

export default Billboard;