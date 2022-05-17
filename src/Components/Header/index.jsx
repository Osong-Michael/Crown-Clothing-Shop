import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';


import './index.scss';


const Header = ({ currentUser }) => (
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
                            onClick={() => auth.signOut()}
                        >
                            SIGN OUT
                        </div>
                    )
                    :
                    (   <Link className='option' to="/sign-in">
                            SIGN IN
                        </Link>
                    )
                }
            </div>
        </div>
        <Outlet />
    </Fragment>
);

export default Header;