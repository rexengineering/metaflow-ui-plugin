import { combineReducers } from "redux";
import rexFlowReducer from "./rexflow";
import talkTracksReducer from "./talktracks";

export const namespace = "prismUI";

export const rootReducer = combineReducers({
  rexFlow: rexFlowReducer,
  talkTracks: talkTracksReducer,
});