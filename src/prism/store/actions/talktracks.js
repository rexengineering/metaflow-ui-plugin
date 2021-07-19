export const talkTracksActionTypes = {
  SET_TALK_TRACKS: "SET_TALK_TRACKS",
  SET_IS_POST_TASK_MODAL_DISPLAYED: "SET_IS_POST_TASK_MODAL_DISPLAYED",
};

export const setTalkTracks = (talkTracks) => ({
  type: talkTracksActionTypes.SET_TALK_TRACKS,
  payload: { talkTracks },
});

export const setIsPostTaskModalDisplayed = (isDisplayed) => ({
  type: talkTracksActionTypes.SET_IS_POST_TASK_MODAL_DISPLAYED,
  payload: { isDisplayed },
});
