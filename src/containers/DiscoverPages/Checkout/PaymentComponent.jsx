import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51L5k11Ige6jHU45t9At0DFGCHueTidcYty0Sv8xmx5dUkVPgDfQVSqJ3OoiuNS5NzEpQ8w1BeBQlDSh4h3DDkWTU00Uu23f3lr"
);

const PaymentForm = () => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded
      return;
    }

    setLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        "pi_3OxqwJIge6jHU45t2DONn5YU_secret_Q2LqUrerBvPN5zg4GaQW0lK37",
        {
            elements,
            confirmParams:{
                return_url:"http://localhost:3001/discover/successfully"
            }
        }
      );

      if (error) {
        console.error("Payment failed:", error);
      } else {
        console.log("Payment succeeded:", paymentIntent);
        // Handle successful payment, e.g., redirect to a success page
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

const PaymentComponent = () => {
  return (
    <>
      {stripePromise && (
        <Elements stripe={stripePromise} options={{clientSecret:"pi_3OxqPRIge6jHU45t2r6iGiR8_secret_gq3Ymsq6GmZ73LlHNhWhdBeCO"}}>
          <PaymentForm />
        </Elements>
      )}
    </>
  );
};

export default PaymentComponent;
