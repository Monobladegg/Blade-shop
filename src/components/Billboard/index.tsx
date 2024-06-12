import { useEffect, useState, useContext } from "react";
import s from "./index.module.scss";
import { FaCircle } from "react-icons/fa";
import { AppContext } from "src/App";

interface Props {
  category: number;
}

const Billboard = ({ category }: Props) => {
  const [active, setActive] = useState<number>(0);
  const {categories} = useContext(AppContext)

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
      <div className={s.main}>
        <img
          className={s.img}
          src={categories[category].products[active].image}
          alt="billboard"
          title={categories[category].products[active].title}
        />
      </div>
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