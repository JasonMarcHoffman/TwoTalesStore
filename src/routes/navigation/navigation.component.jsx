import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import Footer from "../../components/footer/footer.component";

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <div className="bg-gray-50 flex flex-col h-full">
      <div className="h-10 bg-gray-200 w-full flex justify-center items-center">
        Two Tales Publishing
      </div>

      <div className="border border-gray-200 flex justify-between px-12 items-center py-2">
        <div className="flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>
        <div className="flex items-center space-x-6">
          {currentUser ? (
            <span onClick={signOutUser}>Sign Out</span>
          ) : (
            <Link to="auth">Sign In</Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />

      <Footer />
    </div>
  );
};

export default Navigation;
