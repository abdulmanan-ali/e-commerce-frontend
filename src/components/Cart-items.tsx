import { FaTrash } from "react-icons/fa";
// import { cartItem } from "../types/types";
const photo =
  "https://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_square_32c26ad194234d42b3cd9e582a21c99b?$prod-gallery-1by1-jpg$";

type CartItemProps = {
  // cartItem: cartItem;
  incrementHandler: () => void;
  decrementHandler: () => void;
  quantity: number;
};

const CartItem = ({
  incrementHandler,
  decrementHandler,
  quantity
}: CartItemProps) => {
  // const { photo } = cartItem;


  return (
    <div className="cart-item">
      <img src={photo} alt="photo" />
      <article>
        <p>Canon Cam 884</p>
      <span>Rs. 8884</span>
      </article>

      <div>
        <button onClick={incrementHandler}>+</button>
        <span>{quantity}</span>
        <button onClick={decrementHandler}>-</button>
      </div>
      <FaTrash />
    </div>
  );
};

export default CartItem;
