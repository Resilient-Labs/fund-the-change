import React, {useState} from "react";
import './Stripe.css'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { Button} from 'react-bootstrap';


export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount ] = useState(0);
  const [customer, setcustomer ] = useState(0);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8000/stripe/charge",
          {
            amount: amount,
            customer:customer,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if
    (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
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
      <h1 className="under stripeThanks">Thank you for donating! </h1>
    <form className="form" onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
    <section className="payment">
    <div>
    <label className="label1">Enter Amount:</label>
    <input className="input" placeholder="Amount" onChange={ (e) => setAmount(e.target.value)}/>
    </div>
    <div>
    <label className="label2">  Enter email:</label>
    <input className="input" placeholder="Enter your email" onChange={ (e) => setcustomer(e.target.value)}/>
    </div>
      <CardElement options={CARD_OPTIONS} className="cardInput"/>
      <Button className="payBtn">Pay</Button>
      </section>
    </form>
    </div>
    </div>
  );
};