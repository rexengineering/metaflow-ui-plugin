import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';
import rexFlowReducer, { namespace } from "./states";
import {Provider} from "react-redux";
import getStore from "./prism/src/store";
import { ThemeProvider } from "@material-ui/core/styles";
import buildTheme from "./prism/src/theme";
import App from "./prism/src/containers/App";
import {Button} from "@material-ui/core";
import {setIsFlexTaskActive} from "./prism/src/store/actions";

const PLUGIN_NAME = 'RexFlowPlugin';

export default class RexflowPlugin extends FlexPlugin {

  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, {store, workerClient}) {
    const { dispatch } = store;
    this.registerReducers(store);
    const rexFlowStore = getStore();
    const prismUITheme = buildTheme();
    const options = { sortOrder: -1 };
    flex.AgentDesktopView
      .Panel2
      .Content
        .replace(

              <ThemeProvider key="someRandKey" theme={prismUITheme}>
                <App>
                  <Button onClick={() => {
                    dispatch(setIsFlexTaskActive(false));
                    console.log("Dispatched");
                  }}> Send call </Button>
                </App>
              </ThemeProvider>

            , options);

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
    store.addReducer(namespace, rexFlowReducer);
  }
}
