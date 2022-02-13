import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionOverview from "../../components/collectionOverview/Collection-overview";
import PreViewCollection from "../../components/previewCollection/PreViewCollection";
import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = () => (
  <div className="shop-page" >
    <CollectionOverview/>
  </div>
);


export default ShopPage ;
