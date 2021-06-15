const CALL_STATE = 'CALL_STATE';

const initialState = {
  callState: null,
};

export class Actions {
  static updateCallState = (callState) => ({ type: CALL_STATE, callState });
}

export function reduce(state = initialState, {type, callState}) {
  switch (type) {
    case CALL_STATE: {
      return {
        ...state,
        callState,
      };
    }

    default:
      return state;
  }
}
