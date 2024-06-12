import { AppContext } from "src/App";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import s from "./index.module.scss";
import Layout from "src/lib/Layout";

export const CardPage = () => {
  const { cardId } = useParams();
  const { allProducts } = useContext(AppContext);

  const product = allProducts && allProducts[Number(cardId)];

  if (!product) {
    return (
      <Layout active={0}>
        <center>
          <h1>
            Данные подгружаются. Если это происходит слишком долго, то скорее
            всего произошла ошибка. Товар не найден
          </h1>
        </center>
      </Layout>
    );
  }

  return (
    <Layout active={0}>
      <div className={s.card}>
        <div className={s.imgContainer}>
          <img
            src={product.image}
            alt={product.title}
            title={product.title}
            className={s.img}
          />
        </div>
        <div className={s.info}>
          <h3>{product.title}</h3>
          <h3>
            {product.price} грн. - {product.author}
          </h3>
          <div className={s.stars}>
            <h4>Рейтинг: {product.rating}</h4>
            <img
              src={"./stars/" + product.rating + "-removebg-preview.png"}
              height={18}
              alt="card"
            />
          </div>
          <div className={s.stars}>
            <h4>Рейтинг: {product.popularity}</h4>
            <img
              src={"./stars/" + product.popularity + "-removebg-preview.png"}
              height={18}
              alt="card"
            />
          </div>
          <div className={s.buttons}>
            <button>
              <p>В корзину</p>
            </button>
            <button>
              <p>В избранное</p>
            </button>
          </div>
        </div>
      </div>
      <button className={s.back} onClick={() => window.history.back()}>
        <h5>Вернуться назад</h5>
      </button>
    </Layout>
  );
};
