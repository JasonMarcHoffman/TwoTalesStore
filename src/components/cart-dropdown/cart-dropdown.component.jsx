import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className="flex flex-col p-4 absolute right-12 top-20 border border-gray-200 bg-white">

      <div className='flex flex-col space-y-3 mb-4 max-h-52 overflow-y-auto w-96'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>

      {cartItems.length !== 0 ? 
        <p
          className='py-2 bg-gray-100 border border-gray-200 px-3 cursor-pointer hover:bg-gray-200 text-center'
          onClick={goToCheckoutHandler}
        >
          CHECKOUT
        </p>   
      : null}


    </div>
  );
};

export default CartDropdown;
