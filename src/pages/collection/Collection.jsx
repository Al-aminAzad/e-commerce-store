import React from 'react'
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss'

const Collection = ({collection}) =>  (
    <div className='collection-page'><h2>Category</h2></div>
)

const mapStateToProps = (state, ownProps) =>({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps) (Collection);
