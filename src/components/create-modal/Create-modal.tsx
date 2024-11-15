import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import "./modal.css";

interface InputProps {
  lable: string;
  value: string | number;
  updateValue(value: any): void;
}

interface ModalProps {
  closeModal(): void;
}

const Input = ({ lable, value, updateValue }: InputProps) => {
  return (
    <>
      <label htmlFor="">{lable}</label>
      <input
        type="text"
        name=""
        id=""
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
    </>
  );
};

export function ModalComponent({ closeModal }: ModalProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const { mutate, isSuccess, isPending } = useFoodDataMutate();

  const submit = () => {
    const foodData: FoodData = {
      title,
      price,
      image,
    };

    mutate(foodData);
  };

  useEffect(() => {
    if (!isSuccess) return;

    closeModal();
  }, [isSuccess]);
  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre um novo item no cardápio</h2>
        <form action="" className="input-container">
          <Input lable="title" value={title} updateValue={setTitle} />
          <Input lable="price" value={price} updateValue={setPrice} />
          <Input lable="image" value={image} updateValue={setImage} />
        </form>
        <button onClick={submit} className="btn-secondary">
          Postar
        </button>
        {isPending ? "postando..." : "postar"}
      </div>
    </div>
  );
}
