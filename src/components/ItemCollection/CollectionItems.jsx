import React from 'react'
import CustomButton from '../custom-button/CustomButton';
import './itemCollection.style.scss';

export default function CollectionItems({id,name,imageUrl,price}) {
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton inverted>Add to cart</CustomButton>
        </div>
    )
}
