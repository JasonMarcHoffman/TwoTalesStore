import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="mx-12">
      <h1 className="text-center my-4 font-bold">CHECKOUT PAGE</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="col-span-1 border border-gray-200 p-4 mb-4">
          TOTAL: ${cartTotal}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
