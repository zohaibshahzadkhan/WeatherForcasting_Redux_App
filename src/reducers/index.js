import {combineReducers} from 'redux';
import weatherReducer from './reducer_weather'

const RootReducer=combineReducers( { 
   weather:weatherReducer
});

export default RootReducer;