import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';
import rexFlowReducer, { namespace } from "./states";
import App from "./prism/src/containers/App/App.decorator";
import {setIsFlexTaskAccepted, setIsFlexTaskActive} from "./prism/src/store/actions";

const PLUGIN_NAME = 'RexFlowPlugin';

export default class RexFlowPlugin extends FlexPlugin {

  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, {store, workerClient}) {
    const { dispatch } = store;
    this.registerReducers(store);
    const options = { sortOrder: -1 };
    flex.AgentDesktopView
      .Panel2
      .Content
        .replace( <App key="someRandomKey" />, options);
    // Events from Twilio Flex app
    workerClient.on("reservationCreated", () => {});
    flex.Actions.addListener("afterAcceptTask", () => dispatch(setIsFlexTaskAccepted(true)));
    flex.Actions.addListener("afterCompleteTask", () => dispatch(setIsFlexTaskAccepted(false)));
    flex.Actions.addListener("afterHangupCall", () => dispatch(setIsFlexTaskActive(false)));

  }

  registerReducers(store) {
    if (!store.addReducer) {
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }
    store.addReducer(namespace, rexFlowReducer);
  }
}
