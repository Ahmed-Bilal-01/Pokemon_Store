import {combineReducers} from 'redux';
import CartReducer from './CartReducer';
import BottomTabReducer from './BottomTabReducer';

const rootReducer = combineReducers({
  cart: CartReducer,
  tab: BottomTabReducer,
});

export default rootReducer;
