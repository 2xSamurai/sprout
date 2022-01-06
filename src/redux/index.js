import {combineReducers} from 'redux';
import {default as appReducer} from './app/index';

const reducer = combineReducers({
  app: appReducer,
});

export default reducer;
