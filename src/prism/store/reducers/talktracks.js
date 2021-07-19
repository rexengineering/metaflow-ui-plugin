import { talkTracksActionTypes } from "../actions/talktracks";


const INITIAL_STATE = {
  talkTracks: null,
  isPostTaskModalDisplayed: false,
};

const talkTracksReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case talkTracksActionTypes.SET_TALK_TRACKS: {
      const { talkTracks } = payload;
      return {
        ...state,
        talkTracks
      };
    }
    case 'CALL_STATE': {
      debugger
      const { isDisplayed } = payload;
      return {
        ...state,
        isPostTaskModalDisplayed: isDisplayed
      };
    }
    default:
      return state;
  }
};

export default talkTracksReducer;
