import { FaPlus } from "react-icons/fa";

type ProductProps = {
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const ProductCard = ({ name, price, stock, photo }: ProductProps) => {
  const handler = () => {};
  return (
    <>
      <div className="product-card">
        <img src={photo} alt="image" />
        <p>{name}</p>
        <span>PKR {price} </span>
        <span>{stock}</span>
        <div>
          <button onClick={() => handler()}></button>
          <FaPlus />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
