import { useState, useContext } from 'react';
import { Card } from 'src/components/Cards/Card';
import s from './index.module.scss';
import { Modal } from '../shared/modal';
import { AppContext } from 'src/App';

interface Props {
  allProducts?: boolean;
}

export const Cards = ({allProducts = false}: Props) => {

  const modalUseState = {
    active: false,
    text: "",
    };
    
    const [modal, setModal] = useState(modalUseState);
    const [text, setText] = useState("");
    
      const closeModal = () => {
        setModal({ ...modal, active: false });
      };

  if (allProducts) {

    const { allProducts } = useContext(AppContext);

    return <div className={s.cards}>
    {allProducts.map((_: any, index: number) => (
      <Card
        modal={modal}
        setModal={setModal}
        text={text}
        setText={setText}
        key={index}
        active={index}
        allProducts={true}
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

  const { categories } = useContext(AppContext);


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
          setText={setText}
          modal={modal}
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
