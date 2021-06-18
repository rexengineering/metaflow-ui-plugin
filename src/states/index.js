import { combineReducers } from 'redux';

import { reduce as CallComponentReducer } from './PluginState';
import rexFlowReducer from "../store/reducers/rexflow";

// Register your redux store under a unique namespace
export const namespace = 'rexflow';

// Combine the reducers
export default rexFlowReducer;
