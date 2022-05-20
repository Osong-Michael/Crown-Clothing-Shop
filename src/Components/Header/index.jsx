import React, { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { signOutUser } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { UserContext } from '../../Context/userContext';
import { CartContext } from '../../Context/cartContext';


import './index.scss';


const Header = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    const signOutHandle = async () => {
        await signOutUser();
    };

    return (
        <Fragment>
            <div className="header">
                <Link className='logo-container' to='/'>
                    <Logo className='logo' />
                </Link>

                <div className="options">
                    <Link className='option' to="/shop">
                        SHOP
                    </Link>
                    <Link className='option' to="/shop">
                        CONTACT
                    </Link>
                    {
                        currentUser ? 
                        (   <div
                                className="option"
                                onClick={signOutHandle}
                            >
                                SIGN OUT
                            </div>
                        )
                        :
                        (   <Link className='option' to="/auth">
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon />
                </div>
               { isCartOpen &&  <CartDropdown /> }
            </div>
            <Outlet />
        </Fragment>
    )
};

export default Header;