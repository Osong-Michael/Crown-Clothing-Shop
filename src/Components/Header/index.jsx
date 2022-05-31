import React, { Fragment, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { signOutUser } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { CartContext } from '../../Context/cartContext';


import { HeaderContainer, OptionsContainer, LogoContainer, OptionLink } from './index.styles';


const Header = () => {
    const { currentUser } = useSelector((state => state.user));
    const { isCartOpen } = useContext(CartContext);
    const signOutHandle = async () => {
        await signOutUser();
    };

    return (
        <Fragment>
            <HeaderContainer>
                <LogoContainer to='/'>
                    <Logo className='logo' />
                </LogoContainer>

                <OptionsContainer>
                    <OptionLink to="/shop">
                        SHOP
                    </OptionLink>
                    <OptionLink to="/shop">
                        CONTACT
                    </OptionLink>
                    {
                        currentUser ? 
                        (   <OptionLink
                                as='div'
                                className="option"
                                onClick={signOutHandle}
                            >
                                SIGN OUT
                            </OptionLink>
                        )
                        :
                        (   <OptionLink to="/auth">
                                SIGN IN
                            </OptionLink>
                        )
                    }
                    <CartIcon />
                </OptionsContainer>
               { isCartOpen &&  <CartDropdown /> }
            </HeaderContainer>
            <Outlet />
        </Fragment>
    )
};

export default Header;