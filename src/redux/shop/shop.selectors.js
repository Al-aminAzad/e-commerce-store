import { createSelector } from "reselect";
const COLLECTION_ID_MAP ={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}
const shopSelector = state => state.shop;
export const selectCollections = createSelector(
    [shopSelector],
    shop =>shop.collections
)

export const selectCollectionPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)
export const selectCollection =collectionUrlParam =>
createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
)