import React, { Component } from 'react';
import SHOP_DATA from './shopData';
import PreViewCollection from '../../components/previewCollection/PreViewCollection';

export default class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreViewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
