import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import reducers, { namespace } from './states';
import {Actions} from "./states/PluginState";
import getStore from "./store";
import {Provider} from "react-redux";
import AppContainer from "./containers/App/App.container";

const PLUGIN_NAME = 'RexflowPlugin';
const store = getStore({});

export default class RexflowPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    this.registerReducers(manager);

    const options = { sortOrder: -1 };
    flex.AgentDesktopView
      .Panel2
      .Content
      .replace( <Provider key="rexflow" store={store}>
          <AppContainer />
        </Provider>, options);

    manager.workerClient.on("reservationCreated", () => manager.store.dispatch(Actions.updateCallState("Incoming Call!")))
    flex.Actions.addListener("afterAcceptTask", () => manager.store.dispatch(Actions.updateCallState("Call Accepted!")));
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }
    manager.store.addReducer(namespace, reducers);
  }
}
