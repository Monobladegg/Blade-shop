import React from 'react';
import s from './index.module.scss';
import { SlClose } from 'react-icons/sl';

type Props = {
  text: string;
  type: string;
  typeColor: "green" | "red" | "yellow";
  closeModal: () => void;
};

export const Modal = ({ text, type, typeColor, closeModal }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.message}>
        <SlClose className={s.close} onClick={closeModal} color="black" size={40} />
        <h2 className={s.text}>{text}</h2>
        <h3 className={s.type} style={{color: typeColor, textShadow: `0 0 15px ${typeColor}`}}>{type}</h3>
      </div>
    </div>
  );
};
