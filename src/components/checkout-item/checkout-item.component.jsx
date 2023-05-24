import { useDispatch, useSelector } from 'react-redux';

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

    return (
      <div className="flex space-x-10 border border-gray-200 p-2 mb-4">
        <div>
          {/* <img src={imageUrl} alt={`${name}`} /> */}
          IMAGE
        </div>
        <div className="flex flex-col space-y-2">
          <span>{name}</span>
          <span className="flex space-x-3">
            <p
              className="bg-gray-200 border bprder-gray-200 py-1 px-3 rounded-full font-medium"
              onClick={removeItemHandler}
            >
              -
            </p>
            <span>QTY: {quantity}</span>
            <p
              className="bg-gray-200 border bprder-gray-200 py-1 px-3 rounded-full font-medium"
              onClick={addItemHandler}
            >
              +
            </p>
          </span>
          <span>Price: ${price}</span>
        </div>
        <div className="text-red-400 cursor-pointer" onClick={clearItemHandler}>
          Remove &#10005;
        </div>
      </div>
    );
};

export default CheckoutItem;
