import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreViewCollection from "../../components/previewCollection/PreViewCollection";
import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => (
  <div className="shop-page" >
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreViewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});
export default connect(mapStateToProps)(ShopPage);
