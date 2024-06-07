import { useEffect, useState } from "react";
import s from "./index.module.scss";
import { FaCircle } from "react-icons/fa";
import { ICategory } from "src/types/db";

interface Props {
  db: ICategory[];
  typeProducts: number;
}

const Billboard = ({ db, typeProducts }: Props) => {
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!db[typeProducts] || !db[typeProducts].products) {
    return <div>Error: Invalid typeProducts index or no products available.</div>;
  }

  return (
    <div className={s.billboard}>
      <div className={s.main}>
        <img
          className={s.img}
          src={db[typeProducts].products[active].image}
          alt="billboard"
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