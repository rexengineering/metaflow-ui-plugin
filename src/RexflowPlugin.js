import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';
import CustomTheme from "./theme";
import App from "prism";

const PLUGIN_NAME = 'RexflowPlugin';
import reducers, { namespace } from './states';

export default class RexflowPlugin extends FlexPlugin {

  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, {store, updateConfig, workerClient, }) {
    const { dispatch } = store;
    this.registerReducers(store);
    updateConfig(CustomTheme);

    const options = { sortOrder: -1 };
    flex.AgentDesktopView
      .Panel2
      .Content
      .replace(<App dispatch={dispatch}/>, options);

    // Events from Twilio Flex app
    workerClient.on("reservationCreated", () => {});
    flex.Actions.addListener("afterAcceptTask", () => {});
    flex.Actions.addListener("afterCompleteTask", () => {});

  }

  registerReducers(store) {
    if (!store.addReducer) {
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }
    store.addReducer(namespace, reducers);
  }
}
