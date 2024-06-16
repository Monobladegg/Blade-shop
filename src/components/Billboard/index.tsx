import { useEffect, useState } from "react";
import s from "./index.module.scss";
import { FaCircle } from "react-icons/fa";
import { useAppSelector } from "src/redux/store/hooks";
import { RootState } from "src/redux/store";
import { ICategory, IProduct } from "src/types";
import { Link } from "react-router-dom";

interface Props {
  category: number;
}

const Billboard = ({ category }: Props) => {
  const categories: ICategory[] = useAppSelector((state: RootState) => state.categories.categories);
  const allProducts: IProduct[] = useAppSelector((state: RootState) => state.allProducts.allProducts);

  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const isValidCategory = category !== -1 && categories[category] && categories[category].products;

  const getProduct = () => {
    if (category === -1) {
      return allProducts[active];
    } else if (isValidCategory) {
      return categories[category].products[active];
    }
    return null;
  };

  const product = getProduct();

  if (!product) {
    return <div>Error: Invalid category index or no products available.</div>;
  }

  return (
    <div className={s.billboard}>
      <Link to={`/${product.id -1}`}>
        <div className={s.main}>
          <img className={s.img} src={product.image} alt="billboard" title={product.title} />
        </div>
      </Link>
      <div className={s.description}>
        {[0, 1, 2].map((index) => (
          <FaCircle
            key={index}
            size={20}
            className={`${s.circle} ${active === index && s.circleActive}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Billboard;
