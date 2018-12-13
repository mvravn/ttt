import placePieceReducer from './placePieceReducer'
import pickIconReducer from './pickIconReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  place: placePieceReducer,
  pickIcon: pickIconReducer
});

export default rootReducer