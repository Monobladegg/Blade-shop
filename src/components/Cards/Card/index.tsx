import { useAppSelector } from "src/redux/store/hooks";
import s from "./index.module.scss";
import { RootState } from "src/redux/store";
import { ICategory, IProduct } from "src/types";

interface Props {
  category?: number;
  active: number;
  modal: { active: boolean; text: string };
  setModal: React.Dispatch<React.SetStateAction<{ active: boolean; text: string }>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  allProductsStatus?: boolean;
}

export const Card = ({ category, active, modal, setModal, text, setText, allProductsStatus = false }: Props) => {

  const useSelector = useAppSelector;

  const allProducts: IProduct[] = useSelector((state: RootState) => state.allProducts.allProducts);
  
  if (allProductsStatus) {

    const goToCardPage = () => {
      window.location.href = `/${allProducts[active].id - 1}`;
    };

    return (
      <div className={s.card}>
      <img
        className={s.img}
        src={allProducts[active].image}
        alt="card"
        title={allProducts[active].title}
        width={320}
      />
      <p>{allProducts[active].title}</p>
      <p>{allProducts[active].price} грн. - {allProducts[active].author}</p>
      <div className={s.stars}>
        <p>Рейтинг: {allProducts[active].rating}</p>
        <img
          className={s.imgStarsRat}
          src={"./stars/" + allProducts[active].rating + "-removebg-preview.png"}
          height={18}
          alt="card"
        />
      </div>
      <div className={s.stars}>
        <p>Популярність: {allProducts[active].popularity}</p>
        <img
          className={s.imgStarsPop}
          src={"./stars/" + allProducts[active].popularity + "-removebg-preview.png"}
          height={18}
          alt="card"
        />
      </div>
      <div className={s.buttons}>
        <button onClick={() => setModal({
          active: true,
          text: text + " Добавлена в корзину",
        })}>
          <p>Придбати</p>
        </button>
        <button onClick={goToCardPage}>
          <p>Детальніше</p>
        </button>
      </div>
    </div>
    );
  } else if (category !== undefined) {
    const categories: ICategory[] = useSelector((state: RootState) => state.categories.categories);
    const goToCardPage = () => {
      window.location.href = `/${categories[category].products[active].parentId}`;
      };
      
      return (
        <div className={s.card}>
        <img
          className={s.img}
          src={categories[category].products[active].image}
          alt="card"
          title={categories[category].products[active].title}
          width={320}
        />
        <p>{categories[category].products[active].title}</p>
        <p>{categories[category].products[active].price} грн. - {categories[category].products[active].author}</p>
        <div className={s.stars}>
          <p>Рейтинг: {categories[category].products[active].rating}</p>
          <img
            className={s.imgStarsRat}
            src={"./stars/" + categories[category].products[active].rating + "-removebg-preview.png"}
            height={18}
            alt="card"
          />
        </div>
        <div className={s.stars}>
          <p>Популярність: {categories[category].products[active].popularity}</p>
          <img
            className={s.imgStarsPop}
            src={"./stars/" + categories[category].products[active].popularity + "-removebg-preview.png"}
            height={18}
            alt="card"
          />
        </div>
        <div className={s.buttons}>
          <button onClick={() => setModal({
            active: true,
            text: categories[category].products[active].title + " Добавлена в корзину",
          })}>
            <p>Придбати</p>
          </button>
          <button onClick={goToCardPage}>
            <p>Детальніше</p>
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
