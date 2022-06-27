import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { selectCartTotal } from '../../Store/Cart/cart.selectors';
import { BUTTON_TYPES } from '../CustomButton';
import { PaymentFormContainer, FormContainer, PaymenButton } from './index.styles';


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { currentUser } = useSelector((state => state.user));
    const amount = useSelector(selectCartTotal);
    const [isProcessingPayment, setIsProcessingPayemnt] = useState(false);


    const paymentHandler = async e => {
        e.preventDefault();
        
        if(!stripe || !elements) return;

        setIsProcessingPayemnt(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 }),
        }).then(res => res.json());

        const { paymentIntent: { client_secret } } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest'
                },
            }
        });

        setIsProcessingPayemnt(false);

        if(paymentResult.error) {
            alert('ERROR', paymentResult.error)
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment successful');
            }
        }
    };


    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <PaymenButton isLoading={isProcessingPayment}  buttonType={BUTTON_TYPES.inverted}>Pay Now</PaymenButton>
            </FormContainer>
        </PaymentFormContainer>
    )
};

export default PaymentForm;