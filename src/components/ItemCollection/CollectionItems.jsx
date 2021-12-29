import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./itemCollection.style.scss";
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/cart.action";

const CollectionItems = ({ item, addItems }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => addItems(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItems: (item) => dispatch(addItems(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItems);
