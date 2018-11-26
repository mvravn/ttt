import placePieceReducer from './placePieceReducer'
import pickIconReducer from './pickIconReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  place: placePieceReducer,
  icon: pickIconReducer
});

export default rootReducer