import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const pricrForStripe = price * 100;
  const publishableKey =
    "pk_test_51Ie2scAtZ3npWhXt33Xt6x9ZgVhChJBBdA1z3feqrENeyMIqTKl8cA05oJ9N4rCUezKu0VsRfPbQWrwE2lcdmS6I00Wds749xz";
  const onToken = (token) => {
    console.log(token);
    alert("Payments Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Al-amin Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is $${price}`}
      amount={pricrForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;