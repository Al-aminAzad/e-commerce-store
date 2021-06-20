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
        id:1
    },
    {
        title:'jackets',
        imageUrl:jackets,
        id:2
    },
    {
        title:'sneakers',
        imageUrl:sneakers,
        id:3
    },
    {
        title:'men',
        size:'large',
        imageUrl:men,
        id:4
    },
    {
        title:'women',
        size:'large',
        imageUrl:women,
        id:5
    }]
    }
    render() {
        // console.log(this.state.sections);
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title,imageUrl,id,size})=>(
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }    
            </div>
        )
    }
}
