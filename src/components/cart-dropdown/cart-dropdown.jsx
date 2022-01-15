import React from "react";
import { createStructuredSelector } from 'reselect';
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/CustomButton";
import "./cart-dropdown.style.scss";
import CartItems from "../cart-items/cart-items";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ?(
      cartItems.map((cartItem) => (
        <CartItems key={cartItem.id} item={cartItem} />
      ))): <span className="empty-message">Your cart is empty</span>
    }
    </div>
    <CustomButton onClick = {()=>{
      history.push('/checkout')
      dispatch(toggleCartHidden())
      }}>
        GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
