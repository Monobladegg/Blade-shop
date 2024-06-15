import { useState } from 'react';
import { Card } from 'src/components/Cards/Card';
import s from './index.module.scss';
import { Modal } from '../shared/modal';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { IProduct, ICategory } from 'src/types';

interface Props {
  allProductsStatus?: boolean;
}

export const Cards = ({allProductsStatus = false,}: Props) => {

  const allProducts: IProduct[] = useSelector((state: RootState) => state.allProducts.allProducts);

  const modalUseState = {
    active: false,
    text: "",
    };
    
    const [modal, setModal] = useState(modalUseState);
    const [text] = useState("");
    
      const closeModal = () => {
        setModal({ ...modal, active: false });
      };

  if (allProductsStatus) {

    return <div className={s.cards}>
    {allProducts.map((_: any, index: number) => (
      <Card
        setModal={setModal}
        text={text}
        key={index}
        active={index}
        allProductsStatus={true}
      />
    ))}
    {modal.active ? (
      <Modal
        text={text}
        type={modal.text}
        typeColor="green"
        closeModal={closeModal}
      />
    ) : null}
  </div>;
  }

  const categories: ICategory[] = useSelector((state: RootState) => state.categories.categories);

  if (!categories || categories.length <= 1) {
    return <div>No data available</div>;
  }

  const selectedCategory = categories[1];

  if (!selectedCategory.products || selectedCategory.products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className={s.cards}>
      {selectedCategory.products.map((_: any, index: number) => (
        <Card
          key={index}
          text={text}
          setModal={setModal}
          category={0}
          active={index}
        />
      ))}
      {modal.active ? (
        <Modal
          text={text}
          type={modal.text}
          typeColor="green"
          closeModal={closeModal}
        />
      ) : null}
    </div>
  );
};
