import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./cart-dropdown.style.scss";
import CartItems from "../cart-items/cart-items";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItems key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
