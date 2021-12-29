import React from 'react';
import './previewCollection.style.scss';
import CollectionItems from '../ItemCollection/CollectionItems';

export default function PreViewCollection({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItems key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
