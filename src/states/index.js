import { combineReducers } from 'redux';

import { reduce as CallComponentReducer } from './PluginState';

// Register your redux store under a unique namespace
export const namespace = 'rexflow-plugin';

// Combine the reducers
export default combineReducers({
  callComponent: CallComponentReducer
});
