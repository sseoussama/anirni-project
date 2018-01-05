import {combineReducers} from 'redux';
import userReducer from './userReducer';
import tokenReducer from './tokenReducer';
import { reducer as formReducer } from 'redux-form'
export default combineReducers(
{
   user:userReducer,
   token:tokenReducer,
   form:formReducer,
})