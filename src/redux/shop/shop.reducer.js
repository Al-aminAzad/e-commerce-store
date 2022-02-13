import SHOP_DATA from "../../pages/shop/shopData";

const INITIAL_SATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_SATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default shopReducer;