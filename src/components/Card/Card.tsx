import "./card.css";

interface CardProps {
  title: string;
  price: number;
  image: string;
}

export function CardComponent({ image, price, title }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>
        <b>Valor:</b>
        {price}
      </p>
    </div>
  );
}
