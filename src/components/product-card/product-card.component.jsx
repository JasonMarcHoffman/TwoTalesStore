import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className='flex flex-col'>
      <div className="flex border border-gray-200 p-2 justify-between">
        <p>{name}</p>
        <p>{price}</p>
        {/* <img src={imageUrl} alt={`${name}`} /> */}
      </div>
      <div onClick={addProductToCart} className='cursor-pointer text-sm text-blue-500'>Add to cart</div>
    </div>
  );
};

export default ProductCard;
