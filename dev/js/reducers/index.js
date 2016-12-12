import userReducer from './userReducer';
import activeUserReducer from './activeUserReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    users: userReducer,
    activeUser: activeUserReducer
});
    