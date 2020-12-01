import React, {useState} from "react";
import './Stripe.css'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { Button} from "react-bootstrap";


export const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount ] = useState(0);
  const [customer, setcustomer ] = useState(0);

  const handleSubmit = async (event) => {
    console.log("PAYMENT BUTTON CLICKED");
    event.preventDefault();
    const index = window.location.pathname.lastIndexOf("/")
    const organizations= window.location.pathname.slice(index+1)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://final-2020b.herokuapp.com/stripe/charge",
          {
            amount: amount,
            customer:customer,
            organizationId:organizations,
            id: id,
            userId: props.user
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!")
          window.location ="/profile"
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };


  const CARD_OPTIONS = {
      iconStyle: 'solid',
      style: {
        base: {
          iconColor: '#c4f0ff',
          color: '#318000',
          fontWeight: 700,
          width:'300px',
          fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
          fontSize: '16px',
          fontSmoothing: 'antialiased',
          ':-webkit-autofill': {color: '#fce883'},
          '::placeholder': {color: '#256000'},
        },
        invalid: {
          iconColor: '#ffc7ee',
          color: '#318000',
        },
      },
    };




  return (
    <div className="CheckoutContainer">
    <div className="formContainer">
    <form className="form" onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
    <h1 className="under stripeThanks"> Thank you</h1>


    <label className="label1">Enter Amount </label>
    <input className="input" placeholder="Amount" onChange={ (e) => setAmount(e.target.value)}/>


    <label className="label2 "> Enter email </label>
    <input className="input stripeEmail" placeholder="Email" onChange={ (e) => setcustomer(e.target.value)}/>

      <CardElement options={CARD_OPTIONS} className="cardInput"/>
      <Button type="submit" className="payBtn">Pay</Button>

    </form>
    </div>
    </div>
  );
};
