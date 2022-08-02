import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectIsCartOpen } from '../../Store/Cart/cart.selectors';
import { signOutStart } from '../../Store/User/user.actions';
import { RootState } from '../../Store/store';


import { HeaderContainer, OptionsContainer, LogoContainer, OptionLink } from './index.styles';


const Header = () => {
    const { currentUser } = useSelector(((state: RootState) => state.user));
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();
    const signOutHandle = () => dispatch(signOutStart());

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