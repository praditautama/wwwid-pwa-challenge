import { combineReducers } from 'redux';
import postList from '../modules/PostList/reducer';

const rootReducer = combineReducers({
  postList,
});

export default rootReducer;
