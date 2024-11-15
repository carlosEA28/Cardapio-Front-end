import { CardComponent } from "./components/Card/Card";
import { useFoodData } from "./hooks/useFoodData";
import "./App.css";
import { useState } from "react";
import { ModalComponent } from "./components/create-modal/Create-modal";

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map((foodData) => (
          <CardComponent
            price={foodData.price}
            image={foodData.image}
            title={foodData.title}
          />
        ))}
        <div>
          {isModalOpen && <ModalComponent closeModal={handleOpenModal} />}

          <button onClick={handleOpenModal}>novo</button>
        </div>
      </div>
    </div>
  );
}

export default App;
