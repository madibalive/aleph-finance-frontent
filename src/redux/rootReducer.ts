import { combineReducers } from 'redux';
import addresessReducer from './slices/address';
import portfolioReducer from './slices/portfolio';

const rootReducer = combineReducers({
  addresess: addresessReducer,
  portfolio: portfolioReducer,
});

export { rootReducer };
