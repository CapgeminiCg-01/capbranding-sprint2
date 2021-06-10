import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import { AddressReducer } from "./AddressReducer";
import { CartReducer } from "./CartReducer";

const rootReducer = combineReducers({
  address: AddressReducer,
  cart : CartReducer,
  // depart : DepartRducer,
  //vechil: VechuileReucer
});

// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };