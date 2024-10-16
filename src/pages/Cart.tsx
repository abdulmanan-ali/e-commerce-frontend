import { useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/Cart-items";

const Cart = () => {
  const [couponcode, setCouponCode] = useState<string>("");
  const [isValidCouponcode, setIsValidCouponCode] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  const incrementHandler = () => setQuantity((prevCount) => prevCount + 1);
  const decrementHandler = () => {
    setQuantity((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  return (
    <div className="cart">
      <main>
        <CartItem
          incrementHandler={incrementHandler}
          decrementHandler={decrementHandler}
          quantity={quantity}
        />
      </main>
      <aside>
        <p>Subtotal: 7777</p>
        <p>Shipping Charges: 675</p>
        <p>Tax: 99898</p>
        <p>
          Discount: <em className="red"> - 20%</em>
        </p>
        <p>
          <b>Total: 4444</b>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponcode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponcode &&
          (isValidCouponcode ? (
            <span className="green">
              Discount off using the <code>{couponcode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
      </aside>
    </div>
  );
};

export default Cart;
