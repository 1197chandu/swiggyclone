import { useSelector } from "react-redux";
import AccordionList from "./AccordianList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="m-4 p-4 text-center font-bold">
        <h1>Cart</h1>
      </div>
      <div className="flex justify-center m-4">
        <button
          className="bg-black text-white p-2 rounded"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className=" bg-gray-100 w-6/12 shadow-lg rounded m-auto p-4">
        <AccordionList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
