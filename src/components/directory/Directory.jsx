import React, { Component } from 'react'
import './directory.scss';

import MenuItem from '../menu-item/MenuItem';
import hats from '../../img/hats.jpg';
import jackets from '../../img/jackets.jpg';
import sneakers from '../../img/sneakers.jpg';
import men from '../../img/men.jpg';
import women from '../../img/women.jpg';

export default class Directory extends Component {
    state={
        sections:[{
        title:'hats',
        imageUrl:hats,
        id:1,
        linkUrl:'shop/hats'
    },
    {
        title:'jackets',
        imageUrl:jackets,
        id:2,
        linkUrl:'shop/jackets'
    },
    {
        title:'sneakers',
        imageUrl:sneakers,
        id:3,
        linkUrl:'shop/sneakers'
    },
    {
        title:'mens',
        size:'large',
        imageUrl:men,
        id:4,
        linkUrl:'shop/mens'
    },
    {
        title:'womens',
        size:'large',
        imageUrl:women,
        id:5,
        linkUrl:'shop/womens'
    }]
    }
    render() {
        // console.log(this.state.sections);
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps})=>(
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }    
            </div>
        )
    }
}
