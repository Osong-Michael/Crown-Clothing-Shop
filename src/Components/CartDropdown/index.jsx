import CustomButton from '../CustomButton';
import './index.scss';


const CartDropdown = () => {

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">

                <CustomButton>Go to checkout</CustomButton>
            </div>
        </div>
    );
};


export default CartDropdown;