/* eslint-disable no-unused-vars */

import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_payment_getway_pk);
const Payment = () => {
  return (
    <div className="w-2/3">
      <h2 className="text-3xl font-bold text-center mb-10">
        Make Your payment Done !
      </h2>
      <Elements stripe={stripePromise}>
        <CheckOut></CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;
