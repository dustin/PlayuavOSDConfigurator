import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import parameters from './parameters';
import pixler from '../pixler/reducer';

const rootReducer = combineReducers({
  parameters,
  pixler,
  routing
});

export default rootReducer;
