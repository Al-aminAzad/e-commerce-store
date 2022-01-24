import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middleWares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middleWares));
const persistor = persistStore(store);
// eslint-disable-next-line import/no-anonymous-default-export
export { store, persistor };