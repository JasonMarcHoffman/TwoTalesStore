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
    <div className="flex flex-col flex-1 w-full">

      <div className="h-10 bg-orange-header w-full flex justify-center items-center text-white">
        Two Tales Publishing
      </div>

      <div className="border border-gray-200 items-center py-2 w-full">
        <div className='mx-auto max-w-7xl flex justify-between'>
          <div className="flex space-x-6">
            <Link to="/">Home</Link>
            <Link to="/shop">Library</Link>
            <Link to="/our-story">Our Story</Link>
            <Link to="/contact-us">Contact Us</Link>
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
      </div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Navigation;
